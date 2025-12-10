import { FaFilter, FaUtensils, FaChevronDown, FaChevronUp, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import '../styles/MenuPage.css'

export default function MenuPage() {
  const [showFilter, setShowFilter] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  
  const categories = {
    'Veg Pizzas': {
      sizes: ['Regular (7")', 'Medium (10")', 'Large (13")']
    },
    'Non Veg Pizzas': {
      sizes: ['Regular (7")', 'Medium (10")', 'Large (13")']
    },
    'Burgers': null,
    'Garlic Breads': null,
    'Tacos': null,
    'French Fries': null,
    'Sandwich': null,
    'Wraps': null,
    'Desserts': null,
    'Pasta': null,
    'Snacks': null,
    'Shakes': null,
    'Mojito': null
  };

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const toggleSize = (category, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [category]: prev[category]?.includes(size)
        ? prev[category].filter(s => s !== size)
        : [...(prev[category] || []), size]
    }));
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
    if (!showFilter) {
      setExpandedCategory(null);
    }
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedSizes({});
  };

  const hasAnyFilter = selectedCategories.length > 0 || 
                      Object.values(selectedSizes).some(sizes => sizes.length > 0);

  const isCategoryExpanded = (category) => expandedCategory === category;

  return (
    <div className="menu-page">
      <header className="menu-header">
        <div className="menu-header-content">
          <div className="menu-header-text">
            <h1 className="menu-title">
              <FaUtensils className="menu-icon" />
              Our Menu
            </h1>
          </div>
          <div className="menu-actions">
            <div className="filter-container">
              <button 
                className="filter-btn" 
                onClick={toggleFilter}
                aria-expanded={showFilter}
                aria-label="Filter menu items"
              >
                <FaFilter className="filter-icon" />
                <span>Filter</span>
                {showFilter ? <FaChevronUp className="chevron-icon" /> : <FaChevronDown className="chevron-icon" />}
              </button>
              {showFilter && (
                <div className="filter-dropdown">
                  <div className="filter-dropdown-header">
                    <h3>Filter by Category</h3>
                    {hasAnyFilter && (
                      <button 
                        className="clear-filters"
                        onClick={clearAllFilters}
                      >
                        Clear All
                      </button>
                    )}
                  </div>
                  <div className="filter-options">
                    {Object.entries(categories).map(([category, details]) => (
                      <div key={category} className="filter-category">
                        <label 
                          className={`filter-option ${isCategoryExpanded(category) ? 'expanded' : ''}`}
                          onClick={() => toggleCategory(category)}
                        >
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => {}}
                            onClick={(e) => e.stopPropagation()}
                          />
                          <span className="checkmark"></span>
                          <span className="category-name">{category}</span>
                          {details?.sizes && (
                            <span className="expand-icon">
                              {isCategoryExpanded(category) ? <FaChevronUp /> : <FaChevronRight />}
                            </span>
                          )}
                        </label>
                        
                        {isCategoryExpanded(category) && details?.sizes && (
                          <div className="size-options">
                            {details.sizes.map(size => (
                              <label key={size} className="size-option">
                                <input
                                  type="checkbox"
                                  checked={selectedSizes[category]?.includes(size) || false}
                                  onChange={() => toggleSize(category, size)}
                                />
                                <span className="checkmark"></span>
                                {size}
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}