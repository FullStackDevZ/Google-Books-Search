import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="books">Book Name:</label>
        <br></br>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          list="books"
          type="text"
          className="form-control"
          placeholder="Type in a book name to search"
          id="search"
        />
        <datalist id="books">
          {props.breeds.map(books => (
            <option value={books} key={books} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          SEARCH
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
