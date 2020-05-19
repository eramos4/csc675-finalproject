import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CreateAccount from './createAccount.js'
import Login from './login.js'
import Search from './search.js'
import InsertRecipe from './insertRecipe.js'
import Delete from './delete.js'
import Update from './update.js'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Create Account</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
           <CreateAccount></CreateAccount>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>Login</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                   <Login></Login>
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>Search Recipe</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                    <Search></Search>
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>Insert Recipe</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                    <InsertRecipe></InsertRecipe>
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>Update Recipe</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                    <Update></Update>
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>Delete Recipe</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                    <Delete></Delete>
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
    </div>
  );
}
