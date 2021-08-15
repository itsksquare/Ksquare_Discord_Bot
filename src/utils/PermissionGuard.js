class PermissionGuard {
  constructor(permissions) {
    this.permissions = permissions;
  }

  check(memberPermissions) {
    return this.permissions.some((permission) =>
      memberPermissions.includes(permission)
    );
  }
}

module.exports = PermissionGuard;
