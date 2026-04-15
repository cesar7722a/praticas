import { Content } from "./content";

export function HeaderMobile() {
  return (
    <header>
      <Content>
        <div className="flex justify-between items-center h-14">
          <div>logo</div>
          <div>
            <button>Agendamentos</button>
          </div>
        </div>
      </Content>
    </header>
  );
}
