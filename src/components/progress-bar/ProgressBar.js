import React from "react";

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { percentage: 0 };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ percentage: this.props.percentage });
        }, 200);
    }

    render() {
        return (
            <div className="skill-bar-wrap">
                <div className="skill-label">
                    <span>{this.props.name}</span>
                    <span>{this.state.percentage}%</span>
                </div>
                <div className="skill-track">
                    <div
                        className="skill-fill"
                        style={{ width: `${this.state.percentage}%` }}
                    />
                </div>
            </div>
        );
    }
}

export default ProgressBar;
