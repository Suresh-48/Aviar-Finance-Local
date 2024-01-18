import React from "react";
import { Container, Table } from "react-bootstrap";
import wallPaper from "./img/wallpaper.jpg";
function companystatelicences() {
  return (
    <div>
      <Container fluid>
        <div
          className="color mx-2 mt-5"
          style={{
            backgroundImage: `url(${wallPaper})`,
          }}
        >
          <div className="overlay-effect">
            <h1 className="name ml-3">State Licenses</h1>
          </div>
        </div>
        <Container className="ml-3 mt-5" fluid style={{ width: "95%" }}>
          <h3 className="head mt-3" style={{ color: "rgb(0, 113, 174)" }}>
            State Licenses
          </h3>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th className="head">State</th>
                <th className="head">License Number</th>
                <th className="head">License Type</th>
              </tr>
            </thead>
            <tbody className="para_1">
              <tr>
                <td className="para_1">Illinois</td>
                <td className="para_1">MB.6760743</td>
                <td className="para_1">Residential Mortgage License (Brokering Activity)</td>
              </tr>
            </tbody>
            {/* <tbody className="para_1">
              <tr className="para_1">
                <td className="para_1">Florida</td>
                <td className="para_1">MBR304</td>
                <td className="para_1">Mortgage Broker</td>
              </tr>
              <tr>
                <td className="para_1">Illinois</td>
                <td className="para_1">MB.6760743</td>
                <td className="para_1">Residential Mortgage License (Brokering Activity)</td>
              </tr>
              <tr>
                <td className="para_1">Indiana</td>
                <td className="para_1">9908</td>
                <td className="para_1">Loan Broker License</td>
              </tr>
              <tr>
                <td className="para_1">Iowa</td>
                <td className="para_1">2007-0141</td>
                <td className="para_1">Mortgage Broker</td>
              </tr>
              <tr>
                <td className="para_1">Kansas</td>
                <td className="para_1">MC.0001466</td>
                <td className="para_1">Mortgage Company License</td>
              </tr>
              <tr>
                <td className="para_1">Minnesota</td>
                <td className="para_1">MN-MO-20396509</td>
                <td className="para_1">Residential Mortgage Originator License</td>
              </tr>
              <tr>
                <td className="para_1">Missouri</td>
                <td className="para_1">16-1667</td>
                <td className="para_1">Mortgage Broker</td>
              </tr>
              <tr>
                <td className="para_1">Nebraska</td>
                <td className="para_1">1989</td>
                <td className="para_1">Mortgage Broker</td>
              </tr>
              <tr>
                <td className="para_1">Utah</td>
                <td className="para_1">11032618</td>
                <td className="para_1">Mortgage Entity License</td>
              </tr>
              <tr>
                <td className="para_1">Utah</td>
                <td className="para_1">11032618</td>
                <td className="para_1">Mortgage Entity License</td>
              </tr>
              <tr>
                <td className="para_1">Wisconsin</td>
                <td className="para_1">213484BR</td>
                <td className="para_1">Mortgage Broker License</td>
              </tr>
            </tbody> */}
          </Table>
        </Container>
      </Container>
    </div>
  );
}

export default companystatelicences;
