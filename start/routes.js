'use strict';

const Route = use('Route');

Route.post('/users', 'UserController.store').validator('User/Store');

Route.post('/sessions/token', 'SessionController.token').validator(
  'Session/Store'
);
Route.post('/sessions/refresh-token', 'SessionController.refreshToken');

Route.post('/forgot-password', 'ForgotPasswordController.store');
Route.put('/forgot-password', 'ForgotPasswordController.update');

Route.get('/files/:id', 'FileController.show');
Route.post('/files', 'FileController.store');

Route.group(() => {
  Route.put('/users', 'UserController.update').validator('User/Update');
  Route.delete('/users', 'UserController.destroy');

  Route.get('/league', 'LeagueController.index');
  Route.post('/league', 'LeagueController.store').validator('League/Store');
  Route.put('/league/:id', 'LeagueController.update').validator(
    'League/Update'
  );
  Route.delete('/league/:id', 'LeagueController.destroy');

  Route.post('/user-league', 'UserLeagueController.store').validator(
    'UserLeague/Store'
  );
}).middleware('auth');
