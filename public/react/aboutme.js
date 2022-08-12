var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutMeHyperlink = function (_React$Component) {
    _inherits(AboutMeHyperlink, _React$Component);

    function AboutMeHyperlink() {
        _classCallCheck(this, AboutMeHyperlink);

        return _possibleConstructorReturn(this, (AboutMeHyperlink.__proto__ || Object.getPrototypeOf(AboutMeHyperlink)).apply(this, arguments));
    }

    _createClass(AboutMeHyperlink, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "a",
                { href: this.props.link, className: "underline text-medium-slate-blue hover:text-medium-slate-blue/50 duration-100" },
                this.props.text
            );
        }
    }]);

    return AboutMeHyperlink;
}(React.Component);

var AboutMe = function (_React$Component2) {
    _inherits(AboutMe, _React$Component2);

    function AboutMe() {
        _classCallCheck(this, AboutMe);

        return _possibleConstructorReturn(this, (AboutMe.__proto__ || Object.getPrototypeOf(AboutMe)).apply(this, arguments));
    }

    _createClass(AboutMe, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "flex flex-nowrap gap-7" },
                    React.createElement(
                        "div",
                        { className: "" },
                        React.createElement(
                            "div",
                            { className: "font-mono text-copper-penny" },
                            "Hey, this is"
                        ),
                        React.createElement(
                            "div",
                            { className: "text-text-1 text-9xl subpixel-antialiased" },
                            "PETER ",
                            React.createElement("br", null),
                            "ZHOU'S"
                        ),
                        React.createElement(
                            "div",
                            { className: "font-mono text-copper-penny float-right" },
                            "personal website"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "text-text-2 text-lg w-[26rem]" },
                        React.createElement(
                            "div",
                            { className: "font-thin" },
                            "I'm a grade 12 student in Canada, on the path to become a ",
                            React.createElement(
                                "span",
                                { className: "text-copper-penny" },
                                "software engineer"
                            ),
                            "."
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "div",
                            { className: "font-thin" },
                            "I have worked on a ",
                            React.createElement(AboutMeHyperlink, { link: "/", text: "RESTful API for the backend of a school's app" }),
                            ", made a ",
                            React.createElement(AboutMeHyperlink, { link: "/", text: "Discord bot to track users for the rhythm game Osu" }),
                            ", and participated in the ",
                            React.createElement(AboutMeHyperlink, { link: "/", text: "Vex Robotics Worlds tournament in Dallas Texas" }),
                            "."
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "div",
                            { className: "font-thin" },
                            "This is my personal website where I can talk about my experiences and host my personal projects."
                        )
                    )
                )
            );
        }
    }]);

    return AboutMe;
}(React.Component);

var domContainer = document.querySelector('#aboutme');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(AboutMe, null));