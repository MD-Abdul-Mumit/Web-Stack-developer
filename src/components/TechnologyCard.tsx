import React from 'react';
import type { ITechnology } from '../types/technology';

interface Props {
  technology: ITechnology;
  isAdded: boolean;
  onAdd: (tech: ITechnology) => void;
}

export const TechnologyCard: React.FC<Props> = ({ technology, isAdded, onAdd }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center p-2.5">
            <img 
              src={technology.icon} 
              alt={technology.name} 
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <span className="inline-block bg-purple-50 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-purple-200">
            {technology.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900">{technology.name}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {technology.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md">
            {technology.category}
          </span>
          <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md">
            {technology.difficulty}
          </span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center text-amber-500 font-bold text-sm">
          <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <span>{technology.rating.toFixed(1)}</span>
        </div>

        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            isAdded
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
              : 'brand-gradient-bg text-white shadow hover:opacity-90'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};