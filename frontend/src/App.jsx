import './App.css'
import { Home } from './components/Home/Home'
import { Olx } from './components/olx/Olx'
import { Buy } from './components/olx/Buy/Buy'
import { Sell } from './components/olx/Sell/Sell'
import { LostAndFound } from './components/LostAndFound/LostAndFound'
import { Complaints } from './components/Complaints/Complaints'

import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={
                <>
                    <Home />
                </>
            } />
            <Route path="/olx" element={ <Olx /> }>
                <Route path="buy" element={
                    <>
                        <Buy />
                    </>
                } />
                <Route path="sell" element={
                    <>
                        <Sell />
                    </>
                } />
            </Route>
            <Route path="/lost_and_found" element={
                <>
                    <LostAndFound />
                </>
            } />
            <Route path="/complaints" element={
                <>
                    <Complaints />
                </>
            } />
        </Route>
    )
);


const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

export function App() {
    return (
        <div className="body">
            {/* <img src="./app-poster.jpg" style="position: absolute;width: 100%;height: 100%;z-index: -2"/> */}
            {/* <img src="./app-poster.jpg" style={{"position":"fixed", "height":"100%", "zIndex":"-2"}}/> */}
            {/* <div>Welcome to AstroBeats!</div> */}
            {/* <Login /> */}
            {/* <Home /> */}
            {/* <Library /> */}
            {/* <SongList /> */}
            <RouterProvider router={router} />
            {/* <Navigation /> */}
        </div>
    );
}
