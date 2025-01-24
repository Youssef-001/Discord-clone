import logo from '../assets/l.jpeg';

function Message({avatar=logo, name, message, date})
{

    return (

        <div style={{display:'flex', gap:'1rem'}}>
            <img src={logo} alt=""  style={{width:'2rem', height:'2rem', borderRadius:'75%'}}/>
            <div>
                <p style={{color:'#E3EDF5'}}>{name}</p>

            <p style={{marginTop:'8px', color:'#E3EDF5'}}>{message}</p>
            </div>

            <datetime style={{color:'#caccce'}}>{date}</datetime>
        </div>
    )

}

export default Message;