import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const JadwalPage = () => {
    // Data Jadwal
    const scheduleData = [
        {
            date: '22', day: 'KAM', month: 'JAN',
            title: 'Senam + Pojok Pilah Sampah',
            time: '07:00 WIB',
            location: 'SDN Cikubang',
            color: 'blue'
        },
        {
            date: '23', day: 'JUM', month: 'JAN',
            title: 'Jumsih (Jumat Bersih)',
            time: '08:00 WIB',
            location: 'Lingkungan Sekitar',
            color: 'purple'
        },
        {
            date: '24', day: 'SAB', month: 'JAN',
            title: 'Kokulikuler + Literasi Keuangan',
            time: '09:00 WIB',
            location: 'SDN Cikubang',
            color: 'green'
        },
        {
            date: '25', day: 'MIN', month: 'JAN',
            title: 'Pembuatan Produk Unggulan',
            time: '09:00 WIB',
            location: 'Posko KKN Desa Citali',
            color: 'orange'
        },
        {
            date: '26', day: 'SEN', month: 'JAN',
            title: 'Kunjungan UMKM',
            time: '08:00 WIB',
            location: 'Lokasi UMKM',
            color: 'pink'
        },
        {
            date: '27', day: 'SEL', month: 'JAN',
            title: 'Kunjungan ke Pa RW 10',
            time: '10:00 WIB',
            location: 'Rumah Pa RW',
            color: 'cyan'
        },
        {
            date: '28', day: 'RAB', month: 'JAN',
            title: 'UMKM Kang Toni',
            time: '08:00 WIB',
            location: 'Lokasi UMKM',
            color: 'indigo'
        },
        {
            date: '29', day: 'KAM', month: 'JAN',
            title: 'Akun Koperasi + Peresmian Produk',
            time: '09:00 WIB',
            location: 'Posko KKN Desa Citali',
            color: 'teal'
        },
        {
            date: '30', day: 'JUM', month: 'JAN',
            title: 'Jumsih',
            time: '08:00 WIB',
            location: 'Lingkungan Sekitar',
            color: 'emerald'
        },
    ];

    // Helper: Mendefinisikan class warna SECARA EKSPLISIT biar terbaca Tailwind
    const getTheme = (color) => {
        const themes = {
            blue: { bar: 'bg-blue-400', text: 'text-blue-400' },
            purple: { bar: 'bg-purple-400', text: 'text-purple-400' },
            green: { bar: 'bg-green-400', text: 'text-green-400' },
            orange: { bar: 'bg-orange-400', text: 'text-orange-400' },
            pink: { bar: 'bg-pink-400', text: 'text-pink-400' },
            cyan: { bar: 'bg-cyan-400', text: 'text-cyan-400' },
            indigo: { bar: 'bg-indigo-400', text: 'text-indigo-400' },
            teal: { bar: 'bg-teal-400', text: 'text-teal-400' },
            emerald: { bar: 'bg-emerald-400', text: 'text-emerald-400' },
        };
        return themes[color] || themes.blue;
    };

    return (
        <div className="w-full max-w-2xl animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-8 text-center text-white tracking-tight mt-2">
                Jadwal Kegiatan
            </h2>

            <div className="flex flex-col gap-3">
                {scheduleData.map((item, index) => {
                    const theme = getTheme(item.color);

                    return (
                        <div
                            key={index}
                            className="relative flex items-center bg-slate-900/50 border border-white/5 rounded-r-xl rounded-l-md overflow-hidden hover:bg-slate-800/50 transition-all group"
                        >
                            {/* Garis Warna di Kiri (Sekarang pasti muncul!) */}
                            <div className={`w-1.5 self-stretch ${theme.bar}`}></div>

                            {/* Bagian Tanggal */}
                            <div className="flex flex-col items-center justify-center p-4 min-w-[70px] border-r border-white/5 bg-white/[0.02]">
                                <span className="text-[10px] font-bold tracking-wider opacity-60">{item.day}</span>
                                <span className={`text-2xl font-black ${theme.text}`}>{item.date}</span>
                                <span className="text-[9px] font-medium opacity-50 mt-[-2px]">{item.month}</span>
                            </div>

                            {/* Bagian Konten */}
                            <div className="p-4 flex-grow min-w-0">
                                <h4 className="font-bold text-base sm:text-lg text-slate-100 leading-tight mb-1.5 group-hover:text-white transition-colors">
                                    {item.title}
                                </h4>

                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-400">
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5 opacity-70" />
                                        <span>{item.time}</span>
                                    </div>

                                    {item.location && (
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-3.5 h-3.5 opacity-70" />
                                            <span className="truncate">{item.location}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* Space bawah untuk scroll yang aman */}
            <div className="h-24"></div>
        </div>
    );
};

export default JadwalPage;