import Header from './DefaultLayout/Header';
import { Outlet } from 'react-router-dom';

function HearderOnly() {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default HearderOnly;
