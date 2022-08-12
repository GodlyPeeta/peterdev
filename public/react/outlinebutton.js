var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OutlineButton = function (_React$Component) {
    _inherits(OutlineButton, _React$Component);

    function OutlineButton() {
        _classCallCheck(this, OutlineButton);

        return _possibleConstructorReturn(this, (OutlineButton.__proto__ || Object.getPrototypeOf(OutlineButton)).apply(this, arguments));
    }

    _createClass(OutlineButton, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                { type: "button", onClick: this.props.clickHandle, className: "font-mono inline-block px-4 py-2.5 border-2 text-base border-copper-penny text-copper-penny font-medium rounded-md hover:bg-copper-penny hover:text-background transition duration-150 ease-in-out" },
                this.props.text
            );
        }
    }]);

    return OutlineButton;
}(React.Component);

var domContainer = document.querySelector('#outlinebutton');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(OutlineButton, null));