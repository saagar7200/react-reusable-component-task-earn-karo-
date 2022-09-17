import React, { FC, useEffect, useRef, } from 'react'
import RetailersCard from './card/RetailersCard'
import Heading from './layout/Heading';
import {Retaildata,flashData} from  "../Data";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import FlashDeals from './card/FlashDeals';



type Props = {
  children?: any
}


const Home:FC<Props> = () => {

   const RetailRef = useRef<any | null>();
   const flashRef= useRef<any | null>('flash');

  


  const slideLeft = ():void =>{

    const slider:any = document.getElementById('slider') 


    slider.scrollLeft =  slider.scrollLeft-1090;
  }

  const slideRight = ():void =>{
   

    
   
    const slider:any = document.getElementById('slider') 

    slider.scrollLeft =  slider.scrollLeft+1090;
  

    // slider.scrollLeft =  slider.scrollLeft+1090;
  }
  const slideFlashLeft = ():void =>{

    const slider:any = flashRef.current;


    slider.scrollLeft =  slider.scrollLeft-1090;
  }

  const slideFlashRight = ():void =>{
   
    // const slider:any = document.getElementById('slider') 
    const slider:any = flashRef.current;


    slider.scrollLeft =  slider.scrollLeft+1090;
  

    // slider.scrollLeft =  slider.scrollLeft+1090;
  }

  return (
    <div className='home' style={{display:"flex",alignItems:'center',flexDirection:'column',background:'#eceff1', height:'100vh',width:'100%'}}>
      <div style={{display:"flex",alignItems:'center',flexDirection:'column',background:'#eceff1', height:'100vh',width:'94%' ,position:'relative',top:'3%'}}>
        <Heading title='TOP RETAILERS'/>



        <div  style={{paddingLeft:'0px',display:"flex",justifyContent:'space-between',alignItems:'center',background:'#eceff1',width:'90%',height:'auto',overflow:'auto',overflowX:'hidden',margin:'5px', }}>
          <MdChevronLeft  onClick={slideLeft} style={{cursor:'pointer',color:'black',height:'90px',width:'40px',background:'white',margin:'5px',borderRadius:'5px'}} size={80}/>
          <div ref={RetailRef}  id='slider' style={{paddingLeft:'0px',display:"flex",justifyContent:'flex-start',alignItems:'center',flexWrap:'nowrap',background:'#eceff1',width:'100%',overflow:'hidden',height:'auto',overflowX:'hidden',overflowY:'hidden',}}>
            {
             Retaildata?.map((data:any,index)=>(

              <RetailersCard Data={data} key={index} />
 
              )) 
            }
          </div>
          <MdChevronRight onClick={slideRight} style={{cursor:'pointer',color:'black',height:'90px',width:'40px',background:'white',margin:'5px',borderRadius:'5px'}} size={50} />

        </div>




        <Heading title='FLASH DEALS'/>

        <div  style={{paddingLeft:'0px',display:"flex",justifyContent:'space-between',alignItems:'center',background:'#eceff1',width:'90%',height:'auto',overflow:'auto',overflowX:'hidden',margin:'5px', }}>
          <MdChevronLeft  onClick={slideFlashLeft} style={{cursor:'pointer',color:'black',height:'90px',width:'40px',background:'white',margin:'5px',borderRadius:'5px'}} size={80}/>
          <div ref={flashRef}   style={{paddingLeft:'0px',display:"flex",justifyContent:'flex-start',alignItems:'center',flexWrap:'nowrap',background:'#eceff1',width:'100%',overflow:'hidden',height:'auto',overflowX:'hidden',overflowY:'hidden',}}>
            {
             flashData?.map((data:any,index)=>(

              <FlashDeals Data={data}/>
 
              )) 
            }
          </div>
          <MdChevronRight onClick={slideFlashRight} style={{cursor:'pointer',color:'black',height:'90px',width:'40px',background:'white',margin:'5px',borderRadius:'5px'}} size={50} />

        </div>

  
      </div>
    
    </div>

  )
}

export default Home;