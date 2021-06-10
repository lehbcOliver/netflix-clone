import React, {useState, useEffect} from 'react';
import {FaPlay, FaPlus} from 'react-icons/fa';
import {Container} from './style';
import Header from '../Header';

const Hero = ({item}) => {
    const [blackHeader, setBlackHeader] = useState(false);
    
    let firstData = new Date(item.data.first_air_date);
    let description = ((item.data.overview).substring(0,200)+'...');
    let genres = [];
    for(let i in item.data.genres){
        genres.push(item.data.genres[i].name)
    }
    useEffect(()=> {
        const scrollListener = () => {
            if(window.scrollY > 10) {
                setBlackHeader(true)
            }
            else {
                setBlackHeader(false)
            }
        }
        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    },[])
    return (
        <Container style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.data.backdrop_path})`}}>
            <Header black={blackHeader}/>
          <div className="degradVertical">
          
            <div className="degradHorizontal">
           
                <div className="title">{item.data.original_name}</div>
                <div className="info">
                    <div className="points">{item.data.vote_average} pontos</div>
                    <div className="year">{firstData.getFullYear()}</div>
                    <div className="seasons">{item.data.number_of_seasons} Temporada{item.data.number_of_seasons > 1 ? 's' : ''}</div>
                </div>
                <div className="description">{description}</div>
                <div className="buttons">
                    <a className='watchButton' href={`/watch/${item.data.id}`}><FaPlay />Assistir</a>
                    <a className='listButton' href={`/list/add/${item.data.id}`}><FaPlus />Minha lista</a>
                </div>
                <div className="genres"><strong>Gêneros : </strong>{genres.join(', ')}</div>
            </div>
          </div>
        </Container>
    );
}

export default Hero;