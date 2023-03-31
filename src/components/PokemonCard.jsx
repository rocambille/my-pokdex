import PropTypes from "prop-types";

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

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
