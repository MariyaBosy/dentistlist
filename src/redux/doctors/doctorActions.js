import axios from 'axios'
import {
  FETCH_DOCTORS_REQUEST,
  FETCH_DOCTORS_SUCCESS,
  FETCH_DOCTORS_FAILURE
} from './doctorTypes'


export const fetchDoctorsRequest = () => {
  return {
    type: FETCH_DOCTORS_REQUEST
  }
}

export const fetchDoctorsSuccess = doctors => {
  return {
    type: FETCH_DOCTORS_SUCCESS,
    payload: doctors
  }
}

export const fetchDoctorsFailure =() => {
  return {
    type: FETCH_DOCTORS_FAILURE,
    payload: 'ERROR'
  }
}

export const fetchDoctors = () => {
  return (dispatch) => {
    dispatch(fetchDoctorsRequest())
    axios
      .get('https://www-latest.practo.com/marketplace-api/mweb/provider-seo?url_path=%2Fbangalore%2Fdentist&ad_limit=4&with_ad=true&city=bangalore&platform=mobile_web&sapphire=true&with_seo_data=true&reach_version=v4&speciality=dentist&placement=DOCTOR_SEARCH&enable_partner_listing=true&page=2')
      .then(response => {
        // response.data is the doctors
        const {doctors} = response.data
        dispatch(fetchDoctorsSuccess(doctors))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchDoctorsFailure(error.message))
      })
  }
}

