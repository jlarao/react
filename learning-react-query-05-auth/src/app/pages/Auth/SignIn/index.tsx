import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { FormEventHandler } from "react";
import { Link } from "react-router-dom";
import { useSignIn } from "../../../auth/useSignIn";

const styles = {
  Paper: {
    padding: 20,
    margin: "auto",
    textAlign: "center",
    width: 500
  }
} as const;

function SignInPage() {
  const signIn = useSignIn();

  const onSignIn: FormEventHandler<HTMLFormElement> = (form) => {
    form.preventDefault();
    const formData = new FormData(form.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    if (typeof email === 'string' && typeof password === 'string') {
      signIn({
        email,
        password
      });
    }
  }

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Paper style={styles.Paper}>
          <Typography variant="h3" component="h2"
            paddingBottom="25px">
            Sign In
          </Typography>
          <Box component="form"
            onSubmit={onSignIn}
            sx={{
              display: 'flex',
              flexFlow: 'column',
              mt: 1
            }}
          >
            <TextField
              label="email"
              name="email"
              required
              margin="normal"
            />

            <TextField
              label="password"
              name="password"
              type="password"
              required
              margin="normal"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 1
              }}>
              Sign in
            </Button>


            <Button
              component={Link}
              to='/auth/sign-up'
              fullWidth
              variant="outlined"
              sx={{
                mt: 2
              }}>
              Sign Up
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );

}

export default SignInPage;
