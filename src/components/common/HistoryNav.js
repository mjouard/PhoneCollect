import { useNavigate } from "react-router-dom";
import "./HistoryNav.css"

export default function HistoryNav(props) {
    const history = props.history;
    const navigate = useNavigate()

    return (
        <div className="history-container">
            {history.map(
                (element, index) => {
                    if (index === 0) {
                        return (
                            <div key={element.title} onClick={() => navigate(element.link)} className="history-item-div">
                                <div className="history-item">
                                    {element.title}
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={element.title} className="history-item-div" onClick={() => navigate(element.link)}> {"<"}
                                <div className="history-item">{element.title}</div>
                            </div>
                        )
                    }
                }
            )}
        </div>
    )
}