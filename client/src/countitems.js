import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
//import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        "& > *": {
            marginBottom: theme.spacing(2)
        },
        "& .MuiBadge-root": {
            marginRight: theme.spacing(4)
        }
    },
    m: {
        marginRight: theme.spacing(4)
    }
}));

export default function Countitems(props) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <div>
                <ButtonGroup>

                    <Button
                        aria-label="reduce"
                        onClick={() => {
                            props.callbackFromParent(props.sc - 1);


                        }}
                    >
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                        aria-label="increase"
                        onClick={() => {
                            props.callbackFromParent(props.sc + 1);


                        }}
                    >
                        <AddIcon fontSize="small" />
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
}
