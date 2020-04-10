import React from "react";

const SearchBox = ({ placeholder, handleChange }) => (
  <div className="row">
    <div class="col-md-4">
      <div class="panel panel-default">
          <div class="panel-body panel-body-search">
              <div class="input-group">
                  <span class="input-group-addon"><span class="fa fa-search"></span></span>
                  <input type="text" class="form-control" onChange={handleChange} placeholder="Search..."/>
              </div>
          </div>
      </div>
    </div>
  </div>
);

export default SearchBox;
