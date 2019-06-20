class MyFirstComponent extends React.Component {
 render() {
 return React.createElement("p", {}, "Hello World!");
 }
}


const container = document.querySelector('.container');
ReactDOM.render(React.createElement(MyFirstComponent), container);
