import Image from "next/image";
import { CatalogMovie } from "./catalogMovie";

export default function Movies() {
  return (
    <div className="bg-[#121113]">
      <div className="relative">
        {/* Fundo com imagem e gradiente */}
        <Image
          src="/bg-movies.png"
          alt="Background"
          className="object-cover z-0 h-[500px] w-full absolute inset-0"
          priority
          height={600}
          width={1920}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121113]/80 via-[#121113]/90 to-[#121113] z-10" />

        {/* Input e botões alinhados à direita */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-24 text-white">
          <div className="flex flex-wrap justify-end items-center gap-4 mb-8">
            <input
              type="text"
              placeholder="Pesquise por filmes"
              className="px-4 py-2 rounded bg-[#2a2730] text-white outline-none"
            />
            <button className="px-4 py-2 bg-[#5e4b8b] rounded hover:bg-[#6e5ca0] transition">
              Filtros
            </button>
            <button className="px-4 py-2 bg-[#a24be6] rounded hover:bg-[#b75df7] transition">
              Adicionar Filme
            </button>
          </div>
        </div>

        {/* Catálogo de filmes */}
        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <CatalogMovie />

          {/* Paginação */}
          <div className="flex justify-center mt-10 mb-10 gap-2">
            <button className="bg-[#2a2730] px-3 py-1 rounded text-white">
              &larr;
            </button>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                className={`px-3 py-1 rounded ${
                  n === 3
                    ? "bg-[#a24be6] text-white"
                    : "bg-[#2a2730] text-gray-300"
                }`}
              >
                {n}
              </button>
            ))}
            <button className="bg-[#2a2730] px-3 py-1 rounded text-white">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
