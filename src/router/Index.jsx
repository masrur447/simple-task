import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import RootLayouts from "../layouts/RootLayouts"
import Home from '../pages/Home'
import TaskView from "../pages/TaskView";
import Contact from "../pages/Contact";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<RootLayouts />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/task-view" element={<TaskView />}></Route>
                <Route path="/contacts" element={<Contact />}></Route>
            </Route>
        </Route>
    )
)


export default router