'use strict';

var navbar = React.createElement(
    "div",
    { className: "fixed flex w-full backdrop-blur-lg items-center justify-between flex-wrap p-5 m-auto animated" },
    React.createElement("div", { "class": "flex-initial w-10 border-t border-text-1" }),
    React.createElement(
        "a",
        { href: "/", className: "text-copper-penny text-3xl font-light ml-10 float-left" },
        "Peter Zhou"
    ),
    React.createElement(
        "div",
        null,
        React.createElement(
            "router-link",
            { to: "/login", "class": "text-text-1 hover:bg-gray-700 px-3 rounded py-1" },
            "Login"
        ),
        React.createElement(
            "router-link",
            { to: "/register", "class": "text-text-1 hover:bg-gray-700 px-3 rounded py-1" },
            "Register"
        )
    )
);

var domContainer = document.querySelector('#navbar');
var root = ReactDOM.createRoot(domContainer);
root.render(navbar);