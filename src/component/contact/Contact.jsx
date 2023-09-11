import React from 'react'
import { IoMdCall } from 'react-icons/io';
import { AiFillMessage } from 'react-icons/ai';
import { MdVideoCall } from 'react-icons/md';
import { BiSolidMessageAlt } from 'react-icons/bi';

const Contact = () => {
    return (
        <section className="con-wrapper">
            <div className="flexJSA padding innerWidth contact">
                <div className="left-con">
                    <div className="flexColStart head-con">
                        <span className='orangeText'>Our Contact Us</span>
                        <span className='primaryText'>Easy to contact us</span>
                        <span className='flexColStart'>
                            <span className='secondaryText'>We always ready to help by providing the best services for you. We beleive a good</span>
                            <span className='secondaryText'>blace to live can make your life better</span>
                        </span>
                        <div className="main-main">
                        <div className="flexJSA contact-main">
                            <div className="flexColStart rectangle">
                                <div className="flexJSA con-top">
                                    <div className="flexStart icon">
                                        <IoMdCall size={25}/>
                                    </div>
                                    <div className="flexColStart text-con">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter con-button">
                                    <button>Call now</button>
                                </div>
                            </div>
                            <div className="flexColStart rectangle">
                                <div className="flexJSA con-top">
                                    <div className="flexStart icon">
                                        <AiFillMessage size={25}/>
                                    </div>
                                    <div className="flexColStart text-con">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter con-button">
                                    <button>Chat now</button>
                                </div>
                            </div>
                        </div>
                        <div className="flexJSA contact-main">
                            <div className="flexColStart rectangle">
                                <div className="flexJSA con-top">
                                    <div className="flexStart icon">
                                        <MdVideoCall size={25}/>
                                    </div>
                                    <div className="flexColStart text-con">
                                        <span className='primaryText'>Video call</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter con-button">
                                    <button>Video now</button>
                                </div>
                            </div>
                            <div className="flexColStart rectangle">
                                <div className="flexJSA con-top">
                                    <div className="flexStart icon">
                                        <BiSolidMessageAlt size={25}/>
                                    </div>
                                    <div className="flexColStart text-con">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter con-button">
                                    <button>Message now</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="right-con">
                    <div className="con-img">
                        <img src="contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact