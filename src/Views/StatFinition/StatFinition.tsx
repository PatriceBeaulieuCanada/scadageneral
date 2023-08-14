import UseCallApi from '../../Hooks/UseCallApi'
import { useState,useMemo,useRef} from 'react'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import {
	ColumnDirective,
	ColumnsDirective,
	GridComponent,
	Inject,
	Resize,
	Reorder,
	ExcelExport,
	ColumnChooser,
	Toolbar,
	Edit
} from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import ConvertDateTime from '../../Component/ConvertDateTime';

const StatFinition = () =>{

    const [data,setData] = useState({infoFinitionEntities:[],timeC03Running:0,speedRatio:0})
    const dateValue:Date=new Date();
    const [ dateDebut, setDateDebut ] = useState<Date>()
    const [ dateFin, setDateFin ] = useState<Date>()
    const param = { action: '',valeur1:'', valeur2:''}

    const gridobj:any = useRef(null);
    const toolbarOptions = [ 'ExcelExport','ColumnChooser' ]

    const toolbarClick = (args:any) => {
		const rep = args.item.id;
		const sub = 'excelexport';

		if (rep.includes(sub)) {
			gridobj.current.excelExport();
		}
	};

    useMemo(() =>{
        setDateDebut(dateValue)
        setDateFin(dateValue)
      },[])

    const handleClick = async () =>{

        let dateTimeDebut:any = document.getElementById("dateTime1")
        let dateConvertDebut = Date.parse(dateTimeDebut.value as any)
        let sDateDebut = ConvertDateTime(dateConvertDebut);

        let dateTimeFin:any = document.getElementById("dateTime2")
        let dateConvertFin = Date.parse(dateTimeFin.value as any)
        let sDateFin = ConvertDateTime(dateConvertFin);

        //console.log(sDateDebut,sDateFin)
        
        param.action = 'getStatFinition'
        param.valeur1 = sDateDebut;
        param.valeur2 = sDateFin;
        setData(await UseCallApi(param) as any)
    }



    return(
        <div className='divContainer'>
            <div className='mainHeader'>
                        <div className='item'>                            
                                <label style={{fontSize:'20px',marginRight:'20px'}}>Date début : </label>
                                <DateTimePickerComponent id="dateTime1" width={300} value={dateDebut} format='yyyy-MM-dd HH:mm' style={{fontSize:'20px'}}/>                            
                        </div>
                        <div className='item'>                            
                                <label style={{fontSize:'20px',marginRight:'20px'}}>Date fin</label>
                                <DateTimePickerComponent  id="dateTime2" width={300} value={dateFin} format='yyyy-MM-dd HH:mm' style={{fontSize:'20px'}}/>                                                        
                        </div>
                        <div className='item'>
                                <ButtonComponent onClick={handleClick}>Validez</ButtonComponent>
                        </div>
            </div>
            <div className='infoContainer'>
                <div >
                    <label>Temps de marche du four : </label>
                    <input type={'text'} placeholder="00:00" value={data.timeC03Running.toString()}/>
                </div>
                <div>
                    <label>Ratio vitesse / standard : </label>
                    <input type={'text'} placeholder="00:00" value={data.speedRatio.toString()}/>
                </div>
            </div>

            <div className='mainContainer'>
            
            <GridComponent
				dataSource={data.infoFinitionEntities}
				allowResizing={true}
				allowReordering={true}
				allowTextWrap={true}
				ref={gridobj}
				toolbar={toolbarOptions}
				allowExcelExport={true}
				toolbarClick={toolbarClick}
				showColumnChooser={true}
				height={'100%'}>
				<ColumnsDirective>
                    <ColumnDirective field='dateTime' headerText="Date" width='20%' type='date' format="yyyy/MM/dd HH:mm:ss"/>
					<ColumnDirective field='noRoll' headerText="No Rouleau" width='20%' textAlign="Center"/>
                    <ColumnDirective field='greigeNo' headerText="No Greige" width='20%' textAlign="Center"/>
                    <ColumnDirective field='style' headerText="Style" width='20%' textAlign="Center"/>
                    <ColumnDirective field='length' headerText="Longueur" width='20%'/>
                    <ColumnDirective field='standardSpeed' headerText="Vitesse std machine (PPM)" width='20%'/>
					<ColumnDirective field='averageSpeed' headerText="Vitesse réel machine (PPM)" width='20%'/>  				
				</ColumnsDirective>
				<Inject services={[ Resize, Reorder, Toolbar, ExcelExport, ColumnChooser ]} />
			</GridComponent>
            </div>
        </div>
    )
}

export default StatFinition 