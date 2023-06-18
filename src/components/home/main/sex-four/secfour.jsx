import React from "react";
import logo from "../../../..//assets/img/305c4fb0f23d1c8ca1503973d324a249.jpg";
import h from "./secfour.module.css";
function secfour() {
  return (
    <div className="container">
      <div className={h.secfour}>
        <h1 className={h.title}>СОСТАВ ПРОДУКТА</h1>
        <div className={h.div}>
          <img src={logo} className={h.img}></img>
          <div className={h.sec}>
            <table>
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
                  <td>200 мг </td>
                  <td>*</td>
                </tr>
                <tr>
                  <td>Витамин В6 </td>
                  <td>2 мг</td>
                  <td>100%</td>
                </tr>
              </tbody>
            </table>
            <div className={h.btns}>
              <button className={h.one} type="button">
                Купить онлайн
              </button>
              <button className={h.two} type="button">
                Найти в аптеках
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default secfour;
