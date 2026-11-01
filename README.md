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

## Cara Menjalankan

1. Clone atau download repository ini.
2. Buka file `index.html` menggunakan browser (cukup double-click).
3. Masukkan nilai angka pada kolom yang tersedia, lalu klik **Proses Nilai**.
4. Klik **Tampilkan daftar nilai kelas** untuk melihat rekapitulasi nilai.

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

## Teknologi

- HTML5
- CSS3
- JavaScript (Vanilla)

## Author

- Nama: Ilham Syahnara
- GitHub: [@YierCodee](https://github.com/YierCodee)
```

Need ensure author name correct? Git user YierCodee, email ilhamsyahnara. Name maybe Ilham. Fine. Could avoid assuming full name? Use "Ilham" maybe. The email ilhamsyahnara388. We'll keep.

Now create new repo and push. Need maybe change remote from old to new. Since current repo tracks origin main old. We can create new repo with gh repo create, then set remote. But if we run `gh repo create ... --source=. --push`, it may push current branch to new repo. However current remote origin points to old repo; gh can add remote? Let's check gh repo create options. We can use `gh repo create sistem-penilaian-akademik --public --source=. --remote=origin --push` but origin already exists pointing old. This might fail or overwrite? Better rename old remote to upstream? We don't need old. Could remove origin and create new. But user wants new repo. We can set remote-url to new after creation. Let's do carefully.

First commit changes.<|end|><|start|><|start|>assistant to=shell<|channel|>analysis <|constrain|>xml<|message|><rfl:parameter name="command">
cd "/home/ilham/Documents/Academic/semester 3/pemrograman web/pertemuan 6" && git add -A && git commit -m "Fix bugs and add README for tugas pertemuan 6"