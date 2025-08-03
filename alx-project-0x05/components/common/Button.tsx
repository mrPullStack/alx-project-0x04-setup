import { ButtonProps } from "../../interface/index";

const Button: React.FC<ButtonProps> = ({
    buttonLabel,
    buttonBackgroundColor,
    action,
    }) => {
    return (
        <button
        className={`px-4 py-2 text-white rounded-md bg-${buttonBackgroundColor}-600`}
        onClick={action}
        >
        {buttonLabel}
        </button>
    );
};

export default Button;
