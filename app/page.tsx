'use client';

import React, { useState } from 'react';
import { 
  Building2, Users, Calendar, ShieldAlert, FileText, 
  Phone, Mail, MapPin, ArrowRight, Clock, ShieldCheck, Send, CheckCircle2,
  CheckCircle, XCircle, Info, HeartHandshake, Award, UserCheck, Eye, History, Briefcase, Database, UserPlus
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('beranda');
  const [subProfilTab, setSubProfilTab] = useState('semua');
  const [formData, setFormData] = useState({ nama: '', no_hp: '', kategori: 'Pelayanan Kunjungan', isi_pengaduan: '' });
  const [sukses, setSukses] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSukses(true);
    setFormData({ nama: '', no_hp: '', kategori: 'Pelayanan Kunjungan', isi_pengaduan: '' });
  };

  const logoImipas = "https://lapas-geser.vercel.app/Logo_IMIPAS.png";

  const kepalaRutan = {
    jabatan: "KEPALA RUMAH TAHANAN NEGARA",
    nama: "SIMSON BANGUN, S.H.",
    nip: "19800101 200003 1 001",
    foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
    sambutan: "Selamat datang di Portal Pelayanan Publik Rutan Kelas IIB Sibuhuan. Kami berkomitmen memberikan pelayanan pemasyarakatan yang transparan, akuntabel, dan bebas dari pungutan liar."
  };

  const pejabatBawah = [
    {
      jabatan: "KEPALA KESATUAN PENGAMANAN RUTAN",
      nama: "PESTA HALOMOAN MARPAUNG",
      nip: "19850202 200501 1 002",
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      jabatan: "KEPALA SUBSEKSI PENGELOLAAN",
      nama: "ANDIKA PAHLEVI, S.H.",
      nip: "19870303 200701 1 003",
      foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
    },
    {
      jabatan: "KEPALA SUBSEKSI PELAYANAN TAHANAN",
      nama: "RUDY TIMBUL HALOMOAN SINAGA, S.H.",
      nip: "19890404 200901 1 004",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Bar Header */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-6 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1"><Phone size={13} /> (0636) 421xxx</span>
          <span className="flex items-center gap-1"><Mail size={13} /> rutansibuhuan@kemenimipas.go.id</span>
        </div>
        <div className="font-medium text-amber-400 hidden sm:block">
          Kementerian Imigrasi dan Pemasyarakatan RI
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-slate-950 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('beranda')}>
            <img 
              src={logoImipas} 
              alt="Logo IMIPAS" 
              className="w-11 h-11 object-contain drop-shadow-sm" 
            />
            <div>
              <h1 className="font-bold text-base text-white leading-tight">RUTAN KELAS IIB SIBUHUAN</h1>
              <p className="text-[10px] text-amber-400 font-medium tracking-wide">PORTAL RESMI PELAYANAN PUBLIK</p>
            </div>
          </div>
          
          <nav className="flex space-x-6 font-medium text-sm text-slate-300">
            {['beranda', 'profil', 'data-wbp', 'layanan', 'kontak'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize transition py-1 border-b-2 ${
                  activeTab === tab 
                    ? 'text-amber-400 border-amber-400 font-bold' 
                    : 'border-transparent hover:text-white'
                }`}
              >
                {tab === 'data-wbp' ? 'Keadaan WBP' : tab}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* TAB BERANDA */}
      {activeTab === 'beranda' && (
        <>
          <section className="relative bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-20 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                  <ShieldCheck size={14} /> Wilayah Bebas dari Korupsi (WBK)
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  Pelayanan Pemasyarakatan Rutan Sibuhuan yang Humanis & Transparan
                </h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  Selamat datang di portal pelayanan publik Rumah Tahanan Negara Kelas IIB Sibuhuan, Kabupaten Padang Lawas. Seluruh layanan pendaftaran kunjungan, penitipan barang, dan pengurusan integrasi **GRATIS (Rp0)** tanpa pungutan liar.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button onClick={() => setActiveTab('layanan')} className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-lg shadow-md transition flex items-center gap-2">
                    Jadwal & Layanan Kunjungan <Calendar size={18} />
                  </button>
                  <button onClick={() => setActiveTab('profil')} className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-6 py-3 rounded-lg transition flex items-center gap-2">
                    Profil Lembaga <Info size={18} />
                  </button>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl space-y-6 shadow-2xl">
                <div className="flex items-center space-x-4 border-b border-white/10 pb-4">
                  <img src={logoImipas} alt="Logo IMIPAS" className="w-16 h-16 object-contain" />
                  <div>
                    <h3 className="font-bold text-lg text-amber-400">Kementerian Imigrasi & Pemasyarakatan RI</h3>
                    <p className="text-xs text-slate-300">Direktorat Jenderal Pemasyarakatan</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5 cursor-pointer" onClick={() => setActiveTab('data-wbp')}>
                    <div className="text-amber-400 font-extrabold text-2xl mb-1">80</div>
                    <div className="text-xs text-slate-300 font-medium">Kapasitas Hunian</div>
                  </div>
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5 cursor-pointer" onClick={() => setActiveTab('data-wbp')}>
                    <div className="text-blue-400 font-extrabold text-2xl mb-1">164</div>
                    <div className="text-xs text-slate-300 font-medium">Penghuni Saat Ini</div>
                  </div>
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
                    <div className="text-emerald-400 font-extrabold text-2xl mb-1">100%</div>
                    <div className="text-xs text-slate-300 font-medium">Layanan Gratis / Rp0</div>
                  </div>
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
                    <div className="text-purple-400 font-extrabold text-2xl mb-1">24/7</div>
                    <div className="text-xs text-slate-300 font-medium">Pengaduan Online</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* TAB PROFIL (SUBMENU CARD GRID) */}
      {activeTab === 'profil' && (
        <section className="py-16 px-6 max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">Profil</h2>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          {/* Submenu Selection Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div 
              onClick={() => setSubProfilTab('karutan')}
              className={`p-6 rounded-2xl border transition cursor-pointer flex items-center justify-between shadow-sm hover:shadow-md ${
                subProfilTab === 'karutan' ? 'bg-blue-900 text-white border-blue-900' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${subProfilTab === 'karutan' ? 'bg-amber-400 text-slate-950' : 'bg-amber-50 text-amber-600'}`}>
                  <UserCheck size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-base">Profil Kepala Rutan</h3>
                  <p className={`text-xs ${subProfilTab === 'karutan' ? 'text-blue-200' : 'text-slate-500'}`}>Submenu khusus Kepala Rutan</p>
                </div>
              </div>
              <ArrowRight size={18} />
            </div>

            <div 
              onClick={() => setSubProfilTab('pejabat')}
              className={`p-6 rounded-2xl border transition cursor-pointer flex items-center justify-between shadow-sm hover:shadow-md ${
                subProfilTab === 'pejabat' ? 'bg-blue-900 text-white border-blue-900' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${subProfilTab === 'pejabat' ? 'bg-blue-400 text-slate-950' : 'bg-blue-50 text-blue-600'}`}>
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-base">Pejabat Struktural</h3>
                  <p className={`text-xs ${subProfilTab === 'pejabat' ? 'text-blue-200' : 'text-slate-500'}`}>Submenu pejabat di bawah Karutan</p>
                </div>
              </div>
              <ArrowRight size={18} />
            </div>

            <div 
              onClick={() => setSubProfilTab('semua')}
              className={`p-6 rounded-2xl border transition cursor-pointer flex items-center justify-between shadow-sm hover:shadow-md ${
                subProfilTab === 'semua' ? 'bg-blue-900 text-white border-blue-900' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${subProfilTab === 'semua' ? 'bg-emerald-400 text-slate-950' : 'bg-emerald-50 text-emerald-600'}`}>
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-base">Struktur & Visi Misi</h3>
                  <p className={`text-xs ${subProfilTab === 'semua' ? 'text-blue-200' : 'text-slate-500'}`}>Gambaran umum lembaga</p>
                </div>
              </div>
              <ArrowRight size={18} />
            </div>
          </div>

          {/* DUKUNGAN SUBMENU KEPALA RUTAN */}
          {(subProfilTab === 'karutan' || subProfilTab === 'semua') && (
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm grid md:grid-cols-3 gap-8 items-center">
              <div className="relative rounded-xl overflow-hidden border-2 border-amber-400 shadow-lg">
                <img src={kepalaRutan.foto} alt={kepalaRutan.nama} className="w-full h-80 object-cover object-top" />
                <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 p-3 text-center text-white">
                  <p className="text-[10px] text-amber-400 font-bold uppercase">{kepalaRutan.jabatan}</p>
                </div>
              </div>
              <div className="md:col-span-2 space-y-4">
                <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-extrabold rounded-full">PROFIL KEPALA RUTAN</span>
                <h3 className="text-2xl font-bold text-slate-900">{kepalaRutan.nama}</h3>
                <p className="text-xs text-slate-500 font-semibold">NIP. {kepalaRutan.nip}</p>
                <div className="p-4 bg-slate-50 border-l-4 border-amber-500 italic text-sm text-slate-700 leading-relaxed">
                  "{kepalaRutan.sambutan}"
                </div>
              </div>
            </div>
          )}

          {/* DUKUNGAN SUBMENU PEJABAT STRUKTURAL BAWAHAN */}
          {(subProfilTab === 'pejabat' || subProfilTab === 'semua') && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Pejabat Struktural Rutan Sibuhuan</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {pejabatBawah.map((pejabat, idx) => (
                  <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm space-y-3 p-4">
                    <img src={pejabat.foto} alt={pejabat.nama} className="w-full h-48 object-cover object-top rounded-xl" />
                    <div>
                      <span className="text-[10px] font-extrabold text-blue-900 bg-blue-50 px-2 py-0.5 rounded">{pejabat.jabatan}</span>
                      <h4 className="font-bold text-sm text-slate-900 mt-1">{pejabat.nama}</h4>
                      <p className="text-xs text-slate-500">NIP. {pejabat.nip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* TAB KEADAAN NARAPIDANA DAN TAHANAN (DATA WBP) */}
      {activeTab === 'data-wbp' && (
        <section className="py-16 px-6 max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">Data Keadaan Penghuni</h2>
            <p className="text-xs text-slate-500">Statistik Hunian Warga Binaan Pemasyarakatan & Tahanan Rutan Sibuhuan</p>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="p-3 bg-blue-50 text-blue-900 rounded-xl w-fit"><Users size={20} /></div>
              <p className="text-xs font-bold text-slate-500 uppercase">Jumlah Tahanan</p>
              <h3 className="text-3xl font-extrabold text-blue-900">104 Orang</h3>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="p-3 bg-emerald-50 text-emerald-900 rounded-xl w-fit"><ShieldCheck size={20} /></div>
              <p className="text-xs font-bold text-slate-500 uppercase">Jumlah Narapidana</p>
              <h3 className="text-3xl font-extrabold text-emerald-700">60 Orang</h3>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="p-3 bg-amber-50 text-amber-900 rounded-xl w-fit"><Database size={20} /></div>
              <p className="text-xs font-bold text-slate-500 uppercase">Total Penghuni</p>
              <h3 className="text-3xl font-extrabold text-amber-600">164 Orang</h3>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="p-3 bg-purple-50 text-purple-900 rounded-xl w-fit"><Building2 size={20} /></div>
              <p className="text-xs font-bold text-slate-500 uppercase">Kapasitas Normal</p>
              <h3 className="text-3xl font-extrabold text-purple-900">80 Orang</h3>
            </div>
          </div>

          {/* Persentase Okupansi */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex justify-between items-center text-sm font-bold">
              <span>Tingkat Okupansi Hunian Rutan Sibuhuan</span>
              <span className="text-amber-600">205% (Over Kapasitas)</span>
            </div>
            <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
              <div className="bg-amber-500 h-full w-full rounded-full"></div>
            </div>
            <p className="text-xs text-slate-500">Data diperbarui secara berkala oleh Subseksi Pelayanan Tahanan Rutan Sibuhuan.</p>
          </div>
        </section>
      )}

      {/* TAB KONTAK & LOKASI (GAYA CARD GRID) */}
      {activeTab === 'kontak' && (
        <section className="py-16 px-6 max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">Kontak</h2>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-blue-50 text-blue-900 rounded-xl shrink-0"><MapPin size={24} /></div>
              <div>
                <h3 className="font-bold text-slate-900">Alamat</h3>
                <p className="text-xs text-slate-600 mt-1">Jalan Hasanuddin No. 15, Sibuhuan, Kec. Barumun, Kabupaten Padang Lawas, Sumatera Utara</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-emerald-50 text-emerald-900 rounded-xl shrink-0"><Phone size={24} /></div>
              <div>
                <h3 className="font-bold text-slate-900">Telepon / WhatsApp</h3>
                <p className="text-xs text-slate-600 mt-1">(0636) 421xxx / 0812-3456-7890</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-amber-50 text-amber-900 rounded-xl shrink-0"><Mail size={24} /></div>
              <div>
                <h3 className="font-bold text-slate-900">Email</h3>
                <p className="text-xs text-slate-600 mt-1">rutansibuhuan@kemenimipas.go.id</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-purple-50 text-purple-900 rounded-xl shrink-0"><Clock size={24} /></div>
              <div>
                <h3 className="font-bold text-slate-900">Jam Layanan</h3>
                <p className="text-xs text-slate-600 mt-1">Senin - Sabtu: 09.00 - 16.00 WIB</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <p className="text-xs text-slate-400">
            © 2026 Rumah Tahanan Negara Kelas IIB Sibuhuan — Kementerian Imigrasi dan Pemasyarakatan RI.
          </p>
        </div>
      </footer>
    </div>
  );
}
