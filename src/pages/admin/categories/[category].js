import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { Button, Box, Typography } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";

import { useRouter } from "next/router";
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
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
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

export default function CategoryCreate() {
  const classes = useStyles();

  let categorySchema = yup.object().shape({
    title: yup.string().required(),
    slug: yup.string().required(),
  });

  const { control, register, handleSubmit, errors } = useForm({
    validationSchema: categorySchema,    
  });
  const router = useRouter();
  const { category } = router.query;

  React.useEffect(() => {
    // if first router = undefined will have error controlled input
    if (category !== undefined) {
      fetch(`http://localhost:3001/api/category/${category}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(({ data }) => {    
         if(data){  
          setValue("title", data.title);
          setValue("slug", data.description);}
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    return () => {
      console.log("cleaner");
    };
  }, [category]);

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
            <Controller
              as={
                <TextField
                  label="Category"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
              }
              name="title"
              control={control}
              defaultValue=""
            />

            <Controller
              as={<TextField label="Slug" margin="normal" variant="outlined" fullWidth />}
              name="slug"
              control={control}
              defaultValue=""
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
            <Button
              className={classes.button}
              type="submit"
              variant="outlined"
              aria-label="delete"
              color="primary"
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
