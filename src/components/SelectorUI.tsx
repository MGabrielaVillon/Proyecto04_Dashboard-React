import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface SelectorProps {
  onOptionSelect: (option: string) => void;
}

const cityOptions = ['guayaquil', 'quito', 'manta', 'cuenca'];

const formatCity = (city: string) => city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

export default function SelectorUI({ onOptionSelect }: SelectorProps) {
  const [selectedValue, setSelectedValue] = useState('guayaquil');

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string;
    setSelectedValue(value);
    onOptionSelect(value);
  };

  return (
    <FormControl
      fullWidth
      sx={{
        backgroundColor: 'var(--panel-bg)',
        border: '1px solid var(--panel-border)',
        borderRadius: 2,
        p: 1,
        '& .MuiInputLabel-root': { color: 'var(--panel-text)' },
        '& .MuiSelect-select': { color: 'var(--panel-text)' },
        '& .MuiSvgIcon-root': { color: 'var(--panel-text)' },
        '& .MuiMenuItem-root': { color: 'var(--panel-text)' },
      }}
    >
      <InputLabel id="city-select-label">Ciudad</InputLabel>
      <Select
        labelId="city-select-label"
        id="city-simple-select"
        label="Ciudad"
        value={selectedValue}
        onChange={handleChange}
      >
        <MenuItem value="" disabled>
          <em>Seleccione una ciudad</em>
        </MenuItem>
        {cityOptions.map((city) => (
          <MenuItem key={city} value={city}>
            {formatCity(city)}
          </MenuItem>
        ))}
      </Select>
      {selectedValue && (
        <p>
          Información del clima en <strong>{formatCity(selectedValue)}</strong>
        </p>
      )}
    </FormControl>
  );
}
