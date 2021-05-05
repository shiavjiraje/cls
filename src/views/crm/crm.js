import React, { useEffect } from "react";
//import Navbarsupoort from "../../_components/navbarsupoort";
import { Col, Row } from "reactstrap";
//import TextEditor from "../../_components/textEditor";
import Footer from "../../_components/footer";
import $ from "jquery";
import Navbar from "../../_components/navbar";
function Crm(props) {
  //const activeTicket = "active ";
  //const open = "open";
  
  const query = new URLSearchParams(props.location.search);

  const code = query.get('code')
  console.log(code)//123

  //console.log(query);
  useEffect(() => {
    // other code
    var formData = new FormData();
    formData.append("code", code);
    formData.append("client_secret", "4f12ea8693f6ce4e833b6767ff965bc67a0dd11d");
    formData.append("redirect_uri", "http://localhost:3000/crm");
    formData.append("client_id", "4f1c06ed36fa06c273b0d1ae4a979d013d901c55");

    $.ajax({
      url: "https://www.teamwork.com/launchpad/v1/token.json",
      type: "Post",
      dataType: "JSON",
      data: formData, //JSON.stringify(obj),
      contentType: false,
      processData: false,
      success: function (data) {
        console.log("log response on success");
        console.log(data);
        localStorage.setItem("access_token", JSON.stringify(data.access_token));
        var getaccess_token = JSON.parse(localStorage.getItem("access_token"));
        console.log(getaccess_token, "crm access")
       // localStorage.setItem("ticketNumber", JSON.stringify(data));
        //swal("Ticket Created Successful", data, "");
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []) ;
 const activeCrm = "active ";
  return (
    <React.Fragment>
      <Navbar activeCrm={activeCrm} />

      <section className="light-section pb-1 mt-5">
        <div className="content pt-5 section-height">
          <Row className="mt-3">
            <Col lg={12}>
              <h6 className="text-span">
                <b>Welcome To Crm </b>
              </h6>
            </Col>
          </Row>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
export default Crm;
