import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '../components/App/App';

const rootEl = document.getElementById('root');
if (rootEl) {
  const app = React.createElement(App);
  ReactDOM.createRoot(rootEl).render(app);
} else {
  console.error('Element root not found!');
}
