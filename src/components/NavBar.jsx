import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home as HomeIcon, LayoutDashboard, Calendar } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav className="relative z-50 w-full px-6 py-4 flex justify-between items-center border-b border-white/5 backdrop-blur-sm">
                <Link to="/" className="flex items-center gap-2 cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                    <span className="font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        KKN Desa Citali 2026
                    </span>
                </Link>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-white/10 rounded-full transition-colors md:hidden">
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Menu Desktop */}
                <div className="hidden md:flex gap-6">
                    <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}>Home</Link>
                    <Link to="/dashboard" className={`text-sm font-medium transition-colors ${isActive('/dashboard') ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}>Dashboard</Link>
                    <Link to="/jadwal" className={`text-sm font-medium transition-colors ${isActive('/jadwal') ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}>Jadwal</Link>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 right-0 w-full md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-l border-white/10 p-4 z-50 flex flex-col gap-2 shadow-2xl rounded-bl-2xl">
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/') ? 'bg-blue-600/20 text-blue-400' : 'hover:bg-white/5'}`}>
                        <HomeIcon className="w-5 h-5" /> Home
                    </Link>
                    <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/dashboard') ? 'bg-blue-600/20 text-blue-400' : 'hover:bg-white/5'}`}>
                        <LayoutDashboard className="w-5 h-5" /> Dashboard
                    </Link>
                    <Link to="/jadwal" onClick={() => setIsMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/jadwal') ? 'bg-blue-600/20 text-blue-400' : 'hover:bg-white/5'}`}>
                        <Calendar className="w-5 h-5" /> Jadwal
                    </Link>
                </div>
            )}
        </>
    );
};

export default Navbar;