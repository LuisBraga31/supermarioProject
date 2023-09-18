import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  
  return (
    <>

    <div className='background'>
      <video loop autoPlay muted>
        <source src='../public/assets/background-video.mp4' type='video/mp4'/>
      </video>
    </div>


    </>

    
  )
  
}

export default App
