import React from 'react';
import profile from '../../../images/profile.jpg'

const Home = () => {
    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={profile} className="object-contain  h-60  ... rounded-lg shadow-2xl" />
                <div>
                    <h1 className='pb-6  text-3xl'>Web Developer</h1>
                    <h1 className="text-5xl font-bold">Hey , I'm Syed Tarikul Islam(RIKO)</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary"><a href="https://drive.google.com/file/d/1QdyTq8_1RlaWxOjcMXTg1kyAZmdyHCAd/view?usp=sharing">SEE RESUME</a></button>
                </div>
            </div>
        </div>
    );
};

export default Home;