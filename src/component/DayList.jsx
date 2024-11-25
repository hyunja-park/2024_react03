import { data, Link } from "react-router-dom";
import dummy from "../db/data.json"
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";


function DayList(props) {
    // console.log(dummy);

    // const [days, setDays] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3010/days')
    //     .then(res=>{
    //         return res.json()
    //     })
    //     .then(data =>{
    //         console.log(data);
    //         setDays(data);
    //     })
    //     .catch((error)=>console.error("Error:", error))
    // }, []);

    const days = useFetch('http://localhost:3010/days');

    return (
        <ul className="list_day">
           {days.map(k => {
            return <li kry={k.id}> 
                <Link to={`/day/${k.day}`}>Day {k.day} </Link>
            </li>
           })}
        </ul>
    );
}

export default DayList;