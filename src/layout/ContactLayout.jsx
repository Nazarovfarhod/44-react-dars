import { NavLink, Outlet } from "react-router-dom";

function ContactLayout() {
  console.log(nice);
  return (
    <div>
      <h1 className="font-bold text-3xl text-center mb-5">Contact</h1>
      <p className="text-center mb-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eos
        impedit tempora nisi harum quae dolor! Quo fugit corporis ea. A quo
        veniam reprehenderit enim excepturi sapiente ut, itaque quae recusandae
        repellat voluptates ullam, explicabo delectus porro commodi illum!
        Ipsum, recusandae expedita. Explicabo at fuga sequi dolorum corrupti
        sint veritatis.
      </p>

      <nav className="flex gap-4 pl-96 mb-5">
        <NavLink className="font-semibold" to="faq">
          FAQ
        </NavLink>
        <NavLink className="font-semibold" to="form">
          Form
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default ContactLayout;
