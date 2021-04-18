"use strict";

import {mountHome} from './components/Home/Home';
import {mountSidebar} from "./components/Sidebar/Sidebar";
import {mountPlayer} from './components/Player/Player'
import {Track} from './components/Player/Track';

//import {mountToolbar} from './components/Toolbar';

import Toolbar from './components/Toolbar';


const mountToolbar = (container) => {
    // Temporary solution until toolbar is finished:
    const element = document.createElement("div")
    element.className = "fixed left-0 top-0 right-0 ml-44 h-14 bg-topbeat-player z-10";
    element.textContent = "toolbar";
    container.appendChild(element);
    return element;

    // "fixed left-0 top-0 right-0 ml-44 h-14 bg-topbeat-player z-10"
    /*
    const component = new Toolbar();
    component.mount(container);
    return component;
    */
};




const context = {};

const container = document.querySelector(".root");

(async () => {
    context.sidebar = mountSidebar(container);
    context.toolbar = mountToolbar(container);
    context.data = mountHome(container);
    context.palyer = mountPlayer(container);
})();
