"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleNode = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const axios_1 = __importDefault(require("axios"));
class ExampleNode {
    constructor() {
        this.description = {
            displayName: 'Example Node',
            name: 'exampleNode',
            group: ['transform'],
            version: 1,
            description: 'Basic Example Node',
            defaults: {
                name: 'Example Node',
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'Name',
                    name: 'name',
                    type: 'string',
                    default: '',
                    placeholder: 'name...',
                    description: 'The description text',
                },
                {
                    displayName: 'Phone Number',
                    name: 'phone',
                    type: 'string',
                    default: '',
                    placeholder: 'phone...',
                    description: 'The description text',
                },
                {
                    displayName: 'Email',
                    name: 'email',
                    type: 'string',
                    default: '',
                    placeholder: 'email...',
                    description: 'The description text',
                },
                {
                    displayName: "Source",
                    name: "source",
                    type: "options",
                    default: '',
                    placeholder: 'Placeholder value',
                    description: 'The description text',
                    typeOptions: {
                        loadOptionsMethod: 'getSource',
                    },
                },
                {
                    displayName: 'Source Details',
                    name: 'sourcedetails',
                    type: 'string',
                    default: '',
                    placeholder: 'Source Details...',
                    description: 'The description text',
                },
                {
                    displayName: 'Hidden Source',
                    name: 'hiddensource',
                    type: 'string',
                    default: '',
                    placeholder: 'Hidden Source...',
                    description: 'The description text',
                },
                {
                    displayName: "ad_language",
                    name: "ad_language",
                    type: "options",
                    default: '',
                    placeholder: 'Placeholder value',
                    description: 'The description text',
                    typeOptions: {
                        loadOptionsMethod: 'ad_language',
                    },
                },
                {
                    displayName: "Ad_Project",
                    name: "Ad_Project",
                    type: "options",
                    default: '',
                    placeholder: 'Placeholder value',
                    description: 'The description text',
                    typeOptions: {
                        loadOptionsMethod: 'getProjects',
                    },
                },
                {
                    displayName: 'IP Address',
                    name: 'ipaddress',
                    type: 'string',
                    default: '',
                    placeholder: 'IP Address...',
                    description: 'The description text',
                },
                {
                    displayName: 'URL',
                    name: 'url',
                    type: 'string',
                    default: '',
                    placeholder: 'Ref URL...',
                    description: 'The description text',
                },
                {
                    displayName: 'Marker',
                    name: 'marker',
                    type: 'string',
                    default: '',
                    placeholder: 'Marker...',
                    description: 'The description text',
                },
                {
                    displayName: 'GA',
                    name: 'ga',
                    type: 'string',
                    default: '',
                    placeholder: 'GA...',
                    description: 'The description text',
                },
                {
                    displayName: 'UTM Text',
                    name: 'utm',
                    type: 'string',
                    default: '',
                    placeholder: 'UTM...',
                    description: 'The description text',
                },
            ],
        };
        this.methods = {
            loadOptions: {
                async getProjects() {
                    const response = await axios_1.default.get('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.lead.userfield.list?filter%5BFIELD_NAME%5D=UF_CRM_1568907438');
                    const data = response.data.result[0].LIST.map((item) => ({ name: item.VALUE, value: item.ID }));
                    return data;
                },
                async getSource() {
                    const response = await axios_1.default.get('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.status.list?filter[ENTITY_ID]=SOURCE');
                    const data = response.data.result.map((item) => ({ name: item.NAME, value: item.ID }));
                    return data;
                },
                async ad_language() {
                    try {
                        const response = await axios_1.default.get('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.lead.userfield.list?filter[FIELD_NAME]=UF_CRM_1553165368131');
                        const data = response.data.result[0].LIST.map((item) => ({ name: item.VALUE, value: item.ID }));
                        return data;
                    }
                    catch (error) {
                        throw error;
                    }
                }
            },
        };
    }
    async execute() {
        const items = this.getInputData();
        let item;
        let NAME;
        let PHONE;
        let EMAIL;
        let SOURCE_ID;
        let UF_CRM_1553506792;
        let UF_CRM_1555592415;
        let UF_CRM_1553165368131;
        let UF_CRM_1568907438;
        let UF_CRM_1584379751;
        let UF_CRM_1612173846;
        let UF_CRM_1612173967;
        let UF_CRM_1614422466;
        let UTM;
        for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
            try {
                NAME = this.getNodeParameter('name', itemIndex, '');
                PHONE = this.getNodeParameter('phone', itemIndex, '');
                EMAIL = this.getNodeParameter('email', itemIndex, '');
                SOURCE_ID = this.getNodeParameter('source', itemIndex, '');
                UF_CRM_1553506792 = this.getNodeParameter('sourcedetails', itemIndex, '');
                UF_CRM_1555592415 = this.getNodeParameter('hiddensource', itemIndex, '');
                UF_CRM_1553165368131 = this.getNodeParameter('ad_language', itemIndex, '');
                UF_CRM_1568907438 = this.getNodeParameter('Ad_Project', itemIndex, '');
                UF_CRM_1584379751 = this.getNodeParameter('ipaddress', itemIndex, '');
                UF_CRM_1612173846 = this.getNodeParameter('url', itemIndex, '');
                UF_CRM_1612173967 = this.getNodeParameter('marker', itemIndex, '');
                UF_CRM_1614422466 = this.getNodeParameter('ga', itemIndex, '');
                UTM = this.getNodeParameter('utm', itemIndex, '');
                item = items[itemIndex];
                item.json['name'] = NAME;
                item.json['tel'] = PHONE;
                item.json['Email'] = EMAIL;
                item.json['Source'] = SOURCE_ID;
                item.json['sourcedetails'] = UF_CRM_1553506792;
                item.json['hiddensource'] = UF_CRM_1555592415;
                item.json['ad_language'] = UF_CRM_1553165368131;
                item.json['Ad_Project'] = UF_CRM_1568907438;
                item.json['ipaddress'] = UF_CRM_1584379751;
                item.json['url'] = UF_CRM_1612173846;
                item.json['marker'] = UF_CRM_1612173967;
                item.json['ga'] = UF_CRM_1614422466;
                item.json['utm'] = UTM;
                item.json = {
                    fields: {
                        NAME,
                        PHONE: [{ VALUE: PHONE, VALUE_TYPE: "WORK" }],
                        EMAIL: [{ VALUE: EMAIL, VALUE_TYPE: "WORK" }],
                        SOURCE_ID,
                        UF_CRM_1553506792,
                        UF_CRM_1555592415,
                        UF_CRM_1553165368131,
                        UF_CRM_1568907438,
                        UF_CRM_1584379751,
                        UF_CRM_1612173846,
                        UF_CRM_1612173967,
                        UF_CRM_1614422466,
                        UTM
                    }
                };
                await axios_1.default.post('https://crm.axcap.ae/rest/1/e6w2jdc3uuz20c84/crm.lead.add.json', item.json);
            }
            catch (error) {
                if (this.continueOnFail()) {
                    items.push({ json: this.getInputData(itemIndex)[0].json, error, pairedItem: itemIndex });
                }
                else {
                    if (error.context) {
                        error.context.itemIndex = itemIndex;
                        throw error;
                    }
                    throw new n8n_workflow_1.NodeOperationError(this.getNode(), error, {
                        itemIndex,
                    });
                }
            }
        }
        return this.prepareOutputData(items);
    }
}
exports.ExampleNode = ExampleNode;
//# sourceMappingURL=ExampleNode.node.js.map