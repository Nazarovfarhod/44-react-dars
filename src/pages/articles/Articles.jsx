import { useFetch } from "../../hook/useFetch";

function Articles() {
  const {
    data:articles,
    isPending,
    error,
  } = useFetch(
    "https://online-json-server-api.up.railway.app/project/6677cd551d2cd3eb1143edd6/articles"
  );
  return (
    <div>
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}

      {articles &&
        articles.map((article) => {
          return (
            <div key={article.id}>
              <h3>Title: {article.title}</h3>
              <p>
                Author: <i>{article.author}</i>
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default Articles;
