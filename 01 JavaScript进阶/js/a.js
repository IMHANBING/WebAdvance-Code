// export let str = '模块化'
//
// export let year = 2022
//
// export function message() {
//     console.log('模块化编程')
// }

let str = '模块化'

let year = 2022

function message() {
    console.log('模块化编程-message')
}

export default function message2(){
    console.log('模块化编程-message2')
}

export {str as newString, year, message}
