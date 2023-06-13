import React from 'react';
import { Provider } from 'react-redux';
import { OrderPage } from '../pages/OrderPage/OrderPage';
import { store } from '../../store/store';
import { AccentButton } from '../common/buttons/AccentButton/AccentButton';
import './app.css';

const projectName = 'Payment service (demo-project Sergei Prokhorov)';
const footerText = `© ${new Date().getFullYear()} ${projectName}`;

function App() {
  return (
    <Provider store={store}>
      <div className="app">

        <header>
          <div className="headerTitle">{projectName}</div>
          <nav>
            <AccentButton onClick={() => console.warn('handleLoginClick();')} children="Login" />
            <AccentButton onClick={() => console.warn('handleSignUpClick();')} children="Sign up" />
          </nav>
        </header>

        <main>
          <OrderPage />
        </main>

        <footer>{footerText}</footer>

      </div>
    </Provider>
  );
}

export { App };
