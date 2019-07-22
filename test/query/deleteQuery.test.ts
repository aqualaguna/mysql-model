import MysqlModel from '../../src';
import { connectToTestDatabase } from '../helper';

class Authors extends MysqlModel {
    attribute = {
        first_name: '',
        last_name: '',
        email: '',
        birthdate: new Date()
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
        let author = new Authors();
        author.fill({
            first_name: 'test',
            last_name: 'test',
            email: 'update@mail.com',
            birthdate: new Date()
        });
        await author.save();
        let result = await Authors.whereLike('first_name', '%tes%').runDelete();
        expect(result).toBeTruthy();
        expect((await Authors.whereLike('first_name', '%tes%').runGet()).length).toBe(0);
    });

});
