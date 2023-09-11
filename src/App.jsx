import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";

import Home from "./pages/Home";
import Search from "./pages/Search";
import New from "./pages/New.jsx";
import Theater from "./pages/Theater";
import Single from "./pages/Single";
import Series from "./pages/Series";
import Cartoon from "./pages/Cartoon";

import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        // Config router for application
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path="tim-kiem" element={<Search />} />

                    <Route path="phim-moi/:page" element={<New />} />
                    <Route path="chieu-rap/:page" element={<Theater />} />
                    <Route path="phim-le/:page" element={<Single />} />
                    <Route path="phim-bo/:page" element={<Series />} />
                    <Route path="hoat-hinh/:page" element={<Cartoon />} />

                    <Route path="phim/:slug" element={<Movie />} />

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

