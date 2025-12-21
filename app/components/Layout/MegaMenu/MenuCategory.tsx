
import { MenuCategory as MenuCategoryType } from './types';
import MenuItem from './MenuItem';

interface MenuCategoryProps {
  category: MenuCategoryType;
  onClose: () => void;
}

const MenuCategory = ({ category, onClose }: MenuCategoryProps) => {
  return (
    <div className="space-y-3">
      {/* Category Header */}
      <div className="flex items-center space-x-2 space-x-reverse mb-3">
        <span className="text-lg">{category.icon}</span>
        <h4 className={`font-semibold text-sm ${category.color}`}>
          {category.title}
        </h4>
      </div>

      {/* Category Items */}
      <ul className="space-y-2">
        {category.items.map((item, itemIndex) => (
          <MenuItem key={itemIndex} item={item} onClose={onClose} />
        ))}
      </ul>
    </div>
  );
};

export default MenuCategory;
