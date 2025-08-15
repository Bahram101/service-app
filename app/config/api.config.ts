export const SERVER = process.env.SERVER
// export const API_URL = `${SERVER_AUTH}`

export const API_AUTH = `${SERVER}:${process.env.PORT_AUTH}`
export const API_CORE = `${SERVER}:${process.env.PORT_CORE}/api`
export const API_SERVICE = `${SERVER}:${process.env.PORT_SERVICE}/api`

console.log('API_AUTH', API_AUTH)

