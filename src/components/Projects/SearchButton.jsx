import './SearchButton.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { useState, useRef, useContext } from "react";

import { Context } from './Projects';


library.add(fas);

export default function Search() {
    const [isClick, setIsClick] = useState(false);
    const inputRef = useRef(null)

    const handleClick = () => {
        setIsClick(!isClick);
        inputRef.current.focus();
    }

    
    const {search, setSearch } = useContext(Context)
    
    if(!isClick) {
        setSearch("")
    }
    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    return (
            <div className={`wrapper ${isClick ? 'clicked' : ''}`}>
                <ul>
                    <li>
                        <button className="button" onClick={handleClick}>
                            <h2>
                                <FontAwesomeIcon icon={isClick ? ['fas', 'xmark'] : ['fas', 'magnifying-glass']} />
                            </h2>
                        </button>
                    </li>
                    <li>
                        <input 
                            ref={inputRef} 
                            placeholder='Search...' 
                            type="text" 
                            className='input'
                            value={search}
                            onChange={handleInputChange}
                            // style={{paddingLeft: isClick ? '1rem' : '0'}}
                        />
                    </li>
                </ul>
                
            </div>
            
    )
}