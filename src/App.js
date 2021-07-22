import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.scss';
import Home from './pages/Home';
import Main from './pages/Main';

let history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Main} />
      <Route path="/dashboard" component={Main} />
      <Route path="/keyboard" component={Main} />
      <Route path="/accounting" component={Main} />
      <Route path="/frequentPosting" component={Main} />
      <Route path="/addJournalEntry" component={Main} />
      <Route path="/clients" component={Main} />
      <Route path="/groups" component={Main} />
      <Route path="/createClient" component={Main} />
      <Route path="/createGroup" component={Main} />
      <Route path="/importClient" component={Main} />
      <Route path="/center" component={Main} />
      <Route path="/createCenter" component={Main} />
      <Route path="/importCenter" component={Main} />
      <Route path="/allReports" component={Main} />
      <Route path="/users" component={Main} />
      <Route path="/createUser" component={Main} />
      <Route path="/userDetails" component={Main} />
      <Route path="/organization" component={Main} />
      <Route path="/manageOffice" component={Main} />
      <Route path="/manageEmployees" component={Main} />
      <Route path="/importEmployees" component={Main} />
      <Route path="/officeDetails" component={Main} />
      <Route path="/createOffice" component={Main} />
      <Route path="/createEmployee" component={Main} />
      <Route path="/importOffice" component={Main} />
      <Route path="/currency" component={Main} />
      <Route path="/advanceSearch" component={Main} />
      <Route path="/employeeDetails" component={Main} />
      {/* kushagra */}
      <Route path="/system" component={Main} />
      <Route path="/editcode" component={Main} />
      <Route path="/managecodes" component={Main} />
      <Route path="/addcodevalue" component={Main} />
      <Route path="/managereports" component={Main} />
      <Route path="/editreport" component={Main} />
      <Route path="/reportdetails" component={Main} />
      <Route path="/createreport" component={Main} />
      <Route path="/manageroles" component={Main} />
      <Route path="/jobhistory" component={Main} />
      <Route path="/editjob" component={Main} />
      <Route path="/jobdetails" component={Main} />
      <Route path="/roledetails" component={Main} />
      <Route path="/managejobs" component={Main} />
      <Route path="/manageroles" component={Main} />
      {/* Ashish */}
      <Route path="/sp-preview" component={Main} />
      <Route path="/recurring-deposit-products" component={Main} />
      <Route path="/rdp-personal-details" component={Main} />
      <Route path="/rdp-currency-details" component={Main} />
      <Route path="/rdp-terms" component={Main} />
      <Route path="/rdp-settings" component={Main} />
      <Route path="/rdp-interest-rate-chart" component={Main} />
      <Route path="/rdp-charges" component={Main} />
      <Route path="/rdp-accountingTab" component={Main} />
      <Route path="/rdp-preview" component={Main} />
      <Route path="/charges" component={Main} />
      <Route path="/charge-details" component={Main} />
      <Route path="/edit-charge" component={Main} />
      <Route path="/floating-rates" component={Main} />
      <Route path="/floating-rate-details" component={Main} />
      <Route path="/manage-tax-components" component={Main} />
      <Route path="/create-tax-components" component={Main} />
      <Route path="/create-charge" component={Main} />
      <Route path="/sp-accountingTab" component={Main} />
      <Route path="/sp-charges" component={Main} />
      <Route path="/sp-market-price" component={Main} />
      <Route path="/sp-settings" component={Main} />
      <Route path="/sp-terms" component={Main} />
      <Route path="/sp-currency-details" component={Main} />
      <Route path="/sp-product-details" component={Main} />
      <Route path="/share-products" component={Main} />
      <Route path="/fdp-preview" component={Main} />
      <Route path="/fdp-accountingTab" component={Main} />
      <Route path="/fdp-charges" component={Main} />
      <Route path="/fdp-interest-rate-chart" component={Main} />
      <Route path="/fdp-settings" component={Main} />
      <Route path="/fdp-terms" component={Main} />
      <Route path="/fdp-currency-details" component={Main} />
      <Route path="/fdp-personal-details" component={Main} />
      <Route path="/fixed-deposit-products" component={Main} />
      <Route path="/sap-preview" component={Main} />
      <Route path="/sap-accountingTab" component={Main} />
      <Route path="/sap-charges" component={Main} />
      <Route path="/sap-settings" component={Main} />
      <Route path="/sap-terms" component={Main} />
      <Route path="/sap-currency-details" component={Main} />
      <Route path="/sap-personal-details" component={Main} />
      <Route path="/saving-products" component={Main} />
      <Route path="/lp-preview" component={Main} />
      <Route path="/lp-accountingTab" component={Main} />
      <Route path="/lp-charges" component={Main} />
      <Route path="/lp-settings" component={Main} />
      <Route path="/lp-terms" component={Main} />
      <Route path="/lp-currency-details" component={Main} />
      <Route path="/lp-personal-details" component={Main} />
      <Route path="/loan-products" component={Main} />
      <Route path="/products" component={Main} />
      <Route path="/manage-tax-configurations" component={Main} />
      {/* Rohit */}
      <Route path="/importOffice" component={Main} />
      <Route path="/importEmployees" component={Main} />
      <Route path="/importUsers" component={Main} />
      <Route path="/importClient" component={Main} />
      <Route path="/importGroups" component={Main} />
      <Route path="/importCenter" component={Main} />
      <Route path="/importLoanAccounts" component={Main} />
      <Route path="/importLoanRepayments" component={Main} />
      <Route path="/importSavingsAccounts" component={Main} />
      <Route path="/importSavingsTransactionsRepayments" component={Main} />
      <Route path="/importFixedDepositAccounts" component={Main} />
      <Route
        path="/importFixedDepositTransactionsRepayments"
        component={Main}
      />
      <Route path="/importRecurringDepositAccounts" component={Main} />
      <Route path="/importRecurringDepositTransactions" component={Main} />
      <Route path="/importChartOfAccounts" component={Main} />
      <Route path="/importJournalEntries" component={Main} />
      <Route path="/importShareAccounts" component={Main} />
      <Route path="/importGuarantors" component={Main} />
    </Switch>
  </Router>
);

export default App;
