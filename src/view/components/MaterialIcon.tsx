import React from "react";

interface MaterialIconProps {
    iconName: string
    className?: string;
    onClick?: any;
}

class MaterialIcon extends React.Component<MaterialIconProps, any> {
    render() {
        const {iconName, className, ...props} = this.props;
        const classNames: string[] = ["material-icons prefix pt-2"];
        if (this.props.className) classNames.push(this.props.className);
        const finalClassName = classNames.join(" ");
        return <i className={finalClassName} {...props}>{iconName}</i>;
    }
}

export default MaterialIcon;