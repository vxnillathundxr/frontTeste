import React, { useState } from 'react';

const sizes = ['P', 'M', 'G'];

const SizeFilter: React.FC = () => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const handleCheckboxChange = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Tamanho</h2>
      <div className="flex flex-wrap gap-9">
        {sizes.map((size) => (
          <label key={size} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={size}
              checked={selectedSizes.includes(size)}
              onChange={() => handleCheckboxChange(size)}
              className="form-checkbox text-blue-600"
            />
            <span>{size}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;
