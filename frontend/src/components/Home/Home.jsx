import './Home.css'
import { Link } from 'react-router-dom'

export function Home(){
    return (
        <>
            <div className="home">
                <div className='title'>
                    <h1>Colx</h1>
                </div>
                <div className='main'>
                            <Link to='/olx/buy' className='main-item item'>
                                <h4>Olx</h4>
                                <p>Sell and buy 2nd hand things from seniors and juniors.</p>
                            </Link>

                            <Link to='/lost_and_found' className='main-item item'>
                                <h4>Lost and Found</h4>
                                <p>Post the things which you found  in collage.</p>
                            </Link>

                            <Link to='/complaints' className='main-item item'>
                                <h4>Complaints</h4>
                                <p>Post complaints regarding maintanance.</p>
                            </Link>
                </div>
                <div className='footer'>
                    COPYRIGHT © 2023 colx
                </div>
            </div>
        </>
    )
}