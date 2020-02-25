import Doctor from './Doctor'
import { connect } from 'react-redux'



 const mapStateToProps = (state,ownProps) => {
     console.log(state);
  return {
    doctorList: state.doctor,
    doctor_id:ownProps
  }
}


export default connect(
  mapStateToProps
)(Doctor)

//hellon all