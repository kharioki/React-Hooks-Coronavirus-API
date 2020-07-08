import Stats from '../components/Stats';
import Countries from '../components/CountrySelector';

export default function IndexPage() {
  return (
    <div>
      <Stats url="https://covid19.mathdro.id/api" />
      <Countries />
      <Stats url="https://covid19.mathdro.id/api/countries/US" />
    </div>
  );
}
