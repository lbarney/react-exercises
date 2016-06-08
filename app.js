var Greeter = React.createClass({
	getInitialState: function(){
		return {
			greeting: ""
		}
	},
	handleChange: function(event){
		this.setState({greeting: event.target.value})
	},
	render: function (){
		return(
		 	<div>
		 		<div>
		 			<input type = "text" value = {this.state.greeting} onChange = {this.handleChange}/>
		 			<h1>Welcome to React, {this.state.greeting}</h1>
		 		</div>
		 	</div>
		 		) 
		}	
});



var HelloWorld = React.createClass({  //HelloWorld Component
       render: function(){
       	return(
       		<div>
       		<h1>Hello World</h1>
       		</div>

       		)
       }
      });

     var Components = React.createClass({  // This is where I put my components in-order to render in the ReactDOM.render
       render: function(){
       	return(
       		<div>
       		<HelloWorld/>
       		<Greeter/>
       		</div>
				)
       }
      }); 



      ReactDOM.render(<Components/>, document.getElementById('root')); // Your are only allowed one render per file. 