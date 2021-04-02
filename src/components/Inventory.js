import React from "react";
import Display from "./Display";

import Data from "./data.json";

function Inventory() {
  const data = Data.map((pos) => {
    return (
      <Display
        id={pos.ID}
        make={pos.Make}
        model={pos.Model}
        year={pos.Year}
        price={pos.Price}
        mileage={pos.Mileage}
        extcolor={pos.ExteriorColor}
        intcolor={pos.InteriorColor}
      />
    );
  });

  return (
    <div>
      {/* <Display /> */}
      {data}
    </div>
  );
}

export default Inventory;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import NavBar from "./NavBar";
// import Filter from "./Filter";
// import Display from "./Display";

// import Data from "./data.json";
// import VehicleCSV from "./vehicle.csv";
// import CSVReader from "react-csv-reader";

// function Inventory() {
//   return (
//     <div>
//       <NavBar />
//       <Filter />
//       <CSVReader onFileLoaded={(data, VehicleCSV) => console.dir(data, VehicleCSV)} />
//     </div>
//   );
// }

// export default Inventory;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import Papa from "papaparse";
// import VehicleCSV from "./vehicle.csv";
// import csvToJson from "convert-csv-to-json";

// class Inventory extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [],
//     };

//     this.getData = this.getData.bind(this);
//   }

//   componentWillMount() {
//     this.getCsvData();
//   }

//   fetchCsv() {
//     return fetch(VehicleCSV).then(function (response) {
//       let reader = response.body.getReader();
//       let decoder = new TextDecoder("utf-8");

//       return reader.read().then(function (result) {
//         return decoder.decode(result.value);
//       });
//     });
//   }

//   getData(result) {
//     this.setState({ data: result.data });
//   }

//   async getCsvData() {
//     let csvData = await this.fetchCsv();

//     Papa.parse(csvData, {
//       complete: this.getData,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.data}</h1>
//       </div>
//     );
//   }
// }

// export default Inventory;
