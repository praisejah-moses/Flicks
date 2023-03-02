import '../css/carousel.css'
import MCard from './MCard';
import {motion,useAnimationControls,useInView} from 'framer-motion'
import {useRef,useEffect} from "react";


const APIKEY = 'aaf9c80f53e9ba7f6204f6b2a9537ea3'
let config ={
    method:'get' ,
    url: 'https://api.themoviedb.org/3/movie/829280/recommendations?api_key='+APIKEY+'&language=en-US&page=1'
}


const Recommended = ({animateShow,animateHidden}) => {
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
        <div className ='section-container'>
            <motion.h1 className='section-title' 
                ref={ref}
                animate={animation}
            >Top Recommended</motion.h1>
            <div className='horizontal-wrapper'>
            <MCard config={config}/>
            </div>
        </div>
    );
}
export default Recommended;