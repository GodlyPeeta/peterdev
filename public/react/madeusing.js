var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MadeUsing = function (_React$Component) {
    _inherits(MadeUsing, _React$Component);

    function MadeUsing() {
        _classCallCheck(this, MadeUsing);

        return _possibleConstructorReturn(this, (MadeUsing.__proto__ || Object.getPrototypeOf(MadeUsing)).apply(this, arguments));
    }

    _createClass(MadeUsing, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "text-text-3 animate-fade text-center" },
                "This page was made using",
                React.createElement(
                    "span",
                    { className: "text-copper-penny/60" },
                    " Node.js"
                ),
                ",",
                React.createElement(
                    "span",
                    { className: "text-copper-penny/60" },
                    " Express.js"
                ),
                ",",
                React.createElement(
                    "span",
                    { className: "text-copper-penny/60" },
                    " Tailwindcss"
                ),
                ",",
                React.createElement(
                    "span",
                    { className: "text-copper-penny/60" },
                    " React"
                ),
                " and",
                React.createElement(
                    "span",
                    { className: "text-copper-penny/60" },
                    " Cloudflare"
                ),
                ".",
                React.createElement("br", null),
                "Fork or view the source code on ",
                React.createElement(Hyperlink, { link: "/", text: "Github" }),
                "."
            );
        }
    }]);

    return MadeUsing;
}(React.Component);

var domContainer = document.querySelector('#madeusing');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MadeUsing, null));