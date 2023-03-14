import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


function ModalMovie(props) {
    const [comment, setComment] = useState('');
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }
    
    function handleSave() {
        
        const movie = {
            title: props.clicked.title,
            release_date:props.clicked.release_date,
            poster_path: props.clicked.poster_path,
            overview:props.clicked.overview,
            comment: comment,
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(movie)
        };
        fetch('https://movies-library-lyart.vercel.app/getMovie', requestOptions)
            .then(response => response.json())
            
            props.handleClose();
            
    }




    return (
        <Modal show={props.showFlag}  >
            <Modal.Header closeButton onHide={props.handleClose}>
                <Modal.Title>{props.clicked.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body> <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.clicked.poster_path}`} />
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>add your opinion</Form.Label>
                    <Form.Control as="textarea" rows={3}  onChange={handleCommentChange} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose} >
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave} >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ModalMovie;