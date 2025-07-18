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
import type { CollectionDetails200ResponsePartsInner } from './CollectionDetails200ResponsePartsInner';
import {
    CollectionDetails200ResponsePartsInnerFromJSON,
    CollectionDetails200ResponsePartsInnerFromJSONTyped,
    CollectionDetails200ResponsePartsInnerToJSON,
} from './CollectionDetails200ResponsePartsInner';

/**
 * 
 * @export
 * @interface CollectionDetails200Response
 */
export interface CollectionDetails200Response {
    /**
     * 
     * @type {number}
     * @memberof CollectionDetails200Response
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof CollectionDetails200Response
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CollectionDetails200Response
     */
    overview?: string;
    /**
     * 
     * @type {string}
     * @memberof CollectionDetails200Response
     */
    poster_path?: string;
    /**
     * 
     * @type {string}
     * @memberof CollectionDetails200Response
     */
    backdrop_path?: string;
    /**
     * 
     * @type {Array<CollectionDetails200ResponsePartsInner>}
     * @memberof CollectionDetails200Response
     */
    parts?: Array<CollectionDetails200ResponsePartsInner>;
}

/**
 * Check if a given object implements the CollectionDetails200Response interface.
 */
export function instanceOfCollectionDetails200Response(value: object): value is CollectionDetails200Response {
    return true;
}

export function CollectionDetails200ResponseFromJSON(json: any): CollectionDetails200Response {
    return CollectionDetails200ResponseFromJSONTyped(json, false);
}

export function CollectionDetails200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionDetails200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'overview': json['overview'] == null ? undefined : json['overview'],
        'poster_path': json['poster_path'] == null ? undefined : json['poster_path'],
        'backdrop_path': json['backdrop_path'] == null ? undefined : json['backdrop_path'],
        'parts': json['parts'] == null ? undefined : ((json['parts'] as Array<any>).map(CollectionDetails200ResponsePartsInnerFromJSON)),
    };
}

export function CollectionDetails200ResponseToJSON(value?: CollectionDetails200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'overview': value['overview'],
        'poster_path': value['poster_path'],
        'backdrop_path': value['backdrop_path'],
        'parts': value['parts'] == null ? undefined : ((value['parts'] as Array<any>).map(CollectionDetails200ResponsePartsInnerToJSON)),
    };
}

