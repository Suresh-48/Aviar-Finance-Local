import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import HeaderNavbar from "../container/headerNavbar";
import {
  Annualpercentage,
  Armorization,
  Broker,
  Calculator,
  Closingcost,
  Companystatelicences,
  ContactUs,
  Credit,
  Debtconsolidation,
  Downpayment,
  Earlypayoff,
  Ficocredit,
  Gettingqualified,
  Html,
  IndexPage,
  Insurancecosts,
  Loancost,
  Loanprocess,
  Password,
  Prepaymentsavings,
  Privacypolicy,
  Refinance,
  Rentvsown,
  Resetpassword,
  Sidebar,
  Signup,
  Taxclosingcost,
  Taxsaving,
  Username,
  HomeLoanBasics,
  FormApplication,
  Form,
  Login,
  CreateBorrower,
  BorrowerDashBoard,
  NotFoundPage,
  AdminDashboard,
  EditBorrower,
  BorrowerEdit,
  BorrowerPayment,
  AdminEdit,
  MortgageCalculator,
  BorrowerLoginScreen,
  BorrowerProfileCreate,
  BorrowerSignUp,
  MonthlyPayments,
  BorrowerLoanCreate,
  PasswordCreate,
  BorrowerLoanDetail,
  BorrowerProfileEdit,
  BorrowerLoanCount,
} from "../Pages";
import { useAppContext } from "../Hooks/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import FormsLayout from "../layouts/FormsLayout";
import DefaultLayout from "../layouts/DefaultLayout";

//  spinner or Loader
const fallbackLoader = (
  <div className="center">
    <Spinner animation="border" variant="primary" />
  </div>
);

export default function Routers(props) {
  const { link } = useAppContext();

  return (
    <>
      <HashRouter>
        <Suspense fallback={fallbackLoader}>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Routes>
            <Route path="" exact element={<DefaultLayout />}>
              <Route path="/" element={<Html />} />
              <Route path="/loanprocess" element={<Loanprocess />} />
              <Route path="/credit" element={<Credit />} />
              <Route path="/brokevsloan" element={<Broker />} />
              <Route path="/fico" element={<Ficocredit />} />
              <Route path="/qualified" element={<Gettingqualified />} />
              <Route path="/downpayment" element={<Downpayment />} />
              <Route path="/closingcost" element={<Closingcost />} />
              <Route path="/taxcost" element={<Taxclosingcost />} />
              <Route path="/loancost" element={<Loancost />} />
              <Route path="/insurancecosts" element={<Insurancecosts />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/annualpercentage" element={<Annualpercentage />} />
              <Route path="/armorization" element={<Armorization />} />
              <Route path="/earlypayoff" element={<Earlypayoff />} />
              <Route path="/prepaymentsavings" element={<Prepaymentsavings />} />
              <Route path="/refinance" element={<Refinance />} />
              <Route path="/rentvsown" element={<Rentvsown />} />
              <Route path="/taxsaving" element={<Taxsaving />} />
              <Route path="/debtconsolidation" element={<Debtconsolidation />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/index" element={<IndexPage />} />
              <Route path="/sidebar" element={<Sidebar />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/resetpassword" element={<Resetpassword />} />
              <Route path="/usernameforget" element={<Username />} />
              <Route path="/passwordforgot" element={<Password />} />
              <Route path="/privacypolicy" element={<Privacypolicy />} />
              <Route path="/companystatelicences" element={<Companystatelicences />} />
              <Route path="/homeloan/basics" element={<HomeLoanBasics />} />
              <Route path="/mortgage/calculator" element={<MortgageCalculator />} />
              <Route path="/borrower/login" element={<BorrowerLoginScreen />} />
              <Route path="/borrower/signup" element={<BorrowerSignUp />} />
              <Route path="/password/create" element={<PasswordCreate />} />
            </Route>

            {/* //Form Layout */}

            <Route path="/" exact element={<FormsLayout />}>
              <Route path="create/borrower" element={<CreateBorrower />} />
              <Route path="forms/application" element={<FormApplication />} />
              <Route path="forms/application/form" element={<Form />} />
              <Route path="borrower/:name" element={<BorrowerDashBoard />} />
              <Route path="borrower/edit/:id" element={<EditBorrower />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="edit/:id" element={<BorrowerEdit />} />
              <Route path="/login" element={<Login />} />
              <Route path="/payment" element={<BorrowerPayment />} />
              <Route path="/admin/edit" element={<AdminEdit />} />
              <Route path="/borrower/profile/create" element={<BorrowerProfileCreate />} />
              <Route path="/monthly/payments" element={<MonthlyPayments />} />
              <Route path="/borrower/loan/create" element={<BorrowerLoanCreate />} />
              <Route path="/borrower/loan/detail/:id" element={<BorrowerLoanDetail />} />
              <Route path="/borrower/profile/edit/:id" element={<BorrowerProfileEdit />} />
              <Route path="/borrower/loan/count" element={<BorrowerLoanCount />} />
            </Route>
            {/* <Route path="/" exact element={}>
              <Route path="borrower/:name" element={<BorrowerDashBoard />} />
              <Route path="borrower/edit/:id" element={<EditBorrower />} />
              <Route path="borrower/dashboard" element={<AdminDashboard />} />
            </Route> */}

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}
