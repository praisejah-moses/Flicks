import {motion,useAnimationControls,useInView} from 'framer-motion'
import {useRef,useEffect,useState} from "react";
import axios from 'axios';


let config ={
    method:'get' ,
    url: '/platform'
}
const StreamPlatform = ({animateShow,animateHidden}) => {
    const ref = useRef()
    const inView = useInView(ref);
    const animation = useAnimationControls()

    let [platform,setPlatform] = useState(
        [
        ]
)

    useEffect(() =>{
        if (inView){
            animation.start(animateShow);                
        }
        if(!inView){
            animation.start(animateHidden);
        }
    },[inView,animateHidden,animateShow,animation])

    useEffect(() => {
        axios(config)
        .then((res)=>{
            setPlatform(res.data[0].company)
        })
        .catch((err)=>{console.log(err)});
    },[]);

    return (
        <div className="section-container">
            <motion.h1 className="section-title"
                ref={ref}
                animate={animation}
            >Platforms</motion.h1>
            <div className='horizontal-wrapper'>
                {platform.map(platform => (
                <div className='platform-wrapper' key={platform.id}>
                    <img src={platform.service} alt="pic"/>
                </div>
                ))}
            </div>
        </div>
    );
}
 
export default StreamPlatform;