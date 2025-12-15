/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************************************!*\
  !*** ./src/lastmile/lastmile.ts + 10 modules ***!
  \***********************************************/
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  captureSoftNavigationsAfterRouteChange: function() { return /* binding */ captureSoftNavigationsAfterRouteChange; }
});

;// CONCATENATED MODULE: ./src/lastmile/benchmarkAppConfig.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var BenchmarkAppConfig = /** @class */ (function () {
    function BenchmarkAppConfig() {
    }
    BenchmarkAppConfig.setAppConfig = function (config) {
        BenchmarkAppConfig.config = __assign(__assign({}, BenchmarkAppConfig.config), config);
    };
    BenchmarkAppConfig.getConfig = function () {
        return BenchmarkAppConfig.config;
    };
    BenchmarkAppConfig.config = {
        appId: -111,
        version: 'v4.0.11',
        appStatus: -111,
        isbenchmarkApp: 'true',
        publicTestsList: '[{"key":"92412","value":"https://lpulse.perflib.com/ipulse/ad/cp.com/creative/1p.gif"},{"key":"92413","value":"https://lpulse.perflib.com/ipulse/ad/cp.com/creative/25.jpg"},{"key":"92410","value":"https://kpulse.perflib.com/ipulse/ad/cp.com/creative/1p.gif"},{"key":"92411","value":"https://kpulse.perflib.com/ipulse/ad/cp.com/creative/25.jpg"},{"key":"92408","value":"https://jpulse.perflib.com/ipulse/ad/cp.com/creative/1p.gif"},{"key":"92409","value":"https://jpulse.perflib.com/ipulse/ad/cp.com/creative/25.jpg"},{"key":"92414","value":"https://apulse.perflib.com/ipulse/ad/cp.com/creative/1p.gif"},{"key":"92415","value":"https://apulse.perflib.com/ipulse/ad/cp.com/creative/25.jpg"},{"key":"92418","value":"https://xpulse.perflib.com/ipulse/ad/cp.com/creative/1p.gif"},{"key":"92419","value":"https://xpulse.perflib.com/ipulse/ad/cp.com/creative/25.jpg"}]',
        privateBenchmarkTestsList: '[{"DestinationUrls":[{"Id":99202,"Url":"https://lpulse.perflib.com/ipulse/ad/cp.com/creative/1p.gif"},{"Id":99214,"Url":"https://lpulse.perflib.com/ipulse/ad/cp.com/creative/25.jpg"}],"Locations":[],"ParentBenchmarkId":99200},{"DestinationUrls":[{"Id":104675,"Url":"https://ctchpnt.akamaized.net/ipulse/ad/cp.com/creative/1p.gif"}],"Locations":[],"ParentBenchmarkId":104674},{"DestinationUrls":[{"Id":105693,"Url":"https://ctchpnt.akamaized.net/ipulse/ad/cp.com/creative/1p.gif"},{"Id":111836,"Url":"https://xpulse.perflib.com/ipulse/ad/cp.com/creative/25.jpg"}],"Locations":[],"ParentBenchmarkId":104854}]',
        userCountry: -888
    };
    return BenchmarkAppConfig;
}());
/* harmony default export */ var benchmarkAppConfig = (BenchmarkAppConfig);

;// CONCATENATED MODULE: ./src/lastmile/InitLastMile.utils.ts
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var PUBLIC_TEST_PAIRS_FOR_PAGE_VIEW = 5;
var PRIVATE_TEST_PAIRS_FOR_PAGE_VIEW = 5;
var publicTestToRunByCountryWeights = function (testWeights, userCountry, testRuns) {
    var copyTestWeights = __spreadArray([], testWeights, true);
    var pickedAds = [];
    var pickOne = function (list) {
        var checkCountry = list.map(function (can) {
            if (!can.countries || can.countries.length === 0) {
                return can;
            }
            var hasCountry = can.countries.includes(userCountry);
            if (!hasCountry) {
                can.weight = 10;
            }
            return can;
        });
        var totalWeight = checkCountry.reduce(function (sum, ad) { return sum + ad.weight; }, 0);
        var randomNum = Math.random() * totalWeight;
        for (var _i = 0, checkCountry_1 = checkCountry; _i < checkCountry_1.length; _i++) {
            var ad = checkCountry_1[_i];
            if (randomNum < ad.weight)
                return ad;
            randomNum -= ad.weight;
        }
    };
    // delete ads which is pushed to the pickedAds
    // and remove them from copyTestWeights
    while (pickedAds.length < testRuns && copyTestWeights.length > 0) {
        var ad = pickOne(copyTestWeights);
        pickedAds.push(ad);
        // remove picked ad
        var index = copyTestWeights.indexOf(ad);
        copyTestWeights.splice(index, 1);
    }
    return pickedAds;
};
// Transform destinationUrls from PrivateTestObj[] to UrlDetail[]
var transformDestinationUrls = function (destinationUrls) {
    return destinationUrls.map(function (item) {
        return {
            id: item.Id,
            url: item.Url
        };
    });
};
// Convert and filter private benchmark tests based on user country
var convertAndFilterPrivateBenchmarkTestsByCountry = function (testConfig, userCountry) {
    var convertedTests = [];
    testConfig.forEach(function (test) {
        var _a;
        var testPair = {
            weight: 0,
            location: 0,
            urls: []
        };
        testPair.urls = transformDestinationUrls(test.DestinationUrls);
        var hasCountry = test.Locations.find(function (loc) { return loc.LocationId === userCountry; });
        var isExcluded = (_a = hasCountry === null || hasCountry === void 0 ? void 0 : hasCountry.isExclude) !== null && _a !== void 0 ? _a : false;
        if (isExcluded) {
            return;
        }
        testPair.weight = hasCountry ? hasCountry.Weight : 10;
        testPair.location = hasCountry ? hasCountry.LocationId : userCountry;
        convertedTests.push(testPair);
    });
    return convertedTests;
};
// Function to run private benchmark tests based on weights and user country
var privateTestToRunByCountryWeights = function (testConfig, testRuns) {
    var copyTestWeights = __spreadArray([], testConfig, true);
    var pickedAds = [];
    var pickOne = function (list) {
        var totalWeight = list.reduce(function (sum, ad) { return sum + ad.weight; }, 0);
        var randomNum = Math.random() * totalWeight;
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var ad = list_1[_i];
            if (randomNum < ad.weight)
                return ad;
            randomNum -= ad.weight;
        }
    };
    // delete ads which is pushed to the pickedAds
    // and remove them from copyTestWeights
    while (pickedAds.length < testRuns && copyTestWeights.length > 0) {
        var ad = pickOne(copyTestWeights);
        pickedAds.push(ad);
        // remove picked ad
        var index = copyTestWeights.indexOf(ad);
        copyTestWeights.splice(index, 1);
    }
    return pickedAds;
};
// map all public first pair test IDs with their country weights
var getAllMappedPublicTestsWithCountryWeights = function (testsToCreate, testWeightsByCountryJson) {
    if (testsToCreate.length % 2 !== 0) {
        console.error('[Catchpoint][Error] JSP - Lastmile: Public Test IDs for public tests should be in pairs.');
        return [];
    }
    var testWeightsByCountryList = [];
    var _loop_1 = function (i) {
        var firstTestId = testsToCreate[i].key;
        // add existing weight obj if available
        var existingWeightObj = testWeightsByCountryJson.find(function (weightObj) { return weightObj.id === firstTestId; });
        var weightByCountryObj = void 0;
        if (existingWeightObj) {
            weightByCountryObj = {
                id: firstTestId,
                countries: existingWeightObj.countries,
                weight: existingWeightObj.weight
            };
        }
        else {
            weightByCountryObj = {
                id: firstTestId,
                countries: [],
                weight: 10 // default weight
            };
        }
        testWeightsByCountryList.push(weightByCountryObj);
    };
    for (var i = 0; i < testsToCreate.length; i += 2) {
        _loop_1(i);
    }
    return testWeightsByCountryList;
};

;// CONCATENATED MODULE: ./src/lastmile/ConfigRequest.ts
var ConfigRequest = /** @class */ (function () {
    function ConfigRequest() {
    }
    ConfigRequest.prototype.toString = function () {
        var config = this.prepareConfigRequest();
        return JSON.stringify(config);
    };
    ConfigRequest.prototype.prepareConfigRequest = function () {
        var jsonConfig = new Object();
        jsonConfig['t'] = this.siteTypeFlags;
        jsonConfig['d'] = this.divisionId;
        jsonConfig['l'] = this.licenseKey;
        return jsonConfig;
    };
    return ConfigRequest;
}());


;// CONCATENATED MODULE: ./src/lastmile/ConfigResponse.ts
var ScheduledTest = /** @class */ (function () {
    function ScheduledTest(v, s, u, m, c) {
        this.v = v;
        this.s = s;
        this.u = u;
        this.m = m;
        this.c = c;
    }
    return ScheduledTest;
}());

var ConfigResponse = /** @class */ (function () {
    function ConfigResponse(v, freq_sec_diagnostics, monitor_type_bit_flags, tests_scheduled, machine_id, change_date, logger_time, error_message) {
        this.v = v;
        this.freq_sec_diagnostics = freq_sec_diagnostics;
        this.monitor_type_bit_flags = monitor_type_bit_flags;
        this.tests_scheduled = tests_scheduled;
        this.machine_id = machine_id;
        this.change_date = change_date;
        this.logger_time = logger_time;
        this.error_message = error_message;
    }
    return ConfigResponse;
}());


;// CONCATENATED MODULE: ./src/lastmile/LastMileResult.ts

var LastMileResult = /** @class */ (function () {
    function LastMileResult() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.siteId = 0;
        this.monitorType = 0;
        this.testStartTime = 0;
        this.version = ((_b = (_a = benchmarkAppConfig === null || benchmarkAppConfig === void 0 ? void 0 : benchmarkAppConfig.getConfig) === null || _a === void 0 ? void 0 : _a.call(benchmarkAppConfig)) === null || _b === void 0 ? void 0 : _b.version) || '0';
        // eslint-disable-next-line
        // @ts-ignore
        var appId = ((_d = (_c = benchmarkAppConfig === null || benchmarkAppConfig === void 0 ? void 0 : benchmarkAppConfig.getConfig) === null || _c === void 0 ? void 0 : _c.call(benchmarkAppConfig)) === null || _d === void 0 ? void 0 : _d.isbenchmarkApp) === 'true'
            ? (_f = (_e = benchmarkAppConfig === null || benchmarkAppConfig === void 0 ? void 0 : benchmarkAppConfig.getConfig) === null || _e === void 0 ? void 0 : _e.call(benchmarkAppConfig)) === null || _f === void 0 ? void 0 : _f.appId
            // eslint-disable-next-line
            // @ts-ignore
            : ((_h = (_g = window === null || window === void 0 ? void 0 : window.parent) === null || _g === void 0 ? void 0 : _g.RProfiler) === null || _h === void 0 ? void 0 : _h.siteId) || 0;
        this.singleObjectResult = {
            url: '',
            connectTime: 0,
            dnsTime: 0,
            sslTime: 0,
            waitTime: 0,
            loadTime: 0,
            codeReturn: 0,
            bytesContent: 0,
            bytesHeader: 0,
            codeError: 0,
            httpVersion: '',
            rumAppId: appId,
            fullConnectTime: 0,
            tracePoints: {
                clientId: 0,
                pageUrl: '',
                packetLoss: false,
                rtts: []
            }
        };
    }
    LastMileResult.prototype.toString = function () {
        var config = this.prepareResultForCore();
        return JSON.stringify(config);
    };
    LastMileResult.prototype.toResultObject = function () {
        return this.prepareResultForCore();
    };
    LastMileResult.prototype.prepareResultForCore = function () {
        var jsonConfig = new Object();
        jsonConfig['di'] = this.siteId;
        jsonConfig['m'] = this.monitorType;
        jsonConfig['so'] = this.singleObjectResult;
        jsonConfig['v'] = this.version;
        jsonConfig['so'] = {
            url: this.singleObjectResult.url,
            tc: this.singleObjectResult.connectTime,
            td: this.singleObjectResult.dnsTime,
            ts: this.singleObjectResult.sslTime,
            tw: this.singleObjectResult.waitTime,
            tl: this.singleObjectResult.loadTime,
            cr: this.singleObjectResult.codeReturn,
            ce: this.singleObjectResult.codeError,
            ss: this.singleObjectResult.rumAppId,
            bc: this.singleObjectResult.bytesContent,
            bh: this.singleObjectResult.bytesHeader,
            hv: this.singleObjectResult.httpVersion,
            fc: this.singleObjectResult.fullConnectTime,
            tra: {
                cid: this.singleObjectResult.tracePoints.clientId,
                adid: this.singleObjectResult.tracePoints.pageUrl
                // dont need to stringify the rtts or packet loss. Essentiall metadata for now
                // and is likely temporary.
            }
        };
        // dont post connect time and ssl time for HTTP/3
        if (jsonConfig['so'].hv === '3') {
            delete jsonConfig['so'].tc;
            delete jsonConfig['so'].ts;
        }
        return jsonConfig;
    };
    return LastMileResult;
}());


;// CONCATENATED MODULE: ./src/lastmile/StatusCodes.ts
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["None"] = 0] = "None";
    HttpStatusCode[HttpStatusCode["HttpContinue"] = 100] = "HttpContinue";
    HttpStatusCode[HttpStatusCode["HttpSwitchingProtocols"] = 101] = "HttpSwitchingProtocols";
    HttpStatusCode[HttpStatusCode["HttpOk"] = 200] = "HttpOk";
    HttpStatusCode[HttpStatusCode["HttpCreated"] = 201] = "HttpCreated";
    HttpStatusCode[HttpStatusCode["HttpAccepted"] = 202] = "HttpAccepted";
    HttpStatusCode[HttpStatusCode["HttpNonAuthoritativeInformation"] = 203] = "HttpNonAuthoritativeInformation";
    HttpStatusCode[HttpStatusCode["HttpNoContent"] = 204] = "HttpNoContent";
    HttpStatusCode[HttpStatusCode["HttpResetContent"] = 205] = "HttpResetContent";
    HttpStatusCode[HttpStatusCode["HttpPartialContent"] = 206] = "HttpPartialContent";
    HttpStatusCode[HttpStatusCode["HttpAmbiguous"] = 300] = "HttpAmbiguous";
    HttpStatusCode[HttpStatusCode["HttpMoved"] = 301] = "HttpMoved";
    HttpStatusCode[HttpStatusCode["HttpRedirect"] = 302] = "HttpRedirect";
    HttpStatusCode[HttpStatusCode["HttpRedirectMethod"] = 303] = "HttpRedirectMethod";
    HttpStatusCode[HttpStatusCode["HttpNotModified"] = 304] = "HttpNotModified";
    HttpStatusCode[HttpStatusCode["HttpUseProxy"] = 305] = "HttpUseProxy";
    HttpStatusCode[HttpStatusCode["HttpUnused"] = 306] = "HttpUnused";
    HttpStatusCode[HttpStatusCode["HttpRedirectKeepVerb"] = 307] = "HttpRedirectKeepVerb";
    HttpStatusCode[HttpStatusCode["HttpBadRequest"] = 400] = "HttpBadRequest";
    HttpStatusCode[HttpStatusCode["HttpUnauthorized"] = 401] = "HttpUnauthorized";
    HttpStatusCode[HttpStatusCode["HttpPaymentRequired"] = 402] = "HttpPaymentRequired";
    HttpStatusCode[HttpStatusCode["HttpForbidden"] = 403] = "HttpForbidden";
    HttpStatusCode[HttpStatusCode["HttpNotFound"] = 404] = "HttpNotFound";
    HttpStatusCode[HttpStatusCode["HttpMethodNotAllowed"] = 405] = "HttpMethodNotAllowed";
    HttpStatusCode[HttpStatusCode["HttpNotAcceptable"] = 406] = "HttpNotAcceptable";
    HttpStatusCode[HttpStatusCode["HttpProxyAuthenticationRequired"] = 407] = "HttpProxyAuthenticationRequired";
    HttpStatusCode[HttpStatusCode["HttpRequestTimeout"] = 408] = "HttpRequestTimeout";
    HttpStatusCode[HttpStatusCode["HttpConflict"] = 409] = "HttpConflict";
    HttpStatusCode[HttpStatusCode["HttpGone"] = 410] = "HttpGone";
    HttpStatusCode[HttpStatusCode["HttpLengthRequired"] = 411] = "HttpLengthRequired";
    HttpStatusCode[HttpStatusCode["HttpPreconditionFailed"] = 412] = "HttpPreconditionFailed";
    HttpStatusCode[HttpStatusCode["HttpRequestEntityTooLarge"] = 413] = "HttpRequestEntityTooLarge";
    HttpStatusCode[HttpStatusCode["HttpRequestUriTooLong"] = 414] = "HttpRequestUriTooLong";
    HttpStatusCode[HttpStatusCode["HttpUnsupportedMediaType"] = 415] = "HttpUnsupportedMediaType";
    HttpStatusCode[HttpStatusCode["HttpRequestedRangeNotSatisfiable"] = 416] = "HttpRequestedRangeNotSatisfiable";
    HttpStatusCode[HttpStatusCode["HttpExpectationFailed"] = 417] = "HttpExpectationFailed";
    HttpStatusCode[HttpStatusCode["HttpInternalServerError"] = 500] = "HttpInternalServerError";
    HttpStatusCode[HttpStatusCode["HttpNotImplemented"] = 501] = "HttpNotImplemented";
    HttpStatusCode[HttpStatusCode["HttpBadGateway"] = 502] = "HttpBadGateway";
    HttpStatusCode[HttpStatusCode["HttpServiceUnavailable"] = 503] = "HttpServiceUnavailable";
    HttpStatusCode[HttpStatusCode["HttpGatewayTimeout"] = 504] = "HttpGatewayTimeout";
    HttpStatusCode[HttpStatusCode["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
})(HttpStatusCode || (HttpStatusCode = {}));
// export enum AvailableRealUserWebNetworkError {
//     HttpError = 28,
//     HttpTimedOutError = 46
// }
var AvailableRealUserWebNetworkError;
(function (AvailableRealUserWebNetworkError) {
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["None"] = 0] = "None";
    /// <summary>
    /// This is an error that is unknown to the NEL logic (something that the NEL returns as an unknown error).
    /// </summary>
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["Unknown"] = 1] = "Unknown";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["DnsUnreachable"] = 2] = "DnsUnreachable";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["DnsNameNotResolved"] = 3] = "DnsNameNotResolved";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["DnsFailed"] = 4] = "DnsFailed";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TcpTimedOut"] = 5] = "TcpTimedOut";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TcpClosed"] = 6] = "TcpClosed";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TcpReset"] = 7] = "TcpReset";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TcpRefused"] = 8] = "TcpRefused";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TcpAborted"] = 9] = "TcpAborted";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TcpAddressInvalid"] = 10] = "TcpAddressInvalid";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TcpAddressUnreachable"] = 11] = "TcpAddressUnreachable";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TcpFailed"] = 12] = "TcpFailed";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TlsVersionOrCipherMismatch"] = 13] = "TlsVersionOrCipherMismatch";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TlsBadClientAuthCert"] = 14] = "TlsBadClientAuthCert";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TlsCertNameInvalid"] = 15] = "TlsCertNameInvalid";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TlsCertDateInvalid"] = 16] = "TlsCertDateInvalid";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TlsCertAuthorityInvalid"] = 17] = "TlsCertAuthorityInvalid";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TlsCertInvalid"] = 18] = "TlsCertInvalid";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TlsCertRevoked"] = 19] = "TlsCertRevoked";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TlsCertPinnedKeyNotInCertChain"] = 20] = "TlsCertPinnedKeyNotInCertChain";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TlsProtocolError"] = 21] = "TlsProtocolError";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TlsFailed"] = 22] = "TlsFailed";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["HttpProtocolError"] = 23] = "HttpProtocolError";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["HttpResponseInvalid"] = 24] = "HttpResponseInvalid";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["HttpResponseRedirectLoop"] = 25] = "HttpResponseRedirectLoop";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["HttpFailed"] = 26] = "HttpFailed";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["Abandoned"] = 27] = "Abandoned";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["HttpError"] = 28] = "HttpError";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["DnsAddressChanged"] = 29] = "DnsAddressChanged";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["DnsTimedOut"] = 30] = "DnsTimedOut";
    /// <summary>
    /// Malformed Response
    /// </summary>
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["DnsProtocol"] = 31] = "DnsProtocol";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["DnsServer"] = 32] = "DnsServer";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TlsUnrecognizedNameAlert"] = 33] = "TlsUnrecognizedNameAlert";
    /// <summary>
    /// H2 == HTTP2
    /// </summary>
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["H2PingFailed"] = 34] = "H2PingFailed";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["H2ProtocolError"] = 35] = "H2ProtocolError";
    /// <summary>
    /// H3 == HTTP3/QUIC
    /// </summary>
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["H3ProtocolError"] = 36] = "H3ProtocolError";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["HttpResponseInvalidEmpty"] = 37] = "HttpResponseInvalidEmpty";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["HttpResponseInvalidContentLengthMismatch"] = 38] = "HttpResponseInvalidContentLengthMismatch";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["HttpResponseInvalidIncompleteChunkedEncoding"] = 39] = "HttpResponseInvalidIncompleteChunkedEncoding";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["HttpResponseInvalidInvalidChunkedEncoding"] = 40] = "HttpResponseInvalidInvalidChunkedEncoding";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["HttpRequestRangeNotSatisfiable"] = 41] = "HttpRequestRangeNotSatisfiable";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["HttpResponseHeadersTruncated"] = 42] = "HttpResponseHeadersTruncated";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["HttpResponseHeadersMultipleContentDisposition"] = 43] = "HttpResponseHeadersMultipleContentDisposition";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["HttpResponseHeadersMultipleContentLength"] = 44] = "HttpResponseHeadersMultipleContentLength";
    /// <summary>
    /// This is a generic error for when an Endpoint request hits a 400 or 500 error without a specified error.
    /// </summary>
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["UnspecifiedPageLoadError"] = 45] = "UnspecifiedPageLoadError";
    /// <summary>
    /// This is an HTTP timeout which is used with Single-Object Endpoint tests.
    /// </summary>
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["HttpTimedOut"] = 46] = "HttpTimedOut";
    /// <summary>
    /// Endpoint Curl Errors
    /// </summary>
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["Internal"] = 47] = "Internal";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["FtpResponse"] = 48] = "FtpResponse";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["FtpPasswordResponse"] = 49] = "FtpPasswordResponse";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["FtpTimeout"] = 50] = "FtpTimeout";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["FtpPasvResponse"] = 51] = "FtpPasvResponse";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["FtpSetType"] = 52] = "FtpSetType";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["FtpFileResponse"] = 53] = "FtpFileResponse";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["Quote"] = 54] = "Quote";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["Write"] = 55] = "Write";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["Upload"] = 56] = "Upload";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["Read"] = 57] = "Read";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["OutOfMemory"] = 58] = "OutOfMemory";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["OperationTimeout"] = 59] = "OperationTimeout";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["FtpPort"] = 60] = "FtpPort";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["FtpRest"] = 61] = "FtpRest";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["HttpPostInternal"] = 62] = "HttpPostInternal";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["FileRead"] = 63] = "FileRead";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["LdapOperationFailed"] = 64] = "LdapOperationFailed";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["FunctionNotFound"] = 65] = "FunctionNotFound";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["CallbackAbort"] = 66] = "CallbackAbort";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["BadParameter"] = 67] = "BadParameter";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["InterfaceFailed"] = 68] = "InterfaceFailed";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["UnknownParameter"] = 69] = "UnknownParameter";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["OptionFormatting"] = 70] = "OptionFormatting";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["NoResponse"] = 71] = "NoResponse";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["NetworkSend"] = 72] = "NetworkSend";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["ContentEncoding"] = 73] = "ContentEncoding";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["FileSize"] = 74] = "FileSize";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["Rewind"] = 75] = "Rewind";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TftpFileAccess"] = 76] = "TftpFileAccess";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["DiskFull"] = 77] = "DiskFull";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TftpFileOperation"] = 78] = "TftpFileOperation";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TftpTransferId"] = 79] = "TftpTransferId";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["FileAlreadyExists"] = 80] = "FileAlreadyExists";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["TftpInvalidUser"] = 81] = "TftpInvalidUser";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["Conversion"] = 82] = "Conversion";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["FileNotFound"] = 83] = "FileNotFound";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["Ssh"] = 84] = "Ssh";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["Retry"] = 85] = "Retry";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["FtpPret"] = 86] = "FtpPret";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["RtspMismatch"] = 87] = "RtspMismatch";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["FtpFileList"] = 88] = "FtpFileList";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["ConnectionUnvailable"] = 89] = "ConnectionUnvailable";
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["Recursion"] = 90] = "Recursion";
    /// <summary>
    /// This is an error that has been added to NEL that was previously not available (something that is a known error to the NEL but that we haven't added to this enum)
    /// </summary>
    AvailableRealUserWebNetworkError[AvailableRealUserWebNetworkError["NotImplemented"] = 255] = "NotImplemented";
})(AvailableRealUserWebNetworkError || (AvailableRealUserWebNetworkError = {}));

;// CONCATENATED MODULE: ./src/lastmile/TimeoutError.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TimeoutError = /** @class */ (function (_super) {
    __extends(TimeoutError, _super);
    function TimeoutError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'TimeoutError';
        _this.isTimeout = true;
        return _this;
    }
    return TimeoutError;
}(Error));


;// CONCATENATED MODULE: ./src/lastmile/errorCode.ts


var mapErrorToNetworkError = function (error) {
    var errorMessage = error.message.toLowerCase();
    // Timeout errors
    if (error instanceof TimeoutError || error.name === 'AbortError' || errorMessage.includes('timeout')) {
        return AvailableRealUserWebNetworkError.HttpTimedOut;
    }
    // Network connectivity errors
    if (errorMessage.includes('network error') || errorMessage.includes('failed to fetch')) {
        return AvailableRealUserWebNetworkError.HttpFailed;
    }
    // DNS resolution errors
    if (errorMessage.includes('dns') ||
        errorMessage.includes('nxdomain') ||
        errorMessage.includes('name not resolved') ||
        errorMessage.includes('getaddrinfo failed')) {
        if (errorMessage.includes('timeout')) {
            return AvailableRealUserWebNetworkError.DnsTimedOut;
        }
        if (errorMessage.includes('server')) {
            return AvailableRealUserWebNetworkError.DnsServer;
        }
        return AvailableRealUserWebNetworkError.DnsNameNotResolved;
    }
    // SSL/TLS Certificate errors
    if (errorMessage.includes('ssl') ||
        errorMessage.includes('tls') ||
        errorMessage.includes('certificate') ||
        errorMessage.includes('cert')) {
        if (errorMessage.includes('invalid') || errorMessage.includes('bad')) {
            return AvailableRealUserWebNetworkError.TlsCertInvalid;
        }
        if (errorMessage.includes('authority')) {
            return AvailableRealUserWebNetworkError.TlsCertAuthorityInvalid;
        }
        if (errorMessage.includes('name')) {
            return AvailableRealUserWebNetworkError.TlsCertNameInvalid;
        }
        if (errorMessage.includes('date') || errorMessage.includes('expired')) {
            return AvailableRealUserWebNetworkError.TlsCertDateInvalid;
        }
        if (errorMessage.includes('revoked')) {
            return AvailableRealUserWebNetworkError.TlsCertRevoked;
        }
        return AvailableRealUserWebNetworkError.TlsFailed;
    }
    // Connection refused/reset errors
    if (errorMessage.includes('connection refused') ||
        errorMessage.includes('econnrefused') ||
        errorMessage.includes('net::err_connection_refused')) {
        return AvailableRealUserWebNetworkError.TcpRefused;
    }
    if (errorMessage.includes('connection reset') ||
        errorMessage.includes('econnreset') ||
        errorMessage.includes('net::err_connection_reset')) {
        return AvailableRealUserWebNetworkError.TcpReset;
    }
    if (errorMessage.includes('connection closed')) {
        return AvailableRealUserWebNetworkError.TcpClosed;
    }
    if (errorMessage.includes('connection timeout')) {
        return AvailableRealUserWebNetworkError.TcpTimedOut;
    }
    if (errorMessage.includes('connection aborted')) {
        return AvailableRealUserWebNetworkError.TcpAborted;
    }
    // Protocol errors
    if (errorMessage.includes('protocol') ||
        errorMessage.includes('net::err_invalid_response') ||
        errorMessage.includes('net::err_response_headers') ||
        errorMessage.includes('invalid http response')) {
        return AvailableRealUserWebNetworkError.HttpProtocolError;
    }
    // HTTP/2 specific errors
    if (errorMessage.includes('h2') || errorMessage.includes('http/2')) {
        if (errorMessage.includes('ping')) {
            return AvailableRealUserWebNetworkError.H2PingFailed;
        }
        return AvailableRealUserWebNetworkError.H2ProtocolError;
    }
    // HTTP/3 specific errors
    if (errorMessage.includes('h3') || errorMessage.includes('http/3') || errorMessage.includes('quic')) {
        return AvailableRealUserWebNetworkError.H3ProtocolError;
    }
    // Content length/encoding errors
    if (errorMessage.includes('content-length')) {
        return AvailableRealUserWebNetworkError.HttpResponseInvalidContentLengthMismatch;
    }
    if (errorMessage.includes('chunked encoding')) {
        if (errorMessage.includes('incomplete')) {
            return AvailableRealUserWebNetworkError.HttpResponseInvalidIncompleteChunkedEncoding;
        }
        return AvailableRealUserWebNetworkError.HttpResponseInvalidInvalidChunkedEncoding;
    }
    // Response validation errors
    if (errorMessage.includes('empty response')) {
        return AvailableRealUserWebNetworkError.HttpResponseInvalidEmpty;
    }
    if (errorMessage.includes('invalid response')) {
        return AvailableRealUserWebNetworkError.HttpResponseInvalid;
    }
    // Redirect errors
    if (errorMessage.includes('redirect') || errorMessage.includes('net::err_too_many_redirects')) {
        return AvailableRealUserWebNetworkError.HttpResponseRedirectLoop;
    }
    // Range request errors
    if (errorMessage.includes('range not satisfiable')) {
        return AvailableRealUserWebNetworkError.HttpRequestRangeNotSatisfiable;
    }
    // Header errors
    if (errorMessage.includes('headers truncated')) {
        return AvailableRealUserWebNetworkError.HttpResponseHeadersTruncated;
    }
    // CORS errors (map to generic HTTP error since there's no specific CORS enum)
    if (errorMessage.includes('cors') ||
        errorMessage.includes('cross-origin') ||
        errorMessage.includes('access-control-allow-origin')) {
        return AvailableRealUserWebNetworkError.HttpError;
    }
    // File/read errors
    if (errorMessage.includes('file not found')) {
        return AvailableRealUserWebNetworkError.FileNotFound;
    }
    if (errorMessage.includes('file read')) {
        return AvailableRealUserWebNetworkError.FileRead;
    }
    // Memory/resource errors
    if (errorMessage.includes('out of memory')) {
        return AvailableRealUserWebNetworkError.OutOfMemory;
    }
    // Operation timeout (different from HTTP timeout)
    if (errorMessage.includes('operation timeout')) {
        return AvailableRealUserWebNetworkError.OperationTimeout;
    }
    // Callback/abort errors
    if (errorMessage.includes('callback') && errorMessage.includes('abort')) {
        return AvailableRealUserWebNetworkError.CallbackAbort;
    }
    // Network send errors
    if (errorMessage.includes('network send')) {
        return AvailableRealUserWebNetworkError.NetworkSend;
    }
    // Content encoding errors
    if (errorMessage.includes('content encoding') || errorMessage.includes('encoding')) {
        return AvailableRealUserWebNetworkError.ContentEncoding;
    }
    // Default fallback for generic HTTP errors
    return AvailableRealUserWebNetworkError.HttpError;
};

;// CONCATENATED MODULE: ./src/lastmile/LastMileApi.ts
var LastMileApi_assign = (undefined && undefined.__assign) || function () {
    LastMileApi_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return LastMileApi_assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







// TODO: This would need to be dynamically generated based on environment (staging, qa, etc.)
// same as how RUM does it. These should be log servers
var configUrl = 'https://lst01a.3genlabs.net/hawklogserver/l.p';
var resultsUrl = 'https://lst01a.3genlabs.net/hawklogserver/rl.p';
var maxRetryAttempts = 3; // Maximum number of retry attempts for the test
// Timeout constants for different test types - can be reset in Lasmile.dev.json
var SINGLE_PACKET_TIMEOUT_MS = Number('3000');
var KB100_TIMEOUT_MS = Number('3000');
// TEMPORARY
var siteTypeFlags = 2;
var divisionId = 4291; // PROD
var licenseKey = '65aeb00b09d2409199ef333d41e6264c'; // PROD
var maxTestTime = 120000; // 2 minutes
var timeoutStatusCode = 408; // HTTP timeout status code
function getUTCTimestamp() {
    var now = new Date();
    var year = now.getUTCFullYear();
    var month = String(now.getUTCMonth() + 1).padStart(2, '0');
    var day = String(now.getUTCDate()).padStart(2, '0');
    var hours = String(now.getUTCHours()).padStart(2, '0');
    var minutes = String(now.getUTCMinutes()).padStart(2, '0');
    var seconds = String(now.getUTCSeconds()).padStart(2, '0');
    var milliseconds = String(now.getUTCMilliseconds()).padStart(3, '0');
    var timestamp = "".concat(year).concat(month).concat(day).concat(hours).concat(minutes).concat(seconds).concat(milliseconds);
    return timestamp;
}
function requestTest() {
    return __awaiter(this, void 0, void 0, function () {
        // Internal function
        function getConfigData() {
            var configRequest = new ConfigRequest();
            configRequest.siteTypeFlags = siteTypeFlags; // TODO: Input from portal (2 is scheduled tests)
            configRequest.divisionId = divisionId; // TODO: Input from portal
            configRequest.licenseKey = licenseKey; // TODO: Input from portal
            return configRequest.toString();
        }
        // Internal Step 2: Process the Core response.
        function processResponse(response) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (response.error_message !== undefined && response.error_message.length > 0) {
                        throw new Error("[Catchpoint][Error] JSP - Lastmile: ".concat(response.error_message));
                    }
                    if (response.tests_scheduled !== undefined && response.tests_scheduled.length <= 0) {
                        throw new Error('[Catchpoint][Error] JSP - Lastmile: No tests scheduled');
                    }
                    if (response.tests_scheduled === undefined) {
                        console.log('[Catchpoint][Info] JSP - Lastmile: no scheduled tests available.');
                        response.tests_scheduled = [];
                    }
                    return [2 /*return*/, response.tests_scheduled];
                });
            });
        }
        var config, options, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    config = getConfigData();
                    options = {
                        method: 'POST',
                        body: config
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, fetch(configUrl, options)];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("[Catchpoint][Info] JSP - Lastmile: HTTP error! Status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    console.log('[Catchpoint][Info] JSP - Lastmile: Config Response Data:', data);
                    return [4 /*yield*/, processResponse(data)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5:
                    error_1 = _a.sent();
                    console.error('[Catchpoint][Info] JSP - Lastmile: There was a problem with the fetch operation: ', error_1);
                    throw error_1;
                case 6: return [2 /*return*/];
            }
        });
    });
}
function runSyntheticTests(testsToRun) {
    return __awaiter(this, void 0, void 0, function () {
        var testPromises, testResults;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testPromises = testsToRun.map(function (test) { return __awaiter(_this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, executeTest(test, runSingleObjectTest)];
                                case 1:
                                    result = _a.sent();
                                    if (!isValidResults(result)) {
                                        return [2 /*return*/, null];
                                    }
                                    return [2 /*return*/, result];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(testPromises)];
                case 1:
                    testResults = _a.sent();
                    return [2 /*return*/, testResults.filter(function (result) { return result !== null; })];
            }
        });
    });
}
var isValidResults = function (results) {
    var _a = results.singleObjectResult, dnsTime = _a.dnsTime, connectTime = _a.connectTime, sslTime = _a.sslTime, waitTime = _a.waitTime, loadTime = _a.loadTime;
    var totalTime = dnsTime + connectTime + sslTime + waitTime + loadTime;
    return totalTime <= maxTestTime;
};
function runPairedSyntheticTests(testsToRun) {
    return __awaiter(this, void 0, void 0, function () {
        var results, promises, _loop_1, testIndex, pairsResults;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    results = [];
                    if (0 !== testsToRun.length % 2) {
                        throw new Error('[Catchpoint][Error] JSP - Lastmile: Even number of tests required for paired tests.');
                    }
                    promises = [];
                    _loop_1 = function (testIndex) {
                        var subTestsToRun = testsToRun.slice(testIndex, testIndex + 2);
                        // Ping test is made of 2 separate tests
                        if (subTestsToRun.length !== 2) {
                            throw new Error('[Catchpoint][Error] JSP - Lastmile: Running paired tests requires 2 tests!');
                        }
                        // Create a promise for the sequential execution of the pair
                        var pairPromise = (function () { return __awaiter(_this, void 0, void 0, function () {
                            var firstResult, attempt, isTimeoutError, isHttpError, secondResult;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        firstResult = null;
                                        attempt = 1;
                                        _a.label = 1;
                                    case 1:
                                        if (!(attempt <= maxRetryAttempts)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, executeTest(subTestsToRun[0], runSingleObjectTest)];
                                    case 2:
                                        firstResult = _a.sent();
                                        isTimeoutError = firstResult.singleObjectResult.codeError === AvailableRealUserWebNetworkError.HttpTimedOut;
                                        isHttpError = firstResult.singleObjectResult.codeError === AvailableRealUserWebNetworkError.HttpError;
                                        if (isHttpError || isTimeoutError) {
                                            console.warn("Test attempt ".concat(attempt, " failed for test ").concat(subTestsToRun[0].s, ". ").concat(attempt < maxRetryAttempts ? 'Retrying...' : 'Max retries reached.'));
                                            // On final attempt, ensure it's marked as timeout error
                                            if (attempt === maxRetryAttempts && isTimeoutError) {
                                                firstResult.singleObjectResult.codeError = AvailableRealUserWebNetworkError.HttpTimedOut;
                                                return [3 /*break*/, 4];
                                            }
                                        }
                                        else {
                                            // If result is successful, break the loop
                                            return [3 /*break*/, 4];
                                        }
                                        _a.label = 3;
                                    case 3:
                                        attempt++;
                                        return [3 /*break*/, 1];
                                    case 4:
                                        if (!isValidResults(firstResult)) {
                                            return [2 /*return*/, []];
                                        }
                                        return [4 /*yield*/, executeTest(subTestsToRun[1], runSingleObjectTest)];
                                    case 5:
                                        secondResult = _a.sent();
                                        if (!isValidResults(secondResult)) {
                                            return [2 /*return*/, []];
                                        }
                                        return [2 /*return*/, [firstResult, secondResult]];
                                }
                            });
                        }); })();
                        promises.push(pairPromise);
                    };
                    for (testIndex = 0; testIndex < testsToRun.length; testIndex += 2) {
                        _loop_1(testIndex);
                    }
                    return [4 /*yield*/, Promise.all(promises)];
                case 1:
                    pairsResults = _a.sent();
                    // Flatten the results array
                    results = pairsResults.flat();
                    return [2 /*return*/, results];
            }
        });
    });
}
function runPairedPrivateTests(testsToRun) {
    return __awaiter(this, void 0, void 0, function () {
        var results, promises, _loop_2, testIndex;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    results = [];
                    promises = [];
                    _loop_2 = function (testIndex) {
                        var subTestsToRun = testsToRun[testIndex];
                        // Create a promise for the sequential execution of the pair
                        var pairPromise = (function () { return __awaiter(_this, void 0, void 0, function () {
                            var result, attempt;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        result = null;
                                        attempt = 1;
                                        _a.label = 1;
                                    case 1:
                                        if (!(attempt <= maxRetryAttempts)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, executeTest(subTestsToRun, runSingleObjectTest)];
                                    case 2:
                                        result = _a.sent();
                                        if (result.singleObjectResult.codeError === AvailableRealUserWebNetworkError.HttpError) {
                                            // If result containes an error, retry the test
                                            result.singleObjectResult.codeError = AvailableRealUserWebNetworkError.HttpTimedOut;
                                        }
                                        else {
                                            // If result is successful, break the loop
                                            return [3 /*break*/, 4]; // Exit the loop if successful
                                        }
                                        _a.label = 3;
                                    case 3:
                                        attempt++;
                                        return [3 /*break*/, 1];
                                    case 4:
                                        if (!isValidResults(result)) {
                                            return [2 /*return*/, null];
                                        }
                                        return [2 /*return*/, result];
                                }
                            });
                        }); })();
                        promises.push(pairPromise);
                    };
                    for (testIndex = 0; testIndex < testsToRun.length; testIndex++) {
                        _loop_2(testIndex);
                    }
                    return [4 /*yield*/, Promise.all(promises)];
                case 1:
                    // Wait for all pairs to complete
                    results = _a.sent();
                    return [2 /*return*/, results];
            }
        });
    });
}
function runCustomTest(testsToRun, testCallback) {
    return __awaiter(this, void 0, void 0, function () {
        var testPromises, testResults;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testPromises = testsToRun.map(function (test) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, executeTestWithObserver(test, testCallback)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(testPromises)];
                case 1:
                    testResults = _a.sent();
                    return [2 /*return*/, testResults];
            }
        });
    });
}
function postResults(testResultsList, benchmarkTestType) {
    var _a;
    if (benchmarkTestType === void 0) { benchmarkTestType = BenchmarkTestType.Public; }
    return __awaiter(this, void 0, void 0, function () {
        var requestBody, options, appId, loggerUrl;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (testResultsList.length === 0) {
                        console.log('[Catchpoint][Info] JSP - Lastmile: No test results to post.');
                        return [2 /*return*/];
                    }
                    requestBody = JSON.stringify(testResultsList.map(function (result) { return result.toResultObject(); }));
                    options = {
                        method: 'POST',
                        body: requestBody
                    };
                    appId = (_a = testResultsList[0].singleObjectResult.rumAppId) !== null && _a !== void 0 ? _a : 0;
                    loggerUrl = resultsUrl + "?aId=".concat(appId, "&isPb=").concat(benchmarkTestType);
                    return [4 /*yield*/, fetch(loggerUrl, options)];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function createScheduledTest(version, testId, url, monitorType, timeStamp) {
    return new ScheduledTest(version, testId, url, monitorType, timeStamp);
}
/********************************************************************************************************************************************** */
/*******************************************************************PRIVATE METHODS************************************************************ */
/********************************************************************************************************************************************** */
// Shared observer logic extracted into reusable helper function
function createAndWaitForObserver(urlToTest, observerTimeout) {
    if (observerTimeout === void 0) { observerTimeout = 3000; }
    return __awaiter(this, void 0, void 0, function () {
        var observer, entriesByName, observerPromise, observerError_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    entriesByName = [];
                    observerPromise = new Promise(function (resolve, reject) {
                        observer = new PerformanceObserver(function (list) {
                            entriesByName = list.getEntriesByName(urlToTest);
                            if (entriesByName.length > 0) {
                                resolve();
                            }
                        });
                        observer.observe({ entryTypes: ['resource'] });
                        setTimeout(function () {
                            observer.disconnect();
                            reject(new Error("Observer timeout - no performance entry found within ".concat(observerTimeout, "ms")));
                        }, observerTimeout);
                    });
                    observerPromise
                        .then(function () {
                        observer.disconnect();
                    })
                        .catch(function (error) {
                        console.log('[Catchpoint][Info] JSP - Lastmile: Performance Observer timeout or error:', error);
                        observer.disconnect();
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, observerPromise];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    observerError_1 = _a.sent();
                    console.log('[Catchpoint][Info] JSP - Lastmile: Observer failed, proceeding with basic metrics');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, entriesByName];
            }
        });
    });
}
function executeTest(test, testFunction) {
    return __awaiter(this, void 0, void 0, function () {
        var url, queryParams, urlWithParams, results, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = test.u;
                    queryParams = { rand: "".concat(getRandomInt()) };
                    urlWithParams = appendQueryParams(url, queryParams);
                    console.log('[Catchpoint][Info] JSP - Lastmile: Starting ExecuteTest');
                    results = new LastMileResult();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, testFunction(urlWithParams, test, results)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error("[Catchpoint][Info] JSP - Lastmile: runTest: Error - Site ID ".concat(test.s, " failed to run"), error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, Promise.resolve(results)];
            }
        });
    });
}
function executeTestWithObserver(test, testFunction) {
    return __awaiter(this, void 0, void 0, function () {
        var url, queryParams, urlWithParams, observerPromise, results, currentTime, error_3, entries;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = test.u;
                    queryParams = { rand: "".concat(getRandomInt()) };
                    urlWithParams = appendQueryParams(url, queryParams);
                    console.log('[Catchpoint][Info] JSP - Lastmile: Starting ExecuteTest');
                    observerPromise = createAndWaitForObserver(urlWithParams, 3000);
                    results = new LastMileResult();
                    currentTime = performance.now();
                    results.siteId = test.s;
                    results.monitorType = test.m;
                    results.testStartTime = currentTime;
                    results.singleObjectResult.url = test.u;
                    results.singleObjectResult.tracePoints.pageUrl = getCurrentPageUrl();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, testFunction(urlWithParams, test, results)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error("[Catchpoint][Info] JSP - Lastmile: runTest: Error - Site ID ".concat(test.s, " failed to run"), error_3);
                    return [3 /*break*/, 4];
                case 4: return [4 /*yield*/, observerPromise];
                case 5:
                    entries = _a.sent();
                    getSingleObjectTestMetrics(entries, test, results);
                    return [2 /*return*/, results];
            }
        });
    });
}
function handleTimeoutOrAbort(controller, timeout) {
    return new Promise(function (_, reject) {
        var timeoutId = setTimeout(function () {
            controller.abort();
            reject(new TimeoutError("Request timeout error after ".concat(timeout, "ms")));
        }, timeout);
        controller.signal.addEventListener('abort', function () { return clearTimeout(timeoutId); });
    });
}
function handleError(error) {
    if (error instanceof TimeoutError || error.message.includes('timeout')) {
        return AvailableRealUserWebNetworkError.HttpTimedOut;
    }
    return mapErrorToNetworkError(error);
}
function fetchWithTimeout(url, options, timeout) {
    if (options === void 0) { options = {}; }
    if (timeout === void 0) { timeout = 3000; }
    return __awaiter(this, void 0, void 0, function () {
        var controller, signal, fetchOptions, timeoutPromise, fetchPromise;
        return __generator(this, function (_a) {
            controller = new AbortController();
            signal = controller.signal;
            fetchOptions = LastMileApi_assign(LastMileApi_assign({}, options), { signal: signal });
            timeoutPromise = handleTimeoutOrAbort(controller, timeout)
                .then(function () {
                // Return a timeout response instead of throwing
                return new Response(null, { status: timeoutStatusCode, statusText: 'Request Timeout' });
            })
                .catch(function (error) {
                // If it's a timeout error, return timeout response
                if (error instanceof TimeoutError) {
                    return new Response(null, { status: timeoutStatusCode, statusText: 'Request Timeout' });
                }
                throw error; // Re-throw other errors
            });
            fetchPromise = fetch(url, fetchOptions).catch(function (error) {
                // Use handleError to properly map the error
                var networkError = handleError(error);
                // Create appropriate response based on error type
                if (networkError === AvailableRealUserWebNetworkError.HttpTimedOut) {
                    return new Response(null, { status: timeoutStatusCode, statusText: 'Request Timeout' });
                }
                else {
                    // For other network errors, return a generic error response
                    return new Response(null, { status: 0, statusText: 'Network Error' });
                }
            });
            return [2 /*return*/, Promise.race([fetchPromise, timeoutPromise])];
        });
    });
}
// ...existing code...
function runSingleObjectTest(urlToTest, test, results) {
    return __awaiter(this, void 0, void 0, function () {
        var options, testTimeout, observerPromise, currentTime, response, statusCode, headers, bytesHeader_1, error_4, entries_1, entries;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = { method: 'GET' };
                    testTimeout = getTestTimeout(test);
                    observerPromise = createAndWaitForObserver(urlToTest, testTimeout);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    currentTime = performance.now();
                    return [4 /*yield*/, fetchWithTimeout(urlToTest, options, testTimeout)];
                case 2:
                    response = _a.sent();
                    statusCode = response.status;
                    results.siteId = test.s;
                    results.monitorType = test.m;
                    results.testStartTime = currentTime;
                    results.singleObjectResult.url = test.u;
                    results.singleObjectResult.tracePoints.pageUrl = getCurrentPageUrl();
                    headers = response.headers;
                    bytesHeader_1 = 0;
                    headers.forEach(function (value, key) {
                        var headerLength = key.length + value.length + 4; // Account for white space and colons
                        bytesHeader_1 += headerLength;
                    });
                    results.singleObjectResult.bytesHeader = bytesHeader_1;
                    results.singleObjectResult.bytesContent = response.headers.get('Content-Length')
                        ? parseInt(response.headers.get('Content-Length') || '0', 10)
                        : 0;
                    console.log("[Catchpoint][Info] JSP - Lastmile: Parent URL: ".concat(results.singleObjectResult.tracePoints.pageUrl));
                    // Set status code and error appropriately
                    results.singleObjectResult.codeReturn = statusCode;
                    if (statusCode === timeoutStatusCode) {
                        results.singleObjectResult.codeError = AvailableRealUserWebNetworkError.HttpTimedOut;
                    }
                    else if ((statusCode >= HttpStatusCode.HttpBadRequest && statusCode <= HttpStatusCode.HttpVersionNotSupported) ||
                        statusCode == HttpStatusCode.None) {
                        results.singleObjectResult.codeError = AvailableRealUserWebNetworkError.HttpError;
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_4 = _a.sent();
                    console.log('[Catchpoint][Info] JSP - Lastmile: Error running single object test', error_4);
                    // Use handleError to properly map the error
                    results.singleObjectResult.codeError = handleError(error_4);
                    if (results.singleObjectResult.codeError === AvailableRealUserWebNetworkError.HttpTimedOut) {
                        results.singleObjectResult.codeReturn = timeoutStatusCode; // HTTP Timeout
                    }
                    else {
                        results.singleObjectResult.codeReturn = 0; // Network error
                    }
                    return [4 /*yield*/, observerPromise];
                case 4:
                    entries_1 = _a.sent();
                    getSingleObjectTestMetrics(entries_1, test, results);
                    return [2 /*return*/];
                case 5: return [4 /*yield*/, observerPromise];
                case 6:
                    entries = _a.sent();
                    getSingleObjectTestMetrics(entries, test, results);
                    return [2 /*return*/];
            }
        });
    });
}
function getHttpVersion(version) {
    if (version === 'h2') {
        return '2';
    }
    else if (version === 'h3') {
        return '3';
    }
    else if (version.toLowerCase() === 'http/1.1') {
        return '1.1';
    }
    else {
        return 'Unknown';
    }
}
// Helper to select timeout based on test type (assuming monitorType distinguishes them)
function getTestTimeout(test) {
    // monitorType 1 = single packet, 2 = 100kb
    if (test.m === 1)
        return SINGLE_PACKET_TIMEOUT_MS;
    if (test.m === 2)
        return KB100_TIMEOUT_MS;
    return SINGLE_PACKET_TIMEOUT_MS; // default fallback
}
var getSingleObjectTestMetrics = function (entries, test, results) {
    results.siteId = test.s;
    results.monitorType = test.m;
    results.singleObjectResult.url = test.u;
    results.singleObjectResult.tracePoints.pageUrl = getCurrentPageUrl();
    if (HttpStatusCode.None === results.singleObjectResult.codeReturn) {
        console.log("[Catchpoint][Info] JSP - Lastmile: Invalid HTTP status. Possibly a CORS error. Aborting metric collection");
        return results;
    }
    if (0 === entries.length) {
        // console.warn('No entries found.');
        return results;
    }
    var entry = entries[0];
    console.log("[Catchpoint][Info] JSP - Lastmile: URL: ".concat(entry.name, "      Test: ").concat(test.s));
    // rounding the values before calculations to avoid 1 value larger/smaller than expected due to JS float precision,
    // for fullConnectTime, sslTime, connectTime calculations
    var connectStart = Math.round(entry.connectStart);
    var connectEnd = Math.round(entry.connectEnd);
    var secureConnectionStart = Math.round(entry.secureConnectionStart);
    // Start real metrics
    var httpVersion = getHttpVersion(entry.nextHopProtocol);
    var dnsTime = Math.round(entry.domainLookupEnd - entry.domainLookupStart);
    var fullConnectTime = Math.round(connectEnd - connectStart);
    var sslTime = entry.secureConnectionStart > 0 ? Math.round(connectEnd - secureConnectionStart) : 0;
    var waitTime = Math.round(entry.responseStart - entry.requestStart);
    var loadTime = Math.round(entry.responseEnd - entry.responseStart);
    var connectTime = Math.round(secureConnectionStart - connectStart);
    results.singleObjectResult.fullConnectTime = fullConnectTime;
    results.singleObjectResult.dnsTime = dnsTime;
    results.singleObjectResult.sslTime = sslTime;
    results.singleObjectResult.waitTime = waitTime;
    results.singleObjectResult.loadTime = loadTime;
    results.singleObjectResult.httpVersion = httpVersion;
    results.singleObjectResult.connectTime = connectTime;
};
// Generate a random number to append to URL to prevent
// needing to reset cache in browser.
function getRandomInt() {
    // Generate a random number between 1,000,000 (10^6) and 999,999,999 (10^9 - 1)
    return Math.floor(Math.random() * (1000000000 - 1000000) + 1000000);
}
function getCurrentPageUrl() {
    var isInIframe = parent !== window;
    var url;
    if (isInIframe) {
        url = document.referrer;
    }
    else {
        url = window.location.href;
    }
    return url;
}
function appendQueryParams(url, params) {
    try {
        // Check if URL is valid and has a protocol
        if (!url || typeof url !== 'string') {
            console.log('[Catchpoint][Info] JSP - Lastmile:: Invalid URL provided:', url);
            return url;
        }
        // If URL doesn't have a protocol, assume https://
        var validUrl = url;
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            validUrl = 'https://' + url;
        }
        var urlObj = new URL(validUrl);
        var searchParams = new URLSearchParams(urlObj.search);
        for (var key in params) {
            if (Object.prototype.hasOwnProperty.call(params, key)) {
                searchParams.append(key, params[key]);
            }
        }
        urlObj.search = searchParams.toString();
        return urlObj.toString();
    }
    catch (error) {
        console.log('[Catchpoint][Info] JSP - Lastmile:: Failed to construct URL:', url, error);
        // Fallback: use URLSearchParams for query string construction
        var separator = url.includes('?') ? '&' : '?';
        var searchParams = new URLSearchParams();
        for (var key in params) {
            if (Object.prototype.hasOwnProperty.call(params, key)) {
                searchParams.append(key, params[key]);
            }
        }
        var queryString = searchParams.toString();
        return queryString ? "".concat(url).concat(separator).concat(queryString) : url;
    }
}
window.getUTCTimestamp = getUTCTimestamp;
window.getRandomInt = getRandomInt;
window.createScheduledTest = createScheduledTest;
window.requestTest = requestTest;
window.runSyntheticTests = runSyntheticTests;
window.runCustomTest = runCustomTest;
window.postResults = postResults;

;// CONCATENATED MODULE: ./src/lastmile/InitLastMile.ts
var InitLastMile_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var InitLastMile_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var BenchmarkTestType;
(function (BenchmarkTestType) {
    BenchmarkTestType[BenchmarkTestType["Public"] = 0] = "Public";
    BenchmarkTestType[BenchmarkTestType["Private"] = 1] = "Private";
})(BenchmarkTestType || (BenchmarkTestType = {}));
var setTimeoutId;
var initLastMileScript = function () { return InitLastMile_awaiter(void 0, void 0, void 0, function () {
    return InitLastMile_generator(this, function (_a) {
        try {
            clearTimeout(setTimeoutId);
            // Run tests after 1 second to allow the page to load.
            setTimeoutId = setTimeout(function () { return InitLastMile_awaiter(void 0, void 0, void 0, function () {
                return InitLastMile_generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(benchmarkAppConfig.getConfig().publicTestsList.length > 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, runFixedTestsWithCountryWeights(true)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            if (!(benchmarkAppConfig.getConfig().privateBenchmarkTestsList.length > 0)) return [3 /*break*/, 4];
                            // Run additional tests for private benchmark
                            return [4 /*yield*/, runPrivateTestsWithCountryWeights()];
                        case 3:
                            // Run additional tests for private benchmark
                            _a.sent();
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); }, 1000);
        }
        catch (error) {
            console.error('[Catchpoint][Info] JSP - Lastmile Error', error);
        }
        return [2 /*return*/];
    });
}); };
// This is to run configured tests (i.e. tests are retrieved from Core first before running).
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function runScheduledTests() {
    return InitLastMile_awaiter(this, void 0, void 0, function () {
        var scheduledTestsToRun, results;
        return InitLastMile_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, requestTest()];
                case 1:
                    scheduledTestsToRun = _a.sent();
                    return [4 /*yield*/, runSyntheticTests(scheduledTestsToRun)];
                case 2:
                    results = _a.sent();
                    postResults(results);
                    // store results in global
                    window.lastMileResults = results;
                    return [2 /*return*/];
            }
        });
    });
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function runFixedTests(pairedTests) {
    return InitLastMile_awaiter(this, void 0, void 0, function () {
        var testIdsString, testIdsJson, testsToCreate, timestamp, testsToRun, results;
        return InitLastMile_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testIdsString = benchmarkAppConfig.getConfig().publicTestsList;
                    testIdsJson = JSON.parse(testIdsString);
                    testsToCreate = testIdsJson.length > 0 && Array.isArray(testIdsJson)
                        ? testIdsJson.map(function (item) { return ({ key: Number(item.key), value: item.value }); })
                        : [];
                    timestamp = getUTCTimestamp();
                    testsToRun = Object.entries(testsToCreate).map(function (_a) {
                        var value = _a[1];
                        return createScheduledTest(2, Number(value.key), String(value.value), 2, timestamp);
                    });
                    results = [];
                    if (!pairedTests) return [3 /*break*/, 2];
                    return [4 /*yield*/, runPairedSyntheticTests(testsToRun)];
                case 1:
                    results = _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, runSyntheticTests(testsToRun)];
                case 3:
                    results = _a.sent();
                    _a.label = 4;
                case 4:
                    // Post results
                    postResults(results);
                    // store results in global
                    window.lastMileResults = results;
                    return [2 /*return*/];
            }
        });
    });
}
// This function runs tests based on weights and user country for public tests
function runFixedTestsWithCountryWeights(pairedTests) {
    return InitLastMile_awaiter(this, void 0, void 0, function () {
        var testIdsString, testIdsJson, testsToCreate, testWeightsByCountryString, testWeightsByCountryJson, mappedAllPublicTestsWithCountryWeights, userCountry, testToRunBy, weightedRandomTest, timestamp, testsToRun, results;
        return InitLastMile_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testIdsString = benchmarkAppConfig.getConfig().publicTestsList;
                    testIdsJson = JSON.parse(testIdsString);
                    testsToCreate = testIdsJson.length > 0 && Array.isArray(testIdsJson)
                        ? testIdsJson.map(function (item) { return ({ key: Number(item.key), value: item.value }); })
                        : [];
                    testWeightsByCountryString = '[{"id":92412,"countries":[224,99],"weight":5},{"id":92408,"countries":[],"weight":15},{"id":92418,"countries":[224],"weight":3}]';
                    testWeightsByCountryJson = JSON.parse(testWeightsByCountryString);
                    mappedAllPublicTestsWithCountryWeights = getAllMappedPublicTestsWithCountryWeights(testsToCreate, testWeightsByCountryJson);
                    userCountry = benchmarkAppConfig.getConfig().userCountry;
                    testToRunBy = [];
                    if (mappedAllPublicTestsWithCountryWeights.length > 0) {
                        weightedRandomTest = publicTestToRunByCountryWeights(mappedAllPublicTestsWithCountryWeights, userCountry, PUBLIC_TEST_PAIRS_FOR_PAGE_VIEW);
                        testToRunBy = weightedRandomTest.flatMap(function (weightedTest) {
                            var firstPairIndex = testsToCreate.findIndex(function (test) {
                                return test.key === weightedTest.id;
                            });
                            var firstPair = testsToCreate[firstPairIndex];
                            var secondPair = testsToCreate[firstPairIndex + 1];
                            return [firstPair, secondPair];
                        });
                    }
                    else {
                        // If no weights are provided, use the default test values
                        testToRunBy = testsToCreate;
                    }
                    timestamp = getUTCTimestamp();
                    testsToRun = Object.entries(testToRunBy).map(function (_a) {
                        var value = _a[1];
                        return createScheduledTest(2, Number(value.key), String(value.value), 2, timestamp);
                    });
                    results = [];
                    if (!pairedTests) return [3 /*break*/, 2];
                    return [4 /*yield*/, runPairedSyntheticTests(testsToRun)];
                case 1:
                    results = _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, runSyntheticTests(testsToRun)];
                case 3:
                    results = _a.sent();
                    _a.label = 4;
                case 4:
                    // Post results
                    postResults(results);
                    // store results in global
                    window.lastMileResults = results;
                    return [2 /*return*/];
            }
        });
    });
}
// Function to run private benchmark tests based on weights and user country
function runPrivateTestsWithCountryWeights() {
    return InitLastMile_awaiter(this, void 0, void 0, function () {
        var privateBenchmarkString, privateBenchmarkJson, userCountry, transformedPrivateBenchmarkTests, pickedPrivateBenchmarkTests, privateTestsToCreate, timestamp, privateTestsToRun, results;
        return InitLastMile_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    privateBenchmarkString = benchmarkAppConfig.getConfig().privateBenchmarkTestsList;
                    privateBenchmarkJson = JSON.parse(privateBenchmarkString);
                    userCountry = benchmarkAppConfig.getConfig().userCountry;
                    transformedPrivateBenchmarkTests = convertAndFilterPrivateBenchmarkTestsByCountry(privateBenchmarkJson, userCountry);
                    pickedPrivateBenchmarkTests = transformedPrivateBenchmarkTests;
                    if (transformedPrivateBenchmarkTests.length === 0) {
                        console.log('[Catchpoint][Info] JSP - Lastmile: No Private Benchmark Tests to run');
                        return [2 /*return*/];
                    }
                    // If private benchmark tests are more than 4, then pick based on weights else run all
                    if (transformedPrivateBenchmarkTests.length > PRIVATE_TEST_PAIRS_FOR_PAGE_VIEW) {
                        pickedPrivateBenchmarkTests = privateTestToRunByCountryWeights(transformedPrivateBenchmarkTests, PRIVATE_TEST_PAIRS_FOR_PAGE_VIEW);
                    }
                    privateTestsToCreate = pickedPrivateBenchmarkTests.length > 0 && Array.isArray(pickedPrivateBenchmarkTests)
                        ? pickedPrivateBenchmarkTests.flatMap(function (item) {
                            return item.urls.map(function (urlDetail) {
                                return { key: urlDetail.id, value: urlDetail.url };
                            });
                        })
                        : [];
                    timestamp = getUTCTimestamp();
                    privateTestsToRun = Object.entries(privateTestsToCreate).map(function (_a) {
                        var value = _a[1];
                        return createScheduledTest(2, Number(value.key), String(value.value), 2, timestamp);
                    });
                    results = [];
                    return [4 /*yield*/, runPairedPrivateTests(privateTestsToRun)];
                case 1:
                    results = _a.sent();
                    // Post results
                    postResults(results, BenchmarkTestType.Private);
                    return [2 /*return*/];
            }
        });
    });
}
/* harmony default export */ var InitLastMile = (initLastMileScript);

;// CONCATENATED MODULE: ./src/lastmile/lastmile.ts
var lastmile_assign = (undefined && undefined.__assign) || function () {
    lastmile_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return lastmile_assign.apply(this, arguments);
};
var lastmile_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var lastmile_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var lastmile_benchmarkAppConfig = benchmarkAppConfig === null || benchmarkAppConfig === void 0 ? void 0 : benchmarkAppConfig.getConfig();
var SESSION_STORAGE_COUNTRY_ID_KEY = '_CP_CoI';
var parentWindow = (window.parent || window);
var captureSoftNavigationsAfterRouteChange = function (callback) {
    parentWindow.addEventListener('hashchange', callback, false);
    var history = parentWindow.history;
    if (!history) {
        return;
    }
    var functionStr = 'function';
    if (typeof history.go === functionStr) {
        var origGo_1 = history.go;
        history.go = function (delta) {
            origGo_1.call(history, delta);
            callback();
        };
    }
    if (typeof history.back === functionStr) {
        var origBack_1 = history.back;
        history.back = function () {
            origBack_1.call(history);
            callback();
        };
    }
    if (typeof history.forward === functionStr) {
        var origForward_1 = history.forward;
        history.forward = function () {
            origForward_1.call(history);
            callback();
        };
    }
    if (typeof history.pushState === functionStr) {
        var origPush_1 = history.pushState;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        history.pushState = function (data, title, url) {
            origPush_1.call(history, data, title, url);
            callback();
        };
    }
    if (typeof history.replaceState === functionStr) {
        var origReplace_1 = history.replaceState;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        history.replaceState = function (data, title, url) {
            origReplace_1.call(history, data, title, url);
            callback();
        };
    }
};
var callInitLastMileScript = function () {
    // The JS must run in an iframe instead of directly on the page.
    // First check if we are in an iframe already, or if we need to
    // create one.
    if (window.self !== window.top) {
        // console.log('Already in iframe. Executing....');
        InitLastMile();
    }
    else {
        // console.log('Creating IFrame...');
        var iframe = document.createElement('iframe');
        iframe.id = 'lastMileIframe';
        iframe.style.display = 'none'; // Hide the iframe
        iframe.srcdoc = '<script>parent.lastMileInitScript();</script>';
        document.body.appendChild(iframe);
    }
    // Add route change listener to capture soft navigations only for benchmark app.
    if ((lastmile_benchmarkAppConfig === null || lastmile_benchmarkAppConfig === void 0 ? void 0 : lastmile_benchmarkAppConfig.isbenchmarkApp) === "true" && (lastmile_benchmarkAppConfig === null || lastmile_benchmarkAppConfig === void 0 ? void 0 : lastmile_benchmarkAppConfig.appStatus) === 0) {
        captureSoftNavigationsAfterRouteChange(InitLastMile);
    }
};
function runLastMileTests() {
    // Run the tests directly, if its not benchmark app.
    if ((lastmile_benchmarkAppConfig === null || lastmile_benchmarkAppConfig === void 0 ? void 0 : lastmile_benchmarkAppConfig.isbenchmarkApp) === "false") {
        callInitLastMileScript();
    }
    // If it is Benchmark app, then check benchmark app is active, If then run the tests.
    var activeBenchmarkApp = (lastmile_benchmarkAppConfig === null || lastmile_benchmarkAppConfig === void 0 ? void 0 : lastmile_benchmarkAppConfig.appStatus) === 0;
    if ((lastmile_benchmarkAppConfig === null || lastmile_benchmarkAppConfig === void 0 ? void 0 : lastmile_benchmarkAppConfig.isbenchmarkApp) === "true" && activeBenchmarkApp) {
        callInitLastMileScript();
    }
}
var initBenchmarkAppConfig = function () { return lastmile_awaiter(void 0, void 0, void 0, function () {
    var getBenchmarkAppConfigData, appDetails, error_1;
    return lastmile_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                getBenchmarkAppConfigData = function () { return lastmile_awaiter(void 0, void 0, void 0, function () {
                    var response, text, error_2;
                    return lastmile_generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                return [4 /*yield*/, fetch('https://localhost:44394/jp/102638/latest/s.BAC')];
                            case 1:
                                response = _a.sent();
                                if (!response.ok) {
                                    return [2 /*return*/, null];
                                }
                                return [4 /*yield*/, response.text()];
                            case 2:
                                text = _a.sent();
                                if (!text) {
                                    return [2 /*return*/, null];
                                }
                                return [2 /*return*/, JSON.parse(text)];
                            case 3:
                                error_2 = _a.sent();
                                console.error("[Catchpoint][Info] JSP - Lastmile:: Failed to fetch benchmark app config:", error_2);
                                return [2 /*return*/, null];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, getBenchmarkAppConfigData()];
            case 2:
                appDetails = _a.sent();
                benchmarkAppConfig.setAppConfig(lastmile_assign(lastmile_assign({}, benchmarkAppConfig.getConfig()), { appId: appDetails.AppId, appStatus: appDetails.AppStatus }));
                lastmile_benchmarkAppConfig = benchmarkAppConfig.getConfig();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('[Catchpoint][Info] JSP - Lastmile: benchmark app config error', error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var initUserGeoInfo = function () { return lastmile_awaiter(void 0, void 0, void 0, function () {
    var getUserGeoInfo, userCountry, userCoundtryId, error_3;
    return lastmile_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                getUserGeoInfo = function () { return lastmile_awaiter(void 0, void 0, void 0, function () {
                    var geoEndpoint, response, text, data;
                    return lastmile_generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                geoEndpoint = 'https://lst01a.3genlabs.net/hawklogserver/rl.p?gld=1';
                                return [4 /*yield*/, fetch(geoEndpoint, { method: 'POST', body: '' })];
                            case 1:
                                response = _a.sent();
                                if (!response.ok) {
                                    return [2 /*return*/];
                                }
                                return [4 /*yield*/, response.text()];
                            case 2:
                                text = _a.sent();
                                if (!text || text.trim() === '') {
                                    return [2 /*return*/];
                                }
                                try {
                                    data = JSON.parse(text);
                                    return [2 /*return*/, data];
                                }
                                catch (parseError) {
                                    console.error('[Catchpoint][Info] JSP - Lastmile: GeoInfo Invalid JSON response:', text);
                                    return [2 /*return*/];
                                }
                                return [2 /*return*/];
                        }
                    });
                }); };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, getUserGeoInfo()];
            case 2:
                userCountry = _a.sent();
                userCoundtryId = userCountry === null || userCountry === void 0 ? void 0 : userCountry.CoI;
                if (!userCoundtryId) {
                    return [2 /*return*/];
                }
                benchmarkAppConfig.setAppConfig(lastmile_assign(lastmile_assign({}, benchmarkAppConfig.getConfig()), { userCountry: userCoundtryId ? Number(userCoundtryId) : undefined }));
                sessionStorage.setItem(SESSION_STORAGE_COUNTRY_ID_KEY, userCoundtryId);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.error('[Catchpoint][Info] JSP - Lastmile: error fetching user country', error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var setUserGeoInfo = function () { return lastmile_awaiter(void 0, void 0, void 0, function () {
    var userCoundtryId;
    return lastmile_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userCoundtryId = sessionStorage.getItem(SESSION_STORAGE_COUNTRY_ID_KEY);
                if (!userCoundtryId) return [3 /*break*/, 1];
                benchmarkAppConfig.setAppConfig(lastmile_assign(lastmile_assign({}, benchmarkAppConfig.getConfig()), { userCountry: Number(userCoundtryId) }));
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, initUserGeoInfo()];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
function main() {
    return lastmile_awaiter(this, void 0, void 0, function () {
        return lastmile_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!((lastmile_benchmarkAppConfig === null || lastmile_benchmarkAppConfig === void 0 ? void 0 : lastmile_benchmarkAppConfig.isbenchmarkApp) === "true")) return [3 /*break*/, 2];
                    return [4 /*yield*/, initBenchmarkAppConfig()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: 
                // Initialize and set user geo info
                return [4 /*yield*/, setUserGeoInfo()];
                case 3:
                    // Initialize and set user geo info
                    _a.sent();
                    // Check if the document state is already complete
                    if (document.readyState === 'complete') {
                        runLastMileTests();
                    }
                    else {
                        document.addEventListener('readystatechange', function (event) {
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            if (event.target.readyState === 'complete') {
                                runLastMileTests();
                            }
                        });
                    }
                    return [2 /*return*/];
            }
        });
    });
}
if (window.self !== window.top) {
    parent.window.lastMileResults = null;
    parent.window.lastMileInitScript = InitLastMile;
}
else {
    window.lastMileResults = null;
    window.lastMileInitScript = InitLastMile;
}
main();

/******/ })()
;
