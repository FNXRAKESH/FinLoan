import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import dashboard from '../../images/menu/dashboard.png';
import keyboard from '../../images/menu/keyboard.png';
import center from '../../images/menu/center.png';
import chart from '../../images/menu/chart.png';
import clients from '../../images/menu/clients.png';
import entries from '../../images/menu/entries.png';
import frequent from '../../images/menu/frequent.png';
import groups from '../../images/menu/groups.png';
import help from '../../images/menu/help.png';
import inbox from '../../images/menu/inbox.png';
import journal from '../../images/menu/journal.png';
import navigation from '../../images/menu/navigation.png';
import sheet from '../../images/menu/sheet.png';
import './Menu.styles.scss';


const MenuGroup = (props) => {
 let history = useHistory();
 const [activeMenu, setActiveMenu] = useState(history.location.pathname);

    return (
      <div className="menuGroup py-4 pr-3">
        <div
          className="menuItem px-2"
          onClick={() => {
            history.push('/dashboard');
            setActiveMenu('/dashboard');
            props.setShowMenu(false);
           
          }}
        >
          {activeMenu === '/dashboard' ? (
            <div className="menuBorder"></div>
          ) : null}
          <div className="d-flex align-items-center flex-grow-1">
            <img src={dashboard} alt="dashboard" />
            <p
              className={
                activeMenu === '/dashboard' ? 'm-0 pl-2 fontBold' : 'm-0 pl-2'
              }
            >
              Dashboard
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </div>
        <div
          className="menuItem px-2"
          onClick={() => {
            history.push('/keyboard');
            setActiveMenu('/keyboard');
            props.setShowMenu(false);
            props.setShowTopMenu(false)
          }}
        >
          {activeMenu === '/keyboard' ? (
            <div className="menuBorder"></div>
          ) : null}
          <div className="d-flex align-items-center flex-grow-1">
            <img src={keyboard} alt="keyboard" />
            <p
              className={
                activeMenu === '/keyboard' ? 'm-0 pl-2 fontBold' : 'm-0 pl-2'
              }
            >
              Keyboard shortcuts
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </div>
        <div
          className="menuItem px-2"
          onClick={() => {
            history.push('/dashboard');
            setActiveMenu('/navigation');
            props.setShowMenu(false);
          }}
        >
          {activeMenu === '/navigation' ? (
            <div className="menuBorder"></div>
          ) : null}
          <div className="d-flex align-items-center flex-grow-1">
            <img src={navigation} alt="navigation" />
            <p
              className={
                activeMenu === '/navigation' ? 'm-0 pl-2 fontBold' : 'm-0 pl-2'
              }
            >
              Navigation
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </div>
        <div
          className="menuItem px-2"
          onClick={() => {
            history.push('/dashboard');
            setActiveMenu('/inbox');
            props.setShowMenu(false);
          }}
        >
          {activeMenu === '/inbox' ? <div className="menuBorder"></div> : null}
          <div className="d-flex align-items-center flex-grow-1">
            <img src={inbox} alt="inbox" />
            <p
              className={
                activeMenu === '/inbox' ? 'm-0 pl-2 fontBold' : 'm-0 pl-2'
              }
            >
              Inbox &amp; Tasks
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </div>
        <div
          className="menuItem px-2"
          onClick={() => {
            history.push('/dashboard');
            setActiveMenu('/collectionSheet');
            props.setShowMenu(false);
          }}
        >
          {activeMenu === '/collectionSheet' ? (
            <div className="menuBorder"></div>
          ) : null}
          <div className="d-flex align-items-center flex-grow-1">
            <img src={sheet} alt="sheet" />
            <p
              className={
                activeMenu === '/collectionSheet'
                  ? 'm-0 pl-2 fontBold'
                  : 'm-0 pl-2'
              }
            >
              Collection Sheet
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </div>
        <div
          className="menuItem px-2"
          onClick={() => {
            history.push('/dashboard');
            setActiveMenu('/individual');
            props.setShowMenu(false);
          }}
        >
          {activeMenu === '/individual' ? (
            <div className="menuBorder"></div>
          ) : null}
          <div className="d-flex align-items-center flex-grow-1">
            <img src={sheet} alt="individual" />
            <p
              className={
                activeMenu === '/individual' ? 'm-0 pl-2 fontBold' : 'm-0 pl-2'
              }
            >
              Individual Collection Sheet
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </div>
        <div
          className="menuItem px-2"
          onClick={() => {
            history.push('/frequentPosting');
            setActiveMenu('/frequentPosting');
            props.setShowMenu(false);
          }}
        >
          {activeMenu === '/frequentPosting' ? (
            <div className="menuBorder"></div>
          ) : null}
          <div className="d-flex align-items-center flex-grow-1">
            <img src={frequent} alt="frequentPosting" />
            <p
              className={
                activeMenu === '/frequentPosting'
                  ? 'm-0 pl-2 fontBold'
                  : 'm-0 pl-2'
              }
            >
              Frequent Postings
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </div>
        <div
          className="menuItem px-2"
          onClick={() => {
            history.push('/addJournalEntry');
            setActiveMenu('/addJournalEntry');
            props.setShowMenu(false);
          }}
        >
          {activeMenu === '/addJournalEntry' ? (
            <div className="menuBorder"></div>
          ) : null}
          <div className="d-flex align-items-center flex-grow-1">
            <img src={journal} alt="journal" />
            <p
              className={
                activeMenu === '/addJournalEntry'
                  ? 'm-0 pl-2 fontBold'
                  : 'm-0 pl-2'
              }
            >
              Add Journal Entries
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </div>
        <div
          className="menuItem px-2"
          onClick={() => {
            history.push('/dashboard');
            setActiveMenu('/entries');
            props.setShowMenu(false);
          }}
        >
          {activeMenu === '/entries' ? (
            <div className="menuBorder"></div>
          ) : null}
          <div className="d-flex align-items-center flex-grow-1">
            <img src={entries} alt="entries" />
            <p
              className={
                activeMenu === '/entries' ? 'm-0 pl-2 fontBold' : 'm-0 pl-2'
              }
            >
              Closing Entries
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </div>
        <div
          className="menuItem px-2"
          onClick={() => {
            history.push('/dashboard');
            setActiveMenu('/charts');
            props.setShowMenu(false);
          }}
        >
          {activeMenu === '/charts' ? <div className="menuBorder"></div> : null}
          <div className="d-flex align-items-center flex-grow-1">
            <img src={chart} alt="chart" />
            <p
              className={
                activeMenu === '/charts' ? 'm-0 pl-2 fontBold' : 'm-0 pl-2'
              }
            >
              Charts of Accounts
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </div>
        <div
          className="menuItem px-2"
          onClick={() => {
            history.push('/clients');
            setActiveMenu('/clients');
            props.setShowMenu(false);
          }}
        >
          {activeMenu === '/clients' ? (
            <div className="menuBorder"></div>
          ) : null}
          <div className="d-flex align-items-center flex-grow-1">
            <img src={clients} alt="clients" />
            <p
              className={
                activeMenu === '/clients' ? 'm-0 pl-2 fontBold' : 'm-0 pl-2'
              }
            >
              Clients
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </div>
        <div
          className="menuItem px-2"
          onClick={() => {
            history.push('/groups');
            setActiveMenu('/groups');
            props.setShowMenu(false);
          }}
        >
          {activeMenu === '/groups' ? <div className="menuBorder"></div> : null}
          <div className="d-flex align-items-center flex-grow-1">
            <img src={groups} alt="groups" />
            <p
              className={
                activeMenu === '/groups' ? 'm-0 pl-2 fontBold' : 'm-0 pl-2'
              }
            >
              Groups
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </div>
        <div
          className="menuItem px-2"
          onClick={() => {
            history.push('/center');
            setActiveMenu('/center');
            props.setShowMenu(false);
          }}
        >
          {activeMenu === '/center' ? <div className="menuBorder"></div> : null}
          <div className="d-flex align-items-center flex-grow-1">
            <img src={center} alt="center" />
            <p
              className={
                activeMenu === '/center' ? 'm-0 pl-2 fontBold' : 'm-0 pl-2'
              }
            >
              Center
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </div>
        <div
          className="menuItem px-2"
          onClick={() => {
            history.push('/dashboard');
            setActiveMenu('/help');
            props.setShowMenu(false);
          }}
        >
          {activeMenu === '/help' ? <div className="menuBorder"></div> : null}
          <div className="d-flex align-items-center flex-grow-1">
            <img src={help} alt="help" />
            <p
              className={
                activeMenu === '/help' ? 'm-0 pl-2 fontBold' : 'm-0 pl-2'
              }
            >
              Help
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </div>
      </div>
    );
}
 
export default MenuGroup;