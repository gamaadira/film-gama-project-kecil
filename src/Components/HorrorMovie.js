import {Container, Card, Row, Col, Image} from 'react-bootstrap'
import BirdBox from "../assests/images/horror/bird box.jpg"
import DeathIsland from "../assests/images/horror/death island.jpg"
import TheMedium from "../assests/images/horror/medium.jpg"
import TheMenu from "../assests/images/horror/menu.jpg"
import RedDoor from "../assests/images/horror/red door.jpg"
import TrainToBusan from "../assests/images/horror/train to busan.jpg"

const HorrorMovie = () => {
    return (
        <Container>
        <br/>
        <h1 className='text-white' id='horror'>HORROR MOVIES</h1>
        <br/>
        <Row>
            <Col md={4} className='movieWrapper' >
            <Card className="bg-dark text-white movieImage">
                <Image src={BirdBox} alt="Stranger Things"  className='images'/>
                     <Card.Title className='text-center p-2 m-1'>Bird Box</Card.Title>
                        <Card.Text className='text-left p-2 m-1'>
                         This is a wider card with supporting text below as a natural lead-in
                         to additional content. This content is a little bit longer.
                        </Card.Text>
                <Card.Text className='text-left p-2 m-1'>Last updated 3 mins ago</Card.Text>
                </Card>
            </Col>
            <Col md={4} className='movieWrapper'>
            <Card className="bg-dark text-white movieImage">
                <Image src={DeathIsland} alt="Stranger Things"  className='images'/>
                     <Card.Title className='text-center p-2 m-1'>Resident Evil : Death Island</Card.Title>
                        <Card.Text className='text-left p-2 m-1'>
                         This is a wider card with supporting text below as a natural lead-in
                         to additional content. This content is a little bit longer.
                        </Card.Text>
                <Card.Text className='text-left p-2 m-1'>Last updated 3 mins ago</Card.Text>
                </Card>
            </Col>
            <Col md={4} className='movieWrapper'>
            <Card className="bg-dark text-white movieImage">
                <Image src={TheMedium} alt="Stranger Things"  className='images'/>
                     <Card.Title className='text-center p-2 m-1'>The Medium</Card.Title>
                        <Card.Text className='text-left p-2 m-1'>
                         This is a wider card with supporting text below as a natural lead-in
                         to additional content. This content is a little bit longer.
                        </Card.Text>
                <Card.Text className='text-left p-2 m-1'>Last updated 3 mins ago</Card.Text>
                </Card>
            </Col>
            <Col md={4} className='movieWrapper'>
            <Card className="bg-dark text-white movieImage">
                <Image src={TheMenu} alt="Stranger Things"  className='images'/>
                     <Card.Title className='text-center p-2 m-1'>The Menu</Card.Title>
                        <Card.Text className='text-left p-2 m-1'>
                         This is a wider card with supporting text below as a natural lead-in
                         to additional content. This content is a little bit longer.
                        </Card.Text>
                <Card.Text className='text-left p-2 m-1'>Last updated 3 mins ago</Card.Text>
                </Card>
            </Col>
            <Col md={4} className='movieWrapper'>
            <Card className="bg-dark text-white movieImage">
                <Image src={RedDoor} alt="Stranger Things"  className='images' />
                     <Card.Title className='text-center p-2 m-1'>Insidious : The Red Door</Card.Title>
                        <Card.Text className='text-left p-2 m-1'>
                         This is a wider card with supporting text below as a natural lead-in
                         to additional content. This content is a little bit longer.
                        </Card.Text>
                <Card.Text className='text-left p-2 m-1'>Last updated 3 mins ago</Card.Text>
                </Card>
            </Col>
            <Col md={4} className='movieWrapper'>
            <Card className="bg-dark text-white movieImage">
                <Image src={TrainToBusan} alt="Stranger Things" className='images'/>
                     <Card.Title className='text-center p-2 m-1'>Train To Busan</Card.Title>
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

export default HorrorMovie