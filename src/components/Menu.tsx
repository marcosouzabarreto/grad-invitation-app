'use client';
import { Menu as MuiMenu, MenuItem, Button, Typography } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from "next/navigation";

export default function Menu() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (route?: string) => () => {
    setAnchorEl(null);
    if (route)
      router.push(route);
  };
  return (
    <div>
      <Button
        id="open-menu-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="text-text normal-case text-lg"
      >
        <MenuIcon className="mr-1" />
        <Typography className="font-sans">
          Menu
        </Typography>
      </Button>
      <MuiMenu
        id="header-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose()}
        MenuListProps={{
          'aria-labelledby': 'open-menu-button',
        }}
      >
        <MenuItem onClick={handleClose("/")}>
          <Typography className="font-sans">
            Pagina Inicial
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose("/info")}>
          <Typography className="font-sans">
            Comemoração
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose("/confirm-attendance")}>
          <Typography className="font-sans">
            Confirmar Presença
          </Typography>
        </MenuItem>

      </MuiMenu>
    </div >
  )
}
