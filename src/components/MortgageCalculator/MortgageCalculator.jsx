import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import Img from "../../Image/Picture1.png";
import Services from "../../Services";
import moment from "moment";

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState();
  const [interestRate, setInterestRate] = useState();
  const [loanTermInYears, setLoanTermInYears] = useState();
  const [paymentsMadePerYear, setPaymentsMadePerYear] = useState(12);
  const [loanRepaymentStartDate, setLoanRepayMentStartDate] = useState();
  const [optionalExtraPayments, setOptionalExtraPayments] = useState();
  const [data, setData] = useState([]);
  const [totalInterest, setTotalInterest] = useState();

  const getLoanData = () => {
    
    const data = {
      loanAmount: loanAmount,
      interest: interestRate,
      loanTermsInYear: loanTermInYears,
      paymentPerYear: paymentsMadePerYear,
      paymentStartDate: loanRepaymentStartDate,
    };
    Services.GetLoanValue(data).then((res) => {
      const data = res?.data?.loanInformationArray;
      setData(data);
      setTotalInterest( res?.data?.totalInterest);
    });
  };

  const options = ["5", "10", "15", "20", "25", "30"];

  return (
    <div style={{ marginTop: "80px" }}>
      <div className="mx-5 d-flex justify-content-center">
        <img src={Img} alt="" style={{ width: "500px" }} />
      </div>

      <div className="mx-5 mt-5">
        <h3>MORTGAGE AMORTIZATION SCHEDULE</h3>
        <div style={{ backgroundColor: "#20394c", height: "3px" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }} className="mx-5">
        <Row style={{ width: "100%" }}>
          <Col>
            <div>
              <div className="mt-4">
                <h5>ENTER VALUES</h5>
                <div style={{ backgroundColor: "#47b2e4", height: "2px", width: "90%" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "row", width: "90%", justifyContent: "space-between" }}>
                <label>Loan amount</label>
                <input
                  className="mortgage-inp pe-1"
                  value={loanAmount ? `$${loanAmount}` : ""}
                  onChange={(e) => {
                    const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");
                    setLoanAmount(valueWithoutDollarSign);
                  }}
                />
              </div>
              <div style={{ margin: "0.5px", width: "90%", backgroundColor: "black", height: "0.5px" }} />

              <div style={{ display: "flex", flexDirection: "row", width: "90%", justifyContent: "space-between" }}>
                <label>Interest rate</label>
                <input
                  className="mortgage-inp pe-1"
                  value={interestRate ? `${interestRate}%` : ""}
                  onChange={(e) => {
                    const valueWithoutPercentageSign = e.target.value.replace(/\%/g, "");
                    setInterestRate(valueWithoutPercentageSign);
                  }}
                />
              </div>
              <div style={{ margin: "0.5px", width: "90%", backgroundColor: "black", height: "0.5px" }} />

              <div style={{ display: "flex", flexDirection: "row", width: "90%", justifyContent: "space-between" }}>
                <label>Loan term in years</label>
                <select
                  name="maritalStatus"
                  className="mortgage-inp pe-1"
                  onChange={(e) => {
                    setLoanTermInYears(e.target.value);
                  }}
                >
                  <option value="" disabled selected>
                    Select Loan Term
                  </option>
                  {options.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ margin: "0.5px", width: "90%", backgroundColor: "black", height: "0.5px" }} />

              <div style={{ display: "flex", flexDirection: "row", width: "90%", justifyContent: "space-between" }}>
                <label>Payments made per year</label>
                <input
                  className="mortgage-inp pe-1"
                  disabled
                  value={paymentsMadePerYear}
                  onChange={(e) => {
                    setPaymentsMadePerYear(e.target.value);
                  }}
                />
              </div>
              <div style={{ margin: "0.5px", width: "90%", backgroundColor: "black", height: "0.5px" }} />

              <div style={{ display: "flex", flexDirection: "row", width: "90%", justifyContent: "space-between" }}>
                <label>Loan repayment start date</label>
                <input
                  className="mortgage-inp pe-1"
                  value={loanRepaymentStartDate}
                  type="date"
                  onChange={(e) => {
                    setLoanRepayMentStartDate(e.target.value);
                  }}
                />
              </div>
              <div style={{ margin: "0.5px", width: "90%", backgroundColor: "black", height: "0.5px" }} />

              <div style={{ marginTop: "25px", width: "90%", backgroundColor: "black", height: "0.5px" }} />
              {/* <div style={{ display: "flex", flexDirection: "row", width: "90%", justifyContent: "space-between" }}>
                <label>Optional extra payments</label>
                <input
                  className="mortgage-inp pe-1"
                  value={optionalExtraPayments ? `$${optionalExtraPayments}` : ""}
                  onChange={(e) => {
                    const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");

                    // Update the state with the cleaned value
                    setOptionalExtraPayments(valueWithoutDollarSign);
                  }}
                />
              </div> */}
              <div style={{ width: "90%", backgroundColor: "black", height: "0.5px" }} />
            </div>
          </Col>

          <Col>
            <div>
              <div className="mt-4">
                <h5>LOAN SUMMARY</h5>
                <div style={{ backgroundColor: "#20394c", height: "2px", width: "90%" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "row", width: "90%", justifyContent: "space-between" }}>
                <label>Scheduled payment</label>
                <input
                  disabled
                  className="mortgage-inp-sec pe-1"
                  value={data[0]?.totalPayment ? `$${data[0]?.totalPayment}` : `$${0}`}
                  //  onChange={()=>}
                />
              </div>
              <div style={{ margin: "0.5px", width: "90%", backgroundColor: "black", height: "0.5px" }} />
              <div style={{ display: "flex", flexDirection: "row", width: "90%", justifyContent: "space-between" }}>
                <label>Scheduled number of payments</label>
                <input
                  disabled
                  className="mortgage-inp-sec pe-1"
                  value={data[0]?.scheduleNoOfPayment ? data[0]?.scheduleNoOfPayment : 0}
                  //  onChange={()=>}
                />
              </div>
              <div style={{ margin: "0.5px", width: "90%", backgroundColor: "black", height: "0.5px" }} />
              <div style={{ display: "flex", flexDirection: "row", width: "90%", justifyContent: "space-between" }}>
                <label>Actual number of payments</label>
                <input
                  disabled
                  className="mortgage-inp-sec pe-1"
                  value={data[0]?.actualNoOfPayment ? data[0]?.actualNoOfPayment : 0}
                  //  onChange={()=>}
                />
              </div>
              <div style={{ margin: "0.5px", width: "90%", backgroundColor: "black", height: "0.5px" }} />
              <div style={{ display: "flex", flexDirection: "row", width: "90%", justifyContent: "space-between" }}>
                <label>Years saved off original loan term</label>
                <input
                  disabled
                  className="mortgage-inp-sec pe-1"
                  value={0.0}
                  //  onChange={()=>}
                />
              </div>
              <div style={{ margin: "0.5px", width: "90%", backgroundColor: "black", height: "0.5px" }} />
              <div style={{ display: "flex", flexDirection: "row", width: "90%", justifyContent: "space-between" }}>
                <label>Total early payments</label>
                <input
                  disabled
                  className="mortgage-inp-sec pe-1"
                  value={`$${0.0}`}
                  //  onChange={()=>}
                />
              </div>
              <div style={{ margin: "0.5px", width: "90%", backgroundColor: "black", height: "0.5px" }} />
              <div style={{ display: "flex", flexDirection: "row", width: "90%", justifyContent: "space-between" }}>
                <label>Total interest</label>
                <input
                  disabled
                  className="mortgage-inp-sec pe-1"
                  value={totalInterest ? `$${totalInterest}` : `$${0}`}
                  //  onChange={()=>}
                />
              </div>
              <div style={{ margin: "0.5px", width: "90%", backgroundColor: "black", height: "0.5px" }} />
              <div style={{ display: "flex", flexDirection: "row", width: "90%", justifyContent: "space-between" }}>
                <h6 className="m-0">LENDER NAME</h6>
                <input
                  disabled
                  className="mortgage-inp-sec pe-1"
                  value={"Aviar Financial Services"}
                  //  onChange={()=>}
                />
              </div>
              <div style={{ margin: "0.5px", width: "90%", backgroundColor: "black", height: "0.5px" }} />
            </div>
          </Col>
        </Row>
      </div>
      <div className="m-4 me-5 d-flex justify-content-end ">
        <Button className="me-4" onClick={() => getLoanData()}>
          Generate
        </Button>
      </div>
      <div className="m-5">
        <Table responsive="sm">
          <thead style={{ backgroundColor: "#20394c" }}>
            <tr style={{ color: "#fff", fontSize: 12 }}>
              <th>PMT No</th>
              <th>PAYMENT DATE</th>
              <th>BEGINNING BALANCE</th>
              <th>SCHEDULED PAYMENT</th>
              {/* <th>EXTRA PAYMENT</th> */}
              <th>TOTAL PAYMENT</th>
              <th>PRINCIPAL</th>
              <th>INTEREST</th>
              <th>ENDING BALANCE</th>
              <th>CUMULATIVE INTEREST</th>
            </tr>
          </thead>
          <tbody style={{ maxHeight: "300px", overflowx: "auto" }}>
            {data.length > 0 ? (
              data.map((row, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "lightblue" : "lightgray" }}>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>{row?.pmtNo}</td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>
                    {moment(row?.paymentDate).format("M/D/YYYY")}
                  </td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.beginingBalance}</td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.schedulePayment}</td>
                  {/* <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${0.0}</td> */}
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.totalPayment}</td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.principalAmount}</td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.interest}</td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.endingBalance}</td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.cumulativeInterest}</td>
                </tr>
              ))
            ) : (
              <tr
              
              style={{
                textAlign: "center",
                width: "300px",
                overflowX: "auto",
              }}
            >
              <td colSpan="10">No Records Found!</td>
            </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default MortgageCalculator;
