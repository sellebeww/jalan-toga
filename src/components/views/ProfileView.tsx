import React, { useRef } from 'react';
import { useAppStore, appStore } from '../../lib/store';
import { downloadText } from '../common/ui';
import { confirmAction } from '../common/Confirm';
import { toast } from '../../lib/toast';
import { allModules, allTopics, getTopicById } from '../../data/modules';
import { allFlashcards } from '../../data/flashcards';
import { ProgressRing } from '../ui/ProgressRing';
import { 
  User, 
  Flame, 
  Award, 
  Layers, 
  BookOpen, 
  Bookmark, 
  StickyNote, 
  Download, 
  Upload, 
  RotateCcw, 
  ArrowRight
} from 'lucide-react';

interface ProfileViewProps {
  onNavigateToTopic: (moduleSlug: string, topicId: string) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ onNavigateToTopic }) => {
  const store = useAppStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const completedCount = store.completedTopics.length;
  const totalTopics = allTopics.length;
  const progressPct = Math.round((completedCount / totalTopics) * 100);

  // Flashcards mastered calculation
  let masteredCount = 0;
  Object.values(store.cardStates).forEach((st) => {
    if (st.box >= 4) masteredCount += 1;
  });

  // Quiz average calculation
  const totalAttempts = store.quizAttempts.length;
  const avgQuizScore = totalAttempts > 0
    ? Math.round(
        (store.quizAttempts.reduce((acc, cur) => acc + (cur.score / cur.total) * 100, 0) /
          totalAttempts)
      )
    : 0;

  // Notes list
  const notesList = Object.entries(store.notes)
    .filter(([_, content]) => content.trim().length > 0)
    .map(([topicId, content]) => {
      const topic = getTopicById(topicId);
      return { topicId, content, topic };
    });

  // Ekspor seluruh data aplikasi (format yang sama dengan menu Pengaturan)
  const handleExportData = () => {
    const stamp = new Date().toISOString().split('T')[0];
    downloadText(`cadangan-jalan-toga-${stamp}.json`, JSON.stringify(appStore.exportData(), null, 2), 'application/json');
  };

  // Impor cadangan JSON dengan validasi
  const handleImportData = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      appStore.importData(await file.text());
      toast('Data berhasil diimpor', { tone: 'success' });
    } catch (err) {
      toast('Impor gagal', { body: err instanceof Error ? err.message : 'File tidak dapat dibaca.', tone: 'warn' });
    } finally {
      e.target.value = '';
    }
  };

  // Reset hanya progres belajar materi (tidak menyentuh profil, tracker, referensi)
  const handleResetData = async () => {
    const ok = await confirmAction({
      title: 'Reset progres belajar materi?',
      body: 'Topik selesai, bookmark, catatan, progres flashcard, dan skor kuis akan dihapus. Profil, tracker, dan referensi tidak ikut terhapus.',
      confirmLabel: 'Reset progres',
      danger: true
    });
    if (ok) appStore.patch({ completedTopics: [], bookmarks: [], notes: {}, cardStates: {}, quizAttempts: [] });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Profile Header Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 flex items-center justify-center text-white shadow-lg shadow-indigo-600/25">
            <User className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-slate-100">
                Profil Belajar Peneliti Muda
              </h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-200 dark:border-indigo-800">
                Level: Mahasiswa Skripsi
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Pantau kelulusan topik, penguasaan hafalan Leitner, dan persiapan ujian skripsi TI.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ProgressRing progress={progressPct} size={70} strokeWidth={7} />
          <div>
            <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-slate-100">
              {progressPct}%
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Total Kurikulum Selesai
            </div>
          </div>
        </div>
      </div>

      {/* 4 Key Statistics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-4">
          <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-slate-100">
              {store.streakDays} Hari
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Streak Belajar</div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-4">
          <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-slate-100">
              {completedCount}/{totalTopics}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Topik Selesai</div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-4">
          <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-slate-100">
              {masteredCount}/{allFlashcards.length}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Hafal Mantap (Box 4-5)</div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-4">
          <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-slate-100">
              {totalAttempts > 0 ? `${avgQuizScore}%` : '-'}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{totalAttempts} Kuis Diikuti</div>
          </div>
        </div>
      </div>

      {/* Progress Breakdown per Module */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
        <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100">
          Progres Belajar per Modul
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allModules.map((m) => {
            const completedInMod = m.topics.filter((t) => store.completedTopics.includes(t.id)).length;
            const pct = Math.round((completedInMod / m.topics.length) * 100);

            return (
              <button
                type="button"
                key={m.slug}
                onClick={() => onNavigateToTopic(m.slug, m.topics[0].id)}
                className="block w-full text-left p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 cursor-pointer transition bg-slate-50/50 dark:bg-slate-800/40 space-y-2"
              >
                <span className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    Modul {m.number}
                  </span>
                  <span className="font-mono font-semibold text-slate-600 dark:text-slate-400">
                    {completedInMod}/{m.topics.length} ({pct}%)
                  </span>
                </span>
                <span className="font-heading font-semibold text-sm text-slate-900 dark:text-slate-100 line-clamp-1">
                  {m.title}
                </span>
                <span className="block w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <span
                    className="block bg-indigo-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${pct}%` }}
                  />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Saved Bookmarks & Personal Notes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bookmarks */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
              Topik Disimpan ({store.bookmarks.length})
            </h3>
          </div>

          {store.bookmarks.length === 0 ? (
            <p className="text-xs text-slate-400 dark:text-slate-500 py-6 text-center">
              Belum ada topik yang disimpan. Klik tombol "Simpan" saat membaca topik untuk menambahkannya ke sini.
            </p>
          ) : (
            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {store.bookmarks.map((topicId) => {
                const topic = getTopicById(topicId);
                if (!topic) return null;
                return (
                  <button
                    type="button"
                    key={topicId}
                    onClick={() => onNavigateToTopic(topic.moduleSlug, topic.id)}
                    className="w-full text-left p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 cursor-pointer transition flex items-center justify-between text-xs"
                  >
                    <span className="block">
                      <span className="block font-heading font-semibold text-slate-800 dark:text-slate-200">
                        {topic.title}
                      </span>
                      <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                        {topic.moduleSlug.toUpperCase()}
                      </span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Notes */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <StickyNote className="w-4 h-4 text-indigo-500" />
              Catatan Pribadi ({notesList.length})
            </h3>
          </div>

          {notesList.length === 0 ? (
            <p className="text-xs text-slate-400 dark:text-slate-500 py-6 text-center">
              Belum ada catatan. Tambahkan catatan pribadi pada topik modul untuk mempermudah persiapan sidang.
            </p>
          ) : (
            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {notesList.map((item) => (
                <button
                  type="button"
                  key={item.topicId}
                  onClick={() => item.topic && onNavigateToTopic(item.topic.moduleSlug, item.topicId)}
                  className="block w-full text-left p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition text-xs space-y-1"
                >
                  <span className="block font-heading font-semibold text-slate-900 dark:text-slate-100">
                    {item.topic?.title || item.topicId}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 line-clamp-2 italic font-serif">
                    "{item.content}"
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Backup, Restore & Data Reset Section */}
      <div className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-4">
        <div>
          <h3 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100">
            Cadangkan & Kelola Data Belajar
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Semua progres tersimpan di penyimpanan lokal browser Anda. Anda dapat mengekspor atau memulihkannya kapan saja.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={handleExportData}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition cursor-pointer"
          >
            <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Ekspor Data Belajar (JSON)</span>
          </button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImportData}
            accept=".json"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition cursor-pointer"
          >
            <Upload className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Impor Data Cadangan</span>
          </button>

          <button
            onClick={handleResetData}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/40 text-rose-700 dark:text-rose-300 text-xs font-semibold hover:bg-rose-100 dark:hover:bg-rose-900/40 transition ml-auto cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Seluruh Data</span>
          </button>
        </div>
      </div>
    </div>
  );
};
