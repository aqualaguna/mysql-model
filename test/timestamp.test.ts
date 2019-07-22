import MysqlModel from '../src';
import { CollectionCaseType } from "../src/chain/1.base";
import Connection from '../src/Connection';
import { connectToTestDatabase } from './helper';

class Authors extends MysqlModel {
    attribute = {
        first_name: '',
        last_name: '',
        email: '',
        birthdate: new Date(),
    };
    timestamp = true;
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
let author_id : any;
describe('Timestamp Class Test', () => {

    test('create row with timestamp', async () => {
        let t = new Authors();
        t.first_name = 'david';
        t.last_name = 'gantt';
        t.email = 'hello@mail.com';
        t.birthdate = new Date('1996-09-09');
        expect(await t.save()).toBeTruthy();
        expect(t.created_at).toBeInstanceOf(Date);
        expect(t.updated_at).toBeInstanceOf(Date);
        author_id = t.id;
    });

    test('update something for record previously', async () => {
        expect(author_id).toBeDefined();
        let author = await Authors.find(author_id);
        expect(author).not.toBeNull();
        author.first_name = 'tom';
        await author.save();
        // query again.
        await author.refresh();
        // make sure the type is right
        expect(author.created_at).toBeInstanceOf(Date);
        expect(author.updated_at).toBeInstanceOf(Date);
        // updated at must be greater than created at.
        expect(author.created_at.getTime() < author.updated_at.getTime()).toBeTruthy();
    });
    afterAll(async () => {
        if (author_id) {
            await Authors.delete([author_id]);
        }
    })
})