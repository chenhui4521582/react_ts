import React, {Component} from "react";
import './style.less';
import { CSSTransition } from 'react-transition-group'
interface i_state {
  notice: {
    type?: String,
    content?: String,
    duration?: Number,
    onClose?: Function
  },
  show: any
}
class Toast extends Component<any, i_state> {
  constructor(props: any) {
    super(props);
    this.state = {
      notice: {},
      show: false
    }
  }
  public transitionTime: any = 1500;
  public timer: any = null;
  addNotice (params: any) {
    if(this.state.show) return;
    clearTimeout(this.timer)
    this.setState({show: true, notice: params})
    const {duration, onClose} = params
    this.timer = setTimeout(() => {
      this.setState({show: false, notice: {}})
      onClose && onClose()
    }, duration || this.transitionTime)
  }
  render () {
    const {content} = this.state.notice;
    const {show} = this.state;
    return (
      <CSSTransition
        in={show}
        timeout={this.transitionTime} 
        classNames="notice"
        unmountOnExit={true}
      >
        <div className="toast">
          {content}
        </div>
      </CSSTransition>
    )
  }
}


export default Toast;