import React from 'react';

function CategoriesCard({ category }) {
  return (
    // effect slide di mobile
    <div className="flex-shrink-0 w-[220px] md:w-full cursor-pointer group">
      
      {/* categories box */}
      <div 
        className="w-full aspect-square rounded-2xl flex flex-col items-center justify-center mb-4 transition-all duration-300 group-hover:scale-[1.02] shadow-md overflow-hidden relative"
        style={{ backgroundColor: category.bgColor }}
      >
        {/* categories image*/}
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* categories info */}
      <h4 className="text-base font-semibold text-slate-100 group-hover:text-blue-400 transition mb-1">
        {category.name}
      </h4>
      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
        {category.description}
      </p>
      
    </div>
  );
}

export default CategoriesCard;