export interface I_state {
  user: {
    name: String,
    age: String,
    id: Number | String,
    phone: Number | String,
    bind: Boolean
  }
}

const State: I_state = {
  user: {
    name: '',
    age: '',
    id: '',
    phone: '',
    bind: false
  }
}

export default State