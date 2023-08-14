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

const EtatTouffeteur = () =>{
    const [data,setData] = useState([])
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
        
        param.action = 'getInfoTuffter'
        param.valeur1 = sDateDebut;
        param.valeur2 = sDateFin;
        setData(await UseCallApi(param) as any)
    }
    

    return(
        <div>
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

                <GridComponent
				dataSource={data}
				allowResizing={true}
				allowReordering={true}
				allowTextWrap={true}
				ref={gridobj}
				toolbar={toolbarOptions}
				allowExcelExport={true}
				toolbarClick={toolbarClick}
				showColumnChooser={true}>
				<ColumnsDirective>
					<ColumnDirective field='tuffterName' headerText='Touffeteur' width='100' textAlign='Center' />
					<ColumnDirective
						field='totalHours'
						headerText='Heures Intéral'
						width='100'
						textAlign='Center'
						type='number'
					/>
					<ColumnDirective
						field='totalTimeOn'
						headerText='Heures On (Hrs)'
						width='100'
						textAlign='Center'
						format='N2'
					/>
					<ColumnDirective
						field='totalTimeOff'
						headerText='Heures Off (Hrs)'
						width='100'
						textAlign='Center'
						format='N2'
					/>
					<ColumnDirective
						field='efficiency'
						headerText='Pourcentage On (%)'
						width='100'
						textAlign='Center'
						format='N2'
					/>
				</ColumnsDirective>
				<Inject services={[ Resize, Reorder, Toolbar, ExcelExport, ColumnChooser ]} />
			</GridComponent>
        </div>
    )
}

export default EtatTouffeteur 