import React from "react";

class Button extends React.Component<any, any> {

    render() {
        const {className, ...props} = this.props;
        const classNames = ["btn", this.props.className].join(" ");
        return <div {...props} className={classNames}>{this.props.children}</div>;
    }
}

export default Button;