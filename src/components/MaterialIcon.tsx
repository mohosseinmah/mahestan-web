import React from "react";

class MaterialIcon extends React.Component<any, any> {

    render() {
        return <i className="material-icons prefix pt-2">{this.props.iconName}</i>;
    }
}

export default MaterialIcon;