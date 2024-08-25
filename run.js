const fs = require('fs')


;
(async () => {
    let res = await fetch ("https://irmapserver.ir/research/api/weather/")
 
    let data = await (res.json())
    console.log(data.nearest_area[0].areaName[0].value)
    // console.log(JSON.stringify(data,null,2))
   

})()
