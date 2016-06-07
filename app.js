var Greeter = React.createClass({
	render: function (){
		 return(
		 	<div>
		 		<div>
		 			<input type = "text" value = "Name"></input>
		 		</div>
		 	</div>
		 	) 
	}
});



var HelloWorld = React.createClass({
       render: function(){
       	return(
       		<div>
       		<h1>Hello World</h1>
       		</div>

       		)
       }
      });

     var Components = React.createClass({
       render: function(){
       	return(
       		<div>
       		<HelloWorld/>
       		<Greeter/>
       		</div>

       		)
       }
      }); 



      ReactDOM.render(

        <Components/>,
        

        document.getElementById('root')
      );