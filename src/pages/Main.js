import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import Menu from '../components/Menu/Menu';
import Dashboard from './dashboard/Dashboard';
import TopMenu from '../components/TopMenu/TopMenu';
import Search from '../components/Search/Search';
import KeyboardShortcuts from './keyboardShorcuts/KeyboardShortcuts';
import MobileMenu from '../components/mobileMenu/MobileMenu';
import Accounting from './accounting/Accounting';
import FrequentPosting from './frequentPosting/FrequentPosting';
import AddJournalEntry from './journalEntry/AddJournalEntry';
import Clients from './clients/Clients';
import CreateClient from './clients/CreateClient';
import ImportClient from './clients/ImportClient';
import Groups from './groups/Groups';
import CreateGroup from './groups/CreateGroup';
import Centers from './centers/Centers';
import CreateCenter from './centers/CreateCenter';
import ImportCenter from './centers/ImportCenter';
import AllReports from './reports/AllReports';
import Users from './users/Users';
import CreateUser from './users/CreateUser';
import UserDetails from './users/UserDetails';
import Organization from './organization/Organization';
import ManageOffice from './organization/manageOffice/ManageOffice';
import OfficeDetails from './organization/manageOffice/OfficeDetails';
import CreateOffice from './organization/manageOffice/createOffice/CreateOffice';
import ImportOffice from './organization/manageOffice/importOffice/ImportOffice';
import Currency from './currencyConfiguration/Currency';
import ManageEmployees from './organization/manageEmployees/ManageEmployees';
import ImportEmployees from './organization/manageEmployees/ImportEmployees';
import CreateEmployees from './organization/manageEmployees/CreateEmployees';
import System from './system';
import EditCode from './system/editCode';
import ManageCodes from './system/manageCodes';
import EmployeeDetails from './organization/manageEmployees/EmployeeDetails';
import AdvanceSearch from './AdvanceSearch';
import AddCodeValue from './system/addCodeValue';
import ManageReports from './system/manageReports';

import RecurringDepositProducts from './products/RecurringDepositProducts/RecurringDepositProducts';

import CreateReport from './system/createReport';
import RDP_PersonalDetails from './products/RDP-PersonalDetails/RDP-PersonalDetails';
import RDP_CurrencyDetails from './products/RDP-CurrencyDetails/RDP-CurrencyDetails';
import RDP_Terms from './products/RDP-Terms/RDP-Terms';
import RDP_Settings from './products/RDP-Settings/RDP-Settings';
import RDP_Charges from './products/RDP-Charges/RDP-Charges';
import RDP_AccountingTab from './products/RDP-AccountingTab/RDP-AccountingTab';
import Charge_details from './products/Charge_details/Charge_details';
import EditReport from './system/editReport';
import EditJob from './system/editJob';
import JobDetails from './system/jobDetails';
import RoleDetails from './system/roleDetails';
import ReportDetails from './system/reportDetails';
import ManageRoles from './system/manageRoles';
import ImportGuarantors from './bulkImports/ImportGuarantors';
import ImportShareAccounts from './bulkImports/ImportShareAccounts';
import ImportJournalEntries from './bulkImports/ImportJournalEntries';
import ImportChartOfAccounts from './bulkImports/ImportChartOfAccounts';
import ImportRecurringDepositTransactions from './bulkImports/ImportRecurringDepositTransactions';
import ImportRecurringDepositAccounts from './bulkImports/ImportRecurringDepositAccounts';
import ImportFixedDepositTransactionsRepayments from './bulkImports/ImportFixedDepositTransactionsRepayments';
import ImportFixedDepositAccounts from './bulkImports/ImportFixedDepositAccounts';
import ImportSavingsTransactionsRepayments from './bulkImports/ImportSavingsTransactionsRepayments';
import ImportSavingsAccounts from './bulkImports/ImportSavingsAccounts';
import ImportLoanRepayments from './bulkImports/ImportLoanRepayments';
import ImportLoanAccounts from './bulkImports/ImportLoanAccounts';
import ImportCenters from './bulkImports/ImportCenter';
import ImportGroups from './bulkImports/ImportGroups';
import ImportClients from './bulkImports/ImportClient';
import ImportUsers from './bulkImports/ImportUsers';
import ImportEmployee from './bulkImports/ImportEmployees';
import ImportOffices from './bulkImports/ImportOffice';
import RDP_Preview from './products/RDP-Preview/RDP-Preview';
import Charges_list from './products/Charges_list/Charges_list';
import FloatingRates from './products/FloatingRates/FloatingRates';
import SP_Preview from './products/SP-Preview/SP-Preview';
import FloatingRateDetails from './products/FloatingRateDetails/FloatingRateDetails';
import ManageTaxComponents from './products/ManageTaxComponents/ManageTaxComponents';
import CreateTaxComponents from './products/CreateTaxComponents/CreateTaxComponents';
import CreateCharge from './products/CreateCharge/CreateCharge';
import SP_AccountingTab from './products/SP-AccountingTab/SP-AccountingTab';
import SP_Charges from './products/SP-Charges/SP-Charges';
import SP_MarketPrice from './products/SP-MarketPrice/SP-MarketPrice';
import SP_Settings from './products/SP-Settings/SP-Settings';
import SP_Terms from './products/SP-Terms/SP-Terms';
import SP_CurrencyDetails from './products/SP-CurrencyDetails/SP-CurrencyDetails';
import SP_ProductDetails from './products/SP-ProductDetails/SP-ProductDetails';
import ShareProducts from './products/ShareProducts/ShareProducts';
import FDP_Preview from './products/FDP-Preview/FDP-Preview';
import FDP_AccountingTab from './products/FDP-AccountingTab/FDP-Accounting';
import FDP_Charges from './products/FDP-Charges/FDP-Charges';
import FDP_InterestRateChart from './products/FDP-InterestRateChart/FDP-InterestRateChart';
import FDP_Settings from './products/FDP-Settings/FDP-Settings';
import FDP_Terms from './products/FDP-Terms/FDP-Terms';
import FDP_CurrencyDetails from './products/FDP-CurrencyDetails/FDP-CurrencyDetails';
import FDP_PersonalDetails from './products/FDP-PersonalDetails/FDP-PersonalDetails';
import FixedDepositProducts from './products/FixedDepositProducts/FixedDepositProducts';
import SaP_Preview from './products/SaP-Preview/SaP-Preview';
import SaP_AccountingTab from './products/SaP-AccountingTab/SaP-AccountingTab';
import SaP_Charges from './products/SaP-Charges/SaP-Charges';
import SaP_Settings from './products/SaP-Settings/SaP-Settings';
import SaP_Terms from './products/SaP-Terms/SaP-Terms';
import SaP_CurrencyDetails from './products/SaP-CurrencyDetails/SaP-CurrencyDetails';
import SaP_PersonalDetails from './products/SaP-PersonalDetails/SaP-PersonalDetails';
import SavingProducts from './products/SavingProducts/SavingProducts';
import LP_Preview from './products/LP-Preview/LP-Preview';
import LP_AccountingTab from './products/LP-AccountingTab/LP-AccountingTab';
import LP_Charges from './products/LP-Charges/LP-Charges';
import LP_Settings from './products/LP-Settings/LP-Settings';
import LP_Terms from './products/LP-Terms/LP-Terms';
import LP_CurrencyDetails from './products/LP-CurrencyDetails/LP-CurrencyDetails';
import LP_PersonalDetails from './products/LP-PersonalDetails/LP-PersonalDetails';
import LoanProducts from './products/LoanProducts/LoanProducts';
import Products from './products/Products/Products';
import ManageTaxConfigurations from './products/ManageTaxConfigurations/ManageTaxConfigurations';
import jobHistory from './system/jobHistory/jobHistory';
import ManageJobs from './system/manageJobs';

import createSurvey from './system/createSurvey/createSurvey';
import editSurvey from './system/editSurvey/editSurvey';
import SMSservices from './system/SMSservices/SMSservices';
import EmailServices from './system/EmailServices/EmailServices';
import SMSservicesTable from './system/SMSservicesTable/SMSservicesTable';
import EmailServicesTable from './system/EmailServicesTable/EmailServicesTable';
import Configurations from './system/Configurations/Configurations';
import ETEMapping from './system/ETEMapping/ETEMapping';
import ETEMappingAll from './system/ETEMappingAll/ETEMappingAll';
import manageSchedulerJobs from './system/manageSchedulerJobs/manageSchedulerJobs';
import manageSurveys from './system/manageSurveys/manageSurveys';
import amazonServicesTable from './system/amazonServicesTable/amazonServicesTable';
import amazonServices from './system/amazonServices/amazonServices';
import notificationServices from './system/notificationServices/notificationServices';
import notificationServicesTable from './system/notificationServicesTable/notificationServicesTable';
import externalServices from './system/externalServices/externalServices';
import makerCheckerTasks from './system/makerCheckerTasks';

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div id="main" className="d-flex align-items-stretch">
      <div
        className="bg-white pt-2 align-self-stretch d-none d-lg-block"
        style={{ flex: 0.2 }}
      >
        <Menu />
      </div>
      <div style={{ flex: 1 }}>
        <div className="d-none d-lg-block pt-4">
          <TopMenu />
          <hr />
        </div>
        <div className="d-block d-lg-none">
          <MobileMenu />
        </div>

        <div className="pt-3 px-2">
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/search" component={Search} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/keyboard" component={KeyboardShortcuts} />
            <Route path="/accounting" component={Accounting} />
            <Route path="/frequentPosting" component={FrequentPosting} />
            <Route path="/addJournalEntry" component={AddJournalEntry} />
            <Route path="/clients" component={Clients} />
            <Route path="/groups" component={Groups} />
            <Route path="/center" component={Centers} />
            <Route path="/createClient" component={CreateClient} />
            <Route path="/importClient" component={ImportClient} />
            <Route path="/importCenter" component={ImportCenter} />
            <Route path="/createGroup" component={CreateGroup} />
            <Route path="/createCenter" component={CreateCenter} />
            <Route path="/allReports" component={AllReports} />
            <Route path="/users" component={Users} />
            <Route path="/createUser" component={CreateUser} />
            <Route path="/userDetails" component={UserDetails} />
            <Route path="/organization" component={Organization} />
            <Route path="/manageOffice" component={ManageOffice} />
            <Route path="/manageEmployees" component={ManageEmployees} />
            <Route path="/importEmployees" component={ImportEmployees} />
            <Route path="/officeDetails" component={OfficeDetails} />
            <Route path="/createOffice" component={CreateOffice} />
            <Route path="/createEmployee" component={CreateEmployees} />
            <Route path="/importOffice" component={ImportOffice} />
            <Route path="/currency" component={Currency} />
            <Route path="/employeeDetails" component={EmployeeDetails} />
            <Route path="/advanceSearch" component={AdvanceSearch} />
            {/* kushagra */}
            <Route path="/system" component={System} />
            <Route path="/editcode" component={EditCode} />
            <Route path="/managecodes" component={ManageCodes} />
            <Route path="/addcodevalue" component={AddCodeValue} />
            <Route path="/managereports" component={ManageReports} />
            <Route path="/editreport" component={EditReport} />
            <Route path="/reportdetails" component={ReportDetails} />
            <Route path="/createreport" component={CreateReport} />
            <Route path="/manageroles" component={ManageRoles} />
            <Route path="/jobhistory" component={jobHistory} />
            <Route path="/editjob" component={EditJob} />
            <Route path="/jobdetails" component={JobDetails} />
            <Route path="/roledetails" component={RoleDetails} />
            <Route path="/managejobs" component={ManageJobs} />
            <Route path="/manageroles" component={ManageRoles} />
            {/* Ashish */}
            <Route path="/makercheckertasks" component={makerCheckerTasks} />
            <Route path="/externalservices" component={externalServices} />
            <Route path="/notificationServices_table" component={notificationServicesTable} />
            <Route path="/notificationServices" component={notificationServices} />
            <Route path="/amazonServices" component={amazonServices} />
            <Route path="/amazonServices_table" component={amazonServicesTable} />
            <Route path="/manageSurveys" component={manageSurveys} />
            <Route path="/manageSchedulerJobs" component={manageSchedulerJobs} />
            <Route path="/etemappingall" component={ETEMappingAll} />
            <Route path="/etemapping" component={ETEMapping} />
            <Route path="/configurations" component={Configurations} />
            <Route path="/EmailServices_table" component={EmailServicesTable} />
            <Route path="/SMSservices_table" component={SMSservicesTable} />
            <Route path="/EmailServices" component={EmailServices} />
            <Route path="/SMSservices" component={SMSservices} />
            <Route path="/createSurvey" component={createSurvey} />
            <Route path="/editSurvey" component={editSurvey} />
            <Route path="/sp-preview" component={SP_Preview} />
            <Route
              path="/recurring-deposit-products"
              component={RecurringDepositProducts}
            />
            <Route
              path="/rdp-personal-details"
              component={RDP_PersonalDetails}
            />
            <Route
              path="/rdp-currency-details"
              component={RDP_CurrencyDetails}
            />
            <Route path="/rdp-terms" component={RDP_Terms} />
            <Route path="/rdp-settings" component={RDP_Settings} />
            <Route
              path="/rdp-interest-rate-chart"
              component={FDP_InterestRateChart}
            />
            <Route path="/rdp-charges" component={RDP_Charges} />
            <Route path="/rdp-accountingTab" component={RDP_AccountingTab} />
            <Route path="/rdp-preview" component={RDP_Preview} />
            <Route path="/charges" component={Charges_list} />
            <Route path="/charge-details" component={Charge_details} />

            <Route path="/floating-rates" component={FloatingRates} />
            <Route
              path="/floating-rate-details"
              component={FloatingRateDetails}
            />
            <Route
              path="/manage-tax-components"
              component={ManageTaxComponents}
            />
            <Route
              path="/create-tax-components"
              component={CreateTaxComponents}
            />
            <Route path="/create-charge" component={CreateCharge} />
            <Route path="/sp-accountingTab" component={SP_AccountingTab} />
            <Route path="/sp-charges" component={SP_Charges} />
            <Route path="/sp-market-price" component={SP_MarketPrice} />
            <Route path="/sp-settings" component={SP_Settings} />
            <Route path="/sp-terms" component={SP_Terms} />
            <Route path="/sp-currency-details" component={SP_CurrencyDetails} />
            <Route path="/sp-product-details" component={SP_ProductDetails} />
            <Route path="/share-products" component={ShareProducts} />
            <Route path="/fdp-preview" component={FDP_Preview} />
            <Route path="/fdp-accountingTab" component={FDP_AccountingTab} />
            <Route path="/fdp-charges" component={FDP_Charges} />
            <Route
              path="/fdp-interest-rate-chart"
              component={FDP_InterestRateChart}
            />
            <Route path="/fdp-settings" component={FDP_Settings} />
            <Route path="/fdp-terms" component={FDP_Terms} />
            <Route
              path="/fdp-currency-details"
              component={FDP_CurrencyDetails}
            />
            <Route
              path="/fdp-personal-details"
              component={FDP_PersonalDetails}
            />
            <Route
              path="/fixed-deposit-products"
              component={FixedDepositProducts}
            />
            <Route path="/sap-preview" component={SaP_Preview} />
            <Route path="/sap-accountingTab" component={SaP_AccountingTab} />
            <Route path="/sap-charges" component={SaP_Charges} />
            <Route path="/sap-settings" component={SaP_Settings} />
            <Route path="/sap-terms" component={SaP_Terms} />
            <Route
              path="/sap-currency-details"
              component={SaP_CurrencyDetails}
            />
            <Route
              path="/sap-personal-details"
              component={SaP_PersonalDetails}
            />
            <Route path="/saving-products" component={SavingProducts} />
            <Route path="/lp-preview" component={LP_Preview} />
            <Route path="/lp-accountingTab" component={LP_AccountingTab} />
            <Route path="/lp-charges" component={LP_Charges} />
            <Route path="/lp-settings" component={LP_Settings} />
            <Route path="/lp-terms" component={LP_Terms} />
            <Route path="/lp-currency-details" component={LP_CurrencyDetails} />
            <Route path="/lp-personal-details" component={LP_PersonalDetails} />
            <Route path="/loan-products" component={LoanProducts} />
            <Route path="/products" component={Products} />
            <Route
              path="/manage-tax-configurations"
              component={ManageTaxConfigurations}
            />

            {/* Rohit */}
            <Route path="/importOffices" component={ImportOffices} />
            <Route path="/importEmployee" component={ImportEmployee} />
            <Route path="/importUsers" component={ImportUsers} />
            <Route path="/importClients" component={ImportClients} />
            <Route path="/importGroups" component={ImportGroups} />
            <Route path="/importCenters" component={ImportCenters} />
            <Route path="/importLoanAccounts" component={ImportLoanAccounts} />
            <Route
              path="/importLoanRepayments"
              component={ImportLoanRepayments}
            />
            <Route
              path="/importSavingsAccounts"
              component={ImportSavingsAccounts}
            />
            <Route
              path="/importSavingsTransactionsRepayments"
              component={ImportSavingsTransactionsRepayments}
            />
            <Route
              path="/importFixedDepositAccounts"
              component={ImportFixedDepositAccounts}
            />
            <Route
              path="/importFixedDepositTransactionsRepayments"
              component={ImportFixedDepositTransactionsRepayments}
            />
            <Route
              path="/importRecurringDepositAccounts"
              component={ImportRecurringDepositAccounts}
            />
            <Route
              path="/importRecurringDepositTransactions"
              component={ImportRecurringDepositTransactions}
            />
            <Route
              path="/importChartOfAccounts"
              component={ImportChartOfAccounts}
            />
            <Route
              path="/importJournalEntries"
              component={ImportJournalEntries}
            />
            <Route
              path="/importShareAccounts"
              component={ImportShareAccounts}
            />
            <Route path="/importGuarantors" component={ImportGuarantors} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Main;
