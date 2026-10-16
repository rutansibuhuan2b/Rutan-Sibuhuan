'use client';

import React, { useState } from 'react';
import { 
  Building2, Users, Calendar, ShieldAlert, FileText, 
  Phone, Mail, MapPin, ArrowRight, Clock, ShieldCheck, Send, CheckCircle2 
} from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({ nama: '', no_hp: '', isi_pengaduan: '' });
  const [sukses, setSukses] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSukses(true);
    setFormData({ nama: '', no_hp: '', isi_pengaduan: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-6 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1"><Phone size={13} /> (0636) 421xxx</span>
          <span className="flex items-center gap-1"><Mail size={13} /> rutansibuhuan@kemenkumham.go.id</span>
        </div>
        <div className="font-medium text-amber-400">
          Kementerian Imigrasi dan Pemasyarakatan RI
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-950 text-white p-2.5 rounded-lg shadow-md">
              <Building2 size={24} />
            </div>
            <div>
              <h1 className="font-bold text-lg text-slate-900 leading-tight">RUTAN KELAS IIB SIBUHUAN</h1>
              <p className="text-xs text-slate-500 font-medium tracking-wide">PORTAL RESMI PELAYANAN PUBLIK</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8 font-medium text-sm text-slate-600">
            <a href="#beranda" className="hover:text-blue-900 transition">Beranda</a>
            <a href="#layanan" className="hover:text-blue-900 transition">Layanan</a>
            <a href="#jadwal" className="hover:text-blue-900 transition">Jadwal Kunjungan</a>
            <a href="#pengaduan" className="hover:text-blue-900 transition">Pengaduan</a>
          </nav>

          <a href="#pengaduan" className="bg-blue-900 hover:bg-blue-950 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm transition flex items-center gap-2">
            Lapor/Pengaduan <ArrowRight size={16} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="beranda" className="relative bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold">
              <ShieldCheck size={14} /> Wilayah Bebas dari Korupsi (WBK)
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Pelayanan Pemasyarakatan Rutan Sibuhuan yang Humanis & Transparan
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Selamat datang di portal pelayanan publik Rumah Tahanan Negara Kelas IIB Sibuhuan, Kabupaten Padang Lawas. Kami berkomitmen memberikan layanan integrasi dan kunjungan gratis dan akuntabel.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#jadwal" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-lg shadow-md transition flex items-center gap-2">
                Jadwal Kunjungan <Calendar size={18} />
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl grid grid-cols-2 gap-6 shadow-2xl">
            <div className="bg-slate-900/50 p-5 rounded-xl border border-white/5">
              <div className="text-amber-400 font-extrabold text-3xl mb-1">150</div>
              <div className="text-xs text-slate-300 font-medium">Kapasitas Hunian</div>
            </div>
            <div className="bg-slate-900/50 p-5 rounded-xl border border-white/5">
              <div className="text-blue-400 font-extrabold text-3xl mb-1">120</div>
              <div className="text-xs text-slate-300 font-medium">Penghuni Saat Ini</div>
            </div>
            <div className="bg-slate-900/50 p-5 rounded-xl border border-white/5">
              <div className="text-emerald-400 font-extrabold text-3xl mb-1">100%</div>
              <div className="text-xs text-slate-300 font-medium">Layanan Gratis / Rp0</div>
            </div>
            <div className="bg-slate-900/50 p-5 rounded-xl border border-white/5">
              <div className="text-purple-400 font-extrabold text-3xl mb-1">24/7</div>
              <div className="text-xs text-slate-300 font-medium">Pengaduan Online</div>
            </div>
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
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
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
                </tbody>
              </table>
            </div>
          </div>

          <div id="pengaduan" className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Form Pengaduan Online</h3>
            <p className="text-sm text-slate-600 mb-6">Sampaikan laporan atau keluhan Anda mengenai pelayanan Rutan Sibuhuan.</p>

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
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Isi Laporan</label>
                <textarea
                  required
                  rows={4}
                  value={formData.isi_pengaduan}
                  onChange={(e) => setFormData({ ...formData, isi_pengaduan: e.target.value })}
                  placeholder="Tuliskan keluhan atau laporan Anda..."
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
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-slate-400">
            © 2026 Rumah Tahanan Negara Kelas IIB Sibuhuan — Kabupaten Padang Lawas, Sumatera Utara.
          </p>
        </div>
      </footer>
    </div>
  );
}
