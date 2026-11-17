import "./Help.css"
import icon from "./icons/icon1.png"
import vector from "./icons/vector.png"

export default function Help() {
    return (
        <div className="help">
            <div className="help-title">
                <h1>Do You Have Any Questions? Get Help From Us</h1>
            </div>

            <div className="help-icons">
                <div><img src={icon} />
                    <p>Chat live with our support team</p>
                    </div>
                <div>
                    <img src={icon} />
                    <p>Browse our FAQ</p>
                    </div>
            </div>

            <div className="help-input-box">
                <div className="help-input">
                    <img src={vector} />
                    <input placeholder="Enter your email address..." />
                </div>
                <button>Submit</button>
            </div>
        </div>
    )
}
