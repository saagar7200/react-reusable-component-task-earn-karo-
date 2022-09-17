import React, { FC } from 'react';
import {MdChevronRight} from 'react-icons/md'


interface Props {
    title:string,
    handler?:() => void,
    
}

const Heading:FC<Props> = ({title,handler}) => {
    return (
        <div className='home' style={{display:"flex",justifyContent:'space-between',alignItems:'center',background:'green',padding:'15px',boxSizing:'border-box', height:'2vmax',width:'90%',borderRadius:'3px'}}>
        <h2 style={{color:'white',fontWeight:'400',fontFamily:'roboto',fontSize:'22px'}}> <span> {title} </span></h2>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <button style={{position:'relative',background:'green',border:'none',fontSize:'15px',fontWeight:'300',outline:'none',height:'20px',color:'white',cursor:'pointer'}} >
          <span style={{fontWeight:'200'}}> View All</span> </button>
            <MdChevronRight  onClick={handler} style={{position:'absolute',marginLeft:'65px',marginTop:'1px',cursor:'pointer',color:'white',}} size={25} />
      </div>
      </div>
    )
}

export default Heading
