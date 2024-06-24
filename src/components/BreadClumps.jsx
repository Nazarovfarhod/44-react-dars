import { Link, useLocation } from "react-router-dom";

function BreadClumps() {
  const location = useLocation();

  const currentLink = [];

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb != "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);
      return (
        <div className="flex text-blue-600 underline" key={crumb}>
          <Link to={currentLink.join("")}>{crumb}</Link>
        </div>
      );
    });

  return <div className="flex gap-2 opacity-60">{crumbs}</div>;
}

export default BreadClumps;
