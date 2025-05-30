import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Banner com imagem e gradiente */}
      <div className="relative w-full h-[600px] overflow-hidden">
        <Image
          src="/bg-movies.png"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0  bg-gradient-to-b from-black/70 via-black/70 to-black" />
      </div>

      {/* Login "encaixado" entre a imagem e o fundo preto */}
      <div className="absolute top-[310px] left-1/2 transform -translate-x-1/2 z-30 w-full max-w-sm px-4">
        <div className="bg-black/70 p-8 rounded-2xl   text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Digite seu email"
                className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm text-gray-300"
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded text-white font-semibold"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>

      {/* Parte preta inferior continua */}
      {/* <div className="bg-black h-[400px]" /> */}
    </div>
  );
}
