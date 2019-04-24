import * as types from './actionTypes';
import { ajax } from 'jquery';

export function validateHtml(url) {
    return (dispatch) => {
        let xhr = null;

        xhr && xhr.abort();

        ajax({
            url: 'https://validator.w3.org/nu/',
            data: {
                doc: url,
                showSource: 'yes',      // Only `yes` is supported
                level: 'error',         // Only `error` is supported. Informative messages and warnings aren't supported
                out: 'json',            // Choose: xhtml, XML, json, gnu, text; or none, then the choice is default `HTML`
                //parser: 'html5',      // Choose: html, html5, xml, xmldtd; or none, then the choice is based on the `Content-Type`
            },
            async: true,
            dataType: 'json',
            complete: (data) => { xhr = null; },
            success: (data) => { dispatch({type: types.VALIDATE_HTML, value: data}) },
            error: (error) => { dispatch({type: types.VALIDATE_HTML, error}) },
        });

    }
}

export function checkLinks(dispatch, url) {
    return (dispatch) => {
        let xhr = null;

        xhr && xhr.abort();

        ajax({
            url: 'https://validator.w3.org/checklink',
            data: {
                uri: url,
                hide_type: 'all',
                check: 'check',
                recursive: 'on',
                depth: 2
            },
            dataType: 'json',
            complete: () => { xhr = null; },
            success: (data) => { dispatch({ type: types.VALIDATE_LINKS, data }) },
            error: (error) => { dispatch({ type: types.VALIDATE_LINKS, error }) }
        })
    }
}

export function validateCSS(dispatch, url) {
    return (dispatch) => {
        let xhr = null;

        xhr && xhr.abort();

        ajax({
            url: 'http://jigsaw.w3.org/css-validator/validator',
            data: {
                uri: url,
            },
            dataType: 'json',
            complete: () => { xhr = null; },
            success: (data) => { dispatch({ type: types.VALIDATE_CSS, data }) },
            error: (error) => { dispatch({ type: types.VALIDATE_CSS, error }) }
        })
    }
}