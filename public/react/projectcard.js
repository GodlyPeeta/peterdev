var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SocialsButton = function (_React$Component) {
    _inherits(SocialsButton, _React$Component);

    function SocialsButton() {
        _classCallCheck(this, SocialsButton);

        return _possibleConstructorReturn(this, (SocialsButton.__proto__ || Object.getPrototypeOf(SocialsButton)).apply(this, arguments));
    }

    _createClass(SocialsButton, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "a",
                { href: this.props.link },
                React.createElement(
                    "div",
                    { className: "flex justify-between rounded-full px-3 py-1 hover:bg-text-2/20 transition ease-in-out" },
                    React.createElement(
                        "div",
                        { className: "text-copper-penny text-thin ml-1" },
                        this.props.title
                    )
                )
            );
        }
    }]);

    return SocialsButton;
}(React.Component);

function ProjectCardDescription(_ref) {
    var header = _ref.header,
        year = _ref.year,
        desc = _ref.desc,
        desc2 = _ref.desc2;

    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { "class": "flex justify-between items-center text-text-1 text-2xl subpixel-antialiased" },
            React.createElement(
                "div",
                { "class": "text-text-1 text-left" },
                " ",
                header,
                " "
            ),
            React.createElement(
                "div",
                { "class": "text-text-2 text-right text-xl" },
                " ",
                year,
                " "
            )
        ),
        React.createElement(
            "p",
            { "class": "text-text-2 text-md subpixel-antialiased mt-2" },
            desc
        ),
        React.createElement(
            "p",
            { "class": "text-text-2 text-md subpixel-antialiased mt-1" },
            desc2
        )
    );
}

function ProjectCardPppad() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { "class": "bg-foreground w-[30rem] rounded-xl" },
            React.createElement(
                "div",
                { "class": "grid grid-cols-2 md:grid-cols-2 gap-4 overflow-visible" },
                React.createElement("img", { "class": "w-fit rounded-xl max-h-44", src: "/assets/projects/pppad/pppad1.png" }),
                React.createElement("img", { "class": "w-fit rounded-xl max-h-44", src: "/assets/projects/pppad/pppad2.png" })
            ),
            React.createElement(
                "div",
                { "class": "px-6 pt-4" },
                React.createElement(ProjectCardDescription, {
                    header: "Hall Effect Keypad",
                    year: "2023",
                    desc: "Rapid trigger keypad for osu!",
                    desc2: "The Wooting offerings were too expensive at the time, so I made my own. Takes analog signals from the magnet embedded in the switch for variable actuation distances" })
            ),
            React.createElement(
                "div",
                { "class": "px-3 py-2 flex space-x-2" },
                React.createElement(SocialsButton, { title: "Youtube (Prototype)", link: "https://www.youtube.com/shorts/CRPU_5PrwT0" })
            )
        )
    );
}

function ProjectCardVex() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { "class": "bg-foreground w-[30rem] rounded-xl" },
            React.createElement(
                "div",
                { "class": "grid grid-cols-2 md:grid-cols-2 gap-4 overflow-visible" },
                React.createElement("img", { "class": "w-fit rounded-xl max-h-44", src: "/assets/projects/vex/thing.png" }),
                React.createElement("img", { "class": "w-fit rounded-xl max-h-44", src: "/assets/projects/vex/thing2.png" })
            ),
            React.createElement(
                "div",
                { "class": "px-6 pt-4" },
                React.createElement(ProjectCardDescription, {
                    header: "Vex Robotics Team Captain",
                    year: "2021",
                    desc: "Team captain for the 2021 Vex robotics game! Second place in Provincials, lost first place due to a faulty battery :(",
                    desc2: "" })
            ),
            React.createElement(
                "div",
                { "class": "px-3 py-2 flex space-x-2" },
                React.createElement(SocialsButton, { title: "Github", link: "https://github.com/GodlyPeeta/vex-tipping-point-auto" }),
                React.createElement(SocialsButton, { title: "Youtube", link: "https://www.youtube.com/live/1_hn4KvXP64?si=1xigZBP6Ukx1waAS&t=39739" })
            )
        )
    );
}

function ProjectCardPPJuice() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { "class": "bg-foreground w-[30rem] rounded-xl" },
            React.createElement(
                "div",
                { "class": "grid overflow-visible" },
                React.createElement("img", { "class": "w-fit rounded-xl", src: "/assets/projects/ppjuice/ppj4.png" })
            ),
            React.createElement(
                "div",
                { "class": "px-6 pt-4" },
                React.createElement(ProjectCardDescription, {
                    header: "ppjuice (osu bot)",
                    year: "2021",
                    desc: "Discord bot for osu! Wasn't satisfied with the limits and speed of the other osu bots, so I made my own. Has all the features, like real time score tracking and map visualization.",
                    desc2: "No longer maintained." })
            ),
            React.createElement(
                "div",
                { "class": "px-3 py-2 flex space-x-2" },
                React.createElement(SocialsButton, { title: "Github", link: "https://github.com/GodlyPeeta/pp-juice" })
            )
        )
    );
}

function ProjectCard3dp() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { "class": "bg-foreground w-[30rem] rounded-xl" },
            React.createElement(
                "div",
                { "class": "grid grid-cols-2 md:grid-cols-2 gap-4 overflow-visible" },
                React.createElement("img", { "class": "w-fit rounded-xl max-h-44", src: "/assets/projects/3dp/3dp1.png" }),
                React.createElement("img", { "class": "w-fit rounded-xl max-h-44", src: "/assets/projects/3dp/3dp2.png" })
            ),
            React.createElement(
                "div",
                { "class": "px-6 pt-4 py-4" },
                React.createElement(ProjectCardDescription, {
                    header: "Freelance 3D Printing",
                    year: "2024",
                    desc: "Designed and manufactured cool stuff for business and consumer clients. Made roughly $5000 revenue last year.",
                    desc2: "" })
            )
        )
    );
}

function ProjectCardList() {
    return (
        // <div>
        //     <div class="grid grid-cols-2 gap-8 mt-[5%]">
        //         <div class="animate-fade"> <ProjectCardPppad/> </div>
        //         <div class="animate-fade"> <ProjectCardVex/> </div>
        //     </div>
        //     <div class="grid grid-cols-2 gap-8 mt-[4%]">
        //         <div class="animate-fade"> <ProjectCardPPJuice/> </div>
        //         <div class="animate-fade"> <ProjectCard3dp/> </div>
        //     </div>
        // </div>


        React.createElement(
            "div",
            { "class": "columns-2 gap-8 mt-[5%] pb-[5%]" },
            React.createElement(
                "div",
                { "class": "grid gap-8" },
                React.createElement(
                    "div",
                    { "class": "animate-fade hover:scale-105 duration-200" },
                    " ",
                    React.createElement(ProjectCard3dp, null),
                    " "
                ),
                React.createElement(
                    "div",
                    { "class": "animate-fade hover:scale-105 duration-200" },
                    " ",
                    React.createElement(ProjectCardPPJuice, null),
                    " "
                )
            ),
            React.createElement(
                "div",
                { "class": "grid gap-8" },
                React.createElement(
                    "div",
                    { "class": "animate-fade hover:scale-105 duration-200" },
                    " ",
                    React.createElement(ProjectCardPppad, null),
                    " "
                ),
                React.createElement(
                    "div",
                    { "class": "animate-fade hover:scale-105 duration-200" },
                    " ",
                    React.createElement(ProjectCardVex, null),
                    " "
                )
            )
        )
    );
}

var elements = document.querySelectorAll('.projectcardlist');

elements.forEach(function (element) {
    var root = ReactDOM.createRoot(element);
    root.render(React.createElement(ProjectCardList, null));
});