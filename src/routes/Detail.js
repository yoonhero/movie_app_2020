import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        console.log(this.props);
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="detail" >
                    <h4 className="detail_title">{ location.state.title }</h4>
                    <h5 className="detail_year">{ location.state.year }</h5>
                    <p className="detail_summary">{ location.state.summary }</p>
                </div >
            );
        } else {
            return null;
        }
    }
}
export default Detail;