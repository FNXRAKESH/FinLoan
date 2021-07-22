import React from 'react';
import './KeyboardShortcuts.styles.scss';
import { motion } from 'framer-motion';
import { Col, Row } from 'react-bootstrap';
const KeyboardShortcuts = () => {
  return (
    <div id="keyboardShorcuts" className="pl-5">
      <h5 className="py-3">Keyboard Shortcuts</h5>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
         
      >
        <Row>
          <Col md>
            <div className="shortcuts">
              <h6 className="flex-grow-1">Navigation Page</h6>
              <div className="d-flex align-items-center pr-2">
                <p className="ctrl">ctrl</p>
                <p className="px-2">+</p>
                <p className="shift">shift</p>
                <p className="px-2">+</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="alphabet"
                >
                  n
                </motion.p>
              </div>
            </div>
          </Col>
          <Col md>
            <div className="shortcuts">
              <h6 className="flex-grow-1">Checker Inbox &amp; Pending Tasks</h6>
              <div className="d-flex align-items-center pr-2">
                <p className="ctrl">ctrl</p>
                <p className="px-2">+</p>
                <p className="shift">shift</p>
                <p className="px-2">+</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="alphabet"
                >
                  i
                </motion.p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md>
            <div className="shortcuts">
              <h6 className="flex-grow-1">Collectin Sheet</h6>
              <div className="d-flex align-items-center pr-2">
                <p className="ctrl">ctrl</p>
                <p className="px-2">+</p>
                <p className="shift">shift</p>
                <p className="px-2">+</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="alphabet"
                >
                  o
                </motion.p>
              </div>
            </div>
          </Col>
          <Col md>
            <div className="shortcuts">
              <h6 className="flex-grow-1">Create Client</h6>
              <div className="d-flex align-items-center pr-2">
                <p className="ctrl">ctrl</p>
                <p className="px-2">+</p>
                <p className="shift">shift</p>
                <p className="px-2">+</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="alphabet"
                >
                  c
                </motion.p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md>
            <div className="shortcuts">
              <h6 className="flex-grow-1">Create Group</h6>
              <div className="d-flex align-items-center pr-2">
                <p className="ctrl">ctrl</p>
                <p className="px-2">+</p>
                <p className="shift">shift</p>
                <p className="px-2">+</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="alphabet"
                >
                  g
                </motion.p>
              </div>
            </div>
          </Col>
          <Col md>
            <div className="shortcuts">
              <h6 className="flex-grow-1">Create Center</h6>
              <div className="d-flex align-items-center pr-2">
                <p className="ctrl">ctrl</p>
                <p className="px-2">+</p>
                <p className="shift">shift</p>
                <p className="px-2">+</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="alphabet"
                >
                  q
                </motion.p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md>
            <div className="shortcuts">
              <h6 className="flex-grow-1">Frequent Posting</h6>
              <div className="d-flex align-items-center pr-2">
                <p className="ctrl">ctrl</p>
                <p className="px-2">+</p>
                <p className="shift">shift</p>
                <p className="px-2">+</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="alphabet"
                >
                  f
                </motion.p>
              </div>
            </div>
          </Col>
          <Col md>
            <div className="shortcuts">
              <h6 className="flex-grow-1">Closure Entries</h6>
              <div className="d-flex align-items-center pr-2">
                <p className="ctrl">ctrl</p>
                <p className="px-2">+</p>
                <p className="shift">shift</p>
                <p className="px-2">+</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="alphabet"
                >
                  e
                </motion.p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md>
            <div className="shortcuts">
              <h6 className="flex-grow-1">Journal Entries</h6>
              <div className="d-flex align-items-center pr-2">
                <p className="ctrl">ctrl</p>
                <p className="px-2">+</p>
                <p className="shift">shift</p>
                <p className="px-2">+</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="alphabet"
                >
                  j
                </motion.p>
              </div>
            </div>
          </Col>
          <Col md>
            <div className="shortcuts">
              <h6 className="flex-grow-1">Reports</h6>
              <div className="d-flex align-items-center pr-2">
                <p className="ctrl">ctrl</p>
                <p className="px-2">+</p>
                <p className="shift">shift</p>
                <p className="px-2">+</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="alphabet"
                >
                  r
                </motion.p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md>
            <div className="shortcuts">
              <h6 className="flex-grow-1">Accounting</h6>
              <div className="d-flex align-items-center pr-2">
                <p className="ctrl">ctrl</p>
                <p className="px-2">+</p>
                <p className="shift">shift</p>
                <p className="px-2">+</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="alphabet"
                >
                  a
                </motion.p>
              </div>
            </div>
          </Col>
          <Col md>
            <div className="shortcuts">
              <h6 className="flex-grow-1">Save/Submit Forms</h6>
              <div className="d-flex align-items-center pr-2">
                <p className="ctrl">ctrl</p>
                <p className="px-2">+</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="alphabet"
                >
                  s
                </motion.p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md>
            <div className="shortcuts">
              <h6 className="flex-grow-1">Run Report</h6>
              <div className="d-flex align-items-center pr-2">
                <p className="ctrl">ctrl</p>
                <p className="px-2">+</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="alphabet"
                >
                  r
                </motion.p>
              </div>
            </div>
          </Col>
          <Col md>
            <div className="shortcuts">
              <h6 className="flex-grow-1">Cancel</h6>
              <div className="d-flex align-items-center pr-2">
                <p className="ctrl">ctrl</p>
                <p className="px-2">+</p>
                <p className="shift">shift</p>
                <p className="px-2">+</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="alphabet"
                >
                  x
                </motion.p>
              </div>
            </div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default KeyboardShortcuts;
