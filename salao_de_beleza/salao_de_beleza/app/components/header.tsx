import { Link, NavLink } from "react-router";
import { Content } from "./content";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const menu = [
  { id: 1, name: "Serviços", link: "/servicos", isvisible: false },
  {
    id: 2,
    name: "Reserva",
    link: "/agendamentos",
    isvisible: false,
  },
  {
    id: 3,
    name: "AI studio",
    link: "/aistudio",
    isvisible: false,
  },
  {
    id: 4,
    name: "Dashbord",
    link: "/minhaconta",
    isvisible: false,
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`bg-background sticky -top-px z-20 duration-300
      ${scrolled ? "shadow-md" : "shadow-none"}`}
    >
      {HeaderMobile()} {MenuDescktop()}
    </header>
  );
}

function HeaderMobile() {
  return (
    <Content className="flex md:hidden justify-between  items-center py-4">
      <div className="hover:cursor-pointer">
        <Link to={"/"}>logo</Link>
      </div>
      <div>
        <Button className="rounded-sm px-4 py-5 text-sm">Agendamentos</Button>
      </div>
    </Content>
  );
}
function MenuDescktop() {
  return (
    <Content className="hidden md:flex justify-between items-center py-4">
      {" "}
      <div className="hover:cursor-pointer">
        <Link to={"/"}>logo</Link>
      </div>
      <menu>
        <ul className="flex space-x-10">
          {menu.map((item) => {
            return (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `py-1 border-2 border-r-0 border-l-0 border-t-0 hover:cursor-pointer
      ${
        isActive
          ? "border-primary text-primary"
          : "border-transparent hover:border-primary hover:text-primary duration-300"
      }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </menu>
      <div className="space-x-5">
        <Link to={"#"}>Login</Link>
        <Button className="rounded-sm px-4 py-5">Agendamentos</Button>
      </div>
    </Content>
  );
}
