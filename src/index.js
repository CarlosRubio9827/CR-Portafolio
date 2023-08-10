import React from 'react';

import {HashRouter,
    Routes,
    Route,
} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import App from './App';
import './Styles/index.scss'
// import Invoices from "./Routes/Invoices";
// import RouteCountry from "./Routes/RouteCountry";

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
        
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />} />
                {/* <Route path="country" >
                    <Route path=":countryId" element={<RouteCountry />} />
                </Route>  */}
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </HashRouter>
    );