import { api } from '@/services/api';
import React, { useState } from 'react'

export const UseServices = () => {
    const [ services, setServices ] = useState([]);
    const [ service, setService ] = useState();
    const [ loading, setLoading ] = useState(false);

    const fetchServices = async () => {
        setLoading(true);
        try{
            const res = await api.get('/services/');
            setServices(res.data);
        } catch (err){
            console.log('error', err);
            setLoading(false);
        }
    }
  return (
    {
        loading,
        setLoading,

        service,
        setService,

        services,
        setServices,
        fetchServices,
    }
  )
}
