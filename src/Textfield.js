import React, {Component} from "react";
import classNames from "classnames";

class TextField extends Component {
    constructor(props) {
        super();
        this.handleClickOnInput = this.handleClickOnInput.bind(this);
        this.handleBlurOnInput = this.handleBlurOnInput.bind(this);
        this.state = {
            placeholder: ''
        }
    }
    componentDidMount() {
        this.setState({placeholder: this.props.placeholder});
    }

    handleClickOnInput(e) {
        this.setState({placeholder: ''});
    }

    handleBlurOnInput(e) {
        this.setState({placeholder: this.props.placeholder});
    }
    render() {
        return (
            <>
                <div className={classNames("textfield", {'is-required': this.props.required})}>
                    <input
                        type="text"
                        className="textfield__input"
                        name={this.props.name}
                        placeholder={this.state.placeholder}
                        onChange={this.props.onChange}
                        onClick={this.handleClickOnInput}
                        onBlur={this.handleBlurOnInput}/>
                    <div className="textfield__error">{this.props.error}</div>
                </div>

            </>
        );
    }
}

export default TextField;
