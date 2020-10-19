import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { MenuItem } from "@material-ui/core";
import axios from "axios";
import {
  Button,
  AppBar,
  Tab,
  Tabs,
  Box,
  Typography,
  Toolbar,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import Link from "next/link";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginBottom: theme.spacing(1.5),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
    button: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })
);

function CreateCategory() {
  console.log("createcategory-render");
  const classes = useStyles();

  let categorySchema = yup.object().shape({
    title: yup.string().required(),
    slug: yup.string().required(),
  });

  const { register, handleSubmit, errors } = useForm({
    validationSchema: categorySchema,
  });

  const onSubmit = (values) => {
    console.log(values);
    const { title, slug, description } = values;

    // ${process.env.REACT_APP_API_BASE}/api/v1/users/login/
    fetch("http://localhost:3001/api/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // mode: "cors",
      body: JSON.stringify({ title: title, slug: slug, description: description }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.container}>
        <Grid container direction="column">
          <Grid item>
            <TextField
              name="title"
              inputRef={register}
              label="Category"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              fullWidth
              error={errors.email ? true : false}
            />

            <TextField
              name="slug"
              inputRef={register}
              label="Slug"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              fullWidth
              error={errors.email ? true : false}
            />
          </Grid>
          <Grid item>
            <TextField
              name="description"
              inputRef={register}
              label="Description"
              defaultValue="description"
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
            />
          </Grid>
          <Grid item>
            <Button className={classes.button} type="submit" variant="outlined" aria-label="delete" color="primary">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
      <Link href="/admin">
        <a>Admin</a>
      </Link>
      <Link href="/admin/categories/create">
        <a>categories</a>
      </Link>
      <Link href="/">
        <a>index</a>
      </Link>
    </div>
  );
}

export default CreateCategory;
