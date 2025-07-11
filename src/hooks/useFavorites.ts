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
      console.log('Loading favorites from localStorage:', savedFavorites);
      
      if (savedFavorites) {
        const parsed = JSON.parse(savedFavorites);
        console.log('Parsed favorites:', parsed);
        
        // Validate that parsed data is an array
        if (Array.isArray(parsed)) {
          setFavorites(parsed);
        } else {
          console.warn('Invalid favorites data in localStorage, resetting');
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch (error) {
      console.error('Failed to parse favorites from localStorage:', error);
      // Clear corrupted data
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      console.log('Saving favorites to localStorage:', favorites);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
      } catch (error) {
        console.error('Failed to save favorites to localStorage:', error);
      }
    }
  }, [favorites, isLoaded]);

  const addToFavorites = (topic: LanguageTopic) => {
    console.log('Adding to favorites:', topic);
    setFavorites(prev => {
      const exists = prev.find(fav => fav.id === topic.id);
      if (!exists) {
        return [...prev, topic];
      }
      return prev;
    });
  };

  const removeFromFavorites = (topicId: number) => {
    console.log('Removing from favorites:', topicId);
    setFavorites(prev => prev.filter(fav => fav.id !== topicId));
  };

  const toggleFavorite = (topic: LanguageTopic) => {
    const isFavorite = favorites.some(fav => fav.id === topic.id);
    console.log('Toggling favorite for:', topic.title, 'isFavorite:', isFavorite);
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