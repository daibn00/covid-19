import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import { Container  } from './styles';
import { FaDna ,FaSkull ,FaBriefcaseMedical} from 'react-icons/fa';
import Spinner from '../Spinner';

const Header = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getCases(){
      const { data : respones } = await api.get('free-api?global=stats');
      setData(data => respones.results[0]);
    }
    getCases();
  }, []);

  const numberWithCommas = (x) =>  {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

  return (
    <Container>
      <h1> Corona Virus ( COVID-19 ) Tracker </h1>
      <p> Global Cases </p>
      <header>
        <div>
          <FaDna  color="#ba3332" size={30}/>
          <strong >
            Total Cases : {'  '}
            {
              data.total_cases ? numberWithCommas(data.total_cases) : <span><Spinner/></span>
            }
          </strong>
        </div>
        <div>
          <FaBriefcaseMedical  color="#00AB84" size={30}/>
          <strong>
            Total Cases :
            {
              data.total_recovered ? numberWithCommas(data.total_recovered ):  <span><Spinner/></span>
            }
          </strong>
        </div>
        <div>
          <FaSkull  color="#999" size={30}/>
          <strong>
            Total Cases :
            {
              data.total_deaths ? data.total_deaths :  <span><Spinner/></span>
            }
          </strong>
        </div>

      </header>

    </Container>
  );
}

export default Header;
