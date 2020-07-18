import React, { Component } from 'react'
import { DropdownButton } from 'react-bootstrap';

//import { stat } from 'fs'

import axios from 'axios'




export default class hero extends Component {
  constructor(){
    super();

    this.state={
      districtdata : []
    }
  }
  componentDidMount(){
    axios.get('https://janawarama.helakuru.lk/api/election/district',{headers:{'api-key': '0d9e15c7-3189-4402-8e3f-e5073ff00281'}})
    .then(response =>{
      console.log(response)
      this.setState({
        districtdata:response.data
      });
      
    })
    .catch(error => console.log(error.response));
  }
    render() {

        return (
              <div>
              <div class="jumbotron jumbotron-fluid">
                <div class="container">
                  <h1 class="display-4">චන්ද දායකයන් පිලිබද නිවැරදි තොරතුරු දැනගනිමු</h1>
                  <p class="lead">Powered By Janawarama API</p>
                </div>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col-sm">
                  
                  </div>
                  <div class="col-sm">
                  
                  </div>
                  </div>
                  <div class="col-sm">
                  <div class="dropdown">
                    
                  </div>
                  </div>
                </div>
              </div>
              
            
        )
    }
}
