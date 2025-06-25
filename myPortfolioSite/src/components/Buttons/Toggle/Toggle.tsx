import { type JSX } from "react";
import "./toggle.scss";

interface ToggleProps {
    isActive: boolean;
    onToggle: () => void;
    backgroundColor?: string;
    icon?: JSX.Element;
}

const Toggle = (props: ToggleProps): JSX.Element => {
    return (
        <div className="toggleContainer">
            <button
                className={`toggleButton ${props.isActive ? "active" : ""}`}
                type="button"
                onClick={props.onToggle}
                style={props.backgroundColor ? { backgroundColor: props.backgroundColor } : undefined}
            >
                {props.icon ? (
                    <div className="iconWrapper">{props.icon}</div>
                ) : (
                    <div className="sliderThumb" />
                )}
            </button>
        </div>
    );
};

export default Toggle;