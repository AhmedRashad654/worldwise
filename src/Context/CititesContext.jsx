import {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { createContext } from "react";

const CititesContext = createContext();
const BASE_URL = "http://localhost:8000";
const initial = {
  cities: [],
  Loading: false,
  currentCity: {},
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        Loading: true,
      };
    case "loading/cities":
      return {
        ...state,
        cities: action.payload,
        Loading: false,
      };
    case "loading/currentCity":
      return {
        ...state,
        currentCity: action.payload,
        Loading: false,
      };
    case "loading/create":
      return {
        ...state,
        cities: [...state.cities, action.payload],
        Loading: false,
      };
    case "loading/delete":
      return {
        ...state,
        cities: state.cities.filter((e) => e.id !== action.payload),
        Loading: false,
      };
    default:
      alert("this action not found");
  }
}
function ContextProvider({ children }) {
  const [userLogin, setUserLogin] = useState();
  const [isOk, setIsOk] = useState(false);
  const [{ cities, Loading, currentCity }, despatch] = useReducer(
    reducer,
    initial
  );
  useEffect(() => {
    async function fetchCities() {
      despatch({ type: "loading" });
      try {
        const result = await fetch(`${BASE_URL}/cities`);
        const data = await result.json();
        despatch({ type: "loading/cities", payload: data });
      } catch {
        alert("there wan an error loadind data");
      }
    }
    fetchCities();
  }, []);
  const getCity = useCallback(async function getCity(id) {
    despatch({ type: "loading" });

    try {
      let result = await fetch(`${BASE_URL}/cities/${id}`);
      let data = await result.json();
      despatch({ type: "loading/currentCity", payload: data });
    } catch {
      alert("this error from currentCity");
    }
  }, []);
  async function createCity(newCity) {
    despatch({ type: "loading" });

    try {
      const result = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await result.json();
      despatch({ type: "loading/create", payload: data });
    } catch {
      alert("this error from create city");
    }
  }
  async function deleteCity(id) {
    despatch({ type: "loading" });
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      despatch({ type: "loading/delete", payload: id });
    } catch {
      alert("this error from delete city");
    }
  }
  function Login(user) {
    setIsOk(false);
    setUserLogin(user);
    setIsOk(true);
  }
  function out() {
    setIsOk(false);
    setUserLogin(null);
  }
  return (
    <CititesContext.Provider
      value={{
        cities,
        Loading,
        getCity,
        currentCity,
        createCity,
        deleteCity,
        Login,
        userLogin,
        isOk,
        out,
      }}
    >
      {children}
    </CititesContext.Provider>
  );
}
function useCities() {
  const context = useContext(CititesContext);
  if (context === undefined) {
    throw new Error("problem in context");
  }
  return context;
}
export { ContextProvider, useCities };
