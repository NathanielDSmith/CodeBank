import { useState, useEffect } from 'react';
import { LanguageTopic } from '../types/index';
import { LANGUAGE_TOPICS } from '../data/homeTopics';

const STORAGE_KEY = 'codebank-favorites';

export const useFavorites = () => {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorite IDs from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed) && parsed.every(item => typeof item === 'number')) {
          setFavoriteIds(parsed);
        } else {
          // Handle legacy format: array of full LanguageTopic objects
          if (Array.isArray(parsed) && parsed.length > 0 && typeof parsed[0] === 'object') {
            const ids = parsed
              .map((item: any) => item?.id)
              .filter((id: any): id is number => typeof id === 'number');
            setFavoriteIds(ids);
          } else {
            localStorage.removeItem(STORAGE_KEY);
          }
        }
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save favorite IDs to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds));
      } catch (error) {
        console.error('Failed to save favorites to localStorage:', error);
      }
    }
  }, [favoriteIds, isLoaded]);

  // Derive full topic objects from current LANGUAGE_TOPICS data
  const favorites: LanguageTopic[] = favoriteIds
    .map(id => LANGUAGE_TOPICS.find(t => t.id === id))
    .filter((t): t is LanguageTopic => t !== undefined);

  const addToFavorites = (topic: LanguageTopic) => {
    setFavoriteIds(prev => {
      if (prev.includes(topic.id)) return prev;
      return [...prev, topic.id];
    });
  };

  const removeFromFavorites = (topicId: number) => {
    setFavoriteIds(prev => prev.filter(id => id !== topicId));
  };

  const toggleFavorite = (topic: LanguageTopic) => {
    if (favoriteIds.includes(topic.id)) {
      removeFromFavorites(topic.id);
    } else {
      addToFavorites(topic);
    }
  };

  const isFavorite = (topicId: number) => favoriteIds.includes(topicId);

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    isLoaded
  };
};
