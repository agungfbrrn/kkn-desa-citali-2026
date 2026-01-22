import React from 'react';
import { FileText, FilePenLine, CloudUpload } from 'lucide-react';

const HomePage = () => {
    // --- LOGIKA TANGGAL OTOMATIS ---
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const dynamicFileName = `${year}-${month}-${day}_LaporanHarian_NamaLengkap_NPM.docx`;
    // -------------------------------

    return (
        // REVISI: Tambahkan Wrapper div ini biar konten Home ke tengah (Center)
        // min-h-[65vh] artinya minimal tinggi konten 65% layar, jadi dia bakal turun ke tengah
        <div className="w-full flex flex-col items-center justify-center flex-grow min-h-[65vh]">

            <div className="text-center mb-12 animate-fade-in-up">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-blue-100 to-slate-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        Selamat Datang di Web KKN Desa Citali 2026
                    </span>
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Informasi laporan harian & mingguan KKN Desa Citali.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16 w-full max-w-3xl">
                {/* Kartu Google Docs (Link Baru) */}
                <a
                    href="https://docs.google.com/document/d/13cGVJtRC8PHGigAwY34bV4tobSyh0sSK/edit?usp=drive_link&ouid=114175576315709517860&rtpof=true&sd=true"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative bg-white/5 border border-blue-500/20 hover:border-blue-400/50 rounded-2xl p-8 flex items-center gap-6 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1"
                >
                    <div className="p-4 bg-blue-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <FileText className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-blue-100 group-hover:text-white mb-1">Google Docs</h3>
                        <p className="text-sm text-slate-400">Template online kolaboratif.</p>
                    </div>
                </a>

                {/* Kartu MS Word */}
                <a
                    href="/template.docx"  // <-- Cukup tulis nama file pakai tanda kutip biasa
                    download={dynamicFileName}
                    className="group relative bg-white/5 border border-purple-500/20 hover:border-purple-400/50 rounded-2xl p-8 flex items-center gap-6 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1 cursor-pointer"
                >
                    <div className="p-4 bg-purple-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <FilePenLine className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-purple-100 group-hover:text-white mb-1">MS Word</h3>
                        <p className="text-sm text-slate-400">Download format laporan harian.</p>
                    </div>
                </a>
            </div>

            <div className="relative group">
                <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <a href="https://kkn.unsap.ac.id/report/weeks/create?week=2" target="_blank" rel="noopener noreferrer" className="relative flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-105">
                    <CloudUpload className="w-6 h-6" />
                    <span>Upload Laporan</span>
                </a>
            </div>

        </div> // <-- Penutup Wrapper div
    );
};

export default HomePage;