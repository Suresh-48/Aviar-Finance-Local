import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

function BorrowerLoanCount() {
  const location = useLocation();

  const [userData, setUserData] = useState(location.state.data.loanId);
  const [borrowerData, setBorrowerData] = useState(location.state.data.borrowerId);
  const [borrowerLoanDatas, setBorrowerLoanDatas] = useState(location.state.userLoanDatas);

  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "110px", backgroundColor: "#f5f7fb" }}>
      <div className="p-4 " style={{ height: "90vh" }}>
        <h3 className="text-center p-4">
          Welcome, {firstName} {lastName} Please Choose Your Loan Card!
        </h3>
        <Container>
          <Row>
            {borrowerLoanDatas.map((item, index) => (
              <Col
                className="loan-count-card"
                onClick={() => {
                  localStorage.setItem("loanId", item?.id);
                  localStorage.setItem("loanNumber", item?.loanNumber);
                  navigate(`/borrower/${firstName}${lastName}`, {
                    state: {
                      data: location.state.data,
                      loanId: item,
                    },
                  });
                }}
              >
                <Row className="pb-3">
                  <Col>
                    <div
                      style={{
                        height: "30px",
                        width: "30px",
                        borderRadius: "50%",
                        border: "2px solid black",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: 14,
                      }}
                    >
                      {index + 1}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="pb-2" xs={12} md={6} style={{ fontSize: 14 }}>
                    Loan Number
                  </Col>
                  <Col className="p-0 fw-bold" xs={12} md={1}>
                    :
                  </Col>
                  <Col className="p-0" xs={12} md={5}>
                    <p
                      style={{
                        marginBottom: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        fontWeight: "bold",
                        width: "100%",
                        fontSize: 14,
                      }}
                    >
                      {item?.loanNumber ? item?.loanNumber : "-"}
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col className="pb-2" xs={12} md={6} style={{ fontSize: 14 }}>
                    Loan Amount
                  </Col>
                  <Col className="p-0 fw-bold" xs={12} md={1}>
                    :
                  </Col>
                  <Col className="p-0" xs={12} md={5}>
                    <p
                      style={{
                        marginBottom: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        fontWeight: "bold",
                        width: "100%",
                        fontSize: 14,
                      }}
                    >
                      {item?.loanAmount ? `$ ${item?.loanAmount}` : "-"}
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col className="pb-2" xs={12} md={6} style={{ fontSize: 14 }}>
                    Loan Term in Years
                  </Col>
                  <Col className="p-0 fw-bold" xs={12} md={1}>
                    :
                  </Col>
                  <Col className="p-0" xs={12} md={5}>
                    <p
                      style={{
                        marginBottom: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        fontWeight: "bold",
                        width: "100%",
                        fontSize: 14,
                      }}
                    >
                      {item?.loanTermsInYear ? item?.loanTermsInYear : "-"}
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6} style={{ fontSize: 14 }}>
                    Payments Per Year
                  </Col>
                  <Col className="p-0 fw-bold" xs={12} md={1}>
                    :
                  </Col>
                  <Col className="p-0" xs={12} md={5}>
                    <p
                      style={{
                        marginBottom: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        fontWeight: "bold",
                        width: "100%",
                        fontSize: 14,
                      }}
                    >
                      {item?.paymentPerYear ? item?.paymentPerYear : "-"}
                    </p>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
        {/* <Container style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Row style={{ width: "100%" }}>
            <Col
              xs={12}
              md={4}
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
                maxWidth: "95%",
              }}
            >
              <div className="loan-count-card">
                {data.map((item, index) => (
                  <Row
                    onClick={() =>
                      navigate(`/borrower/${firstName}${lastName}`, {
                        state: {
                          data: location.state.data,
                        },
                      })
                    }
                  >
                    <Col xs={12} md={8}>
                      {item.field}
                    </Col>
                    <Col xs={12} md={4}>
                      <p
                        style={{
                          marginBottom: 0,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontWeight: "bold",
                          width: "95%",
                        }}
                      >
                        : {item.value}
                      </p>
                    </Col>
                  </Row>
                ))}
              </div>
            </Col>
          </Row>
        </Container> */}
      </div>
    </div>
  );
}

export default BorrowerLoanCount;
