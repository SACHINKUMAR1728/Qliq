export const getCategoryColor = (category) => {
  const colors = {
    'DeFi': 'text-green-400',
    'Privacy': 'text-purple-400',
    'Gaming': 'text-pink-400',
    'Social': 'text-yellow-400',
    'Finance': 'text-blue-400',
    'Governance': 'text-red-400',
    'Education': 'text-indigo-400',
    'Technology': 'text-cyan-400'
  };
  
  return colors[category] || 'text-blue-400';
};