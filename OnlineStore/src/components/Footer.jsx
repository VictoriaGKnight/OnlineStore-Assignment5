import './Footer.css'

function Footer(props) {
    return (
        <footer className="app-footer">
            <div className="footer-content">

                <div className="footer-center">
                    <h2 className="footer-logo">{props.storeName}</h2>
                    <p>Email: {props.email}</p>
                    <p>Phone: {props.phone}</p>
                    <p>Address: {props.address}</p>
                </div>

                <div className="footer-links">
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            
            </div>
        </footer>
    );
}

export default Footer;