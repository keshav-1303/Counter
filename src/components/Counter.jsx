import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/slices/CounterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value );
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <button
                    onClick={() => dispatch(increment())}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 mb-6"
                >
                    Increment
                </button>
                
                <div className="text-6xl font-bold text-gray-800 my-8">
                    {count}
                </div>
                
                <button
                    onClick={() => dispatch(decrement())}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter