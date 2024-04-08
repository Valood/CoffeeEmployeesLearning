import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import {MantineProvider} from "@mantine/core";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./store/store.js";
import {api} from "./store/api.js";
import {Notifications} from "@mantine/notifications";

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <MantineProvider>
                <Notifications/>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </MantineProvider>
        </Provider>

    </React.StrictMode>,
)
