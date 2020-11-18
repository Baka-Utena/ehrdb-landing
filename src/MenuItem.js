import React, { Component } from "react";
import classNames from "classnames";

class MenuItem extends Component {
    constructor(props) {
        super();

        this.anchorTarget = null;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        window.scrollTo({top: this.props.itemPosition, left: 0, behavior:"smooth", block: "start"});
    }

    componentDidMount() {
        this.anchorTarget = document.getElementById(this.props.itemName);
    }
    componentWillUnmount() {
        this.anchorTarget = null;
    }


    render() {
        return (
            <li className={classNames("menu__item", this.props.active)}>
                <a href={"#" + this.props.itemName} onClick={this.handleClick} aria-label={'Scroll to' + this.props.itemName}>
                    {this.props.itemTitle}
                </a>
            </li>
        );
    }
}

export default MenuItem;
