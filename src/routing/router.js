import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';
import Budget from '../pages/dashboard/Budget';
import Chat from '../pages/dashboard/Chat';
import Home from '../pages/dashboard/Home';
import Profile from '../pages/dashboard/Profile';
import Reports from '../pages/dashboard/Reports';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {/* NOT FOUND/ INVALID ROUTE */}
                <Route path='*' element={<PageNotFound />} />

                {/* DASHBOARD */}
                <Route
                    path='/'
                    element={<Navigate to='/home' replace={true} />}
                />
                <Route path='/home' element={<Home />} />
                <Route path='/reports' element={<Reports />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='/budget' element={<Budget />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
