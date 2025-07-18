export function ChatLayout({ controls, aside, main }) {
    return (
        <div className="chat-layout">
            <div className="chat-layout-controls">{controls}</div>
            <div className="chat-layout-content">
                <div className="chat-layout-aside">{aside}</div>
                <div className="chat-layout-main">{main}</div>
            </div>
        </div>
    )
}