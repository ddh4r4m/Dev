import React, { Component } from 'react';
import $ from 'jquery';
import './NoMatch.scss';
export default class NoMatch extends Component {
  componentDidMount() {
    //based on https://dribbble.com/shots/3913847-404-page

    var pageX = $(document).width();
    var pageY = $(document).height();
    var mouseY = 0;
    var mouseX = 0;

    $(document).mousemove(function(event) {
      //verticalAxis
      mouseY = event.pageY;
      var yAxis = ((pageY / 2 - mouseY) / pageY) * 300;
      //horizontalAxis
      mouseX = event.pageX / -pageX;
      var xAxis = -mouseX * 100 - 100;

      $('.box__ghost-eyes').css({
        transform: 'translate(' + xAxis + '%,-' + yAxis + '%)'
      });

      //console.log('X: ' + xAxis);
    });
  }

  render() {
    return (
      <div class='box'>
        <div class='box__ghost'>
          <div class='symbol' />
          <div class='symbol' />
          <div class='symbol' />
          <div class='symbol' />
          <div class='symbol' />
          <div class='symbol' />

          <div class='box__ghost-container'>
            <div class='box__ghost-eyes'>
              <div class='box__eye-left' />
              <div class='box__eye-right' />
            </div>
            <div class='box__ghost-bottom'>
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div class='box__ghost-shadow' />
        </div>

        <div class='box__description'>
          <div class='box__description-container'>
            <div class='box__description-title'>Whoops!</div>
            <div class='box__description-text'>
              It seems like we couldn't find the page you were looking for
            </div>
          </div>

          <a href='/login' class='box__button'>
            Go back
          </a>
        </div>
      </div>
    );
  }
}
