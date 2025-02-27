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
        desc = _ref.desc,
        desc2 = _ref.desc2;

    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { "class": "text-text-1 text-2xl subpixel-antialiased" },
            header
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
                React.createElement("img", { "class": "w-fit duration-300 hover:scale-150 rounded-xl max-h-44", src: "/assets/projects/pppad/pppad1.png" }),
                React.createElement("img", { "class": "w-fit duration-300 hover:scale-150 rounded-xl max-h-44", src: "/assets/projects/pppad/pppad2.png" })
            ),
            React.createElement(
                "div",
                { "class": "px-6 pt-4" },
                React.createElement(ProjectCardDescription, {
                    header: "Hall Effect Keypad",
                    desc: "Rapid trigger keypad for osu!",
                    desc2: "The Wooting offerings were too expensive at the time, so I made my own. Takes analog signals from the magnet embedded in the switch for variable actuation distances" })
            ),
            React.createElement(
                "div",
                { "class": "px-3 py-2 flex space-x-2" },
                React.createElement(SocialsButton, { title: "Youtube", link: "https://www.youtube.com/shorts/CRPU_5PrwT0" })
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
                React.createElement("img", { "class": "w-fit duration-300 hover:scale-150 rounded-xl max-h-44", src: "/assets/projects/pppad/pppad1.png" }),
                React.createElement("img", { "class": "w-fit duration-300 hover:scale-150 rounded-xl max-h-44", src: "/assets/projects/pppad/pppad2.png" })
            ),
            React.createElement(
                "div",
                { "class": "px-6 pt-4" },
                React.createElement(ProjectCardDescription, {
                    header: "Hall Effect Keypad",
                    desc: "Rapid trigger keypad for osu!",
                    desc2: "The Wooting offerings were too expensive at the time, so I made my own. Takes analog signals from the magnet embedded in the switch for variable actuation distances" })
            ),
            React.createElement(
                "div",
                { "class": "px-3 py-2 flex space-x-2" },
                React.createElement(SocialsButton, { title: "Youtube", link: "https://www.youtube.com/shorts/CRPU_5PrwT0" })
            )
        )
    );
}

function ProjectCardList() {
    return React.createElement(
        "div",
        { "class": "grid grid-cols-2 gap-8 mt-[5%]" },
        React.createElement(
            "div",
            { "class": "animate-fade" },
            " ",
            React.createElement(ProjectCardPppad, null),
            " "
        ),
        React.createElement(
            "div",
            { "class": "animate-fade" },
            " ",
            React.createElement(ProjectCardVex, null),
            " "
        )
    );
}

var elements = document.querySelectorAll('.projectcardlist');

elements.forEach(function (element) {
    var root = ReactDOM.createRoot(element);
    root.render(React.createElement(ProjectCardList, null));
});