class OutlineButton extends React.Component {

    render() {
        return (
            <button type="button" onClick={this.props.clickHandle} className="font-mono inline-block px-4 py-2.5 border-2 text-base border-copper-penny text-copper-penny font-medium rounded-md hover:bg-copper-penny hover:text-background transition duration-150 ease-in-out">
                {this.props.text}
            </button>
        );
    }
}

const domContainer = document.querySelector('#outlinebutton');
const root = ReactDOM.createRoot(domContainer);
root.render(<OutlineButton />);