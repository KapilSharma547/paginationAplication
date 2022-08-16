import React, { useState, useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Pagination from './pagination/Pagination';
import { createContext, useCallback, useMemo } from 'react';


// import Todo from './todolist/Todolist';

let data = createContext();
let data1 = createContext();
function App() {


  const [posts, setPosts] = useState([]);
  const [loding, setLoding] = useState(false);
  const [currentPage, setCurrentpage] = useState(1);
  const [postperPage, setpostperPage] = useState(5);
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      let url = "https://jsonplaceholder.typicode.com/posts";
      setLoding(true);
      const res = await fetch(url);
      const result = await res.json();
      setPosts(result);
      if (result.length > 0) {
        setLoding(false);
      }
      // console.log(result.length>0)
    }
    fetchData();
  }, []);

  let [p, setP] = useState(false)


  let memo = useMemo(() => {
    if (input == "") {
      return posts;
    }
    return posts.filter((cur) => {
      let data = cur.title.includes(input);
      return data;
    })
  }, [input, posts])
  // console.log(memo);

  // let Data = useMemo(() => {
  //   // console.log(memo)
  //   let len = memo.length;
  //   if (len > 0) {
  //     setP(true)
  //   }
  //   if (len <= 0) {
  //     setP(false)
  //   }
  // }, [memo])
  // // console.log(p)



  // let memo = useMemo(() => {
  //   if (input == "") {
  //     return posts;
  //   }
  //   return posts.filter((cur) => {
  //     return cur.title.includes(input);
  //   })
  // }, [input, posts])


  //

  const lastpost = useCallback(() => {
    return currentPage * postperPage
  }, [currentPage])

  const firstpost = useCallback(() => {
    return lastpost() - postperPage
  }, [currentPage])



  const currentpost = useCallback(() => {
    return memo.slice(firstpost(), lastpost())
  })
  // console.log(currentpost());




  let name = "Kapil Sharma";
  let age = 24;
  let place = "Nfl Vijaypur";

  return (
    <div className="App">
      <data.Provider value={{
        posts: posts,
        setposts: setPosts,
        loding: loding,
        setLoding: setLoding,
        currentPage: currentPage,
        setCurrentpage: setCurrentpage,
        postperPage: postperPage,
        setpostperPage: setpostperPage,
        input: input,
        setInput: setInput,
        currentpost: currentpost,
      }}>
        <data1.Provider value={{
          // first: posts,
          // firstset: setPosts,
        }}>
          <Pagination />
        </data1.Provider>
      </data.Provider  >


    </div >
  );
}
export { data, data1 }
export default App;


///Provide the data

{/* <data.Provider value={{
  // postp: [posts, setPosts],
  posts: posts,
  postsSet: setPosts,

  // loadingP: [loding, setLoding],
  currentPageP: [currentPage, setCurrentpage],
  postperPageP: [postperPage, setpostperPage],
  inputP: [input, setInput],
  nameP: name,
  currentpostP: [currentpost]
}}> */}

//Geting the datta each child componant
// let { posts, postsSet, postp, loadingP, currentPageP, postperPageP, inputP, nameP } = useContext(data);
    // let [posts, setPosts] = postp;
    // const [loding, setLoding] = loadingP;
    // const [currentPage, setCurrentpage] = currentPageP;
    // const [postperPage, setpostperPage] = postperPageP
    // const [input, setInput] = inputP;
    // let [name] = nameP;
    // console.log(name);
    // console.log(posts)