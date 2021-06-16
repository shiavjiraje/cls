import React, { Component } from 'react';
import { connect } from 'react-redux';  
import { withRouter } from 'react-router-dom';
import { Collapse } from 'reactstrap';
import Footer from '../../_components/footer';
import FirstSection from './section/FirstSection';
import SecondSection from './section/SecondSection';
import ThirdSection from './section/ThirdSection';
import FourthSection from './section/FourthSection';
import FiveSection from './section/FiveSection';
//import SixSection from './section/SixSection';
import SevenSection from './section/SevenSection';
//import EightSection from './section/EightSection';
import NineSection from './section/NineSection';
//import TenSection from './section/TenSection';
import ElevenSection from './section/ElevenSection';
//import TwellSection from './section/TwellSection';
import ThirteenSection from './section/ThirteenSection';
import FourteenSection from './section/FourteenSection';
import HomeNavbar from '../../_components/homnavbar';
import AgentNavbar from '../../_components/agentnavbar';
import ScrollTo from "react-scroll-into-view";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      collapse1: true,  collapse2: true,  collapse3: true,
      collapse4: true,  collapse5: true,  collapse6: true,
      collapse7: true,  collapse8: true,  collapse9: true,
      collapse10: true, collapse11: true, collapse12:true, collapse13:true,
     };
  }

  
  showSecondSection(){
    this.setState({ collapse1: true });
    document.getElementById('SecondSection').scrollIntoView();
    //window.scrollBy(0,400);
  }
  showThirdSection() {
    this.setState({ collapse2: true });
    document.getElementById('ThirdSection').scrollIntoView();
    //window.scrollBy(0,500);
  }
  showFourthSection() {
    this.setState({ collapse3: true });
   // window.scrollBy(0,500); 
   document.getElementById('FourthSection').scrollIntoView();
  }
  showFiveSection() {
    this.setState({ collapse4: true });
    //window.scrollBy(0,500);
    document.getElementById('FiveSection').scrollIntoView();
  }
  // showSixSection() {
  //   this.setState({ collapse5: true });
  //   window.scrollBy(0,500);
  // }
  showSevenSection() {
    this.setState({ collapse6: true });
    //window.scrollBy(0,500);
    document.getElementById('SevenSection').scrollIntoView();
  }
  // showEightSection() {
  //   this.setState({ collapse7: true });
  //   window.scrollBy(0,500);
  // }
  showNineSection() {
    this.setState({ collapse8: true });
    //window.scrollBy(0,500);
    document.getElementById('NineSection').scrollIntoView();
  }
  // showTenSection() {
  //   this.setState({ collapse9: true });
  //   window.scrollBy(0,500);
  // }
  showElevenSection() {
    this.setState({ collapse4: true });
    //window.scrollBy(0,500);
    document.getElementById('ElevenSection').scrollIntoView();
  }
  // showTwellSection() {
  //   this.setState({ collapse11: !this.state.collapse11 });
  //   window.scrollBy(0,500);
  // }

  showThirteenSection() {
    this.setState({ collapse4: true });
    //window.scrollBy(0,500);
    document.getElementById('ThirteenSection').scrollIntoView();
  }
  showFourteenSection() {
    this.setState({ collapse4: true });
    //window.scrollBy(0,500);
    document.getElementById('FourteenSection').scrollIntoView();
  }
  
  
   render() {
    var getRole = localStorage.getItem('Role');
    console.log(getRole, "getrole");
    
    let navbarcheck;
if (getRole==="Agent") {
  navbarcheck = <AgentNavbar/>;
} else {
  navbarcheck =<HomeNavbar />;
}
      return (
          <React.Fragment>
            {navbarcheck}
              
              <div>
              <FirstSection onSecondSectionClick={this.showSecondSection.bind(this)}/>
              <Collapse isOpen={this.state.collapse1}>
                <div id="SecondSection">
                <SecondSection onThirdSectionClick={this.showThirdSection.bind(this)}/>
                </div>
               </Collapse>
               <Collapse isOpen={this.state.collapse2}>
               <div id="ThirdSection">
              <ThirdSection onFourthSectionClick={this.showFourthSection.bind(this)}/>
              </div>
             </Collapse>
             <Collapse isOpen={this.state.collapse3}>
             <div id="FourthSection">
              <FourthSection onFiveSectionClick={this.showFiveSection.bind(this)}/>
              </div>
             </Collapse>
             <Collapse isOpen={this.state.collapse4}>
             <div id="FiveSection">
              <FiveSection onSevenSectionClick={this.showSevenSection.bind(this)}/>
              </div>
             </Collapse>
             {/* <Collapse isOpen={this.state.collapse5}>
              <SixSection onSevenSectionClick={this.showSevenSection.bind(this)}/>
             </Collapse> */}
             <Collapse isOpen={this.state.collapse6}>
             <div id="SevenSection">
              <SevenSection onNineSectionClick={this.showNineSection.bind(this)}/>
              </div>
             </Collapse>
             {/* <Collapse isOpen={this.state.collapse7}>
              <EightSection onNineSectionClick={this.showNineSection.bind(this)}/>
             </Collapse> */}
             <Collapse isOpen={this.state.collapse8}>
             <div id="NineSection">
              <NineSection onElevenSectionClick={this.showElevenSection.bind(this)}/>
              </div>
             </Collapse>
            {/* <Collapse isOpen={this.state.collapse9}>
              <TenSection onElevenSectionClick={this.showElevenSection.bind(this)}/>
             </Collapse> */}
             <Collapse isOpen={this.state.collapse10}>
             <div id="ElevenSection">
              <ElevenSection onThirteenSectionClick={this.showThirteenSection.bind(this)}/>
              </div>
             </Collapse>
             {/* <Collapse isOpen={this.state.collapse11}>
              <TwellSection onThirteenSectionClick={this.showThirteenSection.bind(this)}/>
             </Collapse> */}
             <Collapse isOpen={this.state.collapse12}>
             <div id="ThirteenSection">
              <ThirteenSection onFourteenSectionClick={this.showFourteenSection.bind(this)}/>
              </div>
             </Collapse>
              <Collapse isOpen={this.state.collapse13}>
              <div id="FourteenSection">
              <FourteenSection />
              </div>
             </Collapse> 
           
              <Footer/>
              </div>
            </React.Fragment>
      );
   }
}
  
// Home.propTypes = {
//       classes: PropTypes.object.isRequired,
// };
    
  
function mapStateToProps(state) {
    return state;
}


const connectedHomePage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})((Home)));

export { connectedHomePage as Home };
  