import React from "react";

interface MaterialIconProps {
    iconName: string
}

class MaterialIcon extends React.Component<MaterialIconProps, any> {

    render() {
        return <i className="material-icons prefix pt-2">{this.props.iconName}</i>;
    }
}

export default MaterialIcon;