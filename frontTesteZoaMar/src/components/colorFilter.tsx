import React, { useState } from 'react';

const colors = ['Vermelho', 'Preto', 'Branco', 'Verde', 'Multicolorido'];

const ColorFilter: React.FC = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleCheckboxChange = (Color: string) => {
    setSelectedColors((prev) =>
      prev.includes(Color)
        ? prev.filter((s) => s !== Color)
        : [...prev, Color]
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Cor</h2>
      <div className="flex flex-wrap gap-2">
        {colors.map((Color) => (
          <label key={Color} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={Color}
              checked={selectedColors.includes(Color)}
              onChange={() => handleCheckboxChange(Color)}
              className="form-checkbox text-blue-600"
            />
            <span>{Color}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
