import React, {useContext, useState} from 'react'
import { UserContext } from '../context/userProvider'

export default function SearchExercise(){

    const {
        handleChange,
        searchData,
        searchExercise
    } = useContext(UserContext)

    return (
        <div className='relative m-5'>
            <form onSubmit={searchExercise}>
                <input className='w-1/2 pl-10 p-2.5 '
                    name='name'
                    value={searchData.name}
                    onChange={handleChange}
                    placeholder='Search Exercise'
                />
                <button id='search--btn'>Search</button>
            </form>
        </div>
    )



}