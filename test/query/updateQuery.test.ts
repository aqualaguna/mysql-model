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
let author_ids: any = [];
describe('update query Class Test', () => {
    
    test('update by query row', async () => {
        let author = new Authors();
        author.fill({
            first_name: 'test',
            last_name: 'test',
            email: 'update@mail.com',
            birthdate: new Date()
        });
        await author.save();
        author_ids.push(author.id)
        let result = await Authors.whereLike('first_name', '%tes%').runUpdate({
            birthdate: null
        });
        expect(result).toBeTruthy();
        let data = await Authors.whereLike('first_name', '%tes%').runGet();
        expect(data[0].birthdate).toBeNull();
    });


});
afterAll(async () => {
    if (author_ids.length > 0) {
        await Authors.delete(author_ids);
    }
})