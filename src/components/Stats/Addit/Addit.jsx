import axios from "axios";
import h from "./Addit.module.css";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "../../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";

import "../../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";
function Addit(props) {
  const [add, setAdd] = useState({
    title: "",
    content: "",
    views: "",
    date: "",
    gallery: [{ img: "" }],
    url: "",
  });
  let params = useParams();
  let slug = params.slug;
  useEffect(() => {
    axios
      .get(`https://admin.taffeine.com/api/stati/view/${slug}`)
      .then((resp) => {
        let allView = resp.data.data;
        setAdd(allView);
      });
  });

  return (
    <div
      className={h.add}
      style={{
        backgroundImage: `url(${add.gallery[0].img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right ",
      }}
    >
      <div className={h.pad}>
        <div className={h.one}>
          <h1 className={h.dat}>Дата : {add.date}</h1>
          <h1 className={h.vie}>Посещяемость : {add.views}</h1>
        </div>
        <h1 className={h.title}>{add.title}</h1>
        <div
          className={h.imgbox}
          style={{
            backgroundImage: `url(${add.gallery[0].img})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className={h.two}>
          <h1
            className={h.content}
            dangerouslySetInnerHTML={{ __html: add.content }}
          ></h1>
        </div>
      </div>
    </div>
  );
}

export default Addit;
