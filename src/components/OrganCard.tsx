
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface OrganCardProps {
  id: string;
  name: string;
  icon: string;
  isActive?: boolean;
}

const OrganCard = ({ id, name, icon, isActive = false }: OrganCardProps) => {
  return (
    <Link 
      to={`/organ/${id}`}
      className={cn(
        'organ-card group animate-fade-in-up',
        isActive && 'active'
      )}
    >
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-110">
        <img src={icon} alt={name} className="w-full h-full object-contain" />
      </div>
      <span className={cn(
        'text-lg font-medium transition-colors duration-300',
        isActive ? 'text-amedico-teal' : 'text-amedico-text group-hover:text-amedico-teal'
      )}>
        {name}
      </span>
    </Link>
  );
};

export default OrganCard;
