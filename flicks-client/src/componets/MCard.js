import axios from 'axios';
import {useEffect , useState} from 'react'
import {motion} from 'framer-motion'


const MCard = ({config}) => {

    let [mCard,setmCard] = useState(
            [
                
            ]
    )


    useEffect(() => {
        axios(config)
        .then((res)=>{
            setmCard(res.data.results)
        })
        .catch((err)=>{console.log(err)});
    },[config]);



   return ( 
            mCard.slice(0,20).map(mCard => (
                <div className ='m-card' key={mCard.id}>
                    <motion.img src={'https://image.tmdb.org/t/p/w200'+mCard.poster_path} alt={mCard.title||mCard.name} className ='movieImg' 
                        whileHover={{scale:1.1,}}
                    />
                    <div className = 'meta-wrap'>
                        <h6>{mCard.title||mCard.name}</h6>
                        <h6>{mCard.release_date||mCard.first_air_date}</h6>
                    </div>
                </div>
            ))
    );
}
 
export default MCard;