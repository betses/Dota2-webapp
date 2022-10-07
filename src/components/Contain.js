import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dota from '../assets/dota2.png';
import { getAllHeroesList } from '../Redux/main/Main';

function Contain() {
  const allHeroes = useSelector((state) => state.allHeroReducer.heroes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHeroesList());
  }, [dispatch]);

  const allHeros = allHeroes.length;

  return (
    <>
      <div className="bg-my-light-blue flex gap-6 items-center pl-10">
        <img src={dota} alt="Dota logo" className="h-24 p-1 opacity-95" />
        <div className="text-[#B91B1B]">
          <p className="font-black text-3xl">Dota 2</p>
          <p data-testid="num-appeared">
            {allHeros}
            Heros
          </p>
        </div>
      </div>
    </>
  );
}

export default Contain;
