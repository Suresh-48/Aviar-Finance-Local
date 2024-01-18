import React, { useEffect, useState } from "react";
import Services from "../Services";
import MaterialTable from "material-table";
import { tableIcons } from "../core/tableIcons";
import { Container } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loader from "../core/Loader";

function AdminDashboard() {
  const [data, setData] = useState();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getBorrowerList();
  }, []);

  const getBorrowerList = () => {
    setIsLoading(true);
    Services.GetAllBorrowerForAdmin().then((res) => {
      setData(res?.data?.borrowerData);
      setIsLoading(false);
    });
  };


  const columns = [
    {
      title: "S.No",
      render: (rowData) => `${rowData?.tableData?.id + 1}`,
      width: "50%",
    },
    {
      title: "Name",
      render: (rowData) => (
        <text>
         {rowData?.borowData?.borrowerId?.firstName ? rowData?.borowData?.borrowerId?.firstName: 
         rowData?.borowData?.firstName}
          {rowData?.borowData?.borrowerId?.lastName ? rowData?.borowData?.borrowerId?.lastName :
          rowData?.borowData?.lastName}
        </text>
      ),
    },

    {
      title: "Email",
      width: 2,
      render: (rowData) => <text>{rowData?.borowData?.borrowerId?.email ? 
        rowData?.borowData?.borrowerId?.email : rowData?.borowData?.email}</text>,
    },
    {
      title: "Loan Number",
      width: 2,
      render: (rowData) => 
      <text>{rowData?.borowData?.loanNumber ? rowData?.borowData?.loanNumber : "-"}</text>,
    },
    {
      title: "Phone No",
      width: 2,
      render: (rowData) => (
        <text style={{ fontSize: 14 }}>
          {rowData?.borowData?.borrowerId?.cellPhone ? 
          rowData?.borowData?.borrowerId?.cellPhone : rowData?.borowData?.cellPhone}</text>
      ),
    },
    {
      title: "Loan Amount",
      width: 2,
      render: (rowData) => (
        <text style={{ fontSize: 14 }}>
          {rowData?.borowData?.loanAmount
            ? rowData?.borowData?.loanAmount
            : "-"}
        </text>
      ),
    },
    {
      title: "Balance",
      width: 2,
      render: (rowData) => (
        <text style={{ fontSize: 14 }}>
          {rowData?.balanceAmount ? rowData?.balanceAmount : "-"}
        </text>
      ),
    },
    {
      title: "Details",
      render: (rowData) => (
        rowData?.borowData?.borrowerId ? 
        <p
          className="mb-0 text-decoration-underline"
          style={{ color: "blue", fontSize: 14, cursor: "pointer" }}
          onClick={() =>
            navigate(`/borrower/loan/detail/${rowData?.borowData?.id}`, {
              state: { values: rowData },
            })
          }
        >
          Payment Details
        </p> : 
        <p

        style={{ fontSize: 14, cursor: "pointer" }}
      >
        -
      </p>
      ),
    },
  ];

  return (
    <>
      {isLoading ? (
        <div style={{ height: "100vh" }}>
          <Loader />
        </div>
      ) : (
        <Container className="mt-5 pt-5">
          <MaterialTable
            title="Borrowers"
            icons={tableIcons}
            columns={columns}
            data={data}
            options={{
              pageSize: 10,
              cellStyle: {
                border: "1px solid #eee",
                textAlign: "center",
              },
              addRowPosition: "first",
              actionsColumnIndex: -1,
              headerStyle: {
                backgroundColor: "#14539a",
                color: "whitesmoke",
                textAlign: "center",
                zIndex: 0,
              },
              exportButton: { csv: true },
            }}
            actions={[
              (rowData) => ({
                icon: () => (
                  <>
                    <FaUserEdit
                      color="darkblue"
                      onClick={() =>
                        
                        // navigate(`/borrower/edit/${rowData?.id}`, {
                        //   state: { values: rowData },
                        // })
                        navigate(`/borrower/profile/edit/${rowData?.borowData?.borrowerId?._id ? 
                          rowData?.borowData?.borrowerId?._id : rowData?.borowData?.id}`, {
                          state: { values: rowData?.borowData },
                        })
                      }
                      size={20}
                    />
                  </>
                ),
              }),
            ]}
          />
        </Container>
      )}
    </>
  );
}

export default AdminDashboard;
