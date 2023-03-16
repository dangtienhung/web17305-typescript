// array
var array = [[1, 2, 3, 4]];
var numArr = [1, 2, 3];
// enum
var ROLE;
(function (ROLE) {
    // SUPER_ADMIN,
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["STAFF"] = 1] = "STAFF";
})(ROLE || (ROLE = {}));
// const superAdmin: ROLE = ROLE.SUPER_ADMIN;
var admin = ROLE.ADMIN;
var staff = ROLE.STAFF;
// tuples
var tuples = ['dang tien hung', 'nam dinh', 20];
