import {Link} from "react-router-dom";

export default function Users() {


    return(
        <>
            <hr></hr>
               <Link to={"/users/1"}>Kullanıcı 1</Link><br></br>
                <Link to={"/users/2"}>Kullanıcı 2</Link>
            <hr></hr>
        </>
    )
}