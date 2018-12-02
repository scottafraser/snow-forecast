import React, { Component } from "react";

export default class SnowForcast extends Component {
  render() {
    return (
      <div>
        <link
          href="//www.snow-forecast.com/stylesheets/feed.css"
          media="screen"
          rel="stylesheet"
          type="text/css"
        />
        <div id="wf-weatherfeed">
          <iframe
            // style="overflow:hidden;border:none;"
            allowtransparency="true"
            height="272"
            width="469"
            src="//www.snow-forecast.com/resorts/Mt-Hood-Meadows/forecasts/feed/mid/m"
            scrolling="no"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
          >
            <p>Your browser does not support iframes.</p>
          </iframe>
          <div id="wf-link">
            <a href="https://www.snow-forecast.com/">
              <img
                alt="Snow Forecast"
                src="//www.snow-forecast.com/images/feed/snowlogo-150.png"
              />
            </a>
            <p id="cmt">
              View detailed snow forecast for{" "}
              <a href="https://www.snow-forecast.com/resorts/Mt-Hood-Meadows/6day/mid">
                Mt Hood Meadows
              </a>{" "}
              at:
              <br />
              <a href="https://www.snow-forecast.com/">
                <strong>snow-forecast.com</strong>
              </a>
            </p>
            {/* <div style="clear: both;" /> */}
          </div>
        </div>
      </div>
    );
  }
}
