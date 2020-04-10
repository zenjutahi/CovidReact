import React from 'react';
import './assets/main.css';
import Header from './components/header/header.component';
import Global from './components/global/global.component';
import Directory from './components/directory/directory.component';
import './App.css';

function App() {

  return (
    <div className="App">
        <Header />
        <div className="page-container">

            <div className="page-content">


                <div className="page-content-wrap">

                    <div className="row">
                        <div className="col-md-12">

                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title"><span class="fa fa-bar-chart-o"></span> COVID TRACKER <small> Keep yourself Updated</small></h3>
                                </div>
                                <div className="panel-body">
                                <Global />
                                <Directory />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
