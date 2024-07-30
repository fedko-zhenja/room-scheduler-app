import { RouterProvider } from "react-router-dom";
import { Context } from "../index";
import { useContext, useEffect, useState } from "react";
import { protectedRouter, publicRouter } from "./routes";
import { observer } from "mobx-react-lite";
  
export const Router = observer(() => {
  const { store } = useContext(Context);
  const [router, setRouter] = useState(store.isAuth ? protectedRouter : publicRouter);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      if (localStorage.getItem('token') && !isChecked) {
        await store.checkAuth();
        setIsChecked(true);
      }
    };
    checkAuth();
  }, [isChecked, store]);

  useEffect(() => {
    setRouter(store.isAuth ? protectedRouter : publicRouter);
  }, [store.isAuth]);

  return <RouterProvider router={router} key={store.isAuth ? "protected" : "public"} />;
});