
import {useState} from 'react'

import styled from 'styled-components';


async function PendingRequests() 
{
    const token = localStorage.getItem('token');
    const [requests, setRequests] = useState([]);


    useEffect(() => {
         getPendingRequests = async() => {

            let requests = await fetch(`http://localhost:${process.env.API_URL}/requests/friend-requests?status=pending`, {headers:{Authorization:`Bearer ${token}`}});
            let requests_json = await requests.json();
            console.log(requests_json);
            setRequests(requests_json);


        }
        getPendingRequests();
       
    },[]);


    
}


export default PendingRequests;