import React, { useEffect } from "react";
import h from "./Contact.module.css";
import { useState } from "react";
import { Axios } from "axios";
import axios from "axios";
import Contacy from "./Contacy/Contacy";
import {
  YMaps,
  Map,
  FullscreenControl,
  Panorama,
  ZoomControl,
} from "react-yandex-map";

function Contact() {
  const [con, getContact] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/contact").then((resp) => {
      let allCon = resp.data.data;
      getContact(allCon);
    });
  });
  const [state, setState] = useState({
    name: "",
    phone: "",
    message: "",
    email: "",
  });
  let valRead = (event) => {
    let valueIn = event.target.value;
    let nameIn = event.target.name;
    setState((old) => ({ ...old, [nameIn]: valueIn }));
  };
  let Send = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", state.name);
    formData.append("phone", state.phone);
    formData.append("message", state.message);
    formData.append("email", state.email);
    axios.post("https://admin.taffeine.com/api/registration", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };
  return (
    <div className={h.Merop}>
      <div className={h.MeropTwo}>
        <div className={h.text}>
          <h1 className={h.titler}>КОНТАКТ</h1>
          <h1 className={h.text}>
            Откройте для себя всемирные события Taffeine
          </h1>
        </div>
      </div>
      <div className={h.eve}>
        <div className={h.partone}>
          <div className={h.lineone}>
            {con.map((item, index) => {
              return (
                <Contacy
                  key={index}
                  text={item.value}
                  title={item.title}
                ></Contacy>
              );
            })}
          </div>
          <div className={h.linetwo}>
            <YMaps>
              <div className="Mapss">
                <Map
                  className={h.Map}
                  defaultState={{ center: [41.311151, 69.279737], zoom: 10 }}
                >
                  {" "}
                  <Panorama defaultPoint={[41.311151, 69.279737]} />{" "}
                  <ZoomControl
                    options={{ size: "small", position: { top: 10, left: 10 } }}
                  />
                  <FullscreenControl />
                </Map>
              </div>
            </YMaps>
          </div>
        </div>
        <div className={h.parttwo}>
          <form onSubmit={Send}>
            <div className={h.Mainbox}>
              <h1 className={h.title}>РЕГИСТРАЦИЯ</h1>
              <div className={h.box}>
                <label className={h.content}>Имя:</label>
                <input
                  className={h.intone}
                  onChange={valRead}
                  type="text"
                  name="name"
                  required
                ></input>
              </div>
              <div className={h.boxtwo}>
                <label className={h.content}>
                  Номер телефона или электронная почта:
                </label>
                <input
                  className={h.inttwo}
                  onChange={valRead}
                  type="text"
                  name="phone"
                  required
                ></input>
              </div>

              <div className={h.boxthree}>
                <label className={h.content}>Текст вопроса или запроса:</label>
                <textarea
                  className={h.intthree}
                  onChange={valRead}
                  type="text"
                  name="message"
                  required
                ></textarea>
              </div>
              <div className={h.df}>
                <input className={h.btnss} type="checkbox"></input>
                <h1 className={h.con}>Я согласен с условиями использования</h1>
              </div>
              <button className={h.btn}>Регистрация</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
