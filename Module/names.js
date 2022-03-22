//Sometimes we don't want to share everything on a module
//Public
const john='john';
const peter='peter';
//Secret
const secret='SUPER SECRET'
//console.log(module)
//Makes this variables public for module access
module.exports={john,peter};