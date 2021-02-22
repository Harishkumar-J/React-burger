import React, { Component } from "react";
import "../App.css";
class Timer extends Component {
    ticker;
    constructor() {
        super();
        this.state = {
            milliseconds: 0,
            seconds: 0,
            minutes: 0,
            isRunning: false
        };
    }
    componentDidUpdate() {

        if (!this.state.isRunning && this.props.moves === 1) {
            this.setStartTimer()
        }
    }
    []
}
setStartTimer = () => {
    // setInterval(()=>{},100)
    //setState(prevState=>{return})
    this.setState({
        isRunning: true
    });
    this.ticker = setInterval(() => {
        if ((this.state.milliseconds < 10) & this.state.isRunning) {
            this.setState(prevState => {
                return { milliseconds: prevState.milliseconds + 1 }
            })
        }
        else if ((this.state.seconds < 59) & this.state.isRunning) {
            this.setState(prevState => {
                return {
                    milliseconds: 0,
                    seconds: prevState.seconds + 1
                };
            });
        }
        else if ((this.state.minutes < 59) & this.state.isRunning) {
            this.setState(prevState => {
                return {
                    milliseconds: 0,
                    seconds: 0,
                    minutes: prevState.minutes + 1
                };
            });
        }
    }, 100);
};
setStopTimer = () => {
    this.setState({
        isRunning: false,
    });
    clearInterval(this.ticker);
};
setResetTimer = () => {
    this.setState({
        minutes: 0,
        seconds: 0,
        milliseconds: 0
    });

};
render() {
    let ms, sec, min;
    ms =
        this.state.milliseconds > 9 ? this.state.milliseconds : "0" + this.state.milliseconds;
    sec =
        this.state.seconds > 9 ? this.state.seconds : "0" + this.state.seconds;
    min =
        this.state.minutes > 9 ? this.state.minutes : "0" + this.state.minutes;
    return (
        <div>
            <div className="Main">
                {/* <button className="ActionButton" onClick={this.setStartTimer}>Start </button> */}
                <button className="ActionButton" onClick={this.setStopTimer}>Stop</button>
                <button className="ActionButton" onClick={(props) => { this.setResetTimer(); this.props.createBox(); this.setStopTimer() }}>Reset</button>
            </div>
            <div style={{ fontSize: "19px" }}> {this.props.children} {min}:{sec}:{ms}</div>
            {/* <div className="Timer">
                    {min}:{sec}:{ms}
                </div> */}
        </div >
    );
}
}
export default Timer;
