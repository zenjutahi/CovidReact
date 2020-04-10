import React from 'react';
import styled from "styled-components";

const Flagstyles = styled.img`
    height: 20px;
    width: 22px;
    border-radius: 5px;
`;

const Infotd = styled.td`
    display: flex;
    justify-content: end;
`;

const Infospan = styled.p`
    padding-right: 20px;
`;

const CollectionItem = ({countryInfo,deathsPerOneMillion,testsPerOneMillion, tests,active, todayDeaths, casesPerOneMillion, recovered, deaths,critical, todayCases, cases, country}) => (
    <div className="col-md-3">
      <div className="widget widget-default widget-item-icon">
          <div className="widget-item-left">
            <div class="widget widget-danger widget-padding-sm">
                <div class="widget-big-int plugin-clock">Cases {cases}</div>
                    <div class="widget-subtitle plugin-date">Active: {active}</div>
            </div>
          </div>
          <div class="widget-data">
              <div className="widget-title">{country}</div>
                <div className="widget-subtitle">{tests} Individuals tested</div>
                <div className="widget-subtitle">{testsPerOneMillion} Individuals tested Per Million</div>
                    <div class="panel-body panel-body-table">

                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <tbody>
                                    <tr>
                                        <Infotd><Infospan><span class="label label-info">{cases}</span><strong> total cases reported</strong></Infospan></Infotd>
                                    </tr>
                                    <tr>
                                        <Infotd><Infospan><span class="label label-danger">{deaths}</span><strong> total patients dead</strong></Infospan></Infotd>
                                    </tr>
                                    <tr>
                                        <Infotd><Infospan><span class="label label-success">{recovered}</span><strong> total recovered</strong></Infospan></Infotd>
                                    </tr>
                                    <tr>
                                        <Infotd><Infospan><span class="label label-warning">{critical}</span><strong> patients in critial condition</strong></Infospan></Infotd>
                                    </tr>
                                    <tr>
                                        <Infotd><Infospan><span class="label label-warning">{todayCases}</span><strong> new case<small>(s)</small> today</strong></Infospan></Infotd>
                                    </tr>
                                    <tr>
                                        <Infotd><Infospan><span class="label label-danger">{todayDeaths}</span><strong> patients who died today</strong></Infospan></Infotd>
                                    </tr>
                                    <tr>
                                        <Infotd><Infospan><span class="label label-warning">{casesPerOneMillion}</span><strong> cases per one million</strong></Infospan></Infotd>
                                    </tr>
                                    <tr>
                                        <Infotd><Infospan><span class="label label-danger">{deathsPerOneMillion}</span><strong> deaths per one million</strong></Infospan></Infotd>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
          </div>
          <div className="widget-controls">
              <a href="#" className="widget-control-right" data-toggle="tooltip" data-placement="top" title="Remove Widget">
                      <Flagstyles src={countryInfo.flag}/>
            </a>
          </div>
      </div>

  </div>
)







export default CollectionItem;
