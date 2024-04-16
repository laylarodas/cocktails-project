import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./layouts/Layout"

const HomePage = lazy(() => import("./views/HomePage"))
const FavouritesPage = lazy(() => import("./views/FavouritesPage"))

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={
                        <Suspense fallback={<div>Loading...</div>} >
                            <HomePage />
                        </Suspense>
                    } />
                    <Route path="/favourites" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <FavouritesPage />
                        </Suspense>
                    } />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
