import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LoginForm from './LoginForm';
import MainNotes from './MainNotes';

class Routers extends React.Component {
    render() {
        return (
            <div>
                <center>
                    <div style={{
                        backgroundImage: `url("https://cdn.wallpapersafari.com/30/5/GjFDfp.jpg")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}>
                        <Router>
                            <Routes>
                                <Route path="/" element={<LoginForm />} />
                                <Route path="/login" element={<MainNotes />} />
                            </Routes>
                        </Router>
                    </div>
                </center>
            </div>
        )
    }
}

export default Routers;