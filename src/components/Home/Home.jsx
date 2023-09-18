import './Home.css';

const Home = () => {
  return (
    <>
        <div className='main_info'>
            <img 
                data-aos= "fade-up"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                src="../../../public/assets/logo-movie.png" width="250px"/>
            <p 
               data-aos= "fade-up"
               data-aos-delay="300"
               data-aos-duration="800"
               data-aos-easing="ease-in-out"
            >
                Um dia, Mario e Luigi vão para no reino dos cogumelos, governado pela Princesa Peach, 
                mas ameaçado pelo rei dos Koopas, Bowser, que vai fazer de tudo para conseguir 
                reinar todos os lugares. É então quando Luigi é raptado por Bowser e o usa para 
                procurar Mario, o único capaz de deter o Koopa e reestabelexcer a paz. 
            </p>
            <div 
               data-aos= "fade-up"
               data-aos-delay="600"
               data-aos-duration="800"
               data-aos-easing="ease-in-out">
                <a href="https://www.youtube.com/watch?v=cDNkh5WybZo&ab_&ab_channel=F%C3%A3sdeCinema" target="_blank" rel="noreferrer"> Assistir Trailer </a>
                <button> Comprar Ingressos </button>
            </div>
        </div>
        <img 
        data-aos= "fade-up"
        data-aos-delay="500"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        src="../../../public/assets/mario-and-luigi.png" width="680px" alt="" />
    </>

  )
}

export default Home