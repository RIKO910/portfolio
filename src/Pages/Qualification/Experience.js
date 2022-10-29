import React from 'react';
import { Link } from 'react-router-dom';

const Experience = () => {
    return (
        <div>
             <h1 className='font-bold text-3xl'>Qualification</h1>
            <p>My personal journey</p>
            <div className='py-11'>
                <div className='flex justify-center'>
                    <h2 className='font-bold text-2xl mb-7 pr-16'><Link href="/qualification">Education</Link></h2>
                    <h2 className='font-bold text-2xl mb-7 pl-6'><Link href="/experience">Experience</Link></h2>
                </div>
                <div className="flex">
                    <div className="grid  flex-grow card  rounded-box place-items-center">

                        <div className='mt-11'>
                        <h2>Web design</h2>
                        <p>Programing Hero</p>
                        <p>Date-2022</p>
                        </div>                        
                        {/* <div className='mb-11'>
                        <h2>Web design</h2>
                        <p>Programing Hero</p>
                        <p>Date-2022</p>
                        </div> */}

                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid  flex-grow card rounded-box place-items-center">

                    <div className='mt-28'>
                        <h2>Web design</h2>
                        <p>Programing Hero</p>
                        <p>Date-2022</p>
                        </div>                        
                        <div className='mt-11'>
                        <h2>Web design</h2>
                        <p>Programing Hero</p>
                        <p>Date-2022</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Experience;