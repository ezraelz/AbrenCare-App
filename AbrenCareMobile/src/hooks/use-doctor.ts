import { api } from '@/services/api';
import React, { useState } from 'react'

export const UseDoctor = () => {
    const [ doctors, setDoctors ] = useState([]);
    const [ doctorAvailabity, setDoctorAvailabity ] = useState();
    const [ loading, setLoading ] = useState(false);

    const fetchDoctors = async () => {
        setLoading(true);
        try{
            const res = await api.get('/doctors/');
            setDoctors(res.data);
        } catch (err){
            console.log('error', err);
            setLoading(false);
        }
    }

    const fetchDoctorAvailability = async () => {
        setLoading(true);
        try{
            const res = await api.get('/availability/');
            setDoctorAvailabity(res.data);
        } catch (err){
            console.log('error', err);
            setLoading(false);
        }
    }

  return (
    {
        loading,
        setLoading,

        doctors,
        fetchDoctors,

        doctorAvailabity,
        fetchDoctorAvailability
    }
  )
}
