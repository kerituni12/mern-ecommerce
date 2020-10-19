import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { MenuItem } from "@material-ui/core";
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
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { useRouter } from "next/router";

const currencies = [
  {
    tab: "USD",
    label: "$",
  },
  {
    tab: "EUR",
    label: "€",
  },
  {
    tab: "BTC",
    label: "฿",
  },
  {
    tab: "JPY",
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

function TabPanel(props) {
  const { children, tab, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={tab !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {tab === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

export default function Login() {
  const classes = useStyles();

  let loginSchema = yup.object().shape({
    title: yup.string().required(),
    price: yup.number().required(),
  });

  const router = useRouter();
  const { product } = router.query;
  //   console.log(product);

  const { register, handleSubmit, errors, control, setValue } = useForm({
    validationSchema: loginSchema,
  });

  const [tab, setTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:3001/api/product/${product}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(({ data }) => {
        console.log(data);
        // setProducts(data);
        setValue("title", data.title);
        setValue("firstName", "jonh");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [product]);

  const onSubmit = (values) => {
    const { title, slug, description, category, price } = values;
    console.log(values);

    // ${process.env.REACT_APP_API_BASE}/api/v1/users/login/
    fetch(`http://localhost:3001/api/product/${product}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      // mode: 'cors',
      body: JSON.stringify({ title, slug, description, category, price }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          tab={tab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.container}>
        <Grid container direction="column">
          <Grid item>
            <TabPanel tab={tab} index={0}>
              <TextField
                label="First Name"
                name="firstName"
                inputRef={register}
                margin="normal"
                variant="outlined"
                defaultValue=""
              />
              <TextField
                label="Title"
                name="title"
                inputRef={register}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                // fullWidth
                defaultValue=""
              />
              <TextField
                name="slug"
                inputRef={register}
                label="Slug"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
              />

              <TextField
                name="description"
                inputRef={register}
                label="Description"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
              />
              <Controller
                as={
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Category"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    // defaultValue={products.category}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.tab} tab={option.tab}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                }
                name="category"
                rules={{ required: "this is required" }}
                control={control}
                //   defaultValue={products.category}
              />

              <FormControl
                fullWidth
                className={classes.dense}
                variant="outlined"
                margin="normal"
              >
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  name="price"
                  inputRef={register}
                  // tab={values.amount}
                  //   onChange={handleChange("amount")}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  labelWidth={60}
                />
              </FormControl>
            </TabPanel>
            <TabPanel tab={tab} index={1}>
              <TextField
                name="email"
                inputRef={register}
                label="Enter email"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
                error={errors.email ? true : false}
              />

              <TextField
                name="password"
                type="password"
                inputRef={register}
                label="Enter password"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
                error={errors.email ? true : false}
              />
            </TabPanel>
            <TabPanel tab={tab} index={2}>
              Item Three
            </TabPanel>
            <TabPanel tab={tab} index={3}>
              Item Four
            </TabPanel>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              type="submit"
              variant="outlined"
              aria-label="delete"
              color="primary"
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
