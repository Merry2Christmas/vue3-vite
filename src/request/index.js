// 获取当前网址路径
export const $ip = `${location.protocol}//${location.hostname}${location.port ? ':' : ''}${location.port || ''}`;

// 获取当前网址路径
export const $ws = `ws://${location.hostname}${location.port ? ':' : ''}${location.port}`


console.log(99999999,'获得本机地址',$ip);