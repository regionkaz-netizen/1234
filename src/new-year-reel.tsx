import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig} from 'remotion';
const GOLD = '#e6c27c';
const scenes = [
 {from:0,to:90,title:'НЕ ПРОСТО',detail:'КОРПОРАТИВ'},
 {from:90,to:180,title:'ЭТО СОБЫТИЕ',detail:'КОТОРОЕ ЗАПОМНЯТ'},
 {from:180,to:270,title:'ШОУ • ИГРЫ',detail:'ЭМОЦИИ'},
 {from:270,to:360,title:'НОВОГОДНИЕ',detail:'КОРПОРАТИВЫ 2026–2027'},
 {from:360,to:450,title:'WAKASI',detail:'EVENT GAMES'},
];
export const NewYearReel: React.FC = () => {
 const frame = useCurrentFrame();
 const {fps} = useVideoConfig();
 return <AbsoluteFill style={{background:'radial-gradient(ellipse at center,#26334e 0%,#101728 58%,#070a11 100%)',color:'#fff',fontFamily:'Arial, sans-serif',overflow:'hidden'}}>
  {Array.from({length:42},(_,i)=><div key={i} style={{position:'absolute',left:(i*193)%1080,top:(i*347)%1920,width:3+i%4,height:3+i%4,borderRadius:'50%',background:GOLD,opacity:0.15+0.55*Math.abs(Math.sin((frame+i*8)/25)),boxShadow:'0 0 16px #e6c27c'}}/>)}
  <div style={{position:'absolute',top:145,width:'100%',textAlign:'center',fontSize:31,fontWeight:800,letterSpacing:8,color:GOLD}}>WAKASI EVENT GAMES</div>
  <div style={{position:'absolute',top:260,left:115,right:115,height:2,background:'linear-gradient(90deg,transparent,#e6c27c,transparent)'}} />
  {scenes.map((scene,i)=>{
   const t=frame-scene.from;
   if(t<0||frame>=scene.to)return null;
   const opacity=interpolate(t,[0,12,74,89],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
   const scale=spring({frame:t,fps,config:{damping:200},from:0.9,to:1});
   return <div key={i} style={{position:'absolute',top:715,left:35,right:35,textAlign:'center',opacity,transform:'scale('+scale+')'}}>
    <div style={{fontSize:i===4?125:76,fontWeight:900,letterSpacing:2,color:GOLD,textShadow:'0 10px 50px #000'}}>{scene.title}</div>
    <div style={{fontSize:i===3?45:59,marginTop:25,fontWeight:800,letterSpacing:2}}>{scene.detail}</div>
   </div>;
  })}
  <div style={{position:'absolute',bottom:260,textAlign:'center',width:'100%',fontSize:35,letterSpacing:7,color:GOLD}}>АЛМАТЫ</div>
  <div style={{position:'absolute',bottom:110,left:90,right:90,padding:30,border:'2px solid '+GOLD,borderRadius:22,textAlign:'center',fontSize:40,fontWeight:800}}>DIRECT: «НОВЫЙ ГОД»</div>
 </AbsoluteFill>;
};
