'use strict';

class NavBarHeaders extends React.Component {
    render() {
        return (
            <div className="flex justify-between mt-1.5 rounded-full px-3 py-1 hover:bg-text-3 transition ease-in-out">
                <div className="font-mono text-copper-penny">
                    {this.props.number}
                </div>

                <div className="text-text-1 text-thin ml-1">
                    {this.props.title}
                </div>
            </div>
        )
    }
}

class Navbar extends React.Component {

    onResumeClick(e) {
        e.preventDefault();
        document.location.href = "/resume";
    }

    render() {
        return (
            <div className="mt-7">

                <div className="fixed flex w-full backdrop-blur-lg flex-wrap m-auto animated">
                    <div className="flex-initial w-7 border-t border-text-1 mt-4"></div>
                    <a href="/" className="text-copper-penny text-3xl font-light float-left ml-4">Peter Zhou</a>
                </div>

                <div className="fixed flex justify-end w-full flex-wrap m-auto animated">

                    <div className="flex space-x-10">

                        <a href="/" >
                            <NavBarHeaders number="1." title="About Me" className="" />
                        </a>

                        <a href="/projects" >
                            <NavBarHeaders number="2." title="Projects" className="" />
                        </a>

                        <a href="/work" >
                            <NavBarHeaders number="3." title="Work" className="" />
                        </a>

                        <a href="/contact" >
                            <NavBarHeaders number="4." title="Contact" className="" />
                        </a>

                    </div>

                    <button onClick={this.onResumeClick} type="button" className="font-mono inline-block px-4 py-2 border-2 ml-16 mr-7 text-base border-copper-penny text-copper-penny font-medium rounded-md hover:bg-copper-penny hover:text-background transition duration-150 ease-in-out">
                        Resume
                    </button>
                </div>

            </div>
        );
    }
}

const domContainer = document.querySelector('#navbar');
const root = ReactDOM.createRoot(domContainer);
root.render(<Navbar />);