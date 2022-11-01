import {useParams} from "react-router-dom";

export function User(){
    const {id}:any=useParams()

    return (
        <>
        <h1>Kullanıcı {id}</h1>
            <p>Kullanıcı {id} Hakkında : </p>
            <span style={{color:"red"}}>{id==1?'Kullancıı 1 hakkında açıklama metni':'kullanıcı 2 için metin'}</span>
        </>
    )
}