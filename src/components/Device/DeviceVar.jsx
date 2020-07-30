import React from 'react'
import {Chip} from '@material-ui/core'

import alexa from '../../images/alexa.png'
import clipsal from '../../images/clipsal.png'
import controller from '../../images/controller.png'
import zwave from '../../images/zwave.png'

const status = [
    <Chip variant="outlined" color="primary" label="Enabled"/>, // 0
    <Chip variant="outlined" color="secondary" label="Removed"/>, // 1
    <Chip variant="outlined" color="secondary" label="Replaced"/> // 2
]

const type = [
    "",
    controller,
    alexa,
    zwave,
    clipsal
]  

const typestring = [
    "Undefined",
    "Controller",
    "Alexa",
    "Z-Wave",
    "Clipsal"
]

export {status,type,typestring}