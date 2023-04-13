import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 라이브러리
import {Outlet, Link, NavLink} from 'react-router-dom';

function Layout(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="nav">
                <li className="nav-item">
                <NavLink className="nav-link active" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/board/list">list</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" href="#">Link</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link disabled" href="#">Disabled</NavLink>
                </li>
                </ul>
            </nav>
            {/*컴포넌트가 출력되는 위치*/}
            <div style={{marginTop:"30px"}}></div>
            <Outlet/>
        </div>
    )
}

export default Layout;