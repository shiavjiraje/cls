import React, { useEffect,useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Navbarsupoort from '../../_components/navbarsupoort';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from "../../_components/footer";
import ViewTicketReplay from './viewticketreplay';
import config from '../../config/config';
var urlpattern =config.baseUrl;
const defaultSorted = [
    {
        dataField: 'id',
        order: 'asc',
    },
];
//const { ExportCSVButton } = CSVExport;
const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    <React.Fragment>
        <label className="d-inline mr-1">Show</label>
        <Input
            type="select"
            name="select"
            id="no-entries"
            className="custom-select custom-select-sm d-inline col-2"
            defaultValue={currSizePerPage}
            onChange={(e) => onSizePerPageChange(e.target.value)}>
            {options.map((option, idx) => {
                return <option key={idx}>{option.text}</option>;
            })}
        </Input>
        <label className="d-inline ml-1">Entry</label>
    </React.Fragment>
);

const TableWithSearch = (props) => {
    const { SearchBar } = Search;
    //const dispatch = useDispatch();
   // const [rowData, setrowData] = useState([]);
    //const [rowSelect, setrowSelect] = useState([]);
    
    //   const rowEvent = {
    //     onDoubleClick: (row) => {
    //         alert();
    //             setrowData((rowData) => [...rowData, row]);
    //             console.log("rowdata", rowData)
              
    //     }
    // }
    const NoDataIndication = () => (
        <div className="spinner">
          <div className="rect1" />
          <div className="rect2" />
          <div className="rect3" />
          <div className="rect4" />
          <div className="rect5" />
        </div>
      );
    return (
            
                <ToolkitProvider bootstrap4 keyField="ROW_NUMBER" data={props.records} columns={props.columns} search>
                    {(props) => (
                        <React.Fragment>
                            <Row>
                                <Col md={6} className="">
                                    <SearchBar {...props.searchProps} />
                                </Col>    
                               
                            </Row>

                            <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                defaultSorted={defaultSorted}
                                striped
                                hover
                               // rowEvents={rowEvent}
                                noDataIndication={ () => <NoDataIndication /> }
                                pagination={
                                    paginationFactory( 
                                        { 
                                            sizePerPage: 10, 
                                            sizePerPageRenderer: sizePerPageRenderer, 
                                            sizePerPageList: [
                                                { text: '10', value: 10, }, 
                                                { text: '20', value: 20 }, 
                                                { text: '50', value: 50 }, 
                                                { text: 'Todos', value: ( props.records ? props.records.length : 0 ) }
                                            ] 
                                        } 
                                    )
                                }
                                
                            />
                        </React.Fragment>
                    )}
                </ToolkitProvider>
    );
};

const ViewTicketThread = (props) => {

  

  const [tickets, getTickets ]=useState([]);
    useEffect(() => {
      getAllTickets();
    }, []);
    const getAllTickets=()=>{
        axios.get(`${urlpattern}clscreateticket?status=All`)
        
        .then((response)=>{
            var allTickets=response.data;
            getTickets(allTickets);            
            // console.log(allTickets, 'join list');

        })
    }
    let records =tickets;
    //console.log(tickets, "ticket record");
    
    const columns = [
        {
            dataField: 'ticket_number',
            text: 'Ticket No.',
        },
        {
            dataField:'ticket_createdate',
            text:"Date"
        },
        {
            dataField: 'ticket_name',
            text: 'Name',
        },
        {
            dataField: 'ticket_phoneno',
            text: 'Contact Number',
        },
        {
            dataField: 'ticket_initial_status',
            text: 'Status',
            formatter: (cell, row, rowIndex, extraData) => (
                <Link
                  className="btn-link"
                  onClick={() => _validateFunction(row)}
                  > {row.ticket_initial_status} 
                  </Link>
              )
        }
    ];
    const [showTicketGrid, showTicketDetails] = useState(true);
    const [ticketDetails, setticketDetails] = useState([]);
    
    function _validateFunction(row , id) {    
         console.log("activity id :",(row)); 
         //ticketdetails =row;
         setticketDetails(row);
         showTicketDetails(!showTicketGrid);
        //alert(showTicketGrid);
     }
     
     function gotobackpage(){
        showTicketDetails(!showTicketGrid);
     }
     let viewticketdetails = ticketDetails;

    const activeTickitThread ="active";
   
    //let records =tickets;
    return (
        <React.Fragment>
            <Navbarsupoort activeTickitThread={activeTickitThread}/>
            {showTicketGrid ?
             <React.Fragment>
                  <section className="light-section pt-3 mt-5">
      <div className="content pt-5 mb-5">
            <Row>
                <Col>
                    <TableWithSearch records={records} columns={columns} />
                </Col>
            </Row>
            </div>
            </section>
            <Footer />
             </React.Fragment>
            
:
<React.Fragment>           
              <ViewTicketReplay viewticketdetails={viewticketdetails} gotobackpage={gotobackpage}/>
              <Footer />
              </React.Fragment>
            }
        </React.Fragment>
    );
};

export default ViewTicketThread;


