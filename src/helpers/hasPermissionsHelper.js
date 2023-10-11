export const hasPermissionsHelper = (rolesDto) => {
    let hasPermission = false
    rolesDto.map(role => {
        if (role === "WORKER" || role === "ADMIN") {
            hasPermission = true
        }
    })
    return [hasPermission, rolesDto]
}
