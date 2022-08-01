import { InputComponent } from "./style";

export default function Input({ type, onChange, value, placeholder, onBlur }){
    return(
        <InputComponent onBlur={onBlur} type={type} onChange={onChange} placeholder={placeholder} value={value} />
    )
}