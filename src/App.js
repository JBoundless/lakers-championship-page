import "./styles.css";
import React, { Component } from "react";
import Tabletop from "tabletop";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: "1YgpuiJOqV1AwFV8d3aqxidiVNIFNmMG5u2eHL6jEM1I",
      callback: (googleData) => {
        this.setState({
          data: googleData
        });
      },
      simpleSheet: true
    });
  }
  render() {
    console.log("updated state ------->", this.state);
    const { data } = this.state;
    return (
      <div className="App">
        <h1 style={{ backgroundColor: "purple", color: "gold" }}>
          Lakers 2019-20 Championship Team Stats (By Player)
          <br />
          #LeaveALegacy
        </h1>
        <div id="player-details">
          {data.map((obj) => {
            return (
              <div key={obj.Player}>
                <h2>{obj.Player}</h2>
                <img src={obj.img} style={{ width: "100vh" }} />
                <p>
                  <b>Games Played:</b> {obj.gamesPlayed}
                </p>
                <p>
                  <b>MPG:</b> {obj.minutesPG}, <b>PPG:</b> {obj.pointsPG},{" "}
                  <b>RPG:</b>
                  {obj.reboundsPG}, <b>APG:</b> {obj.assistsPG}, <b>SPG:</b>{" "}
                  {obj.stealsPG},<b>BPG:</b> {obj.blocksPG}, <b>TPG:</b>{" "}
                  {obj.turnoversPG}
                </p>
              </div>
            );
          })}
          <h1 style={{ backgroundColor: "purple", color: "gold" }}>
            Forever etched in Laker history.
          </h1>
          <img
            src="https://i1.wp.com/www.bleachersnews.com/wp-content/uploads/2021/05/Lakers-2019-20-Championship-Banner-scaled.jpg?fit=2560%2C1706&ssl=1"
            style={{ width: "100vh" }}
          />
        </div>
      </div>
    );
  }
}

export default App;
