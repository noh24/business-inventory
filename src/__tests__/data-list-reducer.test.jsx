import { describe, expect, it } from 'vitest';
import dataListReducer from '../reducers/data-list-reducer';

describe('dataListReducer', () => {
  
  it('should return default state if there is no action type passed into the reducer', () => {
    expect(dataListReducer({ }, { type: null })).toEqual({ });
  })
})