import React, { useEffect,useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
//import * as FeatherIcon from 'react-feather';
import Navbarsupoort from '../../_components/navbarsupoort';
//import { vendorAction } from '../_actions/viewticketthread';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TextEditor from '../../_components/textEditor';
//import { Link } from 'react-router-dom';
//import PageTitle from '../../components/PageTitle';



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

const ViewTicketThread = () => {

  

  const [tickets, getTickets ]=useState([]);
 const url ='http://www.apiats.somee.com/api/';
    useEffect(() => {
      getAllTickets();
    }, []);
    const getAllTickets=()=>{
        axios.get(`${url}clscreateticket?status=All`)
        
        .then((response)=>{
            var allTickets=response.data;
            getTickets(allTickets);            
             console.log(allTickets, 'join list');

        })
    }
    let records =tickets;
    console.log(tickets, "ticket record");
    
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
    
    return (
        <React.Fragment>
            <Navbarsupoort activeTickitThread={activeTickitThread}/>
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
            
                 <section className="light-section pt-2 mt-5">
                 <div className="content pt-5">
                       <Row>
                            <Col lg={12}>
                               <h6 className="text-span"><b>Ticket Number : {viewticketdetails.ticket_number}</b></h6>
                           </Col>
                           <Col lg={6} >
                               <div className="dark-section p-3">
                               <h6 className="text-span"><b>Basic Ticket Information</b></h6>
                               <label>Ticket Status : {viewticketdetails.ticket_initial_status}</label><br/>
                               <label>Deapartment : {viewticketdetails.ticket_business}</label><br/>
                               <label>Create Date : {viewticketdetails.ticket_createdate}</label>
                               </div>
                           </Col>
                           <Col lg={6}>
                           <div className="dark-section p-3">
                           <h6 className="text-span"><b>User Information</b></h6>
                               <label>Name : {viewticketdetails.ticket_name}</label><br/>
                               <label>Email : {viewticketdetails.ticket_email}</label><br/>
                               <label>Phone : {viewticketdetails.ticket_phoneno}</label>
                               </div>
                           </Col>
                           <Col lg={12} className="mt-4">
                           <div className="light-section">
                                <Row>
                                <Col lg={3}>
                                <h6 className="text-span"><b>Ticket Status</b></h6>
                                    <select className="form-control">
                                        <option value="">Select</option>
                                        <option value="Open">Open</option>
                                        <option value="Close">Close</option>
                                    </select>
                                </Col>
                                </Row>
                           </div>
                           </Col>
                           <Col lg={12} className="mt-5">
                           <div className="light-section">
                           <Row>
                                <Col lg={1}>
                                <div className="chat-icon"><div className="h1"><i className="fa fa-user" aria-hidden="true"></i></div></div>
                                </Col>
                                <Col lg={11}>
                                <div className="card card-post">
                                <div className="card-header bgprimary">{viewticketdetails.ticket_number} Posted {viewticketdetails.ticket_createdate}</div>
                                <div className="card-body">Content</div>
                                </div>
                                <Col lg={12} className="mt-3">
                                    <i className="fa fa-pencil-square-o text-span font-18" aria-hidden="true"></i><label className="createdby"> Created By</label>
                                    <i className="fa fa-user-o text-span font-18 ml-5" aria-hidden="true"></i><label className="ml-2">{viewticketdetails.ticket_phoneno}</label>
                                    <label className="createdby ml-2"> {viewticketdetails.ticket_createdate}</label>
                                </Col>
                                </Col>
                                </Row>
                                <Row>
                               
                                <Col lg={11}>
                                <div className="card card-replay">
                                <div className="card-header bgprimary">{viewticketdetails.ticket_number} Posted {viewticketdetails.ticket_createdate}</div>
                                <div className="card-body">Content</div>
                                </div>
                                <Col lg={12} className="mt-3">
                                   <label className="createdby"> Closed By</label>
                                    <label className="ml-2">{viewticketdetails.ticket_name}</label>With Status of
                                    <label className="createdby ml-2"> {viewticketdetails.ticket_initial_status}</label>
                                    <label className="createdby ml-2"> {viewticketdetails.ticket_finaldate}</label>
                                    
                                </Col>
                                </Col>
                                <Col lg={1}>
                                <div className="chat-icon"><div className="h1"><i className="fa fa-user" aria-hidden="true"></i></div></div>
                                </Col>
                                </Row>
                            </div>
                           </Col>
                           <Col lg={12} className="mt-5">
                           <div className="dark-section p-3 blue-brd">
                               <h6 className="text-span"><b>Post a Replay</b></h6>
                               <Row className="blue-brd-top"></Row>
                               <label className="mt-2">To best assist you, we request that you be specific and detailed</label>
                                <TextEditor/>
                                <Col lg={12} className="mt-4 text-center">
                                    <button type="submit" className="btn btn-primary">Post Replay</button> 
                                    <button type="button" className="btn btn-primary ml-2">Reset</button> 
                                    <button type="button" onClick={() => gotobackpage()} className="btn btn-primary ml-2">Cancel</button> 
                                </Col>
                           </div>
                           </Col>
                       </Row>
                       </div>
                       </section>
            }
        </React.Fragment>
    );
};

export default ViewTicketThread;


