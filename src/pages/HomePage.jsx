import React from 'react';
import { FileText, FileDown, CloudUpload, Calendar, Clock, ChevronRight } from 'lucide-react';

const HomePage = () => {
    // --- KONFIGURASI LINK GOOGLE DOCS (UPDATED) ---
    
    // 1. ID LAPORAN HARIAN
    const FILE_ID_HARIAN   = "13cGVJtRC8PHGigAwY34bV4tobSyh0sSK"; 
    
    // 2. ID LAPORAN MINGGUAN (SUDAH DIISI)
    const FILE_ID_MINGGUAN = "1MmeXameZSdb0v-qxOAAIHPgKNQwUSQx_"; 
    
    // -------------------------------------------------------

    // Link Download Otomatis jadi .docx (Magic Link)
    const downloadLinkHarian = `https://docs.google.com/document/d/${FILE_ID_HARIAN}/export?format=docx`;
    const downloadLinkMingguan = `https://docs.google.com/document/d/${FILE_ID_MINGGUAN}/export?format=docx`;
    
    // Link Buka Google Docs Biasa (View/Edit)
    const viewLinkHarian = `https://docs.google.com/document/d/${FILE_ID_HARIAN}/edit`;
    const viewLinkMingguan = `https://docs.google.com/document/d/${FILE_ID_MINGGUAN}/edit`;


    // --- LOGIKA TANGGAL & NAMA FILE ---
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    const fileNameHarian = `${year}-${month}-${day}_LaporanHarian.docx`;
    const fileNameMingguan = `${year}-${month}_LaporanMingguan.docx`;

    return (
        <div className="w-full flex-grow flex flex-col items-center justify-center min-h-[70vh] gap-12 px-4 relative">
            
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            {/* HEADER SECTION */}
            <div className="text-center space-y-4 animate-fade-in-up z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-blue-300 mb-2 shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    UNSAP 2026
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-xl">
                    KKN Desa <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Citali</span>
                </h1>
                <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
                    Informasi format/template laporan harian & mingguan kelompok KKN Citali.
                </p>
            </div>

            {/* GRID KARTU DOWNLOAD */}
            <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl z-10">
                
                {/* --- KARTU 1: LAPORAN HARIAN (BIRU) --- */}
                <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-6 hover:border-blue-500/50 transition-all duration-300 shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                        <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Laporan Harian</h3>
                            <p className="text-xs text-slate-400">Wajib diisi setiap hari</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {/* Tombol Lihat Google Docs */}
                        <a href={viewLinkHarian} target="_blank" rel="noreferrer" 
                           className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-700 hover:bg-blue-600/20 hover:border-blue-500/50 transition-all group/btn cursor-pointer">
                            <div className="flex items-center gap-3">
                                <FileText className="w-5 h-5 text-blue-400" />
                                <span className="text-sm font-medium text-slate-200 group-hover/btn:text-white">Google Docs Template</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-500 group-hover/btn:text-blue-400 group-hover/btn:translate-x-1 transition-transform" />
                        </a>

                        {/* Tombol Download Word */}
                        <a href={downloadLinkHarian} 
                           className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-700 hover:bg-blue-600/20 hover:border-blue-500/50 transition-all group/btn cursor-pointer">
                            <div className="flex items-center gap-3">
                                <FileDown className="w-5 h-5 text-blue-400" />
                                <span className="text-sm font-medium text-slate-200 group-hover/btn:text-white">Download Word (.docx)</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-500 group-hover/btn:text-blue-400 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* --- KARTU 2: LAPORAN MINGGUAN (UNGU) --- */}
                <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-6 hover:border-purple-500/50 transition-all duration-300 shadow-2xl hover:shadow-purple-900/20 hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                        <div className="p-3 bg-purple-500/20 rounded-2xl text-purple-400 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Laporan Mingguan</h3>
                            <p className="text-xs text-slate-400">Rekapitulasi kegiatan satu minggu</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {/* Tombol Lihat Google Docs */}
                        <a href={viewLinkMingguan} target="_blank" rel="noreferrer" 
                           className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-700 hover:bg-purple-600/20 hover:border-purple-500/50 transition-all group/btn cursor-pointer">
                            <div className="flex items-center gap-3">
                                <FileText className="w-5 h-5 text-purple-400" />
                                <span className="text-sm font-medium text-slate-200 group-hover/btn:text-white">Google Docs Template</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-500 group-hover/btn:text-purple-400 group-hover/btn:translate-x-1 transition-transform" />
                        </a>

                        {/* Tombol Download Word */}
                        <a href={downloadLinkMingguan} 
                           className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-700 hover:bg-purple-600/20 hover:border-purple-500/50 transition-all group/btn cursor-pointer">
                            <div className="flex items-center gap-3">
                                <FileDown className="w-5 h-5 text-purple-400" />
                                <span className="text-sm font-medium text-slate-200 group-hover/btn:text-white">Download Word (.docx)</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-500 group-hover/btn:text-purple-400 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

            </div>

            {/* BUTTON UPLOAD UTAMA */}
            <div className="z-10 animate-bounce-slow">
                <a href="https://kkn.unsap.ac.id/report/weeks/create?week=2" target="_blank" rel="noopener noreferrer" 
                   className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300">
                    <CloudUpload className="w-5 h-5 text-blue-600 group-hover:-translate-y-1 transition-transform" />
                    <span>Upload Laporan ke Kampus</span>
                </a>
            </div>

        </div>
    );
};

export default HomePage;