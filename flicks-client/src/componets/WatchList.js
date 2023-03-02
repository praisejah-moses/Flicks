import {motion,useAnimationControls,useInView} from 'framer-motion'
import {useRef,useEffect} from "react";

const WatchList = ({animateShow,animateHidden}) => {
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
        <div className = 'section-container'>
            <motion.h1  className ='section-title' 
                ref={ref}
                animate={animation}
            >Watchlist</motion.h1> 
            <p>Sign in to access your Watchlist <br />
                Save shows and movies to keep track of what you want to watch. <br />
                <button className ='btn btn-success'>
                Sign In
            </button>
            </p>
        </div>
    );
}
 
export default WatchList;