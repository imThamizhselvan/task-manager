import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default class Twitter extends Component {
  render () {
    return(
      <TwitterTimelineEmbed
        sourceType="timeline"
        screenName="dan_abramov"
        theme="dark"
        options={{height: 620}}
        noScrollbar
      />
    );  
  }
}