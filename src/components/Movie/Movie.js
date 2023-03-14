import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ModalMovie from '../ModalMovie/ModalMovie';

function Movie(props){

    const [showFlag,setShowFlag] = useState(false);
    const [clickedMovie,setClickedMovie]= useState({});
    const handleShow = ()=>{
        setClickedMovie(props.m);

        setShowFlag(true);

    }
    const handleClose = ()=>{
        setShowFlag(false);

    }
return(
    <div>
    <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.m.poster_path}`} />
                <Card.Body>
                    <Card.Title>{props.m.title}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>Save Movie</Button>
                </Card.Body>
            </Card>
        </Col>
        <ModalMovie showFlag={showFlag} handleClose={handleClose} clicked={clickedMovie}/>
        </div>
)
}
export default Movie;