import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./views/HomePage"
import { FavouritesPage } from "./views/FavouritesPage"
export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
    </BrowserRouter>  
    )
}
