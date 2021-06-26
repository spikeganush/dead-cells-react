import { Home } from './Home'
import { Studio } from './Studio'
import { Stuff } from './Stuff'
import { Map } from './Map'
import { Purchase } from './Purchase'
import { Help } from './Help'
import { Switch, Route, Redirect } from 'react-router-dom'

export function Content(props) {
    return (
        <div className="container">

            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route path="/studio">
                    <Studio />
                </Route>
                <Route path="/stuff">
                    <Stuff />
                </Route>
                <Route path="/map">
                    <Map />
                </Route>
                <Route path="/purchase">
                    <Purchase />
                </Route>
                <Route path="/help">
                    <Help />
                </Route>
            </Switch>

        </div>

    )
}