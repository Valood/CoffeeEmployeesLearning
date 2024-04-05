import {AppShell} from "@mantine/core";
import Navbar from "../components/Navbar.jsx";
import {Outlet} from "react-router-dom";

const Home = () => {
    return (
        <AppShell
            navbar={{width: 300}}
        >
            <AppShell.Navbar>
                <Navbar/>
            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    );
};

export default Home;
