import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJob } from '../redux/jobSlice';
import AllJobs from '../components/AllJobs';
import { Typography } from '@material-ui/core';

export default function App() {
    const dispatch = useDispatch();
    const [offset, setOffSet] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // add event listener on scroll
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // call the fetchData function when reach to end of view 
  const handleScroll = () => {
    if (parseInt(window.innerHeight + document.documentElement.scrollTop+1) < document.documentElement.offsetHeight) {
      return;
    }
    setIsLoading(true);

    // update offset 
    setOffSet(prevOffset => {
        const newOffset = prevOffset + 10;
        fetchData(newOffset); // Fetch data with the new offset
        return newOffset; // Update state immediately
    });
    
  };


  // fetch data using api
    const fetchData = async (offset) => {
        try {
            // console.log('offset', offset);
            const myHeaders = new Headers();
            myHeaders.append("limit", 10);
            myHeaders.append("offset", offset); // Set offset to 0 to start from the first record
            myHeaders.append("Content-Type", "application/json");

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
            };

            const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
            const result = await response.json();
            dispatch(addJob(result.jdList));
            setIsLoading(false);


        } catch (error) {
            console.error(error);
        }
    };

    // initially fetch data and update offset
    useEffect(() => {
            fetchData(0);
            setOffSet(prev => prev+10);
        
    }, [dispatch]); 



    return (
        <div className="my-2">
            {dispatch && <AllJobs />}

            {isLoading && <Typography style={{ textAlign: 'center', fontSize: '1.2rem'}}>Loading...</Typography>}
        </div>
    );
}
