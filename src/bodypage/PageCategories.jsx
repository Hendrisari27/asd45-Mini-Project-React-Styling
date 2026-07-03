import React from 'react';

function PageCategories({ category, onBack }) {
  // Pengaman jika data category belum masuk
  if (!category) return null;

  return (
    <main className="max-w-6xl mx-auto p-6 md:p-8 pt-12 animate-in fade-in duration-300 flex flex-col gap-8 text-left">
      {/* Tombol kembali ke Dashboard utama */}
      <div>
        <button 
          onClick={onBack}
          className="text-sm text-slate-400 hover:text-white flex items-center gap-2 transition font-medium group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span> Back to Dashboard
        </button>
      </div>
      
      {/* Kartu Header Informasi Kategori */}
      <div className="bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row gap-6 items-center text-center sm:text-left w-full">
        <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-white/5 p-2 border border-slate-800 flex items-center justify-center">
          <img src={category.image} alt={category.name} className="w-full h-full object-contain" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-500">Category Page</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-1 mb-2">{category.name}</h2>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">{category.description}</p>
        </div>
      </div>

      {/* Kontainer Kosong List Produk Masa Depan */}
      <div className="text-center py-24 border border-dashed border-slate-800/80 rounded-2xl text-slate-500 text-sm w-full">
        Katalog produk bertenaga AI untuk kategori <span className="text-slate-300 font-medium">"{category.name}"</span> akan segera tampil di sini.
      </div>
    </main>
  );
}

export default PageCategories;