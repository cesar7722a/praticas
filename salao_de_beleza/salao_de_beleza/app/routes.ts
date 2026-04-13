import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("servicos", "./routes/servico.tsx"),
  route("agendamentos", "./routes/agendamento.tsx"),
  route("minhaconta", "./routes/minha_conta.tsx"),
] satisfies RouteConfig;
