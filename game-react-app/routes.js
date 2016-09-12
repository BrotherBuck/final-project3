ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={MainPage} />
  </Router>,
  document.getElexmentById('app-container')
);

<Route path='/register' component={RegistrationPage} />

<LoginRoute path='/login' component={LoginPage} />

<LogoutRoute path='/logout' />

<AuthenticatedRoute path='/protected' component={ProtectedPage} />

<LoginLink>Login</LoginLink>

<LogoutLink>Logout</LogoutLink>

<Authenticated>
  <LogoutLink>Logout</LogoutLink>
</Authenticated>

<NotAuthenticated>
  <LoginLink>Login</LoginLink>
</NotAuthenticated>