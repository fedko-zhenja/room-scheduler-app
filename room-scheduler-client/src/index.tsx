import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

interface State {
  store: Store;
}

const store = new Store();

export const Context = createContext<State>({
  store,
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
      <Context.Provider value={{store}}>
        <App />
    </Context.Provider>
  </BrowserRouter>
);