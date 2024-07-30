import { observer } from 'mobx-react-lite';
import { Router } from './router/Router';

export const App = observer(() => {
  return (
    <Router/>
)
});