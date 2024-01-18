import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { MdPendingActions } from "react-icons/md";
import Services from "../Services";
import { useNavigate, useLocation } from "react-router-dom";
import LoanDetails from "../components/BorrowerLoanDetails/LoanDetails";
import DashboardDetail from "../components/BorrowerLoanDetails/DashboardDetail";
import PaymentScreen from "../components/BorrowerLoanDetails/PaymentScreen";
import Loader from "../core/Loader";

function BorrowerDashboard() {
  const location = useLocation();
  const [userData, setUserData] = useState(location.state.data);
  const [loanId, setLoanId] = useState(location.state.loanId);
  const [data, setData] = useState();
  const [isPaymentScreen, setIsPaymentScreen] = useState(false);
  const [isBalance, setIsBalance] = useState(false);
  const [isDashboard, setIsDashboard] = useState(true);
  const [isViewLoan, setIsViewLoan] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const borrowerId = localStorage.getItem("borrowerId");
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");

  const handleIsViewLoanChange = (newValue) => {
    setIsDashboard(false);
    setIsBalance(newValue);
  };

  const getBorrowerLoanDetails = () => {
    setIsLoading(true);
    Services.getBorrwrLoanDetailsForDshBrd(borrowerId, loanId?.id).then((res) => {
      setData(res.dashBoardData);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getBorrowerLoanDetails();
  }, [borrowerId]);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div style={{ marginTop: "110px", backgroundColor: "#f5f7fb" }}>
          {/* <Row style={{ marginTop: "125px" }}>
        <h3 className="text-center">
          Loan Number : <b style={{ color: "#0D59A9" }}>{data?.loanNumber}</b>
        </h3>
      </Row> */}
          {/* <Container className="container p-0 bg-light p-5">
        <section>
          <Row>
            <Col className="d-flex align-items-center">
              <GiTakeMyMoney size="45" color="green" className="me-4" />
              <h5 style={{ color: "#0D59A9" }}>
                Total Loan Amount <br></br>
                <b style={{ color: "#097E77" }}>{data?.loanAmount}</b>
              </h5>
            </Col>
            <Col className="d-flex align-items-center">
              <HiCurrencyDollar size="45" color="red" className="me-4" />
              <h5 style={{ color: "#0D59A9" }}>
                Outstanding Loan Amount <br></br>
                <b style={{ color: "#097E77" }}>{data?.loanBalance}</b>
              </h5>
            </Col>
            <Col className="d-flex align-items-center">
              <FaMoneyCheckAlt size="45" color="green" className="me-4" />
              <h5 style={{ color: "#0D59A9" }}>
                Monthly Due Amount <br></br>
                <b style={{ color: "#071594" }}>{data?.monthlyPaymentDue}</b>
              </h5>
            </Col>
          </Row>
        </section>
        <section>
          <Row>
            <Col className="d-flex align-items-center">
              <BsFillCalendar2DateFill size="45" color="green" className="me-4" />{" "}
              <h5 style={{ color: "#0D59A9" }}>
                Next Due Date<br></br>
                <b style={{ color: "#506A04" }}>21 MAR 2023</b>
              </h5>
            </Col>
            <Col className="d-flex align-items-center">
              <GrTransaction size="45" color="red" className="me-4" />
              <h5 style={{ color: "#0D59A9" }}>
                Payment Options <br></br>
                <b style={{ color: "#037E61" }}>{data?.paymentOption?.value}</b>
              </h5>
            </Col>
            <Col className="d-flex align-items-center">
              <MdPendingActions size="45" color="green" className="me-4" />
              <h5 style={{ color: "#0D59A9" }}>
                Pending Dues<br></br> <b style={{ color: "#071594" }}>6</b>
              </h5>
            </Col>
          </Row>
        </section>
      </Container> */}
          <div style={{ height: "80px", backgroundColor: "#0D59A9", display: "flex" }}>
            <div className="p-4" style={{ display: "flex", alignItems: "center", marginLeft: "10%" }}>
              <div
                style={{
                  color: "#fff",
                  borderRight: "1px solid white",
                  paddingRight: "25px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h4 style={{ color: "#fff", fontFamily: "Times New Roman", marginBottom: 0 }}>
                  Welcome, {firstName} {lastName}
                </h4>
                <h5 style={{ color: "#fff", fontFamily: "Times New Roman", marginBottom: 0 }}>
                  {/* Loan Number : <b>{data?.loanNumber}</b> */}
                  Loan Number : <b>{loanId.loanNumber}</b>
                </h5>
              </div>
              <div style={{ paddingLeft: "25px", display: "flex" }}>
                <div
                  style={{ cursor: "pointer" }}
                  className="mx-5"
                  onClick={() => {
                    setIsDashboard(true);
                    setIsPaymentScreen(false);
                    setIsBalance(false);
                  }}
                >
                  <h5
                    style={{
                      color: "#fff",
                      fontFamily: "Times New Roman",
                      marginBottom: 0,
                      textDecoration: isDashboard ? "underline" : "none",
                    }}
                  >
                    Dashboard
                  </h5>
                </div>
                {/* <div style={{ cursor: "pointer" }}>
                  <h5 style={{ color: "#fff", fontFamily: "Times New Roman", marginBottom: 0 }}>Account Management</h5>
                </div> */}
              </div>
            </div>
          </div>
          <Container>
            <Row className="p-2 pt-5">
              <Col sm={true} className="d-flex justify-content-center">
                <Row
                  className="dash-payment-card"
                  style={{
                    backgroundColor: isPaymentScreen ? "#0D59A9" : "white",
                  }}
                  onClick={() => {
                    setIsPaymentScreen(true);
                    setIsBalance(false);
                    setIsDashboard(false);
                  }}
                >
                  <Col xl={4} className="d-flex justify-content-center">
                    <BsFillCalendar2DateFill size="45" color={isPaymentScreen ? "#fff" : "#0D59A9"} />
                  </Col>
                  <Col xl={8} className="d-flex justify-content-center flex-column align-items-end">
                    <p className="mb-0" style={{ fontSize: 14, color: isPaymentScreen ? "#fff" : "black" }}>
                      Due : {data?.loanInfoData?.paymentDate}
                    </p>
                    <p className="mb-0 fw-bold" style={{ color: isPaymentScreen ? "#fff" : "black" }}>
                      ${data?.loanInfoData?.schedulePayment}
                    </p>
                    <p
                      className="mb-0 text-decoration-underline fw-bold"
                      style={{ color: isPaymentScreen ? "#fff" : "#0D59A9", fontSize: 14 }}
                    >
                      Make a Payment
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col sm={true} className="d-flex justify-content-center">
                <Row
                  className="dash-payment-card"
                  style={{
                    backgroundColor: isBalance ? "#0D59A9" : "white",
                  }}
                  onClick={() => {
                    setIsPaymentScreen(false);
                    setIsBalance(true);
                    setIsDashboard(false);
                  }}
                >
                  <Col xl={4} className="d-flex justify-content-center">
                    <FaMoneyCheckAlt size="45" color={isBalance ? "#fff" : "green"} />
                  </Col>
                  <Col xl={8} className="d-flex justify-content-center flex-column align-items-end">
                    <p className="mb-0" style={{ color: isBalance ? "#fff" : "black" }}>
                      Balance
                    </p>
                    <p className="mb-0 fw-bold" style={{ color: isBalance ? "#fff" : "black" }}>
                      ${data?.balanceAmount}
                    </p>
                    <p
                      className="mb-0 text-decoration-underline fw-bold"
                      style={{ color: isBalance ? "#fff" : "#0D59A9", fontSize: 14 }}
                    >
                      My Loan
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col sm={true} className="d-flex justify-content-center">
                {/* <Row
              className="dash-payment-card"
              style={{
                backgroundColor: "white",
              }}
            >
              <Col xl={4} className="d-flex justify-content-center">
                <MdPendingActions size="45" color="red" />
              </Col>
              <Col xl={8} className="d-flex justify-content-center flex-column align-items-end">
                <p className="mb-0">Pending Dues</p>
                <p className="mb-0">5</p>
              </Col>
            </Row> */}
              </Col>

              <Col sm={true} className="d-flex justify-content-center">
                {/* <Row
              className="dash-payment-card"
              style={{
                backgroundColor: "white",
              }}
            >
              <Col xl={4} className="d-flex justify-content-center">
                <MdPendingActions size="45" color="red" />
              </Col>
              <Col xl={8} className="d-flex justify-content-center flex-column align-items-end">
                <p className="mb-0">Pending Dues</p>
                <p className="mb-0">5</p>
              </Col>
            </Row> */}
              </Col>
            </Row>
          </Container>
          {isDashboard === true ? (
            <DashboardDetail onIsViewLoanChange={handleIsViewLoanChange} loanData={data} />
          ) : isBalance === true ? (
            <LoanDetails loanDetail={data} />
          ) : isPaymentScreen === true ? (
            <PaymentScreen loanDetail={data} />
          ) : null}
        </div>
      )}
    </>
  );
}

export default BorrowerDashboard;
