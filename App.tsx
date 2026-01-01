import React, { useState, useRef } from 'react';
import { CheckCircle2, AlertTriangle, Zap, Target, Award, Brain, Rocket, Image as ImageIcon, ChevronRight, Plus, Upload, X, Trash2 } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import Section from './components/Section';
import Navigation from './components/Navigation';
import { TIMELINE_DATA, INSIGHTS_DATA, GROWTH_METRICS, PLAN_2026 } from './constants';
import { TimelineItem } from './types';

function App() {
  // Reusable gradient text style for section headers
  const gradientHeaderClass = "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white";

  // State to manage timeline data for photo updates
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>(TIMELINE_DATA);
  
  // Refs for file input
  const fileInputRef = useRef<HTMLInputElement>(null);
  const activeUploadRef = useRef<{ tIdx: number; pIdx: number } | null>(null);

  // Handle clicking a photo slot
  const handleSlotClick = (tIdx: number, pIdx: number) => {
    activeUploadRef.current = { tIdx, pIdx };
    fileInputRef.current?.click();
  };

  // Handle removing a photo
  const handleRemovePhoto = (e: React.MouseEvent, tIdx: number, pIdx: number) => {
    e.stopPropagation(); // Prevent triggering click on parent div
    setTimelineItems(prev => {
      const newItems = [...prev];
      const newPhotos = [...(newItems[tIdx].photos || [])];
      newPhotos[pIdx] = "";
      newItems[tIdx] = { ...newItems[tIdx], photos: newPhotos };
      return newItems;
    });
  };

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !activeUploadRef.current) return;

    const { tIdx, pIdx } = activeUploadRef.current;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setTimelineItems(prev => {
        const newItems = [...prev];
        const newPhotos = [...(newItems[tIdx].photos || [])];
        newPhotos[pIdx] = result;
        newItems[tIdx] = { ...newItems[tIdx], photos: newPhotos };
        return newItems;
      });
    };
    reader.readAsDataURL(file);

    // Reset input to allow selecting the same file again if needed
    event.target.value = '';
  };

  return (
    <div className="relative min-h-screen font-sans text-gray-200 selection:bg-blue-500/30">
      <ParticleBackground />
      <Navigation />
      
      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        className="hidden" 
        accept="image/png, image/jpeg, image/jpg, image/webp"
      />

      <main className="container mx-auto px-4 pb-32">
        {/* HERO SECTION */}
        <section id="hero" className="min-h-screen flex flex-col justify-center items-start pt-20">
          <Section className="space-y-6 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              2025 年度个人报告
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600">从零起步</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">进阶金牌讲师</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-400 font-light border-l-2 border-blue-500 pl-6 max-w-2xl">
              <p>
                Teacher Jiacong 的2025年：从义乌新人到墨西哥TK电商专家的蜕变之路。
                一段关于沉浸、突破与AI技术创新的旅程。
              </p>
            </div>

            <div className="flex gap-4 pt-8 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
              {GROWTH_METRICS.map((stat, idx) => (
                <div key={idx} className="glass-panel p-4 rounded-xl min-w-[140px] hover:border-blue-500/50 transition-colors cursor-default border border-white/5 bg-black/20">
                  <div className="text-gray-500 text-xs font-mono mb-1">{stat.label}</div>
                  <div className="text-2xl font-bold text-white font-mono">{stat.value}</div>
                  <div className="text-emerald-400 text-xs mt-1 font-mono tracking-tight">{stat.trend}</div>
                </div>
              ))}
            </div>
          </Section>
        </section>

        {/* TIMELINE SECTION */}
        <section id="timeline" className="py-20">
          <Section>
            <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                 <Zap className="text-blue-400 w-8 h-8" />
              </div>
              <span className={gradientHeaderClass}>2025 成长里程碑</span>
            </h2>
          </Section>

          <div className="relative border-l border-gray-800 ml-4 md:ml-10 space-y-20">
            {timelineItems.map((item, index) => (
              <Section key={index} delay={index * 100} className="relative pl-8 md:pl-16">
                {/* Timeline Dot */}
                <div className={`absolute -left-[6px] top-8 w-3.5 h-3.5 rounded-full border-2 transition-all duration-500 ${item.highlight ? 'bg-blue-500 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] scale-125' : 'bg-black border-gray-600'}`}></div>
                
                <div className={`glass-panel p-1 rounded-3xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] ${item.highlight ? 'border-blue-500/40 bg-blue-500/5' : ''}`}>
                    <div className="bg-black/40 rounded-[22px] p-6 md:p-8 backdrop-blur-sm">
                        
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
                            <span className="font-mono text-blue-400 text-lg tracking-widest font-bold flex items-center gap-2">
                                {item.month}
                                <div className="h-px w-8 bg-blue-500/30"></div>
                            </span>
                            <div className="flex gap-2 flex-wrap">
                            {item.tags.map(tag => (
                                <span key={tag} className="text-[11px] uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full text-blue-200 border border-blue-500/20 shadow-sm">{tag}</span>
                            ))}
                            </div>
                        </div>
                        
                        {/* Title & Description */}
                        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors tracking-tight">
                            {item.title}
                        </h3>
                        
                        <p className="text-gray-400 leading-relaxed text-lg mb-6">
                            {item.description}
                        </p>

                        {/* Rich Details */}
                        {item.details && (
                            <div className="mb-8 space-y-2">
                                {item.details.map((detail, dIdx) => (
                                    <div key={dIdx} className="flex items-start gap-3 text-gray-300">
                                        <ChevronRight size={16} className="mt-1.5 text-blue-500/50 shrink-0" />
                                        <span className="font-light">{detail}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Photo Grid - Interactive */}
                        <div className="mt-8 border-t border-white/5 pt-6">
                            <div className="text-xs font-mono text-gray-500 mb-4 flex items-center gap-2 uppercase tracking-widest">
                                <ImageIcon size={14} className="text-blue-400" />
                                <span>年度瞬间 · Gallery (Click to Upload)</span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {item.photos?.map((photoUrl, pIdx) => (
                                    <div 
                                      key={pIdx} 
                                      onClick={() => handleSlotClick(index, pIdx)}
                                      className={`group/photo relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                                        photoUrl 
                                          ? 'bg-black border border-white/10' 
                                          : 'bg-white/5 border border-dashed border-white/20 hover:border-blue-500/50 hover:bg-blue-500/10'
                                      }`}
                                    >
                                        {photoUrl ? (
                                            <>
                                              <img src={photoUrl} alt={`Moment ${pIdx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover/photo:scale-110" />
                                              
                                              {/* Hover Overlay for Replace */}
                                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/photo:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-2 backdrop-blur-[2px]">
                                                 <Upload size={20} className="text-blue-400" />
                                                 <span className="text-xs font-mono">Replace</span>
                                              </div>

                                              {/* Remove Button */}
                                              <button 
                                                onClick={(e) => handleRemovePhoto(e, index, pIdx)}
                                                className="absolute top-2 right-2 p-1.5 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white opacity-0 group-hover/photo:opacity-100 transition-all transform scale-90 hover:scale-100 z-10 backdrop-blur-md"
                                              >
                                                <Trash2 size={14} />
                                              </button>
                                            </>
                                        ) : (
                                            <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 group-hover/photo:text-blue-400 transition-colors gap-2">
                                                <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover/photo:scale-110 transition-transform duration-300 bg-black/20">
                                                    <Plus size={18} />
                                                </div>
                                                <span className="text-[10px] font-mono uppercase tracking-widest opacity-70 group-hover/photo:opacity-100">Upload</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
              </Section>
            ))}
          </div>
        </section>

        {/* INSIGHTS / ANALYSIS SECTION */}
        <section id="insights" className="py-20">
          <Section>
            <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                 <Brain className="text-purple-400 w-8 h-8" />
              </div>
              <span className={gradientHeaderClass}>核心复盘与洞察</span>
            </h2>
          </Section>

          <div className="grid md:grid-cols-2 gap-8">
            {INSIGHTS_DATA.map((insight, idx) => (
              <Section key={idx} delay={idx * 200} className="h-full">
                <div className={`h-full glass-panel p-8 rounded-3xl border-t-4 transition-transform duration-300 hover:-translate-y-1 ${insight.category === 'success' ? 'border-t-emerald-500 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)]' : 'border-t-amber-500 hover:shadow-[0_10px_30px_rgba(245,158,11,0.1)]'}`}>
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
                    {insight.category === 'success' ? <Award className="text-emerald-500 w-6 h-6" /> : <AlertTriangle className="text-amber-500 w-6 h-6" />}
                    <h3 className="text-2xl font-bold text-white tracking-wide">{insight.title}</h3>
                  </div>
                  <ul className="space-y-6">
                    {insight.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-4 text-gray-300">
                        <CheckCircle2 size={20} className={`mt-0.5 flex-shrink-0 ${insight.category === 'success' ? 'text-emerald-500' : 'text-amber-500'}`} />
                        <span className="font-light leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Section>
            ))}
          </div>
        </section>

        {/* GROWTH SUMMARY */}
        <section className="py-10">
            <Section>
                <div className="relative overflow-hidden glass-panel p-10 md:p-14 rounded-[2rem] border border-blue-500/20 text-center group">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
                   
                   <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-10 text-white flex items-center justify-center gap-3">
                            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                            个人成长蜕变
                            <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="space-y-3">
                                <div className="text-blue-400 font-mono text-xs tracking-widest uppercase">Capability</div>
                                <div className="text-white text-xl font-bold">"执行者" → "战略家"</div>
                                <div className="text-gray-400 text-sm font-light">从单一技能到设计、教学、销售全能</div>
                            </div>
                            <div className="space-y-3">
                                <div className="text-purple-400 font-mono text-xs tracking-widest uppercase">Mindset</div>
                                <div className="text-white text-xl font-bold">"学徒" → "合伙人"</div>
                                <div className="text-gray-400 text-sm font-light">从被动接收到主动负责与结果导向</div>
                            </div>
                            <div className="space-y-3">
                                <div className="text-pink-400 font-mono text-xs tracking-widest uppercase">Cognition</div>
                                <div className="text-white text-xl font-bold">"推销" → "信任"</div>
                                <div className="text-gray-400 text-sm font-light">从硬性推销到价值优先的顾问式服务</div>
                            </div>
                        </div>
                   </div>
                </div>
            </Section>
        </section>

        {/* FUTURE 2026 SECTION */}
        <section id="future" className="py-20">
          <Section>
            <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                 <Rocket className="text-red-400 w-8 h-8" />
              </div>
              <span className={gradientHeaderClass}>2026 展望与规划</span>
            </h2>
          </Section>

          <div className="grid md:grid-cols-2 gap-8">
             {PLAN_2026.map((plan, idx) => (
                 <Section key={idx} delay={idx * 200}>
                     <div className="group relative overflow-hidden rounded-[2rem] glass-panel h-full border border-white/5 transition-all hover:border-blue-500/30">
                         <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-blue-500/10"></div>
                         
                         <div className="p-10 relative z-10">
                            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                                <Target className="w-6 h-6 text-blue-400" />
                                {plan.area}
                            </h3>
                            <div className="space-y-6">
                                {plan.goals.map((goal, gIdx) => (
                                    <div key={gIdx} className="flex gap-5">
                                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs font-mono text-blue-400 border border-white/10 shrink-0 shadow-inner">
                                            0{gIdx + 1}
                                        </div>
                                        <p className="text-gray-300 font-light pt-1 leading-relaxed group-hover:text-gray-100 transition-colors">{goal}</p>
                                    </div>
                                ))}
                            </div>
                         </div>
                     </div>
                 </Section>
             ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-20 pb-10 border-t border-white/5 mt-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h4 className="font-bold text-2xl text-white tracking-tight">Teacher Jiacong</h4>
                    <p className="text-gray-500 text-sm mt-2">墨西哥TK实战讲师 | AI电商探索者</p>
                </div>
                <div className="text-right">
                     <p className="text-gray-600 text-sm italic">"扎根生长，突破边界。"</p>
                     <p className="text-gray-700 text-xs mt-2 font-mono">义乌 → 深圳 • 2026</p>
                </div>
            </div>
        </footer>

      </main>
    </div>
  );
}

export default App;