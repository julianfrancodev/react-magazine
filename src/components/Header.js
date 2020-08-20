import React, { useState, useContext } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import SigninModal from './SigninModal';
import { FirebaseContext } from '../firebase';
import { Link, Redirect, NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";


export default function Header() {

    const history = useHistory();

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </a>
    ));

    const [signinModalShow, setSigninModalShow] = useState(false);

    const { user, firebase } = useContext(FirebaseContext);



    return (
        <>
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 ">
                        {user ? (
                            <>
                                <Dropdown>
                                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                        <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" className="border border-secondary rounded-circle" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        <Dropdown.Item onClick={()=> history.push('/Profile')}><h5 className='dropMenu'>{user.displayName}</h5></Dropdown.Item>
                                        <Dropdown.Item onClick={()=> history.push('/CreatePost')}><i className="fa fa-edit"></i> Crear Blog</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={()=> history.push('/Settings')}><i className="fa fa-cogs"></i> Ajustes</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={()=> firebase.logout()}><i className="fa fa-sign-out"></i> Cerrar Sesion</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </>
                        ) : (
                                <>
                                    <Button onClick={() => setSigninModalShow(true)} variant="outline-secondary">Ingresar</Button>

                                    <SigninModal
                                        show={signinModalShow}
                                        onHide={() => setSigninModalShow(false)}
                                    />
                                </>

                            )}
                    </div>

                    <div className="col-4 text-center">
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <span className="blog-header-logo text-dark">Veritas</span>
                        </Link>

                    </div>

                    <div className="col-4 d-flex justify-content-end">

                        <a className="text-muted" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth={"2"} stroke="currentColor" strokeLinecap={"round"} strokeLinejoin={"round"} className="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
                        </a>

                    </div>

                </div>
            </header>

            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <a className="p-2 text-muted" href="#">World</a>
                    <a className="p-2 text-muted" href="#">U.S.</a>
                    <a className="p-2 text-muted" href="#">Technology</a>
                    <a className="p-2 text-muted" href="#">Design</a>
                    <a className="p-2 text-muted" href="#">Culture</a>
                    <a className="p-2 text-muted" href="#">Business</a>
                    <a className="p-2 text-muted" href="#">Politics</a>
                    <a className="p-2 text-muted" href="#">Opinion</a>
                    <a className="p-2 text-muted" href="#">Science</a>
                    <a className="p-2 text-muted" href="#">Health</a>
                    <a className="p-2 text-muted" href="#">Style</a>
                    <a className="p-2 text-muted" href="#">Travel</a>
                </nav>
            </div>

        </>
    )
}
