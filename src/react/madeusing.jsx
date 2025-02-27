class MadeUsing extends React.Component {

    render() {
        return (
            <div className="text-text-3 animate-fade text-center">
                This page was made using 
                <span className="text-copper-penny"> Node.js</span>,
                <span className="text-copper-penny"> Express.js</span>,
                <span className="text-copper-penny"> Tailwindcss</span>,
                <span className="text-copper-penny"> React</span> and
                <span className="text-copper-penny"> Cloudflare</span>.
                <br></br>
                Built and designed from <b>scratch</b> by Peter Zhou, fork or view the source code on <Hyperlink link="https://github.com/GodlyPeeta/peterdev" target="_blank" text="Github" />.
            </div>
        );
    }
}

const domContainer = document.querySelector('#madeusing');
const root = ReactDOM.createRoot(domContainer);
root.render(<MadeUsing />);