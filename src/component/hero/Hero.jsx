import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from "react-countup"
import { motion, easeIn } from 'framer-motion'

const hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="padding innerWidth flexEnd hero-container">
        <div className="hero-left">
          <div className="titles">
            <div className="circle"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{
                duration: 2,
                type: "easeIn"
              }}
            >
              <div className='title-hero'>
                <p>Discover</p>
                <p>Most Suitable</p>
                <p>Property</p>
              </div>
            </motion.h1>

            <div className='secondaryText sub-header_hero'>
              <p>Find a variety of properties that suit you very easilty</p>
              <p>Forget all difficulties in finding a residence for you</p>
            </div>
          </div>
          <div className='search'>
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button-txt text-white">
              search
            </button>
          </div>
          <div className="flexStart stats text-white">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Awards Winning</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "easeIn"
          }}
          className="hero-right">
          <img className='hero-img frame' src="hero-image.png" alt="" />
        </motion.div>
      </div>
    </section>
  )
}

export default hero