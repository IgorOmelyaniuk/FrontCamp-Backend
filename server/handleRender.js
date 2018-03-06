import React from 'react';
import { renderToString } from 'react-dom/server';

// import App from '../client/containers/App';

function renderFullPage(html) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="/styles.css">
        
        <title>Document</title>
    </head>
    <body>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
    </body>
    </html>
  `;
}

function handleRender(req, res) {
  const html = renderToString(<App />);

  res.send(renderFullPage(html));
}

export default handleRender;