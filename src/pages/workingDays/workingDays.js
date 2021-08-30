import React from 'react';
import './workingDays.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronRight, faSave, faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const workingDays = () => {
  return (
    <div id="advanceSearch" className="pl-5">
      <h5 className="py-3">Working Days</h5>

      <div>
        <div className="row my-3">
          <div className="col-md px-3">
            <div className="workingDaysBorder workingDaysBorder d-flex bg-white py-3 px-3">
              <h6>Sunday</h6>
              <div class="custom-control custom-switch ml-auto">
                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                <label class="custom-control-label FDP-Settings-text-small" for="customSwitch1">
                </label>
              </div>

            </div>
          </div>
          <div className="col-md px-3">
            <div className="workingDaysBorder d-flex bg-white py-3 px-3">
              <h6>Monday</h6>
              <div class="custom-control custom-switch ml-auto">
                <input type="checkbox" class="custom-control-input" id="customSwitch2" />
                <label class="custom-control-label FDP-Settings-text-small" for="customSwitch2">
                </label>
              </div>

            </div>
          </div>
          <div className="col-md px-3">
            <div className="workingDaysBorder d-flex bg-white py-3 px-3">
              <h6>Tuesday</h6>
              <div class="custom-control custom-switch ml-auto">
                <input type="checkbox" class="custom-control-input" id="customSwitch3" />
                <label class="custom-control-label FDP-Settings-text-small" for="customSwitch3">
                </label>
              </div>

            </div>
          </div>
          <div className="col-md px-3">
            <div className="workingDaysBorder d-flex bg-white py-3 px-3">
              <h6>Wednesday</h6>
              <div class="custom-control custom-switch ml-auto">
                <input type="checkbox" class="custom-control-input" id="customSwitch4" />
                <label class="custom-control-label FDP-Settings-text-small" for="customSwitch4">
                </label>
              </div>

            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-md-3 px-3">
            <div className="workingDaysBorder d-flex bg-white py-3 px-3">
              <h6>Thursday</h6>
              <div class="custom-control custom-switch ml-auto">
                <input type="checkbox" class="custom-control-input" id="customSwitch5" />
                <label class="custom-control-label FDP-Settings-text-small" for="customSwitch5">
                </label>
              </div>

            </div>
          </div>
          <div className="col-md-3 px-3">
            <div className="workingDaysBorder d-flex bg-white py-3 px-3">
              <h6>Friday</h6>
              <div class="custom-control custom-switch ml-auto">
                <input type="checkbox" class="custom-control-input" id="customSwitch6" />
                <label class="custom-control-label FDP-Settings-text-small" for="customSwitch6">
                </label>
              </div>

            </div>
          </div>
          <div className="col-md-3 px-3">
            <div className="workingDaysBorder d-flex bg-white py-3 px-3">
              <h6>Saturday</h6>
              <div class="custom-control custom-switch ml-auto">
                <input type="checkbox" class="custom-control-input" id="customSwitch7" />
                <label class="custom-control-label FDP-Settings-text-small" for="customSwitch7">
                </label>
              </div>

            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="workingDaysBorder bg-white py-3 px-4">
        <h5 className="my-3">Additional Options</h5>
        <div className="row">
          <div className="col-md-6">
            <label>
              Payments due on non working days
            </label>
            <select
              className="custom-select px-3"
            >
              <option selected>Move to the Next Repayment Meeting Day</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="pt-4">
          <input
            className="align-middle mr-2 workingDaysCheckbox"
            type="checkbox"
          />
          <label>
            Extend the term for loans following a daily repayment schedule
          </label>
        </div>
      </div>

      <div className="py-3 d-flex justify-content-end">
        <Button className="workingDays-btn">
          <FontAwesomeIcon className="mr-2" icon={faSave}/>
          Save
        </Button>
      </div>

    </div>
  );
}

export default workingDays;