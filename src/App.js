// import { Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Nav from './components/Nav';
import Router from './routes';

// theme
import ThemeProvider from './theme';

function App() {
    return (
        <ThemeProvider>
            <Router />
        </ThemeProvider>
    );
}

export default App;
