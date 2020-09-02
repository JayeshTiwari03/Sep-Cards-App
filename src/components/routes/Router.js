import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FirstCard from '../cards/FirstCard'

export default function Router() {
    return (
        <div>
            <Switch>
                <Route path='/firstcard'>
                    <FirstCard />
                </Route>
            </Switch>
        </div>
    )
}
