import React, {CSSProperties} from "react";
import NumberInput from "./NumberInput";
import CourseId from "../../model/CourseId";


interface CourseIdInputProps {
    index: number;
    courseId: CourseId;
}

class CourseIdInput extends React.Component<CourseIdInputProps> {
    private directionAndAlignStyle: CSSProperties = {
        direction: "ltr",
        textAlign: "right"
    };

    render() {
        return (
            <div style={this.directionAndAlignStyle}>
                <NumberInput index={this.props.index} property="faculty"/>
                <NumberInput index={this.props.index} property="department"/>
                <NumberInput index={this.props.index} property="number"/>
                <NumberInput index={this.props.index} property="group"/>
            </div>
        );
    }
}

export default CourseIdInput;