import React from "react";
import { I_state } from '@/redux/state'
import {connect} from 'react-redux';
const mapStateToProps = (state: I_state) => ({
  user: state.user
})


const Index = (props: any) => {
  console.log(props);
  const {name, age, id, phone} = props.user
  return (
    <div className="index">
      {name}{age}{id}{phone}
      task
    </div>
  )
}

export default connect(mapStateToProps)(Index);