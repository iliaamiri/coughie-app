import './index.css';
import {useState} from "preact/hooks";

export function SearchBar({onSearchSubmit, onSearchBarChange}) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
        onSearchBarChange(value);
    }

    const handleSearchClick = () => {
        console.log("search bar clicked")
        onSearchSubmit(inputValue);
    };

    return (
        <div className={'search-bar-container'}>
            <input type={'text'} value={inputValue} onChange={(e) => handleInputChange(e.target.value)} placeholder={"Find a Group"} />
            <span className={'search-bar-button'} onClick={(e) => handleSearchClick()}>
                <img src={'/assets/SVG/search-magnifier.svg'}  alt={'Search Bar Magnifier Buttons'}/>
            </span>
        </div>
    );
}