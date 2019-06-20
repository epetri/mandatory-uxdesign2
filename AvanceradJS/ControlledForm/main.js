class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value : ''};
        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        debugger;
        this.setState({value: event.target.value});
    }

    render() {
        debugger;
        const value = this.state.value;
        const input = React.createElement('input',{
            type: 'text',
            value: value,
            onChange: this.onChange,
            id: 'inputField',
        });

        const label = React.createElement('label',{
            htmlFor: 'inputField',
        }, ` Hello  ${value}`);
        return React.createElement('div',{}, input, label);
    }
}

const container = document.querySelector('.container');
ReactDOM.render(React.createElement(Form), container);
