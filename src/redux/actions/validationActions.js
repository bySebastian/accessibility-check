import * as types from './actionTypes';

export function validateHtml(siteUrl) {

    console.log('validateHtml', siteUrl);

    return { type: types.VALIDATE_HTML, siteUrl };
}