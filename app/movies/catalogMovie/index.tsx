export const CatalogMovie = () => {
  const movies = [
    {
      title: "BUMBLEBEE",
      subtitle: "Ação, Aventura, Ficção Científica",
      image: "./poster1.png",
      rating: 67,
    },
    {
      title: "CAPITÃ MARVEL",
      image: "./poster1.png",
    },
    {
      title: "ALITA: ANJO DE COMBATE",
      image: "./poster1.png",
    },
    {
      title: "COMO TREINAR O SEU DRAGÃO 3",
      image: "./poster1.png",
    },
    {
      title: "AQUAMAN",
      image: "./poster1.png",
    },
    {
      title: "AQUAMAN",
      image: "./poster1.png",
    },
    {
      title: "AQUAMAN",
      image: "./poster1.png",
    },
    {
      title: "AQUAMAN",
      image: "./poster1.png",
    },
    {
      title: "AQUAMAN",
      image: "./poster1.png",
    },
    {
      title: "AQUAMAN",
      image: "./poster1.png",
    },
  ];

  return (
    <div className="relative bg-[#7D7D7E]/20 max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="overflow-hidden relative group hover:scale-105 transition rounded-lg"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full aspect-[2/3] object-cover rounded-lg"
            />

            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-10" />

            <div className="absolute bottom-0 left-0 w-full p-3 z-20 text-white">
              <h3 className="text-sm font-bold uppercase">{movie.title}</h3>
              {movie.subtitle && (
                <p className="text-xs text-gray-300 mt-1">{movie.subtitle}</p>
              )}
            </div>

            {movie.rating && (
              <div className="absolute top-3 left-3 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-sm z-30">
                {movie.rating}%
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
