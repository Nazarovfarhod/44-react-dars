import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="text-centar">
      <h1>👇PageNotFound👇</h1>
      <p className="text-justify mb-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias rem
        corporis veritatis sint, velit at nobis eum consectetur, autem odio
        numquam tempora vel sunt, possimus atque non amet libero! Doloribus
        voluptates porro unde non soluta. Quibusdam voluptas laborum optio
        ducimus, a minus debitis amet sit accusamus, ad reiciendis, quos quis.
      </p>
      <NavLink
        className="rounded-xl no-underline text-[#333] py-2 px-3 border-2 border-solid border-[#333] bg-white hover:bg-[#333] hover:text-white"
        to="/"
      >
        Home Page
      </NavLink>
    </div>
  );
}

export default PageNotFound;

// .pageNotFound-container {
//   text-align: center;
// }

// .pageNotFound-container p {
//   text-align: justify;
// }

// .pageNotFound-container a {
//   text-decoration: none;
//   color:#333;
//   padding: 5px 8px;
//   border: 2px solid #333;
//   background-color:#fff;

// }

// .pageNotFound-container a:hover {
//   background: #333;
//   color:#fff;
// }
