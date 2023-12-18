import './dicsearch.css'
import {useState} from "react";

const DicSearch = ({searchData}) => {
    const [searchInput, setSearchInput] = useState();
    const inputTxt = (e)=>{
        setSearchInput(e.target.value);
    }
    const searchFunc=()=>{
        searchData(searchInput)                            
    }
    return ( 
        <div className="dicSearch">
            <h2>검색창</h2>
            <div>
                <input type="text" value={searchInput} placeholder="search" onChange={inputTxt} ></input>
                <button onClick={searchFunc}>검색</button>
            </div>
        </div>
     );
}
 
export default DicSearch;