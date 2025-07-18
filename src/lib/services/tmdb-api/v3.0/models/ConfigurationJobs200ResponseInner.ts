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
 * @interface ConfigurationJobs200ResponseInner
 */
export interface ConfigurationJobs200ResponseInner {
    /**
     * 
     * @type {string}
     * @memberof ConfigurationJobs200ResponseInner
     */
    department?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ConfigurationJobs200ResponseInner
     */
    jobs?: Array<string>;
}

/**
 * Check if a given object implements the ConfigurationJobs200ResponseInner interface.
 */
export function instanceOfConfigurationJobs200ResponseInner(value: object): value is ConfigurationJobs200ResponseInner {
    return true;
}

export function ConfigurationJobs200ResponseInnerFromJSON(json: any): ConfigurationJobs200ResponseInner {
    return ConfigurationJobs200ResponseInnerFromJSONTyped(json, false);
}

export function ConfigurationJobs200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationJobs200ResponseInner {
    if (json == null) {
        return json;
    }
    return {
        
        'department': json['department'] == null ? undefined : json['department'],
        'jobs': json['jobs'] == null ? undefined : json['jobs'],
    };
}

export function ConfigurationJobs200ResponseInnerToJSON(value?: ConfigurationJobs200ResponseInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'department': value['department'],
        'jobs': value['jobs'],
    };
}

