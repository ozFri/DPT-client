/**
 * 
 * DPT
 * 
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 * 
 * Version: 1.0.0
 * 
 * Generated by OpenAPI Generator: https://openapi-generator.tech
 */

// package openapi3graphql-server

// dialogs_api

export default {
    Query: {

        // @return Dialog
        ListDialogs: ($limit) => {
            return {
                "limit": "56"
            };
        },

        // @return Dialog
        ShowDialogById: ($dialogId) => {
            return {
                "dialogId": "dialogId_example"
            };
        },

    },

    Mutation: {

        // @return 
        CreateDialogs: () => {
            return {
                
            };
        },

    }
}