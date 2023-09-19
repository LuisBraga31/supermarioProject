import './Grid.css';

const Grid = () => {
  return (
    <main>
        
        <div className="main_wallpaper" data-aos= "fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">

            <div className="grid_item"> 
                <img src="../../../assets/wp_01.jpg" alt=""/>
            </div>
            <div className="grid_item">
                <img src="../../../assets/wp_02.jpg" alt=""/>
            </div>
            <div className="grid_item">
                <img src="../../../assets/wp_03.png" alt=""/>
            </div>
            <div className="grid_item">
                <img src="../../../assets/wp_04.jpeg" alt=""/>
            </div>
            <div className="grid_item">
                <img src="../../../assets/wp_05.jpg" alt=""/>
            </div>
            <div className="grid_item">
                <img src="../../../assets/wp_06.jpg" alt=""/>
            </div>

        </div>

    </main>
  )
}

export default Grid