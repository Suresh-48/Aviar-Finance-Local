import HttpClient from "../Config/httpClient";

function login(payload) {
  return HttpClient({
    url: "/api/v1/users/login",
    method: "POST",
    data: {
      ...payload,
    },
  });
}
function CreateBorrower(payload, userId) {
  const adminId = userId;
  return HttpClient({
    url: "/api/v1/borrower/",
    method: "POST",
    data: {
      adminId,
      ...payload,
    },
  });
}

function GetAllBorrower() {
  return HttpClient({
    url: "/api/v1/borrower/",
    method: "GET",
  });
}
function GetAllBorrowerForAdmin() {
  return HttpClient({
    url: "/api/v1/borrower/for/admin",
    method: "GET",
  });
}
function GetBorrowerDetails(borrowerId) {
  return HttpClient({
    url: `/api/v1/borrower/${borrowerId}`,
    method: "GET",
  });
}
function GetSingleBorrowerLoanDetails(loanId) {
  return HttpClient({
    url: `/api/v1/borrower/single/loan/${loanId}`,
    method: "GET",
  });
}

function UpdateBorrowerDetails(borrowerId, payload, adminId) {
  return HttpClient({
    url: `/api/v1/borrower/${borrowerId}`,
    method: "PATCH",
    data: {
      adminId,
      ...payload,
    },
  });
}
function getUserDetails(userId) {
  return HttpClient({
    url: `/api/v1/users/${userId}`,
    method: "GET",
  });
}
function UpdateUserDetails(userId, payload) {
  return HttpClient({
    url: `/api/v1/users/${userId}`,
    method: "PATCH",
    data: {
      ...payload,
    },
  });
}
function borrowerSignup(payload) {
  return HttpClient({
    url: `/api/v1/borrower/signup`,
    method: "POST",
    data: {
      ...payload,
    },
  });
}
function createBorrower(payload) {
  return HttpClient({
    url: `/api/v1/borrower/`,
    method: "POST",
    data: {
      ...payload,
    },
  });
}

// function GetLoanValue(payload) {
//   const userId = "6450ca31bfe08f752ed8e639";
//   return HttpClient({
//     url: `/api/v1/loan/get/value/${userId}`,
//     method: "PUT",
//     data: {
//       payload,
//     },
//   });
// }

function GetLoanValue(payload) {
  // Assuming payload is an object with properties to be sent as parameters
  const queryString = new URLSearchParams(payload).toString();

  return HttpClient({
    url: `/api/v1/loan/get/value?${queryString}`,
    method: "GET",
    // No need to include data property for the request body
  });
}
function CreateBorrowerLoan(payload) {
  const queryString = new URLSearchParams(payload).toString();

  return HttpClient({
    url: `/api/v1/loan/create?${queryString}`,
    method: "POST",
    // No need to include data property for the request body
  });
}

function monthlyLoanPayment(payload) {
  const queryString = new URLSearchParams(payload).toString();
  return HttpClient({
    url: `/api/v1/loan/monthly/payment?${queryString}`,
    method: "PUT",
  });
}
function monthlyLoanPaymentForBorrower(payload) {
  const queryString = new URLSearchParams(payload).toString();

  return HttpClient({
    url: `/api/v1/loan//create/stripe/pay?${queryString}`,
    method: "POST",
  });
}

function getBorrowerLoanData(loanId) {
  return HttpClient({
    url: `/api/v1/borrower/loan/${loanId}`,
    method: "GET",
  });
}
function getBorrowerLoanSchedules(loanId) {
  return HttpClient({
    url: `/api/v1/loan/individual/loan/info/${loanId}`,
    method: "GET",
  });
}
function getBorrowerLoanInfo(payload) {
  const queryString = new URLSearchParams(payload).toString();
  return HttpClient({
    url: `/api/v1/loan/schedule/info?${queryString}`,
    method: "GET",
    data: {
      payload,
    },
  });
}
function getBorrwrLoanDetailsForDshBrd(borrowerId, loanId) {
  return HttpClient({
    url: `/api/v1/borrower/loan/info/${borrowerId}/${loanId}`,
    method: "GET",
  });
}

function postBorrowerAccountDetails(payload) {
  return HttpClient({
    url: "/api/v1/loan/create/monthly/pay",
    method: "POST",
    data: { ...payload },
  });
}

function getBorrowerBankDetails(userId) {
  return HttpClient({
    url: `/api/v1/loan/bank/details/${userId}`,
    method: "GET",
  });
}

const Services = {
  login,
  CreateBorrower,
  GetAllBorrower,
  GetAllBorrowerForAdmin,
  GetBorrowerDetails,
  UpdateBorrowerDetails,
  getUserDetails,
  UpdateUserDetails,
  GetLoanValue,
  CreateBorrowerLoan,
  borrowerSignup,
  createBorrower,
  monthlyLoanPayment,
  getBorrowerLoanData,
  getBorrowerLoanSchedules,
  getBorrowerLoanInfo,
  getBorrwrLoanDetailsForDshBrd,
  postBorrowerAccountDetails,
  getBorrowerBankDetails,
  monthlyLoanPaymentForBorrower,
  GetSingleBorrowerLoanDetails,
};

export default Services;
