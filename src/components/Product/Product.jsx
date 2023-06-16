import axios from 'axios'
import h from './Product.module.css'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
function Product() {
    const [prod, setProd] = useState([]);
    useEffect(() => {
      axios.get("https://admin.taffeine.com/api/home/product").then((resp) => {
        let allProd = resp.data.data;
        setProd(allProd);
      });
    }, []);
  return (
    <div className={h.Merop}>
    <div className={h.MeropTwo}>
      <div className={h.text}>
        <h1 className={h.title}>ПРОДУКТ</h1>
        <h1 className={h.text}>Откройте для себя всемирные события Taffeine</h1>
      </div>

    </div>
    <div className={h.main}>
    <div className={h.info}>
    <div className={h.ibox}>
    <img className={h.img} src={'https://admin.taffeine.com/uploads/product/05b3a0acfd43f52d86b026b8ea86e3cc.jpg'} ></img>

    </div>
      <h4 className={h.textt} dangerouslySetInnerHTML= {{__html: prod.content }}></h4>
      </div>  
      <div className={h.stat}>
      <table className={h.table}>
      <thead>
        <tr>
          <th>Ингредиенты</th>
          <th>Количество на порцию</th>
          <th>% от суточной потребности</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Кофеин</td>
          <td>75 мг</td>
          <td>*</td>
        </tr>
        <tr>
          <td>Таурин</td>
          <td>200 мг	</td>
          <td>*</td>
        </tr>
        <tr>
          <td>Витамин В6</td>
          <td>2 мг	</td>
          <td>100%</td>
        </tr>
      </tbody>
    </table>
    <div className={h.btns}>
    <NavLink to=''>
    <button className={h.one} type='button'>Купить онлайн</button>
    </NavLink>
      <NavLink to=''>
      <button className={h.two} type='button'>Найти в аптеках</button>
      </NavLink>
       
           
        </div>

      </div>
    </div>

    </div>
  )
}

export default Product
