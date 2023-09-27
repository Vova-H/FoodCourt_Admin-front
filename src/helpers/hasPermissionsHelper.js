export const hasPermissionsHelper = (rolesDto) => {
    let hasPermission = false
    let roles = []
    rolesDto.forEach(roleModel => {
        roles.push(roleModel.role)
    })
    rolesDto.map(roleModel => {
        if (roleModel.role === "WORKER" || roleModel.role === "ADMIN") {
            hasPermission = true
        }
    })
    return [hasPermission, roles]
}
