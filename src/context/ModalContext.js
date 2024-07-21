import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading,setLoading] = useState(false);
  const [isSuccess,setSuccesstLoading] = useState(false);
  const [isFailed,setFailed] = useState('');

  const toggleModal = () => {
    setIsModalVisible(prev => !prev);
  };

  return (
    <ModalContext.Provider value={{ isModalVisible, toggleModal,isLoading,setLoading,isSuccess,setSuccesstLoading,isFailed,setFailed }}>
      {children}
    </ModalContext.Provider>
  );
};


export const useModalContext = () => useContext(ModalContext);
