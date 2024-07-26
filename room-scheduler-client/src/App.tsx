// import {FC, useContext, useEffect} from 'react';
// import LoginForm from './components/LoginForm/LoginForm';
// import { Context } from './index';
// import { observer } from 'mobx-react-lite';
// import { Spinner } from './components/Spinner';
// import './index.css';
// import { AuthControls } from './components/AuthControls';

// // import { SchedulePage } from './components/pages/SchedulePage';
// // import { LoginPage } from './components/pages/LoginPage';
// // import { RegistrationPage } from './components/pages/RegistrationPage';
// // import { NotFoundPage } from './components/pages/NotFoundPage';

// // import { Paths } from './types/type';

// const App: FC = () => {
//   const {store} = useContext(Context);

//   useEffect(() => {
//     if (localStorage.getItem('token')) {
//       store.checkAuth();
//     }
//   }, [store]);

//   if (store.isLoading) {
//     return (
//       <div className='content-wrapper'>
//         <AuthControls/>
//         <Spinner/>
//       </div>
// )
//   }

//   if (!store.isAuth) {
//     return (
//       <div className='content-wrapper'>
//         <AuthControls/>
//         <LoginForm/>
//     </div>
//     )
//   }

//   return (
//     <div className='content-wrapper'>
//       <AuthControls/>

//       <div>
//         <h1>{store.isAuth ? `User is authorized ${store.user.email}`: 'User is not authorized'}</h1>

//         <h1>{store.user.isActivated ? 'Account confirmed by email' : 'Account not verified by email'}</h1>
//       </div>

//     </div>
//   )
// }

// export default observer(App);

import {FC, } from 'react';
// import LoginForm from './components/LoginForm/LoginForm';
// import { Context } from './index';
import { observer } from 'mobx-react-lite';
// import { Spinner } from './components/Spinner';
// import './index.css';
// import { AuthControls } from './components/AuthControls';

// import { SchedulePage } from './components/pages/SchedulePage';
// import { LoginPage } from './components/pages/LoginPage';
// import { RegistrationPage } from './components/pages/RegistrationPage';
// import { NotFoundPage } from './components/pages/NotFoundPage';
// import { HomePage } from './components/pages/HomePage';

// import { Paths } from './types/type';

// import { Route, Routes } from 'react-router-dom';
// import { Layout } from './components/Layout';
import { Router } from './router/Router';

const App: FC = () => {
    return (
    <div className='content-wrapper'>
      <Router/>
      {/* <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path={Paths.HomePage} element={<HomePage/>}/>
          <Route path={Paths.SchedulePage} element={<SchedulePage/>}/>
          <Route path={Paths.LoginPage} element={<LoginPage/>}/>
          <Route path={Paths.RegistrationPage} element={<RegistrationPage/>}/>
          <Route path={Paths.NotFoundPage} element={<NotFoundPage/>}/>
        </Route>
      </Routes> */}
    </div>
  )
}

export default observer(App);