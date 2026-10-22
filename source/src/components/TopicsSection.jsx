import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, ArrowRight, Check, ChevronDown, ListFilter, Maximize2, Shuffle, Sparkles, X } from 'lucide-react';
import conversationTopics from '../data/conversationTopics';

const STORAGE_KEY = 'english-club-topic-index';
const topicCategories = [...new Set(conversationTopics.map((topic) => topic.category))];

function savedTopicIndex() {
  if (typeof window === 'undefined') return 0;

  try {
    const storedIndex = Number.parseInt(window.localStorage.getItem(STORAGE_KEY), 10);
    return Number.isInteger(storedIndex) && storedIndex >= 0 && storedIndex < conversationTopics.length
      ? storedIndex
      : 0;
  } catch {
    return 0;
  }
}

export default function TopicsSection({ copy }) {
  const [currentIndex, setCurrentIndex] = useState(savedTopicIndex);
  const [direction, setDirection] = useState('next');
  const [dragOffset, setDragOffset] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const touchStart = useRef(null);
  const categoryMenu = useRef(null);
  const categoryButton = useRef(null);
  const fullscreenButton = useRef(null);
  const closeButton = useRef(null);
  const pageScrollY = useRef(0);
  const pageAnchorTop = useRef(0);
  const topic = conversationTopics[currentIndex];
  const availableIndices = useMemo(() => conversationTopics
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => !selectedCategory || item.category === selectedCategory)
    .map(({ index }) => index), [selectedCategory]);
  const currentPosition = Math.max(0, availableIndices.indexOf(currentIndex));
  const categoryOptions = ['', ...topicCategories];

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(currentIndex));
    } catch {
      // The deck still works when storage is disabled.
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!isFullscreen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsFullscreen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    closeButton.current?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
      fullscreenButton.current?.focus({ preventScroll: true });
      const savedScrollY = pageScrollY.current;
      const savedAnchorTop = pageAnchorTop.current;
      window.requestAnimationFrame(() => {
        const previousScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, savedScrollY);
        window.requestAnimationFrame(() => {
          const currentAnchorTop = fullscreenButton.current?.getBoundingClientRect().top;
          if (Number.isFinite(currentAnchorTop)) {
            window.scrollBy(0, currentAnchorTop - savedAnchorTop);
          }
          document.documentElement.style.scrollBehavior = previousScrollBehavior;
        });
      });
    };
  }, [isFullscreen]);

  useEffect(() => {
    if (!isCategoryMenuOpen) return undefined;

    const closeOnOutsideClick = (event) => {
      if (!categoryMenu.current?.contains(event.target)) setIsCategoryMenuOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') return;
      setIsCategoryMenuOpen(false);
      categoryButton.current?.focus();
    };

    document.addEventListener('pointerdown', closeOnOutsideClick);
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isCategoryMenuOpen]);

  const showTopic = (topicIndex, nextDirection) => {
    setDirection(nextDirection);
    setCurrentIndex(topicIndex);
  };

  const move = (step) => {
    const position = availableIndices.indexOf(currentIndex);
    const startPosition = position >= 0 ? position : 0;
    const nextPosition = (startPosition + step + availableIndices.length) % availableIndices.length;
    showTopic(availableIndices[nextPosition], step > 0 ? 'next' : 'previous');
  };

  const surpriseMe = () => {
    let nextIndex = availableIndices[0];
    if (availableIndices.length > 1) {
      do {
        nextIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
      } while (nextIndex === currentIndex);
    }
    showTopic(nextIndex, 'random');
  };

  const chooseCategory = (category) => {
    const categoryIndices = conversationTopics
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => !category || item.category === category)
      .map(({ index }) => index);
    const nextIndex = categoryIndices[Math.floor(Math.random() * categoryIndices.length)];

    setSelectedCategory(category);
    setIsCategoryMenuOpen(false);
    showTopic(nextIndex, 'random');
  };

  const openCategoryMenu = (preferredIndex) => {
    const selectedIndex = categoryOptions.indexOf(selectedCategory);
    const nextIndex = Number.isInteger(preferredIndex)
      ? preferredIndex
      : Math.max(0, selectedIndex);

    setActiveCategoryIndex(nextIndex);
    setIsCategoryMenuOpen(true);
    window.requestAnimationFrame(() => {
      categoryMenu.current?.querySelector(`[data-category-index="${nextIndex}"]`)?.focus();
    });
  };

  const handleCategoryButtonKeyDown = (event) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    const selectedIndex = Math.max(0, categoryOptions.indexOf(selectedCategory));
    const offset = event.key === 'ArrowDown' ? 1 : -1;
    openCategoryMenu((selectedIndex + offset + categoryOptions.length) % categoryOptions.length);
  };

  const handleCategoryOptionKeyDown = (event, index) => {
    if (event.key === 'Tab') {
      setIsCategoryMenuOpen(false);
      return;
    }
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'Home' && event.key !== 'End') return;

    event.preventDefault();
    let nextIndex = index;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = categoryOptions.length - 1;
    if (event.key === 'ArrowDown') nextIndex = (index + 1) % categoryOptions.length;
    if (event.key === 'ArrowUp') nextIndex = (index - 1 + categoryOptions.length) % categoryOptions.length;

    setActiveCategoryIndex(nextIndex);
    categoryMenu.current?.querySelector(`[data-category-index="${nextIndex}"]`)?.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      move(-1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      move(1);
    }
  };

  const handleTouchStart = (event) => {
    if (event.touches.length !== 1 || event.target.closest?.('button, a')) {
      touchStart.current = null;
      return;
    }

    const touch = event.touches[0];
    touchStart.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
    setDragOffset(0);
    setIsTouching(Boolean(touch));
  };

  const resetTouchFeedback = () => {
    touchStart.current = null;
    setDragOffset(0);
    setIsTouching(false);
  };

  const handleTouchMove = (event) => {
    if (!touchStart.current || event.touches.length !== 1) return;

    const touch = event.touches[0];
    const distanceX = touch.clientX - touchStart.current.x;
    const distanceY = touch.clientY - touchStart.current.y;

    if (Math.abs(distanceY) > 12 && Math.abs(distanceY) > Math.abs(distanceX)) {
      resetTouchFeedback();
      return;
    }

    const softenedOffset = Math.sign(distanceX) * Math.min(18, Math.abs(distanceX) * 0.18);
    setDragOffset(softenedOffset);
  };

  const handleTouchEnd = (event) => {
    if (!touchStart.current) return;

    const touch = event.changedTouches[0];
    const distanceX = (touch?.clientX ?? touchStart.current.x) - touchStart.current.x;
    const distanceY = (touch?.clientY ?? touchStart.current.y) - touchStart.current.y;
    resetTouchFeedback();

    const isDeliberateHorizontalSwipe = Math.abs(distanceX) >= 90
      && Math.abs(distanceX) > Math.abs(distanceY) * 1.5;

    if (!isDeliberateHorizontalSwipe) return;
    move(distanceX < 0 ? 1 : -1);
  };

  const openFullscreen = () => {
    resetTouchFeedback();
    pageScrollY.current = window.scrollY;
    pageAnchorTop.current = fullscreenButton.current?.getBoundingClientRect().top ?? 0;
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    resetTouchFeedback();
    setIsFullscreen(false);
  };

  const renderTopicCard = (fullscreen = false) => (
    <article
      className={`topic-card ${isTouching ? 'topic-card-touching' : ''} relative overflow-hidden bg-ocean text-cream ${fullscreen ? 'topic-fullscreen' : 'rounded-[34px] p-6 shadow-lift sm:p-9 lg:p-12'}`}
      style={{ '--topic-drag-x': `${dragOffset}px` }}
    >
      <div className="absolute -right-16 -top-20 size-64 rounded-full border border-white/10" aria-hidden="true" />
      <div className="absolute -bottom-36 -left-20 size-72 rounded-full bg-terracotta/10 blur-2xl" aria-hidden="true" />

      <div
        key={currentIndex}
        className={`topic-card-content topic-card-content-${direction}`}
        aria-live="polite"
      >
        <div className="relative flex items-center justify-between gap-3">
          <span lang="en" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <Sparkles className="size-3.5 text-terracotta" aria-hidden="true" />
            {topic.category}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold tabular-nums text-cream/65">
              {String(currentPosition + 1).padStart(2, '0')} / {availableIndices.length}
            </span>
            {fullscreen ? (
              <button
                ref={closeButton}
                className="grid size-11 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/15"
                type="button"
                onClick={closeFullscreen}
                aria-label={copy.topics.closeFullscreen}
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            ) : (
              <button
                ref={fullscreenButton}
                className="grid size-10 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/15 md:hidden"
                type="button"
                onClick={openFullscreen}
                aria-label={copy.topics.fullscreen}
                aria-haspopup="dialog"
              >
                <Maximize2 className="size-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        <div lang="en" className={`relative max-w-5xl ${fullscreen ? 'mt-8' : 'mt-10 sm:mt-14'}`}>
          <h3 className={`font-display font-medium leading-[1.02] tracking-[-0.035em] ${fullscreen ? 'text-[clamp(2rem,9vw,3.25rem)]' : 'text-[clamp(2rem,3.5vw,3.6rem)]'}`}>
            {topic.title}
          </h3>
          <ul className={`grid md:grid-cols-3 ${fullscreen ? 'mt-7 gap-4' : 'mt-10 gap-5 md:gap-8'}`}>
            {topic.prompts.map((prompt) => (
              <li
                key={prompt}
                className="flex items-start gap-3"
              >
                <span className="mt-[0.55em] size-2 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
                <p className="text-base font-medium leading-relaxed text-cream/88 sm:text-lg">{prompt}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {fullscreen ? (
        <div className="topic-fullscreen-controls flex items-center justify-center gap-3">
          <button className="grid size-12 place-items-center rounded-full border border-white/25 transition hover:bg-white/10" type="button" onClick={() => move(-1)} aria-label={copy.topics.previous}>
            <ArrowLeft className="size-5" aria-hidden="true" />
          </button>
          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cream px-6 text-sm font-bold text-navy transition hover:-translate-y-0.5" type="button" onClick={surpriseMe}>
            <Shuffle className="size-4 text-terracotta" aria-hidden="true" />
            {copy.topics.surprise}
          </button>
          <button className="grid size-12 place-items-center rounded-full border border-white/25 transition hover:bg-white/10" type="button" onClick={() => move(1)} aria-label={copy.topics.next}>
            <ArrowRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      ) : (
        <div className="relative mt-10 flex flex-wrap items-center gap-3">
          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-5 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-white/10" type="button" onClick={() => move(-1)} aria-label={copy.topics.previous}>
            <ArrowLeft className="size-4" aria-hidden="true" />
            {copy.topics.previous}
          </button>
          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cream px-5 text-sm font-bold text-navy transition hover:-translate-y-0.5" type="button" onClick={surpriseMe}>
            <Shuffle className="size-4 text-terracotta" aria-hidden="true" />
            {copy.topics.surprise}
          </button>
          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-5 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-white/10" type="button" onClick={() => move(1)} aria-label={copy.topics.next}>
            {copy.topics.next}
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
          <span className="ml-auto hidden text-xs font-medium text-cream/50 md:block">{copy.topics.hint}</span>
        </div>
      )}
    </article>
  );

  return (
    <>
      <section id="topics" tabIndex="-1" className="bg-cream py-16 focus:outline-none lg:py-20">
        <div className="page-shell" aria-hidden={isFullscreen || undefined} inert={isFullscreen ? '' : undefined}>
          <h2 className="reveal eyebrow">{copy.topics.label}</h2>
          <p className="reveal mt-4 max-w-2xl text-base leading-relaxed text-navy/65 sm:text-lg">{copy.topics.usage}</p>

          <div className={`relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-center ${isCategoryMenuOpen ? 'z-40' : 'z-10'}`}>
            <div ref={categoryMenu} className="relative w-full sm:w-80">
              <button
                ref={categoryButton}
                className={`flex min-h-12 w-full items-center gap-3 rounded-full border bg-ivory px-4 text-left text-sm font-bold text-navy shadow-soft transition hover:border-terracotta/60 hover:bg-cream ${isCategoryMenuOpen ? 'border-terracotta ring-2 ring-terracotta/15' : 'border-navy/15'}`}
                type="button"
                aria-label={copy.topics.chooseCategory}
                aria-haspopup="listbox"
                aria-expanded={isCategoryMenuOpen}
                onClick={() => (isCategoryMenuOpen ? setIsCategoryMenuOpen(false) : openCategoryMenu())}
                onKeyDown={handleCategoryButtonKeyDown}
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-peach text-terracotta" aria-hidden="true">
                  <ListFilter className="size-4" />
                </span>
                <span className="min-w-0 flex-1 truncate" lang={selectedCategory ? 'en' : undefined}>
                  {selectedCategory || copy.topics.allCategories}
                </span>
                <ChevronDown className={`size-4 shrink-0 text-navy/55 transition-transform duration-200 ${isCategoryMenuOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>

              {isCategoryMenuOpen && (
                <div
                  className="absolute inset-x-0 top-full z-30 mt-2 max-h-80 overflow-y-auto rounded-[24px] border border-navy/10 bg-cream p-2 shadow-lift"
                  role="listbox"
                  aria-label={copy.topics.chooseCategory}
                >
                  {categoryOptions.map((category, index) => {
                    const isSelected = category === selectedCategory;
                    return (
                      <button
                        key={category || 'all'}
                        className={`flex min-h-11 w-full items-center gap-3 rounded-2xl px-3.5 py-2.5 text-left text-sm font-semibold transition ${isSelected ? 'bg-ocean text-cream' : 'text-navy hover:bg-peach focus:bg-peach'}`}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        tabIndex={index === activeCategoryIndex ? 0 : -1}
                        data-category-index={index}
                        lang={category ? 'en' : undefined}
                        onFocus={() => setActiveCategoryIndex(index)}
                        onKeyDown={(event) => handleCategoryOptionKeyDown(event, index)}
                        onClick={() => chooseCategory(category)}
                      >
                        <span className={`grid size-6 shrink-0 place-items-center rounded-full ${isSelected ? 'bg-white/15' : 'bg-peach'}`} aria-hidden="true">
                          {isSelected && <Check className="size-3.5" />}
                        </span>
                        <span className="min-w-0 flex-1">{category || copy.topics.allCategories}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div
            className="reveal mt-6 outline-none"
            role="group"
            aria-label={copy.topics.deck}
            aria-roledescription="carousel"
            tabIndex="0"
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={resetTouchFeedback}
          >
            {renderTopicCard()}
          </div>
        </div>
      </section>

      {isFullscreen && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[100] overflow-x-hidden overflow-y-auto bg-ocean"
          role="dialog"
          aria-modal="true"
          aria-label={copy.topics.dialog}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={resetTouchFeedback}
        >
          {renderTopicCard(true)}
        </div>,
        document.body,
      )}
    </>
  );
}
