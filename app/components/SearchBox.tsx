import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
}

const SearchBox: React.FC = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []));
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query, products]);

  const handleSelect = (title: string) => {
    setQuery(title);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="جستجوی محصول..."
        className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
        onFocus={() => query && setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul
          className="absolute top-full left-0 right-0 bg-white border border-gray-300 z-10 list-none m-0 p-0 max-h-52 overflow-y-auto shadow-lg rounded-b"
        >
          {suggestions.map((product) => (
            <li
              key={product.id}
              onMouseDown={() => handleSelect(product.title)}
              className="p-2 cursor-pointer hover:bg-blue-50 text-sm md:text-base"
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
