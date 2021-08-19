/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */

import { configure, makeAutoObservable, makeObservable, observable, action, computed } from 'mobx'


export const counter = observable({
    count: 0
})

