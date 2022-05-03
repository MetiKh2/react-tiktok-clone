import './App.css';
import Video from "./components/video/Video";
import {useEffect, useState} from "react";
import { collection, getDocs,deleteDoc, doc, onSnapshot  } from "firebase/firestore";
import {db} from "./firebase";
function App() {
    const [videos,setVideos]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
          let list=[]
         try{
          const querySnapshot = await getDocs(collection(db, "videos"));
          querySnapshot.forEach((doc) => {
            list.push({id:doc.id,...doc.data()})
          });
          setVideos(list)
          // console.log(list);
         }
         catch(err){
           console.log(err);
         }
        }
        fetchData()
    },[])
  return (
    <div className="App">
        <div className={'app-videos'}>
            {
                videos.map((video,i)=>{
                    return <Video {...video}/>
                })
            }
        </div>
    </div>
  );
}

export default App;
