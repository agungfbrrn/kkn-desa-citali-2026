import React from 'react';

const DashboardPage = () => {
    // --- KONFIGURASI TANGGAL KKN (GANTI DI SINI) ---
    const START_DATE = '2026-01-13'; // Tanggal Mulai
    const END_DATE = '2026-02-15'; // Tanggal Selesai
    // -----------------------------------------------

    // --- LOGIKA PERHITUNGAN OTOMATIS ---
    const today = new Date();
    const start = new Date(START_DATE);
    const end = new Date(END_DATE);

    // 1. Hitung Total Durasi
    const totalDurationDiff = end.getTime() - start.getTime();
    const totalDurationDays = Math.ceil(totalDurationDiff / (1000 * 60 * 60 * 24)) + 1;

    // 2. Hitung Hari Berjalan
    const elapsedDiff = today.getTime() - start.getTime();
    let daysElapsed = Math.ceil(elapsedDiff / (1000 * 60 * 60 * 24));

    if (daysElapsed < 0) daysElapsed = 0;
    if (daysElapsed > totalDurationDays) daysElapsed = totalDurationDays;

    // 3. Hitung Sisa Hari
    const daysRemaining = totalDurationDays - daysElapsed;

    // 4. Hitung Laporan
    const reportsCollected = daysElapsed;
    // -----------------------------------

    return (
        // REVISI: Tambahkan 'flex-grow flex flex-col justify-center' di sini juga
        <div className="w-full max-w-4xl animate-fade-in-up flex-grow flex flex-col justify-center min-h-[60vh]">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-100">Dashboard Progres</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                    <h3 className="text-4xl font-bold text-blue-400 mb-2">{daysElapsed}</h3>
                    <p className="text-slate-400 text-sm">Hari Berjalan</p>
                    <p className="text-[10px] text-slate-500 mt-1">Dari total {totalDurationDays} hari</p>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                    <h3 className="text-4xl font-bold text-green-400 mb-2">{reportsCollected}</h3>
                    <p className="text-slate-400 text-sm">Laporan Terkumpul</p>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                    <h3 className="text-4xl font-bold text-purple-400 mb-2">{daysRemaining}</h3>
                    <p className="text-slate-400 text-sm">Sisa Hari</p>
                </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 border-b border-white/10 pb-2">Status Laporan Mingguan</h3>
                <ul className="space-y-3">
                    <li className="flex justify-between items-center text-sm">
                        <span className="text-slate-300">Minggu 1</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Selesai</span>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                        <span className="text-slate-300">Minggu 2</span>
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">Pending</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardPage;