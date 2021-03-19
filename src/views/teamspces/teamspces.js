import React, { useEffect,useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import $ from "jquery";
import Navbar from '../../_components/navbar';
import CeateTeamSpaces from './createteamspces';

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
                            <Row className="mb-3">
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

const TeamSpaces = (props) => {

  

  const [tickets, getTickets ]=useState([]);
    useEffect(() => {
      getAllSpces();
    }, []);
    const getAllSpces=()=>{
        var axios = require('axios');
var data = '';

var config = {
  method: 'get',
  url: 'https://clscharteredsecretaries.eu.teamwork.com/spaces/api/v1/spaces.json',
  headers: { 
    'Authorization': 'Bearer tkn.v1_MzVjNTRiZTUtZmFhZS00MTQ4LWFhMzQtMmNlNjNkN2U5ODNhLTY4MzY1OC41ODA3MDMuRVU=', 
    'Cookie': 'tw-auth=tw-BCDC8AA908709E9255CD6F19BD88BAD8-acEukNZ1lKrkCuniJkg1piawvOtN53-580703'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

        
    }
    
    let records =tickets.spaces ||[];
    console.log(tickets, "ticket record");
    
    const columns = [
        {
            dataField: 'id',
            text: 'Project Id',
            sort:true
        },
        {
            dataField: 'title',
            text: 'Title',
        },
        {
            dataField: 'code',
            text: 'Code',
        },
        {
            dataField:'spaceColor',
            text:"Space Color"
        },
        {
            dataField:'state',
            text:"State"
        },
    ];
    
    

    const activeTeamspce ="active";
   
    //let records =tickets;
    return (
        <React.Fragment>
            <Navbar activeTeamspce={activeTeamspce}/>
           
           
                          
          <section className="light-section pt-3 mt-5">
      <div className="content pt-1">
     
            <Row className="mt-5">
            <Col md={12} className="text-right">
                                    <CeateTeamSpaces getAllSpces={getAllSpces}/>
                                </Col>   
                <Col>
                    <TableWithSearch records={records} columns={columns} />
                </Col>
            </Row>
            
            </div>
            </section>
        </React.Fragment>
    );
};

export default TeamSpaces;


