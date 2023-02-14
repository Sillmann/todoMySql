import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../App.css'

function MainPage() {

const [postList,setPostList] = useState([]);

let history = useNavigate();

useEffect(()=>{
Axios.get("http://localhost:3002/api/get").then((data)=>{
    console.log(data)
    console.log('useEffect')
    setPostList(data.data)
});
},[])

const LikePost = (id) => {
Axios.post(`http://localhost:3002/api/like/${id}`).then((response)=>{
    alert("you liked a post")
})
}

    return (
        <div className="MainPage">
            <ul>
                {Object.keys(postList).map(lin=>{
                    return (
                    <li>
                        <div className="Post" >
                            <h1>teste</h1>
                            <p>{postList[lin]}</p>

                        </div>
                    </li>    
                    )
                },[postList])}
            </ul>
              
        </div>
    )
}

export default MainPage