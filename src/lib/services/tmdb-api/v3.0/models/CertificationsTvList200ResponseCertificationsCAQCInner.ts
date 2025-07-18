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
 * @interface CertificationsTvList200ResponseCertificationsCAQCInner
 */
export interface CertificationsTvList200ResponseCertificationsCAQCInner {
    /**
     * 
     * @type {string}
     * @memberof CertificationsTvList200ResponseCertificationsCAQCInner
     */
    certification?: string;
    /**
     * 
     * @type {string}
     * @memberof CertificationsTvList200ResponseCertificationsCAQCInner
     */
    meaning?: string;
    /**
     * 
     * @type {number}
     * @memberof CertificationsTvList200ResponseCertificationsCAQCInner
     */
    order?: number;
}

/**
 * Check if a given object implements the CertificationsTvList200ResponseCertificationsCAQCInner interface.
 */
export function instanceOfCertificationsTvList200ResponseCertificationsCAQCInner(value: object): value is CertificationsTvList200ResponseCertificationsCAQCInner {
    return true;
}

export function CertificationsTvList200ResponseCertificationsCAQCInnerFromJSON(json: any): CertificationsTvList200ResponseCertificationsCAQCInner {
    return CertificationsTvList200ResponseCertificationsCAQCInnerFromJSONTyped(json, false);
}

export function CertificationsTvList200ResponseCertificationsCAQCInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificationsTvList200ResponseCertificationsCAQCInner {
    if (json == null) {
        return json;
    }
    return {
        
        'certification': json['certification'] == null ? undefined : json['certification'],
        'meaning': json['meaning'] == null ? undefined : json['meaning'],
        'order': json['order'] == null ? undefined : json['order'],
    };
}

export function CertificationsTvList200ResponseCertificationsCAQCInnerToJSON(value?: CertificationsTvList200ResponseCertificationsCAQCInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'certification': value['certification'],
        'meaning': value['meaning'],
        'order': value['order'],
    };
}

