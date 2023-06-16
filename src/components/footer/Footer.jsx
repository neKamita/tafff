import React, { useEffect, useState } from "react";
import css from './Footer.module.css'
import phone from './Image/trubka.png'
import post from './Image/message.png'
import location from './Image/location.png'
import instagram from './Image/instagram.png'
import youtube from './Image/youtube.png'
import facebook from './Image/facebook.png'
import telegram from './Image/telegram.png'
import logo from './Image/logo.svg'
import axios from "axios";
import Links from "../navbar/Links/Links";
import { YMaps, Map, FullscreenControl, Panorama, ZoomControl } from "react-yandex-map";
function Footer() {
    const [foot, usefoot] = useState([]);
    useEffect(() => {
      axios.get("https://admin.taffeine.com/api/menu").then((resp) => {
        let allFoot = resp.data.data;
        usefoot(allFoot);
      });
    });
  
  return (
    <div>
      <div className={css.footer}>
        <div className={css.text_input_button}>
          <div className={css.text}>
              <h1 className={css.text_news}>Будьте в курсе новостей</h1>
          </div>
          <div className={css.input_button}>
              <input placeholder="Электронный адрес" className={css.input_email} type="email" />
              <button className={css.button_send}>Отправить</button>
          </div>
        </div>
        <hr className={css.hr} />
        <div className={css.info}>
          <div className={css.contac_email_location_inst_and_other}>
            <div className={css.contac_email_location}>
                <div className={css.contact_email_location_mini}>
                    <div className={css.mini_info}>
                        <img className={css.phone} src={phone} alt="" />
                        <hr />
                        <a href="tel:+998901151333"><p className={css.p_1}>+998901151333</p></a>
                    </div>
                    <div className={css.mini_info}>
                        <img className={css.phone} src={post} alt="" />
                        <hr />
                        <a href="mailto:info@sightex.uz"><p className={css.p_1}>info@sightex.uz</p></a>
                    </div>
                    <div className={css.mini_info}>
                        <img className={css.phone} src={location} alt="" />
                        <hr />
                        <a href="https://goo.gl/maps/nVuUyquYunqT6Wfv9" target="_blank"><p className={css.p_1}>Massiv Yalong'och 119A, <br /> Toshkent</p></a>
                    </div>
                </div>
                <ul className={css.nav}>
                    {foot.map((item, index)=>{
                        return <Links key={index} title={item.title}></Links>
                    })}
                </ul> 
            </div>
            <div className={css.inst_and_other}>
              <button className={css.sot_seti}><img clasName={css.image_sot_seti} src={instagram} alt="" /></button>
              <button className={css.sot_seti_1}><img clasName={css.image_sot_seti} src={telegram} alt="" /></button>
              <button className={css.sot_seti_1}><img clasName={css.image_sot_seti} src={youtube} alt="" /></button>
              <button className={css.sot_seti_1}><img clasName={css.image_sot_seti} src={facebook} alt="" /></button>
            </div>
          </div>
          <YMaps >
          <div className="Maps">
          <Map className={css.Map} width='300px' height='300px'  defaultState={{center:[41.311151, 69.279737], zoom:10}}> <Panorama defaultPoint={[41.311151, 69.279737]} /> <ZoomControl options={{ size: "small", position: { top: 10, left: 10 } }} /><FullscreenControl />
            </Map>
          </div>

          </YMaps>
        </div>
        <hr className={css.hr} />
        <div className={css.logo_and_sightex}>
          <img className={css.logo_taffeine} src={logo} alt="" />
          <p className={css.p_2}>© Sightex LLC 2022 / Все права защищены</p>
        </div>
      </div>
    </div>
  )
}

export default Footer