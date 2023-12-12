import { BookType, Home, LibraryBig, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function HeaderDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-2" variant="outline">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Menus</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/">
            <DropdownMenuItem>
              <Home className="mr-2 h-4 w-4" />
              <span>HOME</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/vocabulary">
            <DropdownMenuItem>
              <LibraryBig className="mr-2 h-4 w-4" />
              <span>VOCABULARY</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/grammer">
            <DropdownMenuItem>
              <BookType className="mr-2 h-4 w-4" />
              <span>Grammer</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
