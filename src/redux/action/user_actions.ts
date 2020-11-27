const changeUser = (payload: any) => {
  return {
    type: 'CHANGE_USER',
    payload
  }
}

const changeUserBind = ({payload, params}: any) => {
  return {
    type: 'CHANGE_USER_BIND',
    payload,
    params
  }
}

const action = {
  changeUser,
  changeUserBind
}
export default action
export {
  changeUser,
  changeUserBind
}