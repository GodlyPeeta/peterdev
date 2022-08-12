var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutMe = function (_React$Component) {
    _inherits(AboutMe, _React$Component);

    function AboutMe() {
        _classCallCheck(this, AboutMe);

        return _possibleConstructorReturn(this, (AboutMe.__proto__ || Object.getPrototypeOf(AboutMe)).apply(this, arguments));
    }

    _createClass(AboutMe, [{
        key: "onClick",
        value: function onClick() {
            console.log("asdf");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
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
                        { className: "text-text-1 text-9xl" },
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
                    { className: "text-text-2 text-base font-thin w-96" },
                    "I'm a grade 12 student in Canada, on the path to become a software engineer. This is my personal website where I host"
                )
            );
        }
    }]);

    return AboutMe;
}(React.Component);

var domContainer = document.querySelector('#aboutme');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(AboutMe, null));