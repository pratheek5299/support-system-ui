import { useState } from 'react';
import styles from './Messages.module.css'
import { responses, sampleMessages } from './data';
function Messages(){
    const [chat, setChat] = useState(sampleMessages);
    function handleBotClick(index){
        let msgResponder = chat[index].responder;
        if (msgResponder === 'user'){
            return
        }
        var msg = chat[index].message;
        var response = responses[msg];
        if (response === undefined){
            setChat([...chat, {
                message: msg,
                responder: 'user'
            }])
            return 
        }
        console.log(response);
        if (response.length === 0){
            alert('Please type your query in the msg box');
            return
        }
        let temp = [...chat]
        temp.push({
            message: msg,
            responder: 'user'
        });

        response.forEach(element => {
            let r = {
                message: element,
                responder: 'bot'
            }
            temp.push(r)
        });
        setChat([...temp])
    }
    return (
        
        <div className={styles.messagesContainer}>
            {console.log(chat)}
            <div className={styles.headerContainer}>
            </div>
            <div className={styles.messagesHeadings}>
                <h1>Hello there!</h1>
                <h2>How can we help you today?</h2>
            </div>
            <ul className={styles.chatContainer}>
                {
                    chat && chat.map((item, index) => <li onClick={()=> handleBotClick(index)} key={index} className={item.responder === 'bot' ? styles.botMsgContainer: styles.normalMsgContainer}>
                        <span >{item.message}</span>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Messages;