import React, {CSSProperties} from "react";

interface ColProps {
    className: string;
    style?: CSSProperties;
}

class Col extends React.Component<ColProps> {

    render() {
        const {className, ...props} = this.props;
        const classNames = ["col", className].join(" ");
        return <div className={classNames} {...props}>{this.props.children}</div>;
    }
}

export default Col;