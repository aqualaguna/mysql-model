import MysqlModel from '../src';
import { CollectionCaseType } from "../src/chain/1.base";
import Connection from '../src/Connection';
import { connectToTestDatabase } from './helper';

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

describe('Create Class Test', () => {
    
    test('create row', async () => {
        let t = new Authors();
        t.first_name = 'david';
        t.last_name = 'gantt';
        t.email = 'test@mail.com';
        t.birthdate = new Date('1996-09-09');
        expect(await t.save()).toBeTruthy();
    });
})