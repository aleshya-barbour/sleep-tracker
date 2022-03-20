import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
const express = require("express");

const app = express();
app.listen(3000, () => console.log("server is running..."));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


