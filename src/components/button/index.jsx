import { ButtonComponent } from "./style";

export default function Button({onClick, children}){
    return(
        <ButtonComponent onClick={()=>onClick()} children={children} />
    )
}