class MadeUsing extends React.Component {

    render() {
        return (
            <div className="text-text-3 animate-fade text-center">
                This page was made using 
                <span className="text-copper-penny/60"> Node.js</span>,
                <span className="text-copper-penny/60"> Express.js</span>,
                <span className="text-copper-penny/60"> Tailwindcss</span>,
                <span className="text-copper-penny/60"> React</span> and
                <span className="text-copper-penny/60"> Cloudflare</span>.
                <br></br>
                Fork or view the source code on <Hyperlink link="/" text="Github" />.
            </div>
        );
    }
}

const domContainer = document.querySelector('#madeusing');
const root = ReactDOM.createRoot(domContainer);
root.render(<MadeUsing />);