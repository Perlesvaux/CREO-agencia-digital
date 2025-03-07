//import Card from './Card.jsx'
import { Card } from 'shared'

//const STATIC_ASSETS = `/assets/gallery/`
//const STATIC_ASSETS = `/`
//const STATIC_ASSETS = `/static`
//const STATIC_ASSETS = `/CREO/static`
//const STATIC_ASSETS = `/CREO-agencia-digital/static`

import showreelFront        from '/CREO-agencia-digital/static/showreel2025_front.png'; 
import showreelBack         from '/CREO-agencia-digital/static/showreel2025_back.png';
import showreelVideo        from '/CREO-agencia-digital/static/showreel2025_video.mp4';
import portfolio2025_back   from '/CREO-agencia-digital/static/portfolio2025_back.png';
import portfolio2025_front  from '/CREO-agencia-digital/static/portfolio2025_front.png';
import impactrecords_banner from '/CREO-agencia-digital/static/impactrecords_banner.png';
import impactrecords_1      from '/CREO-agencia-digital/static/impactrecords_1.png';
import impactrecords_2      from '/CREO-agencia-digital/static/impactrecords_2.png';
import impactrecords_3      from '/CREO-agencia-digital/static/impactrecords_3.png';
import impactrecords_4      from '/CREO-agencia-digital/static/impactrecords_4.png';
import impactrecords_5      from '/CREO-agencia-digital/static/impactrecords_5.png';
import impactrecords_6      from '/CREO-agencia-digital/static/impactrecords_6.png';
import impactrecords_7      from '/CREO-agencia-digital/static/impactrecords_7.png';
import impactrecords_8      from '/CREO-agencia-digital/static/impactrecords_8.png';
import impactrecords_9      from '/CREO-agencia-digital/static/impactrecords_9.png';
import taber_banner         from '/CREO-agencia-digital/static/taber_banner.png';
import taber_1              from '/CREO-agencia-digital/static/taber_1.png';
import taber_2              from '/CREO-agencia-digital/static/taber_2.png';
import taber_3              from '/CREO-agencia-digital/static/taber_3.png';
import taber_4              from '/CREO-agencia-digital/static/taber_4.png';
import taber_5              from '/CREO-agencia-digital/static/taber_5.png';
import taber_6              from '/CREO-agencia-digital/static/taber_6.jpg';
import taber_7              from '/CREO-agencia-digital/static/taber_7.png';
import taber_8              from '/CREO-agencia-digital/static/taber_8.png';
import taber_9              from '/CREO-agencia-digital/static/taber_9.png';
import taber_10             from '/CREO-agencia-digital/static/taber_10.png';
import taber_11             from '/CREO-agencia-digital/static/taber_11.png';
import taber_12             from '/CREO-agencia-digital/static/taber_12.png';
import taber_13             from '/CREO-agencia-digital/static/taber_13.png';
import taber_14             from '/CREO-agencia-digital/static/taber_14.png';
import taber_15             from '/CREO-agencia-digital/static/taber_15.png';
import taber_16             from '/CREO-agencia-digital/static/taber_16.png';
import taber_17             from '/CREO-agencia-digital/static/taber_17.png';
import tufuturacasa_banner  from '/CREO-agencia-digital/static/tufuturacasa_banner.png';
import tufuturacasa_1       from '/CREO-agencia-digital/static/tufuturacasa_1.png';
import tufuturacasa_2       from '/CREO-agencia-digital/static/tufuturacasa_2.png';
import tufuturacasa_3       from '/CREO-agencia-digital/static/tufuturacasa_3.png';
import tufuturacasa_4       from '/CREO-agencia-digital/static/tufuturacasa_4.png';
import tufuturacasa_5       from '/CREO-agencia-digital/static/tufuturacasa_5.png';
import tufuturacasa_6       from '/CREO-agencia-digital/static/tufuturacasa_6.png';
import tufuturacasa_7       from '/CREO-agencia-digital/static/tufuturacasa_7.png';
import tufuturacasa_8       from '/CREO-agencia-digital/static/tufuturacasa_8.png';
import tufuturacasa_9       from '/CREO-agencia-digital/static/tufuturacasa_9.png';
import bc_banner            from '/CREO-agencia-digital/static/bc_banner.png';
import bc_1                 from '/CREO-agencia-digital/static/bc_1.png';
import bc_2                 from '/CREO-agencia-digital/static/bc_2.png';
import bc_3                 from '/CREO-agencia-digital/static/bc_3.png';
import bc_4                 from '/CREO-agencia-digital/static/bc_4.png';
import bc_5                 from '/CREO-agencia-digital/static/bc_5.png';
import bc_6                 from '/CREO-agencia-digital/static/bc_6.png';
import bc_7                 from '/CREO-agencia-digital/static/bc_7.png';
import bc_8                 from '/CREO-agencia-digital/static/bc_8.png';
import bc_9                 from '/CREO-agencia-digital/static/bc_9.png';



// Example usage
const loadShowreelAssets = () => {

  const showreel_2025 =  [
    <img key="1" src={showreelFront} alt="Showreel 2025 Front" />,
    <video key="2" src={showreelVideo} controls poster={showreelFront} />,
    <img key="3" src={showreelBack} alt="Showreel 2025 Back" />,
  ];

  return <Card key="1" thumb={showreelFront} items={showreel_2025} />
};


//export const showreel_2025 = [
//  <img      key="1" src={showreel2025_front} />, 
//  <video    key="2" src={showreel2025_video} controls poster={showreel2025_front} />, 
//  <img      key="3" src={showreel2025_back} />
//]

const portfolio_2025 = ()=>{

const pf2025 = [
  portfolio2025_front,
  taber_banner, taber_1, taber_2, taber_3, taber_4, taber_5, taber_6, taber_7, taber_8, taber_9, taber_10, taber_11, taber_12, taber_13, taber_14, taber_15, taber_16, taber_17,
  bc_banner, bc_1, bc_2, bc_3, bc_4, bc_5, bc_6, bc_7, bc_8, bc_9,
  tufuturacasa_banner, tufuturacasa_1, tufuturacasa_2, tufuturacasa_3, tufuturacasa_4, tufuturacasa_5, tufuturacasa_6, tufuturacasa_7, tufuturacasa_8, tufuturacasa_9,
  impactrecords_banner, impactrecords_1, impactrecords_2, impactrecords_3, impactrecords_4, impactrecords_5, impactrecords_6, impactrecords_7, impactrecords_8,  impactrecords_9,
  portfolio2025_back,
].map((e, i) => <img key={i} src={e}/>)

return <Card key="1" thumb={portfolio2025_front} items={pf2025} />


}



//[
//  <img      key="1" src={bc_banner} />, 
//  <img      key="1" src={bc_1} />, 
//  <img      key="2" src={bc_2} />
//]




//export const home = [
//  <Card key="1" thumb={showreel2025_front} items={showreel_2025} />,
//]

export const deeds = [
  //<Card key="1" thumb={portfolio2025_front} items={portfolio_2025} />,
  loadShowreelAssets(),
  portfolio_2025(),
  portfolio_2025(),

]

