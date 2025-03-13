
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Heart, Activity, Pyramid, Wind, Baby, Bean } from 'lucide-react';

interface OrganCardProps {
  id: string;
  name: string;
  icon: string;
  isActive?: boolean;
}

const OrganCard = ({ id, name, icon, isActive = false }: OrganCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case 'heart':
        return <Heart className="w-10 h-10 text-blue-600" />;
      case 'activity':
        return <Activity className="w-10 h-10 text-blue-600" />;
      case 'pyramid':
        return <Pyramid className="w-10 h-10 text-blue-600" />;
      case 'wind':
        return <Wind className="w-10 h-10 text-blue-600" />;
      case 'baby':
        return <Baby className="w-10 h-10 text-blue-600" />;
      case 'bean':
        return <Bean className="w-10 h-10 text-blue-600" />;
      default:
        return <Activity className="w-10 h-10 text-blue-600" />;
    }
  };

  return (
    <Link 
      to={`/organ/${id}`}
      className={cn(
        'organ-card group animate-fade-in-up flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:shadow-md text-center',
        isActive && 'active'
      )}
    >
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-110">
        {getIcon()}
      </div>
      <span className={cn(
        'text-lg font-medium transition-colors duration-300 mt-2',
        isActive ? 'text-blue-600' : 'text-gray-800 group-hover:text-blue-600'
      )}>
        {name}
      </span>
    </Link>
  );
};

export default OrganCard;
