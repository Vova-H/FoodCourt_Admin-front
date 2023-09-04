export const hasPermissionsHelper = (roles) => {
    let hasPermission = false
    roles.map(roleModel => {
        if (roleModel.role === "WORKER" || roleModel.role === "ADMIN") {
            hasPermission = true
        }
    })
    return hasPermission
}
