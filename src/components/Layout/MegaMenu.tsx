
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import MenuCategory from './MegaMenu/MenuCategory';
import { menuCategories } from './MegaMenu/menuData';

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <button
        className="flex items-center text-text-700 hover:text-primary-600 transition-colors py-2 px-3 rounded-lg hover:bg-primary-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="font-medium">خدمات</span>
        <ChevronDown className={`mr-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white rounded-xl shadow-lg border border-gray-100 z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: 'translateX(-50%) translateY(0)',
            opacity: 1,
            transition: 'all 0.2s ease'
          }}
        >
          {/* Menu Grid - 4 Columns */}
          <div className="p-6">
            <div className="grid grid-cols-4 gap-6">
              {menuCategories.map((category, index) => (
                <MenuCategory 
                  key={index} 
                  category={category} 
                  onClose={() => setIsOpen(false)} 
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
