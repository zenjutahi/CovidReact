import React from 'react';

import styled from "styled-components";
import Moment from 'react-moment';

class Global extends React.Component {
  constructor(){
    super();

    this.state = {
      globalData : [],
    };
  }

  UNSAFE_componentWillMount() {
    fetch('https://corona.lmao.ninja/all')
    .then(response => response.json())
    .then(res => this.setState({ globalData: res}))
  }

  render() {

    const Newstyles = styled.div`
          display: flex;
          padding: 10px;
          justify-content: space-between;

      `;

    const DailyDiv = styled.div`
      font-size: 12px;
      text-transform: none;

        `;

    const Gstyles = styled.span`
      font-size: 12px;
      text-transform: none;
        `;


    return (
      <div className="row">

      <div class="col-md-3">

          <div class="widget widget-success widget-item-icon">
              <div class="widget-item-left">
                  <span class="fa fa-globe"></span>
              </div>
              <div class="widget-data">
                  <div class="widget-int num-count"><h4>{this.state.globalData.cases} Cases Globally</h4></div>
                  <div class="widget-title"><span class="label label-danger">{this.state.globalData.deaths}</span> <Gstyles>Deaths</Gstyles></div>
                  <div class="widget-title"><span class="label label-success">{this.state.globalData.recovered}</span> <Gstyles>Recoveries</Gstyles></div>
                  <div class="widget-title"><span class="label label-warning">{this.state.globalData.critical}</span> <Gstyles>Critical Condition</Gstyles></div>
                  <div class="widget-title"><span class="label label-default">{this.state.globalData.tests}</span> <Gstyles>Individuals Tested</Gstyles></div>
                  <div class="widget-big-int plugin-clock"><Moment>Data as of{this.state.globalData.updated}</Moment></div>
                  {/* <div class="widget-title"><span class="label label-warning">{this.state.globalData.affectedCountries} </span><Gstyles> Affected Countries</Gstyles></div> */}
                  {/* <div class="widget-subtitle">So far <span class="label label-default">{this.state.globalData.affectedCountries}</span> Countries have been impacted</div> */}
              </div>
          </div>

          </div>

          <div class="col-md-3">
              <div class="widget widget-primary widget-item-icon">
                  <div class="widget-item-left">
                    <span class="fa fa-bar-chart-o"></span>
                  </div>
                  <div class="widget-data">
                      <div class="widget-int num-count"><h4>Daily Global Data</h4></div>
                      <div class="widget-title"><span class="label label-primary">{this.state.globalData.affectedCountries}</span> <Gstyles>Countries affected</Gstyles></div>
                      <div class="widget-title"><span class="label label-warning">{this.state.globalData.todayCases}</span> <Gstyles>Infections reported</Gstyles></div>
                      <div class="widget-title"><span class="label label-danger">{this.state.globalData.todayDeaths}</span> <Gstyles>Deaths reported</Gstyles></div>
                      <div class="widget-big-int plugin-clock"><Moment>{this.state.globalData.updated}</Moment></div>
                      {/* <div class="widget-subtitle">{this.state.globalData.casesPerOneMillion} <Gstyles>Cases per Million</Gstyles></div>
                      <div class="widget-subtitle">{this.state.globalData.deathsPerOneMillion} <Gstyles>Deaths per Million</Gstyles></div> */}
                  </div>
              </div>


          </div>
          <div class="col-md-6">
          <div class="panel panel-default">
              <div class="panel-body">
                  <h4><span class="fa fa-tags"></span> Key Points To Note</h4>
                  <div class="user">
                  </div>
              </div>
              <Newstyles>
              <ul class="list-tags">
                  <li><a href="#"><span class="fa fa-tag"></span> Stay Indoors</a></li>
                  <li><a href="#"><span class="fa fa-tag"></span> Social Distance</a></li>
                  <li><a href="#"><span class="fa fa-tag"></span> Clean Habits</a></li>
                  <li><a href="#"><span class="fa fa-tag"></span> Respiratory Hygiene</a></li>
              </ul>
              </Newstyles>
          </div>
          </div>
      </div>
    )}
}

export default Global;
