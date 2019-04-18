import * as types from './actionTypes';
import { ajax } from 'jquery';

export function validateHtml(siteUrl) {

    let xhr = null;

    xhr && xhr.abort();

    ajax({
        url: 'http://validator.w3.org/nu/',
        data: {
            doc: siteUrl,
            showSource: 'yes',      // Only `yes` is supported
            level: 'error',         // Only `error` is supported. Informative messages and warnings aren't supported
            out: 'json',            // Choose: xhtml, XML, json, gnu, text; or none, then the choice is default `HTML`
            //parser: 'html5',      // Choose: html, html5, xml, xmldtd; or none, then the choice is based on the `Content-Type`
        },
        async: true,
        dataType: 'json',
        complete: () => { xhr = null; },
        success: (data) => {
            if (!data.error) {
                console.log(data.messages);
            } else {
                console.log(data.error)
            }
        },
        error: (status, err) => {
            console.log(err.toString(), siteUrl, status);
        }
    });

    return { type: types.VALIDATE_HTML, siteUrl };
}