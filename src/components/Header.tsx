import Navbar from '@trimbleinc/modus-react-bootstrap/Navbar';
import Button from '@trimbleinc/modus-react-bootstrap/Button';
import OverlayTrigger from '@trimbleinc/modus-react-bootstrap/OverlayTrigger';
import Nav from '@trimbleinc/modus-react-bootstrap/Nav';
import Tooltip from '@trimbleinc/modus-react-bootstrap/Tooltip';

export default function Header() {

  return (
    <Navbar collapseOnSelect expand="sm" bg="white">
      <Navbar.Brand className=" mr-auto ml-2" href="#">
        <img
          src="https://modus-bootstrap.trimble.com/img/trimble-logo.svg"
          width="107"
          height="25"
          className="img-fluid d-none d-sm-block"
          alt="home"
        />
        <img
          src="https://modus-bootstrap.trimble.com/img/trimble-icon.svg"
          className="d-block d-sm-none"
          height="25"
          width="25"
          alt="home"
        />
      </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}