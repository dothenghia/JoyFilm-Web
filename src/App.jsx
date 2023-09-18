import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";

import Home from "./pages/Home";
const Search = lazy(() => import("./pages/Search"));
const New = lazy(() => import("./pages/New"));
const Theater = lazy(() => import("./pages/Theater"));
const Single = lazy(() => import("./pages/Single"));
const Series = lazy(() => import("./pages/Series"));
const Cartoon = lazy(() => import("./pages/Cartoon"));
const About = lazy(() => import("./pages/About"));

const Bookmark = lazy(() => import("./pages/Bookmark"));

const Movie = lazy(() => import("./pages/Movie"));
const NotFound = lazy(() => import("./pages/NotFound"));

import { SaveProvider } from '../src/contexts/saveContext.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

export default function App() {
    return (
        // Config router for application
        <SaveProvider>

            <BrowserRouter>
                <ScrollToTop>

                    <Routes>
                        <Route path="/" element={<Layout />}>

                            <Route index element={<Home />} />

                            <Route path="tim-kiem"
                                element={
                                    <Suspense fallback={<div className="loading-page">Loading...</div>}>
                                        <Search />
                                    </Suspense>
                                }
                            />

                            <Route path="phim-moi/:page"
                                element={
                                    <Suspense fallback={<div className="loading-page">Loading...</div>}>
                                        <New />
                                    </Suspense>
                                }
                            />
                            <Route path="chieu-rap/:page"
                                element={
                                    <Suspense fallback={<div className="loading-page">Loading...</div>}>
                                        <Theater />
                                    </Suspense>
                                }
                            />
                            <Route path="phim-le/:page"
                                element={
                                    <Suspense fallback={<div className="loading-page">Loading...</div>}>
                                        <Single />
                                    </Suspense>
                                }
                            />
                            <Route path="phim-bo/:page"
                                element={
                                    <Suspense fallback={<div className="loading-page">Loading...</div>}>
                                        <Series />
                                    </Suspense>
                                }
                            />
                            <Route path="hoat-hinh/:page"
                                element={
                                    <Suspense fallback={<div className="loading-page">Loading...</div>}>
                                        <Cartoon />
                                    </Suspense>
                                }
                            />
                            <Route path="gioi-thieu"
                                element={
                                    <Suspense fallback={<div className="loading-page">Loading...</div>}>
                                        <About />
                                    </Suspense>
                                }
                            />

                            <Route path="phim-da-luu"
                                element={
                                    <Suspense fallback={<div className="loading-page">Loading...</div>}>
                                        <Bookmark />
                                    </Suspense>
                                }
                            />

                            <Route path="phim/:slug"
                                element={
                                    <Suspense fallback={<div className="loading-page">Loading...</div>}>
                                        <Movie />
                                    </Suspense>
                                }
                            />

                            <Route path="*"
                                element={
                                    <Suspense fallback={<div className="loading-page">Loading...</div>}>
                                        <NotFound />
                                    </Suspense>
                                }
                            />

                        </Route>
                    </Routes>
                </ScrollToTop>
            </BrowserRouter >
        </SaveProvider>
    );
}

