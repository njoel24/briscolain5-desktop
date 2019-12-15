import React from 'react';
import { connect } from 'react-redux';
import { playAuction, exitAuction } from '../engine/actions/auction';

class ChoosePoints extends React.Component {
	constructor() {
		super();
	}
	render () {	
		if(this.props.show) {
			return (
				<div>
					<button onClick={ this.props.playAuction.bind(this, 70)}>70</button>
					<button onClick={ this.props.playAuction.bind(this, 75)}>75</button>
					<button onClick={ this.props.playAuction.bind(this, 80)}>80</button>
					<button onClick={ this.props.playAuction.bind(this, 85)}>85</button>
					<button onClick={ this.props.playAuction.bind(this, 90)}>90</button>
					<button onClick={ this.props.playAuction.bind(this, 95)}>95</button>
					<button onClick={ this.props.playAuction.bind(this, 100)}>100</button>
					<button onClick={ this.props.playAuction.bind(this, 105)}>105</button>
					<button onClick={ this.props.playAuction.bind(this, 110)}>110</button>
					<button onClick={ this.props.playAuction.bind(this, 115)}>115</button>
					<button onClick={ this.props.playAuction.bind(this, 120)}>120</button>
					<button onClick={ this.props.exitAuction}>Esci</button>
				</div>
			)
		} else {
			return null;
		}
	}
}

const mapStateToProps = function() {
	return {};
}

const mapDispatchToProps = function(dispatch) {

	return {
		playAuction: (value) => {
			dispatch(playAuction(value));
		},
		exitAuction: () => {
			dispatch(exitAuction());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoosePoints);
