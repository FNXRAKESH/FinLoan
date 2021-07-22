import React from 'react';
import 'SearchJournalEntries.styles.scss';
import { motion } from 'framer-motion';
const SearchJournalEntries = () => {
  return (
    <div id="searchJournalEntries" className="pl-5">
      <h5 className="py-3">Search Journal Entries</h5>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="d-flex flex-wrap justify-content-between"
      >
              <div className="searchEntries w-100">
                  
        </div>
      </motion.div>
    </div>
  );
};

export default SearchJournalEntries;
