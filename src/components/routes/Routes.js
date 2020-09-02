import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FirstCard from '../cards/FirstCard'
import App from '../../App'

export default function Routes() {
    return (
        <div>
            <Switch>
            <Route path='/'>
                    <App />
                </Route>
                <Route path='/firstcard'>
                    <FirstCard />
                </Route>
            </Switch>
        </div>
    )
}
