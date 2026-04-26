import { Link } from "react-router";
import { Content } from "./content";
import { Button } from "./ui/button";
import { useState } from "react";
import type { constants } from "buffer";

const menu = [
  { id: 1, name: "Serviços", link: "servicos", isvisible: false },
  {
    id: 2,
    name: "Reserva",
    link: "agendamentos",
    isvisible: false,
  },
  {
    id: 3,
    name: "AI studio",
    link: "aistudio",
    isvisible: false,
  },
  {
    id: 4,
    name: "Dashbord",
    link: "minhaconta",
    isvisible: false,
  },
];

export function HeaderMobile() {
  return (
    <header>
      <div className="flex md:hidden justify-between  items-center h-14">
        <div>logo</div>
        <div>
          <Button className="rounded-lg px-4 py-5 text-sm">Agendamentos</Button>
        </div>
      </div>
      {MenuDescktop()}
    </header>
  );
}

function MenuDescktop() {
  const [isopen, setIsopen] = useState(menu);

  const handleVisible = (id: number) => {
    setIsopen((prev) =>
      prev.map((e) => (e.id === id ? { ...e, isvisible: !e.isvisible } : e)),
    );
    console.log(isopen);
  };

  return (
    <div>
      <Content className="hidden md:flex justify-between py-2.5 items-center">
        {" "}
        <div>logo</div>
        <menu>
          <ul className="flex space-x-10">
            {isopen.map((item) => {
              const isActive = item.isvisible;

              return (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    onClick={() => handleVisible(item.id)}
                    className={`py-2 border-2 border-r-0 border-l-0 border-t-0 hover:cursor-pointer
              ${
                isActive
                  ? "border-primary text-primary"
                  : "border-transparent hover:border-primary hover:text-primary"
              }
            `}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </menu>
        <div className="space-x-5">
          <Link to={"#"}>Login</Link>
          <Button className="rounded-sm px-4 py-5 text-sm">Agendamentos</Button>
        </div>
      </Content>
    </div>
  );
}
