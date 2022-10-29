import React from 'react';
import email from './envelope-regular.svg'
import whatsapp from './whatsapp.svg'
import messenger from './facebook-messenger.svg'
const Contact = () => {
    return (
        <div className='my-16'>
            <h1 className='font-bold text-3xl '>Contact Me</h1>
            <h2 className='mb-11'>Get in touch</h2>
            <div className=" w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 ">
                <div className="grid  flex-grow card bg-base-300 rounded-box place-items-center mr-8">
                    <h1 className='text-2xl font-bold mt-6'>Talk to me</h1>
                    <div className='grid grid-cols-1 my-8'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className=''>
                                    <img className='mx-auto h-8 w-10' src={email} alt="" />
                                </div>
                                <h2 className="font-bold">Email</h2>
                                <p>tarikulislamriko910@gmail.com</p>
                                {/* <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div> */}
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl my-6">
                            <div className="card-body">
                                <div className=''>
                                    <img className='mx-auto h-8 w-10' src={whatsapp} alt="" />
                                </div>
                                <h2 className="font-bold">Whatsapp</h2>
                                <p>+8801703008720</p>
                                {/* <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div> */}
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className=''>
                                    <img className='mx-auto h-8 w-10' src={messenger} alt="" />
                                </div>
                                <h2 className="font-bold">Messenger</h2>
                                <p>Tarikul Islam Riko</p>
                                {/* <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="divider divider-horizontal">OR</div> */}
                <div className="grid   bg-base-300 rounded-box place-items-center ">
                    <h2 className='text-2xl font-bold '>Write me your project</h2>
                    <div className="form-control">
                        {/* <label className="label">
                            <span className="label-text">Your Email</span>
                        </label> */}
                        <label className="input-group input-group-vertical">
                            <span>Name</span>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-72" />
                        </label>
                    </div>
                    <div className="form-control">
                        {/* <label className="label">
                            <span className="label-text">Your Email</span>
                        </label> */}
                        <label className="input-group input-group-vertical">
                            <span>Email</span>
                            <input type="text" placeholder="info@site.com" className="input input-bordered w-72" />
                        </label>
                    </div>
                    
                    <textarea className="textarea textarea-bordered h-56 w-72" placeholder="Bio"></textarea>
                    <button className="btn glass text-black mb-5">Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;