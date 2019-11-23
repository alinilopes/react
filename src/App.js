import React from 'react';

import "./assets/theme/global.scss";

import Header from "./features/Header/Header";
import Footer from './features/Footer/Footer';
import Search from './features/Search/Search';
import LyricWrapper from './features/LyricWrapper/LyricWrapper';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      searchWord: ""
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.setState({
      searchWord: e.target.value
    });
  }

  render() {
    return (
      <>
        <Header />
        <Search handleSearch={this.handleSearch} />
        <LyricWrapper searchWord={this.state.searchWord} />
        <Footer />
      </>
    );
  }
}

export default App;
