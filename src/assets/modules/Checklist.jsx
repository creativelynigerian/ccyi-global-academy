import React from 'react';

function Checklist({ items = [] }) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <h4 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wider">
        ? Checklist
      </h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
            <input 
              type="checkbox" 
              className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Checklist;
