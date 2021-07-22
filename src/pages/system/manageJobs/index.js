import React, { useState } from 'react';
import './index.scss';
import Err from './icons/exclaim.svg';
import ArrowDown from './icons/chevron-down.svg';

const data = [
    {
        name: 'Add Accrual Transactions',
        next: 'March 25, 2021',
        prev: 'March 24, 2021',
        prev2: true,
        current: false,
        error: null
    },
    {
        name: 'Add Accrual Transactions for Loans with income Posted as Transactions',
        next: 'March 25, 2021',
        prev: 'March 24, 2021',
        prev2: true,
        current: false,
        error: null
    },
    {
        name: 'Add Periodic Accrual Transactions',
        next: 'March 25, 2021',
        prev: 'March 24, 2021',
        prev2: true,
        current: false,
        error: null
    },
    {
        name: 'Apply Anual Fee for Savings',
        next: 'March 25, 2021',
        prev: 'March 24, 2021',
        prev2: true,
        current: false,
        error: null
    },
    {
        name: 'Apply Holidays to Loans',
        next: 'March 25, 2021',
        prev: 'March 24, 2021',
        prev2: true,
        current: false,
        error: null
    },
    {
        name: 'Apply Penalty to overdue Loans',
        next: 'March 25, 2021',
        prev: 'March 24, 2021',
        prev2: true,
        current: false,
        error: null
    },
    {
        name: 'Execute Email',
        next: 'March 25, 2021',
        prev: 'March 24, 2021',
        prev2: false,
        current: false,
        error: true
    },
    {
        name: 'Execute Report Mailing Jobs',
        next: 'March 25, 2021',
        prev: 'March 24, 2021',
        prev2: true,
        current: false,
        error: null
    }
];

export default function ManageJobs() {
    const [jobs, setJobs] = useState(data);
    const [active, setActive] = useState(true);

    const toggleState = () => {
        setActive(!active);
    };

    return (
        <div id="managejobs" className="pl-5 mb-5">
            <div className="py-3 d-flex align-items-center justify-content-between">
                <div>
                    <h5 className="flex-grow-1 d-inline-block mr-4">
                        Manage Scheduler Jobs
                    </h5>
                    <div
                        className={`${
                            active ? 'active' : 'inactive'
                        } d-inline-block`}
                    >
                        {active ? 'Active' : 'Inactive'}
                    </div>
                </div>
                <div>
                    <div className="custom-control custom-switch mr-md-5">
                        <input
                            type="checkbox"
                            defaultChecked={active}
                            onChange={toggleState}
                            className="custom-control-input"
                            id="job"
                        />
                        <label
                            className="custom-control-label"
                            htmlFor="job"
                        ></label>
                    </div>
                </div>
            </div>
            <div className="row w-100 mt-5">
                <div className="col-12 d-flex justify-content-center">
                    <div className="table-responsive-sm">
                        <table className="table table-borderless table-hover bg-white overflow-hidden">
                            <thead>
                                <tr className="py-4">
                                    <th scope="col" className="pl-4">
                                        Name
                                        <span>
                                            <img src={ArrowDown} alt="" />
                                        </span>
                                    </th>
                                    <th scope="col">Next Run</th>
                                    <th scope="col">Previous Run</th>
                                    <th scope="col">Previous Run</th>
                                    <th scope="col">Current Status</th>
                                    <th scope="col">Error Logs</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.map(record => (
                                    <tr key={record.name}>
                                        <td className="font-weight-500">
                                            {record.name}
                                        </td>
                                        <td className="font-weight-500">
                                            {record.next}
                                        </td>
                                        <td className="font-weight-500">
                                            {record.prev}
                                        </td>
                                        <td>
                                            <div
                                                className={`${
                                                    record.prev2
                                                        ? 'active'
                                                        : 'inactive'
                                                } text-center d-inline-block`}
                                            >
                                                {record.prev2
                                                    ? 'Success'
                                                    : 'Failed'}
                                            </div>
                                        </td>
                                        <td>
                                            <div
                                                className={`${
                                                    record.current
                                                        ? 'active'
                                                        : 'inactive'
                                                } text-center d-inline-block`}
                                            >
                                                {record.current
                                                    ? 'Running'
                                                    : 'Not Running'}
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            {record.error ? (
                                                <img
                                                    src={Err}
                                                    className="cursor-pointer"
                                                    alt="error"
                                                    data-toggle="modal"
                                                    data-target="#errorlog"
                                                />
                                            ) : null}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/*Modals*/}
            <div
                className="modal fade"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="error"
                aria-hidden="true"
                id="errorlog"
            >
                <div
                    className="modal-dialog modal-lg modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <h5 className="modal-title" id="addCodeModal">
                                Error log
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <textarea
                                type="text"
                                id="roleDesc"
                                // value={newRole.desc}
                                value="org.springframework.orm.jpa.JpaSystemException: Unknown column 't9.previous_run_status' in 'field list' {prepstmnt 2123824181 SELECT t0.id, t0.campaign_name, t1.id, t1.account_no, t1.activatedon_userid, t1.activation_date, t1.client_classification_cv_id, t1.client_type_cv_id, t1.closedon_userid, t1.closedon_date, t1.closure_reason_cv_id, t1.date_of_birth, t1.display_name, t1.email_address, t1.external_id, t1.firstname, t1.fullname, t1.gender_cv_id, t2.id, t2.location, t2.storage_type_enum, t1.is_staff, t1.lastname, t1.legal_form_enum, t1.middlename, t1.mobile_no, t3.id, t3.external_id, t3.hierarchy, t3.name, t3.opening_date, t3.parent_id, t1.office_joining_date, t1.reactivated_on_date, t1.reactivated_on_userid, t1.rejectedon_userid, t1.rejectedon_date, t1.reject_reason_cv_id, t1.reopened_by_userid, t1.reopened_on_date, t1.default_savings_account, t1.default_savings_product, t4.id, t4.is_active, t4.display_name, t4.email_address, t4.external_id, t4.firstname, t5.id, t5.location, t5.storage_type_enum, t4.joining_date, t4.lastname, t4.is_loan_officer, t4.mobile_no, t6.id, t6.external_id, t6.hierarchy, t6.name, t6.opening_date, t6.parent_id, t7.id, t7.is_active, t7.display_name, t7.email_address, t7.external_id, t7.firstname, t7.image_id, t7.joining_date, t7.lastname, t7.is_loan_officer, t7.mobile_no, t7.office_id, t7.organisational_role_enum, t4.organisational_role_enum, t1.status_enum, t1.sub_status, t1.submittedon_userid, t1.submittedon_date, t8.id, t8.external_id, t8.hierarchy, t8.name, t8.opening_date, t8.parent_id, t1.updated_by, t1.updated_on, t1.withdrawn_on_date, t1.withdraw_reason_cv_id, t1.withdraw_on_userid, t0.email_address, t9.id, t10.id, t10.nonexpired, t10.nonlocked, t10.nonexpired_credentials, t10.is_deleted, t10.email, t10.enabled, t10.firsttime_login_remaining, t10.firstname, t10.is_self_service_user, t10.last_time_password_updated, t10.lastname, t11.id, t11.external_id, t11.hierarchy, t11.name, t11.opening_date, t11.parent_id, t10.password, t10.password_never_expires, t12.id, t12.is_active, t12.display_name, t12.email_address, t12.external_id, t12.firstname, t12.image_id, t12.joining_date, t12.lastname, t12.is_loan_officer, t12.mobile_no, t12.office_id, t12.organisational_role_parent_staff_id, t12.organisational_role_enum, t10.username, t9.approvedon_date, t13.id, t13.core_report, t13.description, t13.report_category, t13.report_name, t13.report_sql, t13.report_subtype, t13.report_type, t13.use_report, t9.campaign_name, t9.campaign_type, t14.id, t14.nonexpired, t14.nonlocked, t14.nonexpired_credentials, t14.is_deleted, t14.email, t14.enabled, t14.firsttime_login_remaining, t14.firstname, t14.is_self_service_user, t14.last_time_password_updated, t14.lastname, t14.office_id, t14.password, t14.password_never_expires, t14.staff_id, t14.username, t9.closedon_date, t9.email_attachment_file_format, t9.email_message, t9.email_subject, t9.is_visible, t9.last_trigger_date, t9.next_trigger_date, t9.param_value, t9.previous_run_error_log, t9.previous_run_error_message, t9.previous_run_status, t9.recurrence, t9.recurrence_start_date, t9.status_enum, t15.id, t15.core_report, t15.description, t15.report_category, t15.report_name, t15.report_sql, t15.report_subtype, t15.report_type, t15.use_report, t9.stretchy_report_param_map, t16.id, t16.nonexpired, t16.nonlocked, t16.nonexpired_credentials, t16.is_deleted, t16.email, t16.enabled, t16.firsttime_login_remaining, t16.firstname, t16.is_self_service_user, t16.last_time_password_updated, t16.lastname, t16.office_id, t16.password, t16.password_never_expires, t16.staff_id, t16.username, t9.submittedon_date, t0.email_subject, t0.error_message, t17.id, t17.account_no, t18.id, t18.nonexpired, t18.nonlocked, t18.nonexpired_credentials, t18.is_deleted, t18.email, t18.enabled, t18.firsttime_login_remaining, t18.firstname, t18.is_self_service_user, t18.last_time_password_updated, t18.lastname, t18.office_id, t18.password, t18.password_never_expires, t18.staff_id, t18.username, t17.activation_date, t17.closedon_userid, t17.closedon_date, t17.closure_reason_cv_id, t17.external_id, t19.id,"
                                rows={15}
                                className="form-control"
                            />
                        </div>
                        <div className="modal-footer border-top-0">
                            {/*<button
                                type="button"
                                className="green-btn w-100"
                                data-dismiss="modal"
                            >
                                OK
                            </button>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
