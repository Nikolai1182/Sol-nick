const React = require('react');
const Layout = require('./Layout');

function Admin() {
  return (
    <Layout>
      <div className="home">
        <div className="navbar">
          <a className="navbar-home" href="/info">
            О нас
          </a>
          <a className="navbar-home" href="/Contacts">
            Контакты
          </a>
          <a className="navbar-home" href="/Services">
            Услуги
          </a>
          <a className="navbar-home" href="/login">
            Войти
          </a>
        </div>
        <h1>Добрые руки</h1>

        <h2>
          Мы помогаем быть здоровыми
          <br />
          тем, у кого…:

        </h2>

        <div className="card-images">
          <div className="card-help">
            <img className="t490__img t-img loaded" src="https://thumb.tildacdn.com/tild3835-3365-4263-b333-336265326664/-/resize/400x/-/format/webp/1.png" alt="pfoto" />
            <p className="help">
              проблемы
              <br />
              с позвоночником или
              <br />
              сидячий образ жизни

            </p>
          </div>

          <div className="card-help">
            <img className="t490__img t-img loaded" src="https://thumb.tildacdn.com/tild3530-6439-4561-a663-306364623661/-/resize/400x/-/format/webp/2.png" alt="pfoto" />
            <p className="help">
              скованность движений
              <br />
              “одеревенелость” тела

            </p>
          </div>
          <div className="card-help">
            <img className="t490__img t-img loaded" src="https://thumb.tildacdn.com/tild3563-3064-4835-b130-636665373861/-/resize/400x/-/format/webp/3.png" alt="pfoto" />
            <p className="help">
              межпозвонковые
              <br />
              грыжи, остеохондроз

            </p>
          </div>
          <div className="card-help">
            <img className="t490__img t-img loaded" src="https://thumb.tildacdn.com/tild3930-6366-4430-b065-613163336565/-/resize/400x/-/format/webp/10.png" alt="pfoto" />
            <p className="help">
              выгорание
              <br />
              плохое настроение

            </p>
          </div>

        </div>
        <div className="description">
          <p className="description-text">
            Под действием массажа слущиваются отмершие клетки эпителия, улучшается кровообращение, кожа становится эластичной и упругой, подкожно-жировой слой уменьшается.
            Массаж восстанавливает утомлённые мышцы, повышает их работоспособность, эластичность, регулирует кровоснабжение в разных группах мышц, укрепляет связки.
            Психоэмоциональное состояние, настроение, самочувствие нормализуется после курса массажа. Улучшается мозговое кровообращение, работа нервной системы. Массаж - лучшее средство для снятия стресса.

            Доказано благоприятное влияние массажа на сердечно-сосудистую, дыхательную, пищеварительную системы.
            Массаж стимулирует обмен веществ: улучшает липидный обмен, кислотно-щелочное равновесие, выведение шлаков, что способствует снижению веса и исчезновению целлюлита.
            Массаж усиливает устойчивость организма к инфекциям.

            Лечебный массаж позволяет облегчить боли или избавиться от проявлений остеохондроза, бронхита и заболеваний лёгких, гипертонии и нарушения ритма сердца, артрита, вегетососудистой дистонии, невроза, гастрита, ожирения и многих других заболеваний.

          </p>
        </div>

      </div>
      <footer className="service-footer">
        <li>Телефон: +79376478992</li>
        <li>@mail: dobryeruki.@mail.ru</li>

      </footer>
    </Layout>

  );
}

module.exports = Admin;
