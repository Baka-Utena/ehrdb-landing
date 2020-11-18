import React, {Component} from "react";

class Modal extends Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    render() {
        if(!this.props.show){
            return null;
        }
        return (
            <>
                <div className="modal" onClose={e => {
                    this.onClose(e);
                }}>
                    <div className="modal__background" onClick={this.onClose}/>
                    <div className="modal__wrapper">
                        <div className="modal__close" onClick={this.onClose}>
                            <i className="material-icons md-36">
                                close
                            </i>
                        </div>
                        {this.props.children}
                    </div>
                </div>
            </>
        )
    }

};

export default Modal;
