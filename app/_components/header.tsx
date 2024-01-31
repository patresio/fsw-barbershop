import MenuSheet from "./menusheet";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";


const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 justify-between flex flex-row items-center">
                <Image src="/logo.png" alt="FSW Barber" width={126} height={22} />
                <MenuSheet />
                
            </CardContent>
        </Card>
        );
}
 
export default Header;