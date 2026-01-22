import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Komponen
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import JadwalPage from './pages/JadwalPage';

function App() {
  return (
    <Router>
      {/* Container UTAMA: h-screen (tinggi pas layar) & overflow-hidden (biar ga ada scroll double) */}
      <div className="h-screen w-full bg-slate-950 font-sans selection:bg-purple-500/30 text-slate-200 flex flex-col overflow-hidden">

        {/* Background Decor (Fixed di belakang) */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-30 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[120px]" />
        </div>

        {/* Navbar (Akan diam di atas) */}
        <Navbar />

        {/* AREA SCROLL: flex-1 (isi sisa ruang) & overflow-y-auto (aktifkan scroll di sini) */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden relative z-10 scroll-smooth">
          <div className="container mx-auto px-4 py-8 flex flex-col items-center min-h-full justify-start">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/jadwal" element={<JadwalPage />} />
            </Routes>
          </div>

          {/* Footer ditaruh di dalam scroll area biar ikut ke bawah */}
          <footer className="w-full text-center py-6 text-slate-600 text-sm mt-auto">
            &copy; 2026 KKN Desa Citali | Built with 🫰
          </footer>
        </main>

      </div>
    </Router>
  );
}

export default App;