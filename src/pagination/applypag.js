import React, { useContext } from "react";
import { data } from "../App";

const Applypage = ({ totalpage, paginate, Next, Previous }) => {

    let { currentpost, postperPage } = useContext(data);
    // let [currentpost] = currentpostP;
    // let [postperPage] = postperPageP;
    let Posts = currentpost(); //=> This is only 5 posts we selected
    // console.log(Posts);

    const PageNumber = [];
    let numberofPage = totalpage / postperPage;
    // console.log(numberofPage)
    for (let i = 1; i <= numberofPage; i++) {
        PageNumber.push(i);
    }
    // console.log(PageNumber);




    if (Posts.length > 0) {
        return (
            <>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled" onClick={() => Previous()}>

                            <a className="page-link" href="#">Previous</a>
                        </li>
                        {PageNumber.map((number) =>
                            <li className="page-item" key={number}>
                                <a className="page-link" href="#" onClick={() => paginate(number)}>
                                    {number}
                                </a>
                            </li>
                        )

                        }
                        <li className="page-item" onClick={() => Next()}>
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>

                {/* <ul id="apply">
                    <button onClick={() => Previous()}>-</button>
                    {PageNumber.map((number) =>
                        <li key={number} id="item">
                            <a onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    )}
                    <button onClick={() => Next()}>+</button>

                </ul> */}
            </>
        )
    }

}
export default Applypage;