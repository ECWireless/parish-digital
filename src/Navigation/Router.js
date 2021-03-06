import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// pages
import Loading from '../Pages/Loading';
const HomePage = React.lazy(() => import('../Pages/HomePage/HomePage'));
const WorkPage = React.lazy(() => import('../Pages/WorkPage/WorkPage'));
const TeamPage = React.lazy(() => import('../Pages/TeamPage/TeamPage'));
const GearPage = React.lazy(() => import('../Pages/GearPage/GearPage'));
const ServicePage = React.lazy(() => import('../Pages/ServicePage/ServicePage'));
const EmployeePage = React.lazy(() => import('../Pages/EmployeePage'));

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
                <Route path="/service" exact
                    render={() => <React.Suspense fallback={<Loading />}>
                        <ServicePage scrollToTop={props.scrollToTop} onModalToggle={props.onModalToggle} modal={props.modal} />
                    </React.Suspense>}
                />
                <Route path="/employee" exact
                    render={() => <React.Suspense fallback={<Loading />}>
                        <EmployeePage
							errorMessage={props.errorMessage}
							closeError={props.closeError}
                            onCloseError={props.onCloseError}
                            
							login={props.login}
							logout={props.logout}
                            loggedIn={props.loggedIn}
                            password={props.password}
                            
                            scrollToTop={props.scrollToTop}
                        />
                    </React.Suspense>}
                />
                <Redirect to="/" exact />
            </Switch>
        </React.Fragment>
    )
}
