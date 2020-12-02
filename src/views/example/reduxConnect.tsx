import React, { useEffect, useReducer } from 'react'
/** ========Components======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader';
/** ========redux======== **/
import { connect } from 'react-redux';
import { I_state } from '@/redux/state';
import { changeUser } from '@/redux/action/user_actions';
/** ========style======== **/
import style from './styles/toast.module.less'
/** ========Interface======== **/
interface I_user {
  name: String,
  age: Number | null,
}


const ReduxConnect = (props: any) => {
  
  const [user, dispatch] = useReducer((state: I_user, action: any) => {
    switch (action.type) {
      case 'setName': 
        return {...state, name: action.name};
      default: 
        return state;
    }
  }, {name: '', age: null});

  useEffect(() => {
    props.changeUser(111);
    dispatch({type: 'setName', name: 'chenhui'})
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

