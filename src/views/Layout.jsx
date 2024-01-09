const React = require('react');

function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/login.js" />
        <title>Kind hands</title>
      </head>

      <body>

        { children }
      </body>
    </html>
  );
}

module.exports = Layout;
