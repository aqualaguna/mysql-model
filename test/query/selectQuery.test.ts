import MysqlModel from '../../src';
import { connectToTestDatabase } from '../helper';

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
        console.log(result);
        expect(result.length == 2).toBeTruthy();
    });

    test('query row wherein', async () => {
        let result = await Authors.whereIn('first_name', ['Nikita', 'Jamal']).runGet();
        expect(result).toBeInstanceOf(Array);
        expect(result.length == 2).toBeTruthy();
        expect(result.map((res: any) => res.first_name).some((t : string) => t == 'Nikita')).toBeTruthy();
        expect(result.map((res: any) => res.first_name).some((t : string) => t == 'Jamal')).toBeTruthy();
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
        console.log(result);
        expect(result).toBeInstanceOf(Array);
        expect(result.length == 1).toBeTruthy();
        expect(result[0].birthdate).toBeNull();
    });

    test('query row whereNotNull', async () => {
        // create a record that has null attribute
        expect(author_ids.length == 1).toBeTruthy();
        
        let result = await Authors.whereNotNull('birthdate').runGet();
        let all = await Authors.all();
        expect(result).toBeInstanceOf(Array);
        expect(result.length == all.length - 1).toBeTruthy();
    });

    test('query row where equal', async () => {
        let result = await Authors.where('MONTH(birthdate)', '=', 12).runGet();
        expect(result).toBeInstanceOf(Array);
        expect(result.length > 1).toBeTruthy();
        // make sure its december
        expect((result[0].birthdate as Date).getMonth()).toBe(11);
    });

    test('query row where greater', async () => {
        let result = await Authors.where('MONTH(birthdate)', '>', 6).runGet();
        expect(result).toBeInstanceOf(Array);
        expect(result.length > 1).toBeTruthy();
        // make sure its month is greater then 6
        let months = result.map( (r : any) => r.birthdate.getMonth() + 1);
        expect(months).not.toEqual( expect.arrayContaining([
            1, 2, 3, 4, 5, 6
        ]));
    });
    test('query row where greater than equal', async () => {
        let result = await Authors.where('MONTH(birthdate)', '>=', 6).runGet();
        expect(result).toBeInstanceOf(Array);
        expect(result.length > 1).toBeTruthy();
        // make sure its month is greater then 6
        let months = result.map( (r : any) => r.birthdate.getMonth() + 1);
        expect(months).not.toEqual(expect.arrayContaining([
            1, 2, 3, 4, 5
        ]));
    });

    test('query row where less than', async () => {
        let result = await Authors.where('MONTH(birthdate)', '<', 6).runGet();
        expect(result).toBeInstanceOf(Array);
        expect(result.length > 1).toBeTruthy();
        // make sure its month is greater then 6
        let months = result.map( (r : any) => r.birthdate.getMonth() + 1);
        expect(months).not.toEqual(expect.arrayContaining([
            6, 7, 8, 9, 10, 11, 12
        ]));
    });

    test('query row where less than equal', async () => {
        
        let result = await Authors.where('MONTH(birthdate)', '<=', 6).runGet();
        expect(result).toBeInstanceOf(Array);
        expect(result.length > 1).toBeTruthy();
        // make sure its month is greater then 6
        let months = result.map( (r : any) => r.birthdate.getMonth() + 1);
        expect(months).not.toEqual(expect.arrayContaining([
            7, 8, 9, 10, 11, 12
        ]));
    });

    test('logic operator and', async () => {
        
        let result = await Authors
            .where('MONTH(birthdate)', '>=', 6)
            .where('MONTH(birthdate)', '<=', 9)
            .runGet();
        expect(result).toBeInstanceOf(Array);
        expect(result.length > 1).toBeTruthy();
        
        let months = result.map( (r : any) => r.birthdate.getMonth() + 1);
        expect(months).not.toEqual(expect.arrayContaining([
            1, 2, 3, 4, 5, 7, 8, 10, 11, 12
        ]));
    });

    test('logic operator or', async () => {
        
        let result = await Authors
            .where('MONTH(birthdate)', '<', 6)
            .whereOr('MONTH(birthdate)', '>', 9)
            .runGet();
        expect(result).toBeInstanceOf(Array);
        expect(result.length > 1).toBeTruthy();
        
        let months = result.map( (r : any) => r.birthdate.getMonth() + 1);
        expect(months).not.toEqual(expect.arrayContaining([
            6, 7, 8, 9
        ]));
    });

    test('logic operator xor', async () => {
        
        let result = await Authors
            .where('first_name', '=', 'Emelia')
            .whereXor('last_name', '=', 'Cronin')
            .runGet();
        expect(result).toBeInstanceOf(Array);
        expect(result.length == 1).toBeTruthy();
        expect(result[0].first_name).toBe('Emelia');
        expect(result[0].last_name).not.toBe('Cronin');
    });
});

afterAll(async () => {
    if(author_ids.length > 0) {
        await Authors.delete(author_ids);
    }
})
