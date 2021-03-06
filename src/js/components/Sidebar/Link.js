"use strict";

import Component, {setImageSource} from '../../lib/Component';
import data from './Link.json';

class Link extends Component {

    constructor(props) {
        super(data);

        setImageSource(props.img, this.element.querySelector(".link-icon"));

        this.element.appendChild(document.createTextNode(props.text));
        this.to = props.to;

        this.highlight(props.highlight);
        this.text = props.text;
    }

    highlight(val) {
        if (val) {
            this.element.classList.add("highlight");
        } else {
            this.element.classList.remove("highlight");
        }
    }

    get to () {
        return this.element.getAttribute("href");
    }

    set to (val) {
        this.element.setAttribute("href", val);
    }
}

export default Link;