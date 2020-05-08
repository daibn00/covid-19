import React from 'react';
import ContainerPages from '../../components/containerPages/index';
import { Container } from './styles';
import { FaSkull, FaDna, FaBriefcaseMedical } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../../components/Search';
import {fetchCountry} from '../../action/country';
const numberWithCommas = (x) =>  {

  return ("" + x).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const List = () => {
  const { data  } = useSelector(state => state.countries);
  const dispatch = useDispatch();

  const clickDetailCountry = (code) =>{
    dispatch(fetchCountry(code));
  }

  return (
    <ContainerPages>
      <Container>
        <Search/>
        <section>
        {
           (
            data.map((content,index) => (
              <div key={index}>
                <div className="header-country">
                <img  src={`https://www.countryflags.io/${content.code}/flat/64.png`} alt={content.title}/>
                <h2> {content.title} </h2>
               </div>
            <section>
            <span>
                <FaDna size={30} color="rgb(186, 51, 50)"/>
                <strong>Total Case: </strong>{' '}
                { numberWithCommas(content.total_cases) }
              </span>
              <span>
                <FaSkull size={30} color="rgb(79, 78, 83)"/>
                <strong>Total Case: </strong>{' '}
                { numberWithCommas(content.total_deaths) }
              </span>

              <span>
                <FaBriefcaseMedical size={30} color="rgb(0, 171, 132)"/>
                <strong>Total Case: </strong>{' '}
                { numberWithCommas(content.total_recovered) }
              </span>
            </section>
               <Link to={`/detail/${content.code}`} onClick={() => clickDetailCountry(content.code)}> More Details </Link>
              </div>
            ))
          )
        }
        </section>
      </Container>
    </ContainerPages>

  );
}

export default List;
