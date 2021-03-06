import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = (props) => (
    <AppBar position="static" color="secondary">
        <Toolbar>
            <Typography variant="h6" className="headern">
                Profesor: {props.nameProf},  specialitate : {props.specialty}
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Header;
