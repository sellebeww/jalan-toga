export interface DocTemplate {
  id: string;
  judul: string;
  ringkas: string;
  untuk: string;
  /** teks berisi placeholder {nama} {nim} {prodi} {kampus} {dosen} {judul} dan [isian] */
  isi: string;
}

export const docTemplates: DocTemplate[] = [
  {
    id: 'proposal',
    judul: 'Kerangka proposal skripsi (Bab 1–3)',
    ringkas: 'Kerangka siap isi untuk proposal.',
    untuk: 'Semua jurusan; sesuaikan dengan pedoman prodi.',
    isi: `PROPOSAL SKRIPSI

{judul}

Diajukan oleh:
{nama}
NIM {nim}
Program Studi {prodi}
{kampus}

Dosen Pembimbing: {dosen}

[Tahun]

----------------------------------------
BAB I PENDAHULUAN
1.1 Latar Belakang Masalah
   - Kondisi umum/ideal tentang [topik]
   - Fenomena/masalah di [objek] + data (angka, tahun, sumber)
   - Penelitian terdahulu dan celah penelitian
   - Alasan memilih [objek/lokasi]
1.2 Rumusan Masalah
   1) [Pertanyaan penelitian 1]?
   2) [Pertanyaan penelitian 2]?
1.3 Tujuan Penelitian
   1) Untuk [menganalisis/mengetahui/mengembangkan] ...
   2) ...
1.4 Manfaat Penelitian
   - Manfaat teoretis: ...
   - Manfaat praktis: bagi [pihak spesifik], ...
1.5 Batasan Masalah / Ruang Lingkup
1.6 Sistematika Penulisan (bila diwajibkan)

BAB II TINJAUAN PUSTAKA
2.1 Landasan Teori
   2.1.1 [Konsep/Variabel 1]
   2.1.2 [Konsep/Variabel 2]
2.2 Penelitian Terdahulu (tabel: peneliti, tahun, judul, metode, hasil, perbedaan)
2.3 Kerangka Pemikiran
2.4 Hipotesis Penelitian (jika kuantitatif)

BAB III METODE PENELITIAN
3.1 Jenis dan Desain Penelitian
3.2 Lokasi dan Waktu Penelitian
3.3 Populasi dan Sampel
3.4 Variabel dan Definisi Operasional
3.5 Teknik Pengumpulan Data dan Instrumen
3.6 Uji Instrumen (validitas dan reliabilitas)
3.7 Teknik Analisis Data

JADWAL PENELITIAN
[Tabel kegiatan dan bulan]

DAFTAR PUSTAKA
[Gaya sitasi sesuai pedoman]

LAMPIRAN
[Draf instrumen, surat izin, dsb.]`
  },
  {
    id: 'pengajuan-judul',
    judul: 'Formulir pengajuan judul & permohonan pembimbing',
    ringkas: 'Ringkasan satu halaman untuk calon pembimbing.',
    untuk: 'Pengajuan judul atau pertemuan awal.',
    isi: `PENGAJUAN JUDUL SKRIPSI

Nama      : {nama}
NIM       : {nim}
Prodi     : {prodi}
Kampus    : {kampus}

Judul yang diajukan:
1. {judul}
2. [Alternatif judul 2]
3. [Alternatif judul 3]

Ringkasan singkat (maks. 1 halaman)
- Masalah penelitian: [data/fakta singkat]
- Tujuan: [apa yang ingin dicapai]
- Metode: [pendekatan, sampel, analisis]
- Data/objek yang akan digunakan: [sumber dan ketersediaan]
- Alasan memilih Bapak/Ibu {dosen} sebagai pembimbing: [kaitan dengan bidang keahlian]

Rencana waktu: [mulai–selesai]

Demikian pengajuan ini disampaikan. Terima kasih atas perhatian Bapak/Ibu.

[Kota], [tanggal]
Hormat saya,

{nama}`
  },
  {
    id: 'surat-izin',
    judul: 'Surat permohonan izin penelitian',
    ringkas: 'Untuk instansi, sekolah, perusahaan, atau lembaga lokasi penelitian.',
    untuk: 'Dilampiri surat pengantar resmi dari fakultas/prodi.',
    isi: `[Kota], [tanggal]

Nomor    : [nomor surat dari kampus]
Lampiran : 1 (satu) berkas proposal ringkas
Perihal  : Permohonan Izin Penelitian

Yth. [Pimpinan/Kepala instansi]
[Nama instansi]
di [Kota]

Dengan hormat,
Sehubungan dengan penyusunan skripsi mahasiswa Program Studi {prodi}, {kampus}, bersama ini kami mengajukan permohonan izin penelitian bagi:

Nama   : {nama}
NIM    : {nim}
Judul  : {judul}

Penelitian direncanakan dilaksanakan pada [periode] dengan kegiatan [pengumpulan data: wawancara/kuesioner/observasi/dokumentasi]. Seluruh data dijamin kerahasiaannya dan hanya digunakan untuk kepentingan akademik.

Besar harapan kami atas persetujuan Bapak/Ibu. Atas perhatian dan kerja samanya, kami ucapkan terima kasih.

Hormat kami,
[Pejabat berwenang di fakultas/prodi]
Pembimbing: {dosen}`
  },
  {
    id: 'kuesioner',
    judul: 'Kuesioner (skala Likert) – kerangka',
    ringkas: 'Struktur kuesioner lengkap dengan persetujuan responden.',
    untuk: 'Penelitian kuantitatif/survei.',
    isi: `KUESIONER PENELITIAN
{judul}

Peneliti : {nama} ({kampus})

LEMBAR PERSETUJUAN
Saya diminta mengisi kuesioner untuk penelitian skripsi. Partisipasi bersifat sukarela, jawaban dijamin kerahasiaannya, dan hanya digunakan untuk kepentingan akademik. Anda boleh berhenti kapan saja.
[ ] Saya bersedia berpartisipasi

BAGIAN A. IDENTITAS RESPONDEN
1. Usia            : [ ] <20  [ ] 20–25  [ ] >25
2. Jenis kelamin   : [ ] Laki-laki  [ ] Perempuan  [ ] Memilih tidak menjawab
3. [Data demografis lain yang relevan: pekerjaan, lama menggunakan, dst.]

BAGIAN B. PERNYATAAN (isi sesuai pendapat Anda)
Skala: 1 = Sangat Tidak Setuju, 2 = Tidak Setuju, 3 = Netral, 4 = Setuju, 5 = Sangat Setuju

Variabel X: [nama variabel]
No | Pernyataan                              | 1 | 2 | 3 | 4 | 5
1  | [Pernyataan indikator 1]                |   |   |   |   |
2  | [Pernyataan indikator 2]                |   |   |   |   |
3  | [Pernyataan indikator 3]                |   |   |   |   |

Variabel Y: [nama variabel]
4  | [Pernyataan indikator 1]                |   |   |   |   |
5  | [Pernyataan indikator 2]                |   |   |   |   |
6  | [Pernyataan indikator 3]                |   |   |   |   |

Terima kasih atas partisipasi Anda.

CATATAN PENYUSUNAN
- Tiap butir mengukur satu hal (hindari kalimat ganda).
- Gunakan indikator dari teori/penelitian terdahulu dan sebutkan sumbernya.
- Uji coba ke 20–30 orang dan uji validitas serta reliabilitas sebelum penyebaran utama.`
  },
  {
    id: 'consent',
    judul: 'Lembar persetujuan responden / informan',
    ringkas: 'Informed consent sederhana.',
    untuk: 'Wawancara, observasi, dan survei yang melibatkan manusia.',
    isi: `LEMBAR PERSETUJUAN MENJADI RESPONDEN/INFORMAN

Judul penelitian : {judul}
Peneliti         : {nama} ({nim}), {prodi}, {kampus}
Pembimbing       : {dosen}

Tujuan penelitian: [jelaskan singkat]
Prosedur: [misal wawancara sekitar 30–45 menit, direkam bila disetujui]
Risiko dan manfaat: [jelaskan risiko minimal dan manfaat bagi partisipan/ilmu]
Kerahasiaan: Identitas Anda akan dirahasiakan (memakai kode/inisial). Data disimpan aman dan hanya digunakan untuk kepentingan akademik.
Sukarela: Anda bebas menolak atau berhenti kapan saja tanpa konsekuensi.

Kontak peneliti: [nomor/email]

Pernyataan:
Saya telah membaca dan memahami penjelasan di atas, dan menyatakan bersedia berpartisipasi.
[ ] Saya setuju wawancara direkam (suara)

Nama / inisial : ...............................
Tanda tangan   : ...............................
Tanggal        : ...............................`
  },
  {
    id: 'wawancara',
    judul: 'Pedoman wawancara semiterstruktur',
    ringkas: 'Kerangka pertanyaan wawancara kualitatif.',
    untuk: 'Penelitian kualitatif dan studi kasus.',
    isi: `PEDOMAN WAWANCARA
Judul : {judul}
Peneliti : {nama}

Informan   : [kode/inisial, peran]
Tanggal    : [..]   Lokasi: [..]   Durasi: [..]

PEMBUKA
- Perkenalan, tujuan, persetujuan merekam, jaminan kerahasiaan.

PERTANYAAN INTI (sesuaikan dengan fokus penelitian)
1. Bisa diceritakan awal mula [fenomena] terjadi menurut Bapak/Ibu/Anda?   (konteks)
2. Bagaimana Anda mengalami/menjalankan [aktivitas]?                           (pengalaman)
3. Apa yang menjadi faktor pendukung dan penghambat?                           (faktor)
4. Bagaimana perasaan/pandangan Anda terhadap [hal]?                           (makna)
5. Menurut Anda, apa yang perlu diperbaiki ke depan?                           (harapan)
[Tambahkan pertanyaan probing: "Bisa diberi contoh?", "Mengapa begitu?"]

PENUTUP
- Apakah ada hal lain yang ingin Anda tambahkan?
- Siapa lagi yang menurut Anda perlu saya wawancarai?
- Ucapan terima kasih.

CATATAN PENELITI (refleksi, ekspresi, hal tak terduga)
..................................................`
  },
  {
    id: 'observasi',
    judul: 'Lembar observasi',
    ringkas: 'Format catatan observasi terstruktur.',
    untuk: 'Penelitian kualitatif, PTK, studi kasus.',
    isi: `LEMBAR OBSERVASI
Judul   : {judul}
Peneliti: {nama}
Tanggal : [..]   Waktu: [..]   Lokasi: [..]
Subjek/aktivitas diamati: [..]

NO | ASPEK YANG DIAMATI | ADA/TIDAK / SKOR (1–4) | CATATAN DESKRIPTIF
1  | [Aspek 1]          |                        |
2  | [Aspek 2]          |                        |
3  | [Aspek 3]          |                        |

CATATAN LAPANGAN (deskriptif) :
...................................................
REFLEKSI PENELITI :
...................................................`
  },
  {
    id: 'validasi',
    judul: 'Lembar validasi ahli (instrumen/produk)',
    ringkas: 'Untuk meminta validasi dosen ahli.',
    untuk: 'Instrumen, modul, media, dan produk R&D.',
    isi: `LEMBAR VALIDASI AHLI
Judul penelitian : {judul}
Peneliti         : {nama} ({nim})
Validator        : [nama, instansi, bidang keahlian]
Objek divalidasi : [instrumen/modul/media/produk]

Petunjuk: Berilah tanda centang (✓) pada skor sesuai penilaian Bapak/Ibu.
Skala: 1 = Tidak baik, 2 = Kurang baik, 3 = Baik, 4 = Sangat baik

NO | ASPEK / INDIKATOR PENILAIAN | 1 | 2 | 3 | 4 | CATATAN
1  | [Kesesuaian dengan tujuan]  |   |   |   |   |
2  | [Kejelasan bahasa/petunjuk] |   |   |   |   |
3  | [Kelengkapan isi]           |   |   |   |   |
4  | [Tampilan/desain]           |   |   |   |   |

Saran dan masukan:
...................................................
Kesimpulan:
[ ] Layak digunakan tanpa revisi  [ ] Layak dengan revisi  [ ] Belum layak

[Kota], [tanggal]
Validator,
(...............................)`
  },
  {
    id: 'pengesahan',
    judul: 'Lembar pengesahan (contoh format)',
    ringkas: 'Gambaran isi lembar pengesahan skripsi.',
    untuk: 'Format resmi mengikuti pedoman kampus; ini hanya contoh.',
    isi: `LEMBAR PENGESAHAN

SKRIPSI

{judul}

Disusun oleh:
{nama}
NIM {nim}

Telah dipertahankan di depan Dewan Penguji pada tanggal [tanggal sidang]
dan dinyatakan telah memenuhi syarat untuk memperoleh gelar [gelar].

DEWAN PENGUJI
Ketua Penguji       : [nama]          (..............)
Penguji I           : [nama]          (..............)
Penguji II          : [nama]          (..............)
Pembimbing          : {dosen}         (..............)

Mengesahkan,
Dekan / Ketua Program Studi {prodi}
{kampus}

(..............................)
NIP/NIDN [..]`
  },
  {
    id: 'keaslian',
    judul: 'Surat pernyataan keaslian karya',
    ringkas: 'Pernyataan bebas plagiarisme.',
    untuk: 'Dilampirkan di bagian awal skripsi; ikuti format kampus.',
    isi: `SURAT PERNYATAAN KEASLIAN

Yang bertanda tangan di bawah ini:
Nama    : {nama}
NIM     : {nim}
Prodi   : {prodi}

Dengan ini menyatakan bahwa skripsi yang berjudul "{judul}" adalah hasil karya saya sendiri, bukan hasil plagiarisme, dan seluruh sumber yang dikutip telah saya cantumkan dengan benar.

Apabila di kemudian hari terbukti terdapat pelanggaran, saya bersedia menerima sanksi sesuai ketentuan yang berlaku di {kampus}.

[Kota], [tanggal]
Yang menyatakan,

[materai]
{nama}`
  },
  {
    id: 'revisi',
    judul: 'Tabel revisi pasca seminar/sidang',
    ringkas: 'Mencatat dan melacak seluruh masukan penguji.',
    untuk: 'Pakai segera setelah seminar atau sidang.',
    isi: `TABEL PERBAIKAN (REVISI)
Judul : {judul}
Nama  : {nama} ({nim})

NO | PENGUJI | MASUKAN / KOMENTAR | HALAMAN | PERBAIKAN YANG DILAKUKAN | STATUS | PARAF
1  | [..]    | [..]               | [..]    | [..]                     | [ ]    |
2  | [..]    | [..]               | [..]    | [..]                     | [ ]    |

Tips: kelompokkan masukan per penguji, kerjakan yang paling mudah dulu, dan minta tanda tangan segera setelah perbaikan disetujui.`
  },
  {
    id: 'ttd-bimbingan',
    judul: 'Catatan bimbingan (kartu kendali sederhana)',
    ringkas: 'Jika kampus tidak menyediakan sistem bimbingan.',
    untuk: 'Dokumentasi pribadi dan bukti bimbingan.',
    isi: `KARTU BIMBINGAN
Nama   : {nama}   NIM: {nim}
Judul  : {judul}
Pembimbing: {dosen}

NO | TANGGAL | MATERI BIMBINGAN | SARAN / REVISI | PARAF DOSEN
1  | [..]    | [..]             | [..]           |
2  | [..]    | [..]             | [..]           |
3  | [..]    | [..]             | [..]           |`
  }
];

export function fillDoc(text: string, values: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (_, k: string) => {
    const v = values[k]?.trim();
    return v ? v : `[${k}]`;
  });
}
