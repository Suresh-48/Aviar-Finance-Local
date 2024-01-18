import HttpClient from "../Config/httpClient";

function BorrowerPaymentCreate(payload) {
  return HttpClient({
    url: "/api/v1/borrower/payment",
    method: "POST",
    data: {
      ...payload,
    },
  });
}

const BorrowerPaymentApi = {
  BorrowerPaymentCreate,
};
export default BorrowerPaymentApi;
