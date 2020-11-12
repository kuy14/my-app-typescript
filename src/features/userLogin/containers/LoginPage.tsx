import React from "react";
import { Grid, Header } from "semantic-ui-react";
import LoginForm from "../components/LoginForm";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginCredential } from "../models";
import { logUserIn } from "../user.reducer";
import { RootState } from "../../../app/store";

const UserLoginPage = () => {
  // hooks
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);

  const onSubmit = (username: string, password: string) => {
    dispatch(
      logUserIn({
        username,
        password,
      } as LoginCredential)
    );
  };

  if (userState.token) {
    return <Redirect to="/" />;
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" color="teal" textAlign="center">
          <p>Potalava</p>
        </Header>
        <LoginForm isLoading={userState.isLoading} onSubmit={onSubmit} />
        {/* {userState.error && <Message error content={userState.error?.data.message} />} */}
      </Grid.Column>
    </Grid>
  );
};

export default UserLoginPage;
