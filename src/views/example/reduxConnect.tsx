import React, { useEffect } from 'react'
/** ========Components======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader';
/** ========redux======== **/
import { connect } from 'react-redux';
import { I_state } from '@/redux/state';
import { changeUser } from '@/redux/action/user_actions';
/** ========style======== **/
import style from './styles/toast.module.less'

const ReduxConnect = (props: any) => {
  useEffect(() => {
    props.changeUser(111);
  }, [])
  const {name, age, id, phone} = props.user;
  
  return (
    <div className={style.toast}>
      <BaseHeader />
      <div className="title">redux</div>
      <p>名字: {name}</p>
      <p>年龄: {age}</p>
      <p>id: {id}</p>
      <p>电话: {phone}</p>
    </div>
  )
}

const mapStateToprops = (state: I_state) => ({
  user: state.user
})

export default connect(mapStateToprops, {changeUser})(ReduxConnect);

