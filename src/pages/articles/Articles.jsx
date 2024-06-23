import { useFetch } from "../../hook/useFetch";
import { NavLink } from "react-router-dom";

function Articles() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch(
    "https://online-json-server-api.up.railway.app/project/6677cd551d2cd3eb1143edd6/articles"
  );
  console.log(articles);

  return (
    <div>
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {articles &&
        articles.data.map((article) => {
          return (
            <div
              className="w-full py-10 px-5 rounded-sm  mb-5 shadow-xl hover:shadow-md"
              key={article.id}
            >
              <h3 className="font-bold mb-5">Title: {article.title}</h3>
              <p className="mb-4">
                Author: <i>{article.author}</i>
              </p>

              <NavLink className="text-blue-600 underline" to="">Read More</NavLink>
            </div>
          );
        })}
    </div>
  );
}

export default Articles;
