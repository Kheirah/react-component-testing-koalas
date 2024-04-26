export default function Movies({ movies }) {
  return (
    <section>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
          <button>{movie.isLiked === true ? "Unlike" : "Like"}</button>
        </div>
      ))}
    </section>
  );
}
