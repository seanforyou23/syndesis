import React from 'react';
import { Link, Route } from 'react-router-dom';
// import { Alert } from 'patternfly-react';
import '../scss/app.scss';

// import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
// import { ApicurioLoader } from './vendor/apicurio/apicurio-loader';
// import { BlockCopyLoader } from './vendor/pfng/block-copy-loader';
import { Header } from './page-structural/header/header';
import { Sidebar } from './page-structural/sidebar/sidebar';
import { Main } from './page-structural/main/main';

export interface Props {
  name: string;
}

// const borderStyles = {
//   border: '1px solid black'
// };

// export function App({name}: Props) {

//   return (
//     <div className="container">
//       <h1 className="text-center">App.tsx Component for: {name}</h1>
//       <div className="row">
//         <div className="col-xs-6" style={borderStyles}>
//           <h2>Section 1: Import Component from PF-React</h2>
//           <Alert>I am an Alert imported from PF-React</Alert>
//         </div>
//         <div className="col-xs-6" style={borderStyles}>
//           <h2>Section 2: Import Apicurio as WC</h2>
//           <ApicurioLoader api="fooapi" embedded />
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-xs-6" style={borderStyles}>
//           <h2>Section 3: Import CopyClipboard from PFNG</h2>
//           <BlockCopyLoader value="copyValue example" />
//         </div>
//         <div className="col-xs-6" style={borderStyles}>
//           <h2>Section 4: Raw PF4 Markup</h2>
//           {/* <div className="pf-c-background-image" /> */}
//           {/* https://pf-next.com/components/Button/examples/ */}
//           <button className="pf-c-button pf-m-primary">
//             Primary
//           </button>
//         </div>
//       </div>

//     </div>
//   );
// }


{/* <Route path="/dashboard" component={ApicurioLoader}/> */}

export function App({name}: Props) {
  return (
    <div>
      <div className="pf-l-page" id="page">
        <Header />
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
