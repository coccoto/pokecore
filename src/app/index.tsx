import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// molecules
import Form from '@src/app/components/molecules/form'
// templates
import Header from '@src/app/components/templates/header'
import Footer from '@src/app/components/templates/footer'

export default () => {

    return (
        <Router>
            <Header></Header>

            <Switch>
                <Route exact path={'/'}>
                    <Form></Form>
                </Route>
            </Switch>

            <Footer></Footer>
        </Router>
    )
}