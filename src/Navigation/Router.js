import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// pages
import Loading from '../Pages/Loading';
const HomePage = React.lazy(() => import('../Pages/Home'));
const WorkPage = React.lazy(() => import('../Pages/Work'));
const AboutPage = React.lazy(() => import('../Pages/About'));
const GearPage = React.lazy(() => import('../Pages/Gear'));
const ContactPage = React.lazy(() => import('../Pages/Contact'));

export default function Router() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact
                    render={() => <React.Suspense fallback={<Loading />}>
                        <HomePage />
                    </React.Suspense>}
                />
                <Route path="/work" exact
                    render={() => <React.Suspense fallback={<Loading />}>
                        <WorkPage />
                    </React.Suspense>}
                />
                <Route path="/about" exact
                    render={() => <React.Suspense fallback={<Loading />}>
                        <AboutPage />
                    </React.Suspense>}
                />
                <Route path="/gear" exact
                    render={() => <React.Suspense fallback={<Loading />}>
                        <GearPage />
                    </React.Suspense>}
                />
                <Route path="/contact" exact
                    render={() => <React.Suspense fallback={<Loading />}>
                        <ContactPage />
                    </React.Suspense>}
                />
                <Redirect to="/" exact />
            </Switch>
        </React.Fragment>
    )
}
