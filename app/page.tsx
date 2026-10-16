'use client';

import React, { useState } from 'react';
import { 
  Building2, Users, Calendar, ShieldAlert, FileText, 
  Phone, Mail, MapPin, ArrowRight, Clock, ShieldCheck, Send, CheckCircle2,
  CheckCircle, XCircle, Info, HeartHandshake, Award, UserCheck
} from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({ nama: '', no_hp: '', kategori: 'Pelayanan Kunjungan', isi_pengaduan: '' });
  const [sukses, setSukses] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSukses(true);
    setFormData({ nama: '', no_hp: '', kategori: 'Pelayanan Kunjungan', isi_pengaduan: '' });
  };

  // URL Logo Resmi Kementerian Imigrasi dan Pemasyarakatan
  const logoImipas = "https://lapas-geser.vercel.app/Logo_IMIPAS.png";

  // =========================================================================
  // BISA DIEDIT: DATA FOTO MAKLUMAT PELAYANAN
  // Ganti URL gambar di bawah ini jika ingin mengubah foto Maklumat Pelayanan
  // =========================================================================
  const fotoMaklumat = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200";

  // =========================================================================
  // BISA DIEDIT: DATA PEJABAT STRUKTURAL RUTAN KELAS IIB SIBUHUAN
  // Ubah nama, NIP, dan fotoPejabat sesuai dengan data riil pejabat Rutan
  // =========================================================================
  const pejabatRutan = [
    {
      jabatan: "KEPALA RUMAH TAHANAN NEGARA",
      nama: "Nama Kepala Rutan, S.H., M.H.",
      nip: "19800101 200003 1 001",
      foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      warnaBg: "from-blue-900 to-slate-900"
    },
    {
      jabatan: "KEPALA KESATUAN PENGAMANAN RUTAN",
      nama: "Nama Ka. KPR, S.H.",
      nip: "19850202 200501 1 002",
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      warnaBg: "from-slate-900 to-blue-950"
    },
    {
      jabatan: "KEPALA SUBSEKSI PENGELOLAAN",
      nama: "Nama Kasubsi Pengelolaan, S.H.",
      nip: "19870303 200701 1 003",
      foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
      warnaBg: "from-blue-950 to-slate-900"
    },
    {
      jabatan: "KEPALA SUBSEKSI PELAYANAN TAHANAN",
      nama: "Nama Kasubsi Yantah, S.H.",
      nip: "19890404 200901 1 004",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      warnaBg: "from-slate-900 to-blue-900"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Bar Header */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-6 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1"><Phone size={13} /> (0636) 421xxx</span>
          <span className="flex items-center gap-1"><Mail size={13} /> rutansibuhuan@kemenkumham.go.id</span>
        </div>
        <div className="font-medium text-amber-400 hidden sm:block">
          Kementerian Imigrasi dan Pemasyarakatan RI
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src={logoImipas} 
              alt="Logo Kementerian Imigrasi dan Pemasyarakatan" 
              className="w-12 h-12 object-contain drop-shadow-sm" 
            />
            <div>
              <h1 className="font-bold text-lg text-slate-900 leading-tight">RUTAN KELAS IIB SIBUHUAN</h1>
              <p className="text-xs text-slate-500 font-medium tracking-wide">PORTAL RESMI PELAYANAN PUBLIK</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-8 font-medium text-sm text-slate-600">
            <a href="#beranda" className="hover:text-blue-900 transition">Beranda</a>
            <a href="#pejabat" className="hover:text-blue-900 transition">Pejabat</a>
            <a href="#maklumat" className="hover:text-blue-900 transition">Maklumat</a>
            <a href="#layanan" className="hover:text-blue-900 transition">Layanan & Syarat</a>
            <a href="#jadwal" className="hover:text-blue-900 transition">Jadwal Kunjungan</a>
            <a href="#pengaduan" className="hover:text-blue-900 transition">Pengaduan</a>
          </nav>

          <a href="#pengaduan" className="bg-blue-900 hover:bg-blue-950 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm transition flex items-center gap-2">
            Lapor/Pengaduan <ArrowRight size={16} />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="relative bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-20 px-6">
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
              <a href="#jadwal" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-lg shadow-md transition flex items-center gap-2">
                Jadwal Kunjungan <Calendar size={18} />
              </a>
              <a href="#layanan" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-6 py-3 rounded-lg transition flex items-center gap-2">
                Syarat & Alur Layanan <Info size={18} />
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl space-y-6 shadow-2xl">
            <div className="flex items-center space-x-4 border-b border-white/10 pb-4">
              <img src={logoImipas} alt="Logo IMIPAS" className="w-16 h-16 object-contain" />
              <div>
                <h3 className="font-bold text-lg text-amber-400">Kementerian Imigrasi & Pemasyarakatan</h3>
                <p className="text-xs text-slate-300">Direktorat Jenderal Pemasyarakatan RI</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
                <div className="text-amber-400 font-extrabold text-2xl mb-1">150</div>
                <div className="text-xs text-slate-300 font-medium">Kapasitas Hunian</div>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
                <div className="text-blue-400 font-extrabold text-2xl mb-1">120</div>
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

      {/* Profil Pejabat Struktural Section */}
      <section id="pejabat" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-blue-900 tracking-wider uppercase mb-2">Struktur Organisasi</h2>
          <p className="text-3xl font-bold text-slate-900">Pejabat Struktural Rutan Kelas IIB Sibuhuan</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pejabatRutan.map((pejabat, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-xl transition group">
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img 
                  src={pejabat.foto} 
                  alt={pejabat.nama} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="inline-block px-2.5 py-1 bg-amber-400/90 text-slate-950 text-[10px] font-extrabold rounded-md uppercase tracking-wider mb-1">
                    {pejabat.jabatan}
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-base text-slate-900 leading-snug">{pejabat.nama}</h3>
                <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <UserCheck size={14} className="text-blue-900 shrink-0" /> NIP. {pejabat.nip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Maklumat Pelayanan Berbasis Foto Section */}
      <section id="maklumat" className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
              <Award size={14} /> Komitmen Standar Pelayanan
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Maklumat Pelayanan Rutan Kelas IIB Sibuhuan
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              "Kami segenap jajaran petugas Rumah Tahanan Negara Kelas IIB Sibuhuan sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan dan apabila tidak menepati janji, kami siap menerima sanksi sesuai peraturan perundang-undangan yang berlaku."
            </p>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2">
              <h4 className="font-bold text-amber-400 text-sm">Prinsip Pelayanan Kami:</h4>
              <ul className="text-xs text-slate-300 space-y-1">
                <li>• **Transparan:** Kejelasan syarat, waktu, dan alur pelayanan.</li>
                <li>• **Akuntabel:** Dapat dipertanggungjawabkan sesuai standar regulasi.</li>
                <li>• **Bebas Pungli:** Seluruh layanan Rp0 tanpa biaya apapun.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/30 shadow-2xl group">
              <img 
                src={fotoMaklumat} 
                alt="Banner Maklumat Pelayanan Rutan Sibuhuan" 
                className="w-full h-auto object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <p className="text-center text-xs text-slate-400 italic">
              Dokumentasi Resmi Banner Maklumat Pelayanan Rutan Kelas IIB Sibuhuan
            </p>
          </div>
        </div>
      </section>

      {/* Layanan & Syarat Section */}
      <section id="layanan" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-blue-900 tracking-wider uppercase mb-2">Panduan & Persyaratan</h2>
          <p className="text-3xl font-bold text-slate-900">Layanan Kunjungan & Program Integrasi WBP</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Syarat Kunjungan */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="p-3 bg-blue-100 text-blue-900 rounded-xl"><Users size={24} /></div>
              <div>
                <h3 className="font-bold text-xl text-slate-900">Syarat Kunjungan Tatap Muka</h3>
                <p className="text-xs text-slate-500">Dokumen wajib bawa bagi pengunjung / keluarga</p>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                <span>Kartu Identitas Asli yang berlaku (KTP / SIM / Paspor).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                <span>Kartu Keluarga (KK) asli/fotokopi untuk membuktikan hubungan keluarga inti.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                <span>Surat Izin Kunjungan dari Pihak Penahan (Kejaksaan/Pengadilan) **khusus Tahanan**.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="text-red-500 shrink-0 mt-0.5" size={18} />
                <span>Dilarang membawa barang berbahaya, sajam, narkoba, HP, atau tas besar ke blok.</span>
              </li>
            </ul>
          </div>

          {/* Alur Integrasi */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="p-3 bg-emerald-100 text-emerald-900 rounded-xl"><FileText size={24} /></div>
              <div>
                <h3 className="font-bold text-xl text-slate-900">Layanan Integrasi (PB/CB/CMB)</h3>
                <p className="text-xs text-slate-500">Pembebasan Bersyarat & Cuti Bersyarat Gratis</p>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                <span>Telah menjalani minimal 2/3 masa pidana (PB) atau 1/2 masa pidana (CB).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                <span>Berkelakuan baik selama menjalani masa pidana dalam kurun waktu 9 bulan terakhir.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                <span>Surat Jaminan dari keluarga inti bermaterai & diketahui Kepala Desa/Lurah.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                <span>Proses pengurusan tidak dipungut biaya apapun (Gratis Rp0).</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Jadwal & Form Pengaduan */}
      <section id="jadwal" className="bg-slate-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Clock className="text-blue-900" /> Jadwal Layanan Kunjungan
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-4">Hari</th>
                    <th className="p-4">Sesi Pagi</th>
                    <th className="p-4">Sesi Siang</th>
                    <th className="p-4">Kategori WBP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 font-semibold">Senin & Rabu</td>
                    <td className="p-4">08.30 - 11.30 WIB</td>
                    <td className="p-4">13.30 - 15.00 WIB</td>
                    <td className="p-4 text-blue-900 font-medium">Tahanan</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Selasa & Kamis</td>
                    <td className="p-4">08.30 - 11.30 WIB</td>
                    <td className="p-4">13.30 - 15.00 WIB</td>
                    <td className="p-4 text-emerald-700 font-medium">Narapidana</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Jumat & Sabtu</td>
                    <td className="p-4">08.30 - 11.00 WIB</td>
                    <td className="p-4">Titip Barang Saja</td>
                    <td className="p-4 text-slate-600">Semua WBP</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-950 text-white p-6 rounded-xl shadow-md space-y-3">
              <h4 className="font-bold flex items-center gap-2"><Phone size={18} className="text-amber-400" /> WhatsApp Layanan & Informasi</h4>
              <p className="text-xs text-slate-300">Hubungi petugas Humas Rutan Sibuhuan untuk bertanya langsung mengenai jadwal atau syarat kunjungan.</p>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition">
                Chat WhatsApp Humas Rutan
              </a>
            </div>
          </div>

          <div id="pengaduan" className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Form Pengaduan Online</h3>
            <p className="text-sm text-slate-600 mb-6">Sampaikan laporan atau keluhan Anda mengenai pelayanan Rutan Sibuhuan. Identitas dijamin aman.</p>

            {sukses && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="text-emerald-600 shrink-0" />
                <span className="text-sm font-medium">Laporan berhasil terkirim. Terima kasih atas masukan Anda.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  placeholder="Masukkan nama sesuai KTP"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nomor WhatsApp</label>
                <input
                  type="tel"
                  required
                  value={formData.no_hp}
                  onChange={(e) => setFormData({ ...formData, no_hp: e.target.value })}
                  placeholder="0812xxxxxxx"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Kategori Pengaduan</label>
                <select 
                  value={formData.kategori}
                  onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm bg-white"
                >
                  <option value="Pelayanan Kunjungan">Pelayanan Kunjungan / Penitipan Barang</option>
                  <option value="Layanan Integrasi">Layanan Integrasi (PB/CB/CMB)</option>
                  <option value="Pengaduan Pungli">Laporan Pungli / Gratifikasi</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Isi Laporan</label>
                <textarea
                  required
                  rows={4}
                  value={formData.isi_pengaduan}
                  onChange={(e) => setFormData({ ...formData, isi_pengaduan: e
