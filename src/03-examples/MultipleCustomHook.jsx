import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHook = () => {
  const { counter, decrement, increment } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );
  return (
    <>
      <h1>Informacion de Pokemon</h1>
      <hr />

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard 
        id={counter}
        name={data.name}
        sprites = {
          [
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]
        }
        />
      )}

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <h2>{data?.name}</h2>

      <button
        className="btn btn-primary mt-2"
        onClick={() => (counter > 1 ? decrement() : null)}>
        Anterior
      </button>
      <button className="btn btn-primary mt-2" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
};
