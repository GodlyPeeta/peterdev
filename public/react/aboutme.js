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
                            { className: "animate-[slideDown_1s]" },
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
                            { className: "flex justify-center mt-2 gap-14" },
                            React.createElement(
                                "div",
                                { className: "animate-[slideUp_1s]" },
                                React.createElement(
                                    "a",
                                    { href: "https://github.com/GodlyPeeta", target: "_blank" },
                                    React.createElement(
                                        "svg",
                                        { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", className: "fill-text-2 hover:fill-text-1/50 duration-150 scale-[200%] mt-7 " },
                                        React.createElement("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "animate-[slideUp_1.5s]" },
                                React.createElement(
                                    "a",
                                    { href: "https://www.linkedin.com/in/peter-zhou-765931245/", target: "_blank" },
                                    React.createElement(
                                        "svg",
                                        { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", className: "fill-text-2 hover:fill-text-1/50 duration-150 scale-[200%] mt-7" },
                                        React.createElement("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" })
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "animate-[slideUp_2s]" },
                                React.createElement(
                                    "a",
                                    { href: "mailto: peterzhou561@gmail.com" },
                                    React.createElement(
                                        "svg",
                                        { width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg", "fill-rule": "evenodd", "clip-rule": "evenodd", className: "fill-text-2 hover:fill-text-1/50 duration-150 scale-[200%] mt-7" },
                                        React.createElement("path", { d: "M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" })
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "text-text-2 text-lg w-[26rem] mt-1" },
                        React.createElement(
                            "div",
                            { className: "font-thin animate-[slideDown_1.75s]" },
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
                            { className: "font-thin animate-[slideDown_1.25s]" },
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
                            { className: "font-thin animate-[slideDown_0.75s]" },
                            "This is my personal website where I can talk about my experiences and host my personal projects."
                        ),
                        React.createElement(
                            "div",
                            { className: "flex mt-5 justify-center mr-5 animate-slideUp" },
                            React.createElement(OutlineButton, { text: "View my Resume", clickHandle: function clickHandle(e) {
                                    e.preventDefault();document.location.href = "/resume";
                                } })
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