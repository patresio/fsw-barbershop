import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const Welcome = () => {
    return ( 
        <div>
            <h2 className="text-xl font-bold">Olá, Miguel!</h2>
            <p className="capitalize">{format(new Date(), "EEEE',' dd ' de ' MMMM", {locale: ptBR})}</p>
        </div>
        );
}
 
export default Welcome;