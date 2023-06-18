import React from "react";
import e from "./SecEight.module.css";
import Accordion from "react-bootstrap/Accordion";

function SecEight() {
  return (
    <div className={e.SecEight}>
      <div className={e.big}>
        <h1 className={e.mainTitle}>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h1>
        <div className="container">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header className={e.title}>
                Что лучше, напитки с коффеином или таблетки?
              </Accordion.Header>
              <Accordion.Body>
                Напитки приятные на вкус, имеют в составе сахар, много воды. Эти
                качества делают их более привлекательными, в тоже время, не
                стоит употреблять энергетики ради вкуса, или утоления жажды.
                Таблетки с коффеином употребляют более ответственно и осознанно,
                для увеличения физической или умственной эффективности.
                Вероятность привыкания уменьшается в несколько раз.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default SecEight;
