
import React from 'react'; // Add the missing import statement for React
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes.js';

function App() {
    return (
        <>
            <Router>
                <AppRoutes />
            </Router>
        </>

    );
}

export default App;
