const Message = (props) => {


    const style = props.own ? "message-own" : "" 

    return (
        <div className="message-container">
            <div className={ 'message ' + style }>
                <p className="name-text">{ props.data.author }</p>
                <p className="content-text">{props.data.message}</p>
                <p className="time-text">
                    { new Date(props.data.date).toLocaleTimeString().slice(0, -3) }
                </p>
            </div>
        </div>

    )
}
export default Message