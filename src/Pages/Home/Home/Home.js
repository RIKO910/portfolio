import React from 'react';
import profile from '../../../images/profile.jpg'
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';
import Portfolio from '../../Portfolio/Portfolio';
import Qualification from '../../Qualification/Qualification';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={profile} className="object-contain  h-60  ... rounded-lg shadow-2xl" />
                    <div>
                        <h1 className='pb-6  text-3xl'>Web Developer</h1>
                        <h1 className="text-5xl font-bold">Hey , I'm Syed Tarikul Islam(RIKO)</h1>
                        <p className="pt-6">Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services
                        </p>
                        <p className='pt-1 pb-5'>
                            I am a full-stack web developer in react.js
                        </p>
                        <button className="btn btn-primary"><a href="https://drive.google.com/file/d/1QdyTq8_1RlaWxOjcMXTg1kyAZmdyHCAd/view?usp=sharing">SEE RESUME</a></button>
                    </div>
                </div>

            </div >
            <div className='mx-11 my-11'>
                <Qualification></Qualification>
                <Portfolio></Portfolio>
                <Contact></Contact>
                <Footer></Footer>
            </div>

        </div>

    );
};

export default Home;