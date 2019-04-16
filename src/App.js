import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from './components/Layout/Layout';
import SiteSettings from './containers/SiteSettings/SiteSettings';
import SiteManager from './containers/SiteManager/SiteManager';
import AssetsManager from './containers/AssetsManager/AssetsManager';
import ContentPersonalization from './containers/ContentPersonalization/ContentPersonalization';
import ContentManager from './containers/ContentManager/ContentManager';
import Dashboard from './containers/Dashboard/Dashboard';
// import Child from './containers/Child/Child';

class App extends Component {

    render() {
        return (
            <>
                <CssBaseline />
                <Layout>
                    <Switch>
                        {/* <Route path="/:slug" component={Child}/> */}
                        {/* <Route path={this.state.currentItem.path} exact component={this.state.currentItem.component} /> */}
                        <Route path="/settings" exact component={SiteSettings} />
                        <Route path="/site-manager" exact component={SiteManager} />
                        <Route path="/assets" exact component={AssetsManager} />
                        <Route path="/manager" component={ContentManager} />
                        <Route path="/personalization" exact component={ContentPersonalization} />
                        <Route path="/" exact component={Dashboard} />
                    </Switch>
                </Layout>
            </>
        );
    }
}

export default App;
