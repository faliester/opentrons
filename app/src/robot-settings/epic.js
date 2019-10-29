// @flow
import { ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import { makeRobotApiRequest } from '../robot-api/utils'
import { FETCH_SETTINGS, UPDATE_SETTING } from './constants'

import type { Epic } from '../types'
import type { RobotSettingsAction } from './types'

export const robotSettingsEpic: Epic = action$ => {
  return action$.pipe(
    ofType(FETCH_SETTINGS, UPDATE_SETTING),
    switchMap<RobotSettingsAction, _, _>(a => {
      return makeRobotApiRequest(a.payload, {})
    })
  )
}