const React = require('react');
const Layout = require('./Layout');

function Service() {
  return (
    <Layout>
      <div className="services">
        <div className="navbar">
          <div className="navbar-services">
            Услуги
          </div>
        </div>

        <h1>Виды массажа</h1>
        <div className="types-of-massage">
          <ul className="massages">
            <li>
              общий массаж всего тела - 2000 ₽
              {' '}
              <button>Записаться</button>
            </li>

            <li>
              современный и традиционный массаж - 1500 ₽
              {' '}
              <button>Записаться</button>
            </li>

            <li>
              расслабляющие массажи - от 1000 ₽
              {' '}
              <button>Записаться</button>
            </li>
            <li>
              классический - 1000 ₽
              {' '}
              <button>Записаться</button>
            </li>
            <li>
              косметический - 1000 ₽
              {' '}
              <button>Записаться</button>
            </li>
            <li>
              медицинский (лечебный) - 2000 ₽
              {' '}
              <button>Записаться</button>
            </li>
          </ul>
        </div>
        <h1 className="h1">Наши специалисты</h1>

        <div className="specialists">
          <div className="card">
            <img src="../images/a9e47761.jpg" alt="photo" width={230} height={250} />

            <h3>Ягубов Мулазим</h3>
            <button>Записаться</button>
          </div>
          <div className="card">
            <img src="../images/1a881aaa.jpg" alt="photo" width={230} height={250} />

            <h3>Петрова Ирина</h3>
            <button>Записаться</button>
          </div>
          <div className="card">
            <img src="../images/Ju4qzkPihPE.jpg" alt="photo" width={230} height={250} />

            <h3>Фаридонова Айгуль</h3>
            <button>Записаться</button>
          </div>
        </div>
        <a className="to-main" href="/">На главную</a>
        <footer className="service-footer">
          <li>Телефон: +79376478992</li>
          <li>@mail: dobryeruki.@mail.ru</li>

        </footer>
      </div>
    </Layout>

  );
}

module.exports = Service;
