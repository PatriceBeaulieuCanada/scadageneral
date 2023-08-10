import {useRef} from 'react';
import { SidebarComponent,TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import TreeView from './TreeView/TreeView';
import TestView from './Views/TestView';
import './App.css';

function App() {

  let sidebarObj: SidebarComponent;
   
  function onCreate(): void {
      sidebarObj.element.style.visibility='';
  }

  let sidebarobj:any = useRef<SidebarComponent>(null);

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
  //console.log(args.nodeData.id)
  //window.location.pathname = "/test2view"
}

  return (
    <div className="control-section">
      <div id="wrapper">
        <SidebarComponent ref={sidebarobj} id="sideTree" className="sidebar-treeview"
            enableDock={true} dockSize="50px" width="220px" position='Left' target={'.content'}>
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

         <div id="maincontent" className="content">
                     <div>
                     <Router>
                          <Routes>
                          <Route path="/" element={<TestView/>}/>
                          {/* <Route path="/test2View" element={<Test2View/>}/> */}
                         </Routes>
                      </Router>
                     </div>
                 </div>
          </div>
      </div>
  );
}  
    
export default App;