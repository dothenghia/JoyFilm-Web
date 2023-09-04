import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";

import Home from "./pages/Home";
import Carousel from '../components/Carousel'
import Single from "./pages/Single";
import Series from "./pages/Series";
import Search from "./pages/Search";

import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="phim-le" element={<Single />} />
                    <Route path="phim-bo" element={<Series />} />
                    <Route path="tim-kiem" element={<Search />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/phim/:slug" element={<Movie />}/>
            </Routes>
        </BrowserRouter>
    );
}

