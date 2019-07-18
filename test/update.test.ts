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

describe('update Class Test', () => {
    
    test('update row', async () => {
        let t = new Authors();
        t.first_name = 'david';
        t.last_name = 'gantt';
        t.email = 'hello@mail.com';
        t.birthdate = new Date('1996-09-09');
        
        expect(await t.save()).toBeTruthy();
        let id = t.id;
        expect(await t.delete()).toBeTruthy();
        // check the record
        let temp = await Authors.find(id);
        expect(temp).toBeNull();
    });

});
