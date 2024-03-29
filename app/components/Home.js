var React = require('react');
var ReactRouter = require('react-router');
var transparentBg = require('../styles').transparentBg;
var MainContainer = require('./MainContainer');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className="lead">Some fancy motto</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>
            Get Started
          </button>
        </Link>
      </MainContainer>
    )
  }
});

module.exports = Home;
