import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import Applypage from "./applypag";
import Posts from "./Posts";
// import './pagination.css';
import { ThreeDots } from 'react-loader-spinner'
import { data, data1 } from "../App";
const Pagination = () => {

    // const [posts, setPosts] = useState([]);
    // const [loding, setLoding] = useState(false);
    // const [currentPage, setCurrentpage] = useState(1);
    // const [postperPage, setpostperPage] = useState(5);
    // const [input, setInput] = useState('');

    // By Object
    let { posts, loding, currentPage, setCurrentpage, input, setInput } = useContext(data);



    // let [posts, setPosts] = postp;
    // const [loding, setLoding] = loadingP;
    // const [currentPage, setCurrentpage] = currentPageP;
    // const [postperPage, setpostperPage] = postperPageP
    // const [input, setInput] = inputP;
    // let [name] = nameP;
    // console.log(name);
    // console.log(posts)



    //By array
    // let [kapil, array] = posts1;
    // console.log(posts1)

    let { name, age, place, first, firstset } = useContext(data1);
    // console.log(name)
    // console.log(age)
    // console.log(first);
    // console.log(firstset)





    // useEffect(() => {
    //     const fetchData = async () => {
    //         let url = "https://jsonplaceholder.typicode.com/posts";
    //         setLoding(true);
    //         const res = await fetch(url);
    //         const result = await res.json();
    //         setPosts(result);
    //         if (result.length > 0) {
    //             setLoding(false);
    //         }
    //         // console.log(result.length>0)
    //     }
    //     // fetchData();
    // }, []);
    // // console.log(posts)


    // let memo = useMemo(() => {
    //     if (input == "") {
    //         return posts;
    //     }
    //     return posts.filter((cur) => {
    //         return cur.title.includes(input);
    //     })
    // }, [input, posts])
    // console.log(memo)


    // const lastpost = currentPage * postperPage; //we find  last number of post
    // const lastpost = useCallback(() => {
    //     return currentPage * postperPage
    // }, [currentPage])
    // console.log(lastpost())


    // const firstpost = lastpost() - postperPage;
    // const firstpost = useCallback(() => {
    //     return lastpost() - postperPage
    // }, [currentPage])
    // console.log(firstpost());



    // const currentpost = memo.slice(firstpost(), lastpost())
    // ***
    // const currentpost = useCallback(() => {
    //     return memo.slice(firstpost(), lastpost())
    // })
    // **
    // console.log(currentpost())


    const paginate = (pageNumber) => {
        setCurrentpage(pageNumber)
    }

    function Next() {
        if (currentPage === 20) {
            setCurrentpage(1);
        } else {
            setCurrentpage(currentPage + 1);
        }
    }


    function Previous() {
        if (currentPage === 1) {
            setCurrentpage(20);
        } else {

            setCurrentpage(currentPage - 1);
        }
    }
    // const loder = () => {
    //     return (
    //         <>
    //             <h1>KApil</h1>
    //         </>
    //     )
    // }
    // console.log(input);
    {
        if (loding) {
            return (
                <div className="container-fluid  ">
                    <div className="row">
                        <div className="col-10 mx-auto mt-5 ">
                            <ThreeDots color="Black" height={45} width={1150} />
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <>
                    <div className="container-fluid  ">
                        <div className="row">
                            <div className="col-10 mx-auto mt-5 ">
                                <div>
                                    <label for="exampleFormControlInput1" class="form-label">Search Feild</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Search Here"
                                        value={input} onChange={(e) => setInput(e.target.value)}
                                    />
                                    <Posts />
                                    <Applypage
                                        totalpage={posts.length}
                                        paginate={paginate}
                                        Next={Next}
                                        Previous={Previous}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
}
export default Pagination;

