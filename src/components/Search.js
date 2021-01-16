import React from 'react';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid'

const Search = () => {
    const state = useSelector(state => state);

    return (
        <form>
            <div>
                <select key="categories" name="category">
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
                <input type="text" name="searchTerm" />
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    );

}

export default Search;
