//rrd import
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Form from "./pages/help/Form";
import PageNotFound from "./pages/PageNoteFound";
import Articles from "./pages/articles/Articles";
import ArticlesDetail from "./pages/articles/ArticlesDetail";

//layout
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ArticleLayout from "./layout/ArticleLayout";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="articles" element={<ArticleLayout />}>
          <Route index element={<Articles />} />
          <Route path=":id" element={<ArticlesDetail />} />
        </Route>

        {/* //Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <div className="w-full px-12 max-w-[1024px] my-0 h-lvh mx-auto">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
