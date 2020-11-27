import React from "react"
import ReactDOM from "react-dom"
import Toast from './Toast'
interface i_state {
  notice: {
    type?: String,
    content?: String,
    duration?: Number,
    onClose?: Function
  }
}
const crateNotification = () => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const ref: any = React.createRef()
  ReactDOM.render(<Toast ref={ref} />, div)
  return {
    addNotice(notice: i_state) {
      return ref.current.addNotice(notice)
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
    }
  }
}

export default crateNotification();