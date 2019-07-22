import MysqlModel from '../../src';
import { connectToTestDatabase } from '../helper';

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

describe('delete Class Test', () => {
    
    test('delete by query row', async () => {
        let result = await Authors.whereLike('first_name', '%d%').limit(2).runDelete();
        expect(result).toBeTruthy();
        expect((await Authors.whereLike('first_name', '%d%').limit(2).runGet()).length).toBe(0);
    });

});
