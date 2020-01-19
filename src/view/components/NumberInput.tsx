import React, {CSSProperties} from "react";
import {selectedCourses} from "../../controller/enrollment";

interface NumberInputProps {
    index: number;
    property: string;
}

class NumberInput extends React.Component<NumberInputProps> {
    private inputStyle: CSSProperties = {
        width: "30px",
        height: "2rem",
        margin: "0 1px 8px",
        border: "1px solid #9e9e9e",
        borderRadius: "3px",
        textAlign: "center"
    };

    render() {
        const value = (selectedCourses[this.props.index])[this.props.property];
        return <input className="number-input" type="text" value={value} style={this.inputStyle} onChange={this.handleChange}/>;
    }

    private handleChange = (e: any) => {
        const changedValue: string = e.target.value;
        if (changedValue) {
            const length = changedValue.length;
            if (this.isNotNumber(changedValue.charAt(length - 1))) {
                e.target.value = changedValue.substring(0, length - 1);
            }
        }
        (selectedCourses[this.props.index])[this.props.property] = e.target.value;
    };

    private isNotNumber = (character: string) => {
        return !(
            character === "0" ||
            character === "1" ||
            character === "2" ||
            character === "3" ||
            character === "4" ||
            character === "5" ||
            character === "6" ||
            character === "7" ||
            character === "8" ||
            character === "9"
        );
    };
}

export default NumberInput;