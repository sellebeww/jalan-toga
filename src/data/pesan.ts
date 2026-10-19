export interface MessageTemplate {
  id: string;
  judul: string;
  kapan: string;
  kanal: 'WhatsApp' | 'Email' | 'WhatsApp / Email';
  isi: string;
}

/**
 * Placeholder: {dosen} {nama} {nim} {judul} {prodi} {bab} {tanggal} {opsi1} {opsi2}.
 * Isi yang tak terisi tetap tampil dalam kurung siku agar mudah dilengkapi.
 */
export const messageTemplates: MessageTemplate[] = [
  {
    id: 'minta-bimbingan',
    judul: 'Meminta jadwal bimbingan',
    kapan: 'Saat draf siap dan ingin bertemu.',
    kanal: 'WhatsApp',
    isi: `Selamat {waktu}, Bapak/Ibu {dosen}. Mohon maaf mengganggu.
Saya {nama} ({nim}), mahasiswa bimbingan skripsi dengan judul "{judul}".
Saya telah menyelesaikan draf {bab} dan ingin berkonsultasi. Apakah Bapak/Ibu berkenan memberikan waktu pada {opsi1} atau {opsi2}? Draf saya lampirkan agar dapat dibaca terlebih dahulu.
Terima kasih banyak atas waktunya, Bapak/Ibu.`
  },
  {
    id: 'follow-up',
    judul: 'Menindaklanjuti pesan yang belum dibalas',
    kapan: '3–4 hari kerja setelah pesan pertama tanpa balasan.',
    kanal: 'WhatsApp',
    isi: `Selamat {waktu}, Bapak/Ibu {dosen}. Mohon izin menindaklanjuti pesan saya tanggal {tanggal} mengenai bimbingan {bab}.
Jika Bapak/Ibu sedang berhalangan, saya siap menyesuaikan jadwal. Mohon informasi waktu yang memungkinkan.
Terima kasih atas perhatiannya. {nama} ({nim})`
  },
  {
    id: 'minta-jadwal-email',
    judul: 'Email permohonan bimbingan resmi',
    kapan: 'Ketika dosen lebih responsif lewat email atau perlu surat resmi.',
    kanal: 'Email',
    isi: `Subjek: Permohonan Bimbingan Skripsi – {nama} ({nim})

Yth. Bapak/Ibu {dosen},

Dengan hormat,
Saya {nama} (NIM {nim}), mahasiswa Program Studi {prodi}, bermaksud memohon waktu bimbingan skripsi dengan judul "{judul}".
Saat ini saya telah menyelesaikan {bab} dan melampirkan drafnya pada email ini. Adapun hal yang ingin saya konsultasikan: [tuliskan 2–3 pertanyaan spesifik].
Apakah Bapak/Ibu berkenan memberikan jadwal pada {opsi1} atau {opsi2}? Saya akan menyesuaikan.

Atas perhatian dan waktunya, saya ucapkan terima kasih.

Hormat saya,
{nama}
NIM {nim}`
  },
  {
    id: 'kirim-revisi',
    judul: 'Mengirim hasil revisi',
    kapan: 'Setelah menyelesaikan revisi dari bimbingan sebelumnya.',
    kanal: 'WhatsApp / Email',
    isi: `Selamat {waktu}, Bapak/Ibu {dosen}.
Berikut saya kirimkan hasil revisi {bab} sesuai arahan bimbingan tanggal {tanggal}. Poin yang sudah saya perbaiki: [sebutkan 2–3 poin].
Mohon masukan dan koreksinya apabila masih ada yang perlu diperbaiki. Terima kasih banyak, Bapak/Ibu.
{nama} ({nim})`
  },
  {
    id: 'minta-acc',
    judul: 'Meminta ACC untuk maju seminar/sidang',
    kapan: 'Naskah sudah lengkap dan bimbingan terakhir menyatakan hampir selesai.',
    kanal: 'WhatsApp / Email',
    isi: `Selamat {waktu}, Bapak/Ibu {dosen}.
Berdasarkan bimbingan terakhir, saya telah menyelesaikan seluruh revisi naskah skripsi "{judul}". Mohon izin bertanya apakah naskah sudah dapat disetujui (ACC) untuk maju [seminar proposal/sidang]?
Jika masih ada yang perlu diperbaiki, mohon petunjuknya. Terima kasih banyak atas bimbingannya, Bapak/Ibu.
{nama} ({nim})`
  },
  {
    id: 'reschedule',
    judul: 'Mengubah atau membatalkan jadwal',
    kapan: 'Berhalangan hadir pada jadwal yang sudah disepakati.',
    kanal: 'WhatsApp',
    isi: `Selamat {waktu}, Bapak/Ibu {dosen}. Mohon maaf, saya berhalangan hadir pada bimbingan yang dijadwalkan {tanggal} karena [alasan singkat].
Apakah memungkinkan jika dijadwalkan ulang pada {opsi1} atau {opsi2}? Mohon maaf atas ketidaknyamanannya dan terima kasih atas pengertian Bapak/Ibu.
{nama} ({nim})`
  },
  {
    id: 'terlambat',
    judul: 'Mengabarkan keterlambatan progres',
    kapan: 'Tertinggal dari target dan ingin tetap menjaga komunikasi.',
    kanal: 'WhatsApp',
    isi: `Selamat {waktu}, Bapak/Ibu {dosen}. Izin memberi kabar bahwa progres {bab} saya terlambat dari rencana karena [alasan singkat dan jujur].
Rencana saya ke depan: [langkah dan tanggal target]. Saya akan mengirimkan draf pada {opsi1}. Mohon arahannya bila ada hal yang perlu saya prioritaskan.
Terima kasih atas pengertiannya, Bapak/Ibu. {nama} ({nim})`
  },
  {
    id: 'minta-surat',
    judul: 'Meminta surat pengantar/rekomendasi',
    kapan: 'Butuh tanda tangan atau surat untuk izin penelitian.',
    kanal: 'WhatsApp / Email',
    isi: `Selamat {waktu}, Bapak/Ibu {dosen}. Mohon izin, saya memerlukan [surat pengantar/rekomendasi] untuk mengajukan izin penelitian di [nama instansi] terkait skripsi "{judul}".
Apakah Bapak/Ibu berkenan menandatangani atau memberikan persetujuan? Saya dapat membawa berkasnya ke kampus pada {opsi1}. Terima kasih banyak.
{nama} ({nim})`
  },
  {
    id: 'minta-referensi',
    judul: 'Meminta saran referensi atau penguji',
    kapan: 'Mentok mencari sumber atau ingin masukan penguji.',
    kanal: 'WhatsApp',
    isi: `Selamat {waktu}, Bapak/Ibu {dosen}. Saya sedang mendalami bagian [topik] pada {bab}. Apakah Bapak/Ibu berkenan merekomendasikan satu dua referensi atau penelitian kunci yang sebaiknya saya baca?
Terima kasih banyak atas arahannya. {nama} ({nim})`
  },
  {
    id: 'terima-kasih',
    judul: 'Ucapan terima kasih setelah lulus',
    kapan: 'Setelah sidang atau yudisium.',
    kanal: 'WhatsApp / Email',
    isi: `Selamat {waktu}, Bapak/Ibu {dosen}. Saya ingin menyampaikan terima kasih yang sebesar-besarnya atas bimbingan, waktu, dan kesabaran Bapak/Ibu selama proses skripsi saya. Berkat arahan Bapak/Ibu, saya dapat menyelesaikan skripsi dengan baik.
Semoga Bapak/Ibu senantiasa sehat dan sukses. Hormat saya, {nama} ({nim})`
  }
];

export function fillTemplate(text: string, values: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (_, key: string) => {
    const v = values[key]?.trim();
    return v ? v : `[${key}]`;
  });
}

export function greetingNow(date: Date = new Date()): string {
  const h = date.getHours();
  if (h >= 4 && h < 11) return 'pagi';
  if (h >= 11 && h < 15) return 'siang';
  if (h >= 15 && h < 18) return 'sore';
  return 'malam';
}
