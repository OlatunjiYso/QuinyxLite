import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import EmployeeList from '../Pages/EmployeeList';
import MenuCard from '../Components/Aside/menuCard';
import EmployeeProfile from '../Pages/EmployeeProfile';



// const Main = () => (
//     <div className="main">
//         <div className="main-aside">
//             <MenuCard />
//         </div>
//         <div className="main-content">
//             <Router>
//                 <Switch>
//                 <Route path="/" component={EmployeeList} exact />
//                 <Route path="/profile" component={EmployeeProfile} exact />
//                 <Route path="/employees" component={EmployeeList} exact />
//                 </Switch>
//             </Router>
//         </div>
//     </div>
// );

const Main = () => (
    <Router>
        <div className="main">
            <div className="main-aside">
                <MenuCard />
            </div>
            <div className="main-content">
                <Switch>
                    <Route path="/" component={EmployeeList} exact />
                    <Route path="/profile" component={EmployeeProfile} exact />
                    <Route path="/employees" component={EmployeeList} exact />
                </Switch>
            </div>
        </div>
    </Router>
);



export default Main;