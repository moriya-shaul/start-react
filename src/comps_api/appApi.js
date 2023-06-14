import React, { useEffect } from 'react'

function AppApi() {
    useEffect(()=>{
        doApi();
    },[]);
    const doApi = async()=>{
        let url = "http://fs1.co.il/bus/shop.php";
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data);
        
    }
  return (
    <div>AppApi</div>
  )
}

export default AppApi