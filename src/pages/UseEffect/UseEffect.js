import { useEffect, useState} from "react";
import Resize from "./Resize";
// import Timer from "./Timer";
import PreviewAvatar from "./PreviewAvatar";
import FakeChatApp from "./FakeChatApp";

const tabs =['posts', 'comments', 'albums'];

function UseEffect() {
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts');
  const [showGoToTop, setShowGoToTop] = useState(false);

 
  // useEffect(() =>{
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => res.json())
  //   .then(posts => {
  //     setPosts(posts);
  // })
  // })

  // useEffect(() =>{
  //   fetch(`https://jsonplaceholder.typicode.com/posts`)
  //   .then(res => res.json())
  //   .then(posts => {
  //     setPosts(posts);
  // })
  // }, [])

  useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(res => res.json())
    .then(posts => {
      setPosts(posts);
  })
  }, [type])

  useEffect(() =>{
    const handleScroll = () =>{
      if(window.scrollY >= 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
        // setShowGoToTop(window.scrollY >= 200) 
    }
   window.addEventListener('scroll', handleScroll);
   // Cleanup Function
   return () =>{
    window.removeEventListener('scroll', handleScroll);
   }
  },[])
  

  return (
    <div className="UseEffect" style={{padding: 32}}>
      <Resize/>
      {/* <Timer/> */}
      <PreviewAvatar/>
      <FakeChatApp/>

      {tabs.map(tab =>(
        <button key = {tab}
        style ={type === tab ? {
          color: '#fff',
          backgroundColor: '#333'
        } : {}}
        onClick={() => setType(tab)}>{tab}</button>
      ))}
      <input
        value={title}
        onChange ={e => setTitle(e.target.value)} 
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}

      {showGoToTop && (
          <button
            style={{
              position: 'fixed',
              right: 20,
              bottom: 20,
            }} 
          >Go to Top</button>
        )}
        
      </ul>
    </div>

    
  );
}

export default UseEffect;
