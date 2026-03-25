import { ArrowLeft, Heart, Video, Download, MessageCircle, Share2, User, Phone, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEditor } from '../../context/EditorContext';

const PosterDetail = ({ template, onEdit, onClose }) => {
  const { userData } = useEditor();

  return (
    <motion.div 
      className="fixed inset-0 bg-white z-[2000] flex flex-col"
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
    >
      <div className="bg-[#b91c1c] p-3 px-4 flex items-center gap-4 text-white">
        <button className="bg-transparent text-white p-0 flex items-center active:scale-95 transition-transform" onClick={onClose}>
          <ArrowLeft size={24} />
        </button>
        <div className="flex-1 flex items-center gap-2 overflow-hidden">
          <h3 className="text-[1.1rem] font-bold truncate">{template.category || 'Ramadan Mubarak Status'} 🌙</h3>
          <span className="text-[0.95rem] opacity-80">(21)</span>
        </div>
        <button className="bg-[#fde047] text-[#854d0e] px-3 py-1 rounded-sm text-[0.75rem] font-extrabold active:scale-95 transition-transform shadow-sm">
          UPGRADE
        </button>
      </div>

      <div className="bg-[#fff7ed] text-[#c2410c] p-2.5 px-4 text-center text-[0.85rem] font-semibold border-b border-[#ffedd5]">
         This category has premium posters. <strong className="cursor-pointer underline">Upgrade</strong>
      </div>

      <div className="flex-1 bg-[#f1f5f9] flex items-center justify-center p-5">
        <div className="relative w-full max-w-[400px] rounded-sm overflow-hidden shadow-2xl">
          <img src={template.image} alt={template.title} className="w-full block" />
          
          {/* Dynamic Branding Overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-[5] pointer-events-none">
            <div className="bg-white p-2 px-3 flex items-center gap-2.5">
              <div className="w-11 h-11 bg-[#f8fafc] rounded-full overflow-hidden border border-[#f1f5f9] flex items-center justify-center">
                <img src={userData.logo} alt="logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1">
                <div className="text-[0.85rem] font-extrabold text-[#1e293b] leading-tight">{userData.business_name}</div>
                <div className="flex gap-3 text-[0.65rem] font-semibold text-[#64748b] mt-0.5">
                  <span className="flex items-center gap-1"><Phone size={10} fill="currentColor" /> {userData.phone_number}</span>
                  {userData.website && <span className="flex items-center gap-1"><Globe size={10} fill="currentColor" /> {userData.website}</span>}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-20 right-5 bg-white/95 rounded-xl p-2.5 flex flex-col items-center gap-1 text-[0.7rem] text-[#1e293b] border border-[#e2e8f0] shadow-xl cursor-pointer hover:bg-white transition-colors active:scale-95" onClick={() => onEdit(template)}>
            <div className="w-11 h-11 bg-[#e2e8f0] rounded-full relative flex items-center justify-center text-[#64748b]">
               <User size={20} />
               <span className="absolute bottom-1 text-[4px] font-extrabold text-center w-full pb-1">YOUR PHOTO HERE</span>
            </div>
            <span className="text-center">Click on <strong className="text-primary">Edit Poster</strong></span>
          </div>

          <div className="absolute bottom-20 left-5 bg-black/60 text-white px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-[0.85rem] backdrop-blur-sm">
            <Heart size={14} fill="white" />
            <span>244</span>
          </div>
        </div>
      </div>

      <div className="p-6 px-4 pb-10 bg-white flex flex-col gap-5">
        <button className="w-full bg-white border-2 border-[#4f46e5] text-[#4f46e5] p-3.5 rounded-xl text-lg font-bold shadow-sm active:bg-[#4f46e5]/5 transition-colors" onClick={() => onEdit(template)}>
          Edit Poster
        </button>
        
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center gap-1.5 text-[0.75rem] text-[#64748b] font-medium cursor-pointer active:scale-95 transition-transform">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#f1f5f9] text-[#ec4899]"><Video size={20} /></div>
            <span>Video</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-[0.75rem] text-[#64748b] font-medium cursor-pointer active:scale-95 transition-transform">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#f1f5f9] text-[#64748b]"><Download size={20} /></div>
            <span>Download</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-[0.75rem] text-[#64748b] font-medium cursor-pointer active:scale-95 transition-transform">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#f1f5f9] text-[#22c55e]"><MessageCircle size={20} /></div>
            <span>Whatsapp</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-[0.75rem] text-[#64748b] font-medium cursor-pointer active:scale-95 transition-transform">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#f1f5f9] text-[#3b82f6]"><Share2 size={20} /></div>
            <span>Share</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PosterDetail;
