/**
 * Create all the helper functions and classes inside helper folder
 * import them inside index.js
 * export and use them
 */

import { Toast } from 'native-base';

/** This ValidationComponent is used in Registration screen */
import ValidationComponent from './validations';

/**
 * @method showToast
 * @description Use it to show toast. It internally uses Toast provided by Native Base
 * @param {string} message
 * @param {string} type : possible values : default | warning | success | danger
 * @param {string} position
 */
export function showToast(message = '', type = 'default', position = 'bottom') {
    Toast.show({
        text: message,
        buttonText: "Okay",
        type,
        position
    })
}

export { ValidationComponent }