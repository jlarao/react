import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hook/useForm';
import { HeroCard } from '../components';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers/getHeroesByName';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const query = queryString.parse(location.search);

    const { q = '' } = query;

    const heroes = getHeroesByName(q);

    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && heroes.length === 0;

    const {searchText, onInputChange} = useForm({
        searchText: q
    });

    const onSearchSubmin = (event) => {
        event.preventDefault();
        // if( searchText.length <= 1 ) return;

        navigate(`?q=${ searchText }`);

        // console.log({ searchText });
    }
    return (
        <>
            <h1>SearchPage</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search</h4>
                    <hr />

                    <form onSubmit={onSearchSubmin}>
                        <input 
                            type="text" 
                            placeholder="Find your hero" 
                            className="form-control"
                            name="searchText"
                            autoComplete="off" 
                            value={searchText}
                            onChange={onInputChange}/>


                        <button 
                        className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {/*
                        (q === '') ?
                        <div className="alert alert-primary">
                            Search a hero
                        </div> 
                    : 
                    (heroes.length === 0) &&                     
                        <div className="alert alert-danger">
                            Hero not found <b> {q} </b>
                        </div>

                    */}
                    <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: (showSearch) ? '' : 'none' }}>
                        Search a hero
                    </div>

                    <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: (showError) ? '' : 'none' }} aria-label='alert-danger'>
                            Hero not found <b> {q} </b>
                        </div>

                </div>


                { heroes.map( hero => (<HeroCard key={hero.id} {...hero} />)) }

            </div>

        </>
    )
}