import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const MenuSheet = () => {
    return ( 
        <Sheet>
            <SheetTrigger>
                <Button variant="outline" size="icon">
                    <MenuIcon size={18}/>
                </Button>
            </SheetTrigger>
            <SheetContent className="p-0">
                <SheetHeader className="text-left border-b border-solid border-primary p-5">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                    This action cannot be undone. This will pxermanently delete your account
                    and remove your data from our servers.
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
        );
}
 
export default MenuSheet;