export type ModuleSlug = 
  | 'modul-1'
  | 'modul-2'
  | 'modul-3'
  | 'modul-4'
  | 'modul-5'
  | 'modul-6'
  | 'modul-7';

export interface QuizQuestion {
  id: string;
  type: 'single' | 'multi' | 'truefalse' | 'order' | 'match';
  prompt: string;
  options?: string[];
  answer: number | number[] | boolean | string[];
  explanation: string;
  difficulty: 1 | 2 | 3;
  topicId: string;
}

export interface Topic {
  id: string;
  moduleSlug: ModuleSlug;
  slug: string;
  title: string;
  order: number;
  readingMinutes: number;
  tldr: string;
  definition: string;
  explanation: string;
  example?: {
    text: string;
    isFabricated: boolean;
  };
  pitfalls: string[];
  compare?: {
    headers: string[];
    rows: string[][];
  };
  memorize: {
    title: string;
    items: string[];
    ordered: boolean;
  };
  mnemonic?: {
    text: string;
    note: string;
  };
  miniQuiz: QuizQuestion[];
  tags: string[];
  glossaryTerms: string[];
  sourceNote?: string;
}

export interface ModuleData {
  slug: ModuleSlug;
  number: number;
  title: string;
  subtitle: string;
  color: string;
  icon: string;
  description: string;
  estimatedMinutes: number;
  topics: Topic[];
}

export interface Flashcard {
  id: string;
  moduleSlug: ModuleSlug;
  topicId: string;
  front: string;
  back: string;
  tags: string[];
  category: 'definisi' | 'urutan' | 'perbedaan' | 'rumus' | 'konsep';
}

export interface CardState {
  cardId: string;
  box: number; // 1 to 5 (Leitner)
  dueAt: number; // timestamp
  lapses: number;
  lastReviewed?: number;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  english?: string;
  meaning: string;
  moduleSlug: ModuleSlug;
  relatedTerms: string[];
  example?: string;
}

export interface ComparisonPair {
  id: string;
  conceptA: string;
  conceptB: string;
  moduleSlug: ModuleSlug;
  summary: string;
  differences: {
    dimension: string;
    aspectA: string;
    aspectB: string;
  }[];
  pitfall: string;
  keyTakeaway: string;
}

export interface NoteItem {
  id: string;
  topicId: string;
  moduleSlug: ModuleSlug;
  topicTitle: string;
  text: string;
  updatedAt: number;
}

export interface QuizAttempt {
  id: string;
  scope: string; // 'modul-1' .. 'modul-7' | 'ujian-simulasi'
  score: number;
  total: number;
  percentage: number;
  durationSeconds: number;
  date: number;
  wrongQuestionIds: string[];
}
