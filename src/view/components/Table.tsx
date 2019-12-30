import React from "react";

interface TableProps {
    bordered?: boolean;
    striped?: boolean;
    centered?: boolean;
    columns: string[];
    data: any[];
}

class Table extends React.Component<TableProps, any> {
    render() {
        return (
            <table className={this.getClassName()}>
                <thead>
                <tr style={{textAlign: this.props.bordered ? "center" : "right"}}>
                    {
                        this.props.columns.map((column: string, index: number) => {
                            return <th>{column}</th>;
                        })
                    }
                </tr>
                </thead>
                <tbody>
                {
                    this.props.data.map((row: any, i: number) => {
                        return (
                            <tr>
                                {this.tds(row)}
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        );
    }

    private getClassName() {
        const classNames: string[] = [];
        if (this.props.bordered) classNames.push("bordered");
        if (this.props.striped) classNames.push("striped");
        if (this.props.centered) classNames.push("centered");
        return classNames.join(" ");
    }

    private tds = (obj: any) => {
        const list = [];
        for (let property in obj)
            if (property && obj.hasOwnProperty(property))
                list.push(<td>{obj[property]}</td>);
        return list;
    }
}

export default Table;