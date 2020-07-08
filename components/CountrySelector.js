import { useState } from 'react';
import styled from 'styled-components';

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
      <h2>Currently Showing {selectedCountry} stats:</h2>
      <SelectBox
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
      </SelectBox>
      <br />
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      />
    </div>
  );
}

const SelectBox = styled.select`
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
`;
