import { Outlet } from "react-router-dom";

function ArticleLayout() {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-center w-full mb-4 font-serif">
        My Articles
      </h2>
      <hr className="mb-5" />
      <Outlet />
    </div>
  );
}

export default ArticleLayout;
