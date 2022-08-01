import { CardComponent } from "./style";

export default function Card({data}){
    return(
        <CardComponent>
            <div>
                {data.data}
            </div>
            <div>
                {data.valor}
            </div>
        </CardComponent>
    )
}