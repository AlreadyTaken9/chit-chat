import { PrettyChatWindow  } from "react-chat-engine-pretty"
const ChatsPage = (props) => {
    return (
        <div style={{height : '100vh'}}>
            <PrettyChatWindow
                projectId='208f3728-ac2c-43d4-9b71-810432d9c9e3'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
                />
        </div>
    )
}

export default ChatsPage