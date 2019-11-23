import React from "react";

import './Search.scss';

const Search = props => {
    return (
        <section className="search">
           <form>
               <input type="search" placeholder="Buscar música" className="-inputsearch" onChange={props.handleSearch}></input>
           </form>
        </section>
    );
};

export default Search;