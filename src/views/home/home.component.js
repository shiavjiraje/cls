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
    this.setState({ collapse1: !this.state.collapse1 });
    window.scrollBy(0,400);
  }
  showThirdSection() {
    this.setState({ collapse2: !this.state.collapse2 });
    window.scrollBy(0,500);
  }
  showFourthSection() {
    this.setState({ collapse3: !this.state.collapse3 });
    window.scrollBy(0,500);
  }
  showFiveSection() {
    this.setState({ collapse4: !this.state.collapse4 });
    window.scrollBy(0,500);
  }
  showSixSection() {
    this.setState({ collapse5: !this.state.collapse5 });
    window.scrollBy(0,500);
  }
  showSevenSection() {
    this.setState({ collapse6: !this.state.collapse6 });
    window.scrollBy(0,500);
  }
  showEightSection() {
    this.setState({ collapse7: !this.state.collapse7 });
    window.scrollBy(0,500);
  }
  showNineSection() {
    this.setState({ collapse8: !this.state.collapse8 });
    window.scrollBy(0,500);
  }
  showTenSection() {
    this.setState({ collapse9: !this.state.collapse9 });
    window.scrollBy(0,500);
  }
  showElevenSection() {
    this.setState({ collapse10: !this.state.collapse10 });
    window.scrollBy(0,500);
  }
  showTwellSection() {
    this.setState({ collapse11: !this.state.collapse11 });
    window.scrollBy(0,500);
  }

  showThirteenSection() {
    this.setState({ collapse12: !this.state.collapse12 });
    window.scrollBy(0,500);
  }
  showFourteenSection() {
    this.setState({ collapse13: !this.state.collapse13 });
    window.scrollBy(0,500);
  }
  
  
   render() {
      return (
          <React.Fragment>
              <HomeNavbar />
              <div style={{height:"12730px"}}>
              <FirstSection onSecondSectionClick={this.showSecondSection.bind(this)}/>
              <Collapse isOpen={this.state.collapse1}>
                <SecondSection onThirdSectionClick={this.showThirdSection.bind(this)}/>
               </Collapse>
               <Collapse isOpen={this.state.collapse2}>
              <ThirdSection onFourthSectionClick={this.showFourthSection.bind(this)}/>
             </Collapse>
             <Collapse isOpen={this.state.collapse3}>
              <FourthSection onFiveSectionClick={this.showFiveSection.bind(this)}/>
             </Collapse>
             <Collapse isOpen={this.state.collapse4}>
              <FiveSection onSevenSectionClick={this.showSevenSection.bind(this)}/>
             </Collapse>
             {/* <Collapse isOpen={this.state.collapse5}>
              <SixSection onSevenSectionClick={this.showSevenSection.bind(this)}/>
             </Collapse> */}
             <Collapse isOpen={this.state.collapse6}>
              <SevenSection onNineSectionClick={this.showNineSection.bind(this)}/>
             </Collapse>
             {/* <Collapse isOpen={this.state.collapse7}>
              <EightSection onNineSectionClick={this.showNineSection.bind(this)}/>
             </Collapse> */}
             <Collapse isOpen={this.state.collapse8}>
              <NineSection onElevenSectionClick={this.showElevenSection.bind(this)}/>
             </Collapse>
            {/* <Collapse isOpen={this.state.collapse9}>
              <TenSection onElevenSectionClick={this.showElevenSection.bind(this)}/>
             </Collapse> */}
             <Collapse isOpen={this.state.collapse10}>
              <ElevenSection onThirteenSectionClick={this.showThirteenSection.bind(this)}/>
             </Collapse>
             {/* <Collapse isOpen={this.state.collapse11}>
              <TwellSection onThirteenSectionClick={this.showThirteenSection.bind(this)}/>
             </Collapse> */}
             <Collapse isOpen={this.state.collapse12}>
              <ThirteenSection onFourteenSectionClick={this.showFourteenSection.bind(this)}/>
             </Collapse>
              <Collapse isOpen={this.state.collapse13}>
              <FourteenSection />
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
  