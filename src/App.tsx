import './App.css';
import RouteView from './Routes/RouteView';
import {useRef} from 'react';
import { SidebarComponent,TreeViewComponent,SidebarType } from '@syncfusion/ej2-react-navigations';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import TreeView from './TreeView/TreeView';
import FinitionShipping from './Views/FinitionShipping';
import TufftingBeaming from './Views/TufftingBeaming';
import ChartVariable from './Views/ChartsVariable';
import Alarms from './Views/Alarms';
import Users from './Views/Users';
import ReservoirLatex from './Views/StatFinition/ReservoirLatex';
import RaisonArretFour from './Views/StatFinition/RaisonArretFour';
import HistArretTable from './Views/StatFinition/HistArretTable';
import ConsomationLatex from './Views/StatFinition/ConsomationLatex';
import StatFinition from './Views/StatFinition/StatFinition';
import StatTables from './Views/StatFinition/StatTables';
import Rejets from './Views/StatFinition/Rejets';
import DashboardRejets from './Views/StatFinition/DashboardRejets';
import EtatTouffeteur from './Views/StatTouffetage/EtatTouffeteur';
import MaintenanceTouffeteur from './Views/StatTouffetage/MaintenanceTouffeteur';
import HistArretTouffeteur from './Views/StatTouffetage/HistArretTouffeteur';
import EtatBeamer from './Views/StatBeaming/EtatBeamer';
import StatBeaming from './Views/StatBeaming/StatBeaming';
import StatChariotBois from './Views/Distribution/StatChariotBois';
import StatChariotTapis from './Views/Distribution/StatChariotTapis';
import GestionConvoyeur from './Views/Distribution/GestionConvoyeur';
import Chauffage from './Views/Chauffage/Chauffage';
import ChauffageSST from './Views/Chauffage/ChauffageSST';
import Historique from './Views/Energy/Historique';
import RapportFinMois from './Views/Energy/RapportFinMois';




function App() {

  let sidebarobj:any = useRef<SidebarComponent>(null);
  let type: SidebarType = "Auto";

  //toggle the sidebar
  const toolbarCliked = (): void => {
    sidebarobj.current.toggle();
}

const fields: object = { dataSource: TreeView, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: "iconCss" };

function nodeTemplate(data:any) {
  return (
      <div className='ename'>{data.nodeText}</div>
  );
}

const handleNodeSelected = (args:any) =>{
  RouteView(args.nodeData.id)
}

  return (
    <div className="control-section">
      <div id="wrapper">
          <SidebarComponent ref={sidebarobj} id="sideTree" className="sidebar-treeview" type={type}
              enableDock={true} dockSize="50px" width="220px" position='Left' target={'.mainContent'}>
                  <div>
                    <div>
                      <TreeViewComponent id='mainTree' cssClass="main-treeview" fields={fields} expandOn='Click'
                      nodeSelected={handleNodeSelected} nodeTemplate={nodeTemplate}/>
                    </div>
                  </div>
          </SidebarComponent>
        <div id="head">
          <img className='imgHeader' src='/menu.png' alt='menuIcon' onClick={toolbarCliked}/>
          <label className='lblHeader'>Scada</label>
         </div>

         <div id="maincontent1" className="mainContent">
          
                     <Router>
                        <Routes>
                          <Route path="/finitionshipping" element={<FinitionShipping/>}/>
                          <Route path="/toufftingbeaming" element={<TufftingBeaming/>}/>
                          <Route path="/chartsvariable" element={<ChartVariable/>}/>
                          <Route path="/alarms" element={<Alarms/>}/>
                          <Route path="/reservoirlatex" element={<ReservoirLatex/>}/>
                          <Route path="/raisonarretfour" element={<RaisonArretFour/>}/>
                          <Route path="/histarrettable" element={<HistArretTable/>}/>
                          <Route path="/consomationlatex" element={<ConsomationLatex/>}/>
                          <Route path="/statfinition" element={<StatFinition/>}/>
                          <Route path="/stattables" element={<StatTables/>}/>
                          <Route path="/rejets" element={<Rejets/>}/>
                          <Route path="/dashboardrejets" element={<DashboardRejets/>}/>
                          <Route path="/users" element={<Users/>}/>
                          <Route path="/etattouffeteur" element={<EtatTouffeteur/>}/>
                          <Route path="/maintenancetouffeteur" element={<MaintenanceTouffeteur/>}/>
                          <Route path="/histarrettouffeteur" element={<HistArretTouffeteur/>}/>
                          <Route path="/etatbeamer" element={<EtatBeamer/>}/>
                          <Route path="/statbeaming" element={<StatBeaming/>}/>
                          <Route path="/statchariottapis" element={<StatChariotTapis/>}/>
                          <Route path="/statchariotbois" element={<StatChariotBois/>}/>
                          <Route path="/gestionconvoyeur" element={<GestionConvoyeur/>}/>
                          <Route path="/chauffage" element={<Chauffage/>}/>
                          <Route path="/chauffagesst" element={<ChauffageSST/>}/>
                          <Route path="/historique" element={<Historique/>}/>
                          <Route path="/rapportfinmois" element={<RapportFinMois/>}/>
                        </Routes>
                      </Router>
                    
                 </div>
          </div>
      </div>
  );
}  
    
export default App;