import React from "react";

interface PaginationProps {
    size: number;
    page: number;
    callback: Function;
}

class Pagination extends React.Component<PaginationProps> {
    private paginateButtons: any[];

    constructor(props: any) {
        super(props);
        this.paginateButtons = [];
        this.setButtons();
    }

    render() {
        return (
            <div className="dataTables_paginate paging_simple_numbers" id="data-table-simple_paginate">
                <div>
                    {this.paginateButtons}
                </div>
            </div>
        );
    }

    private setButtons = () => {
        const className: string = "paginate_button";
        for (let i = this.props.size; i > 0; i--) {
            if (i === this.props.page) {
                this.paginateButtons.push(<span className={`${className} current`}
                                                onClick={this.handleClick.bind(this, i)}>{i}</span>);
            } else {
                this.paginateButtons.push(<span className={className}
                                                onClick={this.handleClick.bind(this, i)}>{i}</span>);
            }
        }
        this.forceUpdate();
    };

    private handleClick = (index: number) => {
        this.props.callback(index);
    };
}

export default Pagination;