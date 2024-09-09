import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { HeroPage, SearchPage, DCPage, MarvelPage } from "../pages"

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/marvel" element={<MarvelPage />} />    
                    <Route path="/dc" element={<DCPage />} />

                    {/* search, hero by id, */}
                    <Route path="/search" element={<SearchPage/>} />  
                    <Route path="/hero/:heroeId" element={<HeroPage />} />

                    <Route path="/" element={<Navigate to="/marvel" />} />             
                </Routes>
            </div>
        </>
    )
}