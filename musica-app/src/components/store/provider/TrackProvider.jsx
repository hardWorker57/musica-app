import React, { useEffect, useState } from 'react';
import TrackContext from '../TrackContext';

const TrackProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [likedList, setLikedList] = useState(() => {
    const savedNames = localStorage.getItem('liked');
    return savedNames ? JSON.parse(savedNames) : [];
  });

  const updateData = (newData) => {
    setData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const updateLikedList = (newData) => {
    setLikedList((prevData) => [...prevData, newData]);
  };
  useEffect(() => {
    localStorage.setItem('liked', JSON.stringify(likedList));
  }, [likedList]);

  return (
    <TrackContext.Provider value={{ data, updateData, likedList, updateLikedList }}>
      {children}
    </TrackContext.Provider>
  );
};

export default TrackProvider;
