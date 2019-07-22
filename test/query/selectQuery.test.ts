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
let author_ids : any = [];
// connect to firebase
beforeAll((done) => {
    connectToTestDatabase();
    done();
})

describe('query Class Test', () => {
    
    test('query row wherelike', async () => {
        let result = await Authors.whereLike('first_name', '%d%').limit(2).runGet();
        expect(result).toBeInstanceOf(Array);
        expect(result.length == 2).toBeTruthy();
    });

    test('query row wherein', async () => {
        let result = await Authors.whereIn('first_name', ['Thomas', 'Winona']).runGet();
        expect(result).toBeInstanceOf(Array);
        expect(result.length == 2).toBeTruthy();
        expect(result.map(res => res.first_name)).toContain([
            'Thomas',
            'Winona'
        ])
    });

    test('query row whereNull', async () => {
        // create a record that has null attribute
        let t = new Authors();
        t.first_name = 'david';
        t.last_name = 'gantt';
        t.email = 'hello@mail.com';
        t.birthdate = null;
        await t.save();
        author_ids.push(t.id);
        
        let result = await Authors.whereNull('birthdate').runGet();
        expect(result).toBeInstanceOf(Array);
        expect(result.length == 1).toBeTruthy();
        expect(result[0].birthdate).toBeNull();
    });

    test('query row whereNotNull', async () => {
        // create a record that has null attribute
        expect(author_ids.length == 1).toBeTruthy();
        
        let result = await Authors.whereNull('birthdate').runGet();
        expect(result).toBeInstanceOf(Array);
        expect(result.length == 1).toBeTruthy();
        expect(result[0].birthdate).toBeNull();
    });
});

afterAll(async () => {
    if(author_ids.length > 0) {
        await Authors.delete(author_ids);
    }
})
