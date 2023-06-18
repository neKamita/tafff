import React, { useEffect, useState } from "react";
import axios from "axios";
import c from "./SecThree.module.css";

export default function SecThree() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://admin.taffeine.com/api/home/about_product")
      .then((resp) => {
        let allProducts = resp.data.data;
        setProduct(allProducts);
      });
  }, []);
  return (
    <div className={c.secThree}>
      <div className="container">
        <div className={c.big}>
          <div className={c.text_content}>
            <h1 className={c.title}>{product.title}</h1>
            <p
              dangerouslySetInnerHTML={{ __html: product.content }}
              className={c.text}
            ></p>
            <button className={c.btn}>Подробно</button>
          </div>
          <div className={c.img_content}>
            <img className={c.foto} src={product.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
