import React from 'react';
import { getCategoryColor } from '../../utils/categoryColors';

const CategoryBadge = ({ category }) => {
  const colorClass = getCategoryColor(category);
  
  return (
    <span className={`${colorClass} text-sm font-medium px-2 py-1 rounded-full bg-gray-800/50`}>
      {category}
    </span>
  );
};

export default CategoryBadge;