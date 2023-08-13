import {Col, Container, Row, Button} from "react-bootstrap"
const Intro = () => {
    return(
        <div className='intro'>
        <Container className='text-white text-center d-flex justify-content-center 
        align-items-center r'>
          <Row>
            <Col>
            <div className='title'>
            Menjejak Realitas Melalui Layar
            </div> 
            <div className='title'>
            Temukan Dunia Baru di Situs Film Kami!
            </div> 
            <div className="IntroButton mt-4 text-center">
                <Button variant="dark">Lihat List</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro