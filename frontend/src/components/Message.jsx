

function Message({avatar, name, message, date})
{

    return (

        <div>
            <img src={avatar} alt="" />
            <div>
                <p>{name}</p>

            <datetime>{date}</datetime>
            </div>

            <p>{message}</p>
        </div>
    )

}

export default Message;