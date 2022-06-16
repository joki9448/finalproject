import { Link } from 'react-router-dom';

function Navigation() {
    
    return (
        <div className="home-container">
            {/* <h1>Pedalboard Builder</h1> */}
            <nav className="nav">
                    <Link to="/builder">
                        <div className="nav-img-container-1">
                            <img className="nav-img-1" alt="builder" src="/images/tobuilderimage.jpeg"/>
                        </div>
                    </Link>
                    <Link to="/collection">
                        <div className="nav-img-container-2">
                            <img className="nav-img-2" alt="collection" src="/images/toboardcollection.jpeg"/>
                        </div>
                    </Link>
                        {/* <div className="content"> Hello World </div>  */}
            </nav>
        </div>
    )
}

export default Navigation;