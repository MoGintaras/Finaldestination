import './App.css';
import AddUser from "./pages/AddUser";
import AllUsers from "./pages/AllUsers";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
    return (
        <Router>
            <div className="App">
                <div className="d-flex center nav-bar">
                    <Link className="m-20 navbtn" to="/">Namai</Link>
                    <Link className="m-20 navbtn" to="/addUser">Prideti vartotoja</Link>
                </div>

                <Switch>
                    <Route exact path="/">
                        <AllUsers/>
                    </Route>
                    <Route path="/addUser">
                        <AddUser />
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
