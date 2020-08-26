import React from 'react'
import {render} from 'react-dom'
import AppSevice from './modules/app.service'
import { config } from './modules/config'
import App from './App'
import './modules/ts.module'
import css from './css/index.css'
import './less/index.less'
import './scss/index.scss'

console.log('config key', config.key)

console.log(css.toString())

const service = new AppSevice('hello wolrd');
service.log();

render(<App />, document.getElementById('app'))