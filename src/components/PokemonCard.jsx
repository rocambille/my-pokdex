function PokemonCard({ pokemon }) {
  return (
    <figure>
      {pokemon.imgSrc == null ? (
        <p>???</p>
      ) : (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
