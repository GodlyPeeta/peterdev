class AboutMeHyperlink extends React.Component {
    render() {
        return (
            <a href={this.props.link} className="underline text-medium-slate-blue hover:text-medium-slate-blue/50 duration-100">
                {this.props.text}
            </a>
        )
    }
}

class AboutMe extends React.Component {

    render() {
        return (
            <div>
                <div className="flex flex-nowrap gap-7">
                    {/* left side */}
                    <div className="">
                        <div className="font-mono text-copper-penny">
                            Hey, this is
                        </div>
                        <div className="text-text-1 text-9xl subpixel-antialiased">
                            PETER <br></br>ZHOU'S
                        </div>
                        <div className="font-mono text-copper-penny float-right">
                            personal website
                        </div>
                    </div>

                    {/* right side */}
                    <div className="text-text-2 text-lg w-[26rem]">
                        <div className="font-thin">
                            I'm a grade 12 student in Canada, on the path to become a <span className="text-copper-penny">software engineer</span>. 
                        </div>
                        <br></br>
                        <div className="font-thin">
                            I have worked on a <AboutMeHyperlink link="/" text="RESTful API for the backend of a school's app"/>, 
                            made a <AboutMeHyperlink link="/" text="Discord bot to track users for the rhythm game Osu"/>,
                            and participated in the <AboutMeHyperlink link="/" text="Vex Robotics Worlds tournament in Dallas Texas"/>.
                        </div>
                        <br></br>
                        <div className="font-thin">
                            This is my personal website where I can talk about my experiences and host my personal projects.
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

const domContainer = document.querySelector('#aboutme');
const root = ReactDOM.createRoot(domContainer);
root.render(<AboutMe />);