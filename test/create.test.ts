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
    
    test('fill function', async () => {
        let t = new Authors();
        t.fill({
            first_name :  'david',
            last_name :  'gantt',
            email :  'test@mail.com',
            birthdate :  new Date('1996-09-09'),
        })
        
        expect(t.first_name).toBe('david');
        expect(t.last_name).toBe('gantt');
        expect(t.email).toBe('test@mail.com');
        expect((t.birthdate as Date).getTime()).toBe((new Date('1996-09-09')).getTime());
    });

    test('create row', async () => {
        let t = new Authors();
        t.first_name = 'david';
        t.last_name = 'gantt';
        t.email = 'hello@mail.com';
        t.birthdate = new Date('1996-09-09');
        expect(await t.save()).toBeTruthy();
    });

    test('create row second method', async () => {
        let author = await Authors.create({
            first_name: 'david',
            last_name : 'gantt',
            email : 'hello2@mail.com',
            birthdate : new Date('1996-09-09'),
        })
        expect(author.id).toBeDefined();
        expect(author).toBeInstanceOf(Authors);
    });
})