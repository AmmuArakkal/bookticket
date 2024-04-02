import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RootLayout from "./routes/RootLayout";
import ErrorPage from "./ErrorPage";
import MoviesPage from "./routes/MoviesPage";
import HomePage, { loader as HomeLoader } from "./routes/HomePage";
import SingleMoviePage, {
  loader as singleMovieLoader,
} from "./routes/SingleMoviePage";
import SelectShowPage, {
  loader as selectShowLoader,
} from "./routes/SelectShowPage";
import SelectSeats, { loader as selectSeatsLoader } from "./routes/SelectSeats";
import store from "./store/store";
import { Provider } from "react-redux";
import BookingSummary from "./routes/BookingSummary";
import SignUpPage from "./routes/SignUpPage";
import LoginPage from "./routes/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: HomeLoader,
      },
      {
        path: "/movies",
        element: <MoviesPage />,
      },
      {
        path: "/movies/:movieId",
        element: <SingleMoviePage />,
        loader: singleMovieLoader,
      },
      {
        path: "/select-show/:movieId",
        element: <SelectShowPage />,
        loader: selectShowLoader,
      },

      {
        path: "/select-seats/:showId",
        element: <SelectSeats />,
        loader: selectSeatsLoader,
      },
      {
        path: "/booking-summary",
        element:<BookingSummary/>
      },
      {
        path: "/signup",
        element:<SignUpPage/>
      },
      {
        path: "/login",
        element:<LoginPage/>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
