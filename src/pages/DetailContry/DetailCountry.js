import React,{ useEffect } from 'react';
import ContainerPages from '../../components/containerPages/index';
import { Container } from './styles';
import PropTypes from 'prop-types';
import {fetchCountry} from '../../action/country';
import { useSelector,  useDispatch} from 'react-redux';
import {
  FaSkull,
  FaDna,
  FaBriefcaseMedical,
  FaMicroscope,
  FaPlus,
  FaSkullCrossbones,
  FaFlask,
  FaProcedures,
} from 'react-icons/fa';
const DetailCountry = ({ history, match }) => {

  const {data} = useSelector(state => state.country)
  const dispatch = useDispatch();
  useEffect(() => {
    if(typeof data.info === 'undefined'){
      dispatch(fetchCountry(match.params.code));
    }

  }, []);

  console.log(data)

  const numberWithCommas = (x) =>  {

    return ("" + x).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  console.log(data?.info?.code)


  return (
    <ContainerPages>
      <Container>
        <header>
          <img src={ `https://www.countryflags.io/${data.info?.code}/flat/64.png`} alt={data.info?.title}/>
        </header>
        <section>
          <div>
          <FaDna size={30} color="#fff" />
          <strong> Total Case : { numberWithCommas(data.total_cases) } </strong>
          </div>
          <div>
          <FaBriefcaseMedical size={30} color="#fff" />
          <strong> Total Recovered : { numberWithCommas(data.total_recovered) } </strong>
          </div>
          <div>
          <FaFlask size={30} color="#fff" />
          <strong> Active Cases  : { numberWithCommas(data.total_active_cases) } </strong>
          </div>
          <div>
          <FaMicroscope size={30} color="#fff" />
          <strong> Total Unresolved : { numberWithCommas(data.total_unresolved) } </strong>
          </div>
          <div>
          <FaSkull size={30} color="#fff" />
          <strong> Total Deaths : { numberWithCommas(data.total_deaths) } </strong>
          </div>
          <div>
          <FaPlus size={30} color="#fff" />
          <strong> Cases Today : { numberWithCommas(data.total_new_cases_today) } </strong>
          </div>
          <div>
          <FaSkullCrossbones size={30} color="#fff" />
          <strong> Deaths Today : { numberWithCommas(data.total_new_deaths_today) } </strong>
          </div>
          <div>
          <FaProcedures size={30} color="#fff" />
          <strong> Serius Cases : { numberWithCommas(data.total_serious_cases) } </strong>
          </div>
        </section>

      </Container>
    </ContainerPages>

  );
}
DetailCountry.propTypes = {
  match : PropTypes.object,
  history : PropTypes.object
}

export default DetailCountry;
