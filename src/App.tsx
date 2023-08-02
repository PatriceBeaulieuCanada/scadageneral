import { useEffect, useRef, useState } from 'react';
import { ListViewComponent} from '@syncfusion/ej2-react-lists';
import { SidebarComponent,TreeViewComponent, TreeView, Sidebar } from '@syncfusion/ej2-react-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';

function App() {
  
  let dockBar:any=useRef() ;
  let treeviewobj:any = useRef()
     
    const toggleClickMenu=(event:any)=>{
     dockBar.toggle()
     treeviewobj.collapseAll();         
    }
      const toggleClickPrincipale=()=>{
        window.location.pathname = "/"
      }

      const toggleClickInfo=()=>{
        window.location.pathname = "/historique"    
      }
      
      const toggleClickGraph=()=>{
        window.location.pathname = "/graphview"    
      }

      const handleClickTreeView = (args:any) =>{
        
        console.log("aaaaa",args.nodeData.text)

      }
      
      const hierarchicalData = [
        {
            id: '01', name: 'Local Disk (C:)', expanded: true,iconCss :'icon-user icon',
            subChild: [
                {
                    id: '01-01', name: 'Program Files'                   
                },
                {
                    id: '01-02', name: 'Users'                   
                },
                {
                    id: '01-03', name: 'Windows'                    
                },
            ]
        },
        {
            id: '02', name: 'Local Disk (D:)',iconCss :'icon-user icon',
            subChild: [
                {
                    id: '02-01', name: 'Personals',
                    subChild: [
                        { id: '02-01-01', name: 'My photo.png'},
                        { id: '02-01-02', name: 'Rental document.docx' },
                        { id: '02-01-03', name: 'Pay slip.pdf' },
                    ]
                },
                {
                    id: '02-02', name: 'Projects',
                    subChild: [
                        { id: '02-02-01', name: 'ASP Application' },
                        { id: '02-02-02', name: 'TypeScript Application' },
                        { id: '02-02-03', name: 'React Application' },
                    ]
                },
                {
                    id: '02-03', name: 'Office',
                    subChild: [
                        { id: '02-03-01', name: 'Work details.docx' },
                        { id: '02-03-02', name: 'Weekly report.docx' },
                        { id: '02-03-03', name: 'Wish list.csv' },
                    ]
                },
            ]
        },
        {
            id: '03', name: 'Local Disk (E:)', icon: 'folder',
            subChild: [
                {
                    id: '03-01', name: 'Pictures',
                    subChild: [
                        { id: '03-01-01', name: 'Wind.jpg' },
                        { id: '03-01-02', name: 'Stone.jpg' },
                        { id: '03-01-03', name: 'Home.jpg' },
                    ]
                },
                {
                    id: '03-02', name: 'Documents',
                    subChild: [
                        { id: '03-02-01', name: 'Environment Pollution.docx' },
                        { id: '03-02-02', name: 'Global Warming.ppt' },
                        { id: '03-02-03', name: 'Social Network.pdf' },
                    ]
                },
                {
                    id: '03-03', name: 'Study Materials',
                    subChild: [
                        { id: '03-03-01', name: 'UI-Guide.pdf' },
                        { id: '03-03-02', name: 'Tutorials.zip' },
                        { id: '03-03-03', name: 'TypeScript.7z' },
                    ]
                },
            ]
        }
    ];

    const fields: Object = { dataSource: hierarchicalData, id: 'id', text: 'name', child: 'subChild' };
    let cssClass = "customTreeview"

    function nodeTemplate(data:any) {
      return (
      <div>
      {/* <img className='eimage' src={`./../template-cs1/${data.eimg}.png`} alt='${data.eimg}'/> */}
      <div className='ename'>{data.name}</div>
      {/* <div className='ejob'>salut</div> */}
    </div>
    );
  }


  return (
    <div className="app">
      <SidebarComponent id="dockSidebar" ref={Sidebar=> dockBar=Sidebar} enableDock={true} dockSize="60px" width="220px" position='Left'>
                         <div className="dock">
                            <ul>
                                <li className="sidebar-item" onClick={toggleClickMenu}>
                                  <span className="e-icons expand"/>
                                  <span className="e-text" title="menu">Menu</span>
                              </li>
                            </ul>
                            <TreeViewComponent fields={fields} ref={Treeview => treeviewobj = Treeview} nodeSelected={handleClickTreeView}
                            cssClass={cssClass} nodeTemplate={nodeTemplate}/>
                        </div>
                    </SidebarComponent>
        
        <Router>
          <Routes>
            {/* <Route path="/" element={<Main/>}/> */}
            
          </Routes>      
        </Router>   
    </div>
  );
}  
    
export default App;