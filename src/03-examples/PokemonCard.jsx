export const PokemonCard = ({ id, name, sprites }) => {
  return (
    <section styel={{ height: 200 }}>
      <h2>
        #{id} - {name}
      </h2>

      {/* Imagenes */}
      <div>
        {
        sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} />
        ))
        }
      </div>
    </section>
  );
};
