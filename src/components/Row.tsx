import React from "react";

class Row extends React.Component<any, any> {
    render() {
        const {...props} = this.props;
        return <div {...props} className="row">{this.props.children}</div>;
    }
}

export default Row;