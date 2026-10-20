import { useEffect, useState } from 'react';
import { Award, BookMarked, BookOpen, GraduationCap, Layers, User, Wrench } from 'lucide-react';
import { useLocation } from '../app/router';
import { StudyView } from '../components/views/StudyView';
import { FlashcardsView } from '../components/views/FlashcardsView';
import { QuizView } from '../components/views/QuizView';
import { ToolsView } from '../components/views/ToolsView';
import { ProfileView } from '../components/views/ProfileView';
import { GlossaryModal } from '../components/modals/GlossaryModal';
import { Page, PageHeader, Segmented } from '../components/common/ui';

type Tab = 'materi' | 'hafalan' | 'latihan' | 'alat' | 'profil';
const TABS: Tab[] = ['materi', 'hafalan', 'latihan', 'alat', 'profil'];

/**
 * Materi Metodologi Riset (7 modul, flashcard Leitner, kuis, 12 alat).
 * Konsepnya lintas jurusan; contoh dan studi kasusnya bernuansa Teknologi Informasi.
 */
export default function Belajar() {
  const { query } = useLocation();
  const qTab = query.get('tab');
  const [tab, setTab] = useState<Tab>(TABS.includes(qTab as Tab) ? (qTab as Tab) : 'materi');
  const [modul, setModul] = useState(query.get('modul') ?? 'modul-1');
  const [topik, setTopik] = useState(query.get('topik') ?? 'm1-tujuan-rti');
  const [alat, setAlat] = useState(query.get('alat') ?? 'likert');
  const [glossaryOpen, setGlossaryOpen] = useState(qTab === 'glosarium');
  const [glossaryTerm, setGlossaryTerm] = useState<string | undefined>(query.get('istilah') ?? undefined);

  // Sinkronkan saat tautan (mis. dari pencarian) berubah
  const search = query.toString();
  useEffect(() => {
    const t = query.get('tab');
    if (t === 'glosarium') {
      setGlossaryTerm(query.get('istilah') ?? undefined);
      setGlossaryOpen(true);
    } else if (TABS.includes(t as Tab)) {
      setTab(t as Tab);
    }
    if (query.get('modul')) setModul(query.get('modul')!);
    if (query.get('topik')) setTopik(query.get('topik')!);
    if (query.get('alat')) setAlat(query.get('alat')!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const goTopic = (m: string, t: string) => {
    setModul(m);
    setTopik(t);
    setTab('materi');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Page wide className="pb-0 lg:pb-0">
        <PageHeader
          eyebrow="Belajar metodologi"
          title="Materi Metodologi Riset"
          subtitle="Tujuh modul, hafalan flashcard, latihan soal, dan alat interaktif. Konsep metodologinya berlaku untuk semua jurusan; contoh dan studi kasusnya bernuansa Teknologi Informasi."
          icon={<GraduationCap aria-hidden="true" className="h-5 w-5" />}
          actions={
            <button
              className="btn-soft"
              onClick={() => {
                setGlossaryTerm(undefined);
                setGlossaryOpen(true);
              }}
            >
              <BookMarked aria-hidden="true" className="h-4 w-4" /> Glosarium
            </button>
          }
        />
        <div className="mb-2">
          <Segmented<Tab>
            ariaLabel="Bagian materi metodologi"
            value={tab}
            onChange={setTab}
            scrollable
            options={[
              { value: 'materi', label: 'Materi', icon: <BookOpen aria-hidden="true" className="h-4 w-4" /> },
              { value: 'hafalan', label: 'Hafalan', icon: <Layers aria-hidden="true" className="h-4 w-4" /> },
              { value: 'latihan', label: 'Latihan', icon: <Award aria-hidden="true" className="h-4 w-4" /> },
              { value: 'alat', label: 'Alat', icon: <Wrench aria-hidden="true" className="h-4 w-4" /> },
              { value: 'profil', label: 'Progres', icon: <User aria-hidden="true" className="h-4 w-4" /> }
            ]}
          />
        </div>
      </Page>

      <div className="pb-6">
        {tab === 'materi' && (
          <StudyView
            key={`${modul}-${topik}`}
            initialModuleSlug={modul}
            initialTopicId={topik}
            onNavigateToQuiz={() => setTab('latihan')}
            onNavigateToTools={(id) => {
              if (id) setAlat(id);
              setTab('alat');
            }}
          />
        )}
        {tab === 'hafalan' && <FlashcardsView />}
        {tab === 'latihan' && <QuizView />}
        {tab === 'alat' && <ToolsView key={alat} initialToolId={alat} />}
        {tab === 'profil' && <ProfileView onNavigateToTopic={goTopic} />}
      </div>

      <GlossaryModal isOpen={glossaryOpen} onClose={() => setGlossaryOpen(false)} initialTermId={glossaryTerm} />
    </>
  );
}
