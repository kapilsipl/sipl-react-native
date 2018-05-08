import axios from 'axios'
import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE } from '../constants'
import { API } from '../config'

export function fetchPeopleFromAPI() {
    return (dispatch) => {
        dispatch(getPeople())
        axios.get(API.getPeople)
            .then((response) => {
                dispatch(getPeopleSuccess(response.data.results))
            })
            .catch((error) => {
                dispatch(getPeopleSuccess(json.results))
            });
    }
}

export function getPeople() {
    return {
        type: FETCHING_PEOPLE
    }
}

export function getPeopleSuccess(data) {
    return {
        type: FETCHING_PEOPLE_SUCCESS,
        data,
    }
}

export function getPeopleFailure() {
    return {
        type: FETCHING_PEOPLE_FAILURE
    }
}