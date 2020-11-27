import user from './user'
import { all } from 'redux-saga/effects'
export default function * rootSaga() {
  yield all([
    ...user,
  ])
}