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
                <SheetHeader className="text-left border-b border-solid border-secondary p-5">
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <SheetDescription>
                    
                </SheetDescription>
            </SheetContent>
        </Sheet>
        );
}
 
export default MenuSheet;