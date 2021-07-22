import React from 'react';
import { InputGroup, Form, Col, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import './Search.styles.scss';
import { motion } from 'framer-motion';

const leftArrow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.2
    }
  }
};
const rightArrow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      delay: 1,
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.2
    }
  }
};
const upArrow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      delay: 0.5,
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.2
    }
  }
};

const Search = () => {
  return (
    <div className="d-flex align-items-center justify-content-center h-75 flex-column">
      <h1>FinLoan.</h1>

      <Form className="align-items-center py-4 w-50">
        <Form.Label htmlFor="inlineFormInputGroup" srOnly>
          Search
        </Form.Label>
        <InputGroup className="mb-2 ">
          <InputGroup.Prepend>
            <InputGroup.Text className="searchIcon">
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            className="searchInput"
            id="inlineFormInputGroup"
            placeholder="Search"
          />
        </InputGroup>
      </Form>
      <p className="text-center">
        <small>
          You can navigate your way through
          <br />
          FinLoan using:
        </small>
      </p>
      <div className="d-flex">
        <motion.div
          initial={'hidden'}
          animate={'visible'}
          variants={leftArrow}
          className="d-flex flex-column align-items-center "
        >
          <motion.div
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="shortcutIcons"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </motion.div>
          <p className="text-center pt-3" style={{ lineHeight: 18 + 'px' }}>
            <small>
              The shortcuts
              <br />
              to the left
            </small>
          </p>
        </motion.div>
        <motion.div
          initial={'hidden'}
          animate={'visible'}
          variants={upArrow}
          className="d-flex flex-column align-items-center mx-5"
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{delay:0.5, duration: 0.5 }}
            className="shortcutIcons"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </motion.div>
          <p className="text-center pt-3" style={{ lineHeight: 18 + 'px' }}>
            <small>
              The shortcuts
              <br />
              to the Top
            </small>
          </p>
        </motion.div>
        <motion.div
          initial={'hidden'}
          animate={'visible'}
          variants={rightArrow}
          className="d-flex flex-column align-items-center "
        >
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{delay:1, duration: 0.5 }}
            className="shortcutIcons"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </motion.div>
          <p className="text-center pt-3" style={{ lineHeight: 18 + 'px' }}>
            <small>
              The shortcuts
              <br />
              to the right
            </small>
          </p>
        </motion.div>
      </div>
      
    </div>
  );
};

export default Search;
