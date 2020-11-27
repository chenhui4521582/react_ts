import React from 'react'
/** ========Components======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader';
import TurntableComponent from './components/turntable/turntable'
/** ========redux======== **/
import { connect } from 'react-redux';
import { I_state } from '@/redux/state';
import { changeUser, changeUserBind } from '@/redux/action/user_actions';
/** ========style======== **/
import style from './styles/turntable.module.less'
const ReduxConnect = (porps: any) => {
  return (
    <div className={style.forwardRef}>
      <BaseHeader />
      <TurntableComponent />
    </div>
  )
}

// const mapStateToProps = (state: I_state) => ({
//   user: state.user
// })

// export default connect(mapStateToProps, {changeUser, changeUserBind})(Index);

export default ReduxConnect

