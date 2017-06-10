"use strict";

import * as React from "react";

var StockTweets = React.createClass({
  formatDate: function(dateObj) {
    var dayName = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
    var monthNames = ["Ene", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    var dayClock = dateObj.getHours() >= 12 ? "PM" : "AM";
    var minutes = (dateObj.getMinutes() >= 10 ? "" : "0") + dateObj.getMinutes();
    console.log("minutos", minutes);
    return `${ dayName[dateObj.getDay()] } ${ monthNames[dateObj.getMonth()] } ${ dateObj.getDate() } ${ dateObj.getHours() % 12 }:${ minutes } ${ dayClock } `
  },
  render: function() {

    var tweetList = this.props.tweets.map((tweet, index) => {
      return (
        <div className="tweetList" key={ index }>
          <div>{ this.formatDate(new Date(tweet.created_at)) }</div>
          <div>{ tweet.text }</div>
        </div>
      );
    });
    return (
      <div className="stockTweets">
        <h3 className="tweetHeader">Streaming tweets for { this.props.ticker }</h3>
        { tweetList }
      </div>
    );
  }
});

module.exports = StockTweets;
