import React, { useEffect,useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import axios from 'axios';
import config from '../../config/config';
//import Homnavbar from '../../_components/homnavbar';
import AgentNavbar from '../../_components/agentnavbar';
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

const FormSubmissionStstus = (props) => {

  

  const [formRecords, getformRecords ]=useState([]);

    useEffect(() => {

      getAllFormRecords();
      // eslint-disable-next-line
    }, []);

   var getUsername = localStorage.getItem('Username');
   console.log(getUsername, "agentusername");
    const getAllFormRecords=()=>{
        var data = '';
        
        var config = {
          method: 'get',
          url: `${urlpattern}clsstatus?Username=${getUsername}`,          
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          var formrecordsdata = response.data;
          getformRecords(formrecordsdata);
        })
        .catch(function (error) {
          console.log(error);
        });
        
        
    }
    
 
    
    const columns = [
        {
            dataField: 'companyName',
            text: 'Company Name',
        },
        {
            dataField: 'status',
            text: 'Status'
        }
    ];
    
    
   
    const activeForms ="active";
   
    let records =formRecords || [];
    return (
        <React.Fragment>
           <AgentNavbar activeForms={activeForms}/>
           
                          
          <section className="light-section pt-3 mt-5">
      <div className="content pt-1">
     
            <Row className="mt-5">
            <Col md={12} className="text-right">
                                </Col>   
                <Col>
                    <TableWithSearch records={records} columns={columns} />
                </Col>
            </Row>
            
            </div>
            {/* <Modal isOpen={modal} toggle={toggle} className={className}>
            <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader toggle={toggle}>Change Status</ModalHeader>
        <ModalBody>
        <Row>
                       <Col lg={12}>
                     <label>Status</label>
                           <select className="form-control"
                            onChange={(e) => {
                                setstatus(e.target.value);
                              }}
                              name="status">
                               <option value="">Select</option>
                               <option value="Submit">Submit</option>
                               <option value="InProgress">In Progress</option>                               
                               <option value="Completed">Completed</option>
                           </select>
                       </Col>
                       </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">Save</Button>{' '}
          <Button color="primary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
        </form>
      </Modal> */}
            </section>
        </React.Fragment>
    );
};

export default FormSubmissionStstus;


