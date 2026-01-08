import { BrowserRouter, Routes, Route } from "react-router-dom"
import FavoritePage from "./views/FavoritePage"
import IndexPage from "./views/IndexPage"

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<IndexPage />} />
            <Route path='/favoritos' element={<FavoritePage />} />
        </Routes>
    </BrowserRouter>
  )
}
