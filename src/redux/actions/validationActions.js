import * as types from './actionTypes';
import { ajax } from 'jquery';

export function validateHtml(siteUrl) {

    const parameters = {
        doc: siteUrl,
        showSource: 'yes',      // Only `yes` is supported
        level: 'error',         // Only `error` is supported. Informative messages and warnings aren't supported
        out: 'json',            // Choose: xhtml, XML, json, gnu, text; or none, then the choice is default `HTML`
        //parser: 'html5',      // Choose: html, html5, xml, xmldtd; or none, then the choice is based on the `Content-Type`
    }

    ajax({
        url: 'http://validator.w3.org/nu/',
        data: parameters,
        dataType: 'json',
        success: (data) => {
            console.log('succes', data);
        },
        error: (status, err) => {
            console.log(siteUrl, status, err.toString());
        }
    });

    return { type: types.VALIDATE_HTML, siteUrl };
}