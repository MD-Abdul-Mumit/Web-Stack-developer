import React from 'react';
import type { ITechnology } from '../types/technology';

interface Props {
  stack: ITechnology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export const StackSidebar: React.FC<Props> = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <aside className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
          <p className="text-sm text-gray-500">
            {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
          </p>
        </div>
        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs font-semibold text-rose-500 hover:text-rose-700 bg-rose-50 px-2.5 py-1.5 rounded-md transition-colors"
          >
            Remove All
          </button>
        )}
      </div>

      <div className="mt-4 space-y-3 max-h-\[600px\] overflow-y-auto pr-1">
        {stack.length === 0 ? (
          <div className="py-12 text-center">
            <div className="text-4xl mb-3">📦</div>
            <p className="text-gray-700 font-medium">Your stack is empty</p>
          </div>
        ) : (
          stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200 transition-all"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{item.name}</h4>
                  <span className="text-xs text-gray-500">{item.category}</span>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-rose-500 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label={`Remove ${item.name}`}
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </aside>
  );
};