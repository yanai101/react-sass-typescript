import * as React from 'react';
import cls from './App.scss';
import Header from './components/Header';

class App extends React.Component {
    render() {
        return (
            <div className={cls.App}>
                <div className={cls.AppHeader}>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Header/>
            </div>
        );
    }
}

export default App;