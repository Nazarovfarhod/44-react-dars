//rrd import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Form from "./pages/help/Form";
import ErrorPage from "./pages/ErrorPage";
import Articles from "./pages/articles/Articles";
import ArticlesDetail from "./pages/articles/ArticlesDetail";

//layout
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ArticleLayout from "./layout/ArticleLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/articles",
          element: <ArticleLayout />,
          children: [
            {
              index: true,
              element: <Articles />,
            },
            {
              path: ":id",
              element: <ArticlesDetail />,
            },
          ],
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "contact",
          element: <ContactLayout />,
          children: [
            {
              path: "faq",
              element: <Faq />,
            },
            {
              path: "form",
              element: <Form />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="w-full px-12 max-w-[1024px] my-0 h-lvh mx-auto">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
