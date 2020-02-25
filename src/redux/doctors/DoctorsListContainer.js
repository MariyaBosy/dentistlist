import DoctorsList from './DoctorsList'
import { connect } from 'react-redux'
import { fetchDoctors } from '..'


 const mapStateToProps = state => {
  return {
    doctorList: state.doctor
  }
}
 const mapDispatchToProps = dispatch => {
  return {
    fetchDoctors: () => dispatch(fetchDoctors())
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorsList)