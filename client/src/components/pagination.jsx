import React, {useContext, useState, useEffect} from 'react'
import { UserContext } from '../context/userProvider'


export default function Pagination(){

    const {
        currentPage,
        setCurrentPage,
        dataLength,
        numberPerPage} = useContext(UserContext)

    const [pageNumberList, setPageNumberList] = useState(5)
    const [maxPage, setMaxPage] = useState(5)
    const [minPage, setMinPage] = useState(0)

   
    // Getting the number of pages 
    let pages = []
    for(let i = 1; i <= Math.ceil(dataLength / numberPerPage); i++){
        pages.push(i)
    }
    
    function nextPageSet(){
        setCurrentPage(currentPage + 1)

        if(currentPage + 1 > maxPage){
            setMaxPage(maxPage + pageNumberList)
            setMinPage(minPage + pageNumberList)
        }
    }
    function prevPage(){
        setCurrentPage(currentPage - 1)

    if((currentPage - 1) % pageNumberList == 0 ){
        setMaxPage(maxPage - pageNumberList)
        setMinPage(minPage - pageNumberList)
        }
    }
    let pageIncrementBtn = null
    if(pages.length > pageNumberList){
        pageIncrementBtn = <button className='m-2'>&hellip;</button>
    }
    let pageDecrementBtn = null
    if(minPage >= 1){
        pageDecrementBtn = <button className='m-2'>&hellip;</button>
    }

    let nextButton = null
    if(pages.length > 1){
        nextButton = <button onClick={nextPageSet}>Next</button>
    }
    let previousButton = null
    if(minPage >= 1){
        previousButton = <button onClick={prevPage}>Previous</button>
    }
 

    return (
        <div id='' className='text-sm m-10 flex justify-center'>
            {previousButton}
            {pageDecrementBtn}
            {pages.map((page) => {
                if(page <= maxPage && page > minPage){
                    return (
                        <button className={currentPage == page ? "active" : null}
                            id='page--btn'
                            onClick={() => setCurrentPage(page)} >
                            {page}
                        </button>
                    )

                } else {
                    return null
                }
            })}
            {pageIncrementBtn}
            {nextButton}
           
        </div>
    )


}

