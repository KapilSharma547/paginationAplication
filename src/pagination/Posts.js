import React, { useContext } from "react";
import { data } from "../App";
const Posts = () => {

    //get function 
    let { currentpost } = useContext(data);
    let Posts = currentpost();
    // console.log(Posts)


    if (Posts.length > 0) {
        return (

            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Posts</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            Posts.map((cur) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{cur.id} </th>
                                            <td>{cur.title} </td>
                                            <td>{cur.body} </td>
                                        </tr>

                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    } else {
        return (
            <>
                <div className="container-fluid  ">
                    <div className="row">
                        <div className="col-10 mx-auto mt-5 ">
                            <h1>"No Data Found"</h1>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Posts;