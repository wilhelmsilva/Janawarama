import React, { Component } from 'react'
import Profile  from '../profilecard/profilecard'


//import { stat } from 'fs'

import axios from 'axios'
import { isTemplateElement } from '@babel/types';




export default class hero extends Component {
  constructor(props){
    super(props)
    this.state = {
      districtdata : [],
      parties:[]}
  }
  componentDidMount(){
    
    axios.get('https://janawarama.helakuru.lk/api/election/district',{headers:{'api-key': '0d9e15c7-3189-4402-8e3f-e5073ff00281'}})
    .then(response =>{
      console.log(response)
      this.setState({
        districtdata:response.data.data
      });
      
    })
    .catch(error => console.log(error.response));

    axios.get('https://janawarama.helakuru.lk/api/election/parties',{headers:{'api-key': '0d9e15c7-3189-4402-8e3f-e5073ff00281'}})
    .then(response =>{
      console.log(response)
      this.setState({
        parties:response.data.data
      });
      
    })
    .catch(error => console.log(error.response));
  }

  
    render() {

        return (
              <div>
              <div class="jumbotron jumbotron-fluid">
                <div class="container">
                  <h1 class="display-4">චන්ද අපේක්ශකයන් පිලිබද නිවැරදි තොරතුරු දැනගනිමු</h1>
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
                      {this.state.districtdata.map(data =>(<a className='dropdown-item'  href="#" value={data.D_NAME}>{data.D_NAME}</a>))}
                    </div>
                    
                  </div>

                  
                  
                  </div>
                  <div class="col-sm">
                  <div class="dropdown">
                    
                    <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-brightness-high-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
                      <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                    </svg> &nbsp;
                    පක්ශය තොරන්න
                    </button>
                    
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {this.state.parties.map(data =>(<a key='party' className='dropdown-item' href="#" value={data.PARTY_NAME}><img src={data.PARTY_LOGO} width="30px" height="30px"></img> {data.PARTY_NAME}</a>))}
                    </div>
                    
                  </div>
                  </div>
                  <div class="col-sm">
                    {Profile}
                  </div>
                  </div>
                  
                </div>
              </div>
              
            
        )
    }
}
