import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { OrderPage } from '../pages/OrderPage/OrderPage';
import { store } from '../../store/store';
import { AccentButton } from '../common/buttons/AccentButton/AccentButton';
import { GeneralButton } from '../common/buttons/GeneralButton/GeneralButton';
import { WebSocketConsole } from '../WebSocketConsole/WebSocketConsole';
import { Gap, GapSize } from '../common/Gap/Gap';
import './app.css';

const projectName = 'Payment service (demo-project Sergei Prokhorov)';
const footerText = `© ${new Date().getFullYear()} ${projectName}`;

function App() {
  const [showConsole, setShowConsole] = useState(false);
  const consoleBtnFirstLetter = showConsole ? 'Hide' : 'Show';

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
          <div className="pageContainer">
            <OrderPage />
            <Gap size={GapSize.Medium} />
            <GeneralButton onClick={() => setShowConsole((prevState) => !prevState)} children={`${consoleBtnFirstLetter} WebSocket example`} />
          </div>
          {showConsole && <WebSocketConsole />}
        </main>

        <footer>{footerText}</footer>

      </div>
    </Provider>
  );
}

export { App };
