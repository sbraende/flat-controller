
import config from "../../config.json" 

const LIGHTS = {
    "bedShelfs": 3,
    "bedCorner": 4,
    "kitchen": 5,
    "desk": 6 
}

// Get inside function
const generateUrl = (light) => {
    const url = `http://${config.HUE_BRIDGE_IP}/api/${config.API_KEY}/lights/${light}/state`
    return url
}

const on = JSON.stringify({
    on: true
})

const off = JSON.stringify({
    on: false
})

const toggleLight = (toggle) => {
    const url = generateUrl(LIGHTS.desk)
    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: toggle
    })
}

toggleLight(on)

// Turn all lights on/off experiment

// let allLightsUrl = []
// const lightGroup = [3, 4, 5, 6]
// // Create array with lights
// for(let i = 0; i<lightGroup.length; i++){
//     // console.log(`this is index ${i} and light ${lightGroup[i]}`)
//     allLightsUrl.push(`http://${bridgeIP}/api/${username}/lights/${lightGroup[i]}/state`)
// }


// const allLights = (onOrOff) => {
//     for(let i = 0; i<allLightsUrl.length; i++) {
//         url = allLightsUrl[i]
        
//         fetch(url, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: onOrOff
//         })
//     }
// }


