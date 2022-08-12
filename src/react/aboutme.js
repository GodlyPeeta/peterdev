class AboutMe extends React.Component {

    onClick() {
        console.log("asdf")
    }

    render() {
        return (
            <div className="flex flex-nowrap gap-7">
                {/* left side */}
                <div className="">
                    <div className="font-mono text-copper-penny">
                        Hey, this is
                    </div>
                    <div className="text-text-1 text-9xl">
                        PETER <br></br>ZHOU'S
                    </div>
                    <div className="font-mono text-copper-penny float-right">
                        personal website
                    </div>
                </div>

                {/* right side */}
                <div className="text-text-2 text-base font-thin w-96">
                    I'm a grade 12 student in Canada, on the path to become a software engineer. 
                    
                    This is my personal website where I host 
                </div>
            </div>
        );
    }
}

const domContainer = document.querySelector('#aboutme');
const root = ReactDOM.createRoot(domContainer);
root.render(<AboutMe />);