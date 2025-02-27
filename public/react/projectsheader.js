var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectsHeader = function (_React$Component) {
    _inherits(ProjectsHeader, _React$Component);

    function ProjectsHeader() {
        _classCallCheck(this, ProjectsHeader);

        return _possibleConstructorReturn(this, (ProjectsHeader.__proto__ || Object.getPrototypeOf(ProjectsHeader)).apply(this, arguments));
    }

    _createClass(ProjectsHeader, [{
        key: "render",
        value: function render() {
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
    }]);

    return ProjectsHeader;
}(React.Component);

var domContainer = document.querySelector('#projectsheader');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(ProjectsHeader, null));