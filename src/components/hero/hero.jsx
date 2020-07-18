import React, { Component } from 'react'
import Profile from '../profilecard/profilecard'
import '../hero/hero.css'
import {
  Container,
  Accordion,
  Alert,
  Modal,
  Card,
  Badge
} from 'react-bootstrap';


//import { stat } from 'fs'

import axios from 'axios'
import { isTemplateElement } from '@babel/types';




export default class hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      districtdata: [],
      parties: [{PARTY_NAME:'පලමුව දිස්ත්‍රික්කය තෝරන්න', PARTY_ID:0}],
      //district selection
      selectedDID: 0,
      selectedDNAME: '',
      //party selection
      selectedPID: 0,
      selectedPNAME: '',
      //party Members array
      partyMembers: [],
      //modal option
      show: false,
      candidateName: '',
      candidateId: 0,
      candidateParty: ''
    }
  }
  componentDidMount() {

    axios.get('https://janawarama.helakuru.lk/api/election/district', { headers: { 'api-key': '0d9e15c7-3189-4402-8e3f-e5073ff00281' } })
      .then(response => {
        console.log(response)
        this.setState({
          districtdata: response.data.data
        });

      })
      .catch(error => console.log(error.response));

    axios.get('https://janawarama.helakuru.lk/api/election/candidates',
      {
        headers: { 'api-key': '0d9e15c7-3189-4402-8e3f-e5073ff00281' },
        params: {
          'district_id': this.state.selectedDID


        }

      })
      .then(response => {
        console.log(response)
        this.setState({
          parties: response.data.data
        });

      })
      .catch(error => console.log(error.response));



  }

  //clickedOnDistrict function
  clickedOnDistrict(e, name) {
    this.setState({
      selectedDID: e,
      selectedDNAME: name,
      selectedPID: 0,
      partyMembers: []
    },
      () => {
        axios.get('https://janawarama.helakuru.lk/api/election/candidates',
          {
            headers: { 'api-key': '0d9e15c7-3189-4402-8e3f-e5073ff00281' },
            params: {
              'district_id': this.state.selectedDID


            }

          })
          .then(response => {
            console.log(response)
            this.setState({
              parties: response.data.data
            });

          })
          .catch(error => console.log(error.response));
        this.getCandidates();

      }
    );


  }
  //clicked on party function
  clickedOnParty(e, name) {

    this.setState({
      selectedPID: e,
      selectedPNAME: name
    },
      () => {
        this.getCandidates();

      }
    );

  }

  getCandidates() {
    //if district is selected
    if (this.state.selectedDID != 0 && this.state.selectedPID != 0) {

      axios.get('https://janawarama.helakuru.lk/api/election/candidates', {
        headers: {
          'api-key': '0d9e15c7-3189-4402-8e3f-e5073ff00281',

        },
        params: {
          'party_id': this.state.selectedPID,
          'district_id': this.state.selectedDID


        }
      })
        .then(response => {
          console.log(response.data.data[0]);
          if(response.data.data == null)
          {
            alert("null alert");
          }
          this.setState({
            partyMembers: response.data.data[0].PARTY_CANDIDATES,
            candidateParty: response.data.data[0].PARTY_LOGO
          },
            () =>
              console.log(this.state.partyMembers));

        })
        .catch(error => console.log(error.response));
    }
  }
  handleClose = () => {
    this.setState({ show: false });
  }
  handleOpen(e) {
    this.setState(
      {
        candidateId: e.C_NUMBER,
        candidateName: e.C_NAME,

        show: true


      });
  }



  render() {

    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">චන්ද අපේක්ශකයන් පිලිබද නිවැරදි තොරතුරු දැනගනිමු</h1>
            <p className="lead">Powered By Janawarama API</p>
            <div className="btn-group">
            <div className="dropdown">
                <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-9.5 3h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.793L5.854 5.146a.5.5 0 1 0-.708.708L9.293 10H6.5a.5.5 0 0 0 0 1z" />
                  </svg> &nbsp;
                  {this.state.selectedDID != 0 ? this.state.selectedDNAME :
                    'දිස්ත්‍රික්කය තොරන්න'

                  }
                </button>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {
                    this.state.districtdata.map(data =>
                      (
                        <a onClick={() => this.clickedOnDistrict(data.D_ID, data.D_NAME)} key={data.D_ID} className='dropdown-item' href="#" value={data.D_NAME}>
                          {data.D_NAME}
                        </a>
                      ))
                  }
                </div>

              </div>

              <div className="dropdown">

                <button  className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-brightness-high-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                    <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                  </svg> &nbsp;
                  {this.state.selectedPID != 0 ? this.state.selectedPNAME :
                    'පක්ශය තොරන්න'}
                </button>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {this.state.parties.map(data =>
                    (
                      <a onClick={() => this.clickedOnParty(data.PARTY_ID, data.PARTY_NAME)} key={data.PARTY_ID} className='dropdown-item' href="#" value={data.PARTY_NAME}>
                        <img src={data.PARTY_LOGO} width="30px" height="30px">
                        </img>
                        {data.PARTY_NAME}
                      </a>))}
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm">
              {Profile}

              <Container>
                <Accordion>

                  {
                    this.state.partyMembers.map(
                      (member) => (
                        <div>
                          <Alert cla onClick={() => this.handleOpen(member)} key={member.C_ID} variant='primary'>
                          {member.C_NAME}
                          </Alert>



                        </div>



                      )
                    )
                  }

                </Accordion>
                <Modal

                  show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>

                  </Modal.Header>
                  <Card style={{ width: '31rem' }}>
                    <Card.Img variant="top"  src={this.state.candidateParty} />
                    <Card.Body>
                      <Card.Title>{this.state.candidateName}</Card.Title>
                      <Card.Text>
                        <h4>
                          මනාප අංකය
                          <Badge variant="success">{this.state.candidateId}</Badge>
                        </h4>

                      </Card.Text>

                    </Card.Body>
                  </Card>
                </Modal>

              </Container>
            </div>
          </div>

        </div>
      </div>


    )
  }
}
