import MysqlModel from '../src';
import { connectToTestDatabase } from './helper';

class Authors extends MysqlModel {
    attribute = {
        first_name: '',
        last_name: '',
        email: '',
        birthdate: new Date(),
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
let author_ids :any= [];
describe('update Class Test', () => {
    
    test('update row', async () => {
        let t = new Authors();
        t.first_name = 'david';
        t.last_name = 'gantt';
        t.email = 'hello@mail.com';
        t.birthdate = new Date('1996-09-09');
        
        expect(await t.save()).toBeTruthy();
        author_ids.push(t.id);
        await t.update({
            first_name: 'test'
        });
        expect(t.first_name).toBe('test');
    });

    test('update row static', async () => {
        let t = new Authors();
        t.first_name = 'david';
        t.last_name = 'gantt';
        t.email = 'hkldfna@mail.com';
        t.birthdate = new Date('1996-09-09');
        
        expect(await t.save()).toBeTruthy();
        author_ids.push(t.id);
        let result = await Authors.updateData(t.id, {
            first_name: 'test'
        });
        expect(result).toBeTruthy();
        await t.refresh();
        expect(t.first_name).toBe('test');
    });

});
afterAll(async () => {
    if (author_ids.length > 0) {
        await Authors.delete(author_ids);
    }
})
