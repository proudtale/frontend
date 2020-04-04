import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends Component {
  render() {
    return (
      <MDBFooter color="mdb-color darken-3" className="font-small pt-4 mt-4">
        <MDBContainer fluid>
          <MDBRow className="justify-content-center">
            <MDBCol md="3">
              <h5 className="title font-weight-bolder">Navigation</h5>
              <ul className="pl-0">
                <li className="list-unstyled">
                  <a href="#!">Home</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Register</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Signin</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Contact Information</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title font-weight-bolder">
                Proudtales Advertising
              </h5>
              <ul className="pl-0">
                <li className="list-unstyled">
                  <a href="#!">Instagram</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Facebook</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Twitter</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Youtube</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title font-weight-bolder">Let Us Help You</h5>
              <ul className="pl-0">
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3 mdb-color darken-4">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://proudtale.com/"> proudtales.com</a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
