import React, { useState } from 'react';
import TrackContext from '../TrackContext';
// import TrackContext from './TrackContext';

const TrackProvider = ({ children }) => {
  const [data, setData] = useState({});

  // Ensure `updateValue` is correctly defined and passed
  const updateData = (newData) => {
    setData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <TrackContext.Provider value={{ data, updateData }}>
      {children}
    </TrackContext.Provider>
  );
};

export default TrackProvider;
