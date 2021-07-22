import React from 'react';
import circle from '../images/circle.png';
import bgTop from '../images/bgTop.png';
import bgBottom from '../images/bgBottom.png';
import { Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};
const item = {
  hidden: { scale: 1.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1
  }
};
const Home = () => {
  return (
    <div className="bg ">
      <img src={bgTop} alt="bgTop" className="bgTop img-fluid" />
      <img src={bgBottom} alt="bgTop" className="bgBottom img-fluid" />
      <div className="row w-100 justify-content-center align-items-center">
        <motion.div
          initial={'hidden'}
          animate={'visible'}
          variants={variants}
          className="col-lg-6 circleBg  my-5"
        >
          <img src={circle} alt="circle" className="img-fluid" />
          <motion.h1
            initial={'hidden'}
            animate={'visible'}
            variants={item}
            transition={{ duration: 0.5 }}
            className="title"
          >
            FinLoan.
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="col-lg-6 d-flex justify-content-center flex-column align-items-center text-light mb-5"
        >
          <Form className="w-50 loginForm">
            <h3>Welcome back!</h3>
            <p className="py-3">
              Please sign in to your account to access your dashboard
            </p>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className="text-right">
              <Link to="/" className="text-light underLine">
                Forgot Password?
              </Link>
            </Form.Group>

            <Link to="/search">
              <Button id="btnSubmit" type="button" block>
                Submit
              </Button>
            </Link>
          </Form>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
