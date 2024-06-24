import React, { useState } from 'react';

const sizes = ['P', 'M', 'G'];

const SizeSelector: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleRadioChange = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Escolha o tamanho</h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {sizes.map((size) => (
          <label key={size} className="flex items-center font-bold text-xl space-x-2">
            <input
              type="radio"
              name="size"
              value={size}
              checked={selectedSize === size}
              onChange={() => handleRadioChange(size)}
              className="form-radio text-blue-600"
            />
            <span>{size}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
