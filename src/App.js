import './App.css';
import Home from "./Pages/Home";
import ExerciseDetail from "./Pages/ExerciseDetail";
import Food from "./Pages/Food";
import Tracker from "./Pages/Tracker";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddExercise from "./Pages/AddExercise";
import AddFood from "./Pages/AddFood";
import UpdateExercise from "./Pages/UpdateExercise";
import UpdateFood from './Pages/UpdateFood';
import { Routes, Route } from 'react-router-dom';
const App = ({ id }) => {
    return (React.createElement("div", { style: { display: 'flex', flexDirection: 'column', minHeight: '100vh' } },
        React.createElement(NavBar, null),
        React.createElement("div", { style: {
                flexGrow: '1',
                paddingTop: '10px',
                paddingBottom: '10px',
                overflowY: 'auto'
            } },
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
                React.createElement(Route, { path: "/exercises", element: React.createElement(ExerciseDetail, null) }),
                React.createElement(Route, { path: "/recipes", element: React.createElement(Food, null) }),
                React.createElement(Route, { path: "/exercises/add", element: React.createElement(AddExercise, null) }),
                React.createElement(Route, { path: "/foods/add", element: React.createElement(AddFood, null) }),
                React.createElement(Route, { path: '/tracker', element: React.createElement(Tracker, null) }),
                React.createElement(Route, { path: '/exercise/edit/:id', element: React.createElement(UpdateExercise, null) }),
                React.createElement(Route, { path: '/food/edit/:id', element: React.createElement(UpdateFood, null) }))),
        React.createElement(Footer, null)));
};
export default App;
