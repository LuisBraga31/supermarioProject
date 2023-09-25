import './Home.css';

import LogoMovie from '../../assets/logo-movie.png';
import MarioLuigi from '../../assets/mario-and-luigi.png';

const Home = () => {
  return (
    <main>
        <div className='main_info'>
            
            <img data-aos= "fade-up"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                src={LogoMovie} width="250px"/>

            <p data-aos= "fade-up" data-aos-delay="300" data-aos-duration="800" data-aos-easing="ease-in-out" >
                Um dia, Mario e Luigi vão para no reino dos cogumelos, governado pela Princesa Peach, 
                mas ameaçado pelo rei dos Koopas, Bowser, que vai fazer de tudo para conseguir 
                reinar todos os lugares. É então quando Luigi é raptado por Bowser e o usa para 
                procurar Mario, o único capaz de deter o Koopa e reestabelecer a paz. 
            </p>

            <div data-aos= "fade-up" data-aos-delay="600" data-aos-duration="800"data-aos-easing="ease-in-out" >
                <a href="https://www.youtube.com/watch?v=cDNkh5WybZo&ab_&ab_channel=F%C3%A3sdeCinema" target="_blank" rel="noreferrer"> Assistir Trailer </a>
                <button> Comprar Ingressos </button>
            </div>

        </div>
        
        <img 
            className="luigi-mario"
            data-aos= "fade-up"
            data-aos-delay="500"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            src={MarioLuigi} width="550px" alt="" 
        />

    </main>

  )
}

export default Home