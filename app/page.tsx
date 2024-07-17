import Acknowledgements from './components/home/Acknowledgements';
import Banner from './components/home/Banner';
import Benefits from './components/home/Benefits';
import QuoteAndImage from './components/home/QuoteAndImage';
import Services from './components/home/Services';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Banner />
      <Services />
      <QuoteAndImage />
      <Acknowledgements />
      <Benefits />
    </main>
  );
}
