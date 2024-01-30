import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 justify-between flex flex-row items-center">
                <Image src="/logo.png" alt="FSW Barber" width={126} height={22} />
                <Button variant="outline" size="icon">
                    <MenuIcon size={18}/>
                </Button>
            </CardContent>
        </Card>
        );
}
 
export default Header;