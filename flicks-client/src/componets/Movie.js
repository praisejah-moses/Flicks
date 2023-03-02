import Gallery from "./Gallery";

const APIKEY = 'aaf9c80f53e9ba7f6204f6b2a9537ea3'
let config ={
    method:'get' ,
    url: 'https://api.themoviedb.org/3/movie/popular?api_key='+APIKEY+'&language=en-US&page=1'
}

const Movie = () => {
    
    return (
        <div className="section-container" >
            <h1 className="section-title" >All Movies</h1>
            <div className="movies-container">
               <Gallery config={config}/>
            </div>
        </div>
    );
}
 
export default Movie;