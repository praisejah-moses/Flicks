import axios from 'axios';
import {useEffect , useState} from 'react'

const Gallery = ({config}) => {

    let [card,setCard] = useState(
        [
        
        ]
)

useEffect(() => {
    axios(config)
    .then((res)=>{
        setCard(res.data.results)
    })
    .catch((err)=>{console.log(err)});
},[config]);

return (
        card.map(card => (
            <div className="movie-wrapper"key={card.id}>
                <img src={"https://image.tmdb.org/t/p/w200"+card.poster_path} alt={card.title}/>
                <div  className="meta" >
                    <h6>{card.title||card.name}</h6>
                    <p>{card.overview.substring(0,80)+' ....'}</p>
                    <p>{card.release_date||card.first_air_date}</p>
                </div>
            </div>
            ))
    );
}
 
export default Gallery
