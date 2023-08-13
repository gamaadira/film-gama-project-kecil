import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import strangerThing from "../assests/images/trending/strangerThings.jpg"
import freeGuy from "../assests/images/trending/free guy.jpg"
import flash from "../assests/images/trending/flash.jpg"
import fastx from "../assests/images/trending/fast x.jpg"
import doctorStrange from "../assests/images/trending/doctorStrange.jpg"
import blackAdam from "../assests/images/trending/black adam.jpg"

const Trending= () => {
    return (
    <Container>
        <br/>
        <h1 className='text-white' id='trending'>TRENDING MOVIES</h1>
        <br/>
        <Row>
            <Col md={4} className='movieWrapper'>
            <Card className="bg-dark text-white movieImage">
                <Image src={strangerThing} alt="Stranger Things"  className='images'/>
                     <Card.Title className='text-center p-2 m-1'>Stranger Things 4</Card.Title>
                        <Card.Text className='text-left p-2 m-1'>
                         This is a wider card with supporting text below as a natural lead-in
                         to additional content. This content is a little bit longer.
                        </Card.Text>
                <Card.Text className='text-left p-2 m-1'>Last updated 3 mins ago</Card.Text>
                </Card>
            </Col>
            <Col md={4} className='movieWrapper'>
            <Card className="bg-dark text-white movieImage">
                <Image src={freeGuy} alt="Stranger Things"  className='images'/>
                     <Card.Title className='text-center p-2 m-1'>FREE GUY</Card.Title>
                        <Card.Text className='text-left p-2 m-1'>
                         This is a wider card with supporting text below as a natural lead-in
                         to additional content. This content is a little bit longer.
                        </Card.Text>
                <Card.Text className='text-left p-2 m-1'>Last updated 3 mins ago</Card.Text>
                </Card>
            </Col>
            <Col md={4} className='movieWrapper'>
            <Card className="bg-dark text-white movieImage">
                <Image src={doctorStrange} alt="Stranger Things"  className='images'/>
                     <Card.Title className='text-center p-2 m-1'>Doctor Strange Multiverse Of Madness</Card.Title>
                        <Card.Text className='text-left p-2 m-1'>
                         This is a wider card with supporting text below as a natural lead-in
                         to additional content. This content is a little bit longer.
                        </Card.Text>
                <Card.Text className='text-left p-2 m-1'>Last updated 3 mins ago</Card.Text>
                </Card>
            </Col>
            <Col md={4} className='movieWrapper'>
            <Card className="bg-dark text-white movieImage">
                <Image src={fastx} alt="Stranger Things"  className='images'/>
                     <Card.Title className='text-center p-2 m-1'>Fast X</Card.Title>
                        <Card.Text className='text-left p-2 m-1'>
                         This is a wider card with supporting text below as a natural lead-in
                         to additional content. This content is a little bit longer.
                        </Card.Text>
                <Card.Text className='text-left p-2 m-1'>Last updated 3 mins ago</Card.Text>
                </Card>
            </Col>
            <Col md={4} className='movieWrapper'>
            <Card className="bg-dark text-white movieImage">
                <Image src={flash} alt="Stranger Things"  className='images' />
                     <Card.Title className='text-center p-2 m-1'>The Flash</Card.Title>
                        <Card.Text className='text-left p-2 m-1'>
                         This is a wider card with supporting text below as a natural lead-in
                         to additional content. This content is a little bit longer.
                        </Card.Text>
                <Card.Text className='text-left p-2 m-1'>Last updated 3 mins ago</Card.Text>
                </Card>
            </Col>
            <Col md={4} className='movieWrapper'>
            <Card className="bg-dark text-white movieImage">
                <Image src={blackAdam} alt="Stranger Things" className='images'/>
                     <Card.Title className='text-center p-2 m-1'>The Black Adam</Card.Title>
                        <Card.Text className='text-left p-2 m-1'>
                         This is a wider card with supporting text below as a natural lead-in
                         to additional content. This content is a little bit longer.
                        </Card.Text>
                <Card.Text className='text-left p-2 m-1'>Last updated 3 mins ago</Card.Text>
                </Card>
            </Col>
        </Row>
    </Container>
    
    )
}
export default Trending