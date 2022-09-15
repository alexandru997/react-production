import React from 'react';
import {Counter} from "./Components/Counter";
import './index.scss'

const App = () => {
    return (
        <div className='app'>
            Hello project
            <Counter/>
        </div>
    );
};

export default App;