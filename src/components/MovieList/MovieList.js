
import Movie from '../Movie/Movie';
import Row from 'react-bootstrap/Row';
function MovieList(props) {
    return (
        <div>
            <Row xs={1} md={4} className="g-4">
        {props.movie.map((el)=>{
            return(
                <Movie m={el} />
            )

        })}
        
        </Row>
        </div>
    )

}
export default MovieList;