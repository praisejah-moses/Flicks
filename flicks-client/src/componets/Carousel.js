import axios from "axios";
import { useEffect, useState } from "react";


let config = {
    method:'get' 
    ,
    url:'https://api.themoviedb.org/3/trending/all/week?api_key=aaf9c80f53e9ba7f6204f6b2a9537ea3'
}


const Carousel = () => {
    let imageURL = "url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces"

    let [carousel,setcarousel]=useState([])
    let [fistCarousel,setfistCarousel]=useState()

    useEffect(()=>{
        axios(config)
        .then((res)=>{
            setcarousel(res.data.results)
            setfistCarousel(res.data.results[0].id)
        })
        .catch((err)=>{console.log(err)});
    },[]);
    

    return (
        <div className = 'carousel-container'>
            <h1 className="section-title">Trending This Week</h1>
            <div id='carouselItem' className = "carousel slide" data-bs-ride="carousel" >
                <div className='overlay'></div>

                <div className="carousel-inner">
                    {carousel.slice(0,5).map(carousel => (
                        <div className={carousel.id === fistCarousel ? "carousel-item active":"carousel-item"} key={carousel.id} style={{backgroundImage : imageURL+carousel.poster_path}}>

                            <div className='carousel-titleContainer' >
                                <h1> {carousel.title||carousel.original_name}</h1>
                                <p>{carousel.overview.substring(0,199)+' ....'}</p>
                            </div>                
                        </div>
                    ))}
                </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselItem" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselItem" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    );
}
 
export default Carousel;