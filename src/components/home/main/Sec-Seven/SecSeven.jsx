import axios from "axios";
import React, { useState } from "react";
import h from "./SecSeven.module.css";

function SecSeven() {
  const [state, setState] = useState({
    name: "",
    phone: "",
    message: "",
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
    axios.post("https://admin.taffeine.com/api/contacts/codecraft", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };
  return (
    <div className={h.secseven}>
      <h1 className={h.title}>ОСТАВЬТЕ ЧЕСТНЫЙ ОТЗЫВ</h1>
      <p className={h.text}>Оставьте честный отзыв</p>
      <form onSubmit={Send}>
        <div className={h.mainbox}>
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
          <div className={h.box}>
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
        <button className={h.btn}>Отправить</button>
      </form>
    </div>
  );
}

export default SecSeven;
