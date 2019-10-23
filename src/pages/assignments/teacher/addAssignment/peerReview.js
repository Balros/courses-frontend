import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import RichTextEditor from "react-rte";

export default class PeerReview extends Component {
  constructor(props){
    super(props);
    this.state={
      description: RichTextEditor.createValueFromString("", "html"),
      input1:'Custom input',
      input2:'Custom input 2',
      disabled:false,
      improvedSubmission:true
    }
  }

  render(){
    return(
      <div>
        <h3>Peer review</h3>
        <div>
          <FormGroup check>
          <Label check>
            <Input type="checkbox" id="checkbox2" checked={this.state.disabled} onChange={()=>this.setState({disabled:!this.state.disabled})} /> {' '}
            Disabled
          </Label>
        </FormGroup>
        <FormGroup check>
        <Label check>
          <Input type="checkbox" id="checkbox2" disabled={this.state.disabled}/> {' '}
          Anonymný submission
        </Label>
      </FormGroup>
        <hr/>
        <FormGroup>
          <Label>Open time</Label>
          <Input type="datetime-local" disabled={this.state.disabled}/>
        </FormGroup>
        <FormGroup>
          <Label>Deadline</Label>
          <Input type="datetime-local" disabled={this.state.disabled}/>
        </FormGroup>
        <FormGroup>
          <Label>Extra time (in minutes)</Label>
          <Input type="number" disabled={this.state.disabled}/>
        </FormGroup>
        <hr/>
        <FormGroup check>
        <Label check>
          <Input type="checkbox" id="checkbox2" checked={this.state.improvedSubmission} onChange={()=>this.setState({improvedSubmission:!this.state.improvedSubmission})} disabled={this.state.disabled}/> {' '}
          Improved submission
        </Label>
      </FormGroup>

    {
      this.state.improvedSubmission &&
      <div>
        <hr/>
        <FormGroup>
          <Label>Open time</Label>
          <Input type="datetime-local" disabled={this.state.disabled}/>
        </FormGroup>
        <FormGroup>
          <Label>Deadline</Label>
          <Input type="datetime-local" disabled={this.state.disabled}/>
        </FormGroup>
        <FormGroup>
          <Label>Extra time (in minutes)</Label>
          <Input type="number" disabled={this.state.disabled}/>
        </FormGroup>
        <hr/>
      </div>
    }
        </div>

      </div>
    )
  }
}
