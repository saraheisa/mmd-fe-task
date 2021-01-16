import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';
import '../css/search.css';

const Search = () => {
    const state = useSelector(state => state);

    console.log(state.searchOptions[0]);
    const [category, setCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (state.searchOptions[0]) {
        setCategory(state.searchOptions[0].category);
        setSearchTerm(state.searchOptions[0].searchTerm)
        }
    }, [state.searchOptions]);

    return (
        <form className="search-form">
            <div>
                <select key="categories" name="category" value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="all" key={uniqid()}>
                        All Categories
                    </option>
                    {state.categories.map(category =>
                        <option value={category} key={uniqid()}>
                            {category}
                        </option>
                    )}
                </select>
            </div>
            <div>
                <input type="text" name="searchTerm" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="search" />
            </div>
        </form>
    );

}

export default Search;
