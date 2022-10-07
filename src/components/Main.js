import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contain from './Contain';
import strength from '../assets/strength.png';
import agile from '../assets/agile.png';
import intel from '../assets/intel.png';
import { getAllHeroesList } from '../Redux/main/Main';

function Main() {
  const allHeroes = useSelector((state) => state.allHeroReducer.heroes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHeroesList());
  }, [dispatch]);

  const strengthNum = allHeroes.filter((i) => i.primary_attr !== 'agi' && i.primary_attr !== 'int').length;
  const agilityNum = allHeroes.filter((i) => i.primary_attr !== 'str' && i.primary_attr !== 'int').length;
  const intellNum = allHeroes.filter((i) => i.primary_attr !== 'agi' && i.primary_attr !== 'str').length;

  return (
    <>
      <Contain />
      <div className="bg-[#6A0303] pl-2" data-testid="links">
        <p className=" text-sm text-white font-thin">CATEGORIES PRIMARY ATTRIBUTE</p>
      </div>
      <div className="all-cards" data-testid="links">
        <div className="bg-[#AD0505]  h-32 border flex items-center">
          <Link to={{ pathname: '/details' }} state={{ att: 'str' }} className="w-full">
            <div className="flex items-center w-full justify-between">
              <img src={strength} alt="icon" className="h-20 w-20 opacity-80" />
              <div className="text-white text-lg font-bold flex flex-col items-end mr-2">
                <p>Strength</p>
                <p>
                  {strengthNum}
                  {' '}
                  Heroes
                </p>
              </div>
              <div className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
        <div className="bg-[#AD0505] h-32 border flex items-center">
          <Link to={{ pathname: '/details' }} state={{ att: 'agi' }} className="w-full">
            <div className="flex items-center w-full justify-between">
              <img src={agile} alt="icon" className="h-20 w-20 opacity-80" />
              <div className="text-white text-lg font-bold flex flex-col items-end mr-2">
                <p>Agility</p>
                <p>
                  {agilityNum}
                  {' '}
                  Heroes
                </p>

              </div>
              <div className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
        <div className="bg-[#AD0505] h-32 border flex items-center">
          <Link to={{ pathname: '/details' }} state={{ att: 'int' }} className="w-full">
            <div className="flex items-center w-full justify-between">
              <img src={intel} alt="icon" className="h-20 w-20 opacity-80" />
              <div className="text-white text-lg font-bold flex flex-col items-end mr-2">
                <p>Intelligence</p>
                <p>
                  {intellNum}
                  {' '}
                  Heroes
                </p>
              </div>
              <div className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>

  );
}

export default Main;
