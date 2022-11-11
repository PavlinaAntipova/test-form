import App from "App";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import DateFormPage from "./date-form-page";
import ErrorPage from "./error-page";
import MultiselectPage from "./multiselect-page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    errorElement: <ErrorPage />,
        children: [
      {
        path: "date-form",
        element: <DateFormPage />,
          },
          {
        path: "multiselect",
        element: <MultiselectPage />,
      },
    ],
    },
]);


export default router;