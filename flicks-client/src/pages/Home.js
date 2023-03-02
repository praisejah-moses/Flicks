import  Carousel  from '../componets/Carousel';
import '../css/carousel.css'
import RecentlyAdded from '../componets/RecentlyAdded';
import WatchList from '../componets/WatchList';
import Recommended from '../componets/Recommended';
import Trailers from '../componets/Trailers';
import PopularTv from '../componets/PopularTv';
import TopRatedTv from '../componets/TopRatedTv';
import StreamPlatform from '../componets/StreamPlatform';

const Home = () => { 

        const animateShow =  {
            x:0,
            transition:{duration:0.3} 
        }
        const animateHidden = {
            x:'-100%',
            transition:{duration:0.5}
        }
    return (
        <>
            <Carousel/>
            <RecentlyAdded animateShow={animateShow} animateHidden={animateHidden}/>
            <WatchList animateShow={animateShow} animateHidden={animateHidden}/>
            <Recommended animateShow={animateShow} animateHidden={animateHidden}/>
            <Trailers animateShow={animateShow} animateHidden={animateHidden}/>
            <PopularTv animateShow={animateShow} animateHidden={animateHidden}/>
            <StreamPlatform animateShow={animateShow} animateHidden={animateHidden}/>
            <TopRatedTv animateShow={animateShow} animateHidden={animateHidden}/>
        </>
    );
}
export default Home
