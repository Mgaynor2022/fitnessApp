import React, {useState, useContext} from 'react'
import { UserContext } from '../context/userProvider'


export default function UserComments(props){

    const {comments, addComments, btnText} = props

    const [commentInputs, setCommentsInputs] = useState({
        text:"",
        date:"",
        likes,
        dislikes
    })
     
    function handleChange(e){
        const {name, value} = e.target
        setCommentsInputs(prevInput => ({
            ...prevInput,
            [name]:value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addComments(comments)
        setCommentsInputs(commentInputs)
    }


    const {text, date} = commentInputs

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        name="text"
                        value={text}
                        onChange={handleChange}
                        placeholder="Write A Comment"
                    />
                    <input 
                        name="date"
                        value={date}
                        onChange={handleChange}
                        placeholder="Date"/>
                </div> 

                <div>
                    <button>{btnText}</button>
                </div>
                <div>
                    <button>Like</button>
                    <button>DisLike</button>
                    
                </div>
                 
            </form>
        </div>
    )


}