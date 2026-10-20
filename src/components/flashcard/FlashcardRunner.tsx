import React, { useState, useEffect } from 'react';
import { allFlashcards } from '../../data/flashcards';
import { allModules } from '../../data/modules';
import { appStore, useAppStore } from '../../lib/store';
import { FlipCard } from './FlipCard';
import { Filter, ArrowLeft, ArrowRight, Shuffle } from 'lucide-react';

export const FlashcardRunner: React.FC = () => {
  const store = useAppStore();
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [cardDeck, setCardDeck] = useState(allFlashcards);

  // Filter deck whenever module changes
  useEffect(() => {
    let list = allFlashcards;
    if (selectedModule !== 'all') {
      list = allFlashcards.filter((c) => c.moduleSlug === selectedModule);
    }
    setCardDeck(list);
    setCurrentIndex(0);
  }, [selectedModule]);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.code === 'Space') {
        e.preventDefault();
        // Trigger flip by dispatching click on flip container
        const cardElem = document.querySelector('.perspective-1000') as HTMLElement;
        if (cardElem) cardElem.click();
      } else if (e.key === '1') {
        e.preventDefault();
        handleRateCurrent('belum');
      } else if (e.key === '2') {
        e.preventDefault();
        handleRateCurrent('ragu');
      } else if (e.key === '3') {
        e.preventDefault();
        handleRateCurrent('tahu');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextCard();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevCard();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const currentCard = cardDeck[currentIndex];
  const currentCardState = currentCard ? store.cardStates[currentCard.id] : undefined;
  const currentBox = currentCardState?.box || 1;

  const handleRateCurrent = (rating: 'tahu' | 'ragu' | 'belum') => {
    if (!currentCard) return;
    appStore.reviewCard(currentCard.id, rating);
    handleNextCard();
  };

  const handleNextCard = () => {
    if (currentIndex < cardDeck.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // loop back
    }
  };

  const handlePrevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleShuffle = () => {
    const shuffled = [...cardDeck].sort(() => 0.5 - Math.random());
    setCardDeck(shuffled);
    setCurrentIndex(0);
  };

  return (
    <div className="space-y-6">
      {/* Module Filters & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select aria-label="Filter modul flashcard"
            value={selectedModule}
            onChange={(e) => setSelectedModule(e.target.value)}
            className="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            <option value="all">Semua Modul ({allFlashcards.length} Kartu)</option>
            {allModules.map((m) => (
              <option key={m.slug} value={m.slug}>
                Modul {m.number}: {m.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShuffle}
            className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs transition"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Acak Kartu</span>
          </button>
        </div>
      </div>

      {/* Card Deck View */}
      {cardDeck.length > 0 && currentCard ? (
        <div>
          <div className="flex items-center justify-between max-w-lg mx-auto text-xs font-mono text-slate-400 dark:text-slate-500 mb-1">
            <span>
              Kartu #{currentIndex + 1} dari {cardDeck.length}
            </span>
            <span>Tag: {currentCard.tags.join(', ')}</span>
          </div>

          <FlipCard
            card={currentCard}
            boxNumber={currentBox}
            onRate={handleRateCurrent}
          />

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={handlePrevCard}
              disabled={currentIndex === 0}
              className="py-2 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 disabled:opacity-30 cursor-pointer flex items-center gap-1.5 transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Sebelumnya</span>
            </button>

            <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
              {currentIndex + 1} / {cardDeck.length}
            </span>

            <button
              onClick={handleNextCard}
              className="py-2 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer flex items-center gap-1.5 transition"
            >
              <span>Berikutnya</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        <div className="p-12 text-center text-slate-400">Tidak ada kartu pada filter ini.</div>
      )}
    </div>
  );
};
