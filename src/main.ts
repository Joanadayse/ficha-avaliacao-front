import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6">
    <h1 class="text-5xl font-bold text-yellow-500">Tailwind Funcionando!</h1>
    <p class="text-gray-700 text-lg">Iniciando projeto front💛</p>
  </div>
`;
