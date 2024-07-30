import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";
import { AuthControls } from "./AuthControls/AuthControls";
import { useContext } from "react";
import { Context } from "../index";
import { Spinner } from "./Spinner";

export const Layout = observer(() => {
    const { store } = useContext(Context);

    if (store.isLoading) {
        return <Spinner />;
    }

    return (
        <div>
            <header>
                <AuthControls />
            </header>

            <main><Outlet /></main>
        </div>
    );
});