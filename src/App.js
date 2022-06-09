import Launches from "./components/launches";
import Launch from "./components/launch";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.scss'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Home</h1>}/>
                <Route path="about" element={<h1>About</h1>}/>
                <Route path="launches" element={<Launches/>}/>
                <Route path="launches/:launchId" element={<Launch/>}/>
                <Route path="*" element={<h1>404 Page no found</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
