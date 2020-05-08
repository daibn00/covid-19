import React, { Component } from 'react'
 import { Container  } from './styles';
import { FaSearch } from 'react-icons/fa';
import { connect } from 'react-redux';
import {filterData} from '../../action/countries';
class Search extends Component {

  state = {
    nameCity : '',
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSearch = () =>{
    this.props.filterDataCountries(this.state.nameCity);

  }



  render() {
    console.log(this.state.nameCity);
    return (
      <Container>
        <input type="text" name="nameCity" id="" onChange={this.handleChange}/>
  <button onClick={this.handleSearch}>{ <FaSearch/> }</button>
      </Container>
    )
  }
}

const mapDispatchToProp = dispatch =>{
  return{
    filterDataCountries : (text) => dispatch(filterData(text)),

  }
}

export default connect(null,mapDispatchToProp)(Search);
