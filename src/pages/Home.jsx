

import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { addJob } from '../redux/jobSlice';
export default function App() {
    const dispatch = useDispatch();

    const [data, setData] = useState([]);
    useEffect(() => {

        const fetchData = () => {
            const myHeaders = new Headers();
            myHeaders.append("limit", "10");
            myHeaders.append("offset", "0");
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "limit": 10,
                "offset": 0
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
                .then((response) => response.json())
                .then((result) =>{
                    dispatch(addJob(result.jdList))
                    console.log(result)
                    setData(result.jdList)
                }
                )
                .catch((error) => console.error(error));
        }

        fetchData();

    }, []);

    return (
        <div className="my-2">
            
            <ul>
                {data.map((d, index)=>(
                    <li key={index}>{d?.jdUid}</li>
                ))}
            </ul>
            <button onClick={()=>dispatch(addJob(data))}>click</button>
        </div>
    );
}