import React, { useState, useEffect } from 'react';
import {
  allModules,
  getModuleBySlug,
  getAdjacentTopics
} from '../../data/modules';
import { Topic } from '../../types';
import { appStore, useAppStore } from '../../lib/store';
import { Callout } from '../ui/Callout';
import { CompareTable } from '../ui/CompareTable';
import { Timeline5Generations } from '../ui/Timeline';
import { DIKWPyramid } from '../ui/Pyramid';
import { ErrorMatrix2x2 } from '../ui/Matrix2x2';
import { DecisionTree } from '../ui/DecisionTree';
import { MiniQuizInline } from '../quiz/MiniQuizInline';
import {
  Bookmark,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Printer,
  Sparkles,
  StickyNote,
  Clock,
  Menu
} from 'lucide-react';

interface StudyViewProps {
  initialModuleSlug?: string;
  initialTopicId?: string;
  onNavigateToQuiz?: (moduleSlug: string) => void;
  onNavigateToTools?: (toolId?: string) => void;
}

export const StudyView: React.FC<StudyViewProps> = ({
  initialModuleSlug,
  initialTopicId,
  onNavigateToQuiz,
  onNavigateToTools
}) => {
  const store = useAppStore();
  const [activeModuleSlug, setActiveModuleSlug] = useState<string>(initialModuleSlug || 'modul-1');
  const [activeTopicId, setActiveTopicId] = useState<string>(initialTopicId || 'm1-tujuan-rti');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [noteText, setNoteText] = useState('');

  // Sync when props change from global search
  useEffect(() => {
    if (initialModuleSlug) setActiveModuleSlug(initialModuleSlug);
    if (initialTopicId) setActiveTopicId(initialTopicId);
  }, [initialModuleSlug, initialTopicId]);

  const currentModule = getModuleBySlug(activeModuleSlug) || allModules[0];
  const currentTopic = currentModule.topics.find((t) => t.id === activeTopicId) || currentModule.topics[0];

  // Sync note text with store
  useEffect(() => {
    if (currentTopic) {
      setNoteText(store.notes[currentTopic.id] || '');
    }
  }, [currentTopic?.id, store.notes]);

  const handleSaveNote = (text: string) => {
    setNoteText(text);
    if (currentTopic) {
      if (text.trim()) {
        appStore.setNote(currentTopic.id, text);
      } else {
        appStore.deleteNote(currentTopic.id);
      }
    }
  };

  const isCompleted = store.completedTopics.includes(currentTopic?.id || '');
  const isBookmarked = store.bookmarks.includes(currentTopic?.id || '');

  const { prev, next } = getAdjacentTopics(currentTopic?.id || '');

  const handleSelectTopic = (topic: Topic) => {
    setActiveTopicId(topic.id);
    setActiveModuleSlug(topic.moduleSlug);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleComplete = () => {
    if (currentTopic) {
      appStore.toggleTopicComplete(currentTopic.id);
    }
  };

  const handleToggleBookmark = () => {
    if (currentTopic) {
      appStore.toggleBookmark(currentTopic.id);
    }
  };

  // Module completion calculation
  const completedInModule = currentModule.topics.filter((t) =>
    store.completedTopics.includes(t.id)
  ).length;
  const moduleProgressPct = Math.round(
    (completedInModule / currentModule.topics.length) * 100
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* 1. Module Selector Horizontal Carousel */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-slate-100 tracking-tight">
              Modul Pembelajaran RTI
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Pilih dari 7 modul resmi Metodologi Riset Teknologi Informasi
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition border border-slate-200 dark:border-slate-700 cursor-pointer"
            title="Cetak Rangkuman Modul"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Cetak Cheat Sheet</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {allModules.map((m) => {
            const isActive = m.slug === activeModuleSlug;
            const completedCount = m.topics.filter((t) =>
              store.completedTopics.includes(t.id)
            ).length;
            const pct = Math.round((completedCount / m.topics.length) * 100);

            return (
              <button
                key={m.slug}
                onClick={() => {
                  setActiveModuleSlug(m.slug);
                  setActiveTopicId(m.topics[0].id);
                }}
                className={`p-3 rounded-2xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 border-indigo-600 scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80 border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-indigo-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}>
                    M{m.number}
                  </span>
                  <span className={`text-[10px] font-mono ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`}>
                    {pct}%
                  </span>
                </div>
                <div className="font-heading font-bold text-xs line-clamp-1">
                  {m.title}
                </div>
                <div className={`text-[10px] truncate mt-0.5 ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`}>
                  {m.topics.length} topik
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Topic List (Desktop Sidebar & Mobile Drawer) */}
        <div className="lg:col-span-4 xl:col-span-3">
          {/* Mobile Drawer Trigger */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Menu className="w-4 h-4" />
                Daftar Topik Modul {currentModule.number} ({currentModule.topics.length})
              </span>
              <ChevronRight className={`w-4 h-4 transition-transform ${sidebarOpen ? 'rotate-90' : ''}`} />
            </button>
          </div>

          <div className={`${sidebarOpen ? 'block' : 'hidden'} lg:block sticky top-20 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-xs`}>
            {/* Module Overview Header */}
            <div className="pb-4 border-b border-slate-100 dark:border-slate-800 mb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
                  Modul {currentModule.number}
                </span>
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                  {completedInModule}/{currentModule.topics.length} selesai
                </span>
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100 leading-snug">
                {currentModule.title}
              </h3>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${moduleProgressPct}%` }}
                />
              </div>
            </div>

            {/* Topic List */}
            <div className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
              {currentModule.topics.map((t, idx) => {
                const isCurrent = t.id === currentTopic?.id;
                const isDone = store.completedTopics.includes(t.id);
                const hasBookmark = store.bookmarks.includes(t.id);
                const hasNote = !!store.notes[t.id];

                return (
                  <button
                    key={t.id}
                    onClick={() => handleSelectTopic(t)}
                    className={`w-full text-left p-2.5 rounded-xl text-xs transition flex items-start gap-2.5 cursor-pointer ${
                      isCurrent
                        ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-100 font-semibold border border-indigo-200/80 dark:border-indigo-800/80'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 ${
                      isDone
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold'
                        : isCurrent
                        ? 'bg-indigo-600 text-white font-bold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300'
                    }`}>
                      {isDone ? '✓' : idx + 1}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="truncate">{t.title}</div>
                      <div className="flex items-center gap-1.5 mt-0.5 text-[10px] text-slate-400 dark:text-slate-500">
                        <span>{t.readingMinutes || 5} mnt</span>
                        {hasBookmark && <span className="text-amber-500">★ Disimpan</span>}
                        {hasNote && <span className="text-indigo-500">📝 Catatan</span>}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Link to Module Quiz */}
            {onNavigateToQuiz && (
              <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => onNavigateToQuiz(currentModule.slug)}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-xs font-semibold border border-amber-200/60 dark:border-amber-800 transition cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Uji Kuis Modul {currentModule.number} (15 Soal)</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Topic Reader Area */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-6">
          {currentTopic ? (
            <article className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xs relative">
              {/* Reader Header Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                    MODUL {currentModule.number}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    {currentTopic.readingMinutes || 5} menit baca
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Bookmark Button */}
                  <button
                    onClick={handleToggleBookmark}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer ${
                      isBookmarked
                        ? 'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                    <span>{isBookmarked ? 'Disimpan' : 'Simpan'}</span>
                  </button>

                  {/* Mark Complete Button */}
                  <button
                    onClick={handleToggleComplete}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                      isCompleted
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isCompleted ? 'Selesai Dibaca ✓' : 'Tandai Selesai'}</span>
                  </button>

                  {/* Notes Toggle Button */}
                  <button
                    onClick={() => setShowNotes(!showNotes)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer ${
                      showNotes || noteText.trim()
                        ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <StickyNote className="w-3.5 h-3.5" />
                    <span>Catatan {noteText.trim() ? '(1)' : ''}</span>
                  </button>
                </div>
              </div>

              {/* Title & TLDR */}
              <div className="py-6">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-slate-100 leading-tight tracking-tight">
                  {currentTopic.title}
                </h2>
                <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 leading-relaxed font-serif italic text-sm sm:text-base">
                  "{currentTopic.tldr}"
                </div>
              </div>

              {/* Study Mode Indicator Banner */}
              <div className={`p-4 rounded-2xl mb-8 flex items-center justify-between text-xs transition ${
                store.studyMode === 'hafal'
                  ? 'bg-amber-50/90 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-amber-950 dark:text-amber-200'
                  : 'bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 text-indigo-950 dark:text-indigo-200'
              }`}>
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold">
                      {store.studyMode === 'hafal' ? 'Mode Hafalan Aktif:' : 'Mode Pemahaman Aktif:'}
                    </span>{' '}
                    {store.studyMode === 'hafal'
                      ? 'Menampilkan intisari hafalan, mnemonik, dan kata kunci tebal untuk persiapan kilat ujian.'
                      : 'Menampilkan penjelasan kontekstual mendalam, latar belakang konsep, dan ilustrasi skripsi.'}
                  </div>
                </div>
                <button
                  onClick={() => appStore.setStudyMode(store.studyMode === 'hafal' ? 'paham' : 'hafal')}
                  className="font-bold underline text-xs ml-3 whitespace-nowrap cursor-pointer hover:opacity-80"
                >
                  Ganti ke {store.studyMode === 'hafal' ? 'Mode Paham' : 'Mode Hafal'}
                </button>
              </div>

              {/* Interactive Personal Notes Area */}
              {showNotes && (
                <div className="mb-8 p-5 rounded-2xl bg-amber-50/70 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 space-y-2 animate-in fade-in">
                  <div className="flex items-center justify-between text-xs font-semibold text-amber-900 dark:text-amber-300">
                    <span className="flex items-center gap-1.5">
                      <StickyNote className="w-4 h-4" />
                      Catatan Pribadi untuk Topik Ini
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">Tersimpan otomatis di browser</span>
                  </div>
                  <textarea
                    rows={4}
                    value={noteText}
                    onChange={(e) => handleSaveNote(e.target.value)}
                    placeholder="Tulis ringkasan, pertanyaan untuk dosen pembimbing, atau catatan hafalanmu di sini..."
                    className="w-full p-3 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                  />
                </div>
              )}

              {/* MODE HAFAL: Prioritized Memory & Mnemonic Card */}
              {store.studyMode === 'hafal' && (
                <div className="space-y-6 mb-8">
                  {currentTopic.memorize && (
                    <div className="p-6 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40">
                      <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-amber-900 dark:text-amber-200 mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        {currentTopic.memorize.title || 'Poin Kunci Hafalan'}
                      </h4>
                      <ul className="space-y-2">
                        {currentTopic.memorize.items.map((it: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-800 dark:text-slate-200 font-medium">
                            <span className="w-5 h-5 rounded-md bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              {currentTopic.memorize.ordered ? idx + 1 : '•'}
                            </span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {currentTopic.mnemonic && (
                    <div className="p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-900/40">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        Jembatan Keledai / Mnemonik
                      </span>
                      <p className="font-heading font-extrabold text-base text-indigo-900 dark:text-indigo-200 mt-1">
                        "{currentTopic.mnemonic.text}"
                      </p>
                      <p className="text-xs text-indigo-700 dark:text-indigo-300 mt-0.5">
                        {currentTopic.mnemonic.note}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Definition Box */}
              {currentTopic.definition && (
                <div className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-300 mb-2 font-semibold">
                    Definisi Resmi Modul
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200">
                    {currentTopic.definition}
                  </p>
                </div>
              )}

              {/* Detailed Narrative Explanation */}
              {currentTopic.explanation && (
                <div className="prose prose-slate dark:prose-invert max-w-none mb-8 text-slate-800 dark:text-slate-200 text-[15px] sm:text-base leading-relaxed">
                  <p>{currentTopic.explanation}</p>
                </div>
              )}

              {/* Real World Example */}
              {currentTopic.example && (
                <div className="my-6 p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40">
                  <span className="text-[10px] font-mono uppercase font-bold text-emerald-700 dark:text-emerald-300 block mb-1">
                    Contoh Penerapan Riset (Kasus Portal Kampus):
                  </span>
                  <p className="text-sm leading-relaxed text-emerald-900 dark:text-emerald-200 font-serif">
                    {currentTopic.example.text}
                  </p>
                </div>
              )}

              {/* Interactive Specialized Visuals Based on Topic ID */}
              {currentTopic.id === 'm1-sejarah-komputer' && (
                <div className="my-8">
                  <Timeline5Generations />
                </div>
              )}

              {currentTopic.id === 'm2-dikw-theory' && (
                <div className="my-8">
                  <DIKWPyramid />
                </div>
              )}

              {currentTopic.id === 'm3-tipe-kesalahan' && (
                <div className="my-8">
                  <ErrorMatrix2x2 />
                </div>
              )}

              {currentTopic.id === 'm4-pohon-keputusan' && (
                <div className="my-8">
                  <DecisionTree />
                </div>
              )}

              {/* Comparison Matrix Table if Available */}
              {currentTopic.compare && (
                <div className="my-8">
                  <CompareTable
                    headers={currentTopic.compare.headers}
                    rows={currentTopic.compare.rows}
                  />
                </div>
              )}

              {/* MODE PAHAM: Memorize Box if not in Hafal mode */}
              {store.studyMode === 'paham' && currentTopic.memorize && (
                <div className="my-8 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    {currentTopic.memorize.title || 'Poin Kunci'}
                  </h4>
                  <ul className="space-y-2">
                    {currentTopic.memorize.items.map((pt: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Pitfalls & Exam Traps */}
              {currentTopic.pitfalls && currentTopic.pitfalls.length > 0 && (
                <div className="my-8 space-y-2">
                  {currentTopic.pitfalls.map((pit: string, pIdx: number) => (
                    <Callout key={pIdx} type="warn" title="Jebakan Ujian / Kesalahan Konseptual">
                      {pit}
                    </Callout>
                  ))}
                </div>
              )}

              {/* Mini Quiz Inline for Instant Comprehension Testing */}
              {currentTopic.miniQuiz && currentTopic.miniQuiz.length > 0 && (
                <MiniQuizInline questions={currentTopic.miniQuiz} topicId={currentTopic.id} />
              )}

              {/* Bottom Topic Navigation */}
              <div className="pt-8 mt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                {prev ? (
                  <button
                    onClick={() => handleSelectTopic(prev)}
                    className="w-full sm:w-auto flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Sebelumnya: {prev.title.slice(0, 24)}...</span>
                  </button>
                ) : <div />}

                {next ? (
                  <button
                    onClick={() => {
                      if (!isCompleted) handleToggleComplete();
                      handleSelectTopic(next);
                    }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/20 transition cursor-pointer"
                  >
                    <span>Lanjut: {next.title.slice(0, 24)}...</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (!isCompleted) handleToggleComplete();
                      if (onNavigateToQuiz) onNavigateToQuiz(currentModule.slug);
                    }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Modul Selesai! Ikuti Kuis Evaluasi</span>
                  </button>
                )}
              </div>
            </article>
          ) : (
            <div className="p-12 text-center text-slate-400 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
              Pilih topik untuk mulai membaca.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
