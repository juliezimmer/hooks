import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
   // initializes state as an empty array
   // the variable 'resources' provides access to the initial state.
   // setResources is used to change the state object
   const [resources, setResources] = useState([]);

   // everytime ResourceList is rendered to the screen or is updated, the inner function in useEffect() runs. 
   useEffect(() => {
      (async resource => {
         const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

         setResources(response.data);
      })(resource); 
   }, [
   resource] 
   );
      
   
   return (
      <ul>
         {resources.map(record => (
            <li key={record.id}>{record.title}</li>))}
      </ul>
   );
};
export default ResourceList;  