import React from 'react'
import ReactDOM from 'react-dom'
import { initializeIcons } from 'office-ui-fabric-react'
import * as serviceWorker from './serviceWorker'

initializeIcons()

ReactDOM.render(<div />, document.getElementById('root'))

serviceWorker.unregister()
