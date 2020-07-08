import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';

export default function Countries() {
  const [selectedCountry, setSelectedCountry] = useState('KE');

  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {Object.entries(countries.countries).map(([code, country]) => (
          <option
            selected={selectedCountry === country.iso2}
            key={code}
            value={country.iso2}
          >
            {country.name}
          </option>
        ))}
      </select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      />
    </div>
  );
}
