export default (token: string) => {
  const config = {
    headers: {
      'content-type': 'application/json',
      'auth-token': token
    }
  }
  config.headers['auth-token'] = token
  return config
}