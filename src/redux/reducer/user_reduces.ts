import initState from '../state'
interface I_action {
  type: String,
  payload: any
}
let user = (state = initState.user || {}, action: I_action) => {
  switch(action.type) {
    case 'CHANGE_USER':
      return {
        ...state,
        ...action.payload
      }
    case 'CHANGE_USER_BIND':
      return {
        ...state,
        ...action.payload
      }
    default: 
      return state
  }

}

export default user;