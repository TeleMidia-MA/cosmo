var routes_name = {};
routes_name.AVALIABLE_USERNAME_COSMO = '/login/register/search/username';
routes_name.REGISTER_SAVE = '/login/register/save';
routes_name.REGISTER_RESCUE_PASSWORD = '/login/register/password/rescue/send';
routes_name.AUTH = '/login/auth';
routes_name.ADMIN_GET_ALL_USER = '/admin/user/all';
routes_name.ADM_REGISTER_USER_SAVE = '/admin/user/save';
routes_name.ADM_REGISTER_USER_MODIFY = '/admin/user/modify';
routes_name.ADM_REGISTER_USER_UPDATE = '/admin/user/update';

window.cosmo = window.cosmo || {};
window.cosmo.routes_name = window.cosmo.routes_name || routes_name;