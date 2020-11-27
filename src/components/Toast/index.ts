
import crateNotification from './createNotification'


let notification: any;

const notice = (type: String, content?: String, duration?: Number, onClose?: Function ) => {
  if(!notification) notification = crateNotification
  notification.addNotice({ type, content, duration, onClose })
}

export default {
  info(content?: String, duration?: Number, onClose?: Function) {
    return notice('info', content, duration, onClose)
  },
  success(content?: String, duration?: Number, onClose?: Function) {
      return notice('success', content, duration, onClose)
  },
  warning(content?: String, duration?: Number, onClose?: Function) {
      return notice('warning', content, duration, onClose)
  },
  error(content?: String, duration?: Number, onClose?: Function) {
      return notice('error', content, duration, onClose)
  },
  loading(content?: String, duration: Number = 0, onClose?: Function) {
      return notice('loading', content, duration, onClose)
  }
}