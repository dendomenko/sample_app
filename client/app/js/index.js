var React = require('react');
var ReactDOM = require('react-dom');

var divStyle = {
    backgroundColor: 'white'
};

var d = 'dasd';

var imageStyle = {
    width: '250px'
};

var Hello = React.createClass({
    render: function () {
        return (
            <div className="jumbotron" style={divStyle}>
                <img
                    src={'https://octodex.github.com/images/spidertocat.png'}
                    alt="Spidertocat"
                    className="img-responsive center-block"
                    style={imageStyle}/>
                <h2 className="text-center">Hello World! DEV3L - v1.3</h2>
            </div>
        );
    }
});

console.log('daasdasdas');

ReactDOM.render(
    <Hello/>, document.getElementById('root'));
