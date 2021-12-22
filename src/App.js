import './App.css';
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import Invoices from "./Invoices";
import Address from "./Addresses";
import Profile from "./Profile";
import CreateClient from "./CreateClient";
import Clients from "./Clients";
import Setting from "./Setting";
import CreateDocument from "./components/CreateDocument";


function App() {
  return (
    <div className="App">
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">E-Invoice</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/invoices">Invoices</Nav.Link>
                <Nav.Link href="/clients">Clients</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/setting">Setting</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/invoices' element={<Invoices />} />
          <Route path='/createInvoice' element={<CreateDocument props={'Invoice'} />} />
          <Route path='/createCreditNote' element={<CreateDocument props={'Credit Note'} />} />
          <Route path='/createDebitNote' element={<CreateDocument props={'Debit Note'} />} />
          <Route path='/address' element={<Address />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/createClient' element={<CreateClient />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </main>

    </div>
  );
}
export default App;