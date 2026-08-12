import { api } from '@/services/api';
import React, { useState } from 'react'

export const UseAppointment = () => {
    const [ appointments, setAppointments ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const fetchAppointments = async () => {
        setLoading(true);
        try{
            const res = await api.get('/appointment/');
            setAppointments(res.data);
        } catch (err){
            console.log('error', err);
            setLoading(false);
        }
    }
  return (
    {
        loading,
        setLoading,

        appointments,
        fetchAppointments
    }
  )
}
