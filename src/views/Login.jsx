const React = require('react');

const Layout = require('./Layout');

module.exports = function Login({ login }) {
  return (
    <Layout login={login}>
      <div id="myModal" className="modal" style={{ display: 'none' }}>
        <div className="modal-content">
          <span className="close">&times;</span>
          <h2 className="hTag">Войдите на сайт</h2>
          <form action="/login" method="POST" id="loginForm">
            <label htmlFor="exampleInput1" className="form-label">Логин</label>
            <input name="login" type="text" className="form-control shadow rounded" id="exampleInput1" />
            <label htmlFor="exampleInput2" className="form-label">Пароль</label>
            <input name="password" type="password" className="form-control shadow rounded" id="exampleInput2" />
            <button type="submit" className="btn btn-primary shadow rounded">Отправить</button>
          </form>
        </div>
      </div>
      <div id="secondModal" className="modal" style={{ display: 'none' }}>
        <div className="modal-content">
          <span className="close">&times;</span>
          <div className="msg">Тут текст</div>
        </div>
      </div>

    </Layout>
  );
};
