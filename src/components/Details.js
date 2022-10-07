/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import intel from '../assets/intel.png';
import Agility from '../assets/agile.png';
import Stren from '../assets/strength.png';
import { getStrengthHeroesList } from '../Redux/strength/Strength';
import { getIntelligenceHeroesList } from '../Redux/intelligence/Intelligence';
import { getAgilityHeroesList } from '../Redux/agility/Agility';

function Details() {
  const location = useLocation();
  const data = location.state.att;
  let heroes = {};
  let headLine = '';
  const baseURL = 'https://api.opendota.com';
  const dispatch = useDispatch();
  let picture = '';
  if (data === 'int') {
    headLine = 'Intelligence';
    picture = intel;
    heroes = useSelector((state) => state.intelligenceHeroReducer.heroes);
    useEffect(() => {
      dispatch(getIntelligenceHeroesList());
    }, [dispatch]);
  }
  if (data === 'agi') {
    headLine = 'Agility';
    picture = Agility;
    heroes = useSelector((state) => state.agilityHeroReducer.heroes);
    useEffect(() => {
      dispatch(getAgilityHeroesList());
    }, [dispatch]);
  }
  if (data === 'str') {
    headLine = 'Strength';
    picture = Stren;
    heroes = useSelector((state) => state.strengthHeroReducer.heroes);
    useEffect(() => {
      dispatch(getStrengthHeroesList());
    }, [dispatch]);
  }
  return (
    <>
      <div className="bg-[#AD0505] flex gap-6 items-center justify-center">
        <img src={picture} alt="Dota logo" className="h-36 opacity-95" />
        <div className="text-white">
          <p className="font-black text-3xl">{headLine}</p>
          <p>
            {heroes.length}
            {' '}
            Heros
          </p>
        </div>
      </div>
      <div className="bg-[#6A0303] pl-2">
        <p className=" text-sm text-white font-thin">
          {headLine}
          {' '}
          HEROES
        </p>
      </div>
      <div>
        {heroes.map((i) => (
          <div key={i.id} className="flex bg-[#E90707] even:bg-[#CE0606] h-20 items-center text-white">
            <img src={baseURL + i.icon} alt="hero" className="ml-2 h-12" />
            <div className="flex w-full justify-between">
              <p className="ml-2">{i.localized_name}</p>
              <div className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Details;
