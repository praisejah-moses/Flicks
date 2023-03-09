import {motion,useAnimationControls,useInView} from 'framer-motion'
import {useRef,useEffect,useState} from "react";
import axios from 'axios';

let config ={
    method:'get' ,
    url: 'https://flicks-s33j.onrender.com/trailer'
}

const Trailers = ({animateShow,animateHidden}) => {

    let [trailer,setTrailer] = useState(
        [
            
        ]
    )

    useEffect(() => {
        axios(config)
        .then((res)=>{
            setTrailer(res.data[0].trailers)
        })
        .catch((err)=>{console.log(err)});
    },[]);

    const ref = useRef()
    const inView = useInView(ref);
    const animation = useAnimationControls()

    useEffect(() =>{
        if (inView){
            animation.start(animateShow);                
        }
        if(!inView){
            animation.start(animateHidden);
        }
    },[inView,animateShow,animateHidden,animation])

    return (
        <div className="section-container trailers" >
            <motion.h1  className="section-title"
                ref={ref} 
                animate={animation}
            >Upcoming Movies</motion.h1>
            <div className="horizontal-wrapper" >
             {trailer.map(trailer =>(
                <div className="responsive-container" key={trailer.id}>
                    <motion.div className="video-wrapper"
                        whileHover={{
                            scale: 1.1,
                        }}
                    >  
                        <iframe  src={trailer.trailerURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>            
                    </motion.div>
                </div>
                ))}
            </div>
        </div>
    );
}
 
export default Trailers;