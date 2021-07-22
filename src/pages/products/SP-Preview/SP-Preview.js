import React from 'react';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.css';
import './SP-Preview.scss';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEdit } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const SP_Preview = () => {
  let history = useHistory();

  return (
    <div id="PreviewShareProduct" className="pl-5">
      <h5 className="py-3 text-break">Preview Share Product</h5>

      <motion.div
        className="PSP-rounded bg-white pt-1 mb-4 pb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="container">
          <div className="col">
            <div className="row mt-5 mb-3">
              <h5>Details</h5>
            </div>

            <div className="greydiv row">
              <div className="col text-break py-3">
                <h6>Description</h6>
              </div>
              <div className="col text-break py-3 text-right">
                <h6>False</h6>
              </div>
            </div>

            <div className="whitediv row">
              <div className="col text-break py-3">
                <h6>Short Name</h6>
              </div>
              <div className="col py-3 text-break text-right">
                <h6>False</h6>
              </div>
            </div>
          </div>

          <hr />

          <div className="col">
            <div className="row mt-5 mb-3">
              <h5>Items</h5>
            </div>

            <div className="greydiv row">
              <div className="col text-break py-3">
                <h6>Currency</h6>
              </div>
              <div className="col text-break py-3 text-right">
                <h6>False</h6>
              </div>
            </div>

            <div className="whitediv row">
              <div className="col text-break py-3">
                <h6>Decimal Places</h6>
              </div>
              <div className="col py-3 text-break text-right">
                <h6>False</h6>
              </div>
            </div>

            <div className="greydiv row">
              <div className="col text-break py-3">
                <h6>Currency in Multiples Of</h6>
              </div>
              <div className="col py-3 text-break text-right">
                <h6>False</h6>
              </div>
            </div>

            <div className="whitediv row">
              <div className="col text-break py-3">
                <h6>Total Shares</h6>
              </div>
              <div className="col py-3 text-break text-right">
                <h6>False</h6>
              </div>
            </div>

            <div className="greydiv row">
              <div className="col text-break py-3">
                <h6>Total Shares to be issued</h6>
              </div>
              <div className="col py-3 text-break text-right">
                <h6>False</h6>
              </div>
            </div>

            <div className="whitediv row">
              <div className="col text-break py-3">
                <h6>Nominal / Unit Price</h6>
              </div>
              <div className="col py-3 text-break text-right">
                <h6>False</h6>
              </div>
            </div>

            <div className="greydiv row">
              <div className="col text-break py-3">
                <h6>Total Shares Capital Value</h6>
              </div>
              <div className="col py-3 text-break text-right">
                <h6>False</h6>
              </div>
            </div>
          </div>

          <hr />

          <div className="col">
            <div className="row mt-5 mb-3">
              <h5>Settings</h5>
            </div>

            <div className="greydiv row">
              <div className="col text-break py-3">
                <h6>Shares per Client</h6>
              </div>
              <div className="col text-break py-3 text-right">
                <h6>False</h6>
              </div>
            </div>

            <div className="whitediv row">
              <div className="col text-break py-3">
                <h6>Minimum Active Period</h6>
              </div>
              <div className="col py-3 text-break text-right">
                <h6>False</h6>
              </div>
            </div>

            <div className="greydiv row">
              <div className="col text-break py-3">
                <h6>Lock-in Period</h6>
              </div>
              <div className="col text-break py-3 text-right">
                <h6>False</h6>
              </div>
            </div>

            <div className="whitediv row">
              <div className="col text-break py-3">
                <h6>Allow dividends for inactive clients</h6>
              </div>
              <div className="col py-3 text-break text-right">
                <h6>False</h6>
              </div>
            </div>
          </div>

          <hr />

          <div className="col">
            <div className="row mt-5 mb-3">
              <h5>Market Price</h5>
            </div>

            <div className="row" style={{ background: '#F3F5F8' }}>
              <div className="col">
                <Table
                  borderless
                  className="table-sm rounded table-responsive-sm"
                >
                  <thead style={{ color: 'rgba(10, 33, 62, 0.6)' }}>
                    <tr>
                      <th className="py-3">From Date</th>
                      <th className="py-3 text-right">Nominal/Unit Price</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="py-3">March 25, 2021</td>
                      <td className="py-3 text-right">Price</td>
                    </tr>
                    <tr>
                      <td className="py-3">March 25, 2021</td>
                      <td className="py-3 text-right">Price</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            <hr />
          </div>

          <div className="col">
            <div className="row mt-5 mb-3">
              <h5>Charges</h5>
            </div>

            <div className="row" style={{ background: '#F3F5F8' }}>
              <div className="col">
                <Table
                  borderless
                  className="table-sm rounded table-responsive-sm"
                  style={{}}
                >
                  <thead style={{ color: 'rgba(10, 33, 62, 0.6)' }}>
                    <tr>
                      <th className="py-3 font-weight-medium">Name</th>
                      <th className="py-3 font-weight-medium text-right">
                        Type
                      </th>
                      <th className="py-3 font-weight-medium text-right">
                        Amount
                      </th>
                      <th className="py-3 font-weight-medium text-right">
                        Collected On
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="py-3">Some Random Name</td>
                      <td className="py-3 text-right">Cash</td>
                      <td className="py-3 text-right">$7850.02</td>
                      <td className="py-3 text-right">March 25, 2021</td>
                    </tr>

                    <tr>
                      <td className="py-3">Some Random Name</td>
                      <td className="py-3 text-right">Cash</td>
                      <td className="py-3 text-right">$7850.02</td>
                      <td className="py-3 text-right">March 25, 2021</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            <hr />
          </div>

          <div className="col">
            <div className="row mt-5 mb-3">
              <h5>Accounting</h5>
            </div>

            <div className="greydiv row">
              <div className="col text-break py-3">
                <h6>Shares Reference (Assets)</h6>
              </div>
              <div className="col text-break py-3 text-right">
                <h6>False</h6>
              </div>
            </div>

            <div className="whitediv row">
              <div className="col text-break py-3">
                <h6>Shares Suspense Controls (Liabilities)</h6>
              </div>
              <div className="col py-3 text-break text-right">
                <h6>False</h6>
              </div>
            </div>

            <div className="greydiv row">
              <div className="col text-break py-3">
                <h6>Share Equity (Equity)</h6>
              </div>
              <div className="col text-break py-3 text-right">
                <h6>False</h6>
              </div>
            </div>

            <div className="whitediv row">
              <div className="col text-break py-3">
                <h6>Income form Fee (Income)</h6>
              </div>
              <div className="col py-3 text-break text-right">
                <h6>False</h6>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="container">
          <div className="SP-Preview-btns my-5 w-100">
            <Button className="py-2 psp-btn-edit font-weight-medium text-break">
              <FontAwesomeIcon className="mr-3" icon={faEdit} />
              Edit
            </Button>
            <Button className="py-2 psp-btn-confirm rounded border-0 font-weight-semibold text-break">
              Confirm
              <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SP_Preview;
