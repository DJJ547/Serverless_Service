const Responses = require('./API_Responses');

exports.handler = async event => {
    console.log('event', event);

    if (!event.pathParameters || !event.pathParameters.ID) {
        // failed without an ID
        return Responses._400({ message: 'missing the ID from the path' });
    }

    let ID = event.pathParameters.ID;

    if (data[ID]) {
        // return the data
        return Responses._200(data[ID]);
    }

    //failed as ID not in the data
    return Responses._400({ message: 'no ID in data' });
};

const data = {
    1234: { firstName: 'Jiajun', lastName: 'Dai' },
    7893: { firstName: 'Sarah', lastName: 'Yu' },
    5132: { firstName: 'Walton', lastName: 'Ma' },
    1234: { firstName: 'Yifu', lastName: 'Fang' },
};
