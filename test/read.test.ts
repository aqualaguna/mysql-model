import MysqlModel from '../src';
import { CollectionCaseType } from "../src/chain/1.base";
import Connection from '../src/Connection';
import { connectToTestDatabase } from './helper';
import { now } from '../src/type';

class Authors extends MysqlModel {
    attribute = {
        first_name: '',
        last_name: '',
        email: '',
        birthdate: new Date(),
        added: now
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

describe('Read Class Test', () => {
    
    test('read by id', async () => {
        let author = await Authors.find(1);
        expect(author).toBeDefined();
        expect(author.id).toBe(1);
    });

    test('read by not existing id', async () => {
        let author = await Authors.find(1000);
        expect(author).toBeNull();
    });

    test('read first', async () => {
        let author = await Authors.first();
        expect(author).toBeDefined();
        expect(author.id).toBe(1);
    });
    
    test('read multiple id', async () => {
        let author = await Authors.find([1, 2]);
        expect(author).toBeDefined();
        expect(Array.isArray(author)).toBeTruthy();
        expect(author.map((auth : any) => auth.id)).toContain(1);
        expect(author.map((auth : any) => auth.id)).toContain(2);
    });

    test('read all', async () => {
        let author = await Authors.all();
        expect(author).toBeDefined();
        expect(Array.isArray(author)).toBeTruthy();
        expect(author.length).toBeGreaterThan(1);
    });
    
})