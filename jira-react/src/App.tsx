import React, { useEffect } from "react";
import styles from "./App.module.css";
import { Grid, Avatar } from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  Theme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import PolymerIcon from "@material-ui/icons/Polymer";

import { useSelector, useDispatch } from "react-redux";
import {
  selectLoginUser,
  selectProfiles,
  fetchAsyncMyProf,
  fetchAsyncProfs,
  updateAsyncProf,
} from "./features/auth/authSlice";

import {
  fetchAsyncTasks,
  fetchAsyncUsers,
  fetchAsyncCategory,
  selectEditedTask,
  selectTasks,
} from "./features/task/taskSlice";

import TaskList from "./features/task/TaskList";
import TaskForm from "./features/task/TaskForm";
import TaskDisplay from "./features/task/TaskDisplay";
import { AppDispatch } from "./app/store";
import { ExitToApp } from "@material-ui/icons";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#3cb371",
    },
  },
});

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    marginTop: theme.spacing(3),
    cursor: "none",
  },
  avatar: {
    marginLeft: theme.spacing(1),
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();
  const editedTask = useSelector(selectEditedTask);
  const tasks = useSelector(selectTasks);
  const loginUser = useSelector(selectLoginUser);
  const profiles = useSelector(selectProfiles);

  const loginProfile = profiles.filter(
    (prof) => prof.user_profile === loginUser.id
  )[0];

  const Logout = () => {
    localStorage.removeItem("localJWT");
    window.location.href = "/";
  };

  const handlerEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput?.click();
  };

  useEffect(() => {
    const fetchBootLoader = async () => {
      await dispatch(fetchAsyncTasks());
      await dispatch(fetchAsyncMyProf());
      await dispatch(fetchAsyncUsers());
      await dispatch(fetchAsyncCategory());
      await dispatch(fetchAsyncProfs());
    };
    fetchBootLoader();
  }, [dispatch]);

  return (
    <MuiThemeProvider theme={theme}>
      <div className={styles.app__root}>
        <Grid container>
          <Grid item xs={4}>
            <PolymerIcon className={classes.icon} />
          </Grid>
          <Grid item xs={4}>
            <h1>Scrum Task Board</h1>
          </Grid>
          <Grid item xs={4}>
            <div className={styles.app__logout}>
              <button className={styles.app__iconLogout} onClick={Logout}>
                <ExitToApp fontSize="large" />
              </button>

              <input
                type="file"
                id="imageInput"
                hidden={true}
                onChange={(e) => {
                  dispatch(
                    updateAsyncProf({
                      id: loginProfile.id,
                      img: e.target.files !== null ? e.target.files[0] : null,
                    })
                  );
                }}
              />
              <button className={styles.app_btn} onClick={handlerEditPicture}>
                <Avatar
                  className={classes.avatar}
                  alt="avatar"
                  src={
                    loginProfile?.img !== null ? loginProfile?.img : undefined
                  }
                />
              </button>
            </div>
          </Grid>
          <Grid item xs={6}>
            {tasks[0].task && <TaskList />}
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: "80vh" }}
            >
              <Grid item>
                {editedTask.status ? <TaskForm /> : <TaskDisplay />}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
