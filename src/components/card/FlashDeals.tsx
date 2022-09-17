import React, { FC } from 'react'
import RetailersCard from './RetailersCard'

interface Props {
    Data?:any ,
    
}

const FlashDeals:FC<Props> = ({Data}) => {

    console.log('flash deals',Data)
    return (
        
        <>
        <div  style={{ position:'relative',display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center', background:'white' ,width:'auto',height:'auto',marginRight:'35px',boxSizing:'border-box',borderRadius:'5px',}}>
            <div className='Retailer-card-img'  style={{display:'flex',flexDirection:'row',justifyContent:"center",padding:'10px',boxSizing:'border-box',alignItems:'center', width:'18vmax', marginBottom:'0px',height:'7vmax', background:'white',borderRadius:'5px 5px 0 0'}}>
                <img alt='' style={{objectFit:'cover',height:'auto',boxSizing:'border-box', width:'80px' ,}} 
                    src={Data?.image? Data.image :""} />
            </div>

            <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',width:'100%',padding:'2px',height:'30px'}}>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'red',width:'50%',height:'100%'}}>

                    <span style={{color:'white',fontWeight:'300'}}>DEAL ENDS  IN </span>
                    
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'50%',background:'#ba120f',height:'100%'}}>

                <span style={{color:'white',fontWeight:'300'}}>04h: 13m: 20s </span>


                </div>
            </div>
             
             <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',width:'100%',height:'80px'}}>
                <div style={{borderRight:'2px solid #eceff1', width:'50%'}}>
                <p style={{fontSize:'12px', color:'grey',fontWeight:'500'}}>
                    STARTING FROM</p>

                <p><span style={{fontSize:'25px',color:'grey',fontWeight:'400'}}>
                    {`रू ${Data.startingFrom}`}</span></p>

                </div>
                
                <div style={{width:'60%' ,display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center', color:'grey',fontWeight:'500',border:'1px solid grey',borderRadius:'7px',margin:'8px',width:'70%',height:'25px'}}>
                        <p style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',fontSize:'12px',fontWeight:'500'}}>
                            PER SALE YOU EARN</p>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center', color:'grey',fontWeight:'500',margin:'8px',width:'90%',height:'25px'}}>
                        <span style={{fontSize:'18px',color:'grey',fontWeight:'500'}}>{Data?.Profit}</span>

                    </div>
                </div>
             </div>
            <div className='' style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',height:'3.5vmax',width:'100%',borderRadius:'0 0 5px 5px',borderTop:'2px solid #eceff1'}} >
           
                <div 
                    style={{height:'3vmax',position:'relative',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',}}> 
                    <button style={{ display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.8vmax',padding:'10px',margin:'3px',boxSizing:'border-box',outline:'none',textDecoration:'none',cursor:'pointer', background:'white',height:'1.9vmax',width:'90%',borderRadius:'15px',fontWeight:'600'}}> 
                     COPY LINK</button>
                </div>

                <div style={{height:'3vmax',position:'relative',width:'100%',marginTop:'4px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'0 0 5px 5px'}}> 
                    <button style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.8vmax',padding:'10px',margin:'3px',boxSizing:'border-box',outline:'none',textDecoration:'none',cursor:'pointer', background:'green',height:'1.9vmax',width:'90%',borderRadius:'15px',fontWeight:'500',color:'white'}}> 
                    SHARE NOW </button>
                </div> 
                 

            </div>


          
        </div>
        </>
    )
}

export default FlashDeals
