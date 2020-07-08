import { useState, useEffect } from 'react';
import { async } from 'q';

function useStats() {
  const [stats, setStats] = useState();

  useEffect(() => {
    async function fetchData() {
      console.log('Fetching Data');
      // fetch data
      const data = await fetch('https://covid19.mathdro.id/api').then(res =>
        res.json()
      );

      // update stats
      setStats(data);
    }

    fetchData();
  }, []);

  return stats;
}

function Stats() {
  const stats = useStats();

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

export default function IndexPage() {
  return (
    <div>
      <Stats />
    </div>
  );
}
