import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// pages
import Loading from '../Pages/Loading';
const HomePage = React.lazy(() => import('../Pages/HomePage/HomePage'));
const WorkPage = React.lazy(() => import('../Pages/WorkPage/WorkPage'));
const TeamPage = React.lazy(() => import('../Pages/TeamPage/TeamPage'));
const GearPage = React.lazy(() => import('../Pages/GearPage/GearPage'));

export default function Router(props) {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact
                    render={() => <React.Suspense fallback={<Loading />}>
                        <HomePage scrollToTop={props.scrollToTop} windowScroll={props.windowScroll} />
                    </React.Suspense>}
                />
                <Route path="/work" exact
                    render={() => <React.Suspense fallback={<Loading />}>
                        <WorkPage scrollToTop={props.scrollToTop} />
                    </React.Suspense>}
                />
                <Route path="/team" exact
                    render={() => <React.Suspense fallback={<Loading />}>
                        <TeamPage scrollToTop={props.scrollToTop} />
                    </React.Suspense>}
                />
                <Route path="/gear" exact
                    render={() => <React.Suspense fallback={<Loading />}>
                        <GearPage scrollToTop={props.scrollToTop} />
                    </React.Suspense>}
                />
                <Redirect to="/" exact />
            </Switch>
        </React.Fragment>
    )
}
