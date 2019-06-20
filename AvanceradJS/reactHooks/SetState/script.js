class ChangeColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {backgroundColor: 'black', color: 'white'};
    this.updateColor = this.updateColor.bind(this);
  }

  updateColor() {
    const color = this.state.backgroundColor === 'red' ? 'black' : 'red';
    const text = this.state.color === 'blue' ? 'white' : 'blue';
    this.setState( {backgroundColor: color, color: text} );
  }
  render() {
    return React.createElement('h1', {
      style: {backgroundColor: this.state.backgroundColor, color: this.state.color},
      onClick: this.updateColor,
    }, "Some text");
    }
  }

  const container = document.querySelector('.container');
  ReactDOM.render(React.createElement(ChangeColor), container);
