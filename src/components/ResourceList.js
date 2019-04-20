import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResourceList = () => {
   // initializes state as an empty array
   // the variable 'resources' provides access to the initial state.
   // setResources is used to change the state object
   const [resources, setResources] = useState([]);

   const fetchResource = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
      this.setState({ resources: response.data });
   }
   
   return (
      <div>{resources.length}</div>
   );
   
}
export default ResourceList;  