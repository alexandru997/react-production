import React, {Suspense} from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss'

import {classNames} from "shared/lib/classnNames/classNames";

import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";


const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={'/'}>Home</Link>
            <Link to={'about'}>About</Link>
            <AppRouter/>
        </div>
    );
};

export default App;