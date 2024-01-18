import { lazy } from "react";
const Username = lazy(() => import("../components/usernameforgot"));
const Password = lazy(() => import("../components/passwordforgot"));
const Signup = lazy(() => import("../components/Signup/signup"));
const HeaderNavbar = lazy(() => import("../container/headerNavbar"));
const Loanprocess = lazy(() => import("../components/ContentPages/loanprocess"));
const Credit = lazy(() => import("../components/ContentPages/credit"));
const Broker = lazy(() => import("../components/ContentPages/brokevsloan"));
const Ficocredit = lazy(() => import("../components/ContentPages/fico"));
const Gettingqualified = lazy(() => import("../components/ContentPages/qualified"));
const Downpayment = lazy(() => import("../components/ContentPages/downpayment"));
const Closingcost = lazy(() => import("../components/ContentPages/closingcost"));
const Loancost = lazy(() => import("../components/ContentPages/loancost"));
const Insurancecosts = lazy(() => import("../components/ContentPages/insurancecosts"));
const Taxclosingcost = lazy(() => import("../components/ContentPages/taxcost"));
const Calculator = lazy(() => import("../components/Calculator/calculator"));
const Annualpercentage = lazy(() => import("../components/Calculator/annualpercentage"));
const Armorization = lazy(() => import("../components/Calculator/armorization"));
const Earlypayoff = lazy(() => import("../components/Calculator/earlypayoff"));
const Prepaymentsavings = lazy(() => import("../components/Calculator/prepaymentsavings"));
const Refinance = lazy(() => import("../components/Calculator/refinance"));
const Rentvsown = lazy(() => import("../components/Calculator/rentvsown"));
const Debtconsolidation = lazy(() => import("../components/Calculator/debtconsolidation"));
const Taxsaving = lazy(() => import("../components/Calculator/taxsaving"));
const ContactUs = lazy(() => import("../components/ContactUs"));
const Resetpassword = lazy(() => import("../components/resetpassword"));
const Privacypolicy = lazy(() => import("../components/privacypolicy"));
const Companystatelicences = lazy(() => import("../components/companystatelicences"));
const IndexPage = lazy(() => import("../components"));
const Sidebar = lazy(() => import("../container/Sidebar"));

const Html = lazy(() => import("../components/ButtonsComponent/html"));
const HomeLoanBasics = lazy(() => import("../components/ContentPages/homeLoanBasics"));
const FormApplication = lazy(() => import("../Forms/FormApplication"));
const Form = lazy(() => import("../Forms/Form"));
const Login = lazy(() => import("../Forms/Login"));
const CreateBorrower = lazy(() => import("../Forms/Borrower"));
const BorrowerDashBoard = lazy(() => import("../Borrower/BorrowerDashboard"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));
const AdminDashboard = lazy(() => import("../Forms/AdminDashboard"));
const EditBorrower = lazy(() => import("../Borrower/EditBorrower"));
const BorrowerEdit = lazy(() => import("../Borrower/BorrowerEdit"));
const BorrowerPayment = lazy(() => import("../Borrower/BorrowerPayment"));
const AdminEdit = lazy(() => import("../Borrower/AdminEdit"));
const MortgageCalculator = lazy(() => import("../components/MortgageCalculator/MortgageCalculator"));
const BorrowerLoginScreen = lazy(() => import("../components/BorrowerLoginScreen/BorrowerLogin"));
const BorrowerProfileCreate = lazy(() => import("../components/AdminToBorrower/BorrowerProfileCreate"));
const BorrowerSignUp = lazy(() => import("../components/BorrowerLoginScreen/BorrowerSignUp"));
const MonthlyPayments = lazy(() => import("../Borrower/MonthlyPayments"));
const BorrowerLoanCreate = lazy(() => import("../components/AdminToBorrower/BorrowerLoanCreate"));
const PasswordCreate = lazy(() => import("../components/PasswordScreen/CreatePassword"));
const BorrowerLoanDetail = lazy(() => import("../components/AdminToBorrower/BorrowerLoanDetail"));
const BorrowerProfileEdit = lazy(() => import("../components/AdminToBorrower/BorrowerProfileEdit"));
const BorrowerLoanCount = lazy(() => import("../Borrower/BorrowerLoanCount"));

export {
  Username,
  Password,
  Signup,
  HeaderNavbar,
  Loanprocess,
  Credit,
  Broker,
  Ficocredit,
  Gettingqualified,
  Downpayment,
  Closingcost,
  Loancost,
  Insurancecosts,
  Taxclosingcost,
  Calculator,
  Annualpercentage,
  Armorization,
  Earlypayoff,
  Prepaymentsavings,
  Refinance,
  Rentvsown,
  Debtconsolidation,
  Taxsaving,
  ContactUs,
  Resetpassword,
  Privacypolicy,
  Companystatelicences,
  IndexPage,
  Sidebar,
  Html,
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
};
