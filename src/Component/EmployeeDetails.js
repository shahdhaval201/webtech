import React, { useState } from "react";
import Swal from "sweetalert2";
import "../Edetails.css";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { useRef } from "react";

const EmployeeDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneno: "",
    email: "",
    university: "",
    degree: "",
    institute: "",
    totalattended: "",
    empname: "",
    company: "",
    designation: "",
    experince: "",
  });

  const [AllData, setAllData] = useState([]);

  function FormDetails(e) {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  }

  console.log(formData);

  function SubmitForm(e) {
    e.preventDefault();
    setAllData([...AllData, formData]);
    setFormData({
      name: "",
      address: "",
      phoneno: "",
      email: "",
      university: "",
      degree: "",
      institute: "",
      totalattended: "",
      empname: "",
      company: "",
      designation: "",
      experince: "",
    });
    //alert("You clicked the button!");
    Swal.fire("Good!", "Thank you for submission.", "success");
  }

  const contextArea = useRef(null);

  function handleSavePdf(e) {
    savePDF(contextArea.current, { paperSize: "A4" });
  }

  return (
    <>
      <div>
        <div className="container-fluid" id="grad1">
          <div className="row justify-content-center mt-0">
            <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
              <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                <h2>
                  <strong>Employee Details</strong>
                </h2>

                <div className="row">
                  <div className="col-md-12 mx-0">
                    <form id="msform">
                      {/* progressbar */}
                      <ul id="progressbar">
                        <li className="active" id="account">
                          <strong>Personal</strong>
                        </li>
                        <li id="personal">
                          <strong>Educational</strong>
                        </li>
                        <li id="payment">
                          <strong>Professional</strong>
                        </li>
                        <li id="confirm">
                          <strong>Finish</strong>
                        </li>
                      </ul>
                      {/* fieldsets */}
                      <fieldset>
                        <div className="form-card">
                          <h2 className="fs-title">Personal Details</h2>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={FormDetails}
                          />
                          <input
                            type="text"
                            name="address"
                            placeholder="Enter your Address"
                            value={formData.address}
                            onChange={FormDetails}
                          />
                          <input
                            type="number"
                            name="phoneno"
                            placeholder="Enter your Phone no"
                            value={formData.phoneno}
                            onChange={FormDetails}
                          />
                          <input
                            type="email"
                            name="email"
                            placeholder="Email your Id"
                            value={formData.email}
                            onChange={FormDetails}
                          />
                        </div>
                        <input
                          type="button"
                          name="next"
                          className="next action-button"
                          defaultValue="Next Step"
                        />
                      </fieldset>
                      <fieldset>
                        <div className="form-card">
                          <h2 className="fs-title">Personal Information</h2>
                          <input
                            type="text"
                            name="university"
                            placeholder="Enter University Name"
                            value={formData.university}
                            onChange={FormDetails}
                          />
                          <input
                            type="text"
                            name="degree"
                            placeholder="Enter Your Degree Name"
                            value={formData.degree}
                            onChange={FormDetails}
                          />
                          <input
                            type="text"
                            name="institute"
                            placeholder="Enter Your Institute Name"
                            value={formData.institute}
                            onChange={FormDetails}
                          />
                          <input
                            type="text"
                            name="totalattended"
                            placeholder="Enter Total Experience"
                            value={formData.totalattended}
                            onChange={FormDetails}
                          />
                        </div>
                        <input
                          type="button"
                          name="previous"
                          className="previous action-button-previous"
                          defaultValue="Previous"
                        />
                        <input
                          type="button"
                          name="next"
                          className="next action-button"
                          defaultValue="Next Step"
                        />
                      </fieldset>
                      <fieldset>
                        <div className="form-card">
                          <h2 className="fs-title">Professional Information</h2>
                          <input
                            type="text"
                            name="empname"
                            placeholder="Enter Employee Name"
                            value={formData.empname}
                            onChange={FormDetails}
                          />
                          <input
                            type="text"
                            name="company"
                            placeholder="Enter Your Company Name"
                            value={formData.company}
                            onChange={FormDetails}
                          />
                          <input
                            type="text"
                            name="designation"
                            placeholder="Enter Your Designation Name"
                            value={formData.designation}
                            onChange={FormDetails}
                          />
                          <input
                            type="text"
                            name="experince"
                            placeholder="Enter Total Experience"
                            value={formData.experince}
                            onChange={FormDetails}
                          />
                        </div>
                        <input
                          type="button"
                          name="previous"
                          className="previous action-button-previous"
                          defaultValue="Previous"
                        />
                        <input
                          type="submit"
                          name="next"
                          className="next action-button"
                          defaultValue="Submit"
                          onClick={SubmitForm}
                        />
                      </fieldset>

                      <fieldset>
                        <div className="form-card">
                          <div ref={contextArea}>
                            <h4>Personal Details</h4>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">Name</th>
                                  <th scope="col">Address</th>
                                  <th scope="col">Phone Number</th>
                                  <th scope="col">Email ID</th>
                                </tr>
                              </thead>
                              <tbody>
                                {AllData.map((item) => {
                                  return (
                                    <tr>
                                      <td>{item.name}</td>
                                      <td>{item.address}</td>
                                      <td>{item.phoneno}</td>
                                      <td>{item.email}</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                            <h4>Educational Details</h4>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">University Name</th>
                                  <th scope="col">Degree</th>
                                  <th scope="col">Intitute Name</th>
                                  <th scope="col">Years Attended</th>
                                </tr>
                              </thead>
                              <tbody>
                                {AllData.map((item) => {
                                  return (
                                    <tr>
                                      <td>{item.university}</td>
                                      <td>{item.degree}</td>
                                      <td>{item.institute}</td>
                                      <td>{item.totalattended}</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>

                            <h4>Professional Details</h4>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">Employee Name</th>
                                  <th scope="col">Company Name</th>
                                  <th scope="col">Designation</th>
                                  <th scope="col">Total experince</th>
                                </tr>
                              </thead>
                              <tbody>
                                {AllData.map((item) => {
                                  return (
                                    <tr>
                                      <td>{item.empname}</td>
                                      <td>{item.company}</td>
                                      <td>{item.designation}</td>
                                      <td>{item.experince}</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                            {/* 
                            <button type="button" onClick={handleSavePdf}>
                              Download
                            </button> */}
                          </div>
                          <button type="button" onClick={handleSavePdf}>
                            Download
                          </button>
                          {/* <div>
                            <Document
                              file="somefile.pdf"
                              onLoadSuccess={DownloadPdf}
                            >
                              <Page pageNumber={pageNumber} />
                            </Document>
                            <p>
                              Page {pageNumber} of {numPages}
                            </p>
                          </div> */}
                          {/* <h2 className="fs-title text-center">Success !</h2>
                          <br />
                          <br />
                          <div className="row justify-content-center">
                            <div className="col-3">
                              <img
                                src="https://img.icons8.com/color/96/000000/ok--v2.png"
                                className="fit-image"
                              />
                            </div>
                          </div>
                          <br />
                          <br />
                          <div className="row justify-content-center">
                            <div className="col-7 text-center">
                              <h5>You Have Successfully Signed Up</h5>
                            </div>
                          </div> */}
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
