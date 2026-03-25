import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { TEMPLATES } from '../utils/mockData';
import HorizontalScrollList from '../components/common/HorizontalScrollList';
import TemplateCard from '../components/posters/TemplateCard';
import SectionHeader from '../components/common/SectionHeader';
import SearchBar from '../components/common/SearchBar';
import { useEditor } from '../context/EditorContext';

const Trending = () => {
  const { openDetail } = useEditor();
  const [activeCategory, setActiveCategory] = useState('Trending');
  
  const categoryChips = [
    'My Designs', 'Trending', 'Chaitra Navratri', 'Ramzan', 
    'Religious', 'Hindu Nav Varsh', 'View More'
  ];

  const sections = [
    { title: "Today's Special - 17 Mar (13)", items: TEMPLATES.slice(0, 6) },
    { title: "Business Cards (45)", items: TEMPLATES.filter(t => t.category === 'Business Card') },
    { title: "Good Night - शुभ रात्रि (24)", items: TEMPLATES.filter(t => t.category === 'Good Night') },
    { title: "Suvichar & Motivational (427)", items: TEMPLATES.filter(t => t.category === 'Motivational Quotes') },
    { title: "Whatsapp Status - शुभ मंगलवार (42)", items: TEMPLATES.filter(t => t.category === 'Good Morning').slice(0, 6) },
    { title: "Masik Shivratri (24)", items: TEMPLATES.slice(5, 11) }
  ];

  return (
    <div className="bg-bg">
      {/* Sticky Header (Search + Categories) */}
      <div className="sticky top-0 z-[10] shadow-sm">
        {/* Search Bar */}
        <div className="p-3 px-4 bg-white">
          <SearchBar 
            placeholder="Search Posters" 
            value=""
            onChange={(val) => console.log('Search:', val)}
          />
        </div>

        {/* Category Chips */}
        <div className="flex gap-2 px-4 py-3 overflow-x-auto bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-b border-border">
           {categoryChips.map((cat, idx) => (
             <button 
               key={idx} 
               className={`px-3.5 py-1.5 rounded-full border whitespace-nowrap text-[0.8rem] font-bold transition-colors ${activeCategory === cat ? 'bg-[#1e1e1e] text-white border-[#1e1e1e]' : 'bg-white text-[#475569] border-[#e2e8f0]'}`}
               onClick={() => setActiveCategory(cat)}
             >
               {cat === 'Hindu Nav Varsh' ? <>{cat} 🚩</> : cat}
             </button>
           ))}
        </div>
      </div>

      {/* AI Profile Banner */}
      <div className="m-4 bg-[#4d7c0f] rounded-xl p-4 flex justify-between items-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-[0.95rem] font-bold mb-3 max-w-[160px] leading-relaxed">Get studio-quality AI profile photo</h2>
          <button className="bg-white text-[#4d7c0f] px-3 py-1.5 rounded-full text-[0.75rem] font-extrabold flex items-center gap-1 shadow-sm active:scale-95 transition-transform">
             Make Profile Photo <ArrowRight size={14} />
          </button>
        </div>
        <div className="flex items-center relative">
          <div className="flex -space-x-3 mr-2">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" className="w-[32px] h-[42px] object-cover border-[1.5px] border-white rounded-sm shadow-sm" alt="AI 1" />
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" className="w-[32px] h-[42px] object-cover border-[1.5px] border-white rounded-sm shadow-sm" alt="AI 2" />
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop" className="w-[32px] h-[42px] object-cover border-[1.5px] border-white rounded-sm shadow-sm" alt="AI 3" />
          </div>
          <button className="absolute -top-6 -right-2 bg-black/20 text-white w-5 h-5 rounded-full flex items-center justify-center text-sm border-none leading-none">×</button>
        </div>
      </div>

      {/* Feed Sections */}
      <div className="flex flex-col gap-2">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white py-4">
            <SectionHeader 
               title={section.title} 
               showViewAll={true} 
            />
            <HorizontalScrollList>
              {section.items.map(tpl => (
                <TemplateCard 
                  key={tpl.id} 
                  template={tpl} 
                  variant="compact" 
                  onClick={() => openDetail(tpl)} 
                />
              ))}
            </HorizontalScrollList>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
