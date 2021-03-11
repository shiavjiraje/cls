import React, { useEffect,useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../_components/navbar';
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

const ProjectManagement = (props) => {

  

  const [tickets, getTickets ]=useState([]);
 const url ='http://www.apiats.somee.com/api/';
    useEffect(() => {
      getAllTickets();
    }, []);
    const getAllTickets=()=>{
        var config = {
            method: 'GET',
            url: 'https://archesoftronix1.teamwork.com/projects.json',
            headers: { 
              'Authorization': 'Basic twp_5242nQlYlcxYe3lJ3ZnugeDM3tB2', 
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET"
            }
          };
          
        //   ,  
          //data : data
             // "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
              //"Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept, Authorization",
             // "Content-type": "Application/json",
        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            var allTickets=response.data;
                getTickets(allTickets);  
          })
          .catch(function (error) {
            console.log(error);
          });
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

    const activeProject ="active";
   
    //let records =tickets;
    return (
        <React.Fragment>
            <Navbar activeProject={activeProject}/>
            {showTicketGrid ? <section className="light-section pt-3 mt-5">
      <div className="content pt-5">
            <Row>
                <Col>
                    <TableWithSearch records={records} columns={columns} />
                </Col>
            </Row>
            </div>
            </section>
:
            
             <h1>test</h1>
            }
        </React.Fragment>
    );
};

export default ProjectManagement;


