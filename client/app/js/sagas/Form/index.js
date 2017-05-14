import { put, call } from 'redux-saga/effects';
import { startSubmit, stopSubmit, reset, SubmissionError } from 'redux-form';


export default function* formSaga( formId, apiSaga, ...apiSagaArgs ) {
    // Start form submit
    yield put( startSubmit( formId ) );

    try {
        yield call( apiSaga, ...apiSagaArgs );

        // Success
        debugger;
        yield put( reset( formId ) );
        yield put( stopSubmit( formId ) );
    }
    catch ( err ) {
        if (err instanceof SubmissionError) {
            debugger;

            yield put( stopSubmit( formId, err.errors ) );
        }
        else {
            debugger;
            console.error( err );
            yield put( stopSubmit( formId, { _error: err.message } ) );
        }
    }
}