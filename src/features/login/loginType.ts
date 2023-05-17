export type UserType = {
    idInstance:  string | null
    apiTokenInstanc:  string | null
}

export type InitialsTateUserType = {
    user: null | UserType,
    isLoggedIn: boolean
}
