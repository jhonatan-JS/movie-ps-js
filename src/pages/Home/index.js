import React, { useEffect, useState } from 'react';

import MovieRow from '../../components/MovieRow';
import FeaturedMovie from '../../components/FeaturedMovie';
import Header from '../../components/Header';

import Tmdb from '../../services/Tmdb';

import Logo from '../../assets/logo.svg';

import '../global.css'
import './styles.css';


export default function Home() {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
      const loadAll = async () => {
        let list = await Tmdb.getHomeList()
        setMovieList(list);

        let originals = list.filter(i => i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1 ))
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

        setFeaturedData(chosenInfo);
      }

      loadAll();
    }, []);

    useEffect(() => {
      const scrollListener = () => {
        if(window.scrollY > 10) {
          setBlackHeader(true);
        } else {
          setBlackHeader(false);
        }
      }

      window.addEventListener('scroll', scrollListener);

      return () => {
        window.removeEventListener('scroll', scrollListener);
      }
    }, []);

    return (
      <div className="home-container"
        >
          <Header black={blackHeader} />

          {featuredData &&
          <FeaturedMovie item={featuredData}/>
          }

          <section className="lists">
            {movieList.map((item, key) => (
                <MovieRow key={key} title={item.title} items={item.items}/>
            ))}
          </section>

          <footer>
          <img src={ Logo } alt="movies-js"/>
          </footer>
        </div>
    );
}
