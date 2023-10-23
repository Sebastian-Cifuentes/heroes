import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../../ui"
import { DcPage, MarvelPage, SearchPage, HeroPage } from ".."

export const HeroesRoutes = () => {
  return (
    <>
        <NavBar />

        <div className="container">

            <Routes>
                <Route path="marvel" element={<MarvelPage />}></Route>
                <Route path="dc" element={<DcPage />}></Route>

                <Route path="search" element={<SearchPage />}></Route>
                <Route path="hero/:id" element={<HeroPage />}></Route>


                <Route path="*" element={<Navigate to='/marvel' />}></Route>
            </Routes>

        </div>
    </>

  )
}
