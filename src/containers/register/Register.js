import React, { useState } from "react";
import Img from "../../assets/tuyensinh.jpg";
import { Form, Button } from "react-bootstrap";
import { enrollmentApplication } from "../../services/userService";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import "./Register.css";


const Register = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [address, setAddress] = useState("");
  const [major, setMajor] = useState("");
  const [location, setLocation] = useState("");
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleOnClick = async () => {
    console.log(
      ">>>check data: ",
      name,
      phoneNumber,
      email,
      school,
      address,
      major,
      location
    );

    if (
      !name ||
      !phoneNumber ||
      !email ||
      !school ||
      !address ||
      !major ||
      !location
    ) {
      setErrorMessage("Please fill in all the fields.");
    } else if (
      !/^\d{10}$/g.test(phoneNumber) // check if the phone number is a 10-digit number
    ) {
      setErrorMessage("Invalid phone number format the phone number is a 10-digit number.");
    } else if (
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/g.test(email) // check if the email is in a valid format
    ) {
      setErrorMessage("Invalid email format.");
    } else if (major === "Major") {
      setErrorMessage("Please select a major.");
    } else if (location === "Where to register for admission") {
      setErrorMessage("Please select a location to register for admission.");
    } else {
      setErrorMessage("");
      try {
        const response = await enrollmentApplication({
          name,
          phoneNumber,
          email,
          school,
          address,
          major,
          location,
        });

        console.log("check response: ", response.data.errCode);

        if (response.data.errCode === 0) {
          setName("");
          setPhoneNumber("");
          setEmail("");
          setSchool("");
          setAddress("");
          setMajor("");
          setLocation("");
          props.saveUserRedux(true);
          navigate("/success");
        }
      } catch (e) {
        console.error(e);
      }
    }
  };


  return (
    <div className="register-container">
      <div className="register-content">
        <div className="register-image">
          <img src={Img} alt="..." className="img-fluid" />
        </div>

        <div className="register-form-container">
          <div className="register-heading">
            <h2>SCHOLARSHIP UP TO 400 MILLION VND</h2>
          </div>
          <div className="register-form">
            <Form className="p-4">
              {errorMessage && (
                <div className="error-message mb-3">
                  <p className="text-danger">{errorMessage}</p>
                </div>
              )}

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  value={name}
                  placeholder="Name"
                  onChange={(event) => setName(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  value={phoneNumber}
                  placeholder="Phone Number"
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  value={email}
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  value={school}
                  placeholder="Your school"
                  onChange={(event) => setSchool(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  value={address}
                  placeholder="Where are you from ?"
                  onChange={(event) => setAddress(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Select
                  value={major}
                  aria-label="Default select example"
                  onChange={(event) => setMajor(event.target.value)}
                >
                  <option>Major</option>
                  <option value="information technology">
                    information technology
                  </option>
                  <option value="Graphic design">Graphic design</option>
                  <option value="Business Administration">
                    Business Administration
                  </option>
                  <option value="Marketing manager">Marketing manager</option>
                  <option value="Media Management">Media Management</option>
                  <option value="Event Management">Event Management</option>
                  <option value="International bussiness">
                    International bussiness
                  </option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Select
                  value={location}
                  aria-label="Default select example"
                  onChange={(event) => setLocation(event.target.value)}
                >
                  <option>Where to register for admission</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Thành phố Hồ Chí Minh">
                    Thành phố Hồ Chí Minh
                  </option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="Cần Thơ">Cần Thơ</option>
                </Form.Select>
              </Form.Group>

              <div className="submit-button-wrapper">
                <Button className="btn-cold" variant="primary" onClick={handleOnClick}>
                  Submit
                </Button>
              </div>


            </Form>
          </div>
        </div>
      </div>


      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Chúc mừng bạn đăng kí thành công</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userDataRedux: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveUserRedux: (userData) =>
      dispatch({ type: "SAVE_USER", payload: userData }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
