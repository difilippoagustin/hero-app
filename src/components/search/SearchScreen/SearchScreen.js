import React, { useMemo } from "react";
import { useLocation } from "react-router";
import queryString from "query-string";
import { getHeroByName } from "../../../selectors/getHeroByName";
import { useForm } from "../../../hooks/useForm";
import { HeroCard } from "../../heroes/HeroCard/HeroCard";

export const SearchScreen = ({ history }) => {
  const { search } = useLocation();

  const { q = "" } = queryString.parse(search);

  const [formValue, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValue;

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  const herosFiltered = useMemo(() => getHeroByName(q), [q]);

  return (
    <>
      <h3>Search Screen</h3>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              autoComplete="false"
              className="form-control"
              name="searchText"
              onChange={handleInputChange}
              placeholder="Find your hero"
              type="text"
              value={searchText}
            />
            <button
              type="submit"
              className="btn mt-1 btn-block btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === "" && <div className="alert alert-info">Search a hero</div>}
          {q !== "" && herosFiltered.length === 0 && (
            <div className="alert alert-danger">Heroes not found</div>
          )}

          {herosFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
