function ProjectsHeader () {
    return (
        <div>
            <div className="justify-start flex-wrap">
                <div className="text-text-1 text-4xl subpixel-antialiased animate-[slideDown_1.25s]">
                    Featured Projects
                </div>
                <div className="font-mono text-copper-penny animate-[slideDown_0.75s]">
                    Some neat stuff I've worked on in my free time
                </div>
            </div>
        </div>
    )
}

const elements = document.querySelectorAll('.projectsheader');

elements.forEach(element => {
    const root = ReactDOM.createRoot(element)
    root.render(<ProjectsHeader />)
});