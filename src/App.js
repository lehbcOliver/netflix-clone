import React, {useEffect, useState} from 'react';
import api from './services/api';

import Filmes from './components/Filmes';
import Hero from './pages/Hero';
import Footer from './pages/Footer';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [hero, setHero] = useState(null);

  useEffect(()=> {
    const load = async () => {
      let list = await api.getHomeList();
      setMovieList(list);
      

      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random()* (originals[0].items.data.results.length -1));
      let chosen = originals[0].items.data.results[randomChosen];
      let choseInfo = await api.getMovieInfo(chosen.id, 'tv');
      setHero(choseInfo);
      
    }

    load();
  }, [])
  return (
    <div className="App">
      {hero && <Hero item={hero} /> }
      {movieList.map((item, key)=> (
        <Filmes  key={key} title={item.title} items={item.items}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;
