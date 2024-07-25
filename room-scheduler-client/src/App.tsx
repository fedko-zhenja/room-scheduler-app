import {FC, useContext, useEffect, useState} from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import { Context } from './index';
import { observer } from 'mobx-react-lite';
import { IUser } from './models/IUser';
import { UserService } from './services/UserService';
// import { Header } from './components/Header';
import { Spinner } from './components/Spinner';
import './index.css';
import { AuthControls } from './components/AuthControls';

const App: FC = () => {
  const {store} = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, [store]);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    } 
  }

  if (store.isLoading) {
    return (
      <div className='content-wrapper'>
        <AuthControls/>
        {/* <Header/> */}
        {/* <div className='content-wrapper'> */}
          <Spinner/>
        {/* </div> */}
      </div>
)
  }

  if (!store.isAuth) {
    return (
      <div className='content-wrapper'>
        <AuthControls/>
        {/* <Header/> */}
        {/* <LoginForm/> */}
        {/* <div className='content-wrapper'> */}
          {/* <Spinner/> */}
          <LoginForm/>
        {/* </div> */}
    </div>
    )
  }

  return (
    <div className='content-wrapper'>
      {/* <Header/> */}
      <AuthControls/>

      <div>

        <h1>{store.isAuth ? `User is authorized ${store.user.email}`: 'User is not authorized'}</h1>

        <h1>{store.user.isActivated ? 'Account confirmed by email' : 'Account not verified by email'}</h1>

        <button onClick={() => store.logout()}>Log out of account</button>

        <div>
          <button onClick={getUsers}>Get users</button>
        </div>
        {users.map(user => 
          <div key={user.email}>{user.email}</div>
        )}

      </div>

    </div>
  )
}

export default observer(App);