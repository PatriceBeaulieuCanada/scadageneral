const RouteView = (param:any) =>{

    switch(param){

        case "01":
            window.location.pathname = "/finitionshipping"
            break
        case "02":
            window.location.pathname = "/toufftingbeaming"
            break
        case "03":
            window.location.pathname = "/chartsvariable"
            break

        case "04-01":
            window.location.pathname = "/reservoirlatex"
            break
        case "04-02":
            window.location.pathname = "/raisonarretfour"
            break
        case "04-03":
            window.location.pathname = "/histarrettable"
            break
        case "04-04":
            window.location.pathname = "/consomationlatex"
            break
        case "04-05":
            window.location.pathname = "/statfinition"
            break
        case "04-06":
            window.location.pathname = "/stattables"
            break
        case "04-07":
            window.location.pathname = "/rejets"
            break
        case "04-08":
            window.location.pathname = "/dashboardrejets"
            break

        case "05-01":
            window.location.pathname = "/etattouffeteur"
            break
        case "05-02":
            window.location.pathname = "/maintenancetouffeteur"
            break
        case "05-03":
            window.location.pathname = "/histarrettouffeteur"
            break

        case "06-01":
            window.location.pathname = "/etatbeamer"
            break
        case "06-02":
            window.location.pathname = "/statbeaming"
            break

        case "07-01":
            window.location.pathname = "/histarrettable"
            break
        case "07-02":
            window.location.pathname = "/histarrettouffeteur"
            break
        case "07-03":
            window.location.pathname = "/statchariottapis"
            break
        case "07-04":
            window.location.pathname = "/statchariotbois"
            break
        case "07-05":
            window.location.pathname = "/gestionconvoyeur"
            break

        case "08-01":
            window.location.pathname = "/chauffage"
            break
        case "08-02":
            window.location.pathname = "/chauffagesst"
            break

        case "09-01":
            window.location.pathname = "/historique"
            break
        case "09-02":
            window.location.pathname = "/rapportfinmois"
            break

        case "10":
            window.location.pathname = "/alarms"
            break
        case "11":
            window.location.pathname = "/users"
            break
    }
    

}

export default RouteView