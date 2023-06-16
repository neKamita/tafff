import React from 'react'
import h from './MEvent.module.css'
function MEvent() {
  return (
    <div className={h.MEvent}>
    <h1 className={h.title}>ПОИСК СОБЫТИЙ ПО ИНТЕРЕСАМ</h1>
    <div className={h.line}>
        <div className={h.btns}>
            <button type='button' className={h.one}>Предстоящий</button>
            <button type='button' className={h.one}>Прошлый</button>
        </div>
        <div class="dropdown">
  <button type="button" class="btn bord dropdown-toggle" data-bs-toggle="dropdown">Все Дисциплины</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Киберспорт</a></li>
    <li><a class="dropdown-item" href="#">Ралли</a></li>
    <li><a class="dropdown-item" href="#">Большой Теннси</a></li>
    <li><a class="dropdown-item" href="#">Горнолыжный Спорт</a></li>

  </ul>
</div>
    </div>
      
    </div>
  )
}

export default MEvent
