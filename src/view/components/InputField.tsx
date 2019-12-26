import React from "react";

interface InputFieldProps {
    id: string;
    type: string;
    className?: string;
    label?: string;
}

class InputField extends React.Component<InputFieldProps, any> {
    render() {
        let className = "input-field";
        if (this.props.className) {
            className += ` ${this.props.className}`;
        }
        return (
            <div className={className}>
                <input id={this.props.id} type={this.props.type} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
                {this.props.label &&
                <label id={`${this.props.id}-label`} htmlFor={this.props.id}>{this.props.label}</label>}
            </div>
        );
    }

    private handleFocus = () => {
        let labelElement = document.getElementById(`${this.props.id}-label`);
        if (labelElement) labelElement.className = "active";
    };

    private handleBlur = () => {
        const inputFieldElement = document.getElementById(this.props.id) as HTMLInputElement;
        if (!inputFieldElement.value) {
            const labelElement = document.getElementById(`${this.props.id}-label`);
            if (labelElement) labelElement.className = "";
        }
    };
}

export default InputField;