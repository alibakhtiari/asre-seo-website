
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { MenuItem as MenuItemType } from './types';

interface MenuItemProps {
  item: MenuItemType;
  onClose: () => void;
}

const MenuItem = ({ item, onClose }: MenuItemProps) => {
  return (
    <li>
      <Link
        href={item.href}
        className="group flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
        onClick={onClose}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-text-700 group-hover:text-text-900">
              {item.title}
            </span>
            {item.isNew && (
              <span className="bg-green-100 text-green-700 text-xs px-1.5 py-0.5 rounded font-medium">
                جدید
              </span>
            )}
            {item.isPopular && (
              <span className="bg-orange-100 text-orange-700 text-xs px-1.5 py-0.5 rounded font-medium">
                محبوب
              </span>
            )}
          </div>
        </div>
        <ArrowRight className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
    </li>
  );
};

export default MenuItem;
