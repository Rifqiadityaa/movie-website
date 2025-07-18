/* tslint:disable */
/* eslint-disable */
/**
 * TMDB API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CertificationsTvList200ResponseCertificationsSEInner
 */
export interface CertificationsTvList200ResponseCertificationsSEInner {
    /**
     * 
     * @type {string}
     * @memberof CertificationsTvList200ResponseCertificationsSEInner
     */
    certification?: string;
    /**
     * 
     * @type {string}
     * @memberof CertificationsTvList200ResponseCertificationsSEInner
     */
    meaning?: string;
    /**
     * 
     * @type {number}
     * @memberof CertificationsTvList200ResponseCertificationsSEInner
     */
    order?: number;
}

/**
 * Check if a given object implements the CertificationsTvList200ResponseCertificationsSEInner interface.
 */
export function instanceOfCertificationsTvList200ResponseCertificationsSEInner(value: object): value is CertificationsTvList200ResponseCertificationsSEInner {
    return true;
}

export function CertificationsTvList200ResponseCertificationsSEInnerFromJSON(json: any): CertificationsTvList200ResponseCertificationsSEInner {
    return CertificationsTvList200ResponseCertificationsSEInnerFromJSONTyped(json, false);
}

export function CertificationsTvList200ResponseCertificationsSEInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificationsTvList200ResponseCertificationsSEInner {
    if (json == null) {
        return json;
    }
    return {
        
        'certification': json['certification'] == null ? undefined : json['certification'],
        'meaning': json['meaning'] == null ? undefined : json['meaning'],
        'order': json['order'] == null ? undefined : json['order'],
    };
}

export function CertificationsTvList200ResponseCertificationsSEInnerToJSON(value?: CertificationsTvList200ResponseCertificationsSEInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'certification': value['certification'],
        'meaning': value['meaning'],
        'order': value['order'],
    };
}

