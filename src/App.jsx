import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import RouteList from './routes';

import VideoFundo from './assets/background-video.mp4';

function App() {
  AOS.init();
  
  return (
    <>

      <div className='background'>
        <video loop autoPlay muted>
          <source src={VideoFundo} type='video/mp4'/>
        </video>
      </div>

      <div className='app'>
        <RouteList/>
      </div>
     

    </>

    
  )
  
}

export default App
