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

const StatBeaming = () =>{

    const [data,setData] = useState({beamingProductionEntities:[],totalLenght:'',totalWeight:'',totalYarnBreak:'',totalYarnBreakRate:'',totalBeamProduce:''})
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
        
        param.action = 'getStatBeaming'
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
            <div>
				<label>Longeur produit : </label>
				<input type={'text'} placeholder="0" value={data.totalLenght.toString()}/>
			</div>
			<div>
				<label>Poids total : </label>
				<input type={'text'} placeholder="0" value={data.totalWeight.toString()}/>
			</div>
			<div>
				<label>Total de casses : </label>
				<input type={'text'} placeholder="0" value={data.totalYarnBreak.toString()}/>
			</div>
			<div>
				<label>Taux de casses / 100000 : </label>
				<input type={'text'} placeholder="0" value={data.totalYarnBreakRate.toString()}/>
			</div>
			<div>
				<label>Total de beams : </label>
				<input type={'text'} placeholder="0" value={data.totalBeamProduce.toString()}/>
			</div>
			<GridComponent
				dataSource={data.beamingProductionEntities}
				allowResizing={true}
				allowReordering={true}
				allowTextWrap={true}
				ref={gridobj}
				toolbar={toolbarOptions}
				allowExcelExport={true}
				toolbarClick={toolbarClick}
				showColumnChooser={true}
				height={'100%'}
                width={'100%'}>
				<ColumnsDirective>
                    <ColumnDirective field='beamer' headerText="Beamer" width='20%'/>
					<ColumnDirective field='noPlan' headerText="Plan" width='20%' textAlign="Center"/>
                    <ColumnDirective field='style' headerText="Style" width='20%' textAlign="Center"/>
					<ColumnDirective field='operator' headerText="Opérateur" width='20%' textAlign="Center"/>
                    <ColumnDirective field='yarnId' headerText="No Fil" width='20%' textAlign="Center"/>
                    <ColumnDirective field='weight' headerText="Poids" width='20%'/>
                    <ColumnDirective field='nbrYarn' headerText="Nbr de brins" width='20%'/>
					<ColumnDirective field='nbrBeam' headerText="Nbr de beams" width='20%'/>
					<ColumnDirective field='meters' headerText="Longueur (M)" width='20%'/>
					<ColumnDirective field='yarnBreak' headerText="Nbr casse" width='20%'/>
                    <ColumnDirective field='yarnBreakRate' headerText="Taux de casse / 100000" width='20%' format='N2'/>  				
				</ColumnsDirective>
				<Inject services={[ Resize, Reorder, Toolbar, ExcelExport, ColumnChooser ]} />
			</GridComponent>    
        </div>
    )
}

export default StatBeaming 