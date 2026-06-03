import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser
  app.use(express.json());

  // Local expert system fallback patterns
  const fallbackResponses = [
    {
      pattern: /menu|resepi|makan|recipe|food|nutrisi|gizi/i,
      response: "Bunda, untuk menjaga stamina dan asupan gizi si kecil, pilihlah hidangan sehat seperti **Brown Rice Creamy Mushroom Risotto** yang mencegah diabetes gestasional, atau **Salmon Panggang** yang kaya DHA untuk perkembangan otak janin. Bunda juga bisa menjelajahi Menu Sehat di aplikasi ini untuk melihat detail gizi harian!"
    },
    {
      pattern: /mual|muntah|pusing|morning sickness|sakit/i,
      response: "Mual di awal kehamilan sangat wajar terjadi karena hormon progesteron, Bunda. Cobalah mengonsumsi bumbu hangat seperti jahe (contohnya pada **Sup Ayam Kampung Ginseng & Jahe**), makan porsi kecil tapi sering, dan hindari makanan berminyak jenuh."
    },
    {
      pattern: /stres|cemas|lelah|istirahat|tidur/i,
      response: "Perubahan hormon bisa membuat Bunda merasa lelah atau stres. Sereal gandum **Oatmeal Almond Butter** kaya akan magnesium alami yang sangat baik merilekskan otot tegang dan memicu kualitas tidur nyenyak. Jangan ragu luangkan waktu meditasi sejenak ya, Bun."
    },
    {
      pattern: /hallo|halo|hi|hey|pagi|siang|malam/i,
      response: "Halo Bunda! Saya asisten MoodMeal. Ada yang bisa saya bantu terkait kebutuhan nutrisi, resep masakan, dan tips kehamilan sehat hari ini?"
    }
  ];

  function getLocalSmartResponse(userText: string): string {
    const matched = fallbackResponses.find(item => item.pattern.test(userText));
    if (matched) return matched.response;
    return `Halo Bunda! Pertanyaan Bunda sangat berharga. \n\nSebagai asisten gizi kehamilan MoodMeal, saya sangat menyarankan Bunda mencukupi asupan Asam Folat harian (minimal 400 mcg) melalui sayuran hijau seperti Bayam sehat, brokoli, serta protein hewani matang sempurna demi proteksi saraf bayi. Hindari makanan mentah atau kurang matang demi melindunginya dari infeksi bakteri listeria ya, Bun!`;
  }

  // API custom routes FIRST
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
         res.status(400).json({ error: 'Message is required' });
         return;
      }

      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        console.warn('Warning: GEMINI_API_KEY is not defined in the environment. Using local expert system fallback.');
        const reply = getLocalSmartResponse(message);
        res.json({ text: reply, sources: [] });
        return;
      }

      // Initialize Gemini
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      // Prepare conversation history
      const contents = (history || []).map((h: any) => ({
        role: h.sender === 'user' ? 'user' : 'model',
        parts: [{ text: h.text }]
      }));

      // Append current message
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      // Generate content with system instruction and search grounding
      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: contents,
        config: {
          systemInstruction: `Anda adalah 'MoodMeal Bumil Assistant', asisten nutrisi dan kuliner pintar, empatis, dan hangat khusus untuk ibu hamil (Bunda) di Indonesia. Tugas Anda adalah membantu menjawab kegundahan Bunda tentang asupan nutrisi hamil, resep masakan sehat antimual, cara memasak steril, dan tips kesehatan kehamilan berdasarkan aneka suasana hati (mood) mereka.

Gunakan bahasa Indonesia yang ramah, hangat, penuh perhatian, dan menenangkan (selalu sapa dengan panggilan "Bunda" dan gunakan sebutan "saya" atau "Asisten MoodMeal"). Hubungkan masukan dengan rekomendasi resep sehat kami: seperti Quinoa Power Bowl (folat tinggi), Brown Rice Risotto (rendah gula darah), Salmon Panggang Welldone (DHA + mual reduksi), Sup Ayam Kampung Ginseng Jahe Merah (stamina), dan menu lainnya. Berikan tips higienitas makanan ibu hamil yang klinis/teliti (bebas kuman, telur well-done, tidak mentah). Berikan jawaban yang terstruktur dengan poin-poin yang mudah dibaca.`,
          tools: [{ googleSearch: {} }]
        }
      });

      const replyText = response.text || "Maaf Bunda, saya tidak bisa menemukan jawaban yang tepat. Silakan coba tanyakan asupan nutrisi lainnya ya.";
      
      // Extract grounding sources
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      const sources = chunks ? chunks.map((chunk: any) => ({
        title: chunk.web?.title || 'Sumber Informasi',
        uri: chunk.web?.uri || '#'
      })).filter((s: any) => s.uri && s.uri !== '#') : [];

      res.json({ text: replyText, sources });
    } catch (error: any) {
      console.error('Error in /api/chat:', error);
      res.status(500).json({ 
        error: 'Terdapat kendala teknis pada asisten AI. Menggunakan bantuan lokal...', 
        text: getLocalSmartResponse(req.body.message || '') 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
