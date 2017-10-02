import React, { Component } from 'react';

export default class SearchForm extends Component {

  state = {
    searchTitle: '',
    searchPostalCode: ''
  }

  onSearchChange = e => {
    this.setState({
      searchText: e.target.value,
      searchPostalCode: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.title.value...this.postalCode.value)
    e.currentTarget.reset();
    
  }





}
