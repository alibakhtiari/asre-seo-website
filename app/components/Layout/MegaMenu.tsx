
'use client'

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import MenuCategory from './MegaMenu/MenuCategory';
import { menuCategories } from './MegaMenu/menuData';

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(undefined);

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
    <div className="relative group">
      <button
        className="flex items-center text-text-700 hover:text-primary-600 transition-colors py-2 px-3 rounded-lg hover:bg-primary-50 group-hover:text-primary-600"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="font-medium">خدمات</span>
        <ChevronDown className={`mr-2 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[800px] max-w-[90vw] bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden animate-fade-in"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Menu Grid - 4 Columns */}
          <div className="p-6 bg-linear-to-b from-white to-gray-50/50">
            <div className="grid grid-cols-4 gap-6" dir="rtl">
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
