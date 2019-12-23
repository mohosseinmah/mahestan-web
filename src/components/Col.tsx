import React from "react";

class Col extends React.Component<any, any> {

    render() {
        const classNames = ["col", this.props.className].join(" ");
        return <div className={classNames}>{this.props.children}</div>;
    }
}

export default Col;