import { Outlet } from "react-router-dom";
import { AuthControls } from "./AuthControls";

export const Layout = () => {
    return (
        <>
            <header>
                <AuthControls/>
            </header>

            <main><Outlet/></main>

            <footer>2024</footer>
        </>
    )
}