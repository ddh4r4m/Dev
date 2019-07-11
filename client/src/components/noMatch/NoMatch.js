import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import './NoMatch.scss';
import style from './NoMatch.css';
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
      <div style={{ backgroundColor: '#28254c', height: '100vh' }}>
        <div className='box'>
          <div className='box__ghost'>
            <div className='symbol' />
            <div className='symbol' />
            <div className='symbol' />
            <div className='symbol' />
            <div className='symbol' />
            <div className='symbol' />

            <div className='box__ghost-container'>
              <div className='box__ghost-eyes'>
                <div className='box__eye-left' />
                <div className='box__eye-right' />
              </div>
              <div className='box__ghost-bottom'>
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
            <div className='box__ghost-shadow' />
          </div>

          <div className='box__description'>
            <div className='box__description-container'>
              <div className='box__description-title'>Whoops!</div>
              <div className='box__description-text'>
                It seems like we couldn't find the page you were looking for
              </div>
            </div>

            <a href='/login' className='box__button'>
              Go back
            </a>
          </div>
        </div>
      </div>
    );
  }
}
