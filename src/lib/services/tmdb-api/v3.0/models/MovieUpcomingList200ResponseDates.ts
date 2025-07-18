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
 * @interface MovieUpcomingList200ResponseDates
 */
export interface MovieUpcomingList200ResponseDates {
    /**
     * 
     * @type {string}
     * @memberof MovieUpcomingList200ResponseDates
     */
    maximum?: string;
    /**
     * 
     * @type {string}
     * @memberof MovieUpcomingList200ResponseDates
     */
    minimum?: string;
}

/**
 * Check if a given object implements the MovieUpcomingList200ResponseDates interface.
 */
export function instanceOfMovieUpcomingList200ResponseDates(value: object): value is MovieUpcomingList200ResponseDates {
    return true;
}

export function MovieUpcomingList200ResponseDatesFromJSON(json: any): MovieUpcomingList200ResponseDates {
    return MovieUpcomingList200ResponseDatesFromJSONTyped(json, false);
}

export function MovieUpcomingList200ResponseDatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieUpcomingList200ResponseDates {
    if (json == null) {
        return json;
    }
    return {
        
        'maximum': json['maximum'] == null ? undefined : json['maximum'],
        'minimum': json['minimum'] == null ? undefined : json['minimum'],
    };
}

export function MovieUpcomingList200ResponseDatesToJSON(value?: MovieUpcomingList200ResponseDates | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'maximum': value['maximum'],
        'minimum': value['minimum'],
    };
}

