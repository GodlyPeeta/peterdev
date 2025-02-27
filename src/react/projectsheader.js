class ProjectsHeader extends React.Component {
    render() {
        return (
            <div>
                <div className="justify-start flex-wrap">
                    <div className="text-text-1 text-4xl subpixel-antialiased animate-[slideDown_1.25s]">
                        Featured Projects
                    </div>
                    <div className="font-mono text-copper-penny animate-[slideDown_0.75s]">
                        A few coding-related projects I've worked on
                    </div>
                </div>
            </div>
        )
    }
}

const domContainer = document.querySelector('#projectsheader');
const root = ReactDOM.createRoot(domContainer);
root.render(<ProjectsHeader />);