import { Navigate , useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import axios from 'axios';

function Payment()
{
    const params = useParams(); 
    	
    useEffect(()=>{
    	console.log("UserId : ",params.uid);
    	console.log("Amount : ",params.amt);
    },[]);

    return(
        <div>
            <Navigate to='/success' />
        </div>
    )
}

export default Payment;
