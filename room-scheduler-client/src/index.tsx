import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Store } from './store/store';
import './index.css';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';

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
  <ErrorBoundary>
    <Context.Provider value={{store}}>
      <App />
    </Context.Provider>
  </ErrorBoundary>
);