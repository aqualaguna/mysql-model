import MysqlModel from '../src';
import { CollectionCaseType } from "../src/chain/1.base";
import Connection from '../src/Connection';
import { connectToTestDatabase } from './helper';

class UserDetail extends MysqlModel {
    attribute = {
        name: '',
        email: '',
        password: '',
        description: ''
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

describe('Base Class Test', () => {
    test('basic get class name', () => {
        expect(UserDetail.getTableName()).toBe('user_detail');
        expect(UserDetail.getTableName(CollectionCaseType.ConstantCase)).toBe('USER_DETAIL');
        expect(UserDetail.getTableName(CollectionCaseType.CamelCase)).toBe('userDetail');
        expect(UserDetail.getTableName(CollectionCaseType.HeaderCase)).toBe('User-Detail');
        expect(UserDetail.getTableName(CollectionCaseType.ParamCase)).toBe('user-detail');
        expect(UserDetail.getTableName(CollectionCaseType.PascalCase)).toBe('UserDetail');
    });

    test('test convert model to ordinary object', () => {
        let t = new UserDetail();
        t.name = 'test';
        t.email = 'test2';
        t.password = 'test3';
        t.description = 'test4';
        const temp = t.toObject();
        expect(temp).toEqual(expect.objectContaining({
            name: 'test',
            email: 'test2',
            password: 'test3',
            description: 'test4',
        }));
    });
})