import useStats from '../utils/useStats';

export default function Stats({ url }) {
  const stats = useStats(url);

  if (!stats) return <p>Loading...</p>;
  return (
    <div>
      <div className="statBlock">
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value}</span>
      </div>
      <div className="statBlock">
        <h3>Deaths:</h3>
        <span>{stats.deaths.value}</span>
      </div>
      <div className="statBlock">
        <h3>Recovered:</h3>
        <span>{stats.recovered.value}</span>
      </div>
    </div>
  );
}
