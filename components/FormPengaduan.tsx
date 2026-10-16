'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function FormPengaduan() {
  const [formData, setFormData] = useState({ nama: '', no_hp: '', isi_pengaduan: '' });
  const [sukses, setSukses] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSukses(true);
    setFormData({ nama: '', no_hp: '', isi_pengaduan: '' });
  };

  return (
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
  );
}
