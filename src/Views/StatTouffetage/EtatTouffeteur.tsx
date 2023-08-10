import UseCallApi from '../../Hooks/UseCallApi'
import { useState,useMemo,useRef} from 'react'
import { DatePickerComponent,DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const EtatTouffeteur = () =>{
    const param = { action: ''}
    const [data,setData] = useState([])
    const dateValue:Date=new Date();

    const handleClick = async () =>{
        param.action = 'GetStatProjet'
        setData(await UseCallApi(param) as any)
    }

    return(
        <div>
            <div className='mainHeader'>
                        <div className='item'>                            
                                <label style={{fontSize:'20px',marginRight:'20px'}}>Date début : </label>
                                <DateTimePickerComponent  width={300} value={dateValue} format='yyyy-MM-dd HH:mm' style={{fontSize:'20px'}}/>                            
                        </div>
                        <div className='item'>                            
                                <label style={{fontSize:'20px',marginRight:'20px'}}>Date fin</label>
                                <DateTimePickerComponent  width={300} value={dateValue} format='yyyy-MM-dd HH:mm' style={{fontSize:'20px'}}/>                                                        
                        </div>
                        <div className='item'>
                                <ButtonComponent onClick={handleClick}>Validez</ButtonComponent>
                        </div>                    
                </div>
        </div>
    )
}

export default EtatTouffeteur 