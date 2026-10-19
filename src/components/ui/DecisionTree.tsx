import React, { useState } from 'react';
import { HelpCircle, RotateCcw, ArrowRight, CheckCircle2 } from 'lucide-react';

export const DecisionTree: React.FC = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState<string>('q1');
  const [history, setHistory] = useState<string[]>([]);

  interface QuestionNode {
    id: string;
    question: string;
    description: string;
    yesTarget: string;
    noTarget: string;
  }

  interface ResultNode {
    design: string;
    type: string;
    characteristics: string;
    example: string;
  }

  const questions: Record<string, QuestionNode> = {
    q1: {
      id: 'q1',
      question: 'Apakah Anda akan memanipulasi variabel perlakuan (treatment) pada subjek penelitian?',
      description: 'Misalnya secara sengaja menerapkan algoritma baru ke satu kelompok dan algoritma lama ke kelompok lain dalam kondisi terkendali.',
      yesTarget: 'q2',
      noTarget: 'q3'
    },
    q2: {
      id: 'q2',
      question: 'Apakah ada kelompok kontrol pembanding yang dijaga kondisinya secara setara?',
      description: 'Kelompok kontrol berfungsi sebagai baseline pembanding tanpa diberi perlakuan baru.',
      yesTarget: 'r_experimental',
      noTarget: 'r_quasi'
    },
    q3: {
      id: 'q3',
      question: 'Apakah efek atau akibat sudah terjadi di lapangan dan Anda ingin mencari tahu faktor penyebabnya?',
      description: 'Misalnya meneliti mengapa mahasiswa angkatan tertentu memiliki tingkat kegagalan tinggi berdasarkan data arsip nilai lampau.',
      yesTarget: 'r_causal_comp',
      noTarget: 'q4'
    },
    q4: {
      id: 'q4',
      question: 'Apakah Anda akan terjun langsung melakukan aksi nyata bersama subjek/organisasi untuk menyelesaikan masalah?',
      description: 'Peneliti bertindak sebagai agen perubahan yang bekerja sama merekayasa alur kerja lalu mengevaluasi dampaknya.',
      yesTarget: 'r_action_research',
      noTarget: 'q5'
    },
    q5: {
      id: 'q5',
      question: 'Apakah fokus utama Anda adalah mengamati kebiasaan, nilai, dan budaya kerja sekelompok orang?',
      description: 'Misalnya mengamati budaya interaksi komunitas pengembang open-source dalam organisasi.',
      yesTarget: 'r_ethnographic',
      noTarget: 'q6'
    },
    q6: {
      id: 'q6',
      question: 'Apakah Anda meneliti dokumen, arsip, dan rekaman peristiwa masa lampau?',
      description: 'Bertujuan merekonstruksi kronologi dan perkembangan sejarah teknologi secara objektif.',
      yesTarget: 'r_historical',
      noTarget: 'q7'
    },
    q7: {
      id: 'q7',
      question: 'Apakah Anda ingin mengeksplorasi secara mendalam SATU entitas/kasus spesifik dengan data primer dan konfirmasi sumber utama?',
      description: 'Fokus pada satu organisasi, satu portal, atau satu kelompok tertentu secara mendalam.',
      yesTarget: 'r_case_study',
      noTarget: 'r_survey'
    }
  };

  const results: Record<string, ResultNode> = {
    r_experimental: {
      design: 'Experimental Research (Eksperimen)',
      type: 'Kausalitas Terkendali Murni',
      characteristics: 'Membandingkan kelompok kontrol vs perlakuan; ada manipulasi treatment aktif dan pengendalian variabel secara ketat.',
      example: 'Membandingkan kecepatan pencarian Server A (kontrol) vs Server B (menggunakan algoritma baru) dengan beban data sintetis 100.000 query.'
    },
    r_quasi: {
      design: 'Quasi Experimental Research',
      type: 'Eksperimen Tanpa Kontrol (Versi Modul)',
      characteristics: 'Modul menjelaskan sebagai eksperimen tanpa kelompok kontrol, diukur sesudah treatment ("one-shot posttest"), biasanya menggunakan data kualitatif.',
      example: 'Mencatat respons kepuasan dan adaptasi staf tepat setelah satu sistem ERP baru diluncurkan ke seluruh divisi tanpa ada pembanding.'
    },
    r_causal_comp: {
      design: 'Causal-Comparative Research',
      type: 'Ex Post Facto (Kausal Non-Manipulatif)',
      characteristics: 'Mengkaji efek yang sudah terjadi lebih dulu lalu mencari kemungkinan penyebabnya; variabel independen TIDAK dimanipulasi peneliti.',
      example: 'Membandingkan nilai IPK mahasiswa yang rutin memakai portal kampus vs yang jarang memakai portal berdasarkan log tahun lalu.'
    },
    r_action_research: {
      design: 'Action Research (Penelitian Tindakan)',
      type: 'Tindakan Solutif Kolaboratif',
      characteristics: 'Pembelajaran terdokumentasi dan termonitor atas tindakan nyata bersama subjek/organisasi untuk menyelesaikan masalah praktis di lapangan.',
      example: 'Peneliti bersama pengelola portal merevisi alur penginputan kegiatan setiap minggu dan memonitor penurunan kesalahan input.'
    },
    r_ethnographic: {
      design: 'Ethnographic Research (Etnografi)',
      type: 'Kajian Budaya Komunitas',
      characteristics: 'Menyelidiki budaya, kebiasaan interaksi, dan norma sekelompok orang atau kelompok kerja dalam organisasi.',
      example: 'Mengkaji budaya kolaborasi dan kebiasaan komunikasi tim pengembang perangkat lunak dalam menangani bug kritis.'
    },
    r_historical: {
      design: 'Historical Research (Historis)',
      type: 'Rekonstruksi Masa Lampau',
      characteristics: 'Mengumpulkan, mengevaluasi, memverifikasi, dan mensintesis bukti-bukti lampau untuk rekonstruksi sejarah secara objektif.',
      example: 'Mengkaji evolusi penerapan sistem informasi akademik kampus dari dokumen dan arsip berita tahun 1995-2025.'
    },
    r_case_study: {
      design: 'Case Studies (Studi Kasus)',
      type: 'Eksplorasi Mendalam Satu Kasus',
      characteristics: 'Eksplorasi mendalam atas keadaan atau masalah satu unit tertentu; modul mensyaratkan data primer, dokumen tervalidasi, dan konfirmasi ke primary source.',
      example: 'Penyelidikan mendalam proses adopsi portal informasi kegiatan di Fakultas Teknik dengan konfirmasi wawancara dekan dan dokumen BEM.'
    },
    r_survey: {
      design: 'Survey Research (Survei)',
      type: 'Pengambilan Sampel Luas',
      characteristics: 'Mengambil sampel dari populasi menggunakan kuesioner sebagai instrumen pokok; analisis bersifat deskriptif atau explanatory.',
      example: 'Menyebarkan kuesioner skala Likert kepada 200 mahasiswa untuk mengukur persepsi kemudahan penggunaan portal baru.'
    }
  };

  const isResult = currentQuestionId.startsWith('r_');

  const handleChoice = (target: string) => {
    setHistory([...history, currentQuestionId]);
    setCurrentQuestionId(target);
  };

  const handleReset = () => {
    setCurrentQuestionId('q1');
    setHistory([]);
  };

  return (
    <div className="my-6 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-heading font-bold text-slate-900 dark:text-slate-100 text-base">
            Pohon Keputusan: "Penelitianku Cocok Pakai Desain Apa?"
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Jawab pertanyaan ya/tidak berikut untuk menemukan desain penelitian yang sah menurut modul RTI
          </p>
        </div>
        <button
          onClick={handleReset}
          className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer text-xs flex items-center gap-1 transition"
          title="Ulangi dari awal"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Ulangi</span>
        </button>
      </div>

      {!isResult ? (
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block mb-1">
                Langkah Penentuan #{history.length + 1}
              </span>
              <h5 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100 leading-snug">
                {questions[currentQuestionId].question}
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {questions[currentQuestionId].description}
              </p>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => handleChoice(questions[currentQuestionId].yesTarget)}
              className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm shadow-indigo-600/20"
            >
              <span>Ya, Tepat Sekali</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleChoice(questions[currentQuestionId].noTarget)}
              className="flex-1 py-2.5 px-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors cursor-pointer"
            >
              Tidak
            </button>
          </div>
        </div>
      ) : (
        <div className="p-5 rounded-xl border-2 border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 space-y-3">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold text-xs uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>Rekomendasi Desain Riset Sesuai Modul</span>
          </div>

          <h5 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">
            {results[currentQuestionId].design}
          </h5>

          <div className="text-xs font-mono text-emerald-800 dark:text-emerald-300 font-semibold">
            Klasifikasi: {results[currentQuestionId].type}
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {results[currentQuestionId].characteristics}
          </p>

          <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-xs">
            <span className="font-semibold text-slate-500 dark:text-slate-400 block mb-0.5">Contoh Kasus Riset:</span>
            <span className="text-slate-800 dark:text-slate-200 italic">
              "{results[currentQuestionId].example}"
            </span>
          </div>

          <button
            onClick={handleReset}
            className="mt-2 py-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold cursor-pointer"
          >
            Cek Desain Lainnya
          </button>
        </div>
      )}
    </div>
  );
};
