import React from "react";
import classNames from "classnames";

function ButtonShowModal({onClick, visible}) {
    return (
        <div className={classNames("header__btn-wrap", {"is-visible": visible})}>
        <button className="btn btn_white header__btn"
                onClick={onClick}>
            Request a demo
        </button>
        </div>
    )
}

export default ButtonShowModal;
