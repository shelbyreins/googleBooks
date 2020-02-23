import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={12}>
          <div>
            <img id="jumbotron" className={classes.img} alt="complex" src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <div id="jumboText">
              <h1>Google Books</h1>
              <h3>Search and save your favorite books</h3>
            </div>
          </div>
          {/* <Paper className={classes.paper}> 
          </Paper> */}

        </Grid>

      </Grid>



    </div >
  );
}



// const Jumbotron = () => {
//     return (
//         <div className="jumbotron jumbotron-fluid">
//             {/* <div className="container">
//                 <h1 className="display-4">Google Books</h1>
//                 <p className="lead">Find and save your favorite books</p>
//             </div> */}

//             <div className={classes.search}>
//                 <div className={classes.searchIcon}>
//                     <SearchIcon />
//                 </div>
//                 <InputBase
//                     placeholder="Search…"
//                     classes={{
//                         root: classes.inputRoot,
//                         input: classes.inputInput,
//                     }}
//                     inputProps={{ 'aria-label': 'search' }}
//                 />
//             </div>
//         </div>
//     );
// }

// export default Jumbotron;