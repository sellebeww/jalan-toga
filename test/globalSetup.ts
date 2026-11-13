/** Menyeragamkan zona waktu untuk semua tes (dijalankan di proses utama sebelum worker dibuat). */
export default function setup() {
  process.env.TZ = 'UTC';
}
