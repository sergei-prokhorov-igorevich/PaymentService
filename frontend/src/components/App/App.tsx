import React from 'react';
import { Provider } from 'react-redux';
import OrderPage from '../OrderPage/OrderPage';
import { store } from '../../store/store';
import { AccentButton } from '../buttons/AccentButton/AccentButton';
import './styles/app.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">

        <header>
          <div className="headerTitle">Moment payment service by Rapyd (demo)</div>
          <nav>
            <AccentButton onClick={() => console.log('handleLoginClick();')} children="Login" />
            <AccentButton onClick={() => console.log('handleSignUpClick();')} children="Sign up" />
          </nav>
        </header>

        <main>
          <OrderPage />
        </main>

        <footer>©2023 Rapyd Financial Network (2016) Ltd.</footer>

      </div>
    </Provider>
  );
}

export { App };
