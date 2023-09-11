import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../utils/accordion'

const Value = () => {
  return (
    <div className="v-wrapper innerWidth paddings flexJSA">
      <div className="v-left">
        <div className="value-img">
          <img src="value.png" alt="" />
        </div>
      </div>
      <div className="v-right flexColStart">
        <span className='orangeText'>Our Value</span>
        <span className='primaryText'>Value We Give to You</span>
        <span className='flexColStart secondaryText'>
          <span>We always ready to help by providing the best services for you.</span>
          <span>We beleive a good blace to live can make your life better</span>
        </span>

        <Accordion
          className='accordion'
          allowMultipleExpanded={false}
          preExpanded={[0]}
        >
          {
            data.map((item, i) => {
              const[className, setClassName] = useState(null)
              return (
                <AccordionItem className={`accordionitem ${className}`} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordionbutton'>

                      <AccordionItemState>
                        {({ expanded }) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                      </AccordionItemState>

                      <div className="flexCenter icon">
                        {item.icon}
                      </div>
                      <span className='primaryText'>
                        {item.heading}
                      </span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              )
            })
          }
        </Accordion>
      </div>
    </div>
  )
}

export default Value