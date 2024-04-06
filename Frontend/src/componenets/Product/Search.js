import React, { Fragment, useState } from 'react'
import './Search.css'
import { useNavigate } from 'react-router-dom';

const Search = () => {

    let navigate = useNavigate()
    const [keyword, setKeyword] = useState("")

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            console.log("Keyword From Search",keyword)
            navigate(`/products/${keyword}`);
        } else {
            navigate("/products")
        }
    }
    return (
        <Fragment>
            <form className="searchBox" onSubmit={searchSubmitHandler}>
                <input
                    type="text"
                    placeholder="Search a Product....."
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <input type="submit" value="search" />
            </form>
        </Fragment>
    )
}
export default Search