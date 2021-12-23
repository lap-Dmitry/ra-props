import './App.css';
import { Stars } from './components/films/Stars';
import data from './data/etsy.json';
import Listing from './components/listing/Listing';

function App() {
  return (
    <>
    <div className='container'>
      <div className='title'>Рейтинг фильмов</div>
      <Stars count={1} />
      <Stars count={10} />
      <Stars count={3} />
      <Stars count={2} />
      <Stars count={0} />
      <Stars count={4} />
      <Stars />
    </div>
    <div className='box'>
    <div className='title'>Список предложений</div>
    <Listing items={data} />   
    </div>
    </>
  );
}

export default App;
