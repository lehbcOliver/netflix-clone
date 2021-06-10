import React, {useState} from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import api from '../../services/api';
import {Container, H2,ContainerRow, MovieRow, MovieRowItem, Modal} from './styled';



const Filmes = ({title, items}) => {
    const [scrollX, setScrollX]  = useState(0);
    const [modal, setModal] = useState(false);
    const [getInfo, setGetInfo] = useState({
        id: '',
        image: '',
        name: '',
        title: '',
        seasons: '', 
        overview: ''
    })
    

    const handleLeft = () =>{
        let x = scrollX + (Math.round(window.innerWidth /2));
        if(x > 0){
            x=0;
            
        }
        setScrollX(x);
    }
    const handleRight = () =>{
        let x = scrollX - (Math.round(window.innerWidth /2));
        let listW = items.data.results.length * 150;
        if((window.innerWidth - listW) > x){
            x =  (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }
    const handleModal = async (item) => {
        let infoMovie;
        let infoSeasons;
       if(item.video == false){
          infoMovie = await api.getMovieInfo(item.id, 'movie');
       }else {
        infoSeasons = await api.getMovieInfo(item.id, 'tv');
       }
       console.log(item)
       
         setGetInfo({
             id: item.id,
             image: item.backdrop_path,
             name: item.original_name,
             title: item.title,
             seasons: infoSeasons ? infoSeasons.data.number_of_seasons : '',
             overview: infoSeasons ? infoSeasons.data.overview : item.overview,
             
             
         })
      
         
        setModal(true);
    }
    const body = window.document.getElementById('content');
    body.addEventListener('click', ()=>{
        setModal(false)
    })
   
    const handleCloseModal = () => {
        setModal(false);
    }
    
    return (
            <Container id='container'>
                <H2>{title}</H2>
                <div className="movie-left" onClick={handleLeft}>
                    <FaAngleLeft  size={60}/>
                </div>
                <div className="movie-right" onClick={handleRight}>
                    <FaAngleRight size={60} />
                </div>
                <ContainerRow>
                    <MovieRow style={{
                            marginLeft: scrollX,
                            width: items.data.results.length * 150
                        }}>
                    {items.data.results.length > 0 && items.data.results.map((item, key)=> (
                        <MovieRowItem key={key}>
                            <a href='#' onClick={()=>handleModal(item)} >
                            <img src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} alt='lista de filmes' />
                            </a>
                            
                        </MovieRowItem>
                    ))}
                    </MovieRow>
                    <Modal id={modal ? 'modalView' : ''}>
                        <div className="close" onClick={handleCloseModal}>x</div>
                        <div className="Image">
                            <img src={`https://image.tmdb.org/t/p/original${getInfo.image}`} alt="" />
                        </div>
                        <div className="degrade">
                            <h1>{getInfo.name ? getInfo.name : getInfo.title}</h1>
                            <h3>{getInfo.seasons > 0 ? getInfo.seasons + ' Temporadas' : ''}</h3>
                            <p>{getInfo.overview}</p>
                        </div>
                        
                    </Modal>
                </ContainerRow>
                
            </Container>
     
    );
}

export default Filmes;