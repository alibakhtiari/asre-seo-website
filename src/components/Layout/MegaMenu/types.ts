
export interface MenuItem {
  title: string;
  href: string;
  description?: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export interface MenuCategory {
  title: string;
  icon: string;
  items: MenuItem[];
  color: string;
}
