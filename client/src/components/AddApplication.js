import React from 'react';
import {connect} from 'react-redux';
import { addApplication } from '../actions/applications';

const AddApplication = ({dispatch}) => {
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addApplication(input.value));
                    input.value = '';
                }}
            >
                <div className="form-group">
                    <label htmlFor="application">Název</label>
                    <input
                        ref={label => {
                            input = label;
                        }}
                        type="text" className="form-control" id="application" aria-describedby="emailHelp" placeholder="Vlož název aplikace"
                    />
                    <small id="emailHelp" className="form-text text-muted">Vlož název aplikace</small>
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Application
                </button>
            </form>
        </div>
    );
};
export default connect()(AddApplication);


