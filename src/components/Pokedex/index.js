import React, { useEffect, useState,lazy, Suspense } from "react";
import { getPokemonData } from "../../services/getPokemonData";
import {getPokemons}  from "../../services/getPokemons";
import Pagination from "../Pagination";
import Spinner from "../Spinner";
import "./pokedex.css";

const Pokemon = lazy(() => import("../Pokemon"));

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true)
  
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(12 , 12 * page);

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false)
      setTotal(Math.ceil(data.count /12))
    } catch (e) {
      console.log("Hubo un error: ", e);
    }
  };
  useEffect(() => {
    
   fetchPokemons()
   
  }, [page]);

  
  const lastPage = ()=>{
    if (page > 0) {
      setPage(page-1)
     
    }
    
  }
  const nextPage = () => {
    if (page <= total) {
      setPage(page + 1);
      }
    };

  return (
    <>
      <div className="header">
        <h1>Pókedex</h1>
        <Suspense fallback={<Spinner />}>
          <Pagination
            page={page}
            totalPages={total}
            onLeftClick={lastPage}
            onRightClick={nextPage}
          />
        </Suspense>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        
            <div className="pokedex-grid">
              
            {pokemons.map((pokemon, idx) => {
              return (
                <Suspense key={pokemon.name} fallback={<Spinner />}>
                  <Pokemon pokemon={pokemon} />
                </Suspense>
              );
            })}
          </div>
       
      )}
    </>
  );
}
