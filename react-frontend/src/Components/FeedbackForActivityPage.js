import React, {Component} from 'react'
import FeedbackStore from "../Stores/FeedbackStore"
import FeedbackList from "../Containers/FeedbackList"
import PieChart from 'react-minimal-pie-chart'
import HeaderFeedbackForActivity from "../Containers/HeaderFeedbackForActivity";
import '../Style/labels.css';

class FeedbackForActivityPage extends Component {
    constructor(props) 
    {
        super(props);
        this.state = {
            idActivityFeedback: 0,
            specificFeedbacksActivity: [],
            smileyCount: 0,
            frownyCount: 0,
            surprisedCount: 0,
            confusedCount: 0
        };
        
        this.storeFeedback = new FeedbackStore();
        this.state.idActivityFeedback = this.props.match.params.activity_id;
    }
    
    componentDidMount() 
    {
        this.storeFeedback.getSpecificFeedbackForActivity(this.state.idActivityFeedback)
        this.storeFeedback.emitter.addListener('GET_SPECIFIC_FEEDBACK_SUCCES', () => {
            this.setState({
                specificFeedbacksActivity: this.storeFeedback.specificFeedbacksActivity,
                smileyCount : this.storeFeedback.smileyCount,
                frownyCount : this.storeFeedback.frownyCount,
                surprisedCount : this.storeFeedback.surprisedCount,
                confusedCount : this.storeFeedback.confusedCount
            })
        });
    }
     render() 
     {
        return (
            <div>
                <HeaderFeedbackForActivity idActivityFeedback={this.state.idActivityFeedback}/>
                  <ul className='legend-labels'>
                    <li><span className="surprised_face"></span>Surprins</li>
                    <li><span className="confused_face"></span>Confuz</li>
                    <li><span className="smiley_face"></span>Fericit</li>
                    <li><span className="frowny_face"></span>Trist</li>
                  </ul>
                <PieChart 
                          data={[
                            { title: 'Surprins', value: this.state.surprisedCount, color: '#A52A2A' },
                            { title: 'Confuz', value: this.state.confusedCount, color: '#FFD700' },
                            { title: 'Fericit', value: this.state.smileyCount, color: '#00FF7F' },
                            { title: 'Trist', value: this.state.frownyCount, color: '#6A5ACD' },
                            ]}
                            label
                            labelPosition={50}
                            labelStyle={{
                                fill: '#121212',
                                fontFamily: 'comic-sans',
                                fontSize: '26px'
                              }}
                                
                          style={{
                            height: '450px',
                            padding: '10px'
                          }}
                          viewBoxSize={[
                            450,
                            450
                          ]}
                    />
                        <FeedbackList  specificFeedbacksActivity={this.state.specificFeedbacksActivity}/>
            </div>        
            )
     }
}

export default FeedbackForActivityPage;