'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBarHeaders = function (_React$Component) {
    _inherits(NavBarHeaders, _React$Component);

    function NavBarHeaders() {
        _classCallCheck(this, NavBarHeaders);

        return _possibleConstructorReturn(this, (NavBarHeaders.__proto__ || Object.getPrototypeOf(NavBarHeaders)).apply(this, arguments));
    }

    _createClass(NavBarHeaders, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "flex justify-between mt-1.5 rounded-full px-3 py-1 hover:bg-text-2/20 transition ease-in-out" },
                React.createElement(
                    "div",
                    { className: "font-mono text-copper-penny" },
                    this.props.number
                ),
                React.createElement(
                    "div",
                    { className: "text-text-2 text-thin ml-1" },
                    this.props.title
                )
            );
        }
    }]);

    return NavBarHeaders;
}(React.Component);

var Navbar = function (_React$Component2) {
    _inherits(Navbar, _React$Component2);

    function Navbar() {
        _classCallCheck(this, Navbar);

        return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
    }

    _createClass(Navbar, [{
        key: "onResumeClick",
        value: function onResumeClick(e) {
            e.preventDefault();
            document.location.href = "/resume";
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "" },
                React.createElement(
                    "div",
                    { className: "fixed flex w-full h-20 backdrop-blur-lg flex-wrap animated " },
                    React.createElement("div", { className: "flex-initial w-7 border-t-2 border-text-2 mt-8" }),
                    React.createElement(
                        "a",
                        { href: "/", className: "text-copper-penny text-3xl font-light float-left ml-4 mt-4" },
                        "Peter Zhou"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "fixed flex justify-end w-full flex-wrap m-auto animated" },
                    React.createElement(
                        "div",
                        { className: "flex space-x-10 mt-4" },
                        React.createElement(
                            "a",
                            { href: "/" },
                            React.createElement(NavBarHeaders, { number: "1.", title: "About Me", className: "" })
                        ),
                        React.createElement(
                            "a",
                            { href: "/projects" },
                            React.createElement(NavBarHeaders, { number: "2.", title: "Projects", className: "" })
                        ),
                        React.createElement(
                            "a",
                            { href: "/work" },
                            React.createElement(NavBarHeaders, { number: "3.", title: "Work", className: "" })
                        ),
                        React.createElement(
                            "a",
                            { href: "/contact" },
                            React.createElement(NavBarHeaders, { number: "4.", title: "Contact", className: "" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "ml-14 mr-7 mt-3" },
                        React.createElement(OutlineButton, { text: "Resume", clickHandle: this.onResumeClick })
                    )
                )
            );
        }
    }]);

    return Navbar;
}(React.Component);

var domContainer = document.querySelector('#navbar');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(Navbar, null));