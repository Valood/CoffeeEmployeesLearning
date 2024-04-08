import {AppShell} from "@mantine/core";
import Navbar from "../components/Navbar.jsx";
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Home = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    }, [navigate]);

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
