import React, {useContext, useState} from 'react'
import { UserContext } from '../context/userProvider.jsx'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

export default function FilterForm(){

    const {searchFilter} = useContext(UserContext)
   

    const slideLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    
    return (
        <div className='text-sm m-2 pt-5 md:m-10 flex justify-between'>
            
                <MdChevronLeft id='arrows'
                    onClick={slideLeft} size={60}
                    className='opacity-50 cursor-pointer hover:opacity-100 m-2 md:m-10 ' />
                    <div onClick={searchFilter} id='slider'
                        className='m-2 md:m-10 overflow-x-hidden scroll whitespace-nowrap scroll-smooth  '>
                        <button id='filter--btn' value="reset">All Exercises</button>
                        <button id='filter--btn' value="cardio"> Cardio</button>
                        <button id='filter--btn' value="neck"> Neck</button>
                        <button id='filter--btn' value="waist">Abs</button>
                        <button id='filter--btn' value="back">Back</button>
                        <button id='filter--btn' value="upper legs">Upper Legs</button>
                        <button id='filter--btn' value="lower legs">Lower Legs</button>
                        <button id='filter--btn' value="chest">Chest</button>
                        <button id='filter--btn' value="shoulders">Shoulders</button>
                        <button id='filter--btn' value="upper arms">Upper Arms</button>
                        <button id='filter--btn' value="lower arms">Lower Arms</button>
                    </div>
                    <MdChevronRight id=''
                        onClick={slideRight} size={60}
                        className='opacity-50 cursor-pointer hover:opacity-100 m-2 md:m-10' />

            </div>
        
    )
}