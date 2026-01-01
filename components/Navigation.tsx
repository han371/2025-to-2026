import React from 'react';
import { Home, TrendingUp, Cpu, Calendar } from 'lucide-react';

const Navigation: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 glass-panel px-6 py-3 rounded-full flex gap-8 items-center border border-white/10">
      <button onClick={() => scrollTo('hero')} className="text-gray-400 hover:text-white transition-colors group relative">
        <Home size={20} />
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs bg-black/80 border border-white/10 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-md">首页</span>
      </button>
      <button onClick={() => scrollTo('timeline')} className="text-gray-400 hover:text-white transition-colors group relative">
        <TrendingUp size={20} />
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs bg-black/80 border border-white/10 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-md">历程</span>
      </button>
      <button onClick={() => scrollTo('insights')} className="text-gray-400 hover:text-white transition-colors group relative">
        <Cpu size={20} />
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs bg-black/80 border border-white/10 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-md">复盘</span>
      </button>
      <button onClick={() => scrollTo('future')} className="text-gray-400 hover:text-white transition-colors group relative">
        <Calendar size={20} />
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs bg-black/80 border border-white/10 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-md">展望</span>
      </button>
    </nav>
  );
};

export default Navigation;
