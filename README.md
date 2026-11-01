# Sistem Penilaian & Evaluasi Akademik

Program web sederhana untuk menentukan predikat nilai mahasiswa berdasarkan angka yang dimasukkan, serta menampilkan rekapitulasi daftar nilai kelas menggunakan perulangan.

## Deskripsi

Aplikasi ini dibuat untuk memenuhi tugas Pemrograman Web (Pertemuan 6). Program memanfaatkan:

- **Percabangan (if-else)** dengan lebih dari 5 kondisi untuk menentukan predikat nilai.
- **Perulangan (for loop)** untuk menampilkan daftar nilai mahasiswa ke dalam tabel.

## Struktur File

```
.
├── index.html   # Struktur halaman web
├── style.css    # Tampilan / styling halaman
├── script.js    # Logika percabangan dan perulangan
└── README.md    # Dokumentasi proyek
```
## Penjelasan Kode

### 1. Percabangan (`script.js`)

Fungsi `evaluasiNilai(nilai)` menggunakan `if-else` dengan 7 kondisi:

| Rentang Nilai | Predikat |
|---------------|----------|
| 85 - 100      | A (Sangat Baik) |
| 75 - 84       | B+ (Baik Sekali) |
| 65 - 74       | B (Baik) |
| 55 - 64       | C+ (Cukup Baik) |
| 45 - 54       | C (Cukup) |
| 30 - 44       | D (Kurang) |
| 0 - 29        | E (Gagal) |

Jika nilai di luar rentang 0-100, fungsi mengembalikan predikat `Tidak Valid`.

Event listener pada tombol `checkBtn` membaca input, memanggil `evaluasiNilai`, lalu menampilkan hasil pada `gradeResult` dan `msgResult`.

### 2. Perulangan (`script.js`)

Array `dataMahasiswa` berisi 5 data mahasiswa. Tombol `generateBtn` menjalankan `for loop` yang:

1. Mengosongkan isi tabel sebelumnya.
2. Melakukan iterasi dari indeks `0` sampai `dataMahasiswa.length - 1`.
3. Memanggil `evaluasiNilai()` untuk setiap nilai mahasiswa.
4. Membuat baris tabel (`<tr>`) berisi nomor, nama, nilai, dan predikat.
