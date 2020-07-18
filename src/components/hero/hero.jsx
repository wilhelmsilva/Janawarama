import React, { Component } from 'react'


//import { stat } from 'fs'

import axios from 'axios'




export default class hero extends Component {
  state={
    districtdata : [
      
    ]
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
                  
                  <div class="dropdown">
                    <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-9.5 3h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.793L5.854 5.146a.5.5 0 1 0-.708.708L9.293 10H6.5a.5.5 0 0 0 0 1z"/>
                    </svg> &nbsp;
                      දිස්ත්‍රික්කය තොරන්න
                    </button>
                    
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {this.state.districtdata.map(data =>(<a class='dropdown-item' href="#" value={data?.D_NAME}>{data.D_NAME}</a>))}
                      
                    </div>
                  </div>

                  
                  
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
