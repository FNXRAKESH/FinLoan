import React from 'react';
import Plus from './icons/plus-outline.svg';

export default function ManageCodes() {
    return (
        <div id="addcodevalue" className="pl-5 mb-5">
            <h5 className="py-3">Add Code Value</h5>
            <div className="white-card row w-100">
                <div className="col-12">
                    <h6 className="mb-4">ADDRESS_TYPE</h6>
                    <form className="w-100">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label
                                        className="form-label font-weight-500"
                                        htmlFor="codeValue"
                                    >
                                        Code value
                                    </label>
                                    <input
                                        type="text"
                                        id="codeValue"
                                        className="form-control h-50px"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label
                                        className="form-label font-weight-500"
                                        htmlFor="description"
                                    >
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        id="description"
                                        className="form-control h-50px"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label
                                        className="form-label font-weight-500"
                                        htmlFor="position"
                                    >
                                        Position
                                    </label>
                                    <input
                                        type="text"
                                        id="position"
                                        className="form-control h-50px"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label
                                        className="form-label font-weight-500"
                                        htmlFor="status"
                                    >
                                        Status
                                    </label>
                                    <select
                                        id="status"
                                        className="custom-select h-50px"
                                    >
                                        <option>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end mb-5">
                                <button
                                    type="button"
                                    className="mr-3 btn btn-light"
                                >
                                    Cancel
                                </button>
                                <div className="green-btn">
                                    <img
                                        src={Plus}
                                        className="mr-2 align-bottom"
                                        alt=""
                                    />
                                    Add
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
