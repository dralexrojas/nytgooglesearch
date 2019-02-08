import React from "react";

export function DeleteBtn(props) {
    return (
        <button {...props} className = "btn btn-danger float-left">
        {props.children}
        </button>
    )
}