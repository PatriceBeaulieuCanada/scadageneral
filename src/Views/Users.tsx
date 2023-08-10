import { useState, useRef } from 'react';
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
import UseCallApi from '../Hooks/UseCallApi';

const Users = () =>{
    const [ data, setData ] = useState('');
    const [memUser,setMemUser] = useState();
    const param = { action: '',user:{}};
    const gridobj:any = useRef(null);

    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    const toolbarOptions = [ 'ExcelExport','Add','Edit','Delete','ColumnChooser' ]

    const toolbarClick = (args:any) => {
		const rep = args.item.id;
		const sub = 'excelexport';

		if (rep.includes(sub)) {
			gridobj.current.excelExport();
		}
	};

    const handleGetUser = async () => {
		param.action = 'getUserBeaulieu';	
		setData(await UseCallApi(param));
		//console.log(data);
	};

    const actionComplete = (arg:any) => {

		// if (arg.action == 'edit') {
		// 	param.action = 'setUsager';
		// 	const user:IUser = arg.data;
		// 	param.user = user;
		// 	//console.log(param);
		// 	useApiBeaulieu(param);			
		// 	setTimeout(async () => {
		// 		param.action = 'getUserBeaulieu';
		// 		setData(await useApiBeaulieu(param));
		// 		//console.log('test return', data);
		// 	}, 500);
		// }

		// if (arg.action == 'add') {
		// 	param.action = 'addUsager';
		// 	const user:IUser = arg.data;
		// 	param.user = user;
		// 	useApiBeaulieu(param);			
		// 	setTimeout(async () => {
		// 		param.action = 'getUserBeaulieu';
		// 		setData(await useApiBeaulieu(param));
		// 		//console.log('test return', data);
		// 	}, 500);
		// }

		// if (arg.requestType	=== 'delete') {
		// 	param.action = 'deleteUsager';
		// 	param.user = memUser;
		// 	useApiBeaulieu(param);			
		// 	setTimeout(async () => {
		// 		param.action = 'getUserBeaulieu';
		// 		setData(await useApiBeaulieu(param));
		// 		//console.log('test return', data);
		// 	}, 500);
		// }

	};

    const valueAccess=()=>{
		return "*******";
	}

	const selectedRow=(arg:any)=>{
		setMemUser(arg.data)
	}

    return(
        <div>
            <div className='userBtn'>
                <ButtonComponent onClick={handleGetUser}>Validez</ButtonComponent>
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
				showColumnChooser={true}
				editSettings={editOptions}
				actionComplete={actionComplete}
				rowSelected={selectedRow}
				height={650}>			
			
				<ColumnsDirective>
					<ColumnDirective
						field="firstName"
						headerText="Prénom"
						width="100"
						textAlign="Center"
						isPrimaryKey={true}
					/>
					<ColumnDirective
						field="lastName"
						headerText="Nom"
						width="100"
						textAlign="Center"
						
					/>
					<ColumnDirective
						field="email"
						headerText="Email"
						width="100"
						textAlign="Center"
						
					/>
					<ColumnDirective
						field="phone"
						headerText="Téléphone"
						width="100"
						textAlign="Center"
						
					/>
                    <ColumnDirective
						field="sms"
						headerText="SMS"
						width="100"
						textAlign="Center"
						
					/>
					 <ColumnDirective
						field="password"
						headerText="Mot de passe"
						width="100"
						textAlign="Center"
						valueAccessor={valueAccess}
					/>
					
				</ColumnsDirective>
				<Inject services={[ Resize, Reorder, Toolbar, ExcelExport, ColumnChooser, Edit ]} />
			</GridComponent>
        </div>
    )
}

export default Users