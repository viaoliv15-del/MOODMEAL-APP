import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Headset, X, Send, User, Bot } from 'lucide-react';
import { cn } from '../../lib/utils';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: '1',
      text: 'Halo! Saya asisten MoodMeal. Ada yang bisa saya bantu hari ini?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = React.useState('');
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Terima kasih atas pesan Anda! Tim kami akan segera menghubungi Anda kembali.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-black p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-brand-primary p-2 rounded-xl">
                  <Headset size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Layanan Pelanggan</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-6 space-y-4 bg-slate-50/50"
            >
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={cn(
                    "flex gap-3 max-w-[85%]",
                    msg.sender === 'user' ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-sm",
                    msg.sender === 'user' ? "bg-black text-white" : "bg-brand-primary text-white"
                  )}>
                    {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={cn(
                    "p-4 rounded-2xl text-sm leading-relaxed",
                    msg.sender === 'user' 
                      ? "bg-brand-primary text-white rounded-tr-none" 
                      : "bg-white text-slate-700 border border-slate-100 rounded-tl-none shadow-sm"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
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
                placeholder="Tulis pesan..."
                className="flex-grow px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm"
              />
              <button 
                type="submit"
                disabled={!input.trim()}
                className="p-3 bg-black text-white rounded-xl hover:bg-brand-primary transition-colors disabled:opacity-50 disabled:hover:bg-black"
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
          "w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group relative",
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
