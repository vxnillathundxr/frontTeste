import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';

const colors = ['vermelho', 'azul', 'Verde', 'Multicolorido'];

const ColorFilter: React.FC = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [apiUrl, setApiUrl] = useState<string>('/produtos');
  
  useEffect(() => {
    const ColorResponse = async () => {
      try {
        const response = await api.get(apiUrl);
        console.log(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    ColorResponse();
  }, [apiUrl]);

  const handleCheckboxChange = (color: string) => {
    switch (color) {
      case 'vermelho':
        setApiUrl('/produtos/2?color=vermelho'); // Exemplo de URL diferente para a cor vermelha
        break;
      case 'azul':
        setApiUrl('/produtos/2?color=azul'); // Exemplo de URL diferente para a cor azul
        break;
      case 'verde':
        setApiUrl('/produtos/2?color=verde'); // Exemplo de URL diferente para a cor verde
        break;
      case 'Multicolorido':
        setApiUrl('/produtos/?color=multicolorido'); // Exemplo de URL diferente para a cor multicolorida
        break;
      default:
        setApiUrl('/produtos'); // Caso padrão, volta para a URL padrão da sua API
        break;
    }

    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(color)
        ? prevSelectedColors.filter((c) => c !== color)
        : [...prevSelectedColors, color]
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Cor</h2>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <label key={color} className="flex items-center space-x-2">
            <input
              type="radio"
              value={color}
              checked={selectedColors.includes(color)}
              onChange={() => handleCheckboxChange(color)}
              className="form-checkbox text-blue-600"
            />
            <span>{color}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
