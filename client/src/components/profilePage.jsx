import React, {useEffect, useContext} from 'react'
import { UserContext } from '../context/userProvider'
import ExerciseList from './exerciseList'
import PostExercise from './postForm'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'



export default function UserProfile(){
    const {user: {username},
     exercises, 
     addExercise, 
     deleteExercise, 
     getUserExercise,
     likeExercise,
     dislikeExercise
     
    } = useContext(UserContext)

    useEffect(() => {
        getUserExercise()
    },[])

    const slideLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    
    return (
        <div class='grid gap-2 grid-cols-2 grid-rows-1'>
            <div class='grid col-start-2 col-end-4 place-content-center'>
                <PostExercise addExercise={addExercise}/>
            </div>
            <div class='grid col-start-1 col-end-2 row-start-1 row-end-4 '>
                <img class='m-10 object-contain'
                src='https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=1400'/>
            </div>
            <div class='col-start-1 col-end-3'>
                <div class='relative flex items-center'>
                    <MdChevronLeft 
                    class='opacity-50 cursor-pointer hover:opacity-100 m-10 '
                    onClick={slideLeft} size={40} />

                    <div id='slider'class=' m-10 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-none '>
                        <ExerciseList 
                        exercises={exercises}
                        deleteExercise={deleteExercise}
                        likeExercise={likeExercise} 
                        dislikeExercise={dislikeExercise}        
                        />
                        </div>
                        <MdChevronRight 
                        class='opacity-50 cursor-pointer hover:opacity-100'
                        onClick={slideRight} size={40} />
                    </div>         
            </div>
        </div>
    )
}
	 