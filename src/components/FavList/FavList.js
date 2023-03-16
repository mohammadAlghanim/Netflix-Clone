import { useEffect, useState } from "react";
import MovFavList from "./MovFavList";
// import card from ''
function FavList(){
    const [movArr, setMovArr] = useState([]);
    const sendReq = async () => {
      const serverURL = `https://movies-library-lyart.vercel.app/getMovie`;
      const response = await fetch(serverURL);
      const data = await response.json();
      setMovArr(data);
    };


    const setNewArr =(Arr)=>{
        setMovArr(Arr);
    }
    const setDelArr =(Arr)=>{
        setMovArr(Arr);
    }
    
    useEffect(() => {
      sendReq();
    }, []);
    return (
      <div>
        <MovFavList setNewArr={setNewArr} setDelArr={setDelArr} movie={movArr} />
      </div>
    );
}
export default FavList;
