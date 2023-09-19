import './Grid.css';

import Item01 from '../../assets/wp_01.jpg';
import Item02 from '../../assets/wp_02.jpg';
import Item03 from '../../assets/wp_03.png';
import Item04 from '../../assets/wp_04.jpeg';
import Item05 from '../../assets/wp_05.jpg';
import Item06 from '../../assets/wp_06.jpg';

const Grid = () => {
  return (
    <main>
        
        <div className="main_wallpaper" data-aos= "fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">

            <div className="grid_item"> 
                <img src={Item01} alt=""/>
            </div>
            <div className="grid_item">
                <img src={Item02} alt=""/>
            </div>
            <div className="grid_item">
                <img src={Item03} alt=""/>
            </div>
            <div className="grid_item">
                <img src={Item04} alt=""/>
            </div>
            <div className="grid_item">
                <img src={Item05} alt=""/>
            </div>
            <div className="grid_item">
                <img src={Item06} alt=""/>
            </div>

        </div>

    </main>
  )
}

export default Grid