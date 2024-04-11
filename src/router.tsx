import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./views/HomePage"
import { FavouritesPage } from "./views/FavouritesPage"
import { Layout } from "./layouts/Layout"


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} index/>
                    <Route path="/favourites" element={<FavouritesPage />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
