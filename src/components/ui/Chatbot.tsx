import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Headset, X, Send, User, Bot, ExternalLink } from 'lucide-react';
import { cn } from '../../lib/utils';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  sources?: { title: string; uri: string }[];
}

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: '1',
      text: 'Halo Bunda! Saya asisten gizi MoodMeal. Ada yang bisa saya bantu terkait kebutuhan nutrisi, resep masakan, dan tips menjaga kesehatan janin hari ini?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userText = input.trim();
    const userMsg: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      // Format history to send to backend helper
      const chatHistory = messages.map(msg => ({
        sender: msg.sender,
        text: msg.text
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: userText,
          history: chatHistory
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: data.text,
        sender: 'bot',
        timestamp: new Date(),
        sources: data.sources
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error('Error communicating with Chatbot backend:', error);
      
      // Graceful clinical-style fallback warning
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Aduh Bunda, sepertinya koneksi asistan AI sedang sibuk memproses asupan gizi sehat. \n\nPastikan nutrisi harian Bunda seperti **Zat Besi**, **Kalsium**, dan **Protein** terpenuhi hari ini ya. Silakan coba kirim kembali pesan Bunda!',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  // Human-craft Indonesian bold & bullet-point formatting helper
  const formatMessageText = (text: string) => {
    if (!text) return '';
    
    // Split message by lines to manage list rendering
    const lines = text.split('\n');
    return lines.map((line, lineIdx) => {
      // Direct detection of bullet point markers
      const isBullet = line.trim().startsWith('-') || line.trim().startsWith('*');
      
      const cleanLine = isBullet 
        ? line.trim().replace(/^[-*]\s*/, '') 
        : line;

      // Tokenize for bold matching
      const parts = cleanLine.split(/(\*\*.*?\*\*)/g);
      const renderedContent = parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="font-bold text-slate-900 border-b border-brand-primary/10">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      if (isBullet) {
        return (
          <li key={lineIdx} className="ml-4 list-disc pl-1 mb-1.5 text-slate-700 text-sm leading-relaxed">
            {renderedContent}
          </li>
        );
      }

      // Skip rendering empty divider lines to keep layout clean
      if (line.trim() === '' && lineIdx > 0) {
        return <div key={lineIdx} className="h-2" />;
      }

      return (
        <p key={lineIdx} className={cn("text-slate-700 text-sm leading-relaxed", lineIdx > 0 ? "mt-1.5" : "")}>
          {renderedContent}
        </p>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[350px] sm:w-[420px] h-[550px] bg-white rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-black p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-brand-primary p-2.5 rounded-xl text-white">
                  <Bot size={22} className="animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">Asisten Nutrisi Bumil</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping absolute" />
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest pl-1">Gemini AI Aktif</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-6 space-y-5 bg-slate-50/50"
            >
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={cn(
                    "flex gap-3 max-w-[88%]",
                    msg.sender === 'user' ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-md transition-all",
                    msg.sender === 'user' ? "bg-black text-white" : "bg-brand-primary text-white"
                  )}>
                    {msg.sender === 'user' ? <User size={15} /> : <Bot size={15} />}
                  </div>
                  <div className={cn(
                    "p-4 rounded-2xl shadow-sm border text-sm leading-relaxed transition-all",
                    msg.sender === 'user' 
                      ? "bg-brand-primary text-white border-transparent rounded-tr-none" 
                      : "bg-white text-slate-800 border-slate-100 rounded-tl-none"
                  )}>
                    {msg.sender === 'user' ? (
                      <p className="text-white text-sm">{msg.text}</p>
                    ) : (
                      <div className="space-y-1">
                        {formatMessageText(msg.text)}
                      </div>
                    )}

                    {/* Sources / Grounding Information Linkages */}
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-col gap-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Sumber Medis Terpercaya:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {msg.sources.map((src, idx) => (
                            <a
                              key={idx}
                              href={src.uri}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-brand-primary hover:text-brand-primary/80 transition-colors bg-brand-primary/5 hover:bg-brand-primary/10 border border-brand-primary/10 px-2.5 py-1 rounded-xl flex items-center gap-1 max-w-full"
                            >
                              <span className="truncate max-w-[150px] font-medium">{src.title}</span>
                              <ExternalLink size={10} className="shrink-0" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Bot thinking placeholder */}
              {isTyping && (
                <div className="flex gap-3 max-w-[85%]">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-md bg-brand-primary text-white">
                    <Bot size={15} />
                  </div>
                  <div className="p-4 rounded-2xl text-sm bg-white text-slate-400 border border-slate-100 rounded-tl-none shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-brand-primary/30 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-brand-primary/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    <span className="text-xs text-slate-400 ml-1">Menganalisis gizi Bunda...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form 
              onSubmit={handleSend}
              className="p-4 bg-white border-t border-slate-100 flex gap-2"
            >
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tanya gizi, resep, atau anti-mual..."
                className="flex-grow px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm placeholder:text-slate-400 text-slate-800"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-3 bg-black text-white rounded-xl hover:bg-brand-primary transition-colors disabled:opacity-50 disabled:hover:bg-black cursor-pointer shrink-0"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group relative cursor-pointer",
          isOpen ? "bg-black" : "bg-brand-primary"
        )}
      >
        {isOpen ? <X size={28} /> : <Headset size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-black border-2 border-white rounded-full flex items-center justify-center text-[10px] font-bold">
            1
          </span>
        )}
      </button>
    </div>
  );
}
