function ProjectsHeader () {
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

const elements = document.querySelectorAll('.projectsheader');

elements.forEach(element => {
  ReactDOM.render(React.createElement(ProjectsHeader), element);
});