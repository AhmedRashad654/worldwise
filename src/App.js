import React, { Suspense, lazy } from "react";
import CitiesList from "./componant/CitiesList";
import CountryList from "./componant/CountryList";
import { ContextProvider } from "./Context/CititesContext";
import Form from "./componant/Form";
import CurrentCity from "./componant/CurrentCity";
import Protected from "./componant/Protected";
import SpinnerFull from "./componant/SpinnerFull";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const Homepage = lazy(() => import("./Pages/HomePage"));
const Pricing = lazy(() => import("./Pages/Pricing"));
const Login = lazy(() => import("./Pages/Login"));
const Product = lazy(() => import("./Pages/Product"));
const AppLayout = lazy(() => import("./Pages/AppLayout"));

export default function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFull />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/Product" element={<Product />} />
              <Route path="/Pricing" element={<Pricing />} />
              <Route path="/Login" element={<Login />} />
              <Route
                path="/app"
                element={
                  <Protected>
                    <AppLayout />
                  </Protected>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="Cities" element={<CitiesList />} />
                <Route path="Cities/:id" element={<CurrentCity />} />
                <Route path="Countires" element={<CountryList />} />
                <Route path="Form" element={<Form />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}
