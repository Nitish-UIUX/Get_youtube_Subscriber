import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetallSubscriber from './components/GetallSubscriber';
import SubscriberByName from './components/SubscriberByName';
import SubcriberByid from './components/SubcriberByid';
import Header from './components/Header';

const AppRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<SubcriberByid />} />
                <Route path="/subscriber/name" element={<SubscriberByName />} />
                <Route path="/subscriber/gellall" element={<GetallSubscriber />} />
            </Routes>
        </>

    );
};

export default AppRoutes;
