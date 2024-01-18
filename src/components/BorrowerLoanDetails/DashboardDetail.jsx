import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function DashboardDetail({ onIsViewLoanChange, loanData }) {
  const loanInfo = loanData;

  return (
    <div>
      <hr className="dashboard-divider my-4" />
      <Container>
        <div>
          <Row className="d-flex justify-content-center">
            {/* <Col xs={12} md={4}>
              <Row>
                <Col className="dash-card">
                  <div style={{ padding: "20px " }}>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        marginBottom: 0,
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 18,
                      }}
                    >
                      Your Autopay details
                    </p>
                    <hr style={{ height: "2px" }} />
                    <Col>
                      <p style={{ fontSize: 24, fontWeight: "bold" }}> {"$ 12345"}</p>
                    </Col>
                    <Row className="pt-1">
                      <Col xs={12} md={7} style={{ fontFamily: "Times New Roman" }}>
                        <p className="mb-0"> Monthly Payment Amount</p>
                      </Col>
                      <Col xs={12} md={5} style={{ display: "flex" }}>
                        <p
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            fontWeight: "bold",
                            marginBottom: 1,
                            display: "flex",
                            alignItems: "center",
                            fontSize: 15,
                          }}
                        >
                          : {"$123456"}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={7} style={{ fontFamily: "Times New Roman" }}>
                        Actual Due Date
                      </Col>
                      <Col xs={12} md={5}>
                        <p
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            fontWeight: "bold",
                            marginBottom: 1,
                            fontSize: 15,
                          }}
                        >
                          : {"12/12/1222"}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={7} style={{ fontFamily: "Times New Roman" }}>
                        Next Draft Date
                      </Col>
                      <Col xs={12} md={5}>
                        <p
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            fontWeight: "bold",
                            marginBottom: 1,
                            fontSize: 15,
                          }}
                        >
                          : {"12/12/1222"}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={7} style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}>
                        Total Payment
                      </Col>
                      <Col xs={12} md={5}>
                        <p
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            fontWeight: "bold",
                            marginBottom: 1,
                            fontSize: 15,
                          }}
                        >
                          : {"$123456"}
                        </p>
                      </Col>
                    </Row>
                  </div>
                  <div style={{ backgroundColor: "#f2f6fa", color: "#0D59A9", cursor: "pointer" }}>
                    <p className="mb-0 py-2 text-center fw-bold">Payment Information</p>
                  </div>
                </Col>
              </Row>
            </Col> */}

            <Col xs={12} md={4}>
              <Row>
                <Col className="dash-card">
                  <div style={{ padding: "20px " }}>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        marginBottom: 0,
                        fontWeight: "bold",
                        fontSize: 18,
                      }}
                    >
                      Your Loan Balance is
                    </p>
                    <b style={{ fontSize: 20 }}>${loanInfo?.balanceAmount}</b>
                    <hr style={{ height: "2px" }} />
                    <p style={{ fontFamily: "Times New Roman", marginBottom: 1 }}>Loan Details</p>
                    <p style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}>
                      {loanInfo?.paymentStartMonth} - {loanInfo?.paymentEndMont}
                    </p>
                  </div>
                  <div
                    style={{ backgroundColor: "#f2f6fa", color: "#0D59A9", cursor: "pointer" }}
                    onClick={() => {
                      onIsViewLoanChange(true); // Toggle the value and pass it to the parent
                    }}
                  >
                    <p className="mb-0 py-2 text-center fw-bold">View Loan</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default DashboardDetail;
