// ==========================================
// 1. PERCABANGAN (> 5 Kondisi / Multi-way if-else)
// ==========================================
function evaluasiNilai(nilai) {
    let predikat = "";
    let keterangan = "";

    // Memiliki lebih dari 5 kondisi (A, B+, B, C+, C, D, E)
    if (nilai >= 85 && nilai <= 100) {
        predikat = "A (Sangat Baik)";
        keterangan = "Pertahankan prestasi akademik Anda!";
    } else if (nilai >= 75 && nilai < 85) {
        predikat = "B+ (Baik Sekali)";
        keterangan = "Hasil yang sangat memuaskan.";
    } else if (nilai >= 65 && nilai < 75) {
        predikat = "B (Baik)";
        keterangan = "Kinerja sudah cukup baik, tingkatkan lagi.";
    } else if (nilai >= 55 && nilai < 65) {
        predikat = "C+ (Cukup Baik)";
        keterangan = "Perlu usaha lebih giat ke depannya.";
    } else if (nilai >= 45 && nilai < 55) {
        predikat = "C (Cukup)";
        keterangan = "Cukup, namun disarankan evaluasi kembali pemahaman materi.";
    } else if (nilai >= 30 && nilai < 45) {
        predikat = "D (Kurang)";
        keterangan = "Belum lulus, wajib mengikuti perbaikan/remidi.";
    } else if (nilai >= 0 && nilai < 30) {
        predikat = "E (Gagal)";
        keterangan = "Tidak memenuhi syarat kelulusan mata kuliah.";
    } else {
        predikat = "Tidak Valid";
        keterangan = "Masukkan angka antara 0 sampai 100.";
    }

    return { predikat, keterangan };
}

// Event Listener untuk Tombol Cek Nilai
document.getElementById('checkBtn').addEventListener('click', function() {
    const inputVal = parseFloat(document.getElementById('scoreInput').value);
    const resultBox = document.getElementById('resultBox');
    const gradeResult = document.getElementById('gradeResult');
    const msgResult = document.getElementById('msgResult');

    if (isNaN(inputVal)) {
        alert("Mohon masukkan angka nilai terlebih dahulu!");
        return;
    }

    const hasil = evaluasiNilai(inputVal);

    gradeResult.innerHTML = `<strong>Predikat:</strong> ${hasil.predikat}`;
    msgResult.innerHTML = `<strong>Catatan:</strong> ${hasil.keterangan}`;
    resultBox.classList.remove('hidden');
});


// ==========================================
// 2. PERULANGAN (For Loop) & Implementasi Fungsi
// ==========================================
const dataMahasiswa = [
    { nama: "Ahmad", nilai: 88 },
    { nama: "Budi", nilai: 72 },
    { nama: "Siti", nilai: 60 },
    { nama: "Dewi", nilai: 40 },
    { nama: "Eko", nilai: 20 }
];

document.getElementById('generateBtn').addEventListener('click', function() {
    const tableBody = document.getElementById('tableBody');
    const scoreTable = document.getElementById('scoreTable');
    
    // Bersihkan isi tabel sebelumnya agar tidak menumpuk saat diklik ulang
    tableBody.innerHTML = "";

    // Menggunakan perulangan for untuk melooping data array
    for (let i = 0; i < dataMahasiswa.length; i++) {
        let mhs = dataMahasiswa[i];
        let evaluasi = evaluasiNilai(mhs.nilai); // Memanggil fungsi percabangan di atas

        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${mhs.nama}</td>
            <td>${mhs.nilai}</td>
            <td>${evaluasi.predikat}</td>
        `;
        tableBody.appendChild(row);
    }

    scoreTable.classList.remove('hidden');
});