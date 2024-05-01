

import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { addJob } from '../redux/jobSlice';
import AllJobs from '../components/AllJobs';
export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = () => {
            console.log('fetch called');
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
                    // setData(result.jdList)
                }
                )
                .catch((error) => console.error(error));
        }
        fetchData();
    }, []);



    return (
        <div className="my-2">
            
            <AllJobs/>
           
        </div>
    );
}