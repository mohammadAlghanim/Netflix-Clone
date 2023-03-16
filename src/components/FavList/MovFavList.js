import Row from 'react-bootstrap/Row';
import FavMov from './FavMov';
function MovFavList(props){
    const setNewArr =(Arr)=>{
        props.setNewArr(Arr);
    }
    const setDelArr =(Arr)=>{
        props.setDelArr(Arr);
    }
return(
    <div>
            <Row xs={1} md={4} className="g-4">
        {props.movie.map((el)=>{
            return(
                <FavMov setDelArr={setDelArr} key={el.id} setNewArr={setNewArr} f={el} />
            )

        })}
        
        </Row>
        </div>
)
}
export default MovFavList;