'use strict'
import {NativeModules} from 'react-native';
const  AppleHealthKit = NativeModules.RCTAppleHealthKit;

import { Permissions } from './Constants/Permissions'
import { Units } from './Constants/Units'

let HealthKit = {
	Constants: {
		Permissions: Permissions,
		Units: Units,
	}
};
for(let key in AppleHealthKit) {
	HealthKit[key] = AppleHealthKit[key];
}

export default HealthKit
module.exports = HealthKit;
