import { useState, useEffect } from 'react';
import { defaultMemes } from '../data/memes';

const STORAGE_KEY = 'memes';

export const useMemes = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setMemes(JSON.parse(stored));
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultMemes));
      setMemes(defaultMemes);
    }
  }, []);

  const updateMeme = (updated) => {
    const updatedList = memes.map((m) => (m.id === updated.id ? updated : m));
    setMemes(updatedList);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
  };

  return { memes, updateMeme };
};
