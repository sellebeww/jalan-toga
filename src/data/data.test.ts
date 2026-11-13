import { describe, expect, it } from 'vitest';
import { allGlossaryTerms, getGlossaryTermById, searchGlossary } from './glossary';
import { allFlashcards, getFlashcardById, getFlashcardsByModule } from './flashcards';

const MODULES = ['modul-1', 'modul-2', 'modul-3', 'modul-4', 'modul-5', 'modul-6', 'modul-7'];
const CATEGORIES = ['definisi', 'urutan', 'perbedaan', 'rumus', 'konsep'];
const filled = (v: unknown) => typeof v === 'string' && v.trim().length > 0;
const dupes = (ids: string[]) => ids.filter((id, i) => ids.indexOf(id) !== i);

describe('struktur data glosarium', () => {
  it('tidak kosong', () => expect(allGlossaryTerms.length).toBeGreaterThan(0));
  it('tidak ada id duplikat', () => expect(dupes(allGlossaryTerms.map((t) => t.id))).toEqual([]));
  it('id berformat slug (huruf kecil, angka, tanda hubung)', () => {
    expect(allGlossaryTerms.filter((t) => !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(t.id)).map((t) => t.id)).toEqual([]);
  });
  it('field wajib terisi (id, term, meaning)', () => {
    const bad = allGlossaryTerms.filter((t) => !filled(t.id) || !filled(t.term) || !filled(t.meaning)).map((t) => t.id);
    expect(bad).toEqual([]);
  });
  it('field opsional, bila ada, tidak kosong', () => {
    const bad = allGlossaryTerms.filter((t) => (t.english !== undefined && !filled(t.english)) || (t.example !== undefined && !filled(t.example))).map((t) => t.id);
    expect(bad).toEqual([]);
  });
  it('moduleSlug valid dan relatedTerms berupa array string', () => {
    for (const t of allGlossaryTerms) {
      expect(MODULES, t.id).toContain(t.moduleSlug);
      expect(Array.isArray(t.relatedTerms), t.id).toBe(true);
      expect(t.relatedTerms.every(filled), t.id).toBe(true);
    }
  });
  it('relatedTerms tidak merujuk dirinya sendiri', () => {
    expect(allGlossaryTerms.filter((t) => t.relatedTerms.includes(t.id)).map((t) => t.id)).toEqual([]);
  });
  it('helper pencarian konsisten dengan data', () => {
    const first = allGlossaryTerms[0];
    expect(getGlossaryTermById(first.id)).toBe(first);
    expect(getGlossaryTermById('tidak-ada')).toBeUndefined();
    expect(searchGlossary(first.term).map((t) => t.id)).toContain(first.id);
  });
});

describe('struktur data flashcard', () => {
  it('tidak kosong', () => expect(allFlashcards.length).toBeGreaterThan(0));
  it('tidak ada id duplikat', () => expect(dupes(allFlashcards.map((c) => c.id))).toEqual([]));
  it('field wajib terisi (id, topicId, front, back)', () => {
    const bad = allFlashcards.filter((c) => !filled(c.id) || !filled(c.topicId) || !filled(c.front) || !filled(c.back)).map((c) => c.id);
    expect(bad).toEqual([]);
  });
  it('moduleSlug dan category valid, tags array string tidak kosong', () => {
    for (const c of allFlashcards) {
      expect(MODULES, c.id).toContain(c.moduleSlug);
      expect(CATEGORIES, c.id).toContain(c.category);
      expect(Array.isArray(c.tags), c.id).toBe(true);
      expect(c.tags.every(filled), c.id).toBe(true);
    }
  });
  it('tidak ada dua kartu dengan sisi depan identik dalam satu modul', () => {
    const seen = new Map<string, string>();
    const dup: string[] = [];
    for (const c of allFlashcards) {
      const key = `${c.moduleSlug}|${c.front.trim().toLowerCase()}`;
      if (seen.has(key)) dup.push(`${seen.get(key)} = ${c.id}`);
      else seen.set(key, c.id);
    }
    expect(dup).toEqual([]);
  });
  it('helper konsisten dengan data', () => {
    expect(getFlashcardById(allFlashcards[0].id)).toBe(allFlashcards[0]);
    expect(getFlashcardsByModule()).toHaveLength(allFlashcards.length);
    const m = getFlashcardsByModule('modul-1');
    expect(m.length).toBeGreaterThan(0);
    expect(m.every((c) => c.moduleSlug === 'modul-1')).toBe(true);
  });
});
