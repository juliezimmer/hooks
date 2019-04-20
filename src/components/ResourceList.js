import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {
   state = {
      resources : []
   };
   // called only once when component initially renders itself.
   async componentDidMount(){
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
      
      this.setState({ resources: response.data}); 
   }
   
   async componentDidUpdate(prevProps){
      //this.props.resource is the current props object that the component is being rendered with.
      if(prevProps.resource !== this.props.resource){
         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource    }`);

         this.setState({ resources: response.data });
      }
   }

   render(){
      return (
         <div>{this.state.resources.length}</div>
      );
   }
}
export default ResourceList;  