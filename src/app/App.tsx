import React, {Suspense} from 'react';
import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import './styles/index.scss'

import {classNames} from "shared/lib/classnNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {useTheme} from "app/providers/ThemeProvider";


const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={'/'}>Home</Link>
            <Link to={'about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;