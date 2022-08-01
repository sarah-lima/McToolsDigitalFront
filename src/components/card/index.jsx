import { CardComponent } from "./style";

export default function Card({data}){
    return(
        <CardComponent>
            <div>
                {data[0]}
            </div>
            <div>
                {data[1]}
            </div>
        </CardComponent>
    )
}