const TreeView: { [key: string]: Object }[] = [
    {
        nodeId: '01', nodeText: 'Finition / expédition', iconCss: 'icon-microchip icon',
    },
    {
        nodeId: '02', nodeText: 'Touffetage / Beaming', iconCss: 'icon-thumbs-up-alt icon',
    },
    {
        nodeId: '03', nodeText: 'Graphique variables', iconCss: 'icon-docs icon',
    },
    {
        nodeId: '04', nodeText: 'Stat. finition', iconCss: 'icon-code icon',
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
        nodeId: '05', nodeText: 'Stat. touffetage', iconCss: 'icon-code icon',
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
        nodeId: '06', nodeText: 'Stat. beaming', iconCss: 'icon-code icon',
        nodeChild: [
            { nodeId: '06-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
            { nodeId: '06-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
            { nodeId: '06-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
            { nodeId: '06-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
            { nodeId: '06-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
            { nodeId: '06-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
        ]
    },
    {
        nodeId: '06', nodeText: 'Stat. expédition', iconCss: 'icon-code icon',
        nodeChild: [
            { nodeId: '07-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
            { nodeId: '07-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
            { nodeId: '07-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
            { nodeId: '76-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
            { nodeId: '07-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
            { nodeId: '07-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
        ]
    },
    
];

export default TreeView