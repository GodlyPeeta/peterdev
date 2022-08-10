'use strict';

const navbar = (
    <div className="fixed flex w-full backdrop-blur-lg items-center justify-between flex-wrap p-5 m-auto animated">
        <div class="flex-initial w-10 border-t border-text-1"></div>
        <a href="/" className="text-copper-penny text-3xl font-light ml-10 float-left">Peter Zhou</a>

        <div>
            <router-link to="/login" class="text-text-1 hover:bg-gray-700 px-3 rounded py-1">Login</router-link>
            <router-link to="/register" class="text-text-1 hover:bg-gray-700 px-3 rounded py-1">Register</router-link>
        </div>
    </div>
);

const domContainer = document.querySelector('#navbar');
const root = ReactDOM.createRoot(domContainer);
root.render(navbar);