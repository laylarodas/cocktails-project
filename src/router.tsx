import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./layouts/Layout"

const HomePage = lazy(() => import("./views/HomePage"))
const FavoritesPage = lazy(() => import("./views/FavoritesPage"))

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
                    <Route path="/favorites" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <FavoritesPage />
                        </Suspense>
                    } />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
