class Hyperlink extends React.Component {
    render() {
        return (
            <a href={this.props.link} target={this.props.target} className="underline text-medium-slate-blue hover:text-medium-slate-blue/50 duration-100">
                {this.props.text}
            </a>
        )
    }
}

const domContainer = document.querySelector('#hyperlink');
const root = ReactDOM.createRoot(domContainer);
root.render(<Hyperlink />);