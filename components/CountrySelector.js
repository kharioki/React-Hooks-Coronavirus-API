import useStats from '../utils/useStats';

export default function Countries() {
  const countries = useStats('https://covid19.mathdro.id/api/countries');

  console.log(countries);

  if (!countries) return <p>Loading...</p>;
  return (
    <div>
      <select>
        {Object.entries(countries.countries).map(([code, country]) => (
          <option key={code} value={country.iso2}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
