import React from 'react';
function lazyLoad (Component: any) {
  class lazyComponent extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        component: null
      }
    }
    async componentDidMount () {
      const {default: component} = await Component();
      this.setState({
        component
      })
    }
    render () {
      const C: any = this.state.component;
      const props: any = this.props;
      return (
        C ? <C {...props} /> : null
      )
    }
  }
  return lazyComponent;
}

export default lazyLoad