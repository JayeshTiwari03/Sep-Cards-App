import React from 'react'
import './Home.scss'
import cardimage from '../../photos/bigcardimage.jpg'
import cardimagesmall1 from '../../photos/images2.jpg'
import cardimagesmall2 from '../../photos/suitcase.jpg'
import cardimagesmall3 from '../../photos/packing.jpg'
import cardimagesmall4 from '../../photos/pets.jpg'
import cardimagesmall5 from '../../photos/dice.jpg'
import cardimagesmall6 from '../../photos/man.jpg'

import {AiFillCamera} from 'react-icons/ai'
import { FiCloudRain } from 'react-icons/fi'
import { GrEmoji } from 'react-icons/gr'
import { FaBook } from 'react-icons/fa'
import { BsPersonBoundingBox } from 'react-icons/bs'
import { SiTwitch } from 'react-icons/si'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            
            <div className='card bg-dark' id='big-card'>
            <div className='card-img' src={cardimage} alt='card' />
                <div className='card-img-overlay text-light'>
                    <h5 className='card-title'>Best of this week</h5>
                    <p className='card-text'>These are some of the famous stuff all around the globe</p>
                    <p className='card-text'><em>Updated 5 hours ago</em></p>
                </div>
            </div>
            <div className='card-columns'>
                <div className='card' id='small-cards'>
                <Link to='/firstcard1'>
                    <div className='card-header text-center'>Featured Misses</div>
                    
                    <img className='card-img-top' src={cardimagesmall1} alt='card' />
                    </Link>
                    <div className='card-body'>
                        <h5 className='card-title'><AiFillCamera /> Mis-Movies</h5>
                        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href='/' className='btn btn-primary'>Let's Roll</a>
                    </div>
                </div>
                <div className='card' id='small-cards'>
                    <div className='card-header text-center'>Featured Misses</div>
                    <img className='card-img-top' src={cardimagesmall2} alt='card' />
                    <div className='card-body'>
                        <h5 className='card-title'><FiCloudRain /> Mis-Weather</h5>
                        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href='/' className='btn btn-primary'>Let's Roll</a>
                    </div>
                </div>
                <div className='card' id='small-cards'>
                    <div className='card-header text-center'>Featured Misses</div>
                    <img className='card-img-top' src={cardimagesmall3} alt='card' />
                    <div className='card-body'>
                        <h5 className='card-title'><GrEmoji /> Mis-Emoji</h5>
                        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href='/' className='btn btn-primary'>Let's Roll</a>
                    </div>
                </div>
                <div className='card' id='small-cards'>
                    <div className='card-header text-center'>Premium Services</div>
                    <img className='card-img-top' src={cardimagesmall4} alt='card' />
                    <div className='card-body'>
                        <h5 className='card-title'><FaBook /> Mis-Books</h5>
                        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href='/' className='btn btn-primary'>Let's Roll</a>
                    </div>
                </div>
                <div className='card' id='small-cards'>
                    <div className='card-header text-center'>Premium Services</div>
                    <img className='card-img-top' src={cardimagesmall5} alt='card' />
                    <div className='card-body'>
                        <h5 className='card-title'><BsPersonBoundingBox /> Mis-Users</h5>
                        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href='/' className='btn btn-primary'>Let's Roll</a>
                    </div>
                </div>
                <div className='card' id='small-cards'>
                    <div className='card-header text-center'>Premium Services</div>
                    <img className='card-img-top' src={cardimagesmall6} alt='card' />
                    <div className='card-body'>
                        <h5 className='card-title'><SiTwitch /> Mis-Twitch</h5>
                        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href='/' className='btn btn-primary'>Let's Roll</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
