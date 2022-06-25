const {
    Node,
    Schema,
    fields
} = require('@mayahq/module-sdk');
const Field = require('@mayahq/module-sdk/src/field');

class Weather extends Node {
    constructor(node, RED, opts) {
        super(node, RED, {
            ...opts,
            // masterKey: 'You can set this property to make the node fall back to this key if Maya does not provide one'
        })
    }

    static schema = new Schema({
        name: 'weather',
        label: 'weather',
        category: 'Temp',
        isConfig: false,
        fields: {
            // Whatever custom fields the node needs.
            city: new fields.Typed({type:"str",defaultVal:"London",allowedTypes:["msg","str"]})
        },

    })

    onInit() {
        // Do something on initialization of node
    }

    async onMessage(msg, vals) {
        // Handle the message. The returned value will
        // be sent as the message to any further nodes.
        console.log(msg);
	    return msg;
    }
}

module.exports = Weather
