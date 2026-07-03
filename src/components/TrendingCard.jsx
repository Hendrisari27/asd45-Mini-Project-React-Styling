import React from 'react';

// TrendingCards
function TrendingCard({ item }) {
  return (
    // effect slide
    <div className="flex-shrink-0 w-[180px] md:w-full cursor-pointer group">
      {/* Gambar */}
      <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-800 mb-3 shadow-md">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Info Trending */}
      <h4 className="text-sm font-bold text-slate-100 group-hover:text-blue-400 transition line-clamp-1 mb-1">
        {item.title}
      </h4>
      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
        {item.description}
      </p>
    </div>
  );
}

export default TrendingCard;