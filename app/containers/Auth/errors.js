function AuthDeniedError (message, status) {
  Error.call(this, message);

  this.message = message;
  this.responseStatus = status || 403;
  this.name = "AuthDeniedError";

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, AuthDeniedError);
  } else {
    this.stack = (new Error()).stack;
  }
};

AuthDeniedError.prototype = Object.create(Error.prototype);

export { AuthDeniedError };