function ProjectsHeader() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { className: "justify-start flex-wrap" },
            React.createElement(
                "div",
                { className: "text-text-1 text-4xl subpixel-antialiased animate-[slideDown_1.25s]" },
                "Featured Projects"
            ),
            React.createElement(
                "div",
                { className: "font-mono text-copper-penny animate-[slideDown_0.75s]" },
                "A few coding-related projects I've worked on"
            )
        )
    );
}

var elements = document.querySelectorAll('.projectsheader');

elements.forEach(function (element) {
    var root = ReactDOM.createRoot(element);
    root.render(React.createElement(ProjectsHeader, null));
});