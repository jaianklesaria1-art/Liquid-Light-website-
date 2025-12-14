import React, { useEffect, useState } from 'react';
import './GooeyNav.css';

interface NavItem {
  label: string;
  onClick?: () => void;
}

interface GooeyNavProps {
  items: NavItem[];
  initialActiveIndex?: number;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  initialActiveIndex = -1
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  // Sync internal state with prop changes (e.g. from scrolling or page navigation)
  useEffect(() => {
    setActiveIndex(initialActiveIndex);
  }, [initialActiveIndex]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    if (items[index].onClick) {
        items[index].onClick!();
    }
    setActiveIndex(index);
  };

  return (
    <div className="gooey-nav-container">
      <nav>
        <ul>
          {items.map((item, index) => (
            <li key={index} className={activeIndex === index ? 'active' : ''}>
              <button 
                onClick={e => handleClick(e, index)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default GooeyNav;