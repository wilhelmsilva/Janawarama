import React, { Component } from 'react'
import '../profilecard/profilecard.css'

export default class parties extends Component {
    
    render() {
        return (
            <div>
                        <div class="profile-card-4 text-center"><img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg" alt="img" class="img img-responsive"/>
                            <div class="profile-content">
                                <div class="profile-name">John Doe
                                    <p>@johndoedesigner</p>
                                </div>
                                <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                                <div class="row">
                                    <div class="col-xs-4">
                                        <div class="profile-overview">
                                            <p>TWEETS</p>
                                            <h4>1300</h4></div>
                                    </div>
                                    <div class="col-xs-4">
                                        <div class="profile-overview">
                                            <p>FOLLOWERS</p>
                                            <h4>250</h4></div>
                                    </div>
                                    <div class="col-xs-4">
                                        <div class="profile-overview">
                                            <p>FOLLOWING</p>
                                            <h4>168</h4></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    

            </div>
        )
    }
}
