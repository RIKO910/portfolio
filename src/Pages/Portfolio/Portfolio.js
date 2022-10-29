import { faCode, faCodeFork, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import doctor from '../../images/doctor.png'
import car from '../../images/car.png'
import dokan from '../../images/dokan.png'
const Portfolio = () => {
    return (
        <div >
            <h1 className='my-9 text-3xl font-bold '>All Projects </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={doctor} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold ">Doctors Portal</h2>
                    <p className=' font-bold '>A website for doctors appointment</p>
                    <div className="card-actions justify-end"> 
                        <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="client side code">
                            <a href="" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className='text-xl' icon={faCode}></FontAwesomeIcon>
                            </a>
        
                        </button>
                        <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="see demo">
                            <a href="https://rikos-doctors-portal.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='text-xl' icon={faPlay}></FontAwesomeIcon>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={car} alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title text-2xl font-bold ">Doctors Portal</h2>
                    <p className=' font-bold '>A website for doctors appointment</p>
                    <div className="card-actions justify-end">
                    {/* <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="server side code">
                            <a href="" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className='text-xl' icon={faCodeFork}></FontAwesomeIcon>
                            </a>
                        </button> */}
                        <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="client side code">
                            <a href="" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className='text-xl' icon={faCode}></FontAwesomeIcon>
                            </a>
                        </button>
                        <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="see demo">
                            <a href="https://riko-car-service.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='text-xl' icon={faPlay}></FontAwesomeIcon>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={dokan}alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title text-2xl font-bold ">Doctors Portal</h2>
                    <p className=' font-bold '>A website for doctors appointment</p>
                    <div className="card-actions justify-end">
                    
                        <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="client side code">
                            <a href="" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className='text-xl' icon={faCode}></FontAwesomeIcon>
                            </a>
                        </button>
                        <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="see demo">
                            <a href="https://cheerful-cactus-94fbe3.netlify.app/home" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='text-xl' icon={faPlay}></FontAwesomeIcon>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Portfolio;