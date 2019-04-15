import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from './components/Layout/Layout';
import SiteSettings from './containers/SiteSettings/SiteSettings';
import SiteManager from './containers/SiteManager/SiteManager';
import AssetsManager from './containers/AssetsManager/AssetsManager';
import ContentPersonalization from './containers/ContentPersonalization/ContentPersonalization';
import ContentManager from './containers/ContentManager/ContentManager';
import Promotions from './containers/ContentManager/Promotions/Promotions';
import Dashboard from './containers/Dashboard/Dashboard';

class App extends Component {
    state = {
        currentItem: {
            path: '/manager',
            component: 'SiteManager'
        }
    };

    render() {
        return (
            <>
                <CssBaseline />
                <Layout>
                    <Switch>
                        {/* <Route path={this.state.currentItem.path} exact component={this.state.currentItem.component} /> */}
                        <Route path="/settings" exact component={SiteSettings} />
                        <Route path="/site-manager" exact component={SiteManager} />
                        <Route path="/manager/promotions" exact component={Promotions} />
                        <Route path="/assets" exact component={AssetsManager} />
                        <Route path="/personalization" exact component={ContentPersonalization} />
                        <Route path="/manager" exact component={ContentManager} />
                        <Route path="/" exact component={Dashboard} />
                    </Switch>
                </Layout>
            </>
        );
    }
}

export default App;
