import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  const app = React.createElement(App);
  root.render(app);
} else {
  console.error('Element root not found!');
}
