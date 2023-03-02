import notificationReducer, {
    initialNotificationState,
} from './notificationReducer';


describe('courseReducer', function () {
    it('initial state', function () {
        const state = notificationReducer(undefined, {});
        expect(state).toEqual(initialNotificationState);
    });
})