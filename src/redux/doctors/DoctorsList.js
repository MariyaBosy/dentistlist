import React, { useEffect } from 'react';

function DoctorsList ({ doctorList, fetchDoctors }) {
  useEffect(() => {
    fetchDoctors()
  }, [])
  const { doctors,loading, error} = doctorList
  return loading ? (
    <h2>Loading</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    
    
      <div className="doctor">
      <h2>Doctors list</h2>
        <div className="info">
        <div>
        { 
          doctors && doctors.map(doctor => 
            <p key={doctor.doctor_id}>{doctor.doctor_name}
            
            </p>
            )}
      </div>
          
        </div>
      </div>
  
    
      )
}
export default DoctorsList;