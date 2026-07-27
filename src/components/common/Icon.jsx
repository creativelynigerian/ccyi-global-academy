import React from 'react';
import * as Icons from 'lucide-react';

const Icon = ({ 
  name, 
  size = 20, 
  color = 'currentColor', 
  className = '',
  strokeWidth = 2,
  ...props 
}) => {
  // Get the icon component from lucide-react
  const IconComponent = Icons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  return (
    <IconComponent 
      size={size} 
      color={color} 
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
};

export default Icon;