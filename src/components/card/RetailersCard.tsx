import React, { FC } from 'react';


type Props = {
    Data?:any
}


const RetailersCard:FC<Props> = ({Data}) => {
  return (
    <>
    <div className='Retailer-card' style={{ position:'relative',display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center', background:'#eceff1' ,width:'auto',height:'auto',marginRight:'35px',boxSizing:'border-box',}}>

        <div className='Retailer-card-img'  style={{display:'flex',flexDirection:'row',justifyContent:"center",padding:'10px',boxSizing:'border-box',alignItems:'center', width:'18vmax', marginBottom:'0px',height:'6vmax', background:'white',borderRadius:'5px 5px 0 0'}}>
            <img alt='' style={{objectFit:'cover',height:'auto',boxSizing:'border-box', width:'80px' ,}} src={Data?.image? Data.image :""} />
        </div>

        <div style={{position:'absolute',display:'felx',justifyContent:'center',alignItems:'center' ,marginBottom:'2.6vmax',background:'#eceff1',height:'25px' ,width:'100px',border:'1px solid #bdbdbd',borderRadius:'12px'}}> 
           
          <span style={{ color:'grey',marginTop:'0px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'12px',fontWeight:'600',padding:'5px',fontFamily:'Roboto'}} >
             YOU EARN</span>
        </div>

        <div style={{display:'flex',flexDirection:'column',background:'white',marginTop:'2px' ,width:'100%',borderRadius:'0 0 5px 5px'}}>
       
        <div className='' style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',height:'4vmax',borderBottom:'2px solid #eceff1'}}>
            <span style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px',fontWeight:'700',fontFamily:'Roboto',color:'grey'}} > 
            {Data?.Profit ? Data.Profit :'' }</span>
        </div>

        <div className='' style={{display:'flex',position:'relative',justifyContent:'center',alignItems:'center',flexDirection:'column',height:'4.5vmax',borderRadius:'0 0 5px 5px'}} >
           
           <div style={{height:'3vmax',position:'relative',width:'100%',marginTop:'4px',display:'flex',justifyContent:'center',borderRadius:'0 0 5px 5px'}}> 
                <button style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.8vmax',padding:'10px',margin:'3px',boxSizing:'border-box',outline:'none',textDecoration:'none',cursor:'pointer', background:'green',height:'1.7vmax',width:'80%',borderRadius:'15px',fontWeight:'500',color:'white'}}> 
                    SHARE NOW </button>
           </div> 
           <div 
                style={{height:'3vmax',position:'relative',width:'100%',display:'flex',justifyContent:'center',}}> 
                <button style={{ display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.8vmax',padding:'10px',margin:'3px',boxSizing:'border-box',outline:'none',textDecoration:'none',cursor:'pointer', background:'white',height:'1.7vmax',width:'80%',borderRadius:'15px',fontWeight:'600'}}> 
                   COPY LINK</button>
            </div> 

        </div>
      
        </div>

       
    </div>
    </>
  )
}

export default RetailersCard