import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import EditUser from "./components/edit-user.component";
import UpdateUser from "./components/update-user.component"
import CreditCard from "./components/card/App"


function App() {
  return (
    <Router>
      
      <Navbar />
      <div className="container">
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/del" component={EditUser} />
      <Route path="/update" component={UpdateUser} />
      <Route path="/pay" component={CreditCard} />
      </div>
    </Router>
  );
}

export default App;
