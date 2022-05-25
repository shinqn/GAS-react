import { Link } from 'react-router-dom';

function Nav() {
    const clickButton = () => {
        console.log(document.URL);
    };
    return (
        <>
            <nav>
                <li>
                    <Link to="/" onClick={clickButton}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/following" onClick={clickButton}>
                        Folowing
                    </Link>
                </li>
                <li>
                    <Link to="/profile" onClick={clickButton}>
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to="/upload" onClick={clickButton}>
                        Upload
                    </Link>
                </li>
            </nav>
        </>
    );
}

export default Nav;
