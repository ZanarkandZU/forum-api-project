const Joi = require('joi');

const routes = (handler) => [
  {
    method: 'POST',
    path: '/authentications',
    handler: handler.postAuthenticationHandler,
    options: {
      description: 'POST authentications',
      validate: {
        payload: Joi.object({
          username: Joi.string().required(),
          password: Joi.string().required(),
        }),
      },
      response: {
        schema: Joi.object({
          status: 'success',
          data: {
            accessToken: Joi.string(),
          },
        }),
      },
    },
  },
  {
    method: 'PUT',
    path: '/authentications',
    handler: handler.putAuthenticationHandler,
  },
  {
    method: 'DELETE',
    path: '/authentications',
    handler: handler.deleteAuthenticationHandler,
    options: {
      description: 'DELETE authentications',
      validate: {
        payload: Joi.object({
          refreshToken: Joi.string().required(),
        }),
      },
      response: {
        schema: Joi.object({
          status: 'success',
        }),
      },
    },
  },
];

module.exports = routes;
