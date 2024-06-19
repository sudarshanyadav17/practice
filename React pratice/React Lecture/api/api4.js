
import {useState, useEffect} from 'react';

const ApiFour=()=>{

    let [allAlbums,updateAlbum] = useState([]);

    const getAlbum=()=>{
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response=>response.json())
        .then(albumArray=>{
            updateAlbum(albumArray);
        })
    }

    useEffect(()=>{
        getAlbum();
    },[])

    return(
        <div className='container'>
            <h1 align="center"> Available Albums : {allAlbums.length} </h1>
            {
                allAlbums.map((album,index)=>{
                    return(
                        <div className='two' key={index}>
                        <p>{album.title}</p>
                         </div>
                    )
                })
            }
        </div>
    )
}
export default ApiFour;