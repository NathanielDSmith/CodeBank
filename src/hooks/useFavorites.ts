import { useState, useEffect } from 'react';
import { LanguageTopic } from '../types/index';

const STORAGE_KEY = 'codebank-favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<LanguageTopic[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem(STORAGE_KEY);
      
      if (savedFavorites) {
        const parsed = JSON.parse(savedFavorites);
        
        // Validate that parsed data is an array
        if (Array.isArray(parsed)) {
          setFavorites(parsed);
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch (error) {
      // Clear corrupted data
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
      } catch (error) {
      }
    }
  }, [favorites, isLoaded]);

  const addToFavorites = (topic: LanguageTopic) => {
    setFavorites(prev => {
      const exists = prev.find(fav => fav.id === topic.id);
      if (!exists) {
        return [...prev, topic];
      }
      return prev;
    });
  };

  const removeFromFavorites = (topicId: number) => {
    setFavorites(prev => prev.filter(fav => fav.id !== topicId));
  };

  const toggleFavorite = (topic: LanguageTopic) => {
    const isFavorite = favorites.some(fav => fav.id === topic.id);
    if (isFavorite) {
      removeFromFavorites(topic.id);
    } else {
      addToFavorites(topic);
    }
  };

  const isFavorite = (topicId: number) => {
    return favorites.some(fav => fav.id === topicId);
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    isLoaded
  };
}; 