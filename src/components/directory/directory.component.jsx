import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';

import SearchBox from '../search-box/search-box.component';


class Directory extends React.Component {
  constructor(){
    super();

    this.state = {
      countries : [],
      searchField: ''
    };
  }

  UNSAFE_componentWillMount() {
    fetch('https://corona.lmao.ninja/countries?sort=country')
    .then(response => response.json())
    .then(res => this.setState({ countries: res}))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { countries, searchField } = this.state;
    const filteredCountries = countries.filter(country =>
      country.country.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div>
        <SearchBox
        handleChange={this.handleChange}
        />
        <div className="row">

                {
                filteredCountries.map(({country,...otherprops}) => (
                  <CollectionItem key={country}  country={country} {...otherprops}/>
                ))
              }
        </div>
      </div>
    )}
}

export default Directory;
