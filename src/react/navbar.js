'use strict';

class NavBarHeaders extends React.Component {
    render() {
        return (
            <div className="flex justify-between mt-1.5 rounded-full px-3 py-1 hover:bg-text-2/20 transition ease-in-out">
                <div className="font-mono text-copper-penny">
                    {this.props.number}
                </div>

                <div className="text-text-2 text-thin ml-1">
                    {this.props.title}
                </div>
            </div>
        )
    }
}

class Navbar extends React.Component {

    onResumeClick(e) {
        e.preventDefault();
        document.location.href = "/PeterZhouResume.pdf";
    }

    render() {
        return (
            <div className="">
                {/* left side */}
                <div className="fixed flex w-full h-20 backdrop-blur-lg flex-wrap animated ">
                    <div className="flex-initial w-7 border-t-2 border-text-2 mt-8"></div>
                    <a href="/" className="text-copper-penny text-3xl font-light float-left ml-4 mt-4">Peter Zhou</a>
                </div>
                
                {/* Right side */}
                <div className="fixed flex justify-end w-full flex-wrap m-auto animated">

                    <div className="flex space-x-10 mt-4">

                        <a href="/" >
                            <NavBarHeaders number="1." title="About Me" className="" />
                        </a>

                        <a href="/projects" >
                            <NavBarHeaders number="2." title="Featured Projects" className="" />
                        </a>

                        {/* <a href="/experiences" >
                            <NavBarHeaders number="3." title="Experiences" className="" />
                        </a> */}

                        <a href="/contact" >
                            <NavBarHeaders number="3." title="Contact" className="" />
                        </a>

                    </div>
                    <div className="ml-14 mr-7 mt-3">
                        <OutlineButton text="Resume" clickHandle={this.onResumeClick}/>
                    </div>
                </div>

            </div>
        );
    }
}

const domContainer = document.querySelector('#navbar');
const root = ReactDOM.createRoot(domContainer);
root.render(<Navbar />);