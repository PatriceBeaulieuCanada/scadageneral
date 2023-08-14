import moment from 'moment';

const ConvertDateTime = (param:any) =>{

    const format = "YYYY-MM-DDTHH:mm"
    var dateTime = moment(param).format(format)

return dateTime

}

export default ConvertDateTime