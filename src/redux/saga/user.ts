
import { call, take, put, select } from 'redux-saga/effects'

function getUserinfo (params: any) {
  console.log(params);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({name:' chenhui', age: '111', id: '123123', phone: 15000815427})
    }, 3000)
  })
}

function getUserBind (params: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 3000)
  })
}

function * queryUserInfo () {
  const action= yield take('CHANGE_USER');
  const state = yield select(state => state);
  console.log(state);
  const products = yield call(getUserinfo, action.payload || '')
  yield put({type:'CHANGE_USER', payload: products});
}

function * queryUserIsBind () {
  const action= yield take('CHANGE_USER_BIND');
  const bind = yield call(getUserBind, action.params || '')
  yield put({type:'CHANGE_USER_BIND', payload: {bind} });
}

const user: any[] = [queryUserInfo(), queryUserIsBind()]

export default user

