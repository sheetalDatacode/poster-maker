import React, { createContext, useContext, useState } from 'react';

const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const [editingTemplate, setEditingTemplate] = useState(null);
  const [viewingDetail, setViewingDetail] = useState(null);
  const [userData, setUserData] = useState({
    business_name: 'Dealing India Solutions',
    phone_number: '+91 9876543210',
    logo: 'https://ui-avatars.com/api/?name=Dealing+India&background=6366f1&color=fff',
    gst_number: '27AAAAA0000A1Z5'
  });

  const injectUserData = (template) => {
    const templateWithUserData = JSON.parse(JSON.stringify(template));
    if (templateWithUserData.layout) {
      templateWithUserData.layout = templateWithUserData.layout.map(item => {
        if (item.placeholderKey === '{{business_name}}' && userData.business_name) {
          return { ...item, defaultValue: userData.business_name, text: userData.business_name };
        }
        if (item.placeholderKey === '{{phone_number}}' && userData.phone_number) {
          return { ...item, defaultValue: userData.phone_number, text: userData.phone_number };
        }
        if (item.placeholderKey === '{{logo}}' && userData.logo) {
          return { ...item, url: userData.logo };
        }
        if (item.placeholderKey === '{{gst_number}}' && userData.gst_number) {
          return { ...item, defaultValue: userData.gst_number, text: userData.gst_number };
        }
        return item;
      });
    }
    return templateWithUserData;
  };

  const openEditor = (template) => {
    setEditingTemplate(injectUserData(template));
    // Keep viewingDetail open
  };

  const openDetail = (template) => {
    setViewingDetail(injectUserData(template));
  };

  const closeEditor = () => setEditingTemplate(null);
  const closeDetail = () => setViewingDetail(null);

  return (
    <EditorContext.Provider value={{ 
      editingTemplate, openEditor, closeEditor, 
      viewingDetail, openDetail, closeDetail,
      userData, setUserData 
    }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => useContext(EditorContext);
