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
            { nodeId: '04-01', nodeText: "Reservoir latex", iconCss: 'icon-circle-thin icon' },
            { nodeId: '04-02', nodeText: "Raison d'arrêt four", iconCss: 'icon-circle-thin icon' },
            { nodeId: '04-03', nodeText: "Hist. d'arrêt table", iconCss: 'icon-circle-thin icon' },
            { nodeId: '04-04', nodeText: "Consommation latex", iconCss: 'icon-circle-thin icon' },
            { nodeId: '04-05', nodeText: "Stat. finition", iconCss: 'icon-circle-thin icon' },
            { nodeId: '04-06', nodeText: "Stat. tables", iconCss: 'icon-circle-thin icon' },
            { nodeId: '04-07', nodeText: "Rejets", iconCss: 'icon-circle-thin icon' },
            { nodeId: '04-08', nodeText: "Dashboard rejet", iconCss: 'icon-circle-thin icon' }
        ]
    },
    {
        nodeId: '05', nodeText: 'Stat. touffetage', iconCss: 'icon-code icon',
        nodeChild: [
            { nodeId: '05-01', nodeText: "État touffeteur", iconCss: 'icon-circle-thin icon' },
            { nodeId: '05-02', nodeText: "Maintenance touffeteur", iconCss: 'icon-circle-thin icon' },
            { nodeId: '05-03', nodeText: "Hist. arrêt touffeteur", iconCss: 'icon-circle-thin icon' },
        ]
    },
    {
        nodeId: '06', nodeText: 'Stat. beaming', iconCss: 'icon-code icon',
        nodeChild: [
            { nodeId: '06-01', nodeText: "État beamer", iconCss: 'icon-circle-thin icon' },
            { nodeId: '06-02', nodeText: "Stat. beaming", iconCss: 'icon-circle-thin icon' },
        ]
    },
    {
        nodeId: '07', nodeText: 'Distribution', iconCss: 'icon-code icon',
        nodeChild: [
            { nodeId: '07-01', nodeText:  "Hist. arrêt table", iconCss: 'icon-circle-thin icon' },
            { nodeId: '07-02', nodeText: "Hist. arrêt touffeteur", iconCss: 'icon-circle-thin icon' },
            { nodeId: '07-03', nodeText: "Statistique chariot tapis", iconCss: 'icon-circle-thin icon' },
            { nodeId: '07-04', nodeText: "Statistique chariot bois", iconCss: 'icon-circle-thin icon' },
            { nodeId: '07-05', nodeText: "Gestion convoyeur", iconCss: 'icon-circle-thin icon' },
            
        ]
    },
    {
        nodeId: '08', nodeText: 'Chauffage', iconCss: 'icon-code icon',
        nodeChild: [
            { nodeId: '08-01', nodeText: "Chauffage", iconCss: 'icon-circle-thin icon' },
            { nodeId: '08-02', nodeText: "Chaleur SST", iconCss: 'icon-circle-thin icon' },
        ]
    },
    {
        nodeId: '09', nodeText: "Énergie", iconCss: 'icon-code icon',
        nodeChild: [
            { nodeId: '09-01', nodeText: "Historique", iconCss: 'icon-circle-thin icon' },
            { nodeId: '09-02', nodeText: "Rapport fin de mois", iconCss: 'icon-circle-thin icon' },
        ]
    },
    {
        nodeId: '10', nodeText: 'Gestion des alarmes', iconCss: 'icon-docs icon',
    },
    {
        nodeId: '11', nodeText: 'Usagers', iconCss: 'icon-docs icon',
    },
    
];

export default TreeView