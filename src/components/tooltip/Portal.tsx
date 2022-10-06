import ReactDOM from 'react-dom';
import React from 'react';

class Portal extends React.PureComponent {
  private readonly el: HTMLDivElement;

  constructor(props: any) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Portal;
