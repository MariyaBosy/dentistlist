import React from "react";



// const Doctor = props => {
//   const {doctor_name, qualification, experience_years, id } = props;
// const {city} =props.practise;

function Doctor({doctor_id,DoctorList}){

const{doctors}=DoctorList;
  return (
    
    <div className="doctor">
    <h2>Doctors list</h2>
      <div className="info">
      <div>
      { 
        doctors && doctors.map(doctor => 
          <p key={doctor_id}>{doctor.doctor_name}
          <h2>{`${doctor.qualification} — ${doctor.experience_years} — ${doctor.city}`}</h2>
          </p>
          )}
    </div>
        
      </div>
    </div>

  );

}
export default Doctor;




//   let breed_details;
//   if (breed2 == null) {
//     breed_details = breed1;
//   } else {
//     breed_details = breed1 + "/" + breed2;
//   }

   //   <div className="image-container">
    //     <img src={hero} alt={doctor_name} />
    //   </div>