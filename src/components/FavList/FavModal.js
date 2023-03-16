import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


function FAvModal(props) {
    const [comment, setComment] = useState('');
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }
    
    
    const handleSave = async ()=> {
        
        const movie = {
            title: props.clicked.title,
            release_date:props.clicked.release_date,
            poster_path: props.clicked.poster_path,
            overview:props.clicked.overview,
            comment: comment,
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(movie)
        };
        const response = await fetch(`https://movies-library-lyart.vercel.app/updateMovie/${props.clicked.id}`, requestOptions)
        const data = await response.json();
        props.setNewArr(data);
            
            props.handleClose();

            
    }




    return (
        <Modal show={props.showFlag}  >
            <Modal.Header closeButton onHide={props.handleClose}>
                <Modal.Title>{props.clicked.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body> <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.clicked.poster_path}`} />
                <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1">
                    
                    <Form.Label>update your opinion</Form.Label>
                    <Form.Control as="textarea" defaultValue={props.clicked.comment} rows={3}  onChange={handleCommentChange} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose} >
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave} >
                    update Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default FAvModal;