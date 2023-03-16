import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import FAvModal from './FavModal';

function FavMov(props){
    const [showFlag,setShowFlag] = useState(false);
    const [clickedMovie,setClickedMovie]= useState({});
    const handleShow = ()=>{
        setClickedMovie(props.f);

        setShowFlag(true);

    }
    const handleClose = ()=>{
        setShowFlag(false);

    }
    const setNewArr =(Arr)=>{
        props.setNewArr(Arr);
    }

    const handleDlete = async()=>{
      
        const requestOptions = {
            method: 'DELETE',
            
        };
        const response = await fetch(`https://movies-library-lyart.vercel.app/deleteMovie/${props.f.id}`, requestOptions)
        const data = await response.json();
        props.setDelArr(data);
            
           


    }
return(
    <div>
    <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.f.poster_path}`} />
                <Card.Body>
                    <Card.Title>{props.f.title}</Card.Title>
                    <Card.Text>{props.f.overview}

                    </Card.Text>
                    <Card.Text>{props.f.comment}

                    </Card.Text>
                    <Button variant="danger" onClick={handleDlete}>Delete</Button>
                    <Button variant="success" onClick={handleShow}>update</Button>
                </Card.Body>
            </Card>
        </Col>
        <FAvModal showFlag={showFlag} setNewArr={setNewArr} handleClose={handleClose} clicked={clickedMovie}/>
        </div>
)

}
export default FavMov;