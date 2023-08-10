import {useRef } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { TreeViewComponent, ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './_app.css';


const  _app = () =>{

    let sidebarobj:any = useRef<SidebarComponent>(null);

    let data: { [key: string]: Object }[] = [
        {
            nodeId: '01', nodeText: 'Installation', iconCss: 'icon-microchip icon',
        },
        {
            nodeId: '02', nodeText: 'Deployment', iconCss: 'icon-thumbs-up-alt icon',
        },
        {
            nodeId: '03', nodeText: 'Quick Start', iconCss: 'icon-docs icon',
        },
        {
            nodeId: '04', nodeText: 'Components', iconCss: 'icon-th icon',
            nodeChild: [
                { nodeId: '04-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
            ]
        },
        {
            nodeId: '05', nodeText: 'API Reference', iconCss: 'icon-code icon',
            nodeChild: [
                { nodeId: '05-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
            ]
        },
        {
            nodeId: '06', nodeText: 'Browser Compatibility', iconCss: 'icon-chrome icon'
        },
        {
            nodeId: '07', nodeText: 'Upgrade Packages', iconCss: 'icon-up-hand icon'
        },
        {
            nodeId: '08', nodeText: 'Release Notes', iconCss: 'icon-bookmark-empty icon'
        },
        {
            nodeId: '09', nodeText: 'FAQ', iconCss: 'icon-help-circled icon'
        },
        {
            nodeId: '10', nodeText: 'License', iconCss: 'icon-doc-text icon'
        }
    ];

    const target: string = '.main-sidebar-content';
	const mediaQuery: string = '(min-width: 600px)';
    const fields: object = { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: "iconCss" };

    //let folderEle: string = '<div class= "e-folder"><div class= "e-folder-name">Scada</div></div>';
    let folderEle: string = '<div class= "e-folder"><div class= "e-folder-name">Scada</div></div>';
    
    function nodeTemplate(data:any) {
        return (
            <div className='ename'>{data.nodeText}</div>
        );
    }
    
    
    //toggle the sidebar
    const toolbarCliked = (): void => {
        sidebarobj.current.toggle();
    }

    const handleNodeSelected = (args:any) =>{
        //console.log(args.nodeData.id)
        window.location.pathname = "/test2view"
    }

    return(
        <div className="control-section" id="responsive-wrapper">
            <div>
                <div>
                    <ToolbarComponent  className='titleStyle' clicked={toolbarCliked.bind(this)}>
                        <ItemsDirective>
                            <ItemDirective prefixIcon="e-tbar-menu-icon tb-icons" tooltipText="Menu"></ItemDirective>
                            <ItemDirective template={folderEle}></ItemDirective>
                        </ItemsDirective>
                    </ToolbarComponent>
                </div>
                {/* end of header-section */}
                <SidebarComponent id="sideTree" className="sidebar-treeview" ref={sidebarobj}
                target={target} mediaQuery={mediaQuery} enableDock={true} dockSize="50px" width="220px" position='Left'>
                    <div>
                        <div>
                            <TreeViewComponent id='mainTree' cssClass="main-treeview" fields={fields} expandOn='Click'
                            nodeSelected={handleNodeSelected} nodeTemplate={nodeTemplate}/>
                        </div>
                    </div>
                </SidebarComponent>
                <div className="main-sidebar-content" id="main-text">
                    <div className="sidebar-content">
                    <Router>
                        <Routes>
                            {/* <Route path="/" element={<TestView/>}/>
                            <Route path="/test2View" element={<Test2View/>}/> */}
                        </Routes>      
                    </Router>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default _app