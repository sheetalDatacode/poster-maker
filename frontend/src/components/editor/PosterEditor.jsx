import React, { useState } from 'react';
import { 
  Type, X, Check, ImageIcon as ImageIcon, 
  User, Star, Smile, Plus
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useEditor } from '../../context/EditorContext';

const PosterEditor = ({ template, onClose }) => {
  const { userData, setUserData } = useEditor();
  const [activeTab, setActiveTab] = useState('branding');
  
  // Local state for edits before "Okay"
  const [localUserData, setLocalUserData] = useState({...userData});

  const handleApplyEdits = () => {
    setUserData(localUserData);
    onClose(); // Hide modal
  };

  const updateLocalField = (field, value) => {
    setLocalUserData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-[3000]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[24px] flex flex-col h-[95vh]"
        initial={{ y: '101%' }}
        animate={{ y: 0 }}
        exit={{ y: '101%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        <div className="p-3.5 px-4 flex justify-between items-center border-b border-[#f1f5f9]">
          <button className="bg-transparent font-bold text-[#64748b] border-none active:scale-95 transition-transform" onClick={onClose}><X size={24} /></button>
          <div className="text-[1.1rem] font-bold text-[#1e293b]">Edit Poster</div>
          <button className="bg-transparent font-bold text-error border-none active:scale-95 transition-transform" onClick={handleApplyEdits}><Check size={24} /></button>
        </div>

        <div className="flex border-b border-[#f1f5f9]">
           <button 
             className={`flex-1 p-3.5 bg-transparent text-[1rem] font-bold flex items-center justify-center gap-2 relative border-none ${activeTab === 'text' ? 'text-error' : 'text-[#94a3b8]'}`}
             onClick={() => setActiveTab('text')}
           >
             <Type size={18} /> Text
             {activeTab === 'text' && <div className="absolute bottom-0 left-[15%] right-[15%] h-[3px] bg-error rounded-t-sm" />}
           </button>
           <button 
             className={`flex-1 p-3.5 bg-transparent text-[1rem] font-bold flex items-center justify-center gap-2 relative border-none ${activeTab === 'branding' ? 'text-error' : 'text-[#94a3b8]'}`}
             onClick={() => setActiveTab('branding')}
           >
             <div className="relative">
               <ImageIcon size={18} />
               <Plus size={8} className="absolute -top-0.5 -right-1 font-black" />
             </div>
             Photo / Logo
             {activeTab === 'branding' && <div className="absolute bottom-0 left-[15%] right-[15%] h-[3px] bg-error rounded-t-sm" />}
           </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 px-4">
          {activeTab === 'text' && (
            <div className="flex flex-col gap-4">
              <div className="mb-3">
                <label className="block text-[0.85rem] font-bold text-[#64748b] mb-1.5">Business Name</label>
                <input 
                  type="text" 
                  className="w-full p-3.5 border-1.5 border-[#f1f5f9] rounded-xl text-[1rem] bg-[#f8fafc] outline-none focus:border-primary/30"
                  value={localUserData.business_name || ''} 
                  onChange={(e) => updateLocalField('business_name', e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="block text-[0.85rem] font-bold text-[#64748b] mb-1.5">Phone Number</label>
                <input 
                  type="text" 
                  className="w-full p-3.5 border-1.5 border-[#f1f5f9] rounded-xl text-[1rem] bg-[#f8fafc] outline-none focus:border-primary/30"
                  value={localUserData.phone_number || ''} 
                  onChange={(e) => updateLocalField('phone_number', e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="block text-[0.85rem] font-bold text-[#64748b] mb-1.5">Website</label>
                <input 
                  type="text" 
                  className="w-full p-3.5 border-1.5 border-[#f1f5f9] rounded-xl text-[1rem] bg-[#f8fafc] outline-none focus:border-primary/30"
                  value={localUserData.website || ''} 
                  onChange={(e) => updateLocalField('website', e.target.value)}
                />
              </div>
            </div>
          )}

          {activeTab === 'branding' && (
            <div className="flex flex-col gap-4">
              
              <div className="bg-[#fff9f2] border-1.5 border-dashed border-[#ffd8a8] rounded-[14px] p-4 flex items-center gap-4">
                <div className="w-[52px] h-[52px] bg-white rounded-xl border border-[#f1f5f9] flex items-center justify-center shadow-sm"><ImageIcon size={24} className="text-[#f59e0b]" /></div>
                <div className="flex-1">
                   <strong className="block text-[0.9rem] text-[#1e293b]">Add Extra Photos</strong>
                   <span className="text-[0.75rem] text-[#94a3b8]">You can add up to 5 photos</span>
                </div>
                <button className="bg-[#f59e0b] text-white px-4 py-2 rounded-full text-[0.85rem] font-bold border-none active:scale-95 transition-transform">Add Photo</button>
              </div>

              <div className="flex items-center gap-4 py-1">
                <div className="w-[52px] h-[52px] bg-[#f1f5f9] rounded-full border border-[#f1f5f9] flex items-center justify-center shadow-sm">
                   <div className="w-10 h-10 text-[#64748b] relative flex items-center justify-center">
                     <User size={40} />
                     <div className="absolute -bottom-1 w-full text-center text-[5px] font-black bg-white py-0.5">YOUR PHOTO HERE</div>
                   </div>
                </div>
                <div className="flex-1">
                   <strong className="block text-[0.9rem] text-[#1e293b]">Profile Photo</strong>
                   <span className="text-[0.75rem] text-[#94a3b8]">Place it anywhere on the screen</span>
                </div>
                <button className="bg-[#facc15] text-white px-4 py-2 rounded-full text-[0.85rem] font-bold border-none active:scale-95 transition-transform">
                   {localUserData.logo ? 'Change' : 'Add'}
                </button>
              </div>

              <div className="flex items-center gap-4 py-1">
                <div className="w-[52px] h-[52px] bg-white rounded-full border border-dashed border-[#f1f5f9] flex items-center justify-center shadow-sm">
                   <Star size={24} className="text-[#ef4444]" fill="#fee2e2" />
                </div>
                <div className="flex-1">
                   <strong className="block text-[0.9rem] text-[#1e293b]">Logo</strong>
                   <span className="text-[0.75rem] text-[#94a3b8]">Place it anywhere on the screen</span>
                </div>
                <div className="flex items-center gap-2.5">
                   <button className="bg-[#facc15] text-white px-4 py-2 rounded-full text-[0.85rem] font-bold border-none active:scale-95 transition-transform">
                     {localUserData.logo ? 'Change' : 'Add'}
                   </button>
                   <input type="checkbox" checked={!!localUserData.logo} className="w-5 h-5 accent-error" readOnly />
                </div>
              </div>

              <div className="flex items-center gap-4 py-1">
                 <div className="w-[52px] h-[52px] bg-white rounded-full border border-dashed border-[#f1f5f9] flex items-center justify-center shadow-sm">
                    <Smile size={24} className="text-[#f59e0b]" fill="#fef3c7" />
                 </div>
                 <div className="flex-1">
                   <strong className="block text-[0.9rem] text-[#1e293b]">Stickers</strong>
                   <span className="text-[0.75rem] text-[#94a3b8]">Place it anywhere on the screen</span>
                 </div>
                 <button className="bg-[#facc15] text-white px-4 py-2 rounded-full text-[0.85rem] font-bold border-none active:scale-95 transition-transform">Add</button>
              </div>

            </div>
          )}
        </div>
        
        <div className="p-4 pb-8">
           <button className="w-full p-4 bg-error text-white rounded-xl font-bold text-[1rem] border-none shadow-md active:scale-[0.98] transition-transform" onClick={handleApplyEdits}>
             Open to Edit
           </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PosterEditor;
