import React, { Component } from 'react';
import { connect } from 'react-redux';  
import { withRouter } from 'react-router-dom';
import Navigation from '../../_components/navbar'; 
import { Collapse } from 'reactstrap';
import Footer from '../../_components/footer';
import FirstSection from './section/FirstSection';
import SecondSection from './section/SecondSection';
import ThirdSection from './section/ThirdSection';
import FourthSection from './section/FourthSection';
import FiveSection from './section/FiveSection';
import SixSection from './section/SixSection';
import SevenSection from './section/SevenSection';
import EightSection from './section/EightSection';
import NineSection from './section/NineSection';
import TenSection from './section/TenSection';
import ElevenSection from './section/ElevenSection';
import TwellSection from './section/TwellSection';
import ThirteenSection from './section/ThirteenSection';
import FourteenSection from './section/FourteenSection';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      collapse1: false,  collapse2: false,  collapse3: false,
      collapse4: false,  collapse5: false,  collapse6: false,
      collapse7: false,  collapse8: false,  collapse9: false,
      collapse10: false, collapse11: false, collapse12:false, collapse13:false,
     };
  }

  
  showSecondSection(){
    this.setState({ collapse1: !this.state.collapse1 });
  }
  showThirdSection() {
    this.setState({ collapse2: !this.state.collapse2 });
  }
  showFourthSection() {
    this.setState({ collapse3: !this.state.collapse3 });
  }
  showFiveSection() {
    this.setState({ collapse4: !this.state.collapse4 });
  }
  showSixSection() {
    this.setState({ collapse5: !this.state.collapse5 });
  }
  showSevenSection() {
    this.setState({ collapse6: !this.state.collapse6 });
  }
  showEightSection() {
    this.setState({ collapse7: !this.state.collapse7 });
  }
  showNineSection() {
    this.setState({ collapse8: !this.state.collapse8 });
  }
  showTenSection() {
    this.setState({ collapse9: !this.state.collapse9 });
  }
  showElevenSection() {
    this.setState({ collapse10: !this.state.collapse10 });
  }
  showTwellSection() {
    this.setState({ collapse11: !this.state.collapse11 });
  }

  showThirteenSection() {
    this.setState({ collapse12: !this.state.collapse12 });
  }
  showFourteenSection() {
    this.setState({ collapse13: !this.state.collapse13 });
  }
  
  
   render() {
      return (
          <React.Fragment>
              <Navigation />
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
              <FiveSection onSixSectionClick={this.showSixSection.bind(this)}/>
             </Collapse>
             <Collapse isOpen={this.state.collapse5}>
              <SixSection onSevenSectionClick={this.showSevenSection.bind(this)}/>
             </Collapse>
             <Collapse isOpen={this.state.collapse6}>
              <SevenSection onEightSectionClick={this.showEightSection.bind(this)}/>
             </Collapse>
             <Collapse isOpen={this.state.collapse7}>
              <EightSection onNineSectionClick={this.showNineSection.bind(this)}/>
             </Collapse>
             <Collapse isOpen={this.state.collapse8}>
              <NineSection onTenSectionClick={this.showTenSection.bind(this)}/>
             </Collapse>
             <Collapse isOpen={this.state.collapse9}>
              <TenSection onElevenSectionClick={this.showElevenSection.bind(this)}/>
             </Collapse>
             <Collapse isOpen={this.state.collapse10}>
              <ElevenSection onTwellSectionClick={this.showTwellSection.bind(this)}/>
             </Collapse>
             <Collapse isOpen={this.state.collapse11}>
              <TwellSection onThirteenSectionClick={this.showThirteenSection.bind(this)}/>
             </Collapse>
             <Collapse isOpen={this.state.collapse12}>
              <ThirteenSection onFourteenSectionClick={this.showFourteenSection.bind(this)}/>
             </Collapse>
             <Collapse isOpen={this.state.collapse13}>
              <FourteenSection />
             </Collapse>
              <Footer/>
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
  