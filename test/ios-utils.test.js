'use strict';

const iOSUtils = require('..');
const assert = require('assert');
const _ = require('../lib/ios-utils');

describe('test', function() {
  it('should be ok', function *() {
    var xcodePath = yield iOSUtils.getXcodePath();
    assert.ok(xcodePath);
    console.log(xcodePath);
    var xcodeVersion = yield iOSUtils.getXcodeVersion();
    assert.ok(xcodeVersion);
    console.log(xcodeVersion);
    var iOSSDKVersion = yield iOSUtils.getIOSSDKVersion();
    assert.ok(iOSSDKVersion);
    console.log(iOSSDKVersion);
  });
});

describe('getDeviceInfo test', () => {
  let res;
  it('getDeviceInfo()', () => {
    res = _.getDeviceInfo('00008020-001D4D38XXXXXXXX');
    assert.equal(res.isIOS, true);
    assert.equal(res.isRealIOS, true);
    res = _.getDeviceInfo('B8B6B1F5-30E0-401B-B1CE-70E4F39937A5');
    assert.equal(res.isIOS, true);
    assert.equal(res.isRealIOS, false);
  });
});