import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, CardColumns, ListGroup, ListGroupItem} from 'react-bootstrap'
import girl from '../SEG/girl.jpg'
import dude from '../SEG/dude.jpg'
import monic from '../SEG/monic.png'

const Home = () =>{
    return(
        <div className="container center p-3 my-3 border bg-light text-primary bg-primary">
            <h4 className="center"></h4>

            <div className="container p-3 my-3 border bg-light text-success bg-primary">
            <h3 class="text-center">Our Expertise</h3>
            <h6 class="text-center text-primary">We have highly-trained employees who are able to provide whatever hair style 
            you need. Trained with different tools and hair types, they adapt 
        very quickly to satisfy you hair needs.</h6>
            </div> 

            <div className="container ">
                <h3 class="text-success">Meet Our Hairdressers</h3>
                
                <CardColumns>
                <Card border="info" style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{height: "230px"}} src={dude} />
                <Card.Body >
                    <Card.Title>Major</Card.Title>
                    <Card.Text >
                    Major has been specialising in hair dressing for years.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-hover">
                    <ListGroupItem>Men, Women and Children Cuts</ListGroupItem>
                    <ListGroupItem>Blow Drying and Styling</ListGroupItem>
                    <ListGroupItem>Hair Coloring</ListGroupItem>
                    <ListGroupItem>Straightening and Curling</ListGroupItem>
                </ListGroup>
                </Card>

                <Card border="info" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={girl} />
                <Card.Body style={{text: "blue"}}>
                    <Card.Title>Blaire</Card.Title>
                    <Card.Text >
                    The curly hair specialist. Can tackle any given hair type or texture.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Men, Women and Children Cuts</ListGroupItem>
                    <ListGroupItem>Blow Drying and Styling</ListGroupItem>
                    <ListGroupItem>Braids</ListGroupItem>
                    <ListGroupItem>Wig Attachments</ListGroupItem>
                </ListGroup>
                </Card>

                <Card border="info" style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{height: "230px"}} src={monic} />
                <Card.Body style={{text: "blue"}}>
                    <Card.Title>Monique</Card.Title>
                    <Card.Text >
                    Her hair styling is as unique as her name.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Straightening and Curling</ListGroupItem>
                    <ListGroupItem>Blow Drying and Styling</ListGroupItem>
                    <ListGroupItem>Braids</ListGroupItem>
                    <ListGroupItem>Hair Coloring</ListGroupItem>
                </ListGroup>
                </Card>
                </CardColumns>

            </div>
            
            {/*<div className="container p-3">
                <h2>Meet our hairdressers</h2>
                <div className="card-columns">
                    <div className="card bg-success" style="width:200px">
                        <img className="card-img-top" src={dude} alt="Card image" style="width:100%"/>
                        <div className="card-body">
                            <h4 class="card-title">Major</h4>
                            <p class="card-text">Major has been specialising in hair dressing for years.</p>
                            <a href="#profile" class="btn btn-primary" data-toggle="collapse">Areas of Expertise</a>
                            <div id="profile" className="collapse p-3 text-light">
                                <p> Men, Women and Children Cuts<br/> Blow Drying and Styling<br/> Hair Coloring<br/> Straightening and Curling</p>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-success" style="width:200px">
                        <img class="card-img-top" src={girl} alt="Card image" style="width:100%; "/>
                        <div class="card-body">
                            <h4 class="card-title">Blaire</h4>
                            <p class="card-text">The curly hair specialist. Can tackle any given hair type or texture.</p>
                            <a href="#profile" class="btn btn-primary" data-toggle="collapse">Areas of Expertise</a>
                            <div id="profile" class="collapse p-3 text-light">
                                <p> Men, Women and Children Cuts<br/> Blow Drying and Styling<br/> Braids<br/> Wig Attachments</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-success" style="width:200px">
                        <img className="card-img-top" src={monic} alt="Card image" style="width:100%; "/>
                        <div className="card-body">
                            <h4 class="card-title">Monique</h4>
                            <p class="card-text">Her hair styling is as unique as her name.</p>
                            <a href="#profile" class="btn btn-primary" data-toggle="collapse">Areas of Expertise</a>
                            <div id="profile" className="collapse p-3 text-light">
                                <p> Straightening and Curling<br/> Blow Drying and Styling<br/> Braids<br/> Wig Attachments and Extensions<br/> Hair Coloring</p>
                            </div>
                        </div>
                    </div>
                </div>
    </div>*/}
    </div>
    )
}

export default Home