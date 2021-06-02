import React, { useEffect } from "react";
//import Navbarsupoort from "../../_components/navbarsupoort";
import { Col, Row } from "reactstrap";
//import TextEditor from "../../_components/textEditor";
import Footer from "../../_components/footer";
import $ from "jquery";
import HomeNavbar from '../../_components/homnavbar';
function HandyGuide(props) {
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
  return (
    <React.Fragment>
      <HomeNavbar />

      <section className="light-section pb-0 mt-5">
        <div className="content pt-5">
          <Row className="mt-3">
            <Col lg={12}>
              <h5 className="text-span">
                <b className="text-uppercase">Handy Guide to Completing the Company Order Form</b>
              </h5>
            </Col>
          </Row>
        </div>
      </section>
      <section className="light-section pb-1 mt-0">
        <div className="content">
          <Row className="mt-0">
            <Col lg={12}>
              <h6 className="text-span">
                <b>1. Company Formation Process</b>
              </h6>
              <p>his company formation service is provided by CLS Chartered Secretaries (“CLS”) in accordance with our General Terms of Business

The company order form should be completed in full. We will produce the necessary formation documentation and email you the documentation for signing within 24 hours (working day). When we receive the originally signed formation documentation, we will submit these to the Companies Registration Office who will in due course and if all is in order, register the company, issue the Company Number and Digital Certificate of Incorporation.

We draft the documentation based on the information we are provided with on the company order form and we cannot accept any liability in cases where incorrect information has been submitted to the CRO.

Any additional work carried out by us or advice given at the request of the client which is not covered within the standard company formation process will be subject to an additional fee. An hourly rate of €150 plus VAT will be applied to all additional work carried out by us or additional advice given.
</p>
            </Col>
          </Row>
        </div>
      </section>
      <section className="light-section pb-1 mt-3">
        <div className="content">
          <Row className="mt-0">
            <Col lg={12}>
              <h6 className="text-span">
                <b>2. Payment</b>
              </h6>
              <p>Our invoice will be issued with the formation documentation. Payment should be made in full when the signed documentation is being returned to us. The formation documentation will not be submitted to the Companies Registration Office until full payment has been made.

A cancellation fee of €50 plus VAT will apply if the formation documentation is issued and the formation is subsequently cancelled.

Payment may be made by Bank Transfer* or by card using Stripe**. Our invoice provides you with all necessary bank transfer details and the link to pay by card.
*Please quote relevant Invoice Number on all Bank Transfers
*Cheques should be made payable to CLS Chartered Secretaries, quoting the relevant Invoice Number
</p>
            </Col>
          </Row>
        </div>
      </section>
      <section className="light-section pb-1 mt-3">
        <div className="content">
          <Row className="mt-0">
            <Col lg={12}>
              <h6 className="text-span">
                <b>3. Resubmissions</b>
              </h6>
              <p>

CLS will impose a resubmission charge where we have advised that a company name will not be approved and you wish to submit the application and the CRO subsequently reject the application. This requires new documentation to be produced and re-issued for signing. The resubmission charge will be €50 plus VAT.
</p>
            </Col>
          </Row>
        </div>
      </section>
      <section className="light-section pb-1 mt-3">
        <div className="content">
          <Row className="mt-0">
            <Col lg={12}>
              <h6 className="text-span">
                <b>4. Anti-Money Laundering Customer Due Diligence</b>
              </h6>
              <p>




              CLS are authorised by the Department of Justice & Law Reform to act as a Trust & Corporate Service Provider.
We are therefore required to perform Customer Due Diligence (“CDD”) on all business relationships. Consequently, for all company formations and specified company secretarial services, we are required to perform CDD on the company being formed or the specified company secretarial services being provided.

Third Party Confirmation

Section 40 of the Act provides that where a customer is introduced to a designated person (CLS) by a “relevant third party” as defined in the Act, then the designated person may rely on the due diligence measures already taken by that third party.

A relevant third party means a person carrying on business as a designated person in the State that is:-

A credit institution
A financial institution
An external accountant or auditor and who is a member of a designated accountancy body
A tax adviser and who is also a solicitor or a member of a designated accountancy body or of the Irish Taxation Institute
A relevant independent legal professional
A trust or company service provider and who is also a member of a designated accountancy body, a solicitor or authorised to carry on business by the Central Bank and Financial Services Authority of Ireland
A person carrying on business in another Member State or in designated place under the Act who is supervised or monitored in accordance with the Third Money Laundering Directive
Prior to the commencement of the provision of specified company secretarial documentation, CLS will seek the following written confirmation from the third party:-

We confirm that we are a relevant third party as defined in the Criminal Justice (Money Laundering & Terrorist Financing) Act 2010;
We hereby confirm that we have performed appropriate Customer Due Diligence on this business relationship in full compliance with the Criminal Justice (Money Laundering & Terrorist Financing) Act 2010 and;
If requested to do so, we will forward toCLS, as soon as practicable, any documents(whether or not in electronic form) or information relatingto the customer that we have obtained in applying CDD.

Non-Third Parties

CLS are required to perform Enhanced Due Diligence as we do not meet you the client in person, when performing the Customer Due Diligence. In order to comply with the requirements of Enhanced Due Diligence, we require the following documentation:-

A copy of a passport or drivers license for each Director & Shareholder;
A copy of a utility bill or bank or building society statement for each Director & Shareholder.
Beneficial Owner – Written confirmation of the beneficial owner of the company, their name & address.
The above documentation must be certified by one of the following:-

Embassy, consulate, high commission
Lawyer or solicitor
Accountant
Bank
Gardaí
The documentation must be returned to our offices before we can commence drafting the Company Secretarial documentation. A copy of a passport for each Director & Shareholder;
A copy of a utility bill or bank or building society statement.
Beneficial Owner – Written confirmation of the beneficial owner of the company, their name & address.
5. Incorporation Type
The standard incorporation is where the original directors, secretary and shareholders sign the formation documentation.

The nominee incorporation is where CLS act as directors, secretary and shareholders until the company is formed and we resign and transfer the company over. This process is quicker to incorporate the company however it is more expensive and may slow down setting up the bank account.
</p>
            </Col>
          </Row>
        </div>
      </section>
      <section className="light-section pb-1 mt-3">
        <div className="content">
          <Row className="mt-0">
            <Col lg={12}>
              <h6 className="text-span">
                <b>5. Incorporation Type</b>
              </h6>
              <p>

              The standard incorporation is where the original directors, secretary and shareholders sign the formation documentation.

The nominee incorporation is where CLS act as directors, secretary and shareholders until the company is formed and we resign and transfer the company over. This process is quicker to incorporate the company however it is more expensive and may slow down setting up the bank account.
</p>
            </Col>
          </Row>
        </div>
      </section>
      <section className="light-section pb-1 mt-3">
        <div className="content">
          <Row className="mt-0">
            <Col lg={12}>
              <h6 className="text-span">
                <b>6. Company Pack Type</b>
              </h6>
              <p>

              CLS Company Formation Packs – What’s Included?
</p>
<table className="table table-striped">
    <thead className="blue-thead">
      <tr>
      <th></th>
        <th className="text-center">Basic Pack (Digital)</th>
        <th className="text-center">Digital Pack (Incl. Seal)	 </th>
        {/* <th className="text-center">Hard Copy Pack(Incl. Seal)</th> */}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Certificate of Incorporation</td>
        <td className="text-center"><i className="fa fa-check" aria-hidden="true"></i></td>
        <td className="text-center"><i className="fa fa-check" aria-hidden="true"></i></td>
        {/* <td className="text-center"><i className="fa fa-check" aria-hidden="true"></i></td> */}
      </tr>
      <tr>
        <td>Share Certificate(s)</td>
        <td className="text-center"><i className="fa fa-check" aria-hidden="true"></i></td>
        <td className="text-center"><i className="fa fa-check" aria-hidden="true"></i></td>
        {/* <td className="text-center"><i className="fa fa-check" aria-hidden="true"></i></td> */}
      </tr>
      <tr>
        <td>Board Meeting Minutes</td>
        <td className="text-center"><i className="fa fa-check" aria-hidden="true"></i></td>
        <td className="text-center"><i className="fa fa-check" aria-hidden="true"></i></td>
        {/* <td className="text-center"><i className="fa fa-check" aria-hidden="true"></i></td> */}
      </tr>
      <tr>
        <td>Company Register</td>
        <td className="text-center"><i className="fa fa-check" aria-hidden="true"></i></td>
        <td className="text-center"><i className="fa fa-check" aria-hidden="true"></i></td>
        {/* <td className="text-center"><i className="fa fa-check" aria-hidden="true"></i></td> */}
      </tr>
      <tr>
        <td>Company Constitution</td>
        <td className="text-center"><i className="fa fa-check" aria-hidden="true"></i></td>
        <td className="text-center"><i className="fa fa-check" aria-hidden="true"></i></td>
        {/* <td className="text-center"><i className="fa fa-check" aria-hidden="true"></i></td> */}
      </tr>
      <tr>
        <td>Company Seal</td>
        <td className="text-center"><i className="fa fa-times" aria-hidden="true"></i></td>
        <td className="text-center"><i className="fa fa-check" aria-hidden="true"></i></td>
        {/* <td className="text-center"><i className="fa fa-check" aria-hidden="true"></i></td> */}
      </tr>
      <tr>
        <td>Method Of Delivery:</td>
        <td>E-Mailed Directly to You,
All Content Digital</td>
        <td>E-Mailed Directly to You,
Company Seal Posted</td>
        {/* <td>Delivered by Courier,
Seal Posted</td> */}
      </tr>
    </tbody>
  </table>
            </Col>
          </Row>
        </div>
      </section>
      <section className="light-section pb-1 mt-3">
        <div className="content">
          <Row className="mt-0">
            <Col lg={12}>
              <h6 className="text-span">
                <b>7. Company Name</b>
              </h6>
              <p>We will require your first 3 preferred choices for the name of your new Company. The proposed name may be refused if:-

it is identical, similar or can be considered shortening of a name already on the Register of Companies
it may be considered offensive
it would suggest state sponsorship
the words “standard” and “credit union” are prohibited
For more information on company names click here 

CLS will check the names and confirm to you if they are available. The proposed name should be as distinguishing as possible from any similar company names already registered.

CLS may only advise on a company name based on CRO Guidelines.The Companies Registration Office make their decision on receipt of the signed formation documentation. Note: Please do not incur any costs (Headed Paper etc.) or use the company name until the Certificate of Incorporation has been issued by the CRO as the name cannot be guaranteed prior to this.

Please contact us for any further information on company names or to check a company name.
</p>
            </Col>
          </Row>
        </div>
      </section>
      <section className="light-section pb-1 mt-3">
        <div className="content">
          <Row className="mt-0">
            <Col lg={12}>
              <h6 className="text-span">
                <b>8. Principal Activity of the Company</b>
              </h6>
              <p>The Principal Activity of the LTD, DAC, CLG, PLC and ULC should be a detailed description of no more than 2 distinct activities which the Company intends to carry out. Under the Fe Phrainn scheme, the Company’s objects clause must be no more than 40 words. If you wish to have an objects clause longer than 40 words, this application will have to be submitted manually. A manual submission is more expensive and may take up to 21 days for the Companies Registration Office to form the Company.

A Charity company will require an extensive objects clause and ancillary objects and powers.

For more information on the Principal Activity click here
</p>
            </Col>
          </Row>
        </div>
      </section>
      <section className="light-section pb-1 mt-3">
        <div className="content">
          <Row className="mt-0">
            <Col lg={12}>
              <h6 className="text-span">
                <b>9. Company Type</b>
              </h6>
              <p>The most common type of Company used in Ireland is a Private Company Limited by Shares “LTD”.  A Company Limited by Guarantee is generally set up as a non for profit organisation. There are different membership requirements for each type of Company as set out below.
</p>
<ul>
  <li><b>Private Company Limited by Shares (LTD)– </b>Minimum of 1 member & max 149 – Minimum of 1 Director (Secretary must not be sole Director) No Objects Clause Required</li>
  <li><b>Designated Activity Company (DAC)</b>-Minimum of 1 member & Max 149-Minimum of 2 Directors</li>
  <li><b>Company Limited by Guarantee (CLG)– </b>Minimum of 1 member-Minimum of 2 Directors. Charity CLG requires 3 unrelated directors & 3 members</li>
  <li><b>Public Limited Company (PLC)–</b> Minimum of 1 member-Minimum of 2 Directors</li>
  <li><b>Unlimited Company–</b> Minimum of 1 member-Minimum of 2 Directors</li>
</ul>
<p>For more information on company types click here or contact us</p>
            </Col>
          </Row>
        </div>
      </section>
      <section className="light-section pb-1 mt-3">
        <div className="content">
          <Row className="mt-0">
            <Col lg={12}>
              <h6 className="text-span">
                <b>10. Share Capital</b>
              </h6>
              <p>This section is not applicable to Companies Limited by Guarantee (CLG) or a Public Unlimited Company (PULC) without a Share Capital

The authorised share capital section is also optional for LTDs

If the company is required or chooses to have an authorised share capital, this figure is the maximum amount of share capital the company may issue –This is generally either €1,000,000 or €100,000. The company does not have to issue all these shares.

The issued share capital is the number of shares being issued to the subscribers of the company. The number of shares issued can be as little as 1 or as large as 1,000 or more. One vote is attached to each share held in the Company and therefore it is very important to ensure that the correct amount of shares are being issued to each subscriber.

Shares issued can be of any class but the most common type of share issued is Ordinary Shares.

The nominal amount per share is the cost of each share – usually €1. Shares may also be issued at a premium and the amount paid by premium must be disclosed in the additional information box.</p>

            </Col>
          </Row>
        </div>
      </section>
      <section className="light-section pb-1 mt-3">
        <div className="content">
          <Row className="mt-0">
            <Col lg={12}>
              <h6 className="text-span">
                <b>11. Company Secretary Details</b>
              </h6>
              <p>Every company is required to have a company secretary. If the company only has one director (LTD company) then the secretary must be a separate person to the sole director.</p>
              <ul>
              The secretary:
              <li>Can be an individual or body corporate</li>
              <li>Must be at least 18 years old</li>
              <li>Does not have to be resident in the EEA</li>
              <li>If the secretary does not have the necessary skills the company may engage an experience professional such as CLS to assist with performing this role</li>
              </ul>
              <p>For more information on the Company Secretary click here</p>
            </Col>
          </Row>
        </div>
      </section>
      <section className="light-section pb-1 mt-3">
        <div className="content">
          <Row className="mt-0">
            <Col lg={12}>
              <h6 className="text-span">
                <b>12. Directors Details</b>
              </h6>
              <p>A minimum of 1 Director is required to set up a LTD . All other company types require at least 2 Directors. A Director must be at least 18 years old

At least 1 Director must be a resident European Economic Area Director. In the absence of an EEA Director, a Section 137 Bond must be taken out and filed with the incorporation documentation.

Any Director who has been disqualified or restricted from acting as a Director or Secretary or who is an Undischarged Bankrupt in Ireland or in another jurisdiction, must disclose this information to the Companies Registration Office. Failure to disclose this information is an offence and the Director maybe prosecuted in the High Court. A form B74 must be completed and submitted to the Companies Registration Office together with the A1 Form.

A list of current or past worldwide directorships held by each Director in the last 5 years should be attached to the order form.

For more information on Directors click here</p>
            </Col>
          </Row>
        </div>
      </section>
      <section className="light-section pb-1 mt-3">
        <div className="content">
          <Row className="mt-0">
            <Col lg={12}>
              <h6 className="text-span">
                <b>13. Subscriber Details</b>
              </h6>
              <p>The subscribers are the first shareholders / members of the company and at least one is required. The full details of the Subscribers should only be included if they are different from the Directors and Secretary.

A share gives any shareholder the right to a vote in the Company and it is important that the new shareholders decide the number of shares to be issued to ensure that the control of the Company is divided correctly. A shareholders agreement should always be considered when forming a Company and your solicitor will be best placed to advise you on this agreement.

For more information on Shareholders or Members click here</p>
            </Col>
          </Row>
        </div>
      </section>
      <section className="light-section pb-1 mt-3">
        <div className="content">
          <Row className="mt-0">
            <Col lg={12}>
              <h6 className="text-span">
                <b>14. Beneficial Owners</b>
              </h6>
              <p>The details of the beneficial owners (individual(s)) of the shares in this company should be completed. If the shares are held by a corporate body, the beneficial owners of the corporate body should be completed.
For more information click here</p>
            </Col>
          </Row>
        </div>
      </section>
      <section className="light-section pb-1 mt-3">
        <div className="content">
          <Row className="mt-0">
            <Col lg={12}>
              <h6 className="text-span">
                <b>15. Registered Office Address</b>
              </h6>
              <p>The registered office address must be situated in the Republic of Ireland. The registered office address must be a physical location and cannot be a post office box number. A letter addressed to the company at its registered office address must be capable of being delivered by An Post. The registered office address is where all legal documents will be sent. A company’s registered office can be changed at any time.

Click here for more information on the Registered Office Address click here</p>
            </Col>
          </Row>
        </div>
      </section>
      <section className="light-section pb-5 mt-3">
        <div className="content">
          <Row className="mt-0">
            <Col lg={12}>
              <h6 className="text-span">
                <b>16. Additional Information</b>
              </h6>
              <p>Please use this section to provide us with any additional information you may feel is relevant to your new Company.

For example: Are there different classes of shares to be issued, different rights attached to shares, additional name choices, who shall be appointed chairperson, will the Company be applying for charitable status if it is a Company Limited by Guarantee.</p>
            </Col>
          </Row>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
export default HandyGuide;
