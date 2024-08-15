import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { url } from 'inspector';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "Turing Group "


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={name} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>
        <div className='main'>
          <div className='weather'  style={{backgroundColor:"rgba(125 128 128 / 0.2)"}}>
          <h1>Weather</h1>
         
          <img src="/weather4b.png" alt="" />
          <div className='sun'>
           
           <img src="/sunp.png" alt="" className='sunp'/>
           <div className='logob'>
           <img src="/logominee.png" alt=""  className='logo' style={{width:140,height:60}}/>
           </div>
           <img src="/location.png" alt=""  className='location' style={{height:20 , width:15}} />
           <span  style={{display:"inline-block" , marginRight:750 , fontSize:50 , color:"white" , marginTop:50 , fontWeight:"lighter"}}>{(props.f.FeelsLikeC) + "°c"}</span>
           <span className='shiraz'> {"," + props.area.areaName[0].value } </span>
           <span className='iran'>{props.area.country[0].value}</span>
          
          
           </div>
           

          </div>
            <div>
              <div>
                <div className='dcenter'>
                  <img src="/roadm.png" alt=""  className='sunrise'/>
                  <span className='sunrise2'>sunrise: {props.weather.sunrise}</span>
                  </div>
                <div className='dcenter'>
                <img src="/roadm.png" alt=""  className='sunrise'/>
                  <span className='sunrise2'>sunset: {props.weather.sunset}</span>

                 </div>
                <div className='dcenter'>
                <img src="/moonminee.png" alt=""  className='sunrise'/>
                  <span className='moonrise'>moonrise: {props.weather.moonrise}</span>
                </div>
                <div className='dcenter'>
                <img src="/moonminee.png" alt=""  className='sunrise'/>
                  <span className='moonrise'>moonset: {props.weather.moonset}</span>
                </div>
                <div className='dcenter'>
                <img src="/moonminee.png" alt=""  className='sunrise'/>
                  <span className='moonrise'>moon phase: {props.weather.moon_phase}</span>

                </div>
              </div>
              <div className='down'>
                <h1 className='sunny'> {props.f.weatherDesc[0].value}</h1> 
                <div className='downs'>
                <span className='humidity'>humidity:{props.f.humidity}</span>
                <span> , </span>
                <span>UV index:{props.f.uvIndex}</span>
                <span> , </span>
                <span>cloud cover:{props.f.cloudcover}</span>
                <span> , </span>
                <span>visibility:{props.f.visibility}</span>
                <span> , </span>
                <span>pressure:{props.f.pressure}</span>
                </div>

              </div>
            </div>
        </div>
        
        
      </Window>
      
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let res = await fetch ("https://irmapserver.ir/research/api/weather/")
    let data = await (res.json())
    let f = data.current_condition[0]
    let area = data.nearest_area[0]
    let weather = data.weather[0].astronomy[0]
    


  return {
    props: {
      data: global.QSON.stringify({
        session,
        f:f,
        area:area,
        weather:weather
        
        // nlangs,
      })
    },
  }
}