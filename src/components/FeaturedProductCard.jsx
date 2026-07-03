import React from 'react';
import featuredProductImg from '../assets/image/Featured/FP.png'; 

function FeaturedProductCard() {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold text-slate-100 mb-6 text-left">
        Featured Product
      </h3>

      {/* Kontainer  */}
      <div className="flex flex-row items-start justify-start gap-5 md:gap-8 text-left">
        
        {/* Image & Judul */}
        <div className="w-[140px] h-[190px] md:w-[400px] md:h-[220px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src={featuredProductImg} 
            alt="Top Rated AI Tool" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Teks Deskripsi */}
        <div className="flex flex-col flex-1 min-w-0 pt-1">
          <h4 className="text-base md:text-xl font-bold text-slate-100 mb-2 leading-snug">
            Top Rated AI Tool
          </h4>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-4">
            Revolutionize your workflow with this highly-rated AI tool. Experience unparalleled efficiency and innovation.
          </p>
          <div>
            <button className="bg-[#1d4ed8] hover:bg-blue-600 text-white text-xs md:text-sm font-semibold px-5 py-2 rounded-full transition shadow-md active:scale-95">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FeaturedProductCard;