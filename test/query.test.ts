import MysqlModel from '../src';
import { connectToTestDatabase } from './helper';

class Authors extends MysqlModel {
    attribute = {
        first_name: '',
        last_name: '',
        email: '',
        birthdate: new Date(),
        added: new Date()
    };
    constructor() {
        super();
        this.init();
    }
}

// connect to firebase
beforeAll((done) => {
    connectToTestDatabase();
    done();
})

describe('query Class Test', () => {
    
    test('query row', async () => {
        console.log(await Authors.whereLike('first_name', '%d%').runGet())
    });

});
