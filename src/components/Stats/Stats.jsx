import axios from 'axios'
import Card from './Card/Card'
import h from './Stats.module.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React, { useEffect, useState } from 'react'
function Stats() {
    const [stats, setStats] = useState([]);
    useEffect(() => {
      axios.get("https://admin.taffeine.com/api/stati").then((resp) => {
        let allStat = resp.data.data;
        setStats(allStat);
      });
    }, []);
  return (
    <div className={h.Merop}>
    <div className={h.MeropTwo}>
      <div className={h.text}>
        <h1 className={h.title}>СТАТЬИ</h1>
        <h1 className={h.text}>Откройте для себя всемирные события Taffeine. Изучите календарь</h1>
      </div>
    </div>
    <div className={h.eve}>
    <OwlCarousel className='owl-theme ' autoplay  autoplayTimeout={3000} autoplayHoverPause loop margin={30} items={3} >

      {stats.map((item,index)=>{
    return <Card 
    key={index}
    title={item.title}
    img={item.url}
    category={item.category}
    text={item.content}
    slug={item.slug}
    />})
    }

      </OwlCarousel>
      </div>
    </div>
  )
}

export default Stats
