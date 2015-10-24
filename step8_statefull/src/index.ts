/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react'; 

interface TextAreaCounterProps extends React.Props<any> {
  initialText?: string;
}

interface TextAreaCounterState {
	text: string;
}

class TextAreaCounter extends React.Component<TextAreaCounterProps, TextAreaCounterState>{
	
	constructor(props: TextAreaCounterProps) {
    	super(props);
    	this.state = {text: props.initialText};
  	}
	  
	  
	render(){
		return React.DOM.div(null, React.DOM.textarea({
			value: this.state.text,
			onChange: this.textChange.bind(this)
		}), React.DOM.h3(null, this.state.text.length));
	}
	 
	textChange(ev: any) {
		this.setState({
			text: ev.target.value
		});
	}
}

React.render(React.createElement(TextAreaCounter, {initialText: "Bobz" }), 
	document.getElementById("app"));
	

	