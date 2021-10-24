import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// organisms
import DetailForm from '@src/app/components/organisms/detailForm'
// templates
import Header from '@src/app/components/templates/header'
import Footer from '@src/app/components/templates/footer'

export default () => {

    return (
        <Router>
            <Header></Header>

            <Switch>
                <Route exact path={'/'}>
                    <DetailForm></DetailForm>
                </Route>
            </Switch>

            <Footer></Footer>
        </Router>
    )
}