import React, { useEffect,useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import $ from "jquery";
import Navbar from '../../_components/navbar';
//import swal from 'sweetalert';
//import CreateProject from './createproject';

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
                                               // { text: 'Todos', value: ( props.records ? props.records.length : 0 ) }
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
    useEffect(() => {
      getAllProject();
    }, []);
    const getAllProject=()=>{
        var apitokenstring = "twp_pqX4Pmi5ryK7DNzx9I3vuZHLyfxL_eu";
        var encodedtoken = window.btoa(apitokenstring);
        //alert("calling");
        $.ajax
        ({
             
            url: "https://clscharteredsecretaries.eu.teamwork.com/projects.json",
            type:"GET",
            dataType:"JSON",
            //data: JSON.stringify(obj),
                headers: {
            'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept',
            'Authorization':`Basic ${encodedtoken}`,
            'Access-Control-Allow-Origin' :'*',
            'Access-Control-Allow-Credentials' : true,
            'Access-Control-Allow-Methods' : '*'
            
            },
            
            Authorization: `Basic ${encodedtoken}`,
            success: function(data) 
            {
               // debugger;
                console.log("log response on success");
                console.log(data);
                var allTickets = data;
                getTickets(allTickets);
            }
        });
    }
    
    let records =tickets.projects ||[];
    console.log(tickets, "ticket record");
    
    const columns = [
        {
            dataField: 'id',
            text: 'Project Id',
            sort:true
        },
        {
            dataField: 'name',
            text: 'Project Name',
        },
        {
            dataField: 'created-on',
            text: 'Create Date',
        },
        {
            dataField:'description',
            text:"Description"
        },
        {
            dataField:'status',
            text:"Status"
        },
    ];
    
    

    const activeProject ="active";
   
    //let records =tickets;
    return (
        <React.Fragment>
            <Navbar activeProject={activeProject}/>
           
           
                          
          <section className="light-section pt-3 mt-5">
      <div className="content pt-1">
     
            <Row className="mt-5">
            <Col md={12} className="text-right">
                                    {/* <CreateProject getAllProject={getAllProject}/> */}
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

export default ProjectManagement;


