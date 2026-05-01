import React from "react";

function FormItem(props) {
    let element;
    switch (props.elementType) {
        case "input":
            element = (
                <input
                    id={props.id}
                    type={props.type}
                    className="form-control"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onValueChange}
                />
            );
            break;
        case "textarea":
            element = (
                <textarea
                    id={props.id}
                    className="form-control"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onValueChange}
                    rows={5}
                />
            );
            break;
        default:
            element = null;
    }

    return (
        <div className="form-group">
            <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className={`fas fa-${props.icon}`} />
                    </span>
                </div>
                {element}
            </div>
        </div>
    );
}

export default FormItem;
