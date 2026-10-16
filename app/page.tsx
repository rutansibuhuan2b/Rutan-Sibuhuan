'use client';

import React, { useState } from 'react';
import { 
  Building2, Users, Calendar, ShieldAlert, FileText, 
  Phone, Mail, MapPin, ArrowRight, Clock, ShieldCheck, Send, CheckCircle2,
  CheckCircle, XCircle, Info, HeartHandshake, Award
} from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({ nama: '', no_hp: '', kategori: 'Pelayanan Kunjungan', isi_pengaduan: '' });
  const [sukses, setSukses] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSukses(true);
    setFormData({ nama: '', no_hp: '', kategori: 'Pelayanan Kunjungan', isi_pengaduan: '' });
  };

  // URL Logo Resmi Kementerian Imigrasi dan Pemasyarakatan RI
  const logoImipas = "https://lapas-geser.vercel.app/Logo_IMIPAS.png";

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

      {/* Main Navbar & Logo Resmi */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* Logo Resmi Kementerian Imigrasi dan Pemasyarakatan */}
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
            <a href="#profil" className="hover:text-blue-900 transition">Profil</a>
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

          {/* Quick Stats Box & Logo Resmi */}
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

      {/* Profil Section */}
      <section id="profil" className="py-16 px-6 max-w-7xl mx-auto border-b border-slate-200">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 bg-gradient-to-br from-blue-900 to-slate-900 text-white p-8 rounded-2xl shadow-lg">
            <Award className="text-amber-400 mb-4" size={36} />
            <h3 className="text-2xl font-bold mb-2">Maklumat Pelayanan</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              "Kami segenap jajaran petugas Rumah Tahanan Negara Kelas IIB Sibuhuan sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan dan apabila tidak menepati janji, kami siap menerima sanksi sesuai peraturan perundang-undangan."
            </p>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h2 className="text-xs font-bold text-blue-900 tracking-wider uppercase">Profil Singkat</h2>
            <h3 className="text-3xl font-bold text-slate-900">Komitmen Pelayanan PASTI & BerDOK</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Rumah Tahanan Negara Kelas IIB Sibuhuan merupakan Unit Pelaksana Teknis Pemasyarakatan di bawah Kementerian Imigrasi dan Pemasyarakatan RI yang berada di Kabupaten Padang Lawas, Sumatera Utara. Rutan Sibuhuan berfokus pada pembinaan kepribadian, kemandirian warga binaan, serta pemberian layanan integrasi dan kunjungan yang ramah, profesional, dan akuntabel.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-3">
                <HeartHandshake className="text-blue-900 shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Humanis</h4>
                  <p className="text-xs text-slate-600">Menjunjung tinggi hak asasi warga binaan & pengunjung.</p>
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
                <ShieldCheck className="text-amber-700 shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Bebas Pungli</h4>
                  <p className="text-xs text-slate-600">Seluruh alur pelayanan tanpa dipungut biaya apapun.</p>
                </div>
              </div>
            </div>
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
                  onChange={(e) => setFormData({ ...formData, isi_pengaduan: e.target.value })}
                  placeholder="Tuliskan keluhan atau laporan Anda secara detail..."
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-3 rounded-lg shadow transition flex items-center justify-center gap-2">
                <Send size={16} /> Kirim Pengaduan
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-white">
              <img src={logoImipas} alt="Logo IMIPAS" className="w-10 h-10 object-contain" />
              <span className="font-bold">RUTAN KELAS IIB SIBUHUAN</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Jalan Ki Hajar Dewantara, Sibuhuan, Kec. Barumun, Kabupaten Padang Lawas, Sumatera Utara.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Kontak Layanan</h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2"><MapPin size={14} /> Kab. Padang Lawas, Sumatera Utara</p>
              <p className="flex items-center gap-2"><Phone size={14} /> (0636) 421xxx</p>
              <p className="flex items-center gap-2"><Mail size={14} /> rutansibuhuan@kemenkumham.go.id</p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Hak Cipta</h4>
            <p className="text-xs text-slate-400">
              © 2026 Rumah Tahanan Negara Kelas IIB Sibuhuan — Kementerian Imigrasi dan Pemasyarakatan RI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
