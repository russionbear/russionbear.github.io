

var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
}
return t;
};

var __rest = function (s, e) {
var t = {};
for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
    }
return t;
};

var __decorate = function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};

var __generator = function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
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

var __exportStar = function(m, exports) {
for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __createBinding = Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
});

var __values = function (o) {
var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
if (m) return m.call(o);
if (o && typeof o.length === "number") return {
    next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
    }
};
throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = function (o, n) {
var m = typeof Symbol === "function" && o[Symbol.iterator];
if (!m) return o;
var i = m.call(o), r, ar = [], e;
try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
}
catch (error) { e = { error: error }; }
finally {
    try {
        if (r && !r.done && (m = i["return"])) m.call(i);
    }
    finally { if (e) throw e.error; }
}
return ar;
};

var __spread = function () {
for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
return ar;
};

var __spreadArrays = function () {
for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
return r;
};

var __await = function (v) {
return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var g = generator.apply(thisArg, _arguments || []), i, q = [];
return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
function fulfill(value) { resume("next", value); }
function reject(value) { resume("throw", value); }
function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
var i, p;
return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

var __asyncValues = function (o) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var m = o[Symbol.asyncIterator], i;
return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

var __makeTemplateObject = function (cooked, raw) {
if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
o["default"] = v;
};

var __importStar = function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
__setModuleDefault(result, mod);
return result;
};

var __importDefault = function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

var __classPrivateFieldGet = function (receiver, privateMap) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
}
return privateMap.get(receiver);
};

var __classPrivateFieldSet = function (receiver, privateMap, value) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
}
privateMap.set(receiver, value);
return value;
};

var __reflect = function(p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Battle/index.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/Main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "app", function() { return /* binding */ Main_app; });

// EXTERNAL MODULE: ./src/cookie.ts
var cookie = __webpack_require__("./src/cookie.ts");

// CONCATENATED MODULE: ./src/LoadingUI.ts
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
class LoadingUI extends egret.Sprite {
    constructor() {
        super();
        this.createView();
    }
    createView() {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    }
    onProgress(current, total) {
        this.textField.text = `Loading...${current}/${total}`;
    }
}
window["LoadingUI"] = LoadingUI;
__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]); 

// CONCATENATED MODULE: ./src/Battle/MapDataFormat.ts
const BattleGeoTypes = [
    "beach",
    "bridge",
    "forest",
    "lake",
    "mountain",
    "plain",
    "road",
    "rocks",
    "sea",
];
const BattleWeatherTypes = ["sunny", "snow", "hot", "rainy"];
const BattleLevelTypes = ["normal", ""];
const BattleBuildTypes = [
    "city",
    "airport",
    "capital",
    "factory",
    "shipyard",
    "stronghold",
];
const BattleUnitTypes = [
    "footmen",
    "B2",
    "CV",
    "aagun",
    "battleship",
    "bigtank",
    "missileship",
    "chariot",
    "conveyor",
    "destroyer",
    "fighter",
    "gunnery",
    "helicopter",
    "howitzer",
    "launchV",
    "scout",
    "submarine",
    "tank",
    "thaad",
    "transportship",
    "motorcycle",
    "elite",
    "aew",
    "transport",
];
const BattleUnitStateTypes = [
    "loading",
    "bullet",
    "occupy",
    "oil",
    "supplies",
    "diving",
    "stealth",
];
const PlayerFlagTypes = ["red", "blue", "green", "yellow"];
/******************************************************************/
/******************************动作，action************************/
/******************************************************************/
var BActionType;
(function (BActionType) {
    BActionType["wait"] = "wait";
    BActionType["attack"] = "attack";
    BActionType["load"] = "load";
    BActionType["occupy"] = "occupy";
    BActionType["supply"] = "supply";
    BActionType["diving"] = "diving";
    BActionType["buy"] = "buy";
    BActionType["sortie"] = "sortie";
    BActionType["boutEnd"] = "boutEnd";
    BActionType["udpateMap"] = "updateMap";
})(BActionType || (BActionType = {}));
window["BActionType"] = BActionType;

// CONCATENATED MODULE: ./src/Battle/MapData.ts
/**
 * MathManBase: 核心算法
 * StaticDataMng 和 BattleMapData 是管理数据的核心类
 *
 *
 */

class MapData_MathManBase {
    static setMapSize(w, h) {
        this.mapWidth = w;
        this.mapHeight = h;
    }
    countCostMap(map, typeName, enemies) {
        let engineType = staticDataMng.unit[typeName]["engine"];
        console.log('engine', engineType);
        let rlt = map.geoLayer.map((item) => {
            if (staticDataMng.engineCost[engineType][BattleGeoTypes[item]] === undefined) {
                // error
                console.log(engineType, item, BattleGeoTypes[item]);
            }
            return staticDataMng.engineCost[engineType][BattleGeoTypes[item]];
        });
        for (let i in map.unitLayer) {
            if (enemies.indexOf(map.unitLayer[i].flag) !== -1) {
                rlt[i] = MapData_MathManBase.MAX_NU;
            }
        }
        return rlt;
    }
    countMoveArea(costMap, posId, oil) {
        let [width, height] = [MapData_MathManBase.mapWidth, MapData_MathManBase.mapHeight];
        let [x, y] = [posId % width, Math.floor(posId / width)];
        let rlt = {};
        let directions = [1, 0, -1, 0, 0, 1, 0, -1];
        let queue = [[x, y, oil]];
        while (queue.length !== 0) {
            let [x_, y_, now_oil] = queue.splice(0, 1)[0];
            rlt[x_ + y_ * width] = now_oil;
            for (let i = 0; i < 4; ++i) {
                let [new_x, new_y] = [
                    directions[i * 2] + x_,
                    directions[i * 2 + 1] + y_,
                ];
                if (new_x < 0 || new_y < 0 || new_x >= width || new_y >= height) {
                    continue;
                }
                let target_oil = rlt[new_x + new_y * width];
                let target_oil_cost = costMap[new_x + new_y * width];
                if (target_oil === undefined && now_oil - target_oil_cost >= 0) {
                    queue.push([new_x, new_y, now_oil - target_oil_cost]);
                }
                else if (target_oil !== undefined &&
                    now_oil - target_oil_cost > target_oil) {
                    queue.push([new_x, new_y, now_oil - target_oil_cost]);
                }
            }
        }
        return rlt;
    }
    /**
     *
     * @param costMap
     * @param moveArea
     * @param posId
     * @param targetId
     * @param oil
     * @returns
     */
    countRoads(costMap, moveArea, posId, targetId, oil) {
        let [width, height] = [MapData_MathManBase.mapWidth, MapData_MathManBase.mapHeight];
        let [prim_x, prim_y] = [posId % width, Math.floor(posId / width)];
        let [target_x, target_y] = [targetId % width, Math.floor(targetId / width)];
        if (posId === targetId) {
            return [[target_x, target_y, oil]];
        }
        let roads = [];
        let directions = [1, 0, -1, 0, 0, 1, 0, -1];
        let queue = [[target_x, target_y, oil]];
        while (queue.length) {
            let now_road = queue.splice(0, 1)[0];
            let now_oil = now_road.pop();
            let [x_, y_] = [now_road[0], now_road[1]];
            for (let i = 0; i < 4; ++i) {
                let [new_x, new_y] = [
                    directions[i * 2] + x_,
                    directions[i * 2 + 1] + y_,
                ];
                if (moveArea[new_x + new_y * width] === undefined) {
                    continue;
                }
                let target_oil_cost = costMap[new_x + new_y * width];
                if (now_oil - target_oil_cost >= 0) {
                    // console.log("now oil - cost oil", now_oil - target_oil_cost, new_x, new_y)
                    queue.push([new_x, new_y, ...now_road, now_oil - target_oil_cost]);
                }
                if (new_x === prim_x && new_y === prim_y) {
                    roads.push([new_x, new_y, ...now_road, now_oil - target_oil_cost]);
                }
            }
        }
        // console.log('map width', [...roads])
        let rlt_roads = [];
        for (let i = 0; i < roads.length; ++i) {
            let old_road = roads[i];
            let tmp_road = [];
            // console.log("swap oil", oil, old_road[old_road.length - 1]);
            tmp_road.push(oil - old_road[old_road.length - 1]);
            for (let j = 0; j < old_road.length - 1; j += 2) {
                tmp_road.push(old_road[j] + old_road[j + 1] * width);
            }
            // console.log([...roads[i]], tmp_road)
            // roads[i] = tmp_road;
            rlt_roads.push(tmp_road);
        }
        // console.log('map width', width, rlt_roads)
        // for (let i = 0; i < roads.length; ++i) {
        //     roads[i][roads[i].length - 1] = oil - roads[i][roads[i].length - 1]
        // }
        // roads = roads.sort((a, b) => a.length > b.length ? 1 : 0)
        // return roads;
        rlt_roads = rlt_roads.sort((a, b) => (a.length > b.length ? 1 : 0));
        return rlt_roads;
    }
    countAtkArea(posId, minDistance, maxDistance) {
        let [width, height] = [MapData_MathManBase.mapWidth, MapData_MathManBase.mapHeight];
        let [prim_x, prim_y] = [posId % width, Math.floor(posId / width)];
        let targetArea = {};
        for (let range = minDistance; range <= maxDistance; ++range) {
            for (let [x, y] = [0, range]; x <= range; ++x, y = range - x) {
                let handlePoints = [];
                if (x === 0) {
                    handlePoints.push(x, y, x, -y);
                }
                else if (y == 0) {
                    handlePoints.push(x, y, -x, y);
                }
                else {
                    handlePoints.push(x, y, -x, y, x, -y, -x, -y);
                }
                for (let i = 0; i < handlePoints.length; i += 2) {
                    let [now_x, now_y] = [
                        handlePoints[i] + prim_x,
                        handlePoints[i + 1] + prim_y,
                    ];
                    if (now_x < 0 || now_y < 0 || now_x >= width || now_y >= height) {
                        continue;
                    }
                    targetArea[now_x + now_y * width] = false;
                }
            }
        }
        return targetArea;
    }
    countNearestTarget(posId, costMap, typeName, enemies, unitLayer) {
        let [width, height] = [MapData_MathManBase.mapWidth, MapData_MathManBase.mapHeight];
        let [x, y] = [posId % width, Math.floor(posId / width)];
        let rlt = {};
        let gfTable = staticDataMng.gf[typeName];
        let directions = [1, 0, -1, 0, 0, 1, 0, -1];
        let queue = [[x, y, (width + height) * 3]];
        let deep = 0;
        while (queue.length !== 0) {
            let [x_, y_, now_oil] = queue.splice(0, 1)[0];
            let now_posId = x_ + y_ * width;
            rlt[x_ + y_ * width] = now_oil;
            // deep ++;
            // if(deep>80){
            //   return
            // }
            // console.log("deep", now_posId)
            for (let i = 0; i < 4; ++i) {
                let [new_x, new_y] = [
                    directions[i * 2] + x_,
                    directions[i * 2 + 1] + y_,
                ];
                if (new_x < 0 || new_y < 0 || new_x >= width || new_y >= height) {
                    continue;
                }
                let tmp_tmp_target = new_x + new_y * width;
                if (unitLayer[tmp_tmp_target] !== undefined &&
                    enemies.indexOf(unitLayer[tmp_tmp_target].flag) !== -1 &&
                    gfTable[unitLayer[tmp_tmp_target].type] !== 0) {
                    return tmp_tmp_target;
                }
                let target_oil = rlt[new_x + new_y * width];
                let target_oil_cost = costMap[new_x + new_y * width];
                if (target_oil === undefined) {
                    if (now_oil > target_oil_cost) {
                        queue.push([new_x, new_y, now_oil - target_oil_cost]);
                    }
                }
                else {
                    // console.log(target_oil, 'targetoil')
                    // return
                    if (now_oil - target_oil_cost > target_oil) {
                        queue.push([new_x, new_y, now_oil - target_oil_cost]);
                    }
                }
            }
        }
        return -1;
    }
    countAStar(targetId, posId, costMap) {
        let [width, height] = [MapData_MathManBase.mapWidth, MapData_MathManBase.mapHeight];
        let [prim_x, prim_y] = [posId % width, Math.floor(posId / width)];
        let [target_x, target_y] = [targetId % width, Math.floor(targetId / width)];
        let old_cost = [];
        let new_cost = [];
        for (let i = 0; i < costMap.length; i++) {
            old_cost.push(-1);
            new_cost.push(0);
        }
        let next_map = {};
        let finded = false;
        old_cost[posId] = 0;
        new_cost[posId] = Math.abs(prim_x - target_x) + Math.abs(prim_y - target_y);
        let directions = [1, 0, -1, 0, 0, 1, 0, -1];
        let queue = [posId];
        while (queue.length) {
            let now_posId = queue.splice(0, 1)[0];
            if (now_posId === targetId) {
                finded = true;
                break;
            }
            let [now_x, now_y] = [now_posId % width, Math.floor(now_posId / width)];
            for (let i = 0; i < 8; i += 2) {
                let [x_, y_] = [now_x + directions[i], now_y + directions[i + 1]];
                if (x_ < 0 || y_ < 0 || x_ >= width || y_ >= height) {
                    continue;
                }
                let posId_1 = x_ + y_ * width;
                let cost_ = old_cost[now_posId] + costMap[posId_1];
                let preCost_ = Math.abs(target_x - x_) + Math.abs(target_y - y_);
                if (old_cost[posId_1] !== -1) {
                    if (cost_ + preCost_ < old_cost[posId_1] + new_cost[posId_1]) {
                        old_cost[posId_1] = cost_;
                        new_cost[posId_1] = preCost_;
                        queue.push(posId_1);
                        next_map[posId_1] = now_posId;
                    }
                    else {
                        continue;
                    }
                }
                else {
                    old_cost[posId_1] = cost_;
                    new_cost[posId_1] = preCost_;
                    queue.push(posId_1);
                    next_map[posId_1] = now_posId;
                }
                queue.sort((arg1, arg2) => {
                    return old_cost[arg1] + new_cost[arg1] >
                        old_cost[arg2] + new_cost[arg2]
                        ? 1
                        : -1;
                });
            }
        }
        if (!finded) {
            return [];
        }
        let rlt_road = [targetId];
        let iter_key = targetId;
        while (next_map[iter_key] !== posId) {
            iter_key = next_map[iter_key];
            rlt_road.push(iter_key);
        }
        rlt_road.push(posId);
        rlt_road.reverse();
        return rlt_road;
    }
    countCityCostMap(posId, costMap) {
        let [width, height] = [MapData_MathManBase.mapWidth, MapData_MathManBase.mapHeight];
        let rlt = {};
        let directions = [1, 0, -1, 0, 0, 1, 0, -1];
        let queue = {};
        queue[posId] = MapData_MathManBase.MAX_NU;
        let queue_keys = Object.keys(queue);
        while (queue_keys.length) {
            let tmp_key = parseInt(queue_keys[0]);
            let [x_, y_, now_oil] = [
                tmp_key % width,
                Math.floor(tmp_key / width),
                queue[tmp_key],
            ];
            delete queue[tmp_key];
            rlt[tmp_key] = now_oil;
            for (let i = 0; i < 4; ++i) {
                let [new_x, new_y] = [
                    directions[i * 2] + x_,
                    directions[i * 2 + 1] + y_,
                ];
                let tmp_posId_1 = new_x + new_y * width;
                if (rlt[tmp_posId_1] !== undefined ||
                    new_x < 0 ||
                    new_y < 0 ||
                    new_x >= width ||
                    new_y >= height) {
                    continue;
                }
                let target_oil_cost = costMap[tmp_posId_1];
                if (queue[tmp_posId_1] === undefined) {
                    queue[tmp_posId_1] = now_oil - target_oil_cost;
                }
                else if (queue[tmp_posId_1] < now_oil - target_oil_cost) {
                    queue[tmp_posId_1] = now_oil - target_oil_cost;
                }
            }
            queue_keys = Object.keys(queue);
        }
        return rlt;
    }
}
MapData_MathManBase.MAX_NU = 99999;
window["MathManBase"] = MapData_MathManBase;
__reflect(MapData_MathManBase.prototype,"MathManBase",[]); 
/**
 * 假设一切数据都格式正确
 * 可以不断更改
 */
class MapData_StaticDataMng {
    //   public moveSpeed: number = 200;  is deleted
    constructor() { }
    static getInstance() {
        if (!MapData_StaticDataMng.instance) {
            MapData_StaticDataMng.instance = new MapData_StaticDataMng();
        }
        return MapData_StaticDataMng.instance;
    }
    //   public mapGlobalSetting: BattleMapGlobalProps = {
    //     dailyMoney: 1000,
    //     cities: 0,
    //     bouts: 0,
    //     fogOpen: false,
    //     weather: "snowy",
    //     aiLvl: "",
    //   };
    //   public usersSetting: BattleMapUserProps[];
    //   private constructor() {}
    //   public updateMapSetting({ mapGlobalSetting, usersSetting }) {
    //     this.mapGlobalSetting = mapGlobalSetting;
    //     this.usersSetting = usersSetting;
    //   }
    init(total) {
        // let total = RES.getRes("battle_data_base");
        this.engineCost = total["engineCost"];
        this.viewCost = total["viewCost"];
        this.gf = total["gf"];
        this.gfGeo_g = total["gfGeo_g"];
        this.gfGeo_f = total["gfGeo_f"];
        this.weather_g = total["weather_g"];
        this.weather_f = total["weather_f"];
        this.unit = total["unit"];
        this.commander = total["commander"];
        let buildTable = {};
        for (let i in total["unit"]) {
            let buildings = total["unit"][i]["builFrom"].split(",");
            for (let j of buildings) {
                if (buildTable[j] === undefined) {
                    buildTable[j] = [i];
                }
                else {
                    buildTable[j].push(i);
                }
            }
        }
        this.buildTable = buildTable;
    }
    /**
     * checkData
     */
    //   public checkData() {
    //     // geo types
    //     let geotypes: string[] = Object.keys(
    //       StaticDataManager.engineCost[Object.keys(StaticDataManager.engineCost)[0]]
    //     );
    //     for (let i = 0; i < geotypes.length; ++i) {
    //       for (let j = i + 1; j < geotypes.length; ++j) {
    //         if (geotypes[i] === geotypes[j]) {
    //           throw new Error("资源文件: geo types error1");
    //         }
    //       }
    //     }
    //     if (
    //       StaticDataManager._checkDataIsSame(
    //         geotypes,
    //         Object.keys(
    //           StaticDataManager.viewCost[Object.keys(StaticDataManager.viewCost)[0]]
    //         )
    //       ) &&
    //       StaticDataManager._checkDataIsSame(
    //         geotypes,
    //         Object.keys(
    //           StaticDataManager.gfGeo_g[Object.keys(StaticDataManager.gfGeo_g)[0]]
    //         )
    //       ) &&
    //       StaticDataManager._checkDataIsSame(
    //         geotypes,
    //         Object.keys(
    //           StaticDataManager.gfGeo_f[Object.keys(StaticDataManager.gfGeo_f)[0]]
    //         )
    //       )
    //     ) {
    //       throw new Error("resouce geo error2");
    //     }
    //     // unit types
    //     let unittypes: string[] = Object.keys(StaticDataManager.gf);
    //     for (let i = 0; i < unittypes.length; ++i) {
    //       for (let j = i + 1; j < unittypes.length; ++j) {
    //         if (unittypes[i] === unittypes[j]) {
    //           throw new Error("资源文件: unit types error1");
    //         }
    //       }
    //     }
    //     if (
    //       StaticDataManager._checkDataIsSame(
    //         unittypes,
    //         Object.keys(StaticDataManager.gf)
    //       ) &&
    //       StaticDataManager._checkDataIsSame(
    //         unittypes,
    //         Object.keys(StaticDataManager.gfGeo_g)
    //       ) &&
    //       StaticDataManager._checkDataIsSame(
    //         unittypes,
    //         Object.keys(StaticDataManager.gfGeo_f)
    //       ) &&
    //       StaticDataManager._checkDataIsSame(
    //         unittypes,
    //         Object.keys(StaticDataManager.weather_g)
    //       ) &&
    //       StaticDataManager._checkDataIsSame(
    //         unittypes,
    //         Object.keys(StaticDataManager.weather_f)
    //       ) &&
    //       StaticDataManager._checkDataIsSame(
    //         unittypes,
    //         Object.keys(StaticDataManager.unit)
    //       )
    //     ) {
    //       throw new Error("resource unit types error2");
    //     }
    //   }
    //   private _checkDataIsSame(keys1: string[], keys2: string[]) {
    //     if (keys1.length !== keys2.length) {
    //       return false;
    //     }
    //     for (let i of keys1) {
    //       if (!(i in keys2)) {
    //         return false;
    //       }
    //     }
    //     return true;
    //   }
    countAtkResult(atk_sprite, def_sprite, atk_geo, def_geo) {
        // from: geo hero unit weather
        // to: g, f, t_g, t_f
        let rlt = {
            restBullet: atk_sprite.bullet,
            restBlood: atk_sprite.blood,
            targetRestBullet: def_sprite.bullet,
            targetRestBlood: def_sprite.blood,
        };
        // 远程攻击
        if (this.unit[atk_sprite.type]['atkMaxDistance'] > 1) {
            if (rlt.restBullet > 0) {
                rlt.restBullet--;
                rlt.targetRestBlood -= this.gf[atk_sprite.type][def_sprite.type] * atk_sprite.blood / 10;
            }
        }
        else {
            // 敌方主动防御
            if (this.unit[def_sprite.type]["defensiveAtk"]) {
                if (rlt.targetRestBullet > 0) {
                    rlt.targetRestBullet--;
                    rlt.restBlood -= this.gf[def_sprite.type][atk_sprite.type] * def_sprite.blood / 10;
                }
                if (rlt.restBullet > 0 && rlt.restBlood > 0) {
                    rlt.restBullet--;
                    rlt.targetRestBlood -= this.gf[atk_sprite.type][def_sprite.type] * rlt.restBlood / 10;
                }
            }
            else {
                if (rlt.restBullet > 0) {
                    rlt.restBullet--;
                    rlt.targetRestBlood -= this.gf[atk_sprite.type][def_sprite.type] * rlt.restBlood / 10;
                }
                // 敌方远程单位不能反击
                if (this.unit[def_sprite.type]['atkMaxDistance'] > 1 && rlt.targetRestBullet > 0 && rlt.targetRestBlood > 0) {
                    rlt.targetRestBullet--;
                    rlt.restBlood -= this.gf[def_sprite.type][atk_sprite.type] * rlt.targetRestBlood / 10;
                }
            }
        }
        return rlt;
    }
    makeKeyAndPrice(buildType) {
        let rlt = {};
        if (this.buildTable[buildType] !== undefined) {
            for (let i of this.buildTable[buildType]) {
                // console.log()
                // @ts-ignore
                rlt[BattleUnitTypes.indexOf(i)] = this.unit[i]['costMoney'];
            }
        }
        // console.log(buildType, this.buildTable, this.buildTable[buildType])
        return rlt;
    }
}
MapData_StaticDataMng.instance = null;
window["StaticDataMng"] = MapData_StaticDataMng;
__reflect(MapData_StaticDataMng.prototype,"StaticDataMng",[]); 
const staticDataMng = MapData_StaticDataMng.getInstance();
/**
 * 这个是核心数据哦，
 */
class MapData_BattleMapData {
    constructor() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new MapData_BattleMapData();
        }
        return this.instance;
    }
    initMap(data) {
        // for (let i in data) {
        //   this["i"] = data[i];
        // }
        this.geoLayer = data["geoLayer"];
        this.buildLayer = data["buildLayer"];
        this.unitLayer = data["unitLayer"];
        this.sizeState = data["sizeState"];
        this.globalSetting = data["globalSetting"];
        this.playerSetting = data["playerSetting"];
        // console.log(data, 'map')
        MapData_MathManBase.mapHeight = this.sizeState.height;
        MapData_MathManBase.mapWidth = this.sizeState.width;
    }
    updateGlobalSetting(data) {
        this.globalSetting = data;
    }
    updateUsersSetting(data) {
        this.playerSetting = data;
    }
    updateMap(data) {
        this.buildLayer = data["buildLayer"];
        this.unitLayer = data.unitLayer;
    }
    handleBoutEnd(nowFlag) {
        console.log('boutEnd', nowFlag);
        // let flags = Object.keys(this.playerSetting)
        // let now_index = flags.indexOf(nowFlag);
        let cities = 0;
        // do {
        //   now_index = (now_index + 1) % flags.length;
        // } while (this.playerSetting[nowFlag].isOver);
        // let new_flag = flags[now_index];
        let new_flag = this.countNewFlag(nowFlag);
        for (let i in this.unitLayer) {
            let tmp_unit = this.unitLayer[i];
            if (tmp_unit.flag === nowFlag) {
                tmp_unit.moved = false;
            }
            else if (tmp_unit.flag === new_flag) {
                tmp_unit.oil -= staticDataMng.unit[tmp_unit.type]['minDailyOilCost'];
                if (tmp_unit.oil < 0) {
                    delete this.unitLayer[i];
                }
            }
        }
        for (let i in this.buildLayer) {
            if (this.buildLayer[i].flag === new_flag) {
                cities++;
            }
        }
        this.playerSetting[new_flag].nowMoney += this.globalSetting.dailyMoney * cities;
    }
    /**
     * 这里没有flag 判断
     * @param data
     * @returns
     */
    updateByAction(data, myFlag) {
        let tmp_unit;
        let tmp_unit_2;
        let enemies = this.playerSetting[myFlag].enemies;
        switch (data.type) {
            case BActionType.boutEnd:
                for (let i in this.unitLayer) {
                    if (this.unitLayer[i].flag === data.nowFlag) {
                        this.unitLayer[i].moved = false;
                    }
                }
                this.handleBoutEnd(data.nowFlag);
                break;
            case BActionType.buy:
                tmp_unit = this.unitLayer[data.posId];
                if (tmp_unit) {
                    return 1;
                }
                this.playerSetting[data.unit.flag].nowMoney -= staticDataMng.unit[data.unit.type]['costMoney'];
                data.unit.moved = true;
                this.unitLayer[data.posId] = data.unit;
                break;
            case BActionType.supply:
                for (let i of data.targetIds) {
                    if (!this.unitLayer[i] || this.unitLayer[i].flag !== myFlag || this.unitLayer[i].moved) {
                        return 1;
                    }
                }
                for (let i of data.targetIds) {
                    this.unitLayer[i].moved = true;
                }
                this.unitLayer[data.targetIds[data.targetIds.length - 1]].supply = data.supply;
                break;
            case BActionType.load:
                if (!this.unitLayer[data.road[0]]
                    || data.road.length <= 1
                    || !this.unitLayer[data.road[data.road.length - 1]]
                // (data.road.length > 1 &&
                //   this.unitLayer[data.road[data.road.length - 1]])
                ) {
                    return 1;
                }
                tmp_unit = this.unitLayer[data.road[0]];
                tmp_unit_2 = this.unitLayer[data.road[data.road.length - 1]];
                if (myFlag !== tmp_unit.flag || tmp_unit_2.flag !== myFlag) {
                    return 2;
                }
                tmp_unit.oil = data.restOil;
                tmp_unit.moved = true;
                tmp_unit_2.loadings.splice(0, 0, tmp_unit);
                delete this.unitLayer[data.road[0]];
                break;
            case BActionType.sortie:
                if (!this.unitLayer[data.road[0]] ||
                    (data.road.length > 1 &&
                        this.unitLayer[data.road[data.road.length - 1]])) {
                    return 1;
                }
                tmp_unit = this.unitLayer[data.road[0]];
                tmp_unit.loadings = data.nowLoading;
                tmp_unit_2 = tmp_unit.loadings[data.childrenId];
                tmp_unit.loadings = data.nowLoading.filter((item, index) => index != data.childrenId);
                tmp_unit_2.oil = data.restOil;
                tmp_unit_2.moved = true;
                this.unitLayer[data.road[data.road.length - 1]] = tmp_unit_2;
                // if (data.road.length > 1) {
                //   delete this.unitLayer[data.road[0]];
                // }
                break;
            case BActionType.udpateMap:
                // if(data.geo!==undefined
                //   ||data.build!==un)
                if (data.geo !== undefined) {
                    this.geoLayer = data.geo;
                }
                if (data.build !== undefined) {
                    this.buildLayer = data.build;
                }
                if (data.unit !== undefined) {
                    this.unitLayer = data.unit;
                }
                if (data.playerInfo !== undefined) {
                    this.updateUsersSetting(data.playerInfo);
                }
                break;
            default:
                if (!this.unitLayer[data.road[0]] ||
                    (data.road.length > 1 &&
                        this.unitLayer[data.road[data.road.length - 1]])) {
                    return 1;
                }
                tmp_unit = this.unitLayer[data.road[0]];
                if (myFlag !== tmp_unit.flag) {
                    return 2;
                }
                switch (data.type) {
                    case BActionType.wait:
                        tmp_unit.oil = data.restOil;
                        tmp_unit.moved = true;
                        this.unitLayer[data.road[data.road.length - 1]] = tmp_unit;
                        if (data.road.length > 1) {
                            delete this.unitLayer[data.road[0]];
                        }
                        break;
                    /**
                     * can't destroyed both
                     */
                    case BActionType.attack:
                        let unit_destroyed_flags = [];
                        tmp_unit_2 = this.unitLayer[data.targetId];
                        if (!tmp_unit_2 || enemies.indexOf(tmp_unit_2.flag) === -1) {
                            console.log(tmp_unit_2, enemies);
                            return 2;
                        }
                        this.unitLayer[data.road[data.road.length - 1]] = tmp_unit;
                        if (data.road.length > 1) {
                            delete this.unitLayer[data.road[0]];
                        }
                        if (data.restBlood < 0.5) {
                            unit_destroyed_flags.push(tmp_unit.flag);
                            delete this.unitLayer[data.road[0]];
                        }
                        else {
                            tmp_unit.oil = data.restOil;
                            tmp_unit.moved = true;
                            tmp_unit.blood = data.restBlood;
                            tmp_unit.bullet = data.restBullet;
                        }
                        if (data.targetRestBlood < 0.5) {
                            unit_destroyed_flags.push(tmp_unit_2.flag);
                            delete this.unitLayer[data.targetId];
                        }
                        else {
                            tmp_unit_2.bullet = data.targetRestBullet;
                            tmp_unit_2.blood = data.targetRestBlood;
                        }
                        for (let i of unit_destroyed_flags) {
                            let tmp_unit_desctroyed_keys = Object.keys(this.unitLayer);
                            if (tmp_unit_desctroyed_keys.filter(item => this.unitLayer[parseInt(item)].flag === i).length === 0) {
                                this.destroyPower(i);
                                return -1;
                            }
                        }
                        break;
                    case BActionType.occupy:
                        tmp_unit.oil = data.restOil;
                        tmp_unit.moved = true;
                        tmp_unit.occupied = data.occupy;
                        let occupy_old_flag = this.buildLayer[data.road[data.road.length - 1]].flag;
                        if (tmp_unit.occupied >= 20) {
                            this.buildLayer[data.road[data.road.length - 1]].flag = tmp_unit.flag;
                            tmp_unit.occupied = 0;
                        }
                        this.unitLayer[data.road[data.road.length - 1]] = tmp_unit;
                        if (data.road.length > 1) {
                            delete this.unitLayer[data.road[0]];
                        }
                        if (occupy_old_flag !== tmp_unit.flag && this.buildLayer[data.road[data.road.length - 1]].type === "capital") {
                            this.takePlacePower(occupy_old_flag, tmp_unit.flag);
                            return -1;
                        }
                        break;
                    case BActionType.diving:
                        tmp_unit.oil = data.restOil;
                        tmp_unit.moved = true;
                        tmp_unit.isDiving = data.diving;
                        this.unitLayer[data.road[data.road.length - 1]] = tmp_unit;
                        if (data.road.length > 1) {
                            delete this.unitLayer[data.road[0]];
                        }
                        break;
                    default:
                        console.log("error action", data);
                        break;
                }
        }
        // console.log(this.unitLayer)
    }
    isGameOver(nowFlag) {
        let tmp_keys = Object.keys(this.playerSetting);
        let last_users = tmp_keys.filter(item => !this.playerSetting[item].isOver);
        if (last_users.length === 1) {
            return last_users[0];
        }
        let tmp_builds = Object.keys(this.buildLayer);
        if (this.globalSetting.cities > 0
            && tmp_builds
                .filter(item => this.buildLayer[parseInt(item)].flag === nowFlag).length > this.globalSetting.cities) {
            return nowFlag;
        }
        if (this.globalSetting.bouts > 0 && this.playerSetting[nowFlag].nowBout >= this.globalSetting.bouts) {
            return nowFlag;
        }
    }
    countNewFlag(nowFlag) {
        let flags = Object.keys(this.playerSetting);
        let now_index = flags.indexOf(nowFlag);
        do {
            now_index = (now_index + 1) % flags.length;
        } while (this.playerSetting[nowFlag].isOver);
        let new_flag = flags[now_index];
        return new_flag;
    }
    takePlacePower(ov, nv) {
        if (ov === "none") {
            return;
        }
        for (let i in this.buildLayer) {
            if (this.buildLayer[i].flag === ov) {
                if (this.buildLayer[i].type === "capital") {
                    this.buildLayer[i].type = "city";
                }
                this.buildLayer[i].flag = nv;
            }
        }
        for (let i in this.unitLayer) {
            if (this.unitLayer[i].flag === ov) {
                this.unitLayer[i].flag = nv;
            }
        }
        this.playerSetting[ov].isOver = true;
    }
    destroyPower(flag) {
        for (let i in this.buildLayer) {
            if (this.buildLayer[i].flag === flag) {
                if (this.buildLayer[i].type === "capital") {
                    this.buildLayer[i].type = "city";
                }
                this.buildLayer[i].flag = "none";
            }
        }
        for (let i in this.unitLayer) {
            if (this.unitLayer[i].flag === flag) {
                delete this.unitLayer[i];
            }
        }
        this.playerSetting[flag].isOver = true;
    }
    toJson() {
        return {
            geoLayer: this.geoLayer,
            buildLayer: this.buildLayer,
            unitLayer: this.unitLayer,
            sizeState: this.sizeState,
            globalSetting: this.globalSetting,
            playerSetting: this.playerSetting
        };
    }
}
window["BattleMapData"] = MapData_BattleMapData;
__reflect(MapData_BattleMapData.prototype,"BattleMapData",["BattleMapProps"]); 
class MapData_DataMaker {
    static makeBattleMap(h, w) {
        /**
             *
             * 'sea',
            'beach',
            'mountain',
            'forest',
            'plain',
            'lake',
            'road',
            'rocks',
            'bridge'
             */
        const tMap_1 = {
            sizeState: { x: 0, y: 0, height: 10, width: 10, scale: 1 },
            geoLayer: [
                4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                4, 4, 4, 4,
            ],
            unitLayer: {
                0: {
                    type: "footmen",
                    oil: 10,
                    blood: 10,
                    bullet: 10,
                    occupied: 0,
                    isDiving: false,
                    moved: false,
                    flag: "red",
                    loadings: [],
                    supply: {},
                },
                2: {
                    type: "transport",
                    oil: 10,
                    blood: 10,
                    bullet: 10,
                    occupied: 0,
                    isDiving: false,
                    moved: false,
                    flag: "red",
                    loadings: [
                        {
                            type: "footmen",
                            oil: 10,
                            blood: 10,
                            bullet: 10,
                            occupied: 0,
                            isDiving: false,
                            moved: false,
                            flag: "red",
                            loadings: [],
                            supply: {},
                        },
                    ],
                    supply: {},
                },
                11: {
                    type: "footmen",
                    oil: 10,
                    blood: 10,
                    bullet: 10,
                    occupied: 0,
                    isDiving: false,
                    moved: false,
                    flag: "blue",
                    loadings: [],
                    supply: {},
                },
            },
            buildLayer: {},
            globalSetting: {
                dailyMoney: 1000,
                cities: 0,
                bouts: 0,
                fogOpen: false,
                weather: "suny",
                aiLvl: "",
            },
            playerSetting: {
                red: this.makePlaySetting("red"),
                blue: this.makePlaySetting('blue')
            },
        };
        let range = 0;
        let tmp_map = {
            sizeState: {
                x: 0,
                y: 0,
                scale: 1,
                width: w,
                height: h,
            },
            geoLayer: [],
            buildLayer: {},
            unitLayer: {},
            globalSetting: {
                dailyMoney: 1000,
                cities: 0,
                bouts: 0,
                fogOpen: false,
                weather: "suny",
                aiLvl: "",
            },
            playerSetting: {
                red: this.makePlaySetting("red"),
                blue: this.makePlaySetting('blue')
            },
        };
        // geo
        range = BattleGeoTypes.length;
        for (let i = 0; i < h * w; ++i) {
            tmp_map.geoLayer.push(Math.floor(Math.random() * range));
        }
        // unit
        range = BattleUnitTypes.length;
        for (let i = 0; i < h * w; ++i) {
            if (Math.random() < 0.01) {
                tmp_map.unitLayer[i] = {
                    type: BattleUnitTypes[0],
                    blood: 10,
                    bullet: 10,
                    oil: 40,
                    supply: {},
                    loadings: [],
                    moved: false,
                    isDiving: false,
                    flag: "red",
                    occupied: 0,
                };
                // tmp_map.unitLayer.push(Math.floor(Math.random() * range));
            }
        }
        // console.log(tmp_map.geoLayer.length)
        // tmp_map.buildLayer[0] = {
        //     type: "city",
        //     flag: "blue"
        // }
        tmp_map.unitLayer[0] = {
            type: "transport",
            blood: 10,
            bullet: 10,
            oil: 40,
            supply: {},
            loadings: [],
            moved: false,
            isDiving: false,
            flag: "red",
            occupied: 0,
        };
        // return tMap_1;
        return tmp_map;
    }
    static makeUnitProps(typeName, flag) {
        // console.log('static',staticDataMng.unit[typeName]["engineOil"])
        return {
            type: typeName,
            oil: staticDataMng.unit[typeName]["engineOil"],
            blood: 10,
            bullet: staticDataMng.unit[typeName]["bullet"],
            occupied: 0,
            isDiving: false,
            moved: false,
            flag: flag,
            loadings: [],
            supply: {},
        };
    }
    static makePlaySetting(flag) {
        return {
            nowBout: 1,
            flag,
            enemies: ["red", "blue", "green", "yellow"].filter(item => item !== flag),
            taskBg: "bg",
            taskTarget: "destroy all enemies",
            commanders: ["google"],
            nowMoney: 10,
            isOver: false,
            grade: {
                allUnitMoney: 0,
                lostUnitMoney: 0,
                destroyUnitMoney: 0,
                nowUnitMoney: 0
            }
        };
    }
}
window["DataMaker"] = MapData_DataMaker;
__reflect(MapData_DataMaker.prototype,"DataMaker",[]); 

// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__("./src/config.ts");

// CONCATENATED MODULE: ./src/Battle/netFormt.ts
var MessageType;
(function (MessageType) {
    MessageType["action"] = "action";
    MessageType["chat"] = "chat";
    MessageType["IupdateRoomSetting"] = "updateRoomSetting";
    MessageType["IgetRoom"] = "getRoom";
    MessageType["IuserChoose"] = "userChoose";
    MessageType["IgetMap"] = "getMap";
    MessageType["IprovideAI"] = "provideAI";
    MessageType["ItimeoutBout"] = "timeoutBout";
    MessageType["IgetRole"] = "getRole";
    MessageType["OmapInfo"] = "mapInfo";
    MessageType["OroomSetting"] = "roomSetting";
    MessageType["Oresult"] = "result";
    MessageType["Orole"] = "role";
    MessageType["OgameBegin"] = "gameBegin";
})(MessageType || (MessageType = {}));
window["MessageType"] = MessageType;
//-----------------websocket----------------------------
// export interface BattleMapGlobalProps {
//   dailyMoney: number;
//   cities: number;
//   bouts: number;
//   fogOpen: boolean;
//   weather: string;
//   aiLvl: string;
// }
// export interface BattleRoomUserProps{
//   // flag: string;
//   // enemies: string[];
//   // taskBg: string;
//   // taskTarget: string;
//   // commanders: string[];
//   // nowMoney: number;
//   flag: string;
//   nowCommander: string;
//   userName?: string;
//   userId?: string;
//   /**
//    * type
//    */
//   userHeaderUrl?: string;
//   isComputer: boolean;
//   prepared: boolean;
// }

// CONCATENATED MODULE: ./src/Gui.ts

const BASE_URL = 'http://127.0.0.1:8000';
window["BASE_URL"] = BASE_URL;
var GuiEventType;
(function (GuiEventType) {
    GuiEventType[GuiEventType["toBegin"] = 0] = "toBegin";
    GuiEventType[GuiEventType["toMain"] = 1] = "toMain";
    GuiEventType[GuiEventType["toCompaigns"] = 2] = "toCompaigns";
    GuiEventType[GuiEventType["toCompaignBattles"] = 3] = "toCompaignBattles";
    GuiEventType[GuiEventType["toMapList"] = 4] = "toMapList";
    GuiEventType[GuiEventType["toDeclaration"] = 5] = "toDeclaration";
    GuiEventType[GuiEventType["toWeb"] = 6] = "toWeb";
    GuiEventType[GuiEventType["toBattle"] = 7] = "toBattle";
    GuiEventType[GuiEventType["toOwnerRoom"] = 8] = "toOwnerRoom";
    GuiEventType[GuiEventType["toUserRoom"] = 9] = "toUserRoom";
    GuiEventType[GuiEventType["toGameResult"] = 10] = "toGameResult";
})(GuiEventType || (GuiEventType = {}));
window["GuiEventType"] = GuiEventType;
class GuiEvent extends egret.Event {
    constructor(type = GuiEvent.DATE, bubbles = false, cancelable = false) {
        super(type, bubbles, cancelable);
    }
}
GuiEvent.DATE = "GuiEvent";
window["GuiEvent"] = GuiEvent;
__reflect(GuiEvent.prototype,"GuiEvent",[]); 
/**
 * main Gui
 */
class Gui_GuiStage extends eui.UILayer {
    constructor() {
        super();
        this.guiBegin = new GuiBegin();
        this.guiMainMenu = new GuiMainMenu();
        this.guiCompaignMenu = new GuiCompaignMenu();
        this.guiCompaignBattles = new GuiCompaignBattles();
        this.guiMapList = new GuiMapList();
        this.guiRoomOwnerSetting = new GuiRoomOwnerSetting();
        this.guiRoomUserSetting = new GuiRoomUserSetting();
        this.guiRoomList = new GuiRoomList();
        this.guiDeclaration = new GuiDeclaration();
    }
    childrenCreated() {
        super.childrenCreated();
        let stageWidth = egret.MainContext.instance.stage.stageWidth;
        let stageHeight = egret.MainContext.instance.stage.stageHeight;
        this.guiBegin.width = this.guiMainMenu.width
            = this.guiCompaignMenu.width
                = this.guiCompaignBattles.width
                    = this.guiMapList.width
                        = this.guiRoomOwnerSetting.width
                            = this.guiRoomUserSetting.width
                                = this.guiRoomList.width
                                    = this.guiDeclaration.width
                                        = stageWidth;
        this.guiBegin.height = this.guiMainMenu.height
            = this.guiCompaignMenu.height
                = this.guiCompaignBattles.height
                    = this.guiMapList.height
                        = this.guiRoomOwnerSetting.height
                            = this.guiRoomUserSetting.height
                                = this.guiRoomList.height
                                    = this.guiDeclaration.height
                                        = stageHeight;
        // this.addChild(this.guiBegin);
        // this.addChild(this.guiMainMenu);
        // this.addChild(this.guiCompaignMenu);
        // this.addChild(this.guiCompaignBattles);
        // this.addChild(this.guiMapList);
        // this.addChild(this.guiRoomOwnerSetting);
        // this.addChild(this.guiRoomUserSetting);
        // this.addChild(this.guiRoomList);
        // this.addChild(this.guiDeclaration);
        this.guiBegin.addEventListener(GuiEvent.DATE, this.handleGuiChange, this);
        this.guiMainMenu.addEventListener(GuiEvent.DATE, this.handleGuiChange, this);
        this.guiCompaignMenu.addEventListener(GuiEvent.DATE, this.handleGuiChange, this);
        this.guiCompaignBattles.addEventListener(GuiEvent.DATE, this.handleGuiChange, this);
        this.guiMapList.addEventListener(GuiEvent.DATE, this.handleGuiChange, this);
        this.guiRoomOwnerSetting.addEventListener(GuiEvent.DATE, this.handleGuiChange, this);
        this.guiRoomUserSetting.addEventListener(GuiEvent.DATE, this.handleGuiChange, this);
        this.guiRoomList.addEventListener(GuiEvent.DATE, this.handleGuiChange, this);
        this.guiDeclaration.addEventListener(GuiEvent.DATE, this.handleGuiChange, this);
        let outer_event = new GuiEvent();
        outer_event._data = {
            type: GuiEventType.toBegin
        };
        this.handleGuiChange(outer_event);
    }
    handleGuiChange(evt) {
        console.log('chate');
        this.removeChildren();
        switch (evt._data.type) {
            case GuiEventType.toBegin:
                this.addChild(this.guiBegin);
                break;
            case GuiEventType.toMain:
                this.addChild(this.guiMainMenu);
                break;
            case GuiEventType.toCompaigns:
                this.addChild(this.guiCompaignMenu);
                break;
            case GuiEventType.toCompaignBattles:
                this.addChild(this.guiCompaignBattles);
                this.guiCompaignBattles.pushData(evt._data.compaign.mapList.map(item => item.id));
                break;
            case GuiEventType.toBattle:
                this.guiBattle = new BattleUI_BattleUI();
                this.guiBattle.addEventListener(GuiEvent.DATE, this.handleGuiChange, this);
                // this.guiBattle.initMap(evt._data.mapData);
                // new BattleReferee(this.guiBattle, evt._data.myFlag);
                this.addChild(this.guiBattle);
                break;
            case GuiEventType.toWeb:
                this.addChild(this.guiRoomList);
                break;
            case GuiEventType.toDeclaration:
                this.addChild(this.guiDeclaration);
                break;
            case GuiEventType.toOwnerRoom:
                this.addChild(this.guiRoomOwnerSetting);
                break;
            case GuiEventType.toUserRoom:
                this.addChild(this.guiRoomUserSetting);
                break;
            case GuiEventType.toMapList:
                this.addChild(this.guiMapList);
                break;
            default:
                break;
        }
    }
}
window["GuiStage"] = Gui_GuiStage;
__reflect(Gui_GuiStage.prototype,"GuiStage",[]); 
class GuiBegin extends eui.Component {
    constructor() {
        super();
        this.beginButton = new eui.Button();
    }
    childrenCreated() {
        super.childrenCreated();
        this.beginButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleBeginClick, this);
    }
    handleBeginClick() {
        let event_out = new GuiEvent();
        event_out._data = {
            type: GuiEventType.toMain
        };
        this.dispatchEvent(event_out);
    }
}
window["GuiBegin"] = GuiBegin;
__reflect(GuiBegin.prototype,"GuiBegin",["eui.UIComponent"]); 
class GuiMainMenu extends eui.Component {
    constructor() {
        super();
        this.compaignButton = new eui.Button();
        this.mapButton = new eui.Button();
        this.webButton = new eui.Button();
        this.declarationButton = new eui.Button();
        this.exitButton = new eui.Button();
    }
    childrenCreated() {
        super.childrenCreated();
        this.compaignButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleClick.bind(this, GuiEventType.toCompaigns), this);
        this.mapButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleClick.bind(this, GuiEventType.toMapList), this);
        this.webButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleClick.bind(this, GuiEventType.toWeb), this);
        this.declarationButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleClick.bind(this, GuiEventType.toDeclaration), this);
        this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleClick.bind(this, GuiEventType.toBegin), this);
    }
    handleClick(type) {
        let outer_event = new GuiEvent();
        // @ts-ignore
        outer_event._data = { type };
        this.dispatchEvent(outer_event);
    }
}
window["GuiMainMenu"] = GuiMainMenu;
__reflect(GuiMainMenu.prototype,"GuiMainMenu",["eui.UIComponent"]); 
class GuiCompaignMenu extends eui.Component {
    constructor() {
        super();
        this.container = new eui.Group();
        this.returnButton = new eui.Button();
        this._data = [];
        this.urlloader = new egret.URLLoader();
    }
    childrenCreated() {
        super.childrenCreated();
        this.returnButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleReturn, this);
        this.pushData();
    }
    set data(v) {
        this._data = v;
        console.log('v', v);
        this.container.removeChildren();
        for (let i of v) {
            console.log('i', i, typeof i, i.name);
            let tmp_obj = new eui.Label(i.name);
            // tmp_obj.textFlow = [
            //     {text:i.type+ '\t'},
            //     {text: i.name}
            // ]
            tmp_obj.text = i.name;
            tmp_obj.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleClick.bind(this, i.id), this);
            this.container.addChild(tmp_obj);
        }
    }
    get data() {
        return this._data;
    }
    handleClick(bookId) {
        let outer_event = new GuiEvent();
        let now_battle = this._data.filter(item => item.id === bookId)[0];
        outer_event._data = {
            type: GuiEventType.toCompaignBattles,
            compaign: now_battle
        };
        this.dispatchEvent(outer_event);
    }
    handleReturn() {
        let outer_event = new GuiEvent();
        outer_event._data = {
            type: GuiEventType.toMain
        };
        this.dispatchEvent(outer_event);
    }
    pushData() {
        var urlreq = new egret.URLRequest();
        urlreq.url = BASE_URL + '/chat/getBattles';
        this.urlloader.addEventListener(egret.Event.COMPLETE, this.onPushComplete, this);
        this.urlloader.load(urlreq);
    }
    onPushComplete(event) {
        // var request = <egret.HttpRequest>event.currentTarget;
        // console.log("post data : ",request.response);
        console.log(typeof this.urlloader.data);
        this.data = JSON.parse(this.urlloader.data)['data'];
    }
}
window["GuiCompaignMenu"] = GuiCompaignMenu;
__reflect(GuiCompaignMenu.prototype,"GuiCompaignMenu",["eui.UIComponent"]); 
class GuiCompaignBattles extends eui.Component {
    constructor() {
        super();
        this.container = new eui.Group();
        this.returnButton = new eui.Button();
        this.urlloader = new egret.URLLoader();
    }
    childrenCreated() {
        super.childrenCreated();
        this.returnButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleReturn, this);
    }
    handleReturn() {
        let outer_event = new GuiEvent();
        outer_event._data = {
            type: GuiEventType.toMain
        };
        this.dispatchEvent(outer_event);
    }
    set data(v) {
        this._data = v;
        this.container.removeChildren();
        for (let i of v) {
            let tmp_obj = new eui.Label(i.name);
            tmp_obj.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleItemClicked.bind(this, i.id), this);
            this.container.addChild(tmp_obj);
        }
    }
    handleItemClicked(mapId) {
        let urlreq = new egret.URLRequest();
        urlreq.method = egret.URLRequestMethod.POST;
        urlreq.url = BASE_URL + '/chat/getMapData/';
        urlreq.data = new egret.URLVariables("mapId=" + mapId);
        this.urlloader.removeEventListener(egret.Event.COMPLETE, this.onPushComplete, this);
        this.urlloader.addEventListener(egret.Event.COMPLETE, this.handlePushMapComplete, this);
        this.urlloader.load(urlreq);
    }
    /**
     *
     */
    handlePushMapComplete() {
        let outer_event = new GuiEvent();
        let mapData = JSON.parse(this.urlloader.data)["map"];
        outer_event._data = {
            type: GuiEventType.toBattle,
            mapData,
            myFlag: 'red'
        };
        let userInfo = Object.assign({}, mapData.playerSetting);
        for (let i in userInfo) {
            userInfo[i] = {
                // @ts-ignore
                playerSetting: userInfo[i]
            };
        }
        // @ts-ignore
        PlayerManager.initUsers(userInfo, "red");
        this.dispatchEvent(outer_event);
    }
    get data() {
        return this._data;
    }
    pushData(mapIds) {
        var urlreq = new egret.URLRequest();
        urlreq.method = egret.URLRequestMethod.POST;
        urlreq.url = BASE_URL + '/chat/getMapInfo/';
        urlreq.data = new egret.URLVariables("mapIds=" + JSON.stringify(mapIds));
        this.urlloader.removeEventListener(egret.Event.COMPLETE, this.handlePushMapComplete, this);
        this.urlloader.addEventListener(egret.Event.COMPLETE, this.onPushComplete, this);
        this.urlloader.load(urlreq);
    }
    onPushComplete() {
        // console.log(typeof this.urlloader.data);
        this.data = JSON.parse(this.urlloader.data)['maps'];
    }
}
window["GuiCompaignBattles"] = GuiCompaignBattles;
__reflect(GuiCompaignBattles.prototype,"GuiCompaignBattles",["eui.UIComponent"]); 
class GuiMapList extends eui.Component {
    constructor() {
        super();
        this.returnButton = new eui.Button();
        this.tagsGroup = new eui.Group();
        this.mapListGroup = new eui.Group();
        this.containerMiniMap = new eui.Group();
        this.labelMapDsc = new eui.Label();
        this.beginButton = new eui.Button();
        this.allTags = [];
        this.allMaps = [];
        this.urlloader = new egret.URLLoader();
    }
    childrenCreated() {
        super.childrenCreated();
        this.beginButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleBeginButton, this);
        this.returnButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleReturn, this);
    }
    handleReturn() {
        let outer_event = new GuiEvent();
        outer_event._data = {
            type: GuiEventType.toMain
        };
        this.dispatchEvent(outer_event);
    }
    handleBeginButton() {
        if (this.nowMapId === undefined) {
            return;
        }
        // let outer_event = new GuiEvent();
        // outer_event._data = {
        //     type: GuiEventType.toBattle,
        //     mapId: this.nowMapId
        // }
        // this.dispatchEvent(outer_event);
    }
    handleMapClicked(mapId) {
        var urlreq = new egret.URLRequest();
        urlreq.url = BASE_URL + '/chat/getMap/' + mapId;
        this.urlloader.removeEventListener(egret.Event.COMPLETE, this.handlePushMapComplete, this);
        this.urlloader.once(egret.Event.COMPLETE, this.handlePushMapComplete, this);
        this.urlloader.load(urlreq);
    }
    handlePushMapComplete() {
        this.mapData = this.urlloader.data;
        // staticDataMng.drawMap(this.mapData, this.containerMiniMap);
        // dsc
    }
    handleTagChange(tag) {
        this.renderMaps = this.allMaps.filter(item => item.kw.indexOf(tag) !== -1);
        this.renderMapList();
        this.nowTag = tag;
    }
    renderMapList() {
        this.mapListGroup.removeChildren();
        for (let i of this.renderMaps) {
            let tmp_label = new eui.Label();
            tmp_label.textFlow = [
                { text: i.name + '/t' },
                { text: i.kw.join(' ') },
                { text: i.author }
            ];
            tmp_label.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleMapClicked.bind(this, i.id), this);
            this.mapListGroup.addChild(tmp_label);
        }
    }
    /**
     * pushAllMaps
     */
    pushAllMaps() {
        var urlreq = new egret.URLRequest();
        urlreq.url = BASE_URL + '/chat/getAllMaps';
        this.urlloader.removeEventListener(egret.Event.COMPLETE, this.pushAllMapsComplete, this);
        this.urlloader.once(egret.Event.COMPLETE, this.pushAllMapsComplete, this);
        this.urlloader.load(urlreq);
    }
    pushAllMapsComplete() {
        this.renderMaps = this.allMaps = this.urlloader.data;
        this.renderMapList();
        let kws = [];
        for (let i of this.allMaps) {
            for (let j of i.kw) {
                if (kws.indexOf(j) === -1) {
                    kws.push(j);
                }
            }
        }
        this.tagsGroup.removeChildren();
        for (let i of kws) {
            let tmp_btn = new eui.Button();
            tmp_btn.label = i;
            tmp_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTagChange.bind(this, i), this);
            this.tagsGroup.addChild(tmp_btn);
        }
        this.allTags = kws;
    }
}
window["GuiMapList"] = GuiMapList;
__reflect(GuiMapList.prototype,"GuiMapList",["eui.UIComponent"]); 
class GuiRoomOwnerSetting extends eui.Component {
    constructor() {
        super();
    }
}
window["GuiRoomOwnerSetting"] = GuiRoomOwnerSetting;
__reflect(GuiRoomOwnerSetting.prototype,"GuiRoomOwnerSetting",["eui.UIComponent"]); 
class GuiRoomUserSetting extends eui.Component {
    constructor() {
        super();
    }
}
window["GuiRoomUserSetting"] = GuiRoomUserSetting;
__reflect(GuiRoomUserSetting.prototype,"GuiRoomUserSetting",["eui.UIComponent"]); 
class GuiRoomList extends eui.Component {
    constructor() {
        super();
        this.container = new eui.Group();
        this.returnButton = new eui.Button();
    }
    childrenCreated() {
        super.childrenCreated();
        this.returnButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleReturnButton, this);
        this.container.addChild(new eui.Label("room list"));
    }
    handleReturnButton() {
        let outer_event = new GuiEvent();
        outer_event._data = {
            type: GuiEventType.toMain
        };
        this.dispatchEvent(outer_event);
    }
}
window["GuiRoomList"] = GuiRoomList;
__reflect(GuiRoomList.prototype,"GuiRoomList",["eui.UIComponent"]); 
class GuiDeclaration extends eui.Component {
    constructor() {
        super();
        this.container = new eui.Group();
        this.returnButton = new eui.Button();
        this.urlloader = new egret.URLLoader();
    }
    childrenCreated() {
        super.childrenCreated();
        this.returnButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleReturnButton, this);
        this.pushData();
    }
    handleReturnButton() {
        let outer_event = new GuiEvent();
        outer_event._data = {
            type: GuiEventType.toMain
        };
        this.dispatchEvent(outer_event);
    }
    pushData() {
        var urlreq = new egret.URLRequest();
        urlreq.url = BASE_URL + '/chat/getDeclaration/';
        this.urlloader.addEventListener(egret.Event.COMPLETE, this.onPushComplete, this);
        this.urlloader.load(urlreq);
    }
    onPushComplete() {
        this.container.removeChildren();
        console.log(this.urlloader.data['data'], 'data');
        this.container.addChild(new eui.Label(JSON.parse(this.urlloader.data)['data']));
        // this.renderMaps = this.allMaps = this.urlloader.data;
    }
}
window["GuiDeclaration"] = GuiDeclaration;
__reflect(GuiDeclaration.prototype,"GuiDeclaration",["eui.UIComponent"]); 
class GuiBattleResult extends eui.Component {
}
window["GuiBattleResult"] = GuiBattleResult;
__reflect(GuiBattleResult.prototype,"GuiBattleResult",["eui.UIComponent"]); 

// CONCATENATED MODULE: ./src/Battle/BattleUI.ts






const BattleUniRightItemTypes = [
    "wait",
    "attack",
    "dive",
    "load",
    "unload",
    "buy",
    "supply",
    "occupy",
];
const MINI_MAP_BLOCK_WIDTH = 20;
window["MINI_MAP_BLOCK_WIDTH"] = MINI_MAP_BLOCK_WIDTH;
// export interface BattleChatMessageProps{
//   from: string;
//   to: string;
//   message: string;
//   time: number;
// }
var BattleStateType;
(function (BattleStateType) {
    BattleStateType[BattleStateType["blank"] = 0] = "blank";
    BattleStateType[BattleStateType["moveAreaShow"] = 1] = "moveAreaShow";
    BattleStateType[BattleStateType["atkAreaShow"] = 2] = "atkAreaShow";
    BattleStateType[BattleStateType["unitInfoShow"] = 3] = "unitInfoShow";
    BattleStateType[BattleStateType["rightMenu"] = 4] = "rightMenu";
    BattleStateType[BattleStateType["roadsShow"] = 5] = "roadsShow";
    BattleStateType[BattleStateType["targetShow"] = 6] = "targetShow";
    BattleStateType[BattleStateType["sortieMenu"] = 7] = "sortieMenu";
    BattleStateType[BattleStateType["sortieArea"] = 8] = "sortieArea";
    BattleStateType[BattleStateType["sortieRoads"] = 9] = "sortieRoads";
    BattleStateType[BattleStateType["buy"] = 10] = "buy";
    BattleStateType[BattleStateType["supply"] = 11] = "supply";
})(BattleStateType || (BattleStateType = {}));
window["BattleStateType"] = BattleStateType;
var BattleEventType;
(function (BattleEventType) {
    BattleEventType[BattleEventType["toPrim"] = 0] = "toPrim";
    BattleEventType[BattleEventType["spriteClicked"] = 1] = "spriteClicked";
    BattleEventType[BattleEventType["showMoveArea"] = 2] = "showMoveArea";
    BattleEventType[BattleEventType["ShowTargetArea"] = 3] = "ShowTargetArea";
    BattleEventType[BattleEventType["ShowRoadChoose"] = 4] = "ShowRoadChoose";
    BattleEventType[BattleEventType["rightMenuClicked"] = 5] = "rightMenuClicked";
    BattleEventType[BattleEventType["setSupply"] = 6] = "setSupply";
    BattleEventType[BattleEventType["buy"] = 7] = "buy";
    BattleEventType[BattleEventType["inputChagned"] = 8] = "inputChagned";
    BattleEventType[BattleEventType["itemClicked"] = 9] = "itemClicked";
    BattleEventType[BattleEventType["chatMessage"] = 10] = "chatMessage";
    BattleEventType[BattleEventType["action"] = 11] = "action";
})(BattleEventType || (BattleEventType = {}));
window["BattleEventType"] = BattleEventType;
/**
 * event, 事件  == 信道
 */
class BattleEvent extends egret.Event {
    constructor(type = BattleEvent.DATE, bubbles = false, cancelable = false) {
        super(type, bubbles, cancelable);
    }
}
BattleEvent.DATE = "battleEvent";
window["BattleEvent"] = BattleEvent;
__reflect(BattleEvent.prototype,"BattleEvent",[]); 
/**********************************************************************/
// --------------------ui interaction 用户交互------------------------ //
////////////////////////////////////////////////////////////////////////
class BCRightMenu extends eui.Component {
    // private functions: Function[];
    constructor() {
        super();
        // this.functions = [];
        this.top = 100;
        this.bottom = 50;
        this.right = 200;
        this.data = new eui.ArrayCollection([
            "111",
            "222",
            "333",
            "444",
            "555",
            "666",
        ]);
        this.data.addEventListener(eui.CollectionEvent.COLLECTION_CHANGE, this.collectionChangeHandler, this);
        this.scrollArea = new eui.Scroller();
        this.container = new eui.Group();
        this.scrollArea.height = 400;
        // this.scrollArea.width = 200;
        this.scrollArea.viewport = this.container;
        this.addChild(this.scrollArea);
        let layout = new eui.VerticalLayout();
        layout.gap = 10;
        layout.horizontalAlign = egret.HorizontalAlign.CENTER;
        this.container.layout = layout;
    }
    collectionChangeHandler(evt) {
        this.container.removeChildren();
        let count = 0;
        for (let i of evt.target.source) {
            let tmp_obj = new eui.Label(i);
            tmp_obj.size = 60;
            this.container.addChildAt(tmp_obj, count++);
            let tmp_func = this.handleClicked.bind(this, i);
            tmp_obj.addEventListener(egret.TouchEvent.TOUCH_TAP, tmp_func, this);
        }
    }
    handleClicked(key, evt) {
        let outer_event = new BattleEvent();
        outer_event._data = {
            type: BattleEventType.rightMenuClicked,
            key,
        };
        this.dispatchEvent(outer_event);
    }
    /**
         * swapMenuData
    newData     */
    swapMenuData(newData) {
        this.data.removeAll();
        for (let i in newData) {
            this.data.addItem(newData[i]);
        }
    }
}
window["BCRightMenu"] = BCRightMenu;
__reflect(BCRightMenu.prototype,"BCRightMenu",["eui.UIComponent"]); 
class BCUnitInfo extends eui.Component {
    constructor() {
        super();
        this.y = 50;
        this.x = 100;
        this.textArea = new eui.Label();
        this.data = new eui.ArrayCollection([]);
        this.data.addEventListener(eui.CollectionEvent.COLLECTION_CHANGE, this.collectionChangeHandler, this);
    }
    collectionChangeHandler(evt) {
        this.textArea.textFlow = evt.target.source;
    }
    childrenCreated() {
        super.childrenCreated();
    }
    set text(text) {
        // console.log(text, 'text')
        // this.textArea.textFlow = text;
        // this.textArea.textFlow
        this.data.removeAll();
        for (let i in text) {
            this.data.addItem(text[i]);
            // console.log('i', i);
        }
    }
    get text() {
        return this.textArea.textFlow;
    }
}
window["BCUnitInfo"] = BCUnitInfo;
__reflect(BCUnitInfo.prototype,"BCUnitInfo",["eui.UIComponent"]); 
class BCSetSupplyItem extends eui.Component {
    childrenCreated() {
        super.childrenCreated();
        this.inputLabel.inputType = egret.TextFieldInputType.TEL;
        this.inputLabel.addEventListener(egret.Event.CHANGE, this.handleChange, this);
    }
    handleChange(evt) {
        console.log(evt, this.inputLabel.text);
    }
    getNumMoney() {
        let rlt = parseInt(this.inputLabel.text);
        if (isNaN(rlt)) {
            rlt = 0;
        }
        return rlt;
    }
    getNumPrice() {
        let rlt = parseInt(this.priceLabel.text);
        if (isNaN(rlt)) {
            rlt = 0;
        }
        return rlt;
    }
}
window["BCSetSupplyItem"] = BCSetSupplyItem;
__reflect(BCSetSupplyItem.prototype,"BCSetSupplyItem",["eui.UIComponent"]); 
class BCSetSupply extends eui.Component {
    childrenCreated() {
        super.childrenCreated();
        this.x = 100;
        this.y = 50;
        this.allMoneyLabel.text = "0";
        this.forecastMoney.text = "0";
        this.autoDealButton.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.handleAutoDeal, this);
        this.sureButton.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.handleSure, this);
        this.container.addChild(new BCSetSupplyItem());
        this.container.addChild(new BCSetSupplyItem());
        this.container.addChild(new BCSetSupplyItem());
        this.container.addChild(new BCSetSupplyItem());
        this.container.addChild(new BCSetSupplyItem());
        this.container.addChild(new BCSetSupplyItem());
        this.container.addChild(new BCSetSupplyItem());
        this.container.addChild(new BCSetSupplyItem());
        this.container.addChild(new BCSetSupplyItem());
        this.container.addChild(new BCSetSupplyItem());
    }
    set data(data) {
        this.container.removeChildren();
        for (let i in data) {
            let tmp_obj = new BCSetSupplyItem();
            tmp_obj.key = parseInt(i);
            tmp_obj.priceLabel.text = data[i].price.toString();
            // sdkljfskldjfweoir
            this.container.addChild(tmp_obj);
        }
    }
    handleAutoDeal(evt) {
        // pass
    }
    handleSure(evt) {
        let rlt = {};
        for (let i = 0; i < this.container.numChildren; ++i) {
            let tmp_obj = this.container.getChildAt(i);
            rlt[tmp_obj.key] = {
                price: tmp_obj.getNumPrice(),
                useMoney: tmp_obj.getNumMoney(),
            };
        }
        let outer_event = new BattleEvent();
        outer_event._data = {
            type: BattleEventType.setSupply,
            data: rlt,
        };
        this.dispatchEvent(outer_event);
    }
}
window["BCSetSupply"] = BCSetSupply;
__reflect(BCSetSupply.prototype,"BCSetSupply",["eui.UIComponent"]); 
class BattleUI_BCBuyItem extends eui.Component {
    constructor() {
        super();
        this.nameLabel = new eui.Label();
        this.priceLabel = new eui.Label();
    }
    childrenCreated() {
        super.childrenCreated();
        this.nameLabel.text = staticDataMng.unit[BattleUnitTypes[this.key]]['chineseName'];
        this.priceLabel.text = staticDataMng.unit[BattleUnitTypes[this.key]]['costMoney'].toString();
        this.sureButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleSure, this);
    }
    handleSure(evt) {
        let outer_event = new BattleEvent();
        outer_event._data = {
            type: BattleEventType.itemClicked,
            key: this.key,
        };
        this.dispatchEvent(outer_event);
    }
}
window["BCBuyItem"] = BattleUI_BCBuyItem;
__reflect(BattleUI_BCBuyItem.prototype,"BCBuyItem",["eui.UIComponent"]); 
class BCBuy extends eui.Component {
    constructor() {
        super();
        this.container = new eui.Group();
    }
    childrenCreated() {
        super.childrenCreated();
        this.x = 100;
        this.y = 50;
        // let tmp_data: Record<number, number> = {};
        // for (let i = 0; i < 20; ++i) {
        //   tmp_data[i] = i;
        // }
        // this.data = tmp_data;
    }
    set data(data) {
        // console.log('nowdata', data)
        this.container.removeChildren();
        for (let i in data) {
            let tmp_obj = new BattleUI_BCBuyItem();
            tmp_obj.key = parseInt(i);
            // tmp_obj.nameLabel.text = BattleUnitTypes[tmp_obj.key];
            // tmp_obj.priceLabel.text = data[i].toString();
            this.container.addChild(tmp_obj);
            tmp_obj.addEventListener(BattleEvent.DATE, this.itemClicked, this);
        }
    }
    itemClicked(evt) {
        // let outer_event = new BattleEvent()
        this.dispatchEvent(evt);
    }
}
window["BCBuy"] = BCBuy;
__reflect(BCBuy.prototype,"BCBuy",["eui.UIComponent"]); 
class BCGuideBook extends eui.Component {
    childrenCreated() {
        super.childrenCreated();
        this.y = 50;
        this.x = 100;
        // return
        this.data = {
            aaa: [
                { text: "Text in ", style: { size: 20 } },
                {
                    text: "Egret",
                    style: {
                        textColor: 0x336699,
                        size: 60,
                        strokeColor: 0x6699cc,
                        stroke: 2,
                    },
                },
                { text: " can ", style: { fontFamily: "Impact" } },
                { text: "be set ", style: { fontFamily: "Times New Roman" } },
                { text: "to a ", style: { textColor: 0xff0000 } },
                { text: "\n" },
                { text: "variety ", style: { textColor: 0x00ff00 } },
                { text: "of ", style: { textColor: 0xf000f0 } },
                { text: "styles ", style: { textColor: 0x00ffff } },
                { text: "with", style: { size: 56 } },
                { text: "different ", style: { size: 16 } },
                { text: "colors, ", style: { size: 26 } },
                { text: "\n" },
                { text: "fonts ", style: { italic: true, textColor: 0x00ff00 } },
                { text: "and ", style: { size: 26, textColor: 0xf000f0 } },
                { text: "sizes", style: { italic: true, textColor: 0xf06f00 } },
            ],
            bbb: [],
            bb2b: [],
            bb3b: [],
            bb4b: [],
            bb5b: [],
            bbfb: [],
            bbsb: [],
            bbqb: [],
            bbsib: [],
            b1bb: [],
            bb12b: [],
            bb13b: [],
            bb14b: [],
            bb15b: [],
            b1bfb: [],
            b1bsb: [],
            b1bqb: [],
            bb1sib: [],
        };
    }
    set data(data) {
        this._data = data;
        this.menuContainer.removeChildren();
        for (let i in data) {
            let tmp_obj = new eui.Label();
            tmp_obj.text = i;
            this.menuContainer.addChild(tmp_obj);
            tmp_obj.addEventListener(egret.TouchEvent.TOUCH_TAP, this.swapView.bind(this, i), this);
        }
        console.log("before", this.textArea.textFlow);
        if (Object.keys(data).length === 0) {
            this.textArea.textFlow = [];
        }
        else {
            this.textArea.textFlow = data[Object.keys(data)[0]];
        }
        console.log("after", this.textArea.textFlow);
    }
    /**
     * swapView
     */
    swapView(key, evt) {
        console.log("click", key, this._data[key]);
        this.textArea.textFlow = this._data[key];
        // this.textArea.text
    }
}
window["BCGuideBook"] = BCGuideBook;
__reflect(BCGuideBook.prototype,"BCGuideBook",["eui.UIComponent"]); 
class BattleUI_BCSetting extends eui.Component {
    constructor() {
        super();
        this.exitButton = new eui.Button();
    }
    childrenCreated() {
        super.childrenCreated();
        this.x = 100;
        this.y = 50;
        this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleExitButton, this);
        this.saveNewButton.visible = false;
        this.saveRecentButton.visible = false;
    }
    handleExitButton() {
        let outer_evt = new GuiEvent();
        outer_evt._data = {
            type: GuiEventType.toMain,
        };
        this.dispatchEvent(outer_evt);
    }
}
window["BCSetting"] = BattleUI_BCSetting;
__reflect(BattleUI_BCSetting.prototype,"BCSetting",["eui.UIComponent"]); 
/**
 * global: 投降、
 * red/blue/... : 投降、劝降、挑衅、示威、请求支援、同意支援
 *
 *
 * 表情
 */
class BattleUI_BCChat extends eui.Component {
    constructor() {
        super();
        this.textArea = new eui.Label();
        this.forbiddenButton = new eui.Button();
        this.chooseTypeButton = new eui.Button();
        this.chooseUserButton = new eui.Button();
        this.inputButton = new eui.EditableText();
        this.sendButton = new eui.Button();
        this.messageButton = new eui.Button();
        this.messageType1 = ["public", 'red', 'blue', 'green', 'yellow'];
        this.messageType1.push("public");
        this.messageType2 = ["假装投降", "劝降", "挑衅", "示威", "请求支援", "检测超时"];
        BattleUI_BCChat.instance = this;
        this.historyMessage = [];
        this.lastOperaTime = (new Date()).getTime();
    }
    static getInstance() {
        return this.instance;
    }
    initNowFlags() {
        let mapData = MapData_BattleMapData.getInstance();
        this.messageType1.push(...Object.keys(mapData.playerSetting));
    }
    childrenCreated() {
        super.childrenCreated();
        this.x = 100;
        this.y = 50;
        this.chooseTypeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleSwapType, this);
        this.chooseUserButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleSwapUser, this);
        this.sendButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleSend, this);
        this.forbiddenButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleForbidden, this);
        // this.allUsers = {
        //   公开: ["投降"],
        //   通道: ["red", "blue", "green", "yellow"],
        // };
        // this.chooseTypeButton.label = "公开";
        // this.chooseUserButton.label = "投降";
        // this.typePoint = 0;
        // this.userPoint = 0;
        this.chooseTypeButton.label = this.messageType1[0];
        this.chooseUserButton.label = this.messageType2[0];
    }
    handleSwapType(evt) {
        let mapData = MapData_BattleMapData.getInstance();
        let gameserver = LocalServer_GameServer.getInstance();
        this.messageType1 = this.messageType1.filter(item => item !== gameserver.myFlag && (item === "public"
            || mapData.playerSetting[item] !== undefined));
        let now_text = this.chooseTypeButton.label;
        this.chooseTypeButton.label = this.messageType1[(this.messageType1.indexOf(now_text) + 1) % this.messageType1.length];
        // let userTypes = Object.keys(this.allUsers);
        // this.typePoint = (this.typePoint + 1) % userTypes.length;
        // this.chooseTypeButton.label = userTypes[this.typePoint];
        // this.userPoint = 0;
        // this.chooseUserButton.label = this.allUsers[userTypes[this.typePoint]][0];
    }
    handleSwapUser(evt) {
        // let userTypes = Object.keys(this.allUsers);
        // let users = this.allUsers[userTypes[this.typePoint]];
        // this.userPoint = (this.userPoint + 1) % users.length;
        // this.chooseUserButton.label = users[this.userPoint];
        let now_text = this.chooseUserButton.label;
        this.chooseUserButton.label = this.messageType2[(this.messageType2.indexOf(now_text) + 1) % this.messageType2.length];
    }
    handleSwapMsg(evt) {
    }
    handleSend(evt) {
        if (this.isForbiddened) {
            return;
        }
        if ((new Date()).getTime() - 1000 < this.lastOperaTime) {
            return;
        }
        this.lastOperaTime = (new Date()).getTime();
        let gameserver = LocalServer_GameServer.getInstance();
        let message = {
            type: MessageType.chat,
            data: {
                from: gameserver.myFlag,
                to: this.chooseTypeButton.label,
                message: this.chooseUserButton.label,
                time: new Date().getTime(),
            }
        };
        // this.inputButton.text = "";
        // this.dispatchEvent(event);
        gameserver.send(message);
    }
    /**
     * 来自服务器的数据
     */
    send(msg) {
        if (this.isForbiddened) {
            return;
        }
        this.historyMessage.splice(0, 0, msg);
        this.historyMessage.sort((a, b) => a.time > b.time ? -1 : 1);
        console.log(this.historyMessage, '999');
        let rlt = [];
        for (let i of this.historyMessage) {
            rlt.push(...[
                { text: i.from, style: { size: 30, textColor: 0x00ff00, bold: true } },
                { text: "@", style: { size: 30, textColor: 0x000000, bold: true } },
                { text: i.to, style: { size: 30, textColor: 0x00ff00, bold: true } },
                { text: " ", style: { size: 30, textColor: 0x000000, bold: true } },
                { text: i.message + "\n", style: { size: 28, textColor: 0xffffff, bold: true } },
            ]);
        }
        this.textArea.textFlow = rlt;
    }
    handleForbidden(evt) {
        this.isForbiddened = !(this.forbiddenButton.currentState === "up");
    }
}
window["BCChat"] = BattleUI_BCChat;
__reflect(BattleUI_BCChat.prototype,"BCChat",["eui.UIComponent"]); 
class BCChatMessages extends eui.Component {
    constructor() {
        super();
        this.label = new eui.Label();
        this._data = [];
        this.timer = new egret.Timer(1000, 0);
    }
    childrenCreated() {
        super.childrenCreated();
        this.x = this.y = 10;
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.clearMessage, this);
        this.timer.start();
    }
    putMessage(info) {
        this._data = [...info, ...this._data];
        this._data.sort((a, b) => (a.time > b.time ? -1 : 1));
        this.render();
        if (!this.timer.running) {
            this.timer.start();
        }
    }
    render() {
        let tmp_text = [];
        for (let i of this._data) {
            tmp_text.push({ text: i.from + "@" + i.to + ";", style: { textColor: 0x000000 } });
            tmp_text.push({ text: i.message + "\n", style: { textColor: 0x000000 } });
        }
        this.label.textFlow = tmp_text;
    }
    clearMessage() {
        let nowTime = new Date().getTime() - 2000;
        let tmp_data = this._data;
        this._data = this._data.filter(item => item.time > nowTime);
        this.render();
        if (!tmp_data.length) {
            this.timer.stop();
        }
    }
}
window["BCChatMessages"] = BCChatMessages;
__reflect(BCChatMessages.prototype,"BCChatMessages",["eui.UIComponent"]); 
class BattleUI_BCMiniMap extends eui.Component {
    constructor() {
        super();
        this.container = new eui.Group();
        this.x = 100;
        this.y = 50;
    }
    drawMap(map) {
        this.container.removeChildren();
        let [width, height] = [map.sizeState.width, map.sizeState.height];
        this.container.width = MINI_MAP_BLOCK_WIDTH * width;
        this.container.height = MINI_MAP_BLOCK_WIDTH * height;
        let geoLayer = map.geoLayer;
        const drawRect = (index, color, strake = false, alpha = 1) => {
            let tmp_obj = new eui.Rect(MINI_MAP_BLOCK_WIDTH, MINI_MAP_BLOCK_WIDTH);
            if (strake) {
                tmp_obj.strokeColor = color;
                tmp_obj.alpha = alpha;
                tmp_obj.strokeWeight = MINI_MAP_BLOCK_WIDTH / 4;
                tmp_obj.fillAlpha = 0;
            }
            else {
                tmp_obj.fillColor = color;
                tmp_obj.fillAlpha = alpha;
            }
            tmp_obj.x = (index % width) * MINI_MAP_BLOCK_WIDTH;
            tmp_obj.y = Math.floor(index / width) * MINI_MAP_BLOCK_WIDTH;
            // console.log(tmp_obj.x, tmp_obj.y, tmp_obj.width, tmp_obj.height, tmp_obj.alpha, tmp_obj.fillColor, this.container);
            this.container.addChild(tmp_obj);
            // console.log('add')
            // graphics.beginFill(0xffffff, 1);
            // graphics.drawRect(
            //     (index % width + 0.5) * MINI_MAP_BLOCK_WIDTH,
            //     (0.5 + Math.floor(index / width)) * MINI_MAP_BLOCK_WIDTH,
            //     MINI_MAP_BLOCK_WIDTH, MINI_MAP_BLOCK_WIDTH
            // );
            // graphics.endFill();
        };
        for (let i = 0; i < geoLayer.length; i++) {
            switch (BattleGeoTypes[geoLayer[i]]) {
                case "plain":
                    drawRect(i, 0x1111ff);
                    break;
                case "bridge":
                case "road":
                    drawRect(i, 0xff0022);
                    break;
                case "sea":
                case "rocks":
                    drawRect(i, 0xff11ff);
                    break;
                case "forest":
                    drawRect(i, 0x111111);
                    break;
                case "lake":
                    drawRect(i, 0x000000);
                    break;
                case "mountain":
                    drawRect(1, 0x222222);
                    break;
                default:
                    break;
            }
        }
        let buildLayer = map.buildLayer;
        for (let i in buildLayer) {
            let for_index = parseInt(i);
            if (BattleBuildTypes[for_index] === "capital") {
                switch (buildLayer[i].flag) {
                    case "red":
                        drawRect(for_index, 0x7faaaa);
                        break;
                    case "blue":
                        drawRect(for_index, 0x7faaaa);
                        break;
                    case "yellow":
                        drawRect(for_index, 0x7faaaa);
                        break;
                    case "green":
                        drawRect(for_index, 0x7faaaa);
                        break;
                    default:
                        drawRect(for_index, 0x876511);
                        break;
                }
            }
            else {
                switch (buildLayer[i].flag) {
                    case "red":
                        drawRect(for_index, 0x7faaaa);
                        break;
                    case "blue":
                        drawRect(for_index, 0x7faaaa);
                        break;
                    case "yellow":
                        drawRect(for_index, 0x7faaaa);
                        break;
                    case "green":
                        drawRect(for_index, 0x7faaaa);
                        break;
                    default:
                        drawRect(for_index, 0x876511);
                        break;
                }
            }
        }
        let unitLayer = map.unitLayer;
        for (let i in unitLayer) {
            let for_index = parseInt(i);
            switch (unitLayer[i].flag) {
                case "red":
                    drawRect(for_index, 0x7faaaa, true);
                    break;
                case "blue":
                    drawRect(for_index, 0x7faaaa, true);
                    break;
                case "yellow":
                    drawRect(for_index, 0x7faaaa, true);
                    break;
                case "green":
                    drawRect(for_index, 0x7faaaa, true);
                    break;
                default:
                    drawRect(for_index, 0x876511, true);
                    break;
            }
        }
    }
}
window["BCMiniMap"] = BattleUI_BCMiniMap;
__reflect(BattleUI_BCMiniMap.prototype,"BCMiniMap",["eui.UIComponent"]); 
class BattleUI_BattleUIBase extends eui.UILayer {
    constructor() {
        super();
        this.initUI();
    }
    initUI() {
        this.planSupplyView = new BCSetSupply();
        this.buyView = new BCBuy();
        this.guideBookView = new BCGuideBook();
        this.gameDataView = new BCGuideBook();
        this.settingView = new BattleUI_BCSetting();
        this.chatView = new BattleUI_BCChat();
        this.eleInfoView = new BCUnitInfo();
        this.miniMapView = new BattleUI_BCMiniMap();
        this.backgroundView = new BCUnitInfo();
        this.chatMessagesView = new BCChatMessages();
        this.buyView.addEventListener(BattleEvent.DATE, this.handleBuy, this);
        this.chatView.addEventListener(BattleEvent.DATE, this.handleChatView, this);
        // this.width = egret.MainContext.instance.stage.stageWidth
        // this.height = egret.MainContext.instance.stage.stageHeight
        this.mapView = new MapUI_BattleMapView();
        this.mapContianer = new egret.ScrollView(this.mapView);
        this.mapContianer.bounces = true;
        this.mapContianer.width = egret.MainContext.instance.stage.stageWidth;
        this.mapContianer.height = egret.MainContext.instance.stage.stageHeight;
        this.mapView.addEventListener(BattleEvent.DATE, this.handleEleClicked, this);
        this.addChild(this.mapContianer);
        // this.mapContianer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this._clickBegin, this)
        // this.mapContianer.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this._clickCancel, this)
        // this.mapContianer.addEventListener(egret.TouchEvent.TOUCH_END, this._clickEnd, this)
        // this.addEventListener(BattleEvent.DATE, this.handleListener, this);
        // this.addChild(this.chatMessagesView);
        this.interaction = new eui.UILayer();
        this.addChild(this.interaction);
        this.interaction.touchThrough = true;
        this.titleLabel = new eui.Label();
        this.titleLabel.width = 800;
        this.titleLabel.x = 400;
        this.titleLabel.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.titleLabel);
        this.titleLabelTimer = new egret.Timer(3000, 0);
        this.titleLabelTimer.addEventListener(egret.TimerEvent.TIMER, this.clearTitleLabelTimer, this);
        // this.mapView.addEventListener(BattleEventToUI.DATE, this.handleListener, this)
        this.returnButton = new eui.Image();
        this.returnButton.source = RES.getRes("battle_ui_return_png");
        this.returnButton.right = 10;
        this.returnButton.bottom = 10;
        this.returnButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleReturnButton, this);
        this.rightMenu = new BCRightMenu();
        this.rightMenu.addEventListener(BattleEvent.DATE, this.handleRightMenu, this);
        this.showUnitInfoButton = new eui.Image();
        this.showUnitInfoButton.source = RES.getRes("battle_ui_info_png");
        this.showUnitInfoButton.y = 50;
        this.showUnitInfoButton.x = 10;
        this.showUnitInfoButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleInfoButton, this);
        this.swapAreaTypeButton = new eui.Image();
        this.swapAreaTypeButton.source = RES.getRes("battle_ui_switch_png");
        this.swapAreaTypeButton.x = 10;
        this.swapAreaTypeButton.y = 200;
        this.swapAreaTypeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleSwitchAreaButton, this);
        this.chooseUpRoad = new eui.Image();
        this.chooseUpRoad.source = RES.getRes("battle_ui_up_png");
        this.chooseUpRoad.right = 10;
        this.chooseUpRoad.y = 150;
        this.chooseUpRoad.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleChooseUpRoad, this);
        this.chooseDownRoad = new eui.Image();
        this.chooseDownRoad.source = RES.getRes("battle_ui_down_png");
        this.chooseDownRoad.right = 10;
        this.chooseDownRoad.y = 300;
        this.chooseDownRoad.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleChooseDownRoad, this);
        this.navButton = new eui.Image();
        this.navButton.source = RES.getRes("battle_ui_nav_png");
        this.navButton.right = 10;
        this.navButton.bottom = 150;
        this.navButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showInteractionView.bind(this, "mainExpend"), this);
        this.chatButton = new eui.Image();
        this.chatButton.source = RES.getRes("battle_ui_chat_png");
        this.chatButton.right = 900;
        this.chatButton.bottom = 10;
        this.chatButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showInteractionView.bind(this, "chat"), this);
        this.gameDataButton = new eui.Image();
        this.gameDataButton.source = RES.getRes("battle_ui_data_png");
        this.gameDataButton.right = 1050;
        this.gameDataButton.bottom = 10;
        this.gameDataButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleGameData, this);
        this.endButton = new eui.Image();
        this.endButton.source = RES.getRes("battle_ui_end_png");
        this.endButton.right = 150;
        this.endButton.bottom = 10;
        this.endButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleBoundEnd, this);
        this.guidebookButton = new eui.Image();
        this.guidebookButton.source = RES.getRes("battle_ui_guidebook_png");
        this.guidebookButton.right = 300;
        this.guidebookButton.bottom = 10;
        this.guidebookButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showInteractionView.bind(this, "guidebook"), this);
        this.scaleMapButton = new eui.Image();
        this.scaleMapButton.source = RES.getRes("battle_ui_scale_png");
        this.scaleMapButton.right = 450;
        this.scaleMapButton.bottom = 10;
        this.scaleMapButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleScaleMap, this);
        this.settingButton = new eui.Image();
        this.settingButton.source = RES.getRes("battle_ui_set_png");
        this.settingButton.right = 600;
        this.settingButton.bottom = 10;
        this.settingButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showInteractionView.bind(this, "setting"), this);
        this.backgroundButton = new eui.Image();
        this.backgroundButton.source = RES.getRes("battle_ui_background_png");
        this.backgroundButton.right = 750;
        this.backgroundButton.bottom = 10;
        this.backgroundButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showInteractionView.bind(this, "background"), this);
        this.destoryButton = new eui.Image();
        this.destoryButton.source = RES.getRes("battle_ui_destory_png");
        this.destoryButton.right = 10;
        this.destoryButton.bottom = 300;
        this.destoryButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleDestoryUnitButton, this);
    }
    childrenCreated() {
        super.childrenCreated();
        this.interaction.addChild(this.eleInfoView);
        this.interaction.addChild(this.miniMapView);
        this.interaction.addChild(this.gameDataView);
        this.interaction.addChild(this.chatView);
        this.interaction.addChild(this.backgroundView);
        this.interaction.addChild(this.guideBookView);
        this.interaction.addChild(this.chatMessagesView);
        this.interaction.addChild(this.buyView);
        this.interaction.addChild(this.planSupplyView);
        // this.chatView.initNowFlags();
        this.showInteractionView("main");
        // this.settingView.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleExitGameButton, this);
        // this.gameServer = new GameServer();
        // this.test();
    }
    // protected _clickBegin(evt: egret.TouchEvent) {
    //     this.isEffectiveClick = false;
    //     // console.log('click begin')
    // }
    // protected _clickCancel(evt: egret.TouchEvent) {
    //     this.isEffectiveClick = true
    //     console.log('click cancel')
    // }
    // protected _clickEnd(evt: egret.TouchEvent) {
    //     if (this.isEffectiveClick) {
    //         // console.log('return to main')
    //     }
    //     this.isEffectiveClick = false;
    // }
    /**
     * show LandMarks
     */
    // public showCoverArea(
    //   posIds: number[],
    //   coverType: typeof BattleLandMarkTypes[number],
    //   canListen = false
    // ) {
    //   let map_width = this.mapView.mapData.sizeState.width;
    //   let landMarkLayer = this.mapView.coverLayer;
    //   landMarkLayer.removeChildren();
    //   for (let i in posIds) {
    //     let x = posIds[i] % map_width;
    //     let y = Math.floor(posIds[i] / map_width);
    //     let tmp_obj = new BattleEleLandMark(coverType, posIds[i], canListen);
    //     tmp_obj.x = BLOCK_WIDTH * x + BORDER_SIZE[0];
    //     tmp_obj.y = BLOCK_WIDTH * y + BORDER_SIZE[1];
    //     if (canListen) {
    //       tmp_obj.addEventListener(BattleEvent.DATE, this.handleEleClicked, this);
    //     }
    //     landMarkLayer.addChild(tmp_obj);
    //   }
    // }
    /**
     * 选择视窗
     * 看图纸
     * @param type
     */
    showInteractionView(type) {
        let interaction = this.interaction;
        interaction.removeChildren();
        switch (type) {
            case "moveArea":
                interaction.addChild(this.showUnitInfoButton);
                interaction.addChild(this.swapAreaTypeButton);
                interaction.addChild(this.returnButton);
                break;
            case "eleInfo":
                interaction.addChild(this.eleInfoView);
                interaction.addChild(this.destoryButton);
                interaction.addChild(this.returnButton);
                break;
            case "roadChoose":
                interaction.addChild(this.chooseUpRoad);
                interaction.addChild(this.chooseDownRoad);
                interaction.addChild(this.rightMenu);
                interaction.addChild(this.returnButton);
                break;
            case "sortieMenu":
                interaction.addChild(this.rightMenu);
                interaction.addChild(this.returnButton);
                break;
            case "atkArea":
                interaction.addChild(this.returnButton);
                break;
            case "buy":
                this.interaction.addChild(this.returnButton);
                this.interaction.addChild(this.buyView);
                break;
            case "planSupply":
                interaction.addChild(this.returnButton);
                interaction.addChild(this.planSupplyView);
                break;
            case "targetArea":
                interaction.addChild(this.returnButton);
                break;
            case "sortieRoads":
                interaction.addChild(this.chooseUpRoad);
                interaction.addChild(this.chooseDownRoad);
                interaction.addChild(this.returnButton);
                break;
            case "sortieArea":
                interaction.addChild(this.returnButton);
                break;
            // 主界面了哦
            case "main":
                interaction.addChild(this.chatMessagesView);
                interaction.addChild(this.navButton);
                break;
            case "mainExpend":
                interaction.addChild(this.endButton);
                interaction.addChild(this.chatButton);
                interaction.addChild(this.settingButton);
                interaction.addChild(this.gameDataButton);
                interaction.addChild(this.scaleMapButton);
                interaction.addChild(this.guidebookButton);
                interaction.addChild(this.backgroundButton);
                interaction.addChild(this.returnButton);
                break;
            case "background":
                interaction.addChild(this.eleInfoView);
                interaction.addChild(this.returnButton);
                break;
            case "guidebook":
                interaction.addChild(this.returnButton);
                interaction.addChild(this.guideBookView);
                break;
            case "playerInfo":
                interaction.addChild(this.returnButton);
                interaction.addChild(this.gameDataView);
                break;
            case "setting":
                interaction.addChild(this.returnButton);
                interaction.addChild(this.settingView);
                break;
            case "chat":
                interaction.addChild(this.chatMessagesView);
                interaction.addChild(this.returnButton);
                interaction.addChild(this.chatView);
                break;
            case "miniMap":
                this.interaction.addChild(this.returnButton);
                this.interaction.addChild(this.miniMapView);
                break;
            default:
                break;
        }
    }
    handleEleClicked(evt) { }
    handleReturnButton(evt) { }
    handleRightMenu(evt) { }
    handleInfoButton(evt) { }
    handleSwitchAreaButton(evt) { }
    handleDestoryUnitButton(evt) { }
    handleChooseUpRoad(evt) { }
    handleChooseDownRoad(evt) { }
    handleGameData(evt) { }
    handleScaleMap(evt) { }
    handleSaveGameButton(evt) { }
    handleExitGameButton(evt) { }
    handleBoundEnd(evt) { }
    handleChatView(evt) { }
    handleBuy(evt) {
    }
    setTitle(value) {
        this.titleLabel.textFlow = value;
        this.titleLabelTimer.reset();
        this.titleLabelTimer.start();
    }
    clearTitleLabelTimer() {
        this.titleLabel.textFlow = [];
        this.titleLabelTimer.stop();
    }
}
window["BattleUIBase"] = BattleUI_BattleUIBase;
__reflect(BattleUI_BattleUIBase.prototype,"BattleUIBase",[]); 
class BattleUI_BattleUI extends BattleUI_BattleUIBase {
    constructor() {
        super();
        this.chooseBuildingPos = null;
    }
    childrenCreated() {
        super.childrenCreated();
        this.gameServer = LocalServer_GameServer.getInstance();
        // this.settingView.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleExitGameButton, this);
        this.settingView.addEventListener(GuiEvent.DATE, this.handleExitGameButton, this);
        // this.test();
    }
    /**
     * test
     */
    test() {
        // let tmp_map = DataMaker.makeBattleMap(20, 20);
        // this.initMap(tmp_map);
        // PlayerManager.initUsers(
        //   {
        //     red: {
        //       playerSetting: {
        //         enemies: ["blue"] as typeof PlayerFlagTypes[number][],
        //         taskBg: "taskBG",
        //         taskTarget: "taskTarget",
        //         commanders: ["google"],
        //         nowMoney: 100,
        //       },
        //       userId: "",
        //       username: "",
        //       flag: "red",
        //       grade: {
        //         lostUnitMoney: 0,
        //         nowUnitMoney: 0,
        //         allUnitMoney: 0,
        //         destroyUnitMoney: 0,
        //       },
        //       isComputer: false,
        //     },
        //     blue: {
        //       flag: "blue",
        //       playerSetting: {
        //         enemies: ["red"] as typeof PlayerFlagTypes[number][],
        //         taskBg: "taskBG",
        //         taskTarget: "taskTarget",
        //         commanders: ["google"],
        //         nowMoney: 100,
        //       },
        //       userId: "",
        //       username: "",
        //       grade: {
        //         lostUnitMoney: 0,
        //         nowUnitMoney: 0,
        //         allUnitMoney: 0,
        //         destroyUnitMoney: 0,
        //       },
        //       isComputer: false,
        //     },
        //   },
        //   "red"
        // );
        // this.chatMessagesView.putMessage([
        //   {
        //     type: BEOthersType.chatMsg,
        //     from: "from11111",
        //     to: "to",
        //     message: "mesg",
        //     time: new Date().getTime() + 1200,
        //   },
        //   {
        //     type: BEOthersType.chatMsg,
        //     from: "from2222",
        //     to: "to",
        //     message: "mesg",
        //     time: new Date().getTime() + 2200,
        //   },
        //   {
        //     type: BEOthersType.chatMsg,
        //     from: "from",
        //     to: "to",
        //     message: "mesg",
        //     time: new Date().getTime() + 3200,
        //   },
        //   {
        //     type: BEOthersType.chatMsg,
        //     from: "from",
        //     to: "to",
        //     message: "mesg",
        //     time: new Date().getTime() + 4200,
        //   },
        //   {
        //     type: BEOthersType.chatMsg,
        //     from: "from",
        //     to: "to",
        //     message: "mesg",
        //     time: new Date().getTime() + 5200,
        //   },
        //   {
        //     type: BEOthersType.chatMsg,
        //     from: "from",
        //     to: "to",
        //     message: "mesg",
        //     time: new Date().getTime() + 6200,
        //   },
        //   {
        //     type: BEOthersType.chatMsg,
        //     from: "from777777",
        //     to: "to",
        //     message: "mesg",
        //     time: new Date().getTime(),
        //   },
        // ]);
    }
    _clickBegin(evt) {
        this.isEffectiveClick = false;
        // console.log('click begin')
    }
    _clickCancel(evt) {
        this.isEffectiveClick = true;
        console.log("click cancel");
    }
    _clickEnd(evt) {
        if (this.isEffectiveClick) {
            // console.log('return to main')
        }
        this.isEffectiveClick = false;
    }
    /**
     * show LandMarks
     */
    // public showCoverArea(
    //   posIds: number[],
    //   coverType: typeof BattleLandMarkTypes[number],
    //   canListen = false
    // ) {
    //   console.log("cover area", posIds);
    //   let map_width = this.mapView.mapData.sizeState.width;
    //   // let scale = this.scaleX;
    //   let landMarkLayer = this.mapView.coverLayer;
    //   landMarkLayer.removeChildren();
    //   for (let i in posIds) {
    //     let x = posIds[i] % map_width;
    //     let y = Math.floor(posIds[i] / map_width);
    //     let tmp_obj = new BattleEleLandMark(coverType, posIds[i], canListen);
    //     tmp_obj.x = BLOCK_WIDTH * x + BORDER_SIZE[0];
    //     tmp_obj.y = BLOCK_WIDTH * y + BORDER_SIZE[1];
    //     if (canListen) {
    //       tmp_obj.addEventListener(BattleEvent.DATE, this.handleEleClicked, this);
    //     }
    //     landMarkLayer.addChild(tmp_obj);
    //   }
    // }
    /**
     * 选择视窗
     * 看图纸
     * @param type
     */
    showInteractionView(type) {
        this.hanldeToMain();
        let interaction = this.interaction;
        interaction.removeChildren();
        switch (type) {
            case "moveArea":
                interaction.addChild(this.showUnitInfoButton);
                interaction.addChild(this.swapAreaTypeButton);
                interaction.addChild(this.returnButton);
                break;
            case "eleInfo":
                interaction.addChild(this.eleInfoView);
                interaction.addChild(this.destoryButton);
                interaction.addChild(this.returnButton);
                break;
            case "roadChoose":
                interaction.addChild(this.chooseUpRoad);
                interaction.addChild(this.chooseDownRoad);
                interaction.addChild(this.rightMenu);
                interaction.addChild(this.returnButton);
                break;
            case "sortieMenu":
                interaction.addChild(this.rightMenu);
                interaction.addChild(this.returnButton);
                break;
            case "atkArea":
                interaction.addChild(this.returnButton);
                break;
            case "buy":
                this.interaction.addChild(this.returnButton);
                this.interaction.addChild(this.buyView);
                break;
            case "planSupply":
                interaction.addChild(this.returnButton);
                interaction.addChild(this.planSupplyView);
                break;
            case "targetArea":
                interaction.addChild(this.returnButton);
                break;
            case "sortieRoads":
                interaction.addChild(this.chooseUpRoad);
                interaction.addChild(this.chooseDownRoad);
                interaction.addChild(this.returnButton);
                break;
            case "sortieArea":
                interaction.addChild(this.returnButton);
                break;
            // 主界面了哦
            case "main":
                interaction.addChild(this.chatMessagesView);
                interaction.addChild(this.navButton);
                break;
            case "mainExpend":
                interaction.addChild(this.endButton);
                interaction.addChild(this.chatButton);
                // interaction.addChild(this.settingButton);
                interaction.addChild(this.gameDataButton);
                // interaction.addChild(this.scaleMapButton);
                interaction.addChild(this.guidebookButton);
                // interaction.addChild(this.backgroundButton);
                interaction.addChild(this.returnButton);
                break;
            case "background":
                interaction.addChild(this.eleInfoView);
                interaction.addChild(this.returnButton);
                break;
            case "guidebook":
                interaction.addChild(this.returnButton);
                interaction.addChild(this.guideBookView);
                break;
            case "playerInfo":
                interaction.addChild(this.returnButton);
                interaction.addChild(this.gameDataView);
                break;
            case "setting":
                interaction.addChild(this.returnButton);
                interaction.addChild(this.settingView);
                break;
            case "chat":
                interaction.addChild(this.chatMessagesView);
                interaction.addChild(this.returnButton);
                interaction.addChild(this.chatView);
                break;
            case "miniMap":
                this.interaction.addChild(this.returnButton);
                this.interaction.addChild(this.miniMapView);
                break;
            default:
                break;
        }
    }
    handleEleClicked(evt) {
        // console.log("flsidf")
        let data = evt._data;
        let mathmanUnit = BattleUI_BattleUI.nowState.mathmanUnit;
        let posId;
        let now_loadings;
        let now_loadings_1;
        let now_road;
        let gameserver = LocalServer_GameServer.getInstance();
        const linkToMoveShow = (linked_sprite) => {
            mathmanUnit = new MapUI_MathManUnit(linked_sprite, MapData_BattleMapData.getInstance().toJson());
            BattleUI_BattleUI.nowState.mathmanUnit = mathmanUnit;
            this.mapView.showCoverArea(Object.keys(mathmanUnit.moveArea).map((item) => parseInt(item)), "moveArea", true);
            this.showInteractionView("moveArea");
        };
        // console.log("event", evt._data)
        switch (BattleUI_BattleUI.nowState.type) {
            case BattleStateType.blank:
                switch (data.blockType) {
                    case "unit":
                        mathmanUnit = new MapUI_MathManUnit(data.sprite, MapData_BattleMapData.getInstance().toJson());
                        BattleUI_BattleUI.nowState.mathmanUnit = mathmanUnit;
                        BattleUI_BattleUI.nowState.type = BattleStateType.moveAreaShow;
                        this.mapView.showCoverArea(Object.keys(mathmanUnit.moveArea).map((item) => parseInt(item)), "moveArea", true);
                        this.showInteractionView("moveArea");
                        break;
                    case "build":
                        // console.log("buy", this.isOperationLocked, gameserver.isNowMyBout(), data.sprite.movieFlag !== gameserver.myFlag,
                        // this.mapView.unitCache[(data.sprite as BattleEleBuild).posId] !== undefined
                        // ,BattleMapData.getInstance().unitLayer[(data.sprite as BattleEleBuild).posId] !== undefined)
                        if (!gameserver.isNowMyBout()
                            || !gameserver.isNowMyBout()
                            || data.sprite.movieFlag !== gameserver.myFlag
                            // BattleMapData.getInstance().unitLayer[(data.sprite as BattleEleBuild).posId] !== undefined
                            || this.mapView.unitCache[data.sprite.posId] !== undefined) {
                            break;
                        }
                        switch (data.sprite.typeName) {
                            case "airport":
                            case "factory":
                            case "shipyard":
                                break;
                            default:
                                return;
                        }
                        // this.buyView.
                        BattleUI_BattleUI.nowState = {
                            type: BattleStateType.buy,
                        };
                        let keyAndPrice = staticDataMng.makeKeyAndPrice(data.sprite.typeName);
                        if (!!!keyAndPrice && Object.keys(this.buyView.data).length === 0) {
                            return;
                        }
                        console.log(keyAndPrice, 'sd09fsd');
                        this.buyView.data = keyAndPrice;
                        console.log(staticDataMng.makeKeyAndPrice(data.sprite.typeName));
                        this.chooseBuildingPos = data.sprite.posId;
                        BattleUI_BattleUI.nowState = {
                            type: BattleStateType.buy
                        };
                        this.showInteractionView("buy");
                        break;
                    case "landMark":
                        break;
                    default:
                        break;
                }
                break;
            case BattleStateType.moveAreaShow:
                switch (data.blockType) {
                    case "unit":
                        linkToMoveShow(data.sprite);
                        break;
                    case "landMark":
                        posId = data.sprite.posId;
                        if (!gameserver.isNowMyBout()) {
                            if (this.mapView.unitCache[posId] === undefined) {
                                break;
                            }
                            linkToMoveShow(this.mapView.unitCache[posId]);
                            break;
                        }
                        now_loadings = mathmanUnit.sprite.loadings;
                        now_loadings_1 = now_loadings.filter((item) => !item.moved);
                        if (posId === mathmanUnit.sprite.posId) {
                            // 非己方单位
                            if (mathmanUnit.sprite.movieFlag !== gameserver.myFlag) {
                                break;
                            }
                            // 不能unload
                            if (now_loadings_1.length === 0) {
                                if (mathmanUnit.sprite.moved) {
                                    break;
                                }
                            }
                        }
                        else if (this.mapView.unitCache[posId] !== undefined) {
                            // 不能load
                            if (this.mapView.unitCache[posId].movieFlag !== gameserver.myFlag ||
                                mathmanUnit.sprite.movieFlag !== gameserver.myFlag ||
                                !MapUI_MathManUnit.canLoadIt(this.mapView.unitCache[posId], mathmanUnit.sprite.typeName)) {
                                linkToMoveShow(this.mapView.unitCache[posId]);
                                break;
                            }
                        }
                        else {
                            // 非可移动单位
                            if (mathmanUnit.sprite.moved ||
                                mathmanUnit.sprite.movieFlag !== gameserver.myFlag) {
                                break;
                            }
                        }
                        mathmanUnit.targetId = data.sprite.posId;
                        this.rightMenu.swapMenuData(mathmanUnit.rightMenu);
                        this.showInteractionView("roadChoose");
                        mathmanUnit.roadsPoint = 0;
                        console.log(mathmanUnit, 'roads');
                        this.mapView.showCoverArea(mathmanUnit.roads[mathmanUnit.roadsPoint].slice(1), "road");
                        BattleUI_BattleUI.nowState.type = BattleStateType.roadsShow;
                        break;
                    default:
                        break;
                }
                break;
            case BattleStateType.atkAreaShow:
                switch (data.blockType) {
                    case "unit":
                        let mathmanUnit = new MapUI_MathManUnit(data.sprite, MapData_BattleMapData.getInstance().toJson());
                        BattleUI_BattleUI.nowState.mathmanUnit = mathmanUnit;
                        this.mapView.showCoverArea(Object.keys(mathmanUnit.atkArea).map((item) => parseInt(item)), "atkArea");
                        this.showInteractionView("moveArea");
                        break;
                    default:
                        break;
                }
                break;
            case BattleStateType.roadsShow:
                break;
            case BattleStateType.targetShow:
                switch (data.blockType) {
                    case "landMark":
                        posId = data.sprite.posId;
                        let landmark_geoLayer = this.mapView.geoLayer;
                        gameserver.send({
                            type: MessageType.action,
                            flag: gameserver.myFlag,
                            data: Object.assign(Object.assign({ type: BActionType.attack, road: mathmanUnit.roads[mathmanUnit.roadsPoint].slice(1), restOil: mathmanUnit.sprite.oil -
                                    mathmanUnit.roads[mathmanUnit.roadsPoint][0] }, staticDataMng.countAtkResult(mathmanUnit.sprite.collectionData(), MapData_BattleMapData.getInstance().unitLayer[posId], BattleGeoTypes[landmark_geoLayer[mathmanUnit.sprite.posId]], BattleGeoTypes[landmark_geoLayer[posId]])), { targetId: posId }),
                        });
                        break;
                    default:
                        break;
                }
                break;
            case BattleStateType.sortieMenu:
                switch (data.blockType) {
                    case "landMark":
                        if (data.sprite.posId ===
                            mathmanUnit.sprite.posId) {
                            return;
                        }
                        mathmanUnit.childrenRoadTarget = data.sprite.posId;
                        BattleUI_BattleUI.nowState.type = BattleStateType.sortieRoads;
                        // let
                        this.mapView.showCoverArea(mathmanUnit.childrenRoads[mathmanUnit.childrenRoadsPoint].slice(1), "sortieRoads", true);
                        this.showInteractionView("sortieRoads");
                        break;
                    default:
                        break;
                }
                break;
            case BattleStateType.sortieRoads:
                switch (data.blockType) {
                    case "landMark":
                        now_loadings = mathmanUnit.sprite.loadings;
                        // now_loadings.splice(mathmanUnit.childrenId, 1);
                        // console.log('rest oil: ',now_loadings[mathmanUnit.childrenId].oil - mathmanUnit.childrenRoads[mathmanUnit.childrenRoadsPoint][0])
                        gameserver.send({
                            type: MessageType.action,
                            flag: gameserver.myFlag,
                            data: {
                                type: BActionType.sortie,
                                road: mathmanUnit.childrenRoads[mathmanUnit.childrenRoadsPoint].slice(1),
                                restOil: now_loadings[mathmanUnit.childrenId].oil -
                                    mathmanUnit.childrenRoads[mathmanUnit.childrenRoadsPoint][0],
                                childrenId: mathmanUnit.childrenId,
                                nowLoading: now_loadings,
                            },
                        });
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }
    hanldeToMain(evt) { }
    handleReturnButton(evt) {
        let mathmanUnit = BattleUI_BattleUI.nowState.mathmanUnit;
        switch (BattleUI_BattleUI.nowState.type) {
            case BattleStateType.moveAreaShow:
            case BattleStateType.atkAreaShow:
                BattleUI_BattleUI.nowState.type = BattleStateType.blank;
                this.showInteractionView("main");
                this.mapView.showCoverArea([], "moveArea");
                break;
            case BattleStateType.unitInfoShow:
            case BattleStateType.roadsShow:
                this.mapView.showCoverArea(Object.keys(BattleUI_BattleUI.nowState.mathmanUnit.moveArea).map((item) => parseInt(item)), "moveArea", true);
                this.showInteractionView("moveArea");
                BattleUI_BattleUI.nowState.type = BattleStateType.moveAreaShow;
                break;
            case BattleStateType.targetShow:
                this.rightMenu.swapMenuData(mathmanUnit.rightMenu);
                this.showInteractionView("roadChoose");
                this.mapView.showCoverArea(mathmanUnit.roads[mathmanUnit.roadsPoint].slice(1), "road");
                BattleUI_BattleUI.nowState.type = BattleStateType.roadsShow;
                break;
            case BattleStateType.sortieMenu:
                this.mapView.showCoverArea(Object.keys(mathmanUnit.moveArea).map((item) => parseInt(item)), "moveArea", true);
                this.showInteractionView("moveArea");
                BattleUI_BattleUI.nowState.type = BattleStateType.moveAreaShow;
                break;
            case BattleStateType.sortieRoads:
                this.rightMenu.swapMenuData(mathmanUnit.sprite.loadings
                    .filter((item) => !item.moved)
                    .map((item, index) => index + 1 + "." + item.type));
                this.mapView.showCoverArea([], "moveArea");
                this.showInteractionView("sortieMenu");
                BattleUI_BattleUI.nowState.type = BattleStateType.sortieMenu;
                break;
            case BattleStateType.buy:
                BattleUI_BattleUI.nowState = {
                    type: BattleStateType.blank
                };
                break;
            default:
                this.showInteractionView("main");
                break;
        }
    }
    handleRightMenu(evt) {
        if (evt._data.type !== BattleEventType.rightMenuClicked ||
            (BattleUI_BattleUI.nowState.type !== BattleStateType.roadsShow &&
                BattleUI_BattleUI.nowState.type !== BattleStateType.sortieMenu)) {
            return;
        }
        let mathmanUnit = BattleUI_BattleUI.nowState.mathmanUnit;
        let tmp_sprite = mathmanUnit.sprite;
        let now_road;
        let restOil;
        let loadings;
        if (BattleUniRightItemTypes.indexOf(evt._data.key) !== -1) {
            let data_key = evt._data.key;
            now_road = mathmanUnit.roads[mathmanUnit.roadsPoint];
            restOil = tmp_sprite.oil - now_road[0];
            console.log(tmp_sprite, now_road, 'div');
            now_road = now_road.slice(1);
            let gameserver = LocalServer_GameServer.getInstance();
            switch (data_key) {
                case "wait":
                    gameserver.send({
                        type: MessageType.action,
                        flag: gameserver.myFlag,
                        data: {
                            type: BActionType.wait,
                            road: now_road,
                            restOil,
                            encountered: false,
                        },
                    });
                    break;
                case "dive":
                    gameserver.send({
                        type: MessageType.action,
                        flag: gameserver.myFlag,
                        data: {
                            type: BActionType.diving,
                            road: now_road,
                            restOil,
                            diving: !tmp_sprite.isDiving,
                        },
                    });
                    break;
                case "load":
                    gameserver.send({
                        type: MessageType.action,
                        flag: gameserver.myFlag,
                        data: {
                            type: BActionType.load,
                            road: now_road,
                            restOil,
                        },
                    });
                    break;
                case "occupy":
                    gameserver.send({
                        type: MessageType.action,
                        flag: gameserver.myFlag,
                        data: {
                            type: BActionType.occupy,
                            road: now_road,
                            restOil,
                            occupy: tmp_sprite.occupied +
                                tmp_sprite.blood *
                                    staticDataMng.unit[tmp_sprite.typeName]["canOccupy"],
                        },
                    });
                    break;
                case "attack":
                    let attack_atkTargets = mathmanUnit.atkTargets;
                    let targets = Object.keys(attack_atkTargets)
                        .filter((item) => attack_atkTargets[item])
                        .map((item) => parseInt(item));
                    BattleUI_BattleUI.nowState.type = BattleStateType.targetShow;
                    this.showInteractionView("targetArea");
                    this.mapView.showCoverArea(targets, "atkTarget", true);
                    break;
                case "unload":
                    loadings = tmp_sprite.loadings;
                    tmp_sprite.loadings = [
                        ...loadings.filter((item) => !item.moved),
                        ...loadings.filter((item) => item.moved),
                    ];
                    loadings = tmp_sprite.loadings;
                    loadings = loadings.filter((item) => !item.moved);
                    this.rightMenu.swapMenuData(loadings.map((item, index) => index + 1 + "." + item.type));
                    BattleUI_BattleUI.nowState.type = BattleStateType.sortieMenu;
                    this.showInteractionView("sortieMenu");
                    this.mapView.showCoverArea([], "moveArea");
                    break;
                case "supply":
                    break;
                default:
                    console.log("error");
                    return;
            }
        }
        // unload
        else {
            let u_key = parseInt(evt._data.key.split(".")[0]) - 1;
            mathmanUnit.childrenId = u_key;
            this.mapView.showCoverArea(Object.keys(mathmanUnit.unLoadArea).map((item) => parseInt(item)), "sortieArea", true);
        }
        // console.log(evt._data);
    }
    /**
     * 需要先 collect map 清空界面
     * @param data
     */
    // public HandleUnitAction(data: BActions) {
    //   this.mapView.showCoverArea([], "moveArea");
    //   this.showInteractionView("main");
    //   BattleUI.nowState.type = BattleStateType.blank;
    //   let tmp_sprite: BattleEleUnit = undefined;
    //   let isOperationLocked = this.isOperationLocked;
    //   let target_sprite: BattleEleUnit;
    //   let target_props: BattleUnitProps;
    //   let posId: number;
    //   let funcCallI: Function;
    //   let waitTimeAfterCall = 0;
    //   let funcCallII: Function;
    //   let funcCallIII = () => {
    //     let gameserver = GameServer.getInstance();
    //     gameserver.isRunning = false;
    //     gameserver.handleActionQ();
    //   };
    //   if (data.type === BActionType.supply) {
    //     for (let i = 0; i < data.targetIds.length; ++i) {
    //       this.mapView.unitCache[data.targetIds[i]].moved = true;
    //     }
    //     this.mapView.unitCache[data.targetIds[data.targetIds.length - 1]].supply =
    //       data.supply;
    //     return;
    //   } else if (data.type === BActionType.buy) {
    //     tmp_sprite = new BattleEleUnit(data.unit.type, data.posId, data.unit);
    //     tmp_sprite.x =
    //       (data.posId % MathManBase.mapWidth) * BLOCK_WIDTH + BORDER_SIZE[0];
    //     tmp_sprite.y =
    //       Math.floor(data.posId / MathManBase.mapWidth) * BLOCK_WIDTH +
    //       BORDER_SIZE[1];
    //     this.mapView.unitLayer.addChild(tmp_sprite);
    //     tmp_sprite.addEventListener(
    //       BattleEvent.DATE,
    //       this.handleEleClicked,
    //       this
    //     );
    //     tmp_sprite.swapMovieFlag(data.unit.flag);
    //     this.mapView.updateUnitCache;
    //     return;
    //   }
    //   this.mapView.mapCollected = false;
    //   tmp_sprite = this.mapView.unitCache[data.road[0]];
    //   this.isOperationLocked = true;
    //   switch (data.type) {
    //     case BActionType.wait:
    //       funcCallI = () => {
    //         tmp_sprite.oil = data.restOil;
    //         tmp_sprite.moved = true;
    //         if (data.encountered) {
    //           // ------------encount
    //         }
    //         tmp_sprite.posId = data.road[data.road.length - 1];
    //         this.mapView.updateUnitCache();
    //         this.isOperationLocked = isOperationLocked;
    //       };
    //       break;
    //     case BActionType.diving:
    //       funcCallI = () => {
    //         tmp_sprite.moved = true;
    //         tmp_sprite.oil = data.restOil;
    //         tmp_sprite.isDiving = data.diving;
    //         tmp_sprite.posId = data.road[data.road.length - 1];
    //         this.mapView.updateUnitCache();
    //         this.isOperationLocked = isOperationLocked;
    //       };
    //       break;
    //     case BActionType.occupy:
    //       funcCallI = () => {
    //         tmp_sprite.moved = true;
    //         tmp_sprite.oil = data.restOil;
    //         tmp_sprite.occupied = data.occupy;
    //         tmp_sprite.posId = data.road[data.road.length - 1];
    //         if (data.occupy >= 20) {
    //           this.mapView.buildCache[tmp_sprite.posId].movieFlag =
    //             tmp_sprite.movieFlag;
    //           tmp_sprite.occupied = 0;
    //         }
    //         this.mapView.updateUnitCache();
    //         this.isOperationLocked = isOperationLocked;
    //       };
    //       break;
    //     case BActionType.load:
    //       target_sprite = this.mapView.unitCache[data.road[data.road.length - 1]];
    //       funcCallI = () => {
    //         tmp_sprite.oil = data.restOil;
    //         tmp_sprite.moved = true;
    //         target_sprite.loadings = [
    //           tmp_sprite.collectionData(),
    //           ...target_sprite.loadings,
    //         ];
    //         delete this.mapView.unitCache[target_sprite.posId];
    //         this.mapView.unitLayer.removeChild(tmp_sprite);
    //         this.mapView.updateUnitCache();
    //         this.isOperationLocked = isOperationLocked;
    //         // console.log('loadigns', target_sprite.loadings, tmp_sprite.loadings, target_sprite.posId, tmp_sprite.posId);
    //       };
    //       break;
    //     case BActionType.attack:
    //       funcCallII = () => {
    //         console.log("second tween");
    //         target_sprite = this.mapView.unitCache[data.targetId];
    //         // 己方
    //         if (data.restBlood <= 0) {
    //           this.mapView.unitLayer.removeChild(tmp_sprite);
    //           delete this.mapView.unitCache[tmp_sprite.posId];
    //         } else {
    //           tmp_sprite.oil = data.restOil;
    //           tmp_sprite.blood = data.restBlood;
    //           tmp_sprite.bullet = data.restBullet;
    //           tmp_sprite.moved = true;
    //           tmp_sprite.posId = data.road[data.road.length - 1];
    //         }
    //         // 敌方
    //         if (data.targetRestBlood <= 0) {
    //           this.mapView.unitLayer.removeChild(target_sprite);
    //           delete this.mapView.unitCache[data.targetId];
    //         } else {
    //           target_sprite.bullet = data.targetRestBullet;
    //           target_sprite.blood = data.targetRestBlood;
    //         }
    //         this.mapView.updateUnitCache();
    //         this.isOperationLocked = isOperationLocked;
    //         console.log(data.restOil, "restOil");
    //       };
    //       waitTimeAfterCall = 1200;
    //       funcCallI = () => {};
    //       break;
    //     case BActionType.sortie:
    //       console.log(data.nowLoading, tmp_sprite);
    //       tmp_sprite.loadings = data.nowLoading;
    //       posId = tmp_sprite.posId;
    //       target_props = tmp_sprite.loadings[data.childrenId];
    //       target_sprite = new BattleEleUnit(
    //         target_props.type,
    //         posId,
    //         target_props
    //       );
    //       target_sprite.x =
    //         (posId % MathManBase.mapWidth) * BLOCK_WIDTH + BORDER_SIZE[0];
    //       target_sprite.y =
    //         Math.floor(posId / MathManBase.mapWidth) * BLOCK_WIDTH +
    //         BORDER_SIZE[1];
    //       this.mapView.unitLayer.addChild(target_sprite);
    //       target_sprite.addEventListener(
    //         BattleEvent.DATE,
    //         this.handleEleClicked,
    //         this
    //       );
    //       target_sprite.swapMovieFlag(target_props.flag);
    //       let tmp_swap_sprite = target_sprite;
    //       tmp_sprite = target_sprite;
    //       target_sprite = tmp_swap_sprite;
    //       // tween_obj = egret.Tween.get(tmp_sprite);
    //       funcCallI = () => {
    //         tmp_sprite.moved = true;
    //         tmp_sprite.oil = data.restOil;
    //         tmp_sprite.posId = data.road[data.road.length - 1];
    //         let ii_loadings = tmp_sprite.loadings;
    //         ii_loadings.splice(data.childrenId, 1);
    //         tmp_sprite.loadings = ii_loadings;
    //         this.mapView.updateUnitCache();
    //         this.isOperationLocked = isOperationLocked;
    //       };
    //       break;
    //     default:
    //       break;
    //   }
    //   this.mapView.unitLayer.setChildIndex(tmp_sprite, -1);
    //   let tween_obj = egret.Tween.get(tmp_sprite);
    //   for (let i = 1; i < data.road.length; ++i) {
    //     let [to_x, to_y] = [
    //       (data.road[i] % MathManBase.mapWidth) * BLOCK_WIDTH + BORDER_SIZE[0],
    //       Math.floor(data.road[i] / MathManBase.mapWidth) * BLOCK_WIDTH +
    //         BORDER_SIZE[1],
    //     ];
    //     // console.log('debug', to_x, to_y, tween_obj);
    //     tween_obj = tween_obj.to(
    //       { x: to_x, y: to_y },
    //       staticDataMng.moveSpeed
    //     );
    //   }
    //   tween_obj = tween_obj.call(funcCallI).wait(waitTimeAfterCall);
    //   if (funcCallII !== undefined) {
    //     tween_obj = tween_obj.call(funcCallII);
    //   }
    //   tween_obj.wait(200).call(funcCallIII);
    //   // if (PlayerManager.getPlayerController(PlayerManager.nowFlag).userId === undefined) {
    //   //     let tmp_evevt = new BattleEvent();
    //   //     tmp_evevt._data = {
    //   //         type: BEOthersType.aiCall
    //   //     }
    //   //     this.dispatchEvent(tmp_evevt);
    //   // }
    //   // if(callBack!==null){
    //   //     tween_obj.call(callBack);
    //   // }
    // }
    showAnimation(typeName, action) { }
    handleInfoButton(evt) {
        let tmp_sprite = BattleUI_BattleUI.nowState.mathmanUnit.sprite;
        let rlt_text = [
            {
                text: tmp_sprite.typeName + "\n    ",
                style: { size: 60, textColor: 0x896745 },
            },
            {
                text: staticDataMng.unit[tmp_sprite.typeName]["dsc"],
                style: { size: 35, textColor: 0x000000 },
            },
            { text: "\n\n    blood:", style: { size: 30, textColor: 0x111111 } },
            {
                text: Math.floor(tmp_sprite.blood * 10) + "%",
                style: { textColor: 0xff1111, size: 30 },
            },
            { text: "    oil:", style: { size: 30, textColor: 0x000000 } },
            { text: tmp_sprite.oil + "", style: { textColor: 0x896745, size: 30 } },
            { text: "    bullet:", style: { size: 30, textColor: 0x000000 } },
            {
                text: tmp_sprite.bullet + "",
                style: { textColor: 0x339955, size: 30 },
            },
            { text: "\n    stealth:", style: { size: 30, textColor: 0x000000 } },
            {
                text: tmp_sprite.isDiving ? "true" : "false",
                style: { textColor: 0x999999, size: 30 },
            },
            { text: "    occupy:", style: { size: 30, textColor: 0x000000 } },
            {
                text: tmp_sprite.occupied + "",
                style: { textColor: 0x999999, size: 30 },
            },
            { text: "    moved:", style: { size: 30, textColor: 0x000000 } },
            {
                text: tmp_sprite.moved ? "true" : "false",
                style: { textColor: 0x999999, size: 30 },
            },
        ];
        let loadings = tmp_sprite.loadings;
        if (loadings.length !== 0) {
            rlt_text.push({
                text: "\n\nloadings\n",
                style: { size: 40, textColor: 0xbbbbbb },
            });
        }
        for (let i = 0; i < loadings.length; ++i) {
            rlt_text.push({ text: "    " }, { text: loadings[i].type, style: { size: 30, textColor: 0x000000 } }, { text: "  " }, {
                text: Math.floor(loadings[i].blood * 10) + "%\n",
                style: { textColor: 0x999999, size: 30 },
            });
        }
        let supply = tmp_sprite.supply;
        let supply_keys = Object.keys(supply);
        if (supply_keys.length !== 0) {
            rlt_text.push({
                text: "\nsupply\n",
                style: { size: 40, textColor: 0xbbbbbb },
            });
        }
        for (let i = 0; i < supply_keys.length; i++) {
            if ((i + 1) % 3 === 0) {
                rlt_text.push({ text: "\n" });
            }
            let tmp_key = BattleUnitTypes[supply_keys[i]];
            rlt_text.push(...[
                { text: "    " },
                { text: tmp_key, style: { size: 30, textColor: 0x000000 } },
                { text: "  " },
                {
                    text: supply[supply_keys[i]] + "",
                    style: { textColor: 0x999999, size: 30 },
                },
            ]);
        }
        this.eleInfoView.text = rlt_text;
        BattleUI_BattleUI.nowState.type = BattleStateType.unitInfoShow;
        this.showInteractionView("eleInfo");
    }
    handleSwitchAreaButton(evt) {
        // console.log(BattleUI.nowState)
        if (BattleUI_BattleUI.nowState.type === BattleStateType.atkAreaShow) {
            // let tmp_sprite_ = BattleUI.nowState.sprite as BattleEleUnit;
            // let tmp_oil = tmp_sprite_.oil >= staticDataMng.unit[tmp_sprite_.typeName]['dailyOil'] ? staticDataMng.unit[tmp_sprite_.typeName]['dailyOil'] : tmp_sprite_.oil
            this.mapView.showCoverArea(Object.keys(BattleUI_BattleUI.nowState.mathmanUnit.moveArea).map((item) => parseInt(item)), "moveArea", true);
            BattleUI_BattleUI.nowState.type = BattleStateType.moveAreaShow;
            // BattleUI.nowState = {
            //     type: BattleStateType.moveAreaShow,
            //     sprite: tmp_sprite_,
            //     moveArea: MathMan.moveArea,
            //     oil: tmp_oil as number
            // }
        }
        else if (BattleUI_BattleUI.nowState.type === BattleStateType.moveAreaShow) {
            // let tmp_sprite_ = BattleUI.nowState.sprite as BattleEleUnit;
            // let atkArea = MathMan.countTargets(tmp_sprite_.posId,
            //     staticDataMng.unit[tmp_sprite_.typeName]['atkMinDistance'] as number,
            //     staticDataMng.unit[tmp_sprite_.typeName]['atkMaxDistance'] as number
            // );
            this.mapView.showCoverArea(Object.keys(BattleUI_BattleUI.nowState.mathmanUnit.atkArea).map((item) => parseInt(item)), "atkArea");
            BattleUI_BattleUI.nowState.type = BattleStateType.atkAreaShow;
            // BattleUI.nowState = {
            //     type: BattleStateType.atkAreaShow,
            //     sprite: tmp_sprite_,
            //     atkArea
            // }
        }
    }
    handleDestoryUnitButton(evt) {
        if (BattleUI_BattleUI.nowState.type !== BattleStateType.unitInfoShow) {
            return;
        }
        let tmp_sprite = BattleUI_BattleUI.nowState.mathmanUnit.sprite;
        this.mapView.unitLayer.removeChild(tmp_sprite);
        delete this.mapView.unitCache[tmp_sprite.posId];
        // BattleUI.nowState = {
        //     type: BattleStateType.blank
        // }
        BattleUI_BattleUI.nowState.type = BattleStateType.blank;
        delete BattleUI_BattleUI.nowState.mathmanUnit;
        this.mapView.showCoverArea([], "moveArea");
        this.showInteractionView("main");
    }
    handleChooseUpRoad(evt) {
        let mathmanUnit = BattleUI_BattleUI.nowState.mathmanUnit;
        if (BattleUI_BattleUI.nowState.type === BattleStateType.roadsShow) {
            mathmanUnit.roadsPoint =
                (mathmanUnit.roadsPoint + 1) % mathmanUnit.roads.length;
            this.mapView.showCoverArea(mathmanUnit.roads[mathmanUnit.roadsPoint].slice(1), "road");
        }
        else if (BattleUI_BattleUI.nowState.type === BattleStateType.sortieRoads) {
            mathmanUnit.childrenRoadsPoint =
                (mathmanUnit.childrenRoadsPoint + 1) % mathmanUnit.childrenRoads.length;
            this.mapView.showCoverArea(mathmanUnit.childrenRoads[mathmanUnit.childrenRoadsPoint].slice(1), "sortieRoads", true);
        }
    }
    handleChooseDownRoad(evt) {
        let mathmanUnit = BattleUI_BattleUI.nowState.mathmanUnit;
        let road_length;
        // console.log('fsdfs')
        if (BattleUI_BattleUI.nowState.type === BattleStateType.roadsShow) {
            road_length = mathmanUnit.roads.length;
            // console.log('fsdfds')
            mathmanUnit.roadsPoint =
                (mathmanUnit.roadsPoint - 1 + road_length) % road_length;
            this.mapView.showCoverArea(mathmanUnit.roads[mathmanUnit.roadsPoint].slice(1), "road");
        }
        else if (BattleUI_BattleUI.nowState.type === BattleStateType.sortieRoads) {
            mathmanUnit.childrenRoadsPoint =
                (mathmanUnit.childrenRoadsPoint -
                    1 +
                    mathmanUnit.childrenRoads.length) %
                    mathmanUnit.childrenRoads.length;
            this.mapView.showCoverArea(mathmanUnit.childrenRoads[mathmanUnit.childrenRoadsPoint].slice(1), "sortieRoads", true);
        }
    }
    handleGameData(evt) {
        let mapData = MapData_BattleMapData.getInstance();
        MapData_BattleMapData.getInstance().toJson();
        let users = Object.keys(mapData.playerSetting);
        console.log(mapData.playerSetting, 'setting', users);
        let rlt_info = {};
        for (let i = 0; i < users.length; ++i) {
            let tmp_user = mapData.playerSetting[users[i]];
            console.log(tmp_user);
            rlt_info[users[i]] = [
                { text: "任务背景：" + tmp_user.taskBg + "\n" },
                { text: "任务目标：" + tmp_user.taskTarget + "\n" },
                { text: "敌方：" + tmp_user.enemies.join(",") + "\n" },
                { text: "\n" },
                { text: "$:" + tmp_user.nowMoney + "\n" },
                { text: "当前军队价值" + tmp_user.grade.allUnitMoney + "\n" },
                { text: "损失军队" + tmp_user.grade.lostUnitMoney + "\n" },
                { text: "摧毁军队" + tmp_user.grade.destroyUnitMoney + "\n" },
                { text: "\n" },
                {
                    text: "指挥官" +
                        staticDataMng.commander[tmp_user.commanders[0]]["name"] +
                        "\n",
                },
                {
                    text: "指挥官描述" +
                        staticDataMng.commander[tmp_user.commanders[0]]["dsc"] +
                        "\n",
                },
            ];
        }
        this.gameDataView.data = rlt_info;
        this.showInteractionView("playerInfo");
    }
    handleScaleMap(evt) {
        let mapData = MapData_BattleMapData.getInstance();
        // this.miniMapView.drawMap(this.mapView.mapData);
        // staticDataMng.drawMap(mapData, this.miniMapView.container);
        this.showInteractionView("miniMap");
    }
    handleSaveGameButton(evt) { }
    handleExitGameButton(evt) {
        // super.handleExitGameButton(
        // console.log('sdfsdfsdf')
        // let outer_evt = new GuiEvent();
        // outer_evt._data = {
        //     type: GuiEventType.toMain
        // }
        // console.log('11111')
        this.dispatchEvent(evt);
    }
    handleBoundEnd(evt) {
        if (evt === undefined) {
            MapData_BattleMapData.getInstance().toJson();
            let unitCache = this.mapView.unitCache;
            for (let i in unitCache) {
            }
            return;
        }
        let myFlag = LocalServer_GameServer.getInstance().myFlag;
        LocalServer_GameServer.getInstance().send({
            data: {
                type: BActionType.boutEnd,
                nowFlag: myFlag
            },
            flag: myFlag,
            type: MessageType.action,
        });
    }
    handleChatView(evt) {
        let msg = evt._data;
        // BattleReferee.instance.sendToServer({ data: msg });
        LocalServer_GameServer.getInstance().send({ type: MessageType.chat, data: msg });
    }
    /**
     *
     * @param msg
     */
    handleChatServer(msg) {
        if (this.chatView.isForbiddened) {
            return;
        }
        this.chatView.send(msg);
        this.chatMessagesView.putMessage([msg]);
    }
    handleBuy(evt) {
        let data = evt._data;
        let gameserver = LocalServer_GameServer.getInstance();
        let mapData = MapData_BattleMapData.getInstance();
        let unitName = BattleUnitTypes[data.key];
        let costMoney = staticDataMng.unit[unitName]['costMoney'];
        if (mapData.playerSetting[gameserver.myFlag].nowMoney >= costMoney) {
            let action = {
                type: BActionType.buy,
                posId: this.chooseBuildingPos,
                unit: MapData_DataMaker.makeUnitProps(unitName, gameserver.myFlag)
            };
            let message = {
                type: MessageType.action,
                data: action,
                flag: gameserver.myFlag
            };
            gameserver.send(message);
        }
        // this.handleReturnButton()
        BattleUI_BattleUI.nowState = {
            type: BattleStateType.blank
        };
        this.showInteractionView("main");
    }
}
BattleUI_BattleUI.nowState = {
    type: BattleStateType.blank,
};
window["BattleUI"] = BattleUI_BattleUI;
__reflect(BattleUI_BattleUI.prototype,"BattleUI",[]); 

// CONCATENATED MODULE: ./src/Battle/ResMng.ts

/**
 * image, sound
 */
class ResMng_ResMng {
    /**
     * after load resource completely
     */
    static init() {
        ResMng_ResMng.movieClip = {};
        ResMng_ResMng.geoTypeCode = {
            plain: ["-"],
            sea: ["center"],
            beach: ["top"],
            forest: ["-"],
            lake: ["-"],
            mountain: ["-"],
            road: ["across"],
            rocks: ["-"],
            bridge: ["across"],
        };
        for (let i of BattleUnitTypes) {
            let data2mc = RES.getRes("battle_unit_" + i + "_json");
            let texture2mc = RES.getRes("battle_unit_" + i + "_png");
            ResMng_ResMng.movieClip["unit_" + i] = new egret.MovieClipDataFactory(data2mc, texture2mc);
        }
        for (let i of BattleGeoTypes) {
            let data2mc = RES.getRes("battle_geo_" + i + "_json");
            let texture2mc = RES.getRes("battle_geo_" + i + "_png");
            ResMng_ResMng.movieClip["geo_" + i] = new egret.MovieClipDataFactory(data2mc, texture2mc);
        }
        for (let i of BattleBuildTypes) {
            let data2mc = RES.getRes("battle_build_" + i + "_json");
            let texture2mc = RES.getRes("battle_build_" + i + "_png");
            ResMng_ResMng.movieClip["build_" + i] = new egret.MovieClipDataFactory(data2mc, texture2mc);
        }
    }
    /**
     * getMovieClip
     */
    static getGeoMovieClip(typeName, actionName) {
        // console.log(ResMng.movieClip['geo_'+typeName].generateMovieClipData( actionName ), '1')
        // console.log(typeName, actionName, '8888')
        return new egret.MovieClip(ResMng_ResMng.movieClip["geo_" + typeName].generateMovieClipData(actionName));
        // return ResMng.movieClip['geo_'+typeName].generateMovieClipData(actionName);
    }
    /**
     * static getUnitMovieClip
     */
    static getUnitMovieClip(typeName, actionName) {
        return new egret.MovieClip(ResMng_ResMng.movieClip["unit_" + typeName].generateMovieClipData(actionName));
        // return ResMng.movieClip['unit_'+typeName].generateMovieClipData(actionName);
    }
    static getBuildMovieClip(typeName, actionName) {
        // console.log(actionName, typeName, "fff");
        return new egret.MovieClip(ResMng_ResMng.movieClip["build_" + typeName].generateMovieClipData(actionName));
    }
    static getNumberTexture(nu) {
        return RES.getRes("battle_state_number_json#" + nu);
    }
    static getUnitStateTexture(nu) {
        return RES.getRes("battle_state_unit_json#" + nu);
    }
    static getSoundSource(type, name) {
        return RES.getRes(`battle_${type}_${name}_wav`);
    }
}
window["ResMng"] = ResMng_ResMng;
__reflect(ResMng_ResMng.prototype,"ResMng",[]); 

// CONCATENATED MODULE: ./src/Battle/MapUI.ts
/**
 * 不直接修改ui，而根据action来修改ui
 *
 *
 *
 *
 *
 */





const BLOCK_WIDTH = 100;
const BORDER_SIZE = [400, 400];
const MOVE_SPEED = 200;
window["MOVE_SPEED"] = MOVE_SPEED;
/**
 * event, 事件  == 信道
 */
class BItemClickEvent extends egret.Event {
    constructor(type = BItemClickEvent.DATE, bubbles = false, cancelable = false) {
        super(type, bubbles, cancelable);
    }
}
BItemClickEvent.DATE = "BItemClickEvent";
window["BItemClickEvent"] = BItemClickEvent;
__reflect(BItemClickEvent.prototype,"BItemClickEvent",[]); 
const BattleLandMarkTypes = [
    "fog",
    "lada",
    "moveArea",
    "atkArea",
    "road",
    "atkTarget",
    "commanderhalo",
    "speakUnit",
    "taskTarget",
    "unloadArea",
    "sortieArea",
    "sortieRoads",
    "editCover"
];
/**
 * 地形对象
 */
class MapUI_BattleEleGeo extends egret.Sprite {
    // public posId: number;
    constructor(typeName) {
        super();
        this.width = BLOCK_WIDTH;
        this.height = BLOCK_WIDTH;
        this.typeName = typeName;
        this.initMovieClip();
    }
    initMovieClip() {
        this.movieclip = ResMng_ResMng.getGeoMovieClip(this.typeName, ResMng_ResMng.geoTypeCode[this.typeName]);
        this.movieFlag = ResMng_ResMng.geoTypeCode[this.typeName];
        this.addChildAt(this.movieclip, 0);
        this.movieclip.gotoAndPlay("stand");
    }
    /**
     * swap
     */
    swapMovieFlag(flag) {
        this.removeChild(this.movieclip);
        this.movieclip = ResMng_ResMng.getGeoMovieClip(this.typeName, flag);
        this.movieFlag = flag;
        this.addChildAt(this.movieclip, 0);
        this.movieclip.gotoAndPlay("stand");
        this.addChildAt(this.movieclip, 0);
    }
}
window["BattleEleGeo"] = MapUI_BattleEleGeo;
__reflect(MapUI_BattleEleGeo.prototype,"BattleEleGeo",[]); 
/**
 * landmark对象
 */
class BattleEleLandMark extends MapUI_BattleEleGeo {
    constructor(typeName, posId, canListen = true) {
        super(typeName);
        this.posId = posId;
        switch (typeName) {
            case "editCover":
                // type
                this.graphics.beginFill(0xff3344, 0.2);
                this.graphics.drawRect(0, 0, BLOCK_WIDTH, BLOCK_WIDTH);
                this.graphics.endFill();
                this.alpha = 0.01;
                break;
            default:
                // type
                this.graphics.beginFill(0xff3344, 0.2);
                this.graphics.drawRect(0, 0, BLOCK_WIDTH, BLOCK_WIDTH);
                this.graphics.endFill();
                this.alpha = 0.3;
                break;
        }
        if (canListen) {
            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleClicked, this);
        }
    }
    initMovieClip() {
        this.graphics.beginFill(0xff4433);
        this.graphics.drawRect(0, 0, this.width, this.height);
        this.graphics.endFill();
    }
    swapMovieFlag(flag) {
        return;
    }
    handleClicked(evt) {
        // let outer_event = new BattleEvent();
        let outer_event = new BItemClickEvent();
        outer_event.data = {
            sprite: this,
            blockType: "landMark",
        };
        // outer_event._data = {
        //   type: BattleEventType.spriteClicked,
        //   sprite: this,
        //   blockType: "landMark",
        // };
        this.dispatchEvent(outer_event);
    }
}
window["BattleEleLandMark"] = BattleEleLandMark;
__reflect(BattleEleLandMark.prototype,"BattleEleLandMark",[]); 
/**
 * 建筑对象
 */
class MapUI_BattleEleBuild extends MapUI_BattleEleGeo {
    constructor(typeName, posId) {
        super(typeName);
        this.posId = posId;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleClicked, this);
    }
    initMovieClip() {
        this.movieclip = ResMng_ResMng.getBuildMovieClip(this.typeName, PlayerFlagTypes[0]);
        this.addChildAt(this.movieclip, 0);
        this.movieclip.gotoAndPlay("stand");
    }
    swapMovieFlag(flag) {
        this.removeChild(this.movieclip);
        this.movieclip = ResMng_ResMng.getBuildMovieClip(this.typeName, flag);
        this.movieFlag = flag;
        this.addChildAt(this.movieclip, 0);
        this.movieclip.gotoAndPlay("stand");
        this.addChildAt(this.movieclip, 0);
    }
    handleClicked(evt) {
        // let outer_event = new BattleEvent();
        // outer_event._data = {
        //   type: BattleEventType.spriteClicked,
        //   sprite: this,
        //   blockType: "build",
        // };
        let outer_event = new BItemClickEvent();
        outer_event.data = {
            sprite: this,
            blockType: "build",
        };
        this.dispatchEvent(outer_event);
    }
    collectData() {
        return {
            type: this.typeName,
            flag: this.movieFlag,
            posId: this.posId,
        };
    }
}
window["BattleEleBuild"] = MapUI_BattleEleBuild;
__reflect(MapUI_BattleEleBuild.prototype,"BattleEleBuild",[]); 
/**
 * 单位对象
 */
class MapUI_BattleEleUnit extends MapUI_BattleEleBuild {
    constructor(typeNmae, posId, data) {
        super(typeNmae, posId);
        this.data = data;
        // let txtr: egret.Texture = ResMng.getUnitStateTexture('oil');
        this.unitStateView = new egret.Bitmap();
        this.unitStateView.scaleX = 0.4;
        this.unitStateView.scaleY = 0.4;
        this.unitStateView.x = this.width * (0.6 - 0.1);
        this.unitStateView.y = this.height * (0.6 - 0.1);
        this.addChildAt(this.unitStateView, 1);
        let txtr = ResMng_ResMng.getNumberTexture(data.bullet);
        this.numberStateView = new egret.Bitmap(txtr);
        this.numberStateView.scaleX = 0.8;
        this.numberStateView.scaleY = 0.8;
        this.numberStateView.y = this.height * (0.6 - 0.1);
        this.numberStateView.x = this.width * 0.00;
        this.addChildAt(this.numberStateView, 100);
        this.countUnitStates();
        this.updateCustomFps();
        this.updateByProps();
    }
    initMovieClip() {
        this.movieclip = ResMng_ResMng.getUnitMovieClip(this.typeName, PlayerFlagTypes[0]);
        this.addChildAt(this.movieclip, 0);
        this.movieclip.gotoAndPlay("stand");
        this._animeState = "stand";
        this.soundChannel = null;
    }
    set animeState(v) {
        // console.log("hi", v)
        if (this.soundChannel !== null) {
            this.soundChannel.stop();
        }
        let type = null, name = null;
        switch (v) {
            case "gray":
                this.movieclip.gotoAndPlay("gray");
                break;
            case "stand":
                this.movieclip.gotoAndPlay("stand");
                break;
            case "run":
                type = "move";
                name = staticDataMng.unit[this.typeName]['engine'];
                break;
            case "fight":
                type = "fight";
                name = "bao";
                break;
            default:
                break;
        }
        if (type !== null && name !== null) {
            const sound = ResMng_ResMng.getSoundSource(type, name);
            if (type === "fight") {
                this.soundChannel = sound.play(0, 1);
            }
            else {
                this.soundChannel = sound.play(0, 0);
            }
        }
        this._animeState = v;
    }
    get animeState() {
        return this._animeState;
    }
    swapMovieFlag(flag) {
        this.removeChild(this.movieclip);
        this.movieclip = ResMng_ResMng.getUnitMovieClip(this.typeName, flag);
        this.movieFlag = flag;
        this.addChildAt(this.movieclip, 0);
        // this.movieclip.gotoAndPlay("stand");
        this.moved = this.moved;
        this.addChildAt(this.movieclip, 0);
    }
    handleClicked(evt) {
        // let outer_event = new BattleEvent();
        // outer_event._data = {
        //   type: BattleEventType.spriteClicked,
        //   sprite: this,
        //   blockType: "unit",
        // };
        // console.log('hihi')
        let outer_event = new BItemClickEvent();
        outer_event.data = {
            sprite: this,
            blockType: "unit",
        };
        this.dispatchEvent(outer_event);
    }
    collectionData() {
        return this.data;
    }
    countUnitStates() {
        let new_state = [];
        if (this.oil <=
            staticDataMng.unit[this.typeName]["engineOil"] * 0.4) {
            new_state.push("oil");
        }
        if (this.bullet <=
            staticDataMng.unit[this.typeName]["bullet"] * 0.4) {
            new_state.push("bullet");
        }
        if (Object.keys(this.supply).length !== 0) {
            new_state.push("supplies");
        }
        if (this.loadings.length !== 0) {
            new_state.push("loading");
        }
        if (this.isDiving) {
            new_state.push("diving");
        }
        if (this.occupied > 0) {
            new_state.push("occupy");
        }
        this.unitStates = new_state;
        this.unitStates_nowPoint = 0;
        if (new_state.length === 0) {
            this.unitStateView.visible = false;
        }
        else {
            this.unitStateView.visible = true;
        }
    }
    updateCustomFps() {
        if (this.unitStates.length !== 0) {
            this.unitStateView.texture = ResMng_ResMng.getUnitStateTexture(this.unitStates[this.unitStates_nowPoint]);
            this.unitStates_nowPoint =
                (this.unitStates_nowPoint + 1) % this.unitStates.length;
            // console.log(this.unitStates, this.unitStates[this.unitStates_nowPoint])
        }
    }
    updateByProps(props) {
        if (props === undefined) {
            props = this.data;
        }
        this.blood = props.blood;
        this.oil = props.oil;
        this.bullet = props.bullet;
        this.supply = props.supply;
        this.loadings = props.loadings;
        this.moved = props.moved;
        this.isDiving = props.isDiving;
        this.occupied = props.occupied;
    }
    // 监听属性变化
    get blood() {
        return this.data.blood;
    }
    set blood(blood) {
        this.data.blood = Math.round(blood);
        if (Math.round(blood) === 10) {
            this.numberStateView.visible = false;
        }
        else {
            console.log(this.data.flag, this.posId);
            this.numberStateView.visible = true;
            this.numberStateView.texture = ResMng_ResMng.getNumberTexture(blood);
        }
    }
    get oil() {
        return this.data.oil;
    }
    set oil(v) {
        this.data.oil = v;
        this.countUnitStates();
    }
    get bullet() {
        return this.data.bullet;
    }
    set bullet(v) {
        this.data.bullet = v;
        this.countUnitStates();
    }
    get supply() {
        return this.data.supply;
    }
    set supply(v) {
        this.data.supply = v;
        this.countUnitStates();
    }
    get loadings() {
        return this.data.loadings;
    }
    set loadings(v) {
        this.data.loadings = v;
        this.countUnitStates();
    }
    get moved() {
        return this.data.moved;
    }
    set moved(v) {
        this.data.moved = v;
        if (v) {
            this.movieclip.gotoAndPlay("gray");
            this.animeState = "gray";
        }
        else {
            this.movieclip.gotoAndPlay("stand");
            this.animeState = "stand";
        }
    }
    get isDiving() {
        return this.data.isDiving;
    }
    set isDiving(v) {
        this.data.isDiving = v;
        this.countUnitStates();
    }
    set occupied(v) {
        this.data.occupied = v;
        this.countUnitStates();
    }
    get occupied() {
        return this.data.occupied;
    }
}
window["BattleEleUnit"] = MapUI_BattleEleUnit;
__reflect(MapUI_BattleEleUnit.prototype,"BattleEleUnit",[]); 
class BattleActionFinishEvent extends egret.Event {
    constructor(type = BattleActionFinishEvent.DATE, bubbles = false, cancelable = false) {
        super(type, bubbles, cancelable);
    }
}
BattleActionFinishEvent.DATE = "BattleActionFinishEvent";
window["BattleActionFinishEvent"] = BattleActionFinishEvent;
__reflect(BattleActionFinishEvent.prototype,"BattleActionFinishEvent",[]); 
/**
 * main, map
 */
class MapUI_BattleMapView extends egret.DisplayObjectContainer {
    constructor() {
        super();
        // public permission: string
        /**
         * 只起缓存作用的变量
         */
        // public mapData: BattleMapProps;
        this.normalCoverData = [];
        this.mapCollected = false;
        this.unitCacheUpdated = false;
        this.isRunning = false;
        this.baseLayer = new egret.Sprite();
        this.geoLayer = new egret.DisplayObjectContainer();
        this.buildLayer = new egret.DisplayObjectContainer();
        this.unitLayer = new egret.DisplayObjectContainer();
        this.coverLayer = new egret.DisplayObjectContainer();
        this.fogLayer = new egret.DisplayObjectContainer();
        this.addChild(this.baseLayer);
        this.addChild(this.geoLayer);
        this.addChild(this.buildLayer);
        this.addChild(this.unitLayer);
        this.addChild(this.fogLayer);
        this.addChild(this.coverLayer);
        this.actionQ = [];
        this.addEventListener(BattleActionFinishEvent.DATE, this.handleAction, this);
        this.updateCustomTimer = new egret.Timer(1200, 0);
        this.updateCustomTimer.addEventListener(egret.TimerEvent.TIMER, this.updateCustomFps, this);
        this.updateCustomTimer.start();
    }
    /**
     *
     * @param map buildLayer, unitLayer
     */
    updateByMapData(type) {
        this.updateUnitCache();
        let map = MapData_BattleMapData.getInstance().toJson();
        let map_width = MapData_MathManBase.mapWidth;
        let map_height = MapData_MathManBase.mapHeight;
        if (type === "init") {
            this.unitCache = {};
            this.buildCache = {};
            this.geoCache = {};
            this.geoLayer.removeChildren();
            this.buildLayer.removeChildren();
            this.unitLayer.removeChildren();
            let tmp_geo = map.geoLayer;
            let tmp_geo_layer = this.geoLayer;
            for (let i = 0; i < tmp_geo.length; ++i) {
                let tmp_obj = new MapUI_BattleEleGeo(BattleGeoTypes[tmp_geo[i]]);
                tmp_obj.x = (i % map_width) * BLOCK_WIDTH;
                tmp_obj.y = Math.floor(i / map_width) * BLOCK_WIDTH;
                tmp_geo_layer.addChild(tmp_obj);
                // tmp_obj.addEventListener(BattleEvent.DATE, this.handleEleClicked, this);
                this.geoCache[i] = tmp_obj;
            }
        }
        if (type === "init" || type === "build" || type === "both") {
            let tmp_build_layer = this.buildLayer;
            let tmp_build_cache = this.buildCache;
            for (let i in tmp_build_cache) {
                let posId = parseInt(i);
                let cache_obj = tmp_build_cache[posId];
                let data_obj = map.buildLayer[i];
                if (data_obj === undefined) {
                    tmp_build_layer.removeChild(cache_obj);
                    delete tmp_build_cache[posId];
                }
                else if (data_obj.type !== cache_obj.typeName) {
                    tmp_build_layer.removeChild(tmp_build_cache[posId]);
                    delete tmp_build_cache[posId];
                }
                else if (data_obj.flag !== cache_obj.movieFlag) {
                    cache_obj.swapMovieFlag(data_obj.flag);
                }
                else {
                    delete tmp_build_cache[posId];
                    delete tmp_build_cache[posId];
                }
            }
            for (let i in map.buildLayer) {
                if (this.buildCache[i]) {
                    continue;
                }
                let posId = parseInt(i);
                let x_ = posId % map_width;
                let y_ = Math.floor(posId / map_width);
                let tmp_obj = new MapUI_BattleEleBuild(map.buildLayer[i].type, posId);
                tmp_obj.swapMovieFlag(map.buildLayer[i].flag);
                tmp_obj.x = x_ * BLOCK_WIDTH;
                tmp_obj.y = y_ * BLOCK_WIDTH;
                tmp_build_layer.addChild(tmp_obj);
                this.buildCache[posId] = tmp_obj;
                tmp_obj.addEventListener(BItemClickEvent.DATE, this.handleItemClicked, this);
            }
        }
        if (type === "init" || type === "unit" || type === "both") {
            let tmp_unit_layer = this.unitLayer;
            let tmp_unit_cache = this.unitCache;
            for (let i in tmp_unit_cache) {
                let posId = parseInt(i);
                let cache_obj = tmp_unit_cache[posId];
                let data_obj = map.unitLayer[i];
                if (data_obj === undefined) {
                    tmp_unit_layer.removeChild(cache_obj);
                    delete tmp_unit_cache[posId];
                }
                else if (data_obj.type !== cache_obj.typeName) {
                    tmp_unit_layer.removeChild(tmp_unit_cache[posId]);
                    delete tmp_unit_cache[posId];
                }
                else if (data_obj.flag !== cache_obj.movieFlag) {
                    cache_obj.swapMovieFlag(data_obj.flag);
                }
                else {
                    tmp_unit_layer.removeChild(cache_obj);
                    delete tmp_unit_cache[posId];
                }
            }
            for (let i in map.unitLayer) {
                let posId = parseInt(i);
                this.unitCache[posId] = this.makeUnit(posId, map.unitLayer[i]);
            }
        }
        if (type === "init") {
            this.scaleX = this.scaleX = map.sizeState.scale;
            // console.log(this.buildLayer.x, 'x')
            // this.width = this.baseLayer.height = map_height * BLOCK_WIDTH + BORDER_SIZE[1];
            // this.height = this.baseLayer.width = map_width * BLOCK_WIDTH + BORDER_SIZE[0];
            // this.geoLayer.x = this.buildLayer.x = this.unitLayer.x = this.
            // this.baseLayer.x = BORDER_SIZE[0] / 2;
            // this.baseLayer.y = BORDER_SIZE[1] /2;
        }
        // console.log(this.unitCache, 'chchae')
    }
    /**
     * update
     */
    updateUnitCache() {
        // if (this.unitCacheUpdated) {
        //   return;
        // }
        this.unitCacheUpdated = true;
        let tmp = {};
        for (let i = 0; i < this.unitLayer.numChildren; ++i) {
            let tmp_obj = this.unitLayer.getChildAt(i);
            tmp[tmp_obj.posId] = tmp_obj;
        }
        this.unitCache = tmp;
    }
    /**
     * 使用这个方法需要手动更新 unitCache
     * @param posId
     * @param props
     * @returns
     */
    makeUnit(posId, props) {
        let target_sprite = new MapUI_BattleEleUnit(props.type, posId, props);
        target_sprite.x =
            (posId % MapData_MathManBase.mapWidth) * BLOCK_WIDTH;
        target_sprite.y =
            Math.floor(posId / MapData_MathManBase.mapWidth) * BLOCK_WIDTH;
        this.unitLayer.addChildAt(target_sprite, 0);
        target_sprite.addEventListener(BItemClickEvent.DATE, this.handleItemClicked, this);
        target_sprite.swapMovieFlag(props.flag);
        return target_sprite;
        // this.unitLayer.setChildIndex(target_sprite, -1);
    }
    /**
     *
     * @returns 忽略时间上的微小差异
     */
    handleAction() {
        // flag:string|undefined=undefined // data: undefined| BActions = undefined,
        // if(data!==undefined){
        //     this.actionQ.push({action: data, flag})
        // }
        if (this.isRunning) {
            return;
        }
        if (this.actionQ.length === 0) {
            return;
        }
        // lock
        let tmp_battle_ui = LocalServer_GameServer.getInstance().battle;
        this.isRunning = true;
        tmp_battle_ui.touchEnabled = true;
        this.touchEnabled = true;
        if (BattleUI_BattleUI.nowState.type !== BattleStateType.blank) {
            BattleUI_BattleUI.nowState = {
                type: BattleStateType.blank
            };
            tmp_battle_ui.showInteractionView("main");
            this.showCoverArea([], "lada");
        }
        let now_action = this.actionQ.splice(0, 1)[0];
        let mapData = MapData_BattleMapData.getInstance();
        let gameserver = LocalServer_GameServer.getInstance();
        let tmp_sprite = undefined;
        // let target_sprite: BattleEleUnit;
        // let target_props: BattleUnitProps;
        // let posId: number;
        let funcCallAnimation; // 播放动画
        let waitTimeAnimation = 0;
        let waitTimeSound = 0;
        let funcCallSound; // 播放声音
        let funcCallEnd = () => {
            mapData.updateByAction(now_action.action, now_action.flag);
            this.updateByAction(now_action.action);
            // unlock
            this.isRunning = false;
            LocalServer_GameServer.getInstance().battle.touchEnabled = true;
            this.touchEnabled = true;
            this.dispatchEvent(new BattleActionFinishEvent());
        };
        if (now_action.action.type === BActionType.supply) {
            // mapData.updateByAction(now_action.action, now_action.flag);
            funcCallEnd();
        }
        else if (now_action.action.type === BActionType.udpateMap) {
            mapData.updateByAction(now_action.action, now_action.flag);
            this.updateByMapData("both");
            if (gameserver.myFlag !== null && mapData.playerSetting[gameserver.myFlag].isOver) {
                gameserver.battle.setTitle([{
                        text: "你已战败",
                        style: {
                            textColor: 0xff0000,
                            size: 60
                        }
                    }]);
            }
            funcCallEnd();
        }
        else if (now_action.action.type === BActionType.buy) {
            // mapData.updateByAction(now_action.action, now_action.flag);
            funcCallEnd();
        }
        else if (now_action.action.type === BActionType.boutEnd) {
            let gameserver = LocalServer_GameServer.getInstance();
            mapData.updateByAction(now_action.action, now_action.flag);
            gameserver.battle.setTitle([
                {
                    text: "现在是" + mapData.countNewFlag(now_action.action.nowFlag) + "的回合", style: { size: 60, textColor: 0 }
                }
            ]);
            gameserver.nowBoutFlag = mapData.countNewFlag(now_action.action.nowFlag);
            let bout_now_user = gameserver.playerInfo.find(item => item.flag === gameserver.nowBoutFlag);
            if (bout_now_user.isComputer) {
                gameserver.startProvideAiTimer();
            }
            else {
                gameserver.stopProvideAiTimer();
            }
            funcCallEnd();
        }
        else {
            if (now_action.action.type === BActionType.sortie) {
                tmp_sprite = this.makeUnit(now_action.action.road[0], now_action.action.nowLoading[now_action.action.childrenId]);
            }
            else {
                tmp_sprite = this.unitCache[now_action.action.road[0]];
            }
            //   设置动漫，声音， waitime
            switch (now_action.action.type) {
                case BActionType.attack:
                    funcCallAnimation = () => { };
                    funcCallSound = () => {
                        tmp_sprite.animeState = "fight";
                        waitTimeSound = 400;
                    };
                    break;
                default:
                    funcCallAnimation = () => { };
                    funcCallSound = () => {
                        tmp_sprite.animeState = "stand";
                    };
                    break;
            }
            this.unitLayer.setChildIndex(tmp_sprite, -1);
            let tween_obj = egret.Tween.get(tmp_sprite);
            for (let i = 1; i < now_action.action.road.length; ++i) {
                let [to_x, to_y] = [
                    (now_action.action.road[i] % MapData_MathManBase.mapWidth) * BLOCK_WIDTH,
                    Math.floor(now_action.action.road[i] / MapData_MathManBase.mapWidth) *
                        BLOCK_WIDTH,
                ];
                ;
                tween_obj = tween_obj.to({ x: to_x, y: to_y }, MOVE_SPEED);
            }
            tween_obj = tween_obj.call(funcCallAnimation).wait(waitTimeAnimation);
            tween_obj = tween_obj.call(funcCallSound).wait(waitTimeSound);
            tween_obj.wait(200).call(funcCallEnd);
            tmp_sprite.animeState = "run";
            // if(now_action.action.type===BActionType.load){
            //   tween_obj.call(()=>{
            //   })
            // }
            // .call(()=>{
            //   tmp_sprite.updateByProps();
            //   console.log(tmp_sprite)
            // });
        }
    }
    updateByAction(action) {
        this.unitCacheUpdated = false;
        this.updateUnitCache();
    }
    handleItemClicked(event) {
        let outer_event = new BattleEvent();
        outer_event._data = {
            type: BattleEventType.spriteClicked,
            sprite: event.data.sprite,
            blockType: event.data.blockType
        };
        this.dispatchEvent(outer_event);
    }
    /**
     * show LandMarks
     */
    showCoverArea(posIds, coverType, canListen = false) {
        console.log("cover area", posIds);
        let map_width = MapData_BattleMapData.getInstance().sizeState.width;
        // let scale = this.scaleX;
        let landMarkLayer = this.coverLayer;
        landMarkLayer.removeChildren();
        for (let i in posIds) {
            let x = posIds[i] % map_width;
            let y = Math.floor(posIds[i] / map_width);
            let tmp_obj = new BattleEleLandMark(coverType, posIds[i], canListen);
            tmp_obj.x = BLOCK_WIDTH * x;
            tmp_obj.y = BLOCK_WIDTH * y;
            if (canListen) {
                tmp_obj.addEventListener(BItemClickEvent.DATE, this.handleItemClicked, this);
            }
            landMarkLayer.addChild(tmp_obj);
        }
    }
    /**
     * designed for edit primarily
     */
    updateGeoBlock(typeName, posId) {
        let map_width = MapData_MathManBase.mapWidth;
        this.geoLayer.removeChild(this.geoCache[posId]);
        delete this.geoCache[posId];
        let tmp_obj = new MapUI_BattleEleGeo(typeName);
        tmp_obj.x = (posId % map_width) * BLOCK_WIDTH;
        tmp_obj.y = Math.floor(posId / map_width) * BLOCK_WIDTH;
        this.geoLayer.addChild(tmp_obj);
        this.geoCache[posId] = tmp_obj;
    }
    updateCustomFps() {
        for (let i = 0; i < this.unitLayer.numChildren; i++) {
            let tmp_unit = this.unitLayer.getChildAt(i);
            tmp_unit.updateCustomFps();
        }
    }
}
window["BattleMapView"] = MapUI_BattleMapView;
__reflect(MapUI_BattleMapView.prototype,"BattleMapView",[]); 
class MapUI_MathManUnit extends MapData_MathManBase {
    constructor(sprite, mapData) {
        super();
        this.sprite = sprite;
        this.mapData = mapData;
        //   this.playerControl = PlayerManager.getPlayerController(
        //     this.sprite.movieFlag
        //   );
        this.playerControl =
            MapData_BattleMapData.getInstance().playerSetting[this.sprite.movieFlag];
        this.costMap = this.countCostMap(mapData, sprite.typeName, this.playerControl.enemies);
        let tmp_oil = staticDataMng.unit[this.sprite.typeName]["dailyOil"];
        this.oil = this.sprite.oil < tmp_oil ? this.sprite.oil : tmp_oil;
        this.moveArea = this.countMoveArea();
        this.atkArea = this.countAtkArea(sprite.posId);
    }
    countMoveArea() {
        let tmp = super.countMoveArea(this.costMap, this.sprite.posId, this.oil);
        this.moveArea = tmp;
        return tmp;
    }
    countAtkArea(posId) {
        let minDistance = staticDataMng.unit[this.sprite.typeName]["atkMinDistance"];
        let maxDistance = staticDataMng.unit[this.sprite.typeName]["atkMaxDistance"];
        let tmp = super.countAtkArea(posId, minDistance, maxDistance);
        let unitLayer = this.mapData.unitLayer;
        let enemies = this.playerControl.enemies;
        let unitTable = staticDataMng.gf[this.sprite.typeName];
        for (let i in tmp) {
            if (unitLayer[i] &&
                enemies.indexOf(unitLayer[i].flag) !== -1 &&
                unitTable[unitLayer[i].type] !== 0) {
                tmp[i] = true;
            }
        }
        return tmp;
    }
    /**
     * 先确保可以transport
     * @returns
     */
    countSupply() {
        let enemies = this.playerControl.enemies;
        let dwName;
        let geoName;
        if (this.sprite.typeName === "transport") {
            dwName = "transport";
            geoName = "factory";
        }
        else {
            dwName = "transportship";
            geoName = "shipyard";
        }
        let e1 = [];
        let e2 = [];
        let buildLayer;
        let unitLayer;
        for (let i in buildLayer) {
            if (buildLayer[i].type === geoName &&
                enemies.indexOf(buildLayer[i].flag) === -1) {
                e1.push(parseInt(i));
            }
        }
        for (let i in unitLayer) {
            if (unitLayer[i].type === dwName &&
                !unitLayer[i].moved &&
                enemies.indexOf(unitLayer[i].flag)) {
                e2.push(parseInt(i));
            }
        }
        if (e1.length === 0 || e1.length === 0) {
            this.supplyNet = [];
            return this.supplyNet;
        }
        let tmp_data_1 = {};
        for (let i = 0; i < e2.length; ++i) {
            let costMap = super.countCostMap(this.mapData, dwName, enemies);
            let tmp_oil = staticDataMng.unit[unitLayer[e2[i]].type]["dailyOil"];
            let rlt_oil = unitLayer[e2[i]].oil < tmp_oil ? unitLayer[e2[i]].oil : tmp_oil;
            let moveArea = super.countMoveArea(costMap, e2[i], rlt_oil);
            for (let i in moveArea) {
                moveArea[i] = rlt_oil - moveArea[i];
            }
            tmp_data_1[i] = { dws: [], geos: [] };
            for (let j = 0; j < e2.length; ++j) {
                if (j === i) {
                    continue;
                }
                if (moveArea[e2[j]] !== undefined) {
                    tmp_data_1[i].dws[j] = moveArea[e2[j]];
                }
            }
            for (let j = 0; j < e1.length; ++i) {
                if (j === i) {
                    continue;
                }
                if (moveArea[e1[j]] !== undefined) {
                    tmp_data_1[j].geos[j] = moveArea[e1[j]];
                }
            }
        }
        // bfs
        let roads = [];
        let queue = [[this.sprite.posId, 0]];
        while (queue.length) {
            let now_road = queue.splice(0, 1)[0];
            let now_oil = now_road.pop();
            let now_posId = now_road[0];
            let geos = tmp_data_1[now_posId].geos;
            let dws = tmp_data_1[now_posId].dws;
            let geos_keys = Object.keys(geos).map((item) => parseInt(item));
            if (geos_keys.length === 0) {
                for (let i in dws) {
                    if (now_road.indexOf[parseInt(i)] !== -1) {
                        queue.push([parseInt(i), ...now_road, now_oil + dws[i]]);
                    }
                }
            }
            else {
                let tmp_target_1 = Math.min(...geos_keys);
                roads.push([tmp_target_1, ...now_road, now_oil + geos[tmp_target_1]]);
                break;
            }
        }
        if (roads.length === 0) {
            this.supplyNet = [];
            return this.supplyNet;
        }
        // 随机选择哦，so
        let [min_index, min_oil] = [0, roads[0][roads[0].length - 1]];
        for (let i = 1; i < roads.length; ++i) {
            let new_min_oil = roads[i][roads[i].length - 1];
            if (min_oil > new_min_oil) {
                min_index = i;
                min_index = new_min_oil;
            }
        }
        this.supplyNet = roads[min_index];
        return roads[min_index];
    }
    /**
     * 暂时作废
     * @param childrenId
     * @returns
     */
    countUnloadArea(childrenId) {
        let loadings = this.sprite.loadings;
        let enemies = this.playerControl.enemies;
        let posId = this.sprite.posId;
        let costMap = super.countCostMap(this.mapData, loadings[childrenId].type, enemies);
        let moveArea = super.countMoveArea(costMap, posId, loadings[childrenId].oil);
        this.moveArea = moveArea;
        return this.moveArea;
        // let rlt: Record<number, number>[] = [];
        // for (let i = 0; i < loadings.length; ++i) {
        //     let costMap = super.countCostMap(this.mapData, loadings[i].type, enemies);
        //     let moveArea = super.countMoveArea(costMap, posId, loadings[i].oil);
        //     rlt.push(moveArea);
        // }
    }
    /**
     *
     * @param targetId 该区域最多只有己方 可搭载单位
     * @returns
     */
    countRightMenu(targetId) {
        let unitLayer = this.mapData.unitLayer;
        let buildLayer = this.mapData.buildLayer;
        let unitTable = staticDataMng.unit[this.sprite.typeName];
        let rlt_menu = [];
        let enemies = this.playerControl.enemies;
        let tmp_sprite = this.sprite;
        // 原地: unload, supply
        if (targetId === this.sprite.posId) {
            let loadings = this.sprite.loadings;
            if (loadings.length !== 0) {
                let canUnload = false;
                for (let i = 0; i < loadings.length; i++) {
                    if (!loadings[i].moved) {
                        canUnload = true;
                        break;
                    }
                }
                if (canUnload) {
                    rlt_menu.push("unload");
                    if (tmp_sprite.moved) {
                        return rlt_menu;
                    }
                }
            }
            if (unitTable["canSupply"] && this.countSupply().length !== 0) {
                rlt_menu.push("supply");
            }
        }
        else {
            // 可搭载
            if (unitLayer[targetId] !== undefined) {
                rlt_menu.push("load");
                this.rightMenu = rlt_menu;
                return rlt_menu;
            }
        }
        // wait, load, occupy, diving, supply, atk,
        rlt_menu.push("wait");
        // diving
        if (unitTable["canDiving"]) {
            rlt_menu.push("dive");
            // if (tmp_sprite.isDiving) {
            //   rlt_menu.push("show up");
            // } else {
            //   rlt_menu.push("stealth");
            // }
        }
        // occupy
        if (unitTable["canOccupy"] &&
            buildLayer[targetId] !== undefined &&
            enemies.indexOf(buildLayer[targetId].flag) !== -1) {
            rlt_menu.push("occupy");
        }
        // atk
        if (unitTable["atkMaxDistance"] !== 0 &&
            (unitTable["atkAfterMove"] || tmp_sprite.posId === targetId)) {
            if (tmp_sprite.posId === targetId) {
                this.atkTargets = this.atkArea;
            }
            else {
                let new_atkArea = this.countAtkArea(targetId);
                this.atkTargets = new_atkArea;
                // console.log('atk Area', new_atkArea);
            }
            let canAtk = false;
            for (let i in this.atkTargets) {
                if (this.atkTargets[i]) {
                    canAtk = true;
                    break;
                }
            }
            if (canAtk) {
                rlt_menu.push("attack");
            }
        }
        // 这是第二个出口哦
        this.rightMenu = rlt_menu;
        return rlt_menu;
    }
    countNearestTarget() {
        /** version 1 */
        let enemies = this.playerControl.enemies;
        let gfTable = staticDataMng.gf[this.sprite.typeName];
        let unit_keys = Object.keys(this.mapData.unitLayer)
            .filter(item => enemies.indexOf(this.mapData.unitLayer[parseInt(item)].flag) !== -1
            && gfTable[this.mapData.unitLayer[parseInt(item)].type] !== 0);
        let now_targetId = -1;
        let distance = Number.MAX_VALUE;
        let [x, y] = [this.sprite.posId % MapData_MathManBase.mapWidth, Math.floor(this.sprite.posId / MapData_MathManBase.mapWidth)];
        for (let i of unit_keys) {
            let posId = parseInt(i);
            let [x_, y_] = [posId % MapData_MathManBase.mapWidth, Math.floor(posId / MapData_MathManBase.mapWidth)];
            if (distance > Math.abs(x_ - x) + Math.abs(y - y_)) {
                now_targetId = posId;
                distance = Math.abs(x_ - x) + Math.abs(y - y_);
            }
        }
        console.log('target', now_targetId);
        return now_targetId;
        /** version 2 */
        // return super.countNearestTarget(
        //   this.sprite.posId,
        //   this.costMap,
        //   this.sprite.typeName,
        //   this.playerControl.enemies,
        //   this.mapData.unitLayer
        // );
        /** version 3 */
        // let moveArea = super.countMoveArea(this.costMap, this.sprite.posId, 12);
        // let gfTable = staticDataMng.gf[this.sprite.typeName];
        // console.log(moveArea)
        // for(let i in moveArea){
        //   let targetId = parseInt(i);
        //   if(this.mapData.unitLayer[targetId] !== undefined &&
        //     this.playerControl.enemies.indexOf(this.mapData.unitLayer[targetId].flag) !== -1 &&
        //     gfTable[this.mapData.unitLayer[targetId].type] !== 0){
        //       return targetId;
        //     }
        // }
        // return -1;
    }
    countAStar(targetId) {
        /*** don't delete */
        // let costMap = super.countCostMap(this.mapData, this.sprite.typeName as typeof BattleUnitTypes[number], []);
        let roads = super.countAStar(targetId, this.sprite.posId, this.costMap);
        let new_roads = roads.splice(0, 1);
        for (let i of roads) {
            if (this.moveArea[i] !== undefined && (this.mapData.unitLayer[i] === undefined)) {
                new_roads.push(i);
            }
            else {
                break;
            }
        }
        return new_roads;
    }
    countAStar2(targetId) {
        return super.countAStar(targetId, this.sprite.posId, this.costMap);
    }
    set targetId(v) {
        this._targetId = v;
        let tmp;
        if (v === this.sprite.posId) {
            tmp = [[this.oil, v]];
        }
        else {
            tmp = super.countRoads(this.costMap, this.moveArea, this.sprite.posId, v, this.oil);
        }
        this.rightMenu = this.countRightMenu(v);
        this.roads = tmp;
    }
    get targetId() {
        return this._targetId;
    }
    set childrenId(v) {
        this._childrenId = v;
        let unitProps = this.sprite.loadings[v];
        let enemies = this.playerControl.enemies;
        let costMap = super.countCostMap(this.mapData, unitProps.type, enemies);
        let static_oil = staticDataMng.unit[unitProps.type]["dailyOil"];
        let moveArea = super.countMoveArea(costMap, this.sprite.posId, unitProps.oil < static_oil ? unitProps.oil : static_oil);
        this.unLoadArea = moveArea;
    }
    get childrenId() {
        return this._childrenId;
    }
    set childrenRoadTarget(v) {
        this._childrenRoadTarget = v;
        let unitProps = this.sprite.loadings[this._childrenId];
        let enemies = this.playerControl.enemies;
        let costMap = super.countCostMap(this.mapData, unitProps.type, enemies);
        let static_oil = staticDataMng.unit[unitProps.type]["dailyOil"];
        let roads = super.countRoads(costMap, this.unLoadArea, this.sprite.posId, v, unitProps.oil < static_oil ? unitProps.oil : static_oil);
        this.childrenRoads = roads;
        this.childrenRoadsPoint = 0;
    }
    get childrenRoadTarget() {
        return this._childrenRoadTarget;
    }
    /*******************************static method */
    /**
     *
     * @param sprite
     * @param typeName
     * @returns
     */
    static canLoadIt(sprite, typeName) {
        let loading_key = staticDataMng.unit[sprite.typeName]["canLoading"];
        if (sprite.loadings.length >= parseInt(loading_key[0])) {
            return false;
        }
        let engine = staticDataMng.unit[typeName]["engine"];
        if (loading_key.indexOf(typeName) === -1 &&
            loading_key.indexOf(engine) === -1) {
            console.log("hiere", typeName, engine);
            return false;
        }
        return true;
    }
}
window["MathManUnit"] = MapUI_MathManUnit;
__reflect(MapUI_MathManUnit.prototype,"MathManUnit",[]); 

// CONCATENATED MODULE: ./src/Battle/AI.ts
/******************************************************* */
/******************** version 2 ************************ */
/******************************************************* */





class AI_BattleTree extends egret.EventDispatcher {
    constructor(battle, playerControl) {
        super();
        this.battle = battle;
        this.playerControl = playerControl;
        // battle.mapView.collectMap();
        let mapData = MapData_BattleMapData.getInstance().toJson();
        let unitLayer = mapData.unitLayer;
        // let geoLayer = mapData.geoLayer;
        let buildLayer = mapData.buildLayer;
        this.units = Object.keys(unitLayer)
            .map(item => parseInt(item))
            .filter(item => (unitLayer[item].flag === playerControl.flag && !unitLayer[item].moved));
        this.buildings = Object.keys(buildLayer)
            .map(item => parseInt(item))
            .filter(item => (buildLayer[item].flag === playerControl.flag && unitLayer[item] === undefined
            && staticDataMng.buildTable[buildLayer[item].type] !== undefined));
        console.log(this.units, this.buildings);
    }
    /**
     * 需即时更新mapData
     * @returns
     */
    moveUnit() {
        let [width, height] = [MapData_MathManBase.mapWidth, MapData_MathManBase.mapHeight];
        let mapData = MapData_BattleMapData.getInstance().toJson();
        while (true) {
            if (!this.units.length) {
                return;
            }
            let now_posId = this.units.pop();
            let mathmanUnit = new MapUI_MathManUnit(this.battle.mapView.unitCache[now_posId], mapData);
            let atkArea = mathmanUnit.atkArea;
            let unitCache = this.battle.mapView.unitCache;
            let geoLayer = mapData.geoLayer;
            // console.log('callback time:', (new Date).getTime(), "posId:"+now_posId)
            // console.log('atkarea', atkArea)
            if (staticDataMng.unit[mathmanUnit.sprite.typeName]['atkMaxDistance'] > 1) {
                // far atk 
                for (let i in atkArea) {
                    let i2 = parseInt(i);
                    if (atkArea[i2]) {
                        LocalServer_GameServer.getInstance().send({
                            data: Object.assign(Object.assign({}, staticDataMng.countAtkResult(mathmanUnit.sprite.collectionData(), unitCache[i2].collectionData(), BattleGeoTypes[geoLayer[mathmanUnit.sprite.posId]], BattleGeoTypes[geoLayer[i2]])), { type: BActionType.attack, road: [mathmanUnit.sprite.posId], restOil: mathmanUnit.sprite.oil - mathmanUnit.oil, targetId: parseInt(i) }),
                            type: MessageType.action,
                            flag: this.playerControl.flag
                        });
                        return true;
                    }
                }
                continue;
            }
            let target = mathmanUnit.countNearestTarget();
            if (target === -1 || target === undefined) {
                continue;
            }
            let directions = [0, 1, 0, -1, 1, 0, -1, 0];
            let [prim_x, prim_y] = [target % width, Math.floor(target / width)];
            for (let i = 0; i < 8; i += 2) {
                let [x_, y_] = [prim_x + directions[i], prim_y + directions[i + 1]];
                let new_posId = x_ + y_ * width;
                if (x_ < 0 || y_ < 0 || x_ >= width || y_ >= height) {
                    continue;
                }
                if (mapData[new_posId] !== undefined) {
                    continue;
                }
                console.log('ta', target, new_posId, mathmanUnit.moveArea);
                if (mathmanUnit.moveArea[new_posId] !== undefined) {
                    console.log('ffff');
                    LocalServer_GameServer.getInstance().send({
                        data: Object.assign(Object.assign({}, staticDataMng.countAtkResult(mathmanUnit.sprite.collectionData(), mapData.unitLayer[target], //  unitCache[target].collectionData(),
                        BattleGeoTypes[geoLayer[mathmanUnit.sprite.posId]], BattleGeoTypes[geoLayer[target]])), { type: BActionType.attack, road: mathmanUnit.countAStar2(new_posId), restOil: mathmanUnit.sprite.oil - mathmanUnit.oil, targetId: target }),
                        type: MessageType.action,
                        flag: this.playerControl.flag
                    });
                    return true;
                }
                else {
                    let road = mathmanUnit.countAStar(new_posId);
                    LocalServer_GameServer.getInstance().send({
                        data: {
                            type: BActionType.wait,
                            road: road,
                            restOil: mathmanUnit.sprite.oil - mathmanUnit.oil,
                            encountered: false
                        },
                        type: MessageType.action,
                        flag: this.playerControl.flag
                    });
                    return true;
                    // let road = mathmanUnit.countAStar(new_posId);
                    // if (road[road.length - 1] === new_posId) {
                    //     GameServer.getInstance().send({
                    //         data: {
                    //             ...staticDataMng.countAtkResult(
                    //                 mathmanUnit.sprite.collectionData(),
                    //                 mapData.unitLayer[target],//  unitCache[target].collectionData(),
                    //                 BattleGeoTypes[geoLayer[mathmanUnit.sprite.posId]],
                    //                 BattleGeoTypes[geoLayer[target]]
                    //             ),
                    //             type: BActionType.attack,
                    //             road: road,
                    //             restOil: mathmanUnit.sprite.oil - mathmanUnit.oil,
                    //             targetId: target,
                    //         },
                    //         type: MessageType.action,
                    //         flag: this.playerControl.flag
                    //     })
                    //     return true
                    // } else {
                    //     GameServer.getInstance().send({
                    //         data: {
                    //             type: BActionType.wait,
                    //             road: road,
                    //             restOil: mathmanUnit.sprite.oil - mathmanUnit.oil,
                    //             encountered: false
                    //         },
                    //         type: MessageType.action,
                    //         flag: this.playerControl.flag
                    //     })
                    //     return true
                    // }
                    // if (
                    //     // mathmanUnit.atkArea[new_posId] !== undefined && 
                    //     mapData[new_posId] === undefined) {
                    //     GameServer.getInstance().send({
                    //         data: {
                    //             ...staticDataMng.countAtkResult(
                    //                 mathmanUnit.sprite.collectionData(),
                    //                 mapData.unitLayer[target],//  unitCache[target].collectionData(),
                    //                 BattleGeoTypes[geoLayer[mathmanUnit.sprite.posId]],
                    //                 BattleGeoTypes[geoLayer[target]]
                    //             ),
                    //             type: BActionType.attack,
                    //             road: mathmanUnit.countAStar(new_posId),
                    //             restOil: mathmanUnit.sprite.oil - mathmanUnit.oil,
                    //             targetId: target,
                    //         },
                    //         type: MessageType.action,
                    //         flag: this.playerControl.flag
                    //     })
                    //     return true;
                }
            }
        }
    }
    /**
     *
     */
    produceUnit() {
        let buildCache = this.battle.mapView.buildCache;
        let mapData = MapData_BattleMapData.getInstance();
        for (let i of this.buildings) {
            let buildTable = staticDataMng.buildTable[buildCache[i].typeName];
            let buildList = [];
            for (let i of buildTable) {
                buildList.push({ name: i, money: staticDataMng.unit[i]['costMoney'] });
            }
            buildList.sort((a, b) => a.money < b.money ? 1 : -1);
            if (buildList[0].money > this.playerControl.nowMoney) {
                continue;
            }
            do {
                let build_choose = Math.floor(Math.random() * buildList.length);
                if (buildList[build_choose].money > this.playerControl.nowMoney) {
                    continue;
                }
                if (buildList[build_choose].name.includes('transport')) {
                    continue;
                }
                /****************** build ******************* */
                LocalServer_GameServer.getInstance().send({
                    data: {
                        type: BActionType.buy,
                        posId: i,
                        unit: MapData_DataMaker.makeUnitProps(buildList[build_choose].name, this.playerControl.flag)
                    },
                    type: MessageType.action,
                    flag: this.playerControl.flag
                });
                return true;
                break;
            } while (true);
        }
    }
    nextAction() {
        let rlt;
        if (this.buildings.length !== 0) {
            // console.log('111')
            rlt = this.produceUnit();
        }
        if (rlt !== true && this.units.length !== 0) {
            // console.log('12221')
            rlt = this.moveUnit();
        }
        // console.log(rlt, '8sd')
        if (rlt !== true) {
            // console.log("end")
            LocalServer_GameServer.getInstance().send({
                data: {
                    type: BActionType.boutEnd,
                    nowFlag: this.playerControl.flag
                },
                type: MessageType.action,
                flag: this.playerControl.flag
            });
        }
        // else {
        // let evt = new BattleEvent();
        // evt._data = {
        //     type: BEOthersType.boutEnd
        // }
        // this.dispatchEvent(evt);
        // }
    }
}
window["BattleTree"] = AI_BattleTree;
__reflect(AI_BattleTree.prototype,"BattleTree",[]); 

// CONCATENATED MODULE: ./src/Battle/LocalServer.ts






/**
 * 自行添加(once)
 * status: wait user, wait
 */
class LocalServer_GameServer extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.isNowReconnect = false;
        this.serverState = "send";
        this.isGameOver = false;
        this.isRunning = false;
        this.webSocket = new egret.WebSocket();
        this.msgQ = [];
        this.boutEndTimer = new egret.Timer(5000);
        this.boutEndTimer.addEventListener(egret.TimerEvent.TIMER, this.handleBoutEndTimer, this);
        this.provideAiTimer = new egret.Timer(3000);
        this.provideAiTimer.addEventListener(egret.TimerEvent.TIMER, this.handleProvideAiTimer, this);
        // this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        // this.webSocket.connect("127.0.0.1", 8000);
        // console.log('begin connect')
    }
    connect(room_id) {
        // this.webSocket.close()
        if (!this.webSocket.connected) {
            console.log("flsd7089");
            this.roomId = room_id;
            this.webSocket.connectByUrl(config["default"].wsUrl + room_id + "/");
        }
    }
    installListener() {
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onConnected, this);
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.webSocket.addEventListener(egret.Event.CLOSE, this.onDisConnected, this);
    }
    isNowMyBout() {
        return this.nowBoutFlag === this.myFlag;
    }
    /**
     *
     * 创建battleUI之后，初始化battleUI之前
     * @param flag
     */
    setMyRoleInfo(flag) {
        console.log(flag);
        this.myFlag = flag;
        if (flag === null || flag === undefined) {
            this.serverState = "visitor";
        }
        else {
            let users = this.playerInfo.filter(item => !item.isComputer);
            if (users.length !== 1) {
                this.boutEndTimer.start();
            }
        }
    }
    disconnect() {
        this.webSocket.close();
        // this.boutEndTimer.stop();
    }
    static getInstance() {
        if (!LocalServer_GameServer.instance) {
            LocalServer_GameServer.instance = new LocalServer_GameServer();
        }
        return LocalServer_GameServer.instance;
    }
    // public boutEnd(){}
    // /**
    //  *  getRoomId
    //  */
    // public getRoomId() {
    //     this.webSocket.writeUTF(JSON.stringify({
    //         type: 'get_room_id'
    //     }));
    // }
    /**
     * sendChatMsg
     */
    // public sendChatMsg(info: BEChatMsg) {
    //     this.webSocket.writeUTF(JSON.stringify(info));
    // }
    // private onSocketOpen() {
    //     var cmd = {data: "Hello Egret WebSocket"};
    //     console.log("连接成功，发送数据：" + cmd);
    //     this.webSocket.writeUTF(JSON.stringify(cmd));
    // }
    onReceiveMessage(e) {
        let msg;
        try {
            msg = JSON.parse(this.webSocket.readUTF());
        }
        catch (error) {
            console.log("error", msg, error);
            return;
        }
        // msg = msg["message"];
        console.log("rev msg", msg);
        switch (msg.type) {
            case MessageType.Oresult:
                window.location.href = config["default"].recordUrl + "?id=" + msg.recordId;
                break;
            case MessageType.Orole:
                this.battle.mapView.actionQ = [];
                MapData_BattleMapData.getInstance().initMap(msg.map);
                this.battle.mapView.updateByMapData("init");
                break;
            case MessageType.chat:
                this.battle.handleChatServer(msg.data);
                break;
            case MessageType.action:
                this.battle.mapView.actionQ.push({
                    action: msg["data"],
                    flag: msg["flag"],
                });
                // switch (msg.data.type===BActionType.boutEnd) {
                //   case value:
                //     break;
                //   default:
                //     break;
                // }
                // console.log([...this.battle.mapView.actionQ])
                console.log('call');
                this.battle.mapView.handleAction();
                break;
            case "provideAI":
                new AI_BattleTree(this.battle, MapData_BattleMapData.getInstance().playerSetting[msg.flag]).nextAction();
                break;
            case "result":
                window.history.back();
                this.isGameOver = true;
                break;
            default:
                break;
        }
    }
    onConnected(e) {
        if (this.isNowReconnect) {
            this.send({
                type: MessageType.IgetRole,
                token: Object(cookie["getCookie"])("token")
            });
        }
    }
    onDisConnected(e) {
        // console.log("disconnected");
        if (this.isGameOver) {
            return;
        }
        this.isNowReconnect = true;
        let that = this;
        setTimeout(() => {
            that.connect(that.roomId);
        }, 3000);
    }
    send(data) {
        console.log(this.serverState, "server", data);
        if (this.serverState === "visitor") {
            return;
        }
        if (this.serverState === "rev" && data["type"] !== "chat") {
            return;
        }
        console.log(this.serverState, "server", data);
        this.webSocket.writeUTF(JSON.stringify(data));
    }
    handleBoutEndTimer() {
        return;
        if (this.isNowMyBout()) {
            return;
        }
        let message = {
            type: MessageType.action,
            data: { type: BActionType.boutEnd, nowFlag: this.nowBoutFlag },
            flag: this.nowBoutFlag
        };
        this.send(message);
    }
    startProvideAiTimer() {
        if (this.provideAiTimer.running) {
            this.provideAiTimer.stop();
        }
        this.provideAiTimer.start();
    }
    stopProvideAiTimer() {
        this.provideAiTimer.stop();
    }
    handleProvideAiTimer() {
        new AI_BattleTree(this.battle, MapData_BattleMapData.getInstance().playerSetting[this.nowBoutFlag]).nextAction();
    }
}
window["GameServer"] = LocalServer_GameServer;
__reflect(LocalServer_GameServer.prototype,"GameServer",[]); 

// CONCATENATED MODULE: ./src/Battle/EditorUI.ts






const EDIT_CMD_TAG_ID_FROM_VUE = "EDIT_CMD_TAG_ID_FROM_VUE";
window["EDIT_CMD_TAG_ID_FROM_VUE"] = EDIT_CMD_TAG_ID_FROM_VUE;
class EditorUI_EditUI extends eui.UILayer {
    constructor() {
        super();
        this.editTarget = {
            state: "click",
            type: "geo",
            name: BattleGeoTypes[0],
            flag: "red"
        };
        this.initUI();
        this.urlloader = new egret.URLLoader();
    }
    initUI() {
        this.mapView = new MapUI_BattleMapView();
        this.mapContianer = new egret.ScrollView(this.mapView);
        this.mapContianer.bounces = true;
        this.mapContianer.width = egret.MainContext.instance.stage.stageWidth;
        this.mapContianer.height = egret.MainContext.instance.stage.stageHeight;
        this.mapView.addEventListener(BattleEvent.DATE, this.handleEleClicked, this);
        this.addChild(this.mapContianer);
        /***********************************
         *
         * interaction
         *
         **********************************/
        this.interaction = new eui.UILayer();
        this.addChild(this.interaction);
        this.interaction.touchThrough = true;
        this.addChild(this.interaction);
        this.returnButton = new eui.Image();
        this.returnButton.source = RES.getRes("battle_ui_return_png");
        this.returnButton.right = 10;
        this.returnButton.bottom = 10;
        this.returnButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showInteractionView.bind(this, "return"), this);
        this.panelButton = new eui.Image();
        this.panelButton.source = RES.getRes("battle_ui_info_png");
        this.panelButton.right = 300;
        this.panelButton.bottom = 10;
        this.panelButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showInteractionView.bind(this, "panel"), this);
        this.settingButton = new eui.Image();
        this.settingButton.source = RES.getRes("battle_ui_set_png");
        this.settingButton.right = 600;
        this.settingButton.bottom = 10;
        this.settingButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showInteractionView.bind(this, "setting"), this);
        this.editPanel = new EditorUI_EditPanel();
        this.editPanel.addEventListener(EditEvent.DATE, this.handleEditPanelEvent, this);
        this.editMapSetting = new EditorUI_EditMapSetting();
        this.editMapSetting.addEventListener(EditEvent.DATE, this.handleMapSettingEvent, this);
    }
    childrenCreated() {
        super.childrenCreated();
        this.interaction.addChild(this.editPanel);
        this.interaction.addChild(this.editMapSetting);
        this.showInteractionView("return");
    }
    initCoverArea() {
        let posIds = Object.keys(MapData_BattleMapData.getInstance().geoLayer).map((item) => parseInt(item));
        this.mapView.showCoverArea(posIds, "editCover", true);
    }
    handleEleClicked(event) {
        let mapData = MapData_BattleMapData.getInstance();
        let data = event._data;
        let sprite = data.sprite;
        let posId = sprite.posId;
        // switch (this.editCom.type) {
        //   case "geo":
        //     this.mapView.updateGeoBlock(this.editCom.name, posId);
        //     break;
        //   case "build":
        //     if (this.editCom.name === 'delete') {
        //       delete mapData.buildLayer[posId];
        //     } else {
        //       mapData.buildLayer[posId] = {
        //         flag: this.editCom.flag as string,
        //         type: this.editCom.name,
        //         posId,
        //       };
        //     }
        //     this.mapView.updateByMapData("build");
        //     break;
        //   case "unit":
        //     if (this.editCom.name === "delete") {
        //       delete mapData.unitLayer[posId];
        //     }
        //     else {
        //       mapData.unitLayer[posId] = DataMaker.makeUnitProps(this.editCom.name, this.editCom.flag)
        //     }
        //     this.mapView.updateByMapData("unit");
        //     break;
        //   case "fill":
        //     mapData.unitLayer = {}
        //     mapData.buildLayer = {}
        //     // @ts-ignore
        //     let geo_index = BattleGeoTypes.indexOf(this.editCom.name)
        //     mapData.geoLayer = mapData.geoLayer.map(item => geo_index);
        //     this.mapView.updateByMapData("init")
        //     break;
        //   default:
        //     break;
        // }
        // console.log("clicked data: ", data);
        console.log(this.editTarget, 'target');
        switch (this.editTarget.state) {
            case "destory":
                switch (this.editTarget.type) {
                    case "build":
                        delete mapData.buildLayer[posId];
                        this.mapView.updateByMapData("build");
                        break;
                    case "unit":
                        delete mapData.unitLayer[posId];
                        this.mapView.updateByMapData("unit");
                        break;
                    case "geo":
                        // mapData.geoLayer[posId] = BattleGeoTypes.indexOf("plain")
                        mapData.geoLayer[posId] = BattleGeoTypes.indexOf("plain");
                        this.mapView.updateGeoBlock("plain", posId);
                        break;
                    default:
                        break;
                }
                break;
            case "fill":
                switch (this.editTarget.type) {
                    case "geo":
                        mapData.unitLayer = {};
                        mapData.buildLayer = {};
                        // @ts-ignore
                        let geo_index = BattleGeoTypes.indexOf(this.editTarget.name);
                        mapData.geoLayer = mapData.geoLayer.map(item => geo_index);
                        this.mapView.updateByMapData("init");
                        break;
                    default:
                        break;
                }
                break;
            case "click":
            case "choose":
                switch (this.editTarget.type) {
                    case "geo":
                        // @ts-ignore
                        mapData.geoLayer[posId] = BattleGeoTypes.indexOf(this.editTarget.name);
                        this.mapView.updateGeoBlock(this.editTarget.name, posId);
                        break;
                    case "build":
                        mapData.buildLayer[posId] = {
                            flag: this.editTarget.flag,
                            type: this.editTarget.name,
                            posId,
                        };
                        // mapData.geoLayer[posId] = BattleGeoTypes.indexOf("plain");
                        mapData.geoLayer[posId] = BattleGeoTypes.indexOf("plain");
                        this.mapView.updateGeoBlock("plain", posId);
                        this.mapView.updateByMapData("both");
                        break;
                    case "unit":
                        mapData.unitLayer[posId] = MapData_DataMaker.makeUnitProps(this.editTarget.name, this.editTarget.flag);
                        console.log(Object.assign({}, mapData.unitLayer[posId]));
                        this.mapView.updateByMapData("unit");
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        // for(let i in mapData.unitLayer){
        //   let tmp_data = mapData.unitLayer[i];
        //   tmp_data.oil = staticDataMng.unit[tmp_data.type][''] as number
        // }
    }
    showInteractionView(type) {
        let interaction = this.interaction;
        interaction.removeChildren();
        switch (type) {
            case "panel":
                interaction.addChild(this.editPanel);
                interaction.addChild(this.returnButton);
                break;
            case "setting":
                interaction.addChild(this.editMapSetting);
                interaction.addChild(this.returnButton);
                break;
            case "return":
                interaction.addChild(this.panelButton);
                interaction.addChild(this.settingButton);
                break;
            default:
                break;
        }
    }
    handleEditPanelEvent(event) {
        MapData_BattleMapData.getInstance().toJson();
        console.log(event.data);
        switch (event.data.state) {
            case "save":
                this.handleMapSave();
                break;
            case "state":
                this.editTarget.state = event.data.value;
                break;
            case "choose":
                let tmp_strs = event.data.value.split("-");
                this.editTarget.type = tmp_strs[0];
                this.editTarget.name = tmp_strs[1];
                this.editTarget.flag = tmp_strs[2];
                break;
            default:
                break;
        }
    }
    handleMapSettingEvent(event) {
        // {
        //   globalSetting: {
        //     cities: parseInt(this.labelCity.text),
        //     bouts: parseInt(this.labelBout.text),
        //     dailyMoney: parseInt(this.labelMoney.text),
        //     fogOpen: this.buttonFog.label.includes("open"),
        //     weather: this.buttonWeather.label,
        //     aiLvl: this.buttonAI.label
        //   },
        //   usersSetting: {
        //     red: this.buttonComputerRed.label,
        //     blue: this.buttonComputerBlue.label,
        //     green: this.buttonComputerGreen.label,
        //     yellow: this.buttonComputerYellow.label,
        //   }
        // }
        let mapData = MapData_BattleMapData.getInstance();
        mapData.globalSetting = event.data.value.globalSetting;
        console.log(event.data);
    }
    handleMapSave() {
        var urlreq = new egret.URLRequest();
        urlreq.method = egret.URLRequestMethod.POST;
        urlreq.url = config["default"].postUrl + 'subMapValue';
        let mapData = MapData_BattleMapData.getInstance();
        let exitedFlags = new Set([]);
        for (let i in mapData.buildLayer) {
            let tmp_data = mapData.buildLayer[i];
            exitedFlags.add(tmp_data.flag);
        }
        for (let i in mapData.unitLayer) {
            let tmp_data = mapData.unitLayer[i];
            exitedFlags.add(tmp_data.flag);
        }
        mapData.playerSetting = {};
        for (let i of exitedFlags) {
            mapData.playerSetting[i] = MapData_DataMaker.makePlaySetting(i);
        }
        urlreq.data = new egret.URLVariables("token=" + Object(cookie["getCookie"])("token") +
            "&value=" + JSON.stringify(mapData.toJson(), null, '\t') +
            "&mapId=" + this.mapId);
        urlreq.requestHeaders.push(new egret.URLRequestHeader("Content-Type", "application/x-www-form-urlencoded"));
        // this.urlloader.once(egret.IOErrorEvent.IO_ERROR, this.onGetMapValueComplete, this)
        // this.urlloader.once(egret.HTTPStatusEvent.COMPLETE, this.onGetMapValueComplete, this);
        // this.urlloader.once(egret.Event.ENDED, this.onGetMapValueComplete, this);
        this.urlloader.load(urlreq);
    }
}
window["EditUI"] = EditorUI_EditUI;
__reflect(EditorUI_EditUI.prototype,"EditUI",[]); 
/**
 * {state: "save"|"state"|"choose", value}
 */
class EditEvent extends egret.Event {
    constructor(type = EditEvent.DATE, bubbles = false, cancelable = false) {
        super(type, bubbles, cancelable);
    }
}
EditEvent.DATE = "EditEvent";
window["EditEvent"] = EditEvent;
__reflect(EditEvent.prototype,"EditEvent",[]); 
class EditorUI_EditPanel extends eui.Component {
    constructor() {
        super();
        this.nowState = EditorUI_EditPanel.MY_STATES[0];
        this.menuContainer = new eui.Group();
        this.valueContainer = new eui.Group();
        this.saveButton = new eui.Button();
        this.stateButton = new eui.Button();
    }
    childrenCreated() {
        super.childrenCreated();
        this.y = 50;
        this.x = 100;
        let vlayout = new eui.VerticalLayout();
        this.valueContainer.layout = vlayout;
        this.stateButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleStateChange, this);
        this.saveButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleSave, this);
        // this.allKeys = ['build', 'geo', 'unit'];
        for (let i of ['build', 'geo', 'unit']) {
            let tmp_obj = new eui.Label();
            tmp_obj.text = i;
            this.menuContainer.addChild(tmp_obj);
            tmp_obj.addEventListener(egret.TouchEvent.TOUCH_TAP, this.swapView.bind(this, i), this);
        }
        this.stateButton.label = "click";
        this.stateButton.label = EditorUI_EditPanel.MY_STATES[0];
        this.swapView("build");
    }
    // public set data(data: Record<string, Array<egret.ITextElement>>) {
    //   this._data = data;
    //   this.menuContainer.removeChildren();
    //   for (let i in data) {
    //     let tmp_obj = new eui.Label();
    //     tmp_obj.text = i;
    //     this.menuContainer.addChild(tmp_obj);
    //     tmp_obj.addEventListener(
    //       egret.TouchEvent.TOUCH_TAP,
    //       this.swapView.bind(this, i),
    //       this
    //     );
    //   }
    //   // console.log("before", this.textArea.textFlow);
    //   // if (Object.keys(data).length === 0) {
    //   //   this.textArea.textFlow = [];
    //   // } else {
    //   //   this.textArea.textFlow = data[Object.keys(data)[0]];
    //   // }
    //   // console.log("after", this.textArea.textFlow);
    // }
    /**
     * swapView
     */
    swapView(key, evt) {
        // console.log("click", key, this._data[key]);
        // this.textArea.textFlow = this._data[key];
        // this.textArea.text
        this.valueContainer.removeChildren();
        switch (key) {
            case "build":
                for (let i of BattleBuildTypes) {
                    for (let j of ["red", "blue", "green", "yellow", "none"]) {
                        if (i === "capital" && j === "none") {
                            continue;
                        }
                        // let group = new eui.Group()
                        // let hlayout = new eui.HorizontalLayout();
                        // hlayout.verticalAlign = egret.VerticalAlign.CONTENT_JUSTIFY;
                        // let tmp_image = new eui.Image();
                        let tmp_button = new eui.Button();
                        tmp_button.label = 'build-' + i + '-' + j;
                        tmp_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleItemClick.bind(this, tmp_button.label), this);
                        this.valueContainer.addChild(tmp_button);
                    }
                }
                break;
            case "geo":
                for (let i of BattleGeoTypes) {
                    let tmp_button = new eui.Button();
                    tmp_button.label = "geo-" + i;
                    tmp_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleItemClick.bind(this, tmp_button.label), this);
                    this.valueContainer.addChild(tmp_button);
                }
                break;
            case "unit":
                for (let i of BattleUnitTypes) {
                    for (let j of ['red', 'blue', 'green', 'yellow']) {
                        let tmp_button = new eui.Button();
                        tmp_button.label = 'unit-' + i + '-' + j;
                        tmp_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleItemClick.bind(this, tmp_button.label), this);
                        this.valueContainer.addChild(tmp_button);
                    }
                }
                break;
            default:
                break;
        }
    }
    handleSave() {
        let outer_event = new EditEvent();
        outer_event.data = { state: "save" };
        this.dispatchEvent(outer_event);
    }
    handleStateChange() {
        let outer_event = new EditEvent();
        let now_index = EditorUI_EditPanel.MY_STATES.findIndex(item => this.nowState === item);
        now_index = (now_index + 1) % EditorUI_EditPanel.MY_STATES.length;
        this.nowState = EditorUI_EditPanel.MY_STATES[now_index];
        outer_event.data = { state: "state", value: this.nowState };
        this.stateButton.label = this.nowState;
        this.dispatchEvent(outer_event);
    }
    handleItemClick(value) {
        let outer_event = new EditEvent();
        console.log('sdf', value);
        outer_event.data = { state: "choose", value };
        this.dispatchEvent(outer_event);
    }
}
EditorUI_EditPanel.MY_STATES = ["fill", "click", "destory"];
window["EditPanel"] = EditorUI_EditPanel;
__reflect(EditorUI_EditPanel.prototype,"EditPanel",["eui.UIComponent"]); 
class EditorUI_EditMapSetting extends eui.Component {
    constructor() {
        super();
        this.y = 50;
        this.x = 100;
        this.labelMoney = new eui.Label();
        this.buttonUpMoney = new eui.Button();
        this.buttonDownMoney = new eui.Button();
        this.labelCity = new eui.Label();
        this.buttonUpCity = new eui.Button();
        this.buttonDownCity = new eui.Button();
        this.labelBout = new eui.Label();
        this.buttonUpBout = new eui.Button();
        this.buttonDownBout = new eui.Button();
        this.buttonFog = new eui.Button();
        this.buttonWeather = new eui.Button();
        this.buttonAI = new eui.Button();
        this.saveButton = new eui.Button();
        //---------------
        // this.buttonHeroRed = new eui.Button();
        this.buttonComputerRed = new eui.Button();
        // this.buttonHeroBlue = new eui.Button();
        this.buttonComputerBlue = new eui.Button();
        // this.buttonHeroGreen = new eui.Button();
        this.buttonComputerGreen = new eui.Button();
        // this.buttonHeroYellow = new eui.Button();
        this.buttonComputerYellow = new eui.Button();
    }
    childrenCreated() {
        super.childrenCreated();
        this.labelBout.text = '0';
        this.labelCity.text = "0";
        this.labelMoney.text = '1000';
        this.buttonUpMoney.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleMoneyChange.bind(this, true), this);
        this.buttonDownMoney.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleMoneyChange.bind(this, false), this);
        this.buttonUpCity.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleCityChange.bind(this, true), this);
        this.buttonDownCity.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleCityChange.bind(this, false), this);
        this.buttonUpBout.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleBoutChange.bind(this, true), this);
        this.buttonDownBout.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleBoutChange.bind(this, false), this);
        this.buttonFog.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleFogChange, this);
        this.buttonWeather.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleWeatherChange, this);
        this.buttonAI.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleAIChange, this);
        this.buttonComputerRed.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleUserSetChange.bind(this, "red"), this);
        this.buttonComputerBlue.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleUserSetChange.bind(this, "blue"), this);
        this.buttonComputerGreen.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleUserSetChange.bind(this, "green"), this);
        this.buttonComputerYellow.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleUserSetChange.bind(this, "yellow"), this);
        this.saveButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleSave, this);
    }
    handleMoneyChange(isUp) {
        console.log("f89sd");
        let now_nu = parseInt(this.labelMoney.text);
        if (isUp) {
            this.labelMoney.text = (now_nu + 1000).toString();
        }
        else {
            this.labelMoney.text = (now_nu - 1000).toString();
        }
    }
    handleCityChange(isUp) {
        let now_nu = parseInt(this.labelCity.text);
        if (isUp) {
            this.labelCity.text = (now_nu + 1).toString();
        }
        else {
            this.labelCity.text = (now_nu - 1).toString();
        }
    }
    handleBoutChange(isUp) {
        let now_nu = parseInt(this.labelBout.text);
        if (isUp) {
            this.labelBout.text = (now_nu + 1).toString();
        }
        else {
            this.labelBout.text = (now_nu - 1).toString();
        }
    }
    handleFogChange() {
        if (this.buttonFog.label.includes("open")) {
            this.buttonFog.label = "fog close";
        }
        else {
            this.buttonFog.label = "fog open";
        }
    }
    handleAIChange() {
    }
    handleWeatherChange() {
        // @ts-ignore
        let now_index = BattleWeatherTypes.indexOf(this.buttonWeather.label);
        this.buttonWeather.label = BattleWeatherTypes[(now_index + 1) % BattleWeatherTypes.length];
    }
    handleUserSetChange(flag) {
        let all_states = ["computer", "user", "disable"];
        let tmp_btn;
        switch (flag) {
            case "red":
                tmp_btn = this.buttonComputerRed;
                break;
            case "blue":
                tmp_btn = this.buttonComputerBlue;
                break;
            case "green":
                tmp_btn = this.buttonComputerGreen;
                break;
            case "yellow":
                tmp_btn = this.buttonComputerYellow;
                break;
            default:
                break;
        }
        let now_index = all_states.indexOf(tmp_btn.label);
        tmp_btn.label = all_states[(now_index + 1) % all_states.length];
    }
    handleSave() {
        let data = {
            globalSetting: {
                cities: parseInt(this.labelCity.text),
                bouts: parseInt(this.labelBout.text),
                dailyMoney: parseInt(this.labelMoney.text),
                fogOpen: this.buttonFog.label.includes("open"),
                weather: this.buttonWeather.label,
                aiLvl: this.buttonAI.label
            },
            usersSetting: {
                red: this.buttonComputerRed.label,
                blue: this.buttonComputerBlue.label,
                green: this.buttonComputerGreen.label,
                yellow: this.buttonComputerYellow.label,
            }
        };
        let outer_event = new EditEvent();
        outer_event.data = {
            state: "setting",
            value: data
        };
        this.dispatchEvent(outer_event);
    }
}
window["EditMapSetting"] = EditorUI_EditMapSetting;
__reflect(EditorUI_EditMapSetting.prototype,"EditMapSetting",["eui.UIComponent"]); 

// CONCATENATED MODULE: ./src/Battle/ReviewUI.ts



class ReviewUI_ReviewUI extends BattleUI_BattleUI {
    constructor() {
        super();
    }
    setActions(actions, primMap) {
        this.nowPoint = 0;
        this.actions = actions;
        this.primMap = primMap;
    }
    initUI() {
        super.initUI();
        this.mapView = new MapUI_BattleMapView();
        this.mapContianer = new egret.ScrollView(this.mapView);
        this.mapContianer.bounces = true;
        this.mapContianer.width = egret.MainContext.instance.stage.stageWidth;
        this.mapContianer.height = egret.MainContext.instance.stage.stageHeight;
        this.addChild(this.mapContianer);
        /***********************************
         *
         * interaction
         *
         **********************************/
        this.interaction = new eui.UILayer();
        this.addChild(this.interaction);
        this.interaction.touchThrough = true;
        this.addChild(this.interaction);
        this.upButton = new eui.Image();
        this.upButton.source = RES.getRes("battle_ui_up_png");
        this.upButton.right = 10;
        this.upButton.y = 150;
        this.upButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handlePrevious, this);
        this.downButton = new eui.Image();
        this.downButton.source = RES.getRes("battle_ui_down_png");
        this.downButton.right = 10;
        this.downButton.y = 300;
        this.downButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleNext, this);
    }
    childrenCreated() {
        this.interaction.removeChildren();
        this.interaction.addChild(this.upButton);
        this.interaction.addChild(this.downButton);
    }
    handleNext() {
        if (this.mapView.isRunning) {
            return;
        }
        if (this.nowPoint >= this.actions.length) {
            return;
        }
        this.mapView.actionQ.push({
            action: this.actions[this.nowPoint].data,
            flag: this.actions[this.nowPoint++].flag
        });
        this.mapView.handleAction();
    }
    handlePrevious() {
        if (this.mapView.isRunning) {
            return;
        }
        if (this.nowPoint === 0) {
            return;
        }
        this.mapView.isRunning = true;
        let mapData = MapData_BattleMapData.getInstance();
        mapData.initMap(JSON.parse(this.primMap));
        for (let i = 0; i < this.nowPoint - 1; ++i) {
            mapData.updateByAction(this.actions[i].data, this.actions[i].flag);
        }
        this.mapView.updateByMapData("init");
        this.nowPoint--;
        this.mapView.isRunning = false;
    }
}
window["ReviewUI"] = ReviewUI_ReviewUI;
__reflect(ReviewUI_ReviewUI.prototype,"ReviewUI",[]); 

// CONCATENATED MODULE: ./src/Director.ts









class Director {
    constructor(mainUI) {
        this.mainUI = mainUI;
        this.urlloader = new egret.URLLoader();
        this.urlloader.dataFormat = egret.URLLoaderDataFormat.TEXT;
    }
    static getInstance(mainUI) {
        if (!!!Director.instance) {
            if (mainUI === undefined) {
                throw new Error("没有 mainUI");
            }
            Director.instance = new this(mainUI);
        }
        return Director.instance;
    }
}
window["Director"] = Director;
__reflect(Director.prototype,"Director",[]); 
class Director_Editor extends Director {
    init(mapId) {
        this.mapId = mapId;
        var urlreq = new egret.URLRequest();
        urlreq.method = egret.URLRequestMethod.GET;
        urlreq.url = config["default"].staticUrls.map + mapId;
        urlreq.requestHeaders.push(new egret.URLRequestHeader("Content-Type", "application/x-www-form-urlencoded"));
        this.urlloader.once(egret.Event.COMPLETE, this.onGetMapValueComplete, this);
        this.urlloader.load(urlreq);
    }
    onGetMapValueComplete(event) {
        var loader = event.target;
        let data;
        if (loader.data === null) {
            console.log('error map data', loader.data);
            data = MapData_DataMaker.makeBattleMap(20, 20);
        }
        else {
            data = JSON.parse(loader.data);
        }
        let gameserver = LocalServer_GameServer.getInstance();
        gameserver.setMyRoleInfo(null);
        // msg = msg["data"];
        ResMng_ResMng.init();
        staticDataMng.init(RES.getRes("battle_data_base"));
        console.log('f9s8dfs98');
        let battleUI = new EditorUI_EditUI();
        battleUI.mapId = this.mapId;
        this.mainUI.addChild(battleUI);
        MapData_BattleMapData.getInstance().initMap(data);
        battleUI.mapView.updateByMapData("init");
        battleUI.initCoverArea();
    }
}
window["Editor"] = Director_Editor;
__reflect(Director_Editor.prototype,"Editor",[]); 
// export class Pc extends Director {
// }
class Director_Web extends Director {
    init(roomId) {
        this.roomId = roomId;
        let token = Object(cookie["getCookie"])("token");
        if (token === null) {
            // setCookie("token", "123", 99);
            console.log("no token");
            return;
        }
        // GameServer.getInstance().userToken = token;
        // var urlreq: egret.URLRequest = new egret.URLRequest();
        // urlreq.method = egret.URLRequestMethod.POST;
        // urlreq.url = NetConfig.postUrl + "getUserInfo";
        // urlreq.data = new egret.URLVariables("token=" + token);
        // urlreq.requestHeaders.push(
        //     new egret.URLRequestHeader(
        //         "Content-Type",
        //         "application/x-www-form-urlencoded"
        //     )
        // );
        // this.urlloader.once(egret.Event.COMPLETE, this.connectServer, this);
        // this.urlloader.load(urlreq);
        let gameserver = LocalServer_GameServer.getInstance();
        gameserver.webSocket.once(egret.Event.CONNECT, this.getRoomInfo, this);
        gameserver.connect(this.roomId);
    }
    // private connectServer(event: egret.Event) {
    //     var loader: egret.URLLoader = <egret.URLLoader>event.target;
    //     let data = JSON.parse(loader.data);
    //     console.log("got user info", data);
    //     // GameServer.getInstance().userInfo = data["data"];
    //     let gameserver = GameServer.getInstance();
    //     gameserver.webSocket.once(egret.Event.CONNECT, this.getRoomInfo, this);
    //     gameserver.connect(this.roomId);
    // }
    getRoomInfo() {
        console.log("connected");
        let gameserver = LocalServer_GameServer.getInstance();
        gameserver.webSocket.once(egret.ProgressEvent.SOCKET_DATA, this.getRoleInfo, this);
        gameserver.send({
            type: MessageType.IgetRoom,
        });
    }
    getRoleInfo() {
        console.log("got room info /setting");
        let gameserver = LocalServer_GameServer.getInstance();
        gameserver.webSocket.once(egret.ProgressEvent.SOCKET_DATA, this.startCreateScene, this);
        let data = JSON.parse(gameserver.webSocket.readUTF());
        gameserver.playerInfo = data.usersInfo;
        gameserver.send({
            type: MessageType.IgetRole,
            token: Object(cookie["getCookie"])("token")
        });
    }
    startCreateScene(event) {
        let gameserver = LocalServer_GameServer.getInstance();
        gameserver.installListener();
        console.log("rev map");
        let msg;
        try {
            msg = JSON.parse(gameserver.webSocket.readUTF());
        }
        catch (error) {
            console.log("error", msg, error);
            return;
        }
        console.log(msg, 'msg');
        if (msg["type"] !== MessageType.Orole) {
            console.log("msg type error");
            return;
        }
        // gameserver.setRaceInfo(msg)
        gameserver.setMyRoleInfo(msg.flag);
        gameserver.nowBoutFlag = msg.nowBoutFlag;
        // msg = msg["data"];
        ResMng_ResMng.init();
        staticDataMng.init(RES.getRes("battle_data_base"));
        let battleUI = new BattleUI_BattleUI();
        this.mainUI.addChild(battleUI);
        gameserver.battle = battleUI;
        console.log('prim map', msg.map);
        MapData_BattleMapData.getInstance().initMap(msg.map);
        gameserver.battle.mapView.updateByMapData("init");
        gameserver.battle.showInteractionView("chat");
        // setTimeout(()=>{
        //     gameserver.startProvideAiTimer();
        // }, 2500)
    }
}
window["Web"] = Director_Web;
__reflect(Director_Web.prototype,"Web",[]); 
class Director_Review extends Director {
    init(recordid) {
        var urlreq = new egret.URLRequest();
        urlreq.method = egret.URLRequestMethod.GET;
        urlreq.url = config["default"].staticUrls.record + recordid;
        urlreq.requestHeaders.push(new egret.URLRequestHeader("Content-Type", "application/x-www-form-urlencoded"));
        this.urlloader.once(egret.Event.COMPLETE, this.onGetAction, this);
        this.urlloader.load(urlreq);
    }
    onGetAction(event) {
        var loader = event.target;
        let data;
        let actions = [];
        if (loader.data === null) {
            console.log('no such record');
            return;
        }
        else {
            data = loader.data.split('\n');
            console.log(data, loader.data);
            for (let i = 1; i < data.length - 1; ++i) {
                actions.push(JSON.parse(data[i]));
            }
        }
        let gameserver = LocalServer_GameServer.getInstance();
        gameserver.setMyRoleInfo(null);
        ResMng_ResMng.init();
        staticDataMng.init(RES.getRes("battle_data_base"));
        let battleUI = new ReviewUI_ReviewUI();
        //@ts-ignore
        gameserver.battle = battleUI;
        this.mainUI.addChild(battleUI);
        MapData_BattleMapData.getInstance().initMap(JSON.parse(data[0]));
        battleUI.mapView.updateByMapData("init");
        battleUI.setActions(actions, data[0]);
    }
}
window["Review"] = Director_Review;
__reflect(Director_Review.prototype,"Review",[]); 

// CONCATENATED MODULE: ./src/Main.ts
__webpack_require__("./src/Battle/index.ts");
__webpack_require__("./src/Platform.ts");
__webpack_require__("./src/config.ts");
__webpack_require__("./src/cookie.ts");
__webpack_require__("./src/drop/AI.ts");
__webpack_require__("./src/drop/Battle.ts");
__webpack_require__("./src/drop/Main2.ts");



var Main_app = window['app']; 
var Main_app;
(function (app) {
    class AssetAdapter {
        /**
         * @language zh_CN
         * 解析素材
         * @param source 待解析的新素材标识符
         * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
         * @param thisObject callBack的 this 引用
         */
        getAsset(source, compFunc, thisObject) {
            function onGetRes(data) {
                compFunc.call(thisObject, data, source);
            }
            if (RES.hasRes(source)) {
                let data = RES.getRes(source);
                if (data) {
                    onGetRes(data);
                }
                else {
                    RES.getResAsync(source, onGetRes, this);
                }
            }
            else {
                RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
            }
        }
    }
    __reflect(AssetAdapter.prototype,"app.AssetAdapter",["eui.IAssetAdapter"]); 
    class ThemeAdapter {
        /**
         * 解析主题
         * @param url 待解析的主题url
         * @param compFunc 解析完成回调函数，示例：compFunc(e:egret.Event):void;
         * @param errorFunc 解析失败回调函数，示例：errorFunc():void;
         * @param thisObject 回调的this引用
         */
        getTheme(url, compFunc, errorFunc, thisObject) {
            function onGetRes(e) {
                compFunc.call(thisObject, e);
            }
            function onError(e) {
                if (e.resItem.url == url) {
                    RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onError, null);
                    errorFunc.call(thisObject);
                }
            }
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onError, null);
            RES.getResByUrl(url, onGetRes, this, RES.ResourceItem.TYPE_TEXT);
        }
    }
    __reflect(ThemeAdapter.prototype,"app.ThemeAdapter",["eui.IThemeAdapter"]); 
    class NewMain extends eui.UILayer {
        constructor() {
            super();
            this.isThemeLoadEnd = false;
            this.isResourceLoadEnd = false;
            if (NewMain.instance === undefined) {
                NewMain.instance = this;
            }
            else {
                throw new Error("NewMain instance");
            }
            this.loadingView = new LoadingUI();
            this.addChild(this.loadingView);
        }
        createChildren() {
            super.createChildren();
            //inject the custom material parser
            //注入自定义的素材解析器
            var assetAdapter = new AssetAdapter();
            egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
            egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
            // initialize the Resource loading library
            //初始化Resource资源加载库
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            RES.loadConfig("resource/default.res.json", "resource/");
            // 屏幕适应
            this.stage.scaleMode = egret.StageScaleMode.FIXED_WIDE;
            this.stage.orientation = egret.OrientationMode.LANDSCAPE;
            // if (egret.Capabilities.isMobile) {
            //   this.stage.orientation = egret.OrientationMode.PORTRAIT;
            //   this.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
            // }
            // else {
            //   this.stage.orientation = egret.OrientationMode.PORTRAIT;
            //   this.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
            // }
        }
        /**
         * 配置文件加载完成,开始预加载皮肤主题资源和preload资源组。
         * Loading of configuration file is complete, start to pre-load the theme configuration file and the preload resource group
         */
        onConfigComplete(event) {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            RES.loadGroup("preload");
        }
        /**
         * 主题文件加载完成,开始预加载
         * Loading of theme configuration file is complete, start to pre-load the
         */
        onThemeLoadComplete() {
            this.isThemeLoadEnd = true;
            this.createScene();
        }
        /**
         * preload资源组加载完成
         * preload resource group is loaded
         */
        onResourceLoadComplete(event) {
            if (event.groupName == "preload") {
                this.removeChild(this.loadingView);
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
                this.isResourceLoadEnd = true;
                this.createScene();
            }
        }
        /**
         * 资源组加载出错
         *  The resource group loading failed
         */
        onItemLoadError(event) {
            console.warn("Url:" + event.resItem.url + " has failed to load");
        }
        /**
         * 资源组加载出错
         *  The resource group loading failed
         */
        onResourceLoadError(event) {
            //TODO
            console.warn("Group:" + event.groupName + " has failed to load");
            //忽略加载失败的项目
            //Ignore the loading failed projects
            this.onResourceLoadComplete(event);
        }
        /**
         * preload资源组加载进度
         * Loading process of preload resource group
         */
        onResourceProgress(event) {
            if (event.groupName == "preload") {
                this.loadingView.onProgress(event.itemsLoaded, event.itemsTotal);
            }
        }
        /**
         * init
         */
        createScene() {
            if (this.isThemeLoadEnd && this.isResourceLoadEnd) {
                // this.getBaseInfo();
                // this.startCreateScene();
                let url_query = Object(cookie["parse_url"])(window.location.search);
                console.log("created", url_query);
                let director;
                // if(url_query['pc']!==undefined){
                //   director = Director.Pc.getInstance(this);
                // }else 
                if (url_query['roomid'] !== undefined) {
                    director = Director_Web.getInstance(this);
                    director.init(url_query['roomid']);
                }
                else if (url_query['mapid'] !== undefined) {
                    director = Director_Editor.getInstance(this);
                    director.init(url_query['mapid']);
                }
                else if (url_query['recordid'] !== undefined) {
                    director = Director_Review.getInstance(this);
                    director.init(url_query['recordid']);
                }
                else {
                    console.log('fsodif98');
                }
            }
        }
    }
    app.NewMain = NewMain;
    __reflect(NewMain.prototype,"app.NewMain",[]); 
    // enum MVEType{
    //     return,
    //     goto
    // }
    // interface MVEReturn{
    //     type: MVEType.return
    // }
    // interface MVEGoto{
    //     type: MVEType.goto,
    //     newKey: string,
    //     newState: string
    // }
    // type MVEs = MVEReturn | MVEGoto;
    // class MVEvent extends egret.Event{
    //     static readonly DATE: string = "MVEvent";
    //     public _data: MVEs;
    //     constructor(){
    //         super(MVEvent.DATE)
    //     }
    // }
    //   class MVBase extends eui.UILayer {
    //     protected scroller: egret.ScrollView;
    //     protected container: eui.Group;
    //     protected returnButton: eui.Image;
    //     public stateStack: Array<{ state: string; key: string }>;
    //     public data: string[];
    //     public nextState: string;
    //     constructor() {
    //       super();
    //       this.data = [];
    //       this.stateStack = [];
    //       this.scroller = new egret.ScrollView();
    //       this.container = new eui.Group();
    //       this.returnButton = new eui.Image();
    //       this.returnButton.source = RES.getRes("battle_ui_return_png");
    //       this.returnButton.right = 10;
    //       this.returnButton.bottom = 10;
    //       this.returnButton.addEventListener(
    //         egret.TouchEvent.TOUCH_TAP,
    //         this.handleReturnButton,
    //         this
    //       );
    //     }
    //     protected childrenCreated(): void {
    //       super.childrenCreated();
    //       this.container.width = this.scroller.width =
    //         egret.MainContext.instance.stage.stageWidth;
    //       this.container.height = this.scroller.height =
    //         egret.MainContext.instance.stage.stageHeight;
    //       this.scroller.setContent(this.container);
    //       this.addChild(this.scroller);
    //       this.addChild(this.returnButton);
    //       let layout = new eui.VerticalLayout();
    //       layout.gap = 15;
    //       layout.horizontalAlign = egret.HorizontalAlign.CENTER;
    //       // layout.verticalAlign = egret.VerticalAlign.TOP;
    //       this.container.layout = layout;
    //       layout.paddingTop = 50;
    //       layout.paddingBottom = 30;
    //       this.stateStack.push({
    //         state: "begin",
    //         key: "",
    //       });
    //       this.swapUI();
    //     }
    //     public setData(data: string[]) {
    //       this.container.removeChildren();
    //       for (let i of data) {
    //         let tmp_obj = new eui.Label(i);
    //         this.container.addChild(tmp_obj);
    //         tmp_obj.touchEnabled = true;
    //         tmp_obj.addEventListener(
    //           egret.TouchEvent.TOUCH_TAP,
    //           this.handleItemCliked.bind(this, i),
    //           this
    //         );
    //       }
    //     }
    //     public swapUI() {
    //       let nowState = this.stateStack[this.stateStack.length - 1];
    //       if (nowState.state === "begin") {
    //         this.returnButton.visible = false;
    //         this.setData(["main"]);
    //         this.nextState = "main";
    //         return;
    //       } else {
    //         this.returnButton.visible = true;
    //       }
    //       if (nowState.state === "main") {
    //         this.setData(["battle", "map", "web", "declaration", "exit"]);
    //         this.nextState = "mainNext";
    //         return;
    //       } else if (nowState.state === "mainNext") {
    //         switch (nowState.key) {
    //           case "battle":
    //             // 异步  this.setData([]);
    //             this.setData(["fff", "fff"]);
    //             this.nextState = "mapList";
    //             break;
    //           case "map":
    //             this.setData(["standard", "2v", "3v", "4v"]);
    //             this.nextState = "mapList";
    //             break;
    //           case "web":
    //             // 异步
    //             this.setData(["rooms"]);
    //             this.nextState = "room";
    //             break;
    //           case "declaration":
    //             this.setData(["强烈支持正版！！！"]);
    //             this.stateStack.pop();
    //             break;
    //           case "exit":
    //             this.setData(["begin"]);
    //             this.nextState = "main";
    //             break;
    //           default:
    //             break;
    //         }
    //       } else if (nowState.state === "mapList" || nowState.state === "room") {
    //         // to map setting
    //         NewMain.instance.swapUI("mapSetting");
    //         // or
    //         // to battle
    //         this.stateStack.pop();
    //       }
    //     }
    //     protected handleReturnButton(evt: egret.TouchEvent) {
    //       this.stateStack.pop();
    //       this.swapUI();
    //     }
    //     protected handleItemCliked(newKey: string) {
    //       console.log("clicked", newKey, this.stateStack);
    //       let nowState = this.stateStack[this.stateStack.length - 1];
    //       if (nowState.state === this.nextState && nowState.key === newKey) {
    //         return;
    //       }
    //       this.stateStack.push({
    //         state: this.nextState,
    //         key: newKey,
    //       });
    //       this.swapUI();
    //     }
    //   }
    //   class MVRoom extends eui.Component implements eui.UIComponent {
    //     constructor() {
    //       super();
    //     }
    //   }
    //   class MvMapSetting extends eui.Component implements eui.UIComponent {
    //     // money, bout, cities, fog, weather, ai lvl
    //     private labelRoomName: eui.Label;
    //     private labelRoomOwber: eui.Label;
    //     public mapSetting: BattleMapSetting;
    //     public myFlag: string;
    //     public userId: string;
    //     public userName: string;
    //     private labelMoney: eui.Label;
    //     private buttonUpMoney: eui.Button;
    //     private buttonDownMoney: eui.Button;
    //     private labelCity: eui.Label;
    //     private buttonUpCity: eui.Button;
    //     private buttonDownCity: eui.Button;
    //     private labelBout: eui.Label;
    //     private buttonUpBout: eui.Button;
    //     private buttonDownBout: eui.Button;
    //     private buttonFog: eui.Button;
    //     private buttonWeather: eui.Button;
    //     private buttonAI: eui.Button;
    //     private buttonHeroRed: eui.Button;
    //     private buttonComputerRed: eui.Button;
    //     private buttonHasUserRed: eui.Button;
    //     private buttonHeroBlue: eui.Button;
    //     private buttonComputerBlue: eui.Button;
    //     private buttonHasUserBlue: eui.Button;
    //     private buttonHeroGreen: eui.Button;
    //     private buttonComputerGreen: eui.Button;
    //     private buttonHasUserGreen: eui.Button;
    //     private buttonHeroYellow: eui.Button;
    //     private buttonComputerYellow: eui.Button;
    //     private buttonHasUserYellow: eui.Button;
    //     constructor() {
    //       super();
    //       this.labelRoomName = new eui.Label();
    //       this.labelRoomOwber = new eui.Label();
    //       this.labelMoney = new eui.Label();
    //       this.buttonUpMoney = new eui.Button();
    //       this.buttonDownMoney = new eui.Button();
    //       this.labelCity = new eui.Label();
    //       this.buttonUpCity = new eui.Button();
    //       this.buttonDownCity = new eui.Button();
    //       this.labelBout = new eui.Label();
    //       this.buttonUpBout = new eui.Button();
    //       this.buttonDownBout = new eui.Button();
    //       this.buttonFog = new eui.Button();
    //       this.buttonWeather = new eui.Button();
    //       this.buttonAI = new eui.Button();
    //       this.buttonHeroRed = new eui.Button();
    //       this.buttonComputerRed = new eui.Button();
    //       this.buttonHeroBlue = new eui.Button();
    //       this.buttonComputerBlue = new eui.Button();
    //       this.buttonHeroGreen = new eui.Button();
    //       this.buttonComputerGreen = new eui.Button();
    //       this.buttonHeroYellow = new eui.Button();
    //       this.buttonComputerYellow = new eui.Button();
    //     }
    //     protected childrenCreated(): void {
    //       super.childrenCreated();
    //       this.width = egret.MainContext.instance.stage.stageWidth;
    //       this.height = egret.MainContext.instance.stage.stageHeight;
    //       this.buttonUpMoney.addEventListener(
    //         egret.TouchEvent.TOUCH_TAP,
    //         this.handleMoney.bind(this, true),
    //         this
    //       );
    //       this.buttonDownMoney.addEventListener(
    //         egret.TouchEvent.TOUCH_TAP,
    //         this.handleMoney.bind(this, false),
    //         this
    //       );
    //       this.buttonUpCity.addEventListener(
    //         egret.TouchEvent.TOUCH_TAP,
    //         this.handleCity.bind(this, true),
    //         this
    //       );
    //       this.buttonDownCity.addEventListener(
    //         egret.TouchEvent.TOUCH_TAP,
    //         this.handleCity.bind(this, false),
    //         this
    //       );
    //       this.buttonUpBout.addEventListener(
    //         egret.TouchEvent.TOUCH_TAP,
    //         this.handleBout.bind(this, true),
    //         this
    //       );
    //       this.buttonDownBout.addEventListener(
    //         egret.TouchEvent.TOUCH_TAP,
    //         this.handleBout.bind(this, false),
    //         this
    //       );
    //       this.buttonFog.addEventListener(
    //         egret.TouchEvent.TOUCH_TAP,
    //         this.handleFog,
    //         this
    //       );
    //       this.buttonWeather.addEventListener(
    //         egret.TouchEvent.TOUCH_TAP,
    //         this.handleWeather,
    //         this
    //       );
    //       this.buttonAI.addEventListener(
    //         egret.TouchEvent.TOUCH_TAP,
    //         this.handleAI,
    //         this
    //       );
    //       this.buttonHeroRed.addEventListener(
    //         egret.TouchEvent.TOUCH_TAP,
    //         this.handleHero.bind(this, "red"),
    //         this
    //       );
    //       this.buttonComputerRed.addEventListener(
    //         egret.TouchEvent.TOUCH_TAP,
    //         this.handleComputer.bind(this, "red"),
    //         this
    //       );
    //       this.buttonHeroBlue.addEventListener(
    //         egret.TouchEvent.TOUCH_TAP,
    //         this.handleHero.bind(this, "blue"),
    //         this
    //       );
    //       this.buttonComputerBlue.addEventListener(
    //         egret.TouchEvent.TOUCH_TAP,
    //         this.handleComputer.bind(this, "blue"),
    //         this
    //       );
    //       this.buttonHeroGreen.addEventListener(
    //         egret.TouchEvent.TOUCH_TAP,
    //         this.handleHero.bind(this, "green"),
    //         this
    //       );
    //       this.buttonComputerGreen.addEventListener(
    //         egret.TouchEvent.TOUCH_TAP,
    //         this.handleComputer.bind(this, "green"),
    //         this
    //       );
    //       this.buttonHeroYellow.addEventListener(
    //         egret.TouchEvent.TOUCH_TAP,
    //         this.handleHero.bind(this, "yellow"),
    //         this
    //       );
    //       this.buttonComputerYellow.addEventListener(
    //         egret.TouchEvent.TOUCH_TAP,
    //         this.handleComputer.bind(this, "yellow"),
    //         this
    //       );
    //     }
    //     private handleMoney(increase: boolean) {
    //       if (this.userId !== this.mapSetting.roomOwnerId) {
    //         return;
    //       }
    //       let nowNu = parseInt(this.labelMoney.text);
    //       nowNu += increase ? 1000 : -1000;
    //       if (nowNu < 0) {
    //         nowNu = 0;
    //       } else if (nowNu > 10000) {
    //         nowNu = 10000;
    //       }
    //       this.labelMoney.text = nowNu.toString();
    //     }
    //     private handleCity(increase: boolean) {
    //       if (this.userId !== this.mapSetting.roomOwnerId) {
    //         return;
    //       }
    //       let nowNu = parseInt(this.labelCity.text);
    //       nowNu += increase ? 2 : -2;
    //       if (nowNu < 0) {
    //         nowNu = 0;
    //       } else if (nowNu > 100) {
    //         nowNu = 100;
    //       }
    //       this.labelCity.text = nowNu.toString();
    //     }
    //     private handleBout(increase: boolean) {
    //       if (this.userId !== this.mapSetting.roomOwnerId) {
    //         return;
    //       }
    //       let nowNu = parseInt(this.labelBout.text);
    //       nowNu += increase ? 2 : -2;
    //       if (nowNu < 0) {
    //         nowNu = 0;
    //       } else if (nowNu > 100) {
    //         nowNu = 100;
    //       }
    //       this.labelBout.text = nowNu.toString();
    //     }
    //     private handleFog() {
    //       if (this.userId !== this.mapSetting.roomOwnerId) {
    //         return;
    //       }
    //       if (this.buttonFog.label === "fog open") {
    //         this.buttonFog.label = "fog close";
    //       } else {
    //         this.buttonFog.label = "fog open";
    //       }
    //     }
    //     private handleWeather() {
    //       if (this.userId !== this.mapSetting.roomOwnerId) {
    //         return;
    //       }
    //       let nowIndex = BattleWeatherTypes.indexOf(
    //         this.buttonWeather.label as typeof BattleWeatherTypes[number]
    //       );
    //       if (nowIndex === -1) {
    //         throw new Error("weather error");
    //       }
    //       nowIndex = (nowIndex + 1) % BattleWeatherTypes.length;
    //       this.buttonWeather.label = BattleWeatherTypes[nowIndex];
    //     }
    //     private handleAI() {
    //       if (this.userId !== this.mapSetting.roomOwnerId) {
    //         return;
    //       }
    //       let nowIndex = BattleLevelTypes.indexOf(
    //         this.buttonWeather.label as typeof BattleLevelTypes[number]
    //       );
    //       if (nowIndex === -1) {
    //         throw new Error("weather error");
    //       }
    //       nowIndex = (nowIndex + 1) % BattleLevelTypes.length;
    //       this.buttonWeather.label = BattleLevelTypes[nowIndex];
    //     }
    //     private handleHero(flag: string) {
    //       if (flag !== this.myFlag) {
    //         return;
    //       }
    //       let heros = this.mapSetting.legalHero;
    //       let nowHero: number;
    //       // @ts-ignore
    //       let hero_index = this.mapSetting.users.indexOf(
    //         (item: { flag: string }) => item.flag === flag
    //       );
    //       switch (flag) {
    //         case "red":
    //           nowHero = heros.indexOf(this.buttonHeroRed.label);
    //           nowHero = (nowHero + 1) % heros.length;
    //           this.buttonHeroRed.label = heros[nowHero];
    //           this.mapSetting.users[hero_index].hero = this.buttonHeroRed.label;
    //           break;
    //         case "blue":
    //           nowHero = heros.indexOf(this.buttonHeroBlue.label);
    //           nowHero = (nowHero + 1) % heros.length;
    //           this.buttonHeroBlue.label = heros[nowHero];
    //           this.mapSetting.users[hero_index].hero = this.buttonHeroBlue.label;
    //           break;
    //         case "green":
    //           nowHero = heros.indexOf(this.buttonHeroGreen.label);
    //           nowHero = (nowHero + 1) % heros.length;
    //           this.buttonHeroGreen.label = heros[nowHero];
    //           this.mapSetting.users[hero_index].hero = this.buttonHeroGreen.label;
    //           break;
    //         case "yellow":
    //           nowHero = heros.indexOf(this.buttonHeroYellow.label);
    //           nowHero = (nowHero + 1) % heros.length;
    //           this.buttonHeroYellow.label = heros[nowHero];
    //           this.mapSetting.users[hero_index].hero = this.buttonHeroYellow.label;
    //           break;
    //         default:
    //           break;
    //       }
    //     }
    //     private handleComputer(flag: string) {
    //       // @ts-ignore
    //       let hero_index = this.mapSetting.users.indexOf((item: { flag: string }) => item.flag === flag
    //       );
    //       let isComputer = this.mapSetting.users[hero_index].userId === undefined;
    //       if (!isComputer) {
    //         return;
    //       }
    //       if (this.myFlag !== undefined) {
    //         // @ts-ignore
    //         let tmp_index_1 = this.mapSetting.users.indexOf(
    //           (item) => item.flag === this.myFlag
    //         );
    //         this.mapSetting.users[tmp_index_1].userId = undefined;
    //         this.mapSetting.users[tmp_index_1].userName = "";
    //         switch (this.myFlag) {
    //           case "red":
    //             this.buttonComputerRed.label = "";
    //             break;
    //           case "blue":
    //             this.buttonComputerBlue.label = "";
    //             break;
    //           case "green":
    //             this.buttonComputerGreen.label = "";
    //             break;
    //           case "yellow":
    //             this.buttonComputerYellow.label = "";
    //             break;
    //           default:
    //             break;
    //         }
    //       }
    //       this.myFlag = flag;
    //       this.mapSetting.users[hero_index].userId = this.userId;
    //       this.mapSetting.users[hero_index].userName = this.userName;
    //       let label: eui.Button;
    //       switch (flag) {
    //         case "red":
    //           label = this.buttonHasUserRed;
    //           break;
    //         case "blue":
    //           label = this.buttonHasUserBlue;
    //           break;
    //         case "green":
    //           label = this.buttonHasUserGreen;
    //           break;
    //         case "yellow":
    //           label = this.buttonHasUserYellow;
    //           break;
    //         default:
    //           break;
    //       }
    //       label.label = this.userName;
    //     }
    //   }
})(Main_app || (Main_app = {}));
window["app"] = Main_app;


/***/ }),

/***/ "./src/Platform.ts":
/***/ (function(module, exports) {

class DebugPlatform {
    getUserInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return { nickName: "username" };
        });
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
window["DebugPlatform"] = DebugPlatform;
__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]); 
if (!window.platform) {
    window.platform = new DebugPlatform();
}


/***/ }),

/***/ "./src/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let pro = {
    baseUrl: "",
    postUrl: "http://175.178.246.91.com:3201/advw/restapi/",
    wsUrl: "ws://175.178.246.91.com:3201/advw/ws/",
    egretUrl: "https://whitebear.ml/advw/egret/",
    recordUrl: "https://whitebear.ml/advw/#/record/",
    staticUrls: {
        record: "http://175.178.246.91.com:3201/static/advw/record/",
        map: "http://175.178.246.91.com:3201/static/advw/map/",
        userHeader: "http://175.178.246.91.com:3201/static/advw/userHeader/",
        mapImage: "http://175.178.246.91.com:3201/static/advw/mapImg/",
        userSetting: "http://175.178.246.91.com:3201/static/advw/index/user_setting.json",
        postUrlSetting: "http://175.178.246.91.com:3201/static/advw/index/url_setting.json",
        indexMd: "http://175.178.246.91.com:3201/static/advw/index/index.md",
        helpMd: "http://175.178.246.91.com:3201/static/advw/index/help.md"
    }
};
window["pro"] = pro;
let dev = {
    baseUrl: "",
    postUrl: "http://localhost:3005/advw/restapi/",
    wsUrl: "ws://localhost:3005/advw/ws/",
    egretUrl: "http://localhost:3000/",
    recordUrl: "http://localhost:8080/#/record/",
    staticUrls: {
        record: "http://localhost:3005/static/advw/record/",
        map: "http://localhost:3005/static/advw/map/",
        userHeader: "http://localhost:3005/static/advw/userHeader/",
        mapImage: "http://localhost:3005/static/advw/mapImg/",
        userSetting: "http://localhost:3005/static/advw/index/user_setting.json",
        postUrlSetting: "http://localhost:3005/static/advw/index/url_setting.json",
        indexMd: "http://localhost:3005/static/advw/index/index.md",
        helpMd: "http://localhost:3005/static/advw/index/help.md"
    }
};
window["dev"] = dev;
const NetConfig = pro;
window["NetConfig"] = NetConfig;
/* harmony default export */ __webpack_exports__["default"] = (NetConfig);


/***/ }),

/***/ "./src/cookie.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_url", function() { return parse_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delCookie", function() { return delCookie; });
const getCookie = (name) => {
    let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    let arr = document.cookie.match(reg);
    if (arr && arr.length)
        return decodeURIComponent(arr[2]);
    else
        return null;
};
window["getCookie"] = getCookie;
const setCookie = (c_name, value, expiredays) => {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie =
        c_name +
            "=" +
            encodeURIComponent(value) +
            (expiredays == null ? "" : ";expires=" + exdate.toUTCString());
};
window["setCookie"] = setCookie;
const delCookie = (name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
};
window["delCookie"] = delCookie;
function parse_url(url) {
    var pattern = /(\w+)=(\w+)/ig;
    var parames = {};
    url.replace(pattern, (a, b, c) => parames[b] = c);
    return parames;
}
window["parse_url"] = parse_url;



/***/ }),

/***/ "./src/drop/AI.ts":
/***/ (function(module, exports) {

// class BattleTreeUnionForce {
//     public airForce: number;
//     public defAirForce: number;
//     public distanceForce: number;
//     public submarineForce: number;
//     public defSubmarineForce: number;
//     public defTrackForce: number;
//     public trackForce: number;
//     public supplyForce: number;
//     public occupyForce: number;
//     public shipForce: number;
//     public defShipForce: number;
//     public transportShipForce: number;
// }
// const KMEANS_K = 4;
// /**
//  * 依据这个来分配兵力、进攻性质，设置进攻路线
//  */
// class BattleTreeRoad {
//     public notes: [BattleTreeNote, BattleTreeNote];
//     public from: number;
//     public to: number;
//     public seaLength: number;
//     public feetLength: number;
//     public trackLength: number;
//     public airLength: number;
//     public roadWidth: number;
//     public type: typeof BattleLandMarkTypes[number];
// }
// class BattleTreeNote {
//     public flag: typeof PlayerFlagTypes[number];
//     public notes: number[];
//     public neighbour: number[];
//     public centerWeight: number;
//     public citiesWeight: number;
//     public capitalWeight: number;
//     public roads: Record<number, BattleTreeRoad>;
// }
// class BattleTreeNoteGuide {
//     /**
//      * rest Units
//      */
//     public _units: BattleEleUnit[];
//     public neighbourNote: Record<number, BattleTreeNote>;
//     public neighbourRoad: Record<number, BattleTreeRoad>;
//     public neighbourRoadGuide: Record<number, BattleTreeRoadGuide>;
//     public get units() {
//         return this._units;
//     }
//     public set units(v: BattleEleUnit[]) {
//         this._units = v;
//     }
//     public removeUnit(v: BattleEleUnit) {
//         let tmp = this._units.filter(item => item !== v)
//         if (tmp.length === this._units.length) {
//             return;
//         }
//         this.units = tmp;
//     }
//     public addUnit(v: BattleEleUnit) {
//         this.units = [...this._units, v];
//     }
// }
// const BattleTreeRoadTypes = <const>["sea", "track", "feet", "transport"];
// class BattleTreeRoadGuide {
//     public guided: boolean;
//     public _units: BattleEleUnit[];
//     public from: BattleTreeNote;
//     public to: BattleTreeNote;
//     public road: BattleTreeRoad;
//     public enemyForce: BattleTreeUnionForce;
//     public unionForce: BattleTreeUnionForce;
//     public taskTarget: string;
//     public preMoney: number;
//     public preUnitModal: BattleTreeUnionForce;
//     public preBuyUnits: Record<typeof BattleUnitTypes[number], number>;
//     public get units() {
//         return this._units;
//     }
//     public set units(v: BattleEleUnit[]) {
//         this._units = v;
//     }
//     public removeUnit(v: BattleEleUnit) {
//         let tmp = this._units.filter(item => item !== v)
//         if (tmp.length === this._units.length) {
//             return;
//         }
//         this.units = tmp;
//     }
//     public addUnit(v: BattleEleUnit) {
//         this.units = [...this._units, v];
//     }
// }
// class BattleTreeMapData {
//     public flag: typeof PlayerFlagTypes[number];
//     public notes: BattleTreeNote[];
//     public roads: BattleTreeRoad[];
//     // public raodTable: Record<number, number>;
//     constructor(map: BattleMapProps, flag: typeof PlayerFlagTypes[number]) {
//         this.flag = flag;
//         let [tmp_notes, tmp_note_bg] = this.countNotes(map);
//         for (let i = 0; i < tmp_note_bg.length; i++) {
//             let tmp_note = new BattleTreeNote();
//             tmp_note.notes = tmp_notes[i];
//             tmp_note.neighbour = tmp_note_bg[i];
//             this.notes.push(tmp_note);
//         }
//         for (let i = 0; i < tmp_note_bg.length - 1; i++) {
//         }
//     }
//     private countNotes(map: BattleMapProps) {
//         let [width, height] = [MathManBase.mapWidth, MathManBase.mapHeight];
//         let tmp_notes: number[][] = [];
//         let tool = new MathManBase();
//         let costMap = tool.countCostMap(map, "tank", []);
//         let buildings_dealed: Record<number, number> = {};
//         let buildLayer = map.buildLayer
//         const myKmeans = (building_types: string[]) => {
//             let buildings = Object.keys(buildLayer)
//                 .filter(item => building_types.indexOf(buildLayer[parseInt(item)].type))
//                 .map(item => parseInt(item))
//             for (let i = 0; i < buildings.length; i++) {
//                 let moveArea = tool.countMoveArea(costMap, buildLayer[buildings[i]].posId, KMEANS_K);
//                 if (buildings_dealed[buildLayer[buildings[i]].posId] !== undefined) {
//                     continue;
//                 }
//                 let moveArea_keys = Object.keys(moveArea).map(item => parseInt(item));
//                 let tmp_undefined: number[] = [];
//                 let tmp_not_undefined: number[] = [];
//                 for (let j = 0; j < moveArea_keys.length; i++) {
//                     let tmp_block1 = buildLayer[moveArea_keys[j]];
//                     if (tmp_block1 !== undefined &&
//                         building_types.indexOf(tmp_block1.type) !== -1) {
//                         if (buildings_dealed[tmp_block1.posId] === undefined) {
//                             tmp_undefined.push(tmp_block1.posId);
//                         } else {
//                             tmp_not_undefined.push(tmp_block1.posId);
//                         }
//                     }
//                 }
//                 let max_nb_note_id: number;
//                 let max_nb_note_rate: number;
//                 while (tmp_not_undefined.length) {
//                     let tmp_posId_1 = tmp_not_undefined.pop();
//                     let tmp_tree_id = buildings_dealed[tmp_posId_1];
//                     let tmp_tree_tree = tmp_notes[tmp_tree_id];
//                     // // 定位到 它的所在 note
//                     // for(let j=0;j<tmp_notes.length)
//                     // for (let j of tmp_notes) {
//                     //     if (j.indexOf(tmp_posId_1) !== -1) {
//                     //         tmp_tree_id = j;
//                     //         break;
//                     //     }
//                     // }
//                     let tmp_has = 0;
//                     for (let j of tmp_tree_tree) {
//                         if (moveArea[j] !== undefined) {
//                             tmp_has++;
//                         }
//                     }
//                     if (max_nb_note_rate === undefined || tmp_has / tmp_tree_tree.length > max_nb_note_rate) {
//                         max_nb_note_rate = tmp_has / tmp_tree_tree.length;
//                         max_nb_note_id = tmp_tree_id;
//                     }
//                 }
//                 if (max_nb_note_id !== undefined && max_nb_note_rate > 0.75) {
//                     tmp_notes[max_nb_note_id].push(buildings[i]);
//                     buildings_dealed[buildings[i]] = max_nb_note_id;
//                 } else {
//                     let new_note = [...tmp_undefined, buildings[i]];
//                     tmp_notes.push(new_note);
//                     buildings_dealed[buildings[i]] = tmp_notes.length - 1;
//                 }
//             }
//         }
//         myKmeans(["airport", "capital", "factory", "shipyard"])
//         myKmeans(["city", "stronghold"])
//         let notes_bg: number[][] = [];
//         let directions: number[] = [0, 1, 0, -1, 1, 0, -1, 0];
//         for (let i of tmp_notes) {
//             let tmp_nb: Record<number, null> = {};
//             for (let j of i) {
//                 let [x_, y_] = [j % width, Math.floor(j / width)];
//                 for (let k = 0; k < 8; k += 2) {
//                     let [x_1, y_1] = [x_ + directions[k], y_ + directions[k + 1]];
//                     if (x_1 < 0 || y_1 < 0 || x_1 >= width || y_1 >= height || tmp_nb[x_1 + y_1 * width] !== undefined) {
//                         continue;
//                     }
//                     tmp_nb[x_1 + y_1 * width] = null;
//                 }
//             }
//             notes_bg.push(Object.keys(tmp_nb).map(item => parseInt(item)));
//         }
//         return [tmp_notes, notes_bg];
//     }
//     private countRoad(map: BattleMapProps) {
//         for (let i = 0; i < this.notes.length; i++) {
//         }
//     }
// }
// /******************************************************* */
// /******************** version 2 ************************ */
// /******************************************************* */
// class BattleTree extends egret.EventDispatcher {
//     private battle: Battle;
//     private buildings: number[];
//     private units: number[];
//     private playerControl: PlayerController;
//     constructor(battle: Battle, playerControl: PlayerController) {
//         super();
//         this.battle = battle;
//         this.playerControl = playerControl;
//         battle.mapView.collectMap();
//         let mapData = battle.mapView.mapData;
//         let unitLayer = mapData.unitLayer;
//         // let geoLayer = mapData.geoLayer;
//         let buildLayer = mapData.buildLayer;
//         this.units = Object.keys(unitLayer)
//             .map(item => parseInt(item))
//             .filter(item => (unitLayer[item].flag === playerControl.flag && !unitLayer[item].moved))
//         this.buildings = Object.keys(buildLayer)
//             .map(item => parseInt(item))
//             .filter(item => (buildLayer[item].flag === playerControl.flag && unitLayer[item] === undefined));
//     }
//     /**
//      * 需即时更新mapData
//      * @returns 
//      */
//     private moveUnit() {
//         let [width, height] = [MathManBase.mapWidth, MathManBase.mapHeight];
//         while (true) {
//             if (!this.units.length) {
//                 let buildLayer = this.battle.mapView.mapData.buildLayer;
//                 let unitLayer = this.battle.mapView.mapData.unitLayer;
//                 this.buildings = Object.keys(buildLayer)
//                     .map(item => parseInt(item))
//                     .filter(item => (buildLayer[item].flag === this.playerControl.flag && unitLayer[item] === undefined));
//                 this.produceUnit();
//                 return
//             }
//             let now_posId = this.units.pop();
//             let mathmanUnit = new MathManUnit(this.battle.mapView.unitCache[now_posId], this.battle.mapView.mapData);
//             let atkArea = mathmanUnit.atkArea;
//             let unitCache = this.battle.mapView.unitCache;
//             let geoLayer = this.battle.mapView.mapData.geoLayer;
//             // console.log('callback time:', (new Date).getTime(), "posId:"+now_posId)
//             // far atk 
//             for (let i in atkArea) {
//                 let i2 = parseInt(i);
//                 if (atkArea[i2]) {
//                     GameServer.getInstance().send({
//                         data: {
//                             ...StaticDataManager.countAtkResult(
//                                 mathmanUnit.sprite.collectionData(),
//                                 unitCache[i2].collectionData(),
//                                 BattleGeoTypes[geoLayer[mathmanUnit.sprite.posId]],
//                                 BattleGeoTypes[geoLayer[i2]]
//                             ),
//                             type: BEActionType.attack,
//                             road: [mathmanUnit.sprite.posId],
//                             restOil: mathmanUnit.sprite.oil - mathmanUnit.oil,
//                             targetId: parseInt(i),
//                         },
//                         type: "action"
//                     })
//                     return;
//                 }
//             }
//             let target = mathmanUnit.countNearestTarget();
//             if (target === -1) {
//                 continue;
//             }
//             let directions = [0, 1, 0, -1, 1, 0, -1, 0];
//             let [prim_x, prim_y] = [mathmanUnit.sprite.posId % width, Math.floor(mathmanUnit.sprite.posId / width)]
//             for (let i = 0; i < 8; i += 2) {
//                 let [x_, y_] = [prim_x + directions[i], prim_y + directions[i + 1]];
//                 let new_posId = x_ + y_ * width;
//                 if (mathmanUnit.atkArea[new_posId] !== undefined && unitCache[new_posId] === undefined) {
//                     GameServer.getInstance().send({
//                         data: {
//                             ...StaticDataManager.countAtkResult(
//                                 mathmanUnit.sprite.collectionData(),
//                                 unitCache[target].collectionData(),
//                                 BattleGeoTypes[geoLayer[mathmanUnit.sprite.posId]],
//                                 BattleGeoTypes[geoLayer[target]]
//                             ),
//                             type: BEActionType.attack,
//                             road: mathmanUnit.countAStar(new_posId),
//                             restOil: mathmanUnit.sprite.oil - mathmanUnit.oil,
//                             targetId: target,
//                         },
//                         type: "action"
//                     })
//                     mathmanUnit.countAStar(new_posId)
//                     return;
//                 }
//             }
//         }
//     }
//     /**
//      * 
//      */
//     private produceUnit() {
//         let buildCache = this.battle.mapView.buildCache;
//         for (let i of this.buildings) {
//             let buildTable = StaticDataManager.buildTable[buildCache[i].typeName];
//             let buildList: Array<{ name: string, money: number }> = [];
//             for (let i of buildTable) {
//                 buildList.push({ name: i, money: StaticDataManager.unit[i]['costMoney'] as number })
//             }
//             buildList.sort((a, b) => a.money < b.money ? 1 : -1);
//             if (buildList[0].money > this.playerControl.playerSetting.nowMoney) {
//                 continue;
//             }
//             do {
//                 let build_choose = Math.floor(Math.random() * buildList.length);
//                 if (buildList[build_choose].money > this.playerControl.playerSetting.nowMoney) {
//                     continue
//                 }
//                 /****************** build ******************* */
//                 GameServer.getInstance().send({
//                     data: {
//                         type: BEActionType.buy,
//                         posId: i,
//                         // @ts-ignore
//                         unit: DataMaker.makeUnitProps(buildList[build_choose].name, this.playerControl.flag)
//                     },
//                     type: "action"
//                 })
//                 break;
//             } while (true);
//         }
//     }
//     public nextAction() {
//         if (!this.units.length) {
//             this.produceUnit();
//             return;
//         }
//         else if (!this.buildings.length) {
//             this.moveUnit();
//         }
//         else {
//             GameServer.getInstance().send({
//                 data: {
//                     type: BEOthersType.boutEnd
//                 },
//                 type: "boutEnd"
//             })
//             // let evt = new BattleEvent();
//             // evt._data = {
//             //     type: BEOthersType.boutEnd
//             // }
//             // this.dispatchEvent(evt);
//         }
//     }
// }
// class BattleReferee extends egret.EventDispatcher {
//     static instance: BattleReferee;
//     public battle: Battle;
//     public nowFlag: string;
//     public tmpBattleTree: BattleTree;
//     constructor(battle: Battle, flag: string) {
//         super();
//         if (BattleReferee.instance === undefined) {
//             BattleReferee.instance = this;
//         }
//         this.battle = battle;
//         this.nowFlag = flag;
//     }
//     public static judge(
//         map: BattleMapProps, flags: string[],
//         type: "fight" | "move" | "bout"
//     ) {
//         return false;
//     }
//     public makeAndStartAI(flag: string) {
//         this.tmpBattleTree = new BattleTree(this.battle, PlayerManager.getPlayerController(flag))
//         // this.tmpBattleTree.addEventListener(BattleEvent.DATE, this.handleAI, this);
//         this.tmpBattleTree.nextAction();
//     }
//     // public handleAI() {
//     //     this.tmpBattleTree = undefined;
//     //     this.sendToServer({
//     //         type: BEOthersType.boutEnd
//     //     })
//     // }
//     public sendToServer({ data }: { data: BESockets; }) {
//         this.revFromServer(data)
//     }
//     public revFromServer(data: BESockets) {
//         switch (data.type) {
//             case BEOthersType.chatMsg:
//                 this.battle.handleChatServer(data)
//                 break;
//             case BEOthersType.boutEnd:
//                 if(this.tmpBattleTree!==undefined){
//                     this.tmpBattleTree = undefined;
//                 }
//                 this.battle.handleBoundEnd();
//                 break;
//             case BEOthersType.aiCall:
//                 this.tmpBattleTree.nextAction();
//                 break;
//             default:
//                 // this.battle.HandleUnitAction(data);
//                 break;
//         }
//     }
// }


/***/ }),

/***/ "./src/drop/Battle.ts":
/***/ (function(module, exports) {

// const BLOCK_WIDTH = 100;
// const BORDER_SIZE = [400, 400];
// const MINI_MAP_BLOCK_WIDTH = 20;
// const WEB_SOCKET_URL = "ws://127.0.0.1:8000/ws/advw/ws/";
// const BattleGeoTypes = <const>['beach', 'bridge', 'forest', 'lake', 'mountain', 'plain', 'road', 'rocks', 'sea'];
// const BattleWeatherTypes = <const>["sunny", "snow", "hot", "rainy"];
// const BattleLevelTypes = <const>["normal"];
// export const BattleBuildTypes = <const>[
//   "city",
//   "airport",
//   "capital",
//   "factory",
//   "shipyard",
//   "stronghold",
// ];
// export const BattleLandMarkTypes = <const>[
//   "fog",
//   "lada",
//   "moveArea",
//   "atkArea",
//   "road",
//   "atkTarget",
//   "commanderhalo",
//   "speakUnit",
//   "taskTarget",
//   "unloadArea",
//   "sortieArea",
//   "sortieRoads",
// ];
// export const BattleUnitTypes = <const>[
//   "footmen",
//   "B2",
//   "CV",
//   "aagun",
//   "battleship",
//   "bigtank",
//   "missileship",
//   "chariot",
//   "conveyor",
//   "destroyer",
//   "fighter",
//   "gunnery",
//   "helicopter",
//   "howitzer",
//   "launchV",
//   "scout",
//   "submarine",
//   "tank",
//   "thaad",
//   "transportship",
//   "motorcycle",
//   "elite",
//   "aew",
//   "transport",
// ];
// const PlayerFlagTypes = <const>["red", "blue", "green", "yellow"];
// const BattleUnitStateTypes = <const>[
//   "loading",
//   "bullet",
//   "occupy",
//   "oil",
//   "supplies",
//   "diving",
//   "stealth",
// ];
// const BattleUniRightItemTypes = <const>[
//   "wait",
//   "attack",
//   "dive",
//   "load",
//   "unload",
//   "buy",
//   "supply",
//   "occupy",
// ];
// // const BEActionTypes = <const>["wait" , 'attack' , "load" , 'unload',"occupy" , "supply" , "diving" , "buy"]
// /**
//  * ele geo props
//  */
//  export interface BattleBuildProps {
//   type: typeof BattleBuildTypes[number];
//   flag: typeof PlayerFlagTypes[number];
//   posId: number;
// }
// /**
//  * ele unit props
//  */
// export interface BattleUnitProps {
//   type: typeof BattleUnitTypes[number];
//   blood: number;
//   bullet: number;
//   oil: number;
//   supply: Record<number, number>;
//   loadings: BattleUnitProps[];
//   moved: boolean;
//   isDiving: boolean;
//   flag: typeof PlayerFlagTypes[number];
//   occupied: number;
// }
// /**
//  * interface：地图类型
//  */
// export interface BattleMapProps {
//   geoLayer: Array<number>;
//   landMarkI: Record<number, string>;
//   buildLayer: Record<number, BattleBuildProps>;
//   // landMarkLayer: Record<number, BattleLandMarkType>,
//   // landInfoLayer: Record<number, string>,
//   landMarkII: Record<number, string>;
//   unitLayer: Record<number, BattleUnitProps>;
//   // unitMarkLayer: Record<number, number>,
//   // unitInfoLayer: Record<number, string>,
//   landMarkIII: Record<number, string>;
//   sizeState: Record<"x" | "y" | "scale" | "width" | "height", number>;
//   setting?: BattleMapSetting;
//   globalSetting: {
//     dailyMoney: number;
//     cities: number;
//     bouts: number;
//     fogOpen: boolean;
//     weather: string;
//     aliLvl: string;
//   };
//   playerSetting: Record<string, BattlePlayerProps>;
// }
// interface BattlePlayerProps {
//   enemies: typeof PlayerFlagTypes[number][];
//   taskBg: string;
//   taskTarget: string;
//   commanders: string[];
//   nowMoney: number;
// }
// interface BattlePlayerGradeProps {
//   allUnitMoney: number;
//   nowUnitMoney: number;
//   lostUnitMoney: number;
//   destroyUnitMoney: number;
// }
// interface BattleMapSetting {
//   roomName: string;
//   roomOwner: string;
//   roomOwnerId: string;
//   dailyMoney: number;
//   cities: number;
//   bouts: number;
//   fogOpen: boolean;
//   weather: string;
//   aiLevel: string;
//   legalHero: string[];
//   players: Record<
//     string,
//     { userId: string | null; userName: string; hero: string }
//   >;
//   users: Array<{
//     flag: string;
//     userId: string | undefined;
//     userName: string;
//     hero: string;
//   }>;
// }
// /*******************************************************************/
// ///////////////////////     定义状态                   ///////////////
// /*******************************************************************/
// enum BattleStateType {
//   blank,
//   moveAreaShow,
//   atkAreaShow,
//   unitInfoShow,
//   rightMenu,
//   roadsShow,
//   targetShow,
//   sortieMenu,
//   sortieArea,
//   sortieRoads,
//   buy,
//   supply,
// }
// /******************************************************************/
// ///////////////////////     事件类型                   //////////////
// /******************************************************************/
// enum BattleEventType {
//   toPrim,
//   spriteClicked,
//   showMoveArea,
//   ShowTargetArea,
//   ShowRoadChoose,
//   rightMenuClicked,
//   setSupply,
//   inputChagned,
//   itemClicked,
//   chatMessage,
//   action,
// }
// interface BEItnEmpty {
//   type: BattleEventType.toPrim;
// }
// interface BEItnSpriteClicked {
//   type: BattleEventType.spriteClicked;
//   sprite: BattleEleUnit | BattleEleGeo | BattleEleLandMark;
//   blockType: "unit" | "build" | "landMark";
// }
// interface BEItnShowArea {
//   type: BattleEventType.ShowTargetArea | BattleEventType.showMoveArea;
//   sprite: BattleEleUnit | BattleEleGeo | egret.Sprite;
//   areas: number[];
// }
// interface BEItnShowRoadChoose {
//   type: BattleEventType.ShowRoadChoose;
//   sprite: BattleEleUnit | BattleEleGeo | egret.Sprite;
//   roads: Array<Array<number>>;
// }
// interface BEItnRightMenuClicked {
//   type: BattleEventType.rightMenuClicked;
//   key: typeof BattleUniRightItemTypes[number] | string;
// }
// interface BEItnSetSupply {
//   type: BattleEventType.setSupply;
//   data: Record<number, { price: number; useMoney: number }>;
// }
// interface BEItnInputChange {
//   type: BattleEventType.inputChagned;
//   key: number;
//   value: string;
// }
// interface BEItnItemClicked {
//   type: BattleEventType.itemClicked;
//   key: number;
//   // value
// }
// interface BEItnChatMessage {
//   type: BEOthersType.chatMsg;
//   from: string;
//   to: string;
//   message: string;
//   time: number;
// }
// type BEItns =
//   | BEItnEmpty
//   | BEItnSpriteClicked
//   | BEItnShowArea
//   | BEItnShowRoadChoose
//   | BEItnRightMenuClicked
//   | BEItnItemClicked
//   | BEItnSetSupply
//   | BEItnInputChange
//   | BEItnChatMessage
//   | BEItnInputChange;
// /******************************************************************/
// /******************************动作，action************************/
// /******************************************************************/
// enum BEActionType {
//   wait="wati",
//   attack="attack",
//   load="load",
//   unload="unload",
//   occupy="occupy",
//   supply="supply",
//   diving="diving",
//   buy="buy",
//   sortie="sortie",
// }
// interface BEActionWait {
//   type: BEActionType.wait;
//   road: number[];
//   restOil: number;
//   encountered: boolean;
// }
// interface BEActionAtk {
//   type: BEActionType.attack;
//   road: number[];
//   restOil: number;
//   restBullet: number;
//   restBlood: number;
//   targetId: number;
//   targetRestBullet: number;
//   targetRestBlood: number;
// }
// interface BEActionLoad {
//   type: BEActionType.load;
//   road: number[];
//   restOil: number;
// }
// interface BEActionSortie {
//   type: BEActionType.sortie;
//   road: number[];
//   restOil: number;
//   childrenId: number;
//   nowLoading: BattleUnitProps[];
// }
// interface BEActionOccupy {
//   type: BEActionType.occupy;
//   road: number[];
//   restOil: number;
//   occupy: number;
// }
// interface BEActionDive {
//   type: BEActionType.diving;
//   road: number[];
//   restOil: number;
//   diving: boolean;
// }
// // 连个特殊的action
// interface BEActionSupply {
//   type: BEActionType.supply;
//   /**
//    * 暂约定最后这个
//    */
//   targetIds: number[];
//   supply: Record<string, number>;
// }
// interface BEActionBuy {
//   type: BEActionType.buy;
//   // typeName: typeof BattleUnitTypes[number],
//   posId: number;
//   unit: BattleUnitProps;
// }
// type BEActions =
//   | BEActionWait
//   | BEActionAtk
//   | BEActionOccupy
//   | BEActionLoad
//   | BEActionSortie
//   | BEActionDive
//   | BEActionSupply
//   | BEActionBuy;
// enum BEOthersType {
//   chatMsg,
//   boutEnd,
//   aiCall,
//   updateMap,
// }
// interface BEChatMsg {
//   type: BEOthersType.chatMsg;
//   from: string;
//   to: string;
//   time: number;
//   message: string;
// }
// interface BEBoundEnd {
//   type: BEOthersType.boutEnd;
// }
// interface BEAICall {
//   type: BEOthersType.aiCall;
// }
// interface BEUpdateMap {
//   type: BEOthersType.updateMap;
// }
// enum BESocketType {}
// type BESockets = BEActions | BEAICall | BEChatMsg | BEBoundEnd | BEUpdateMap;
// /**
//  * event, 事件  == 信道
//  */
// class BattleEvent extends egret.Event {
//   public static readonly DATE: string = "battleEvent";
//   // public _type: BattleEventType;
//   public _data: BEItns | BESockets;
//   public constructor(
//     type: string = BattleEvent.DATE,
//     bubbles: boolean = false,
//     cancelable: boolean = false
//   ) {
//     super(type, bubbles, cancelable);
//   }
// }
// /**
//  * 地形对象
//  */
// class BattleEleGeo extends egret.Sprite {
//   public movieclip: egret.MovieClip;
//   public movieFlag: string;
//   public readonly typeName: string;
//   // public posId: number;
//   constructor(typeName: string) {
//     super();
//     this.width = BLOCK_WIDTH;
//     this.height = BLOCK_WIDTH;
//     this.typeName = typeName;
//     this.initMovieClip();
//   }
//   protected initMovieClip() {
//     this.movieclip = ResourceManager.getGeoMovieClip(
//       this.typeName,
//       ResourceManager.geoTypeCode[this.typeName]
//     );
//     this.movieFlag = ResourceManager.geoTypeCode[this.typeName];
//     this.addChildAt(this.movieclip, 0);
//     this.movieclip.gotoAndPlay("stand");
//   }
//   /**
//    * swap
//    */
//   public swapMovieFlag(flag: string) {
//     this.removeChild(this.movieclip);
//     this.movieclip = ResourceManager.getGeoMovieClip(this.typeName, flag);
//     this.movieFlag = flag;
//     this.addChildAt(this.movieclip, 0);
//     this.movieclip.gotoAndPlay("stand");
//     this.addChildAt(this.movieclip, 0);
//   }
// }
// /**
//  * landmark对象
//  */
// class BattleEleLandMark extends BattleEleGeo {
//   public posId: number;
//   constructor(
//     typeName: typeof BattleLandMarkTypes[number],
//     posId: number,
//     canListen = true
//   ) {
//     super(typeName);
//     this.posId = posId;
//     // type
//     this.graphics.beginFill(0xff3344, 0.2);
//     this.graphics.drawRect(0, 0, BLOCK_WIDTH, BLOCK_WIDTH);
//     this.graphics.endFill();
//     this.alpha = 0.3;
//     if (canListen) {
//       this.touchEnabled = true;
//       this.addEventListener(
//         egret.TouchEvent.TOUCH_TAP,
//         this.handleClicked,
//         this
//       );
//     }
//   }
//   protected initMovieClip(): void {
//     this.graphics.beginFill(0xff4433);
//     this.graphics.drawRect(0, 0, this.width, this.height);
//     this.graphics.endFill();
//   }
//   public swapMovieFlag(flag: string): void {
//     return;
//   }
//   protected handleClicked(evt: egret.TouchEvent) {
//     let outer_event = new BattleEvent();
//     outer_event._data = {
//       type: BattleEventType.spriteClicked,
//       sprite: this,
//       blockType: "landMark",
//     };
//     this.dispatchEvent(outer_event);
//   }
// }
// /**
//  * 建筑对象
//  */
// class BattleEleBuild extends BattleEleGeo {
//   public posId: number;
//   constructor(typeName: string, posId: number) {
//     super(typeName);
//     this.posId = posId;
//     this.touchEnabled = true;
//     this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleClicked, this);
//   }
//   protected initMovieClip(): void {
//     this.movieclip = ResourceManager.getBuildMovieClip(
//       this.typeName,
//       PlayerFlagTypes[0]
//     );
//     this.addChildAt(this.movieclip, 0);
//     this.movieclip.gotoAndPlay("stand");
//   }
//   public swapMovieFlag(flag: string): void {
//     this.removeChild(this.movieclip);
//     this.movieclip = ResourceManager.getBuildMovieClip(this.typeName, flag);
//     this.movieFlag = flag;
//     this.addChildAt(this.movieclip, 0);
//     this.movieclip.gotoAndPlay("stand");
//     this.addChildAt(this.movieclip, 0);
//   }
//   protected handleClicked(evt: egret.TouchEvent) {
//     let outer_event = new BattleEvent();
//     outer_event._data = {
//       type: BattleEventType.spriteClicked,
//       sprite: this,
//       blockType: "build",
//     };
//     this.dispatchEvent(outer_event);
//   }
//   public collectData(): BattleBuildProps {
//     return {
//       type: this.typeName as typeof BattleBuildTypes[number],
//       flag: this.movieFlag as typeof PlayerFlagTypes[number],
//       posId: this.posId,
//     };
//   }
// }
// /**
//  * 单位对象
//  */
// class BattleEleUnit extends BattleEleBuild {
//   public visibleUsers: number[];
//   private data: BattleUnitProps;
//   private unitStateView: egret.Bitmap;
//   private unitStates: typeof BattleUnitStateTypes[number][];
//   private unitStates_nowPoint: number;
//   private numberStateView: egret.Bitmap;
//   public aiFromNote: number;
//   public aiToNote: number;
//   constructor(typeNmae: string, posId: number, data: BattleUnitProps) {
//     super(typeNmae, posId);
//     this.data = data;
//     // let txtr: egret.Texture = ResourceManager.getUnitStateTexture('oil');
//     this.unitStateView = new egret.Bitmap();
//     this.unitStateView.scaleX = 0.4;
//     this.unitStateView.scaleY = 0.4;
//     this.unitStateView.x = this.width * (0.6 - 0.1);
//     this.unitStateView.y = this.height * (0.6 - 0.1);
//     this.addChildAt(this.unitStateView, 1);
//     let txtr: egret.Texture = ResourceManager.getNumberTexture(data.bullet);
//     this.numberStateView = new egret.Bitmap(txtr);
//     this.numberStateView.scaleX = 0.8;
//     this.numberStateView.scaleY = 0.8;
//     this.numberStateView.y = this.height * (0.6 - 0.1);
//     this.numberStateView.x = this.height * 0.1;
//     this.addChildAt(this.numberStateView, 2);
//     this.countUnitStates();
//     this.updateCustomFps();
//   }
//   protected initMovieClip(): void {
//     this.movieclip = ResourceManager.getUnitMovieClip(
//       this.typeName,
//       PlayerFlagTypes[0]
//     );
//     this.addChildAt(this.movieclip, 0);
//     this.movieclip.gotoAndPlay("stand");
//   }
//   public swapMovieFlag(flag: string): void {
//     this.removeChild(this.movieclip);
//     this.movieclip = ResourceManager.getUnitMovieClip(this.typeName, flag);
//     this.movieFlag = flag;
//     this.addChildAt(this.movieclip, 0);
//     this.movieclip.gotoAndPlay("stand");
//     this.addChildAt(this.movieclip, 0);
//   }
//   protected handleClicked(evt: egret.TouchEvent): void {
//     let outer_event = new BattleEvent();
//     outer_event._data = {
//       type: BattleEventType.spriteClicked,
//       sprite: this,
//       blockType: "unit",
//     };
//     // console.log('hihi')
//     this.dispatchEvent(outer_event);
//   }
//   public collectionData() {
//     return this.data;
//   }
//   private countUnitStates() {
//     let new_state: typeof BattleUnitStateTypes[number][] = [];
//     if (
//       this.oil <=
//       (StaticDataManager.unit[this.typeName]["engineOil"] as number) * 0.4
//     ) {
//       new_state.push("oil");
//     }
//     if (
//       this.bullet <=
//       (StaticDataManager.unit[this.typeName]["bullet"] as number) * 0.4
//     ) {
//       new_state.push("bullet");
//     }
//     if (Object.keys(this.supply).length !== 0) {
//       new_state.push("supplies");
//     }
//     if (this.loadings.length !== 0) {
//       new_state.push("loading");
//     }
//     if (this.isDiving) {
//       new_state.push("diving");
//     }
//     this.unitStates = new_state;
//     this.unitStates_nowPoint = 0;
//     if (new_state.length === 0) {
//       this.unitStateView.visible = false;
//     } else {
//       this.unitStateView.visible = true;
//     }
//   }
//   public updateCustomFps() {
//     if (this.unitStates.length !== 0) {
//       this.unitStateView.texture = ResourceManager.getUnitStateTexture(
//         this.unitStates[this.unitStates_nowPoint]
//       );
//       this.unitStates_nowPoint =
//         (this.unitStates_nowPoint + 1) % this.unitStates.length;
//     }
//   }
//   public updateByProps(props: BattleUnitProps) {
//     this.blood = props.blood;
//     this.oil = props.oil;
//     this.bullet = props.bullet;
//     this.supply = props.supply;
//     this.loadings = props.loadings;
//     this.moved = props.moved;
//     this.isDiving = props.isDiving;
//     this.occupied = props.occupied;
//   }
//   // 监听属性变化
//   public get blood() {
//     return this.data.blood;
//   }
//   public set blood(blood: number) {
//     this.data.blood = Math.round(blood);
//     if (Math.round(blood) === 10) {
//       this.numberStateView.visible = false;
//     } else {
//       this.numberStateView.visible = true;
//     }
//   }
//   public get oil() {
//     return this.data.oil;
//   }
//   public set oil(v: number) {
//     this.data.oil = v;
//     this.countUnitStates();
//   }
//   public get bullet() {
//     return this.data.bullet;
//   }
//   public set bullet(v: number) {
//     this.data.bullet = v;
//     this.countUnitStates();
//   }
//   public get supply() {
//     return this.data.supply;
//   }
//   public set supply(v: Record<number, number>) {
//     this.data.supply = v;
//     this.countUnitStates();
//   }
//   public get loadings() {
//     return this.data.loadings;
//   }
//   public set loadings(v: BattleUnitProps[]) {
//     this.data.loadings = v;
//     this.countUnitStates();
//   }
//   public get moved() {
//     return this.data.moved;
//   }
//   public set moved(v: boolean) {
//     this.data.moved = v;
//     if (v) {
//       this.movieclip.gotoAndPlay("gray");
//     }
//   }
//   public get isDiving() {
//     return this.data.isDiving;
//   }
//   public set isDiving(v: boolean) {
//     this.data.isDiving = v;
//     this.countUnitStates();
//   }
//   public set occupied(v: number) {
//     this.data.occupied = v;
//     this.countUnitStates();
//   }
//   public get occupied() {
//     return this.data.occupied;
//   }
// }
// // type BattleStateType = '' | 'moveAreaShow' | 'atkAreaShow' | 'roadsShow'
// /**
//  * main, map
//  */
// class BattleMapView extends egret.DisplayObjectContainer {
//   // public static nowState: BattleStateType = BattleStateType.blank;
//   public baseLayer: egret.Sprite;
//   public geoLayer: egret.DisplayObjectContainer;
//   public landMarkLayerI: egret.DisplayObjectContainer; // 作废
//   public buildLayer: egret.DisplayObjectContainer;
//   public landMarkLayerII: egret.DisplayObjectContainer; // 作废
//   public unitLayer: egret.DisplayObjectContainer;
//   public landMarkLayerIII: egret.DisplayObjectContainer; // 作废
//   public fogLayer: egret.DisplayObjectContainer;
//   public coverLayer: egret.DisplayObjectContainer;
//   public mapCollected: boolean;
//   private unitCacheUpdated: boolean;
//   public unitCache: Record<number, BattleEleUnit>;
//   private buildCacheUpdated: boolean;
//   public buildCache: Record<number, BattleEleBuild>;
//   /**
//    * 只起缓存作用的变量
//    */
//   public mapData: BattleMapProps;
//   public normalCoverData: {
//     color: number;
//     alpha: number;
//     width: number;
//     areas: number[];
//   }[] = [];
//   constructor() {
//     super();
//     this.mapCollected = false;
//     this.unitCacheUpdated = false;
//     this.unitCache = {};
//     this.buildCacheUpdated = false;
//     this.buildCache = {};
//     this.baseLayer = new egret.Sprite();
//     this.geoLayer = new egret.DisplayObjectContainer();
//     this.buildLayer = new egret.DisplayObjectContainer();
//     // this.landMarkLayer = new egret.DisplayObjectContainer();
//     this.unitLayer = new egret.DisplayObjectContainer();
//     this.coverLayer = new egret.DisplayObjectContainer();
//     this.fogLayer = new egret.DisplayObjectContainer();
//     this.addChild(this.baseLayer);
//     this.addChild(this.geoLayer);
//     this.addChild(this.buildLayer);
//     this.addChild(this.unitLayer);
//     this.addChild(this.fogLayer);
//     this.addChild(this.coverLayer);
//   }
//   /**
//    * collectMap
//    */
//   public collectMap() {
//     if (this.mapCollected) {
//       return this.mapData;
//     }
//     this.unitCacheUpdated = true;
//     this.mapCollected = true;
//     this.buildCacheUpdated = true;
//     // geo
//     let tmp_geo = [];
//     let tmp_geo_data = {};
//     for (let i in BattleGeoTypes) {
//       tmp_geo_data[BattleGeoTypes[i]] = i;
//     }
//     for (let i = 0; i < this.geoLayer.numChildren; ++i) {
//       let tmp_obj: BattleEleGeo = this.geoLayer.getChildAt(i) as BattleEleGeo;
//       tmp_geo.push(tmp_geo_data[tmp_obj.typeName]);
//     }
//     this.mapData.geoLayer = tmp_geo;
//     let tmp_build: Record<number, BattleBuildProps> = {};
//     let tmp_build_cache: Record<number, BattleEleBuild> = {};
//     for (let i = 0; i < this.buildLayer.numChildren; ++i) {
//       let _child: BattleEleBuild = this.buildLayer.getChildAt(
//         i
//       ) as BattleEleBuild;
//       tmp_build[_child.posId] = _child.collectData();
//       tmp_build_cache[_child.posId] = _child;
//     }
//     // unit
//     let tmp_unit: Record<number, BattleUnitProps> = {};
//     let tmp_unit_cache: Record<number, BattleEleUnit> = {};
//     for (let i = 0; i < this.unitLayer.numChildren; ++i) {
//       let _child: BattleEleUnit = this.unitLayer.getChildAt(i) as BattleEleUnit;
//       tmp_unit[_child.posId] = _child.collectionData();
//       tmp_unit_cache[_child.posId] = _child;
//     }
//     this.unitCache = tmp_unit_cache;
//     this.mapData.buildLayer = tmp_build;
//     this.buildCache = tmp_build_cache;
//     this.mapData.unitLayer = tmp_unit;
//     this.mapData.sizeState.x = this.x;
//     this.mapData.sizeState.y = this.y;
//     this.mapData.sizeState.scale = this.scaleX;
//     return this.mapData;
//   }
//   /**
//    * update
//    */
//   public updateUnitCache() {
//     if (this.unitCacheUpdated) {
//       return;
//     }
//     this.unitCacheUpdated = true;
//     let tmp: Record<number, BattleEleUnit> = {};
//     for (let i = 0; i < this.unitLayer.numChildren; ++i) {
//       let tmp_obj = this.unitLayer.getChildAt(i) as BattleEleUnit;
//       tmp[tmp_obj.posId] = tmp_obj;
//     }
//     this.unitCache = tmp;
//   }
// }
// /**********************************************************************/
// // --------------------ui interaction 用户交互------------------------ //
// ////////////////////////////////////////////////////////////////////////
// class BCRightMenu extends eui.Component implements eui.UIComponent {
//   /**
//    * string []
//    */
//   public data: eui.ArrayCollection;
//   private scrollArea: eui.Scroller;
//   private container: eui.Group;
//   // private functions: Function[];
//   constructor() {
//     super();
//     // this.functions = [];
//     this.top = 100;
//     this.bottom = 50;
//     this.right = 200;
//     this.data = new eui.ArrayCollection([
//       "111",
//       "222",
//       "333",
//       "444",
//       "555",
//       "666",
//     ]);
//     this.data.addEventListener(
//       eui.CollectionEvent.COLLECTION_CHANGE,
//       this.collectionChangeHandler,
//       this
//     );
//     this.scrollArea = new eui.Scroller();
//     this.container = new eui.Group();
//     this.scrollArea.height = 400;
//     // this.scrollArea.width = 200;
//     this.scrollArea.viewport = this.container;
//     this.addChild(this.scrollArea);
//     let layout = new eui.VerticalLayout();
//     layout.gap = 10;
//     layout.horizontalAlign = egret.HorizontalAlign.CENTER;
//     this.container.layout = layout;
//   }
//   private collectionChangeHandler(evt: eui.CollectionEvent): void {
//     this.container.removeChildren();
//     let count = 0;
//     for (let i of evt.target.source) {
//       let tmp_obj = new eui.Label(i);
//       tmp_obj.size = 60;
//       this.container.addChildAt(tmp_obj, count++);
//       let tmp_func = this.handleClicked.bind(this, i);
//       tmp_obj.addEventListener(egret.TouchEvent.TOUCH_TAP, tmp_func, this);
//     }
//   }
//   private handleClicked(key: string, evt: egret.TouchEvent) {
//     let outer_event = new BattleEvent();
//     outer_event._data = {
//       type: BattleEventType.rightMenuClicked,
//       key,
//     };
//     this.dispatchEvent(outer_event);
//   }
//   /**
//      * swapMenuData
// newData     */
//   public swapMenuData(newData: string[]) {
//     this.data.removeAll();
//     for (let i in newData) {
//       this.data.addItem(newData[i]);
//     }
//   }
// }
// class BCUnitInfo extends eui.Component implements eui.UIComponent {
//   public textArea: eui.Label;
//   public data: eui.ArrayCollection;
//   constructor() {
//     super();
//     this.y = 50;
//     this.x = 100;
//     this.textArea = new eui.Label();
//     this.data = new eui.ArrayCollection([]);
//     this.data.addEventListener(
//       eui.CollectionEvent.COLLECTION_CHANGE,
//       this.collectionChangeHandler,
//       this
//     );
//   }
//   private collectionChangeHandler(evt: eui.CollectionEvent): void {
//     this.textArea.textFlow = evt.target.source;
//   }
//   protected childrenCreated(): void {
//     super.childrenCreated();
//   }
//   public set text(text: Array<egret.ITextElement>) {
//     // console.log(text, 'text')
//     // this.textArea.textFlow = text;
//     // this.textArea.textFlow
//     this.data.removeAll();
//     for (let i in text) {
//       this.data.addItem(text[i]);
//       // console.log('i', i);
//     }
//   }
//   public get text() {
//     return this.textArea.textFlow;
//   }
// }
// class BCSetSupplyItem extends eui.Component implements eui.UIComponent {
//   public unitImage: eui.Image;
//   public priceLabel: eui.Label;
//   public nameLabel: eui.Label;
//   private inputLabel: eui.EditableText;
//   public key: number;
//   protected childrenCreated(): void {
//     super.childrenCreated();
//     this.inputLabel.inputType = egret.TextFieldInputType.TEL;
//     this.inputLabel.addEventListener(
//       egret.Event.CHANGE,
//       this.handleChange,
//       this
//     );
//   }
//   private handleChange(evt: egret.Event) {
//     console.log(evt, this.inputLabel.text);
//   }
//   public getNumMoney() {
//     let rlt = parseInt(this.inputLabel.text);
//     if (isNaN(rlt)) {
//       rlt = 0;
//     }
//     return rlt;
//   }
//   public getNumPrice() {
//     let rlt = parseInt(this.priceLabel.text);
//     if (isNaN(rlt)) {
//       rlt = 0;
//     }
//     return rlt;
//   }
// }
// class BCSetSupply extends eui.Component implements eui.UIComponent {
//   private container: eui.Group;
//   private allMoneyLabel: eui.Label;
//   private forecastMoney: eui.Label;
//   private sureButton: eui.Button;
//   private autoDealButton: eui.Button;
//   protected childrenCreated(): void {
//     super.childrenCreated();
//     this.x = 100;
//     this.y = 50;
//     this.allMoneyLabel.text = "0";
//     this.forecastMoney.text = "0";
//     this.autoDealButton.addEventListener(
//       egret.TouchEvent.TOUCH_CANCEL,
//       this.handleAutoDeal,
//       this
//     );
//     this.sureButton.addEventListener(
//       egret.TouchEvent.TOUCH_CANCEL,
//       this.handleSure,
//       this
//     );
//     this.container.addChild(new BCSetSupplyItem());
//     this.container.addChild(new BCSetSupplyItem());
//     this.container.addChild(new BCSetSupplyItem());
//     this.container.addChild(new BCSetSupplyItem());
//     this.container.addChild(new BCSetSupplyItem());
//     this.container.addChild(new BCSetSupplyItem());
//     this.container.addChild(new BCSetSupplyItem());
//     this.container.addChild(new BCSetSupplyItem());
//     this.container.addChild(new BCSetSupplyItem());
//     this.container.addChild(new BCSetSupplyItem());
//   }
//   public set data(data: Record<number, { price: number; useMoney: number }>) {
//     this.container.removeChildren();
//     for (let i in data) {
//       let tmp_obj = new BCSetSupplyItem();
//       tmp_obj.key = parseInt(i);
//       tmp_obj.priceLabel.text = data[i].price.toString();
//       // sdkljfskldjfweoir
//       this.container.addChild(tmp_obj);
//     }
//   }
//   private handleAutoDeal(evt: egret.TouchEvent) {
//     // pass
//   }
//   private handleSure(evt: egret.TouchEvent) {
//     let rlt: Record<number, { price: number; useMoney: number }> = {};
//     for (let i = 0; i < this.container.numChildren; ++i) {
//       let tmp_obj = this.container.getChildAt(i) as BCSetSupplyItem;
//       rlt[tmp_obj.key] = {
//         price: tmp_obj.getNumPrice(),
//         useMoney: tmp_obj.getNumMoney(),
//       };
//     }
//     let outer_event = new BattleEvent();
//     outer_event._data = {
//       type: BattleEventType.setSupply,
//       data: rlt,
//     };
//     this.dispatchEvent(outer_event);
//   }
// }
// class BCBuyItem extends eui.Component implements eui.UIComponent {
//   public unitImage: eui.Image;
//   public priceLabel: eui.Label;
//   public nameLabel: eui.Label;
//   public key: number;
//   private sureButton: eui.Button;
//   protected childrenCreated(): void {
//     super.childrenCreated();
//     this.sureButton.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.handleSure,
//       this
//     );
//   }
//   private handleSure(evt: egret.Event) {
//     let outer_event = new BattleEvent();
//     outer_event._data = {
//       type: BattleEventType.itemClicked,
//       key: this.key,
//     };
//     this.dispatchEvent(outer_event);
//   }
// }
// class BCBuy extends eui.Component implements eui.UIComponent {
//   private container: eui.Group;
//   protected childrenCreated(): void {
//     super.childrenCreated();
//     this.x = 100;
//     this.y = 50;
//     let tmp_data: Record<number, number> = {};
//     for (let i = 0; i < 20; ++i) {
//       tmp_data[i] = i;
//     }
//     this.data = tmp_data;
//   }
//   public set data(data: Record<number, number>) {
//     this.container.removeChildren();
//     for (let i in data) {
//       let tmp_obj = new BCBuyItem();
//       tmp_obj.key = parseInt(i);
//       // tmp_obj.priceLabel.text = data[i].toString();
//       this.container.addChild(tmp_obj);
//       tmp_obj.addEventListener(BattleEvent.DATE, this.itemClicked, this);
//     }
//   }
//   private itemClicked(evt: BattleEvent) {
//     console.log(evt, "my evt");
//     this.dispatchEvent(evt);
//   }
// }
// class BCGuideBook extends eui.Component implements eui.UIComponent {
//   private textArea: eui.Label;
//   private menuContainer: eui.Group;
//   private _data: Record<string, Array<egret.ITextElement>>;
//   protected childrenCreated(): void {
//     super.childrenCreated();
//     this.y = 50;
//     this.x = 100;
//     // return
//     this.data = {
//       aaa: [
//         { text: "Text in ", style: { size: 20 } },
//         {
//           text: "Egret",
//           style: {
//             textColor: 0x336699,
//             size: 60,
//             strokeColor: 0x6699cc,
//             stroke: 2,
//           },
//         },
//         { text: " can ", style: { fontFamily: "Impact" } },
//         { text: "be set ", style: { fontFamily: "Times New Roman" } },
//         { text: "to a ", style: { textColor: 0xff0000 } },
//         { text: "\n" },
//         { text: "variety ", style: { textColor: 0x00ff00 } },
//         { text: "of ", style: { textColor: 0xf000f0 } },
//         { text: "styles ", style: { textColor: 0x00ffff } },
//         { text: "with", style: { size: 56 } },
//         { text: "different ", style: { size: 16 } },
//         { text: "colors, ", style: { size: 26 } },
//         { text: "\n" },
//         { text: "fonts ", style: { italic: true, textColor: 0x00ff00 } },
//         { text: "and ", style: { size: 26, textColor: 0xf000f0 } },
//         { text: "sizes", style: { italic: true, textColor: 0xf06f00 } },
//       ],
//       bbb: [],
//       bb2b: [],
//       bb3b: [],
//       bb4b: [],
//       bb5b: [],
//       bbfb: [],
//       bbsb: [],
//       bbqb: [],
//       bbsib: [],
//       b1bb: [],
//       bb12b: [],
//       bb13b: [],
//       bb14b: [],
//       bb15b: [],
//       b1bfb: [],
//       b1bsb: [],
//       b1bqb: [],
//       bb1sib: [],
//     };
//   }
//   public set data(data: Record<string, Array<egret.ITextElement>>) {
//     this._data = data;
//     this.menuContainer.removeChildren();
//     for (let i in data) {
//       let tmp_obj = new eui.Label();
//       tmp_obj.text = i;
//       this.menuContainer.addChild(tmp_obj);
//       tmp_obj.addEventListener(
//         egret.TouchEvent.TOUCH_TAP,
//         this.swapView.bind(this, i),
//         this
//       );
//     }
//     console.log("before", this.textArea.textFlow);
//     if (Object.keys(data).length === 0) {
//       this.textArea.textFlow = [];
//     } else {
//       this.textArea.textFlow = data[Object.keys(data)[0]];
//     }
//     console.log("after", this.textArea.textFlow);
//   }
//   /**
//    * swapView
//    */
//   public swapView(key: string, evt: egret.TouchEvent) {
//     console.log("click", key, this._data[key]);
//     this.textArea.textFlow = this._data[key];
//     // this.textArea.text
//   }
// }
// class BCSetting extends eui.Component implements eui.UIComponent {
//   private musicSwitchButton: eui.Button;
//   private upMusicButton: eui.Button;
//   private downMusicButton: eui.Button;
//   private musicNameLabel: eui.Label;
//   private bgMusicSlider: eui.HSlider;
//   private soundSlider: eui.HSlider;
//   private storyVolSlider: eui.HSlider;
//   private chatVolSlider: eui.HSlider;
//   public saveRecentButton: eui.Button;
//   public saveNewButton: eui.Button;
//   public exitButton: eui.Button;
//   constructor() {
//     super();
//     this.exitButton = new eui.Button();
//   }
//   protected childrenCreated(): void {
//     super.childrenCreated();
//     this.x = 100;
//     this.y = 50;
//     this.exitButton.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.handleExitButton,
//       this
//     );
//     this.saveNewButton.visible = false;
//     this.saveRecentButton.visible = false;
//   }
//   private handleExitButton() {
//     let outer_evt = new GuiEvent();
//     outer_evt._data = {
//       type: GuiEventType.toMain,
//     };
//     this.dispatchEvent(outer_evt);
//   }
// }
// class BCChat extends eui.Component implements eui.UIComponent {
//   private textArea: eui.Label;
//   private forbiddenButton: eui.Button;
//   private chooseUserButton: eui.Button;
//   private chooseTypeButton: eui.Button;
//   private inputButton: eui.EditableText;
//   private sendButton: eui.Button;
//   private allUsers: Record<string, string[]>;
//   private typePoint: number;
//   private userPoint: number;
//   public isForbiddened: boolean;
//   constructor() {
//     super();
//     this.textArea = new eui.Label();
//     this.forbiddenButton = new eui.Button();
//     this.chooseTypeButton = new eui.Button();
//     this.chooseUserButton = new eui.Button();
//     this.inputButton = new eui.EditableText();
//     this.sendButton = new eui.Button();
//   }
//   protected childrenCreated(): void {
//     super.childrenCreated();
//     this.x = 100;
//     this.y = 50;
//     this.chooseTypeButton.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.handleSwapType,
//       this
//     );
//     this.chooseUserButton.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.handleSwapUser,
//       this
//     );
//     this.sendButton.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.handleSend,
//       this
//     );
//     this.forbiddenButton.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.handleForbidden,
//       this
//     );
//     this.allUsers = {
//       公开: ["投降"],
//       通道: ["red", "blue", "green", "yellow"],
//     };
//     this.chooseTypeButton.label = "公开";
//     this.chooseUserButton.label = "投降";
//     this.typePoint = 0;
//     this.userPoint = 0;
//   }
//   private handleSwapType(evt: egret.TouchEvent) {
//     let userTypes = Object.keys(this.allUsers);
//     this.typePoint = (this.typePoint + 1) % userTypes.length;
//     this.chooseTypeButton.label = userTypes[this.typePoint];
//     this.userPoint = 0;
//     this.chooseUserButton.label = this.allUsers[userTypes[this.typePoint]][0];
//   }
//   private handleSwapUser(evt: egret.TouchEvent) {
//     let userTypes = Object.keys(this.allUsers);
//     let users = this.allUsers[userTypes[this.typePoint]];
//     this.userPoint = (this.userPoint + 1) % users.length;
//     this.chooseUserButton.label = users[this.userPoint];
//   }
//   private handleSend(evt: egret.TouchEvent) {
//     if (this.isForbiddened) {
//       return;
//     }
//     let event = new BattleEvent();
//     event._data = {
//       type: BEOthersType.chatMsg,
//       from: "",
//       to: this.chooseUserButton.label,
//       message: this.inputButton.text,
//       time: new Date().getTime(),
//     };
//     this.inputButton.text = "";
//     this.dispatchEvent(event);
//   }
//   /**
//    * 来自服务器的数据
//    */
//   public send(msg: BEChatMsg) {
//     console.log("send", msg);
//   }
//   private handleForbidden(evt: egret.TouchEvent) {
//     this.isForbiddened = !(this.forbiddenButton.currentState === "up");
//   }
// }
// class BCChatMessages extends eui.Component implements eui.UIComponent {
//   private label: eui.Label;
//   public _data: BEChatMsg[];
//   private timer: egret.Timer;
//   constructor() {
//     super();
//     this.label = new eui.Label();
//     this._data = [];
//     this.timer = new egret.Timer(1000, 0);
//   }
//   protected childrenCreated(): void {
//     super.childrenCreated();
//     this.x = this.y = 10;
//     this.timer.addEventListener(
//       egret.TimerEvent.TIMER,
//       this.clearMessage,
//       this
//     );
//     this.timer.start();
//   }
//   public putMessage(info: BEChatMsg[]) {
//     this._data = [...info, ...this._data];
//     this._data.sort((a, b) => (a.time < b.time ? -1 : 1));
//     this.render();
//     if (!this.timer.running) {
//       this.timer.start();
//     }
//   }
//   private render() {
//     let tmp_text: Array<egret.ITextElement> = [];
//     for (let i of this._data) {
//       tmp_text.push({ text: i.from + "@" + i.to + ";" });
//       tmp_text.push({ text: i.message + "\n" });
//     }
//     this.label.textFlow = tmp_text;
//   }
//   private clearMessage() {
//     let nowTime = new Date().getTime() - 30000;
//     let tmp_data = this._data;
//     for (let i = 0; i < tmp_data.length; i++) {
//       if (tmp_data[i].time < nowTime) {
//         continue;
//       }
//       this._data.splice(0, i + 1);
//       break;
//     }
//     this.render();
//     if (!tmp_data.length) {
//       this.timer.stop();
//     }
//   }
// }
// class BCMiniMap extends eui.Component implements eui.UIComponent {
//   public container: eui.Group;
//   constructor() {
//     super();
//     this.container = new eui.Group();
//     this.x = 100;
//     this.y = 50;
//   }
//   public drawMap(map: BattleMapProps) {
//     this.container.removeChildren();
//     let [width, height] = [map.sizeState.width, map.sizeState.height];
//     this.container.width = MINI_MAP_BLOCK_WIDTH * width;
//     this.container.height = MINI_MAP_BLOCK_WIDTH * height;
//     let geoLayer = map.geoLayer;
//     const drawRect = (
//       index: number,
//       color: number,
//       strake = false,
//       alpha = 1
//     ) => {
//       let tmp_obj = new eui.Rect(MINI_MAP_BLOCK_WIDTH, MINI_MAP_BLOCK_WIDTH);
//       if (strake) {
//         tmp_obj.strokeColor = color;
//         tmp_obj.alpha = alpha;
//         tmp_obj.strokeWeight = MINI_MAP_BLOCK_WIDTH / 4;
//         tmp_obj.fillAlpha = 0;
//       } else {
//         tmp_obj.fillColor = color;
//         tmp_obj.fillAlpha = alpha;
//       }
//       tmp_obj.x = (index % width) * MINI_MAP_BLOCK_WIDTH;
//       tmp_obj.y = Math.floor(index / width) * MINI_MAP_BLOCK_WIDTH;
//       // console.log(tmp_obj.x, tmp_obj.y, tmp_obj.width, tmp_obj.height, tmp_obj.alpha, tmp_obj.fillColor, this.container);
//       this.container.addChild(tmp_obj);
//       // console.log('add')
//       // graphics.beginFill(0xffffff, 1);
//       // graphics.drawRect(
//       //     (index % width + 0.5) * MINI_MAP_BLOCK_WIDTH,
//       //     (0.5 + Math.floor(index / width)) * MINI_MAP_BLOCK_WIDTH,
//       //     MINI_MAP_BLOCK_WIDTH, MINI_MAP_BLOCK_WIDTH
//       // );
//       // graphics.endFill();
//     };
//     for (let i = 0; i < geoLayer.length; i++) {
//       switch (BattleGeoTypes[geoLayer[i]]) {
//         case "plain":
//           drawRect(i, 0x1111ff);
//           break;
//         case "bridge":
//         case "road":
//           drawRect(i, 0xff0022);
//           break;
//         case "sea":
//         case "rocks":
//           drawRect(i, 0xff11ff);
//           break;
//         case "forest":
//           drawRect(i, 0x111111);
//           break;
//         case "lake":
//           drawRect(i, 0x000000);
//           break;
//         case "mountain":
//           drawRect(1, 0x222222);
//           break;
//         default:
//           break;
//       }
//     }
//     let buildLayer = map.buildLayer;
//     for (let i in buildLayer) {
//       let for_index = parseInt(i);
//       if (BattleBuildTypes[for_index] === "capital") {
//         switch (buildLayer[i].flag) {
//           case "red":
//             drawRect(for_index, 0x7faaaa);
//             break;
//           case "blue":
//             drawRect(for_index, 0x7faaaa);
//             break;
//           case "yellow":
//             drawRect(for_index, 0x7faaaa);
//             break;
//           case "green":
//             drawRect(for_index, 0x7faaaa);
//             break;
//           default:
//             drawRect(for_index, 0x876511);
//             break;
//         }
//       } else {
//         switch (buildLayer[i].flag) {
//           case "red":
//             drawRect(for_index, 0x7faaaa);
//             break;
//           case "blue":
//             drawRect(for_index, 0x7faaaa);
//             break;
//           case "yellow":
//             drawRect(for_index, 0x7faaaa);
//             break;
//           case "green":
//             drawRect(for_index, 0x7faaaa);
//             break;
//           default:
//             drawRect(for_index, 0x876511);
//             break;
//         }
//       }
//     }
//     let unitLayer = map.unitLayer;
//     for (let i in unitLayer) {
//       let for_index = parseInt(i);
//       switch (unitLayer[i].flag) {
//         case "red":
//           drawRect(for_index, 0x7faaaa, true);
//           break;
//         case "blue":
//           drawRect(for_index, 0x7faaaa, true);
//           break;
//         case "yellow":
//           drawRect(for_index, 0x7faaaa, true);
//           break;
//         case "green":
//           drawRect(for_index, 0x7faaaa, true);
//           break;
//         default:
//           drawRect(for_index, 0x876511, true);
//           break;
//       }
//     }
//   }
// }
// class DataMaker {
//   static makeBattleMap(h: number, w: number): BattleMapProps {
//     /**
//          *     
//          * 'sea',
//         'beach',
//         'mountain',
//         'forest',
//         'plain',
//         'lake',
//         'road',
//         'rocks',
//         'bridge'
//          */
//     const tMap_1: BattleMapProps = {
//       sizeState: { x: 0, y: 0, height: 10, width: 10, scale: 1 },
//       geoLayer: [
//         4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
//         4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
//         4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
//         4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
//         4, 4, 4, 4,
//       ],
//       unitLayer: {
//         0: {
//           type: "footmen",
//           oil: 10,
//           blood: 10,
//           bullet: 10,
//           occupied: 0,
//           isDiving: false,
//           moved: false,
//           flag: "red",
//           loadings: [],
//           supply: {},
//         },
//         2: {
//           type: "transport",
//           oil: 10,
//           blood: 10,
//           bullet: 10,
//           occupied: 0,
//           isDiving: false,
//           moved: false,
//           flag: "red",
//           loadings: [
//             {
//               type: "footmen",
//               oil: 10,
//               blood: 10,
//               bullet: 10,
//               occupied: 0,
//               isDiving: false,
//               moved: false,
//               flag: "red",
//               loadings: [],
//               supply: {},
//             },
//           ],
//           supply: {},
//         },
//         11: {
//           type: "footmen",
//           oil: 10,
//           blood: 10,
//           bullet: 10,
//           occupied: 0,
//           isDiving: false,
//           moved: false,
//           flag: "blue",
//           loadings: [],
//           supply: {},
//         },
//       },
//       buildLayer: {},
//       landMarkI: {},
//       landMarkII: {},
//       landMarkIII: {},
//       globalSetting: {
//         dailyMoney: 1000,
//         cities: 0,
//         bouts: 0,
//         fogOpen: false,
//         weather: "suny",
//         aliLvl: "",
//       },
//       playerSetting: {
//         red: {
//           enemies: ["blue"],
//           taskBg: "bg",
//           taskTarget: "target",
//           commanders: ["google"],
//           nowMoney: 10,
//         },
//         blue: {
//           enemies: ["red"],
//           taskBg: "bg",
//           taskTarget: "target",
//           commanders: ["google"],
//           nowMoney: 10,
//         },
//       },
//     };
//     let range: number = 0;
//     let tmp_map: BattleMapProps = {
//       sizeState: {
//         x: 0,
//         y: 0,
//         scale: 1,
//         width: w,
//         height: h,
//       },
//       geoLayer: [],
//       landMarkI: {},
//       buildLayer: {},
//       landMarkII: {},
//       unitLayer: {},
//       landMarkIII: {},
//       globalSetting: {
//         dailyMoney: 1000,
//         cities: 0,
//         bouts: 0,
//         fogOpen: false,
//         weather: "suny",
//         aliLvl: "",
//       },
//       playerSetting: {
//         red: {
//           enemies: ["blue"],
//           taskBg: "bg",
//           taskTarget: "target",
//           commanders: ["google"],
//           nowMoney: 10,
//         },
//         blue: {
//           enemies: ["red"],
//           taskBg: "bg",
//           taskTarget: "target",
//           commanders: ["google"],
//           nowMoney: 10,
//         },
//       },
//     };
//     // geo
//     range = BattleGeoTypes.length;
//     for (let i = 0; i < h * w; ++i) {
//       tmp_map.geoLayer.push(Math.floor(Math.random() * range));
//     }
//     // unit
//     range = BattleUnitTypes.length;
//     for (let i = 0; i < h * w; ++i) {
//       if (Math.random() < 0.2) {
//         tmp_map.unitLayer[i] = {
//           type: BattleUnitTypes[0],
//           blood: 10,
//           bullet: 10,
//           oil: 40,
//           supply: {},
//           loadings: [],
//           moved: false,
//           isDiving: false,
//           flag: "red",
//           occupied: 0,
//         };
//         // tmp_map.unitLayer.push(Math.floor(Math.random() * range));
//       }
//     }
//     // console.log(tmp_map.geoLayer.length)
//     // tmp_map.buildLayer[0] = {
//     //     type: "city",
//     //     flag: "blue"
//     // }
//     tmp_map.unitLayer[0] = {
//       type: "transport",
//       blood: 10,
//       bullet: 10,
//       oil: 40,
//       supply: {},
//       loadings: [],
//       moved: false,
//       isDiving: false,
//       flag: "red",
//       occupied: 0,
//     };
//     return tMap_1;
//     return tmp_map;
//   }
//   static makeUnitProps(typeName: string, flag: string) {
//     return {
//       type: typeName as typeof BattleUnitTypes[number],
//       oil: 10,
//       blood: 10,
//       bullet: 10,
//       occupied: 0,
//       isDiving: false,
//       moved: false,
//       flag: flag as typeof BattleUnitTypes[number],
//       loadings: [],
//       supply: {},
//     };
//   }
// }
// class ResourceManager {
//   private static movieClip: Record<string, egret.MovieClipDataFactory>;
//   public static geoTypeCode: Record<typeof BattleGeoTypes[number], string[]>;
//   /**
//    * init
//    */
//   public static init() {
//     ResourceManager.movieClip = {};
//     ResourceManager.geoTypeCode = {
//       plain: ["-"],
//       sea: ["center"],
//       beach: ["top"],
//       forest: ["-"],
//       lake: ["-"],
//       mountain: ["-"],
//       road: ["across"],
//       rocks: ["-"],
//       bridge: ["across"],
//     };
//     for (let i of BattleUnitTypes) {
//       let data2mc = RES.getRes("battle_unit_" + i + "_json");
//       let texture2mc = RES.getRes("battle_unit_" + i + "_png");
//       ResourceManager.movieClip["unit_" + i] = new egret.MovieClipDataFactory(
//         data2mc,
//         texture2mc
//       );
//     }
//     for (let i of BattleGeoTypes) {
//       let data2mc = RES.getRes("battle_geo_" + i + "_json");
//       let texture2mc = RES.getRes("battle_geo_" + i + "_png");
//       ResourceManager.movieClip["geo_" + i] = new egret.MovieClipDataFactory(
//         data2mc,
//         texture2mc
//       );
//     }
//     for (let i of BattleBuildTypes) {
//       let data2mc = RES.getRes("battle_build_" + i + "_json");
//       let texture2mc = RES.getRes("battle_build_" + i + "_png");
//       ResourceManager.movieClip["build_" + i] = new egret.MovieClipDataFactory(
//         data2mc,
//         texture2mc
//       );
//     }
//   }
//   /**
//    * getMovieClip
//    */
//   public static getGeoMovieClip(typeName: string, actionName: string) {
//     // console.log(ResourceManager.movieClip['geo_'+typeName].generateMovieClipData( actionName ), '1')
//     // console.log(typeName, actionName, '8888')
//     return new egret.MovieClip(
//       ResourceManager.movieClip["geo_" + typeName].generateMovieClipData(
//         actionName
//       )
//     );
//     // return ResourceManager.movieClip['geo_'+typeName].generateMovieClipData(actionName);
//   }
//   /**
//    * static getUnitMovieClip
//    */
//   public static getUnitMovieClip(typeName: string, actionName: string) {
//     return new egret.MovieClip(
//       ResourceManager.movieClip["unit_" + typeName].generateMovieClipData(
//         actionName
//       )
//     );
//     // return ResourceManager.movieClip['unit_'+typeName].generateMovieClipData(actionName);
//   }
//   public static getBuildMovieClip(typeName: string, actionName: string) {
//     // console.log(actionName, typeName, "fff");
//     return new egret.MovieClip(
//       ResourceManager.movieClip["build_" + typeName].generateMovieClipData(
//         actionName
//       )
//     );
//   }
//   public static getNumberTexture(nu: string | number) {
//     return RES.getRes("battle_state_number_json#" + nu);
//   }
//   public static getUnitStateTexture(nu: typeof BattleUnitStateTypes[number]) {
//     return RES.getRes("battle_state_unit_json#" + nu);
//   }
//   /**
//    * static adjustGeoLayer
//    */
//   public static adjustGeoLayer() {}
// }
// class MathManBase {
//   public static mapWidth: number;
//   public static mapHeight: number;
//   protected static readonly MAX_NU: number = 99999;
//   public countCostMap(
//     map: BattleMapProps,
//     typeName: typeof BattleUnitTypes[number],
//     enemies: typeof PlayerFlagTypes[number][]
//   ): number[] {
//     let engineType = StaticDataManager.unit[typeName]["engine"];
//     let rlt = map.geoLayer.map((item) => {
//       if (
//         StaticDataManager.engineCost[engineType][BattleGeoTypes[item]] ===
//         undefined
//       ) {
//         // error
//         console.log(engineType, item, BattleGeoTypes[item]);
//       }
//       return StaticDataManager.engineCost[engineType][BattleGeoTypes[item]];
//     });
//     for (let i in map.unitLayer) {
//       if (enemies.indexOf(map.unitLayer[i].flag) !== -1) {
//         rlt[i] = MathManBase.MAX_NU;
//       }
//     }
//     return rlt;
//   }
//   public countMoveArea(
//     costMap: number[],
//     posId: number,
//     oil: number
//   ): Record<number, number> {
//     let [width, height] = [MathManBase.mapWidth, MathManBase.mapHeight];
//     let [x, y] = [posId % width, Math.floor(posId / width)];
//     let rlt: Record<number, number> = {};
//     let directions = [1, 0, -1, 0, 0, 1, 0, -1];
//     let queue: [number, number, number][] = [[x, y, oil]];
//     while (queue.length !== 0) {
//       let [x_, y_, now_oil] = queue.splice(0, 1)[0];
//       rlt[x_ + y_ * width] = now_oil;
//       for (let i = 0; i < 4; ++i) {
//         let [new_x, new_y] = [
//           directions[i * 2] + x_,
//           directions[i * 2 + 1] + y_,
//         ];
//         if (new_x < 0 || new_y < 0 || new_x >= width || new_y >= height) {
//           continue;
//         }
//         let target_oil = rlt[new_x + new_y * width];
//         let target_oil_cost = costMap[new_x + new_y * width];
//         if (target_oil === undefined && now_oil - target_oil_cost >= 0) {
//           queue.push([new_x, new_y, now_oil - target_oil_cost]);
//         } else if (
//           target_oil !== undefined &&
//           now_oil - target_oil_cost > target_oil
//         ) {
//           queue.push([new_x, new_y, now_oil - target_oil_cost]);
//         }
//       }
//     }
//     return rlt;
//   }
//   public countRoads(
//     costMap: number[],
//     moveArea: Record<number, number>,
//     posId: number,
//     targetId: number,
//     oil: number
//   ): number[][] {
//     let [width, height] = [MathManBase.mapWidth, MathManBase.mapHeight];
//     let [prim_x, prim_y] = [posId % width, Math.floor(posId / width)];
//     let [target_x, target_y] = [targetId % width, Math.floor(targetId / width)];
//     if (posId === targetId) {
//       return [[target_x, target_y, oil]];
//     }
//     let roads: Array<Array<number>> = [];
//     let directions = [1, 0, -1, 0, 0, 1, 0, -1];
//     let queue: Array<Array<number>> = [[target_x, target_y, oil]];
//     while (queue.length) {
//       let now_road = queue.splice(0, 1)[0];
//       let now_oil = now_road.pop();
//       let [x_, y_] = [now_road[0], now_road[1]];
//       for (let i = 0; i < 4; ++i) {
//         let [new_x, new_y] = [
//           directions[i * 2] + x_,
//           directions[i * 2 + 1] + y_,
//         ];
//         if (moveArea[new_x + new_y * width] === undefined) {
//           continue;
//         }
//         let target_oil_cost = costMap[new_x + new_y * width];
//         if (now_oil - target_oil_cost >= 0) {
//           if (new_x === prim_x && new_y === prim_y) {
//             roads.push([new_x, new_y, ...now_road, now_oil - target_oil_cost]);
//           }
//           queue.push([new_x, new_y, ...now_road, now_oil - target_oil_cost]);
//         }
//       }
//     }
//     // console.log('map width', [...roads])
//     let rlt_roads: number[][] = [];
//     for (let i = 0; i < roads.length; ++i) {
//       let old_road = roads[i];
//       let tmp_road = [];
//       console.log("swap oil", oil, old_road[old_road.length - 1]);
//       tmp_road.push(oil - old_road[old_road.length - 1]);
//       for (let j = 0; j < old_road.length - 1; j += 2) {
//         tmp_road.push(old_road[j] + old_road[j + 1] * width);
//       }
//       // console.log([...roads[i]], tmp_road)
//       // roads[i] = tmp_road;
//       rlt_roads.push(tmp_road);
//     }
//     // console.log('map width', width, rlt_roads)
//     // for (let i = 0; i < roads.length; ++i) {
//     //     roads[i][roads[i].length - 1] = oil - roads[i][roads[i].length - 1]
//     // }
//     // roads = roads.sort((a, b) => a.length > b.length ? 1 : 0)
//     // return roads;
//     rlt_roads = rlt_roads.sort((a, b) => (a.length > b.length ? 1 : 0));
//     return rlt_roads;
//   }
//   public countAtkArea(posId: number, minDistance: number, maxDistance: number) {
//     let [width, height] = [MathManBase.mapWidth, MathManBase.mapHeight];
//     let [prim_x, prim_y] = [posId % width, Math.floor(posId / width)];
//     let targetArea: Record<number, boolean> = {};
//     for (let range = minDistance; range <= maxDistance; ++range) {
//       for (let [x, y] = [0, range]; x <= range; ++x, y = range - x) {
//         let handlePoints = [];
//         if (x === 0) {
//           handlePoints.push(x, y, x, -y);
//         } else if (y == 0) {
//           handlePoints.push(x, y, -x, y);
//         } else {
//           handlePoints.push(x, y, -x, y, x, -y, -x, -y);
//         }
//         for (let i = 0; i < handlePoints.length; i += 2) {
//           let [now_x, now_y] = [
//             handlePoints[i] + prim_x,
//             handlePoints[i + 1] + prim_y,
//           ];
//           if (now_x < 0 || now_y < 0 || now_x >= width || now_y >= height) {
//             continue;
//           }
//           targetArea[now_x + now_y * width] = false;
//         }
//       }
//     }
//     return targetArea;
//   }
//   public countNearestTarget(
//     posId: number,
//     costMap: number[],
//     typeName: string,
//     enemies: string[],
//     unitLayer: Record<number, BattleUnitProps>
//   ) {
//     let [width, height] = [MathManBase.mapWidth, MathManBase.mapHeight];
//     let [x, y] = [posId % width, Math.floor(posId / width)];
//     let rlt: Record<number, number> = {};
//     let gfTable = StaticDataManager.gf[typeName];
//     let directions = [1, 0, -1, 0, 0, 1, 0, -1];
//     let queue: [number, number, number][] = [[x, y, MathManBase.MAX_NU]];
//     while (queue.length !== 0) {
//       let [x_, y_, now_oil] = queue.splice(0, 1)[0];
//       let now_posId = x_ + y_ * width;
//       rlt[x_ + y_ * width] = now_oil;
//       if (
//         unitLayer[now_posId] !== undefined &&
//         enemies.indexOf(unitLayer[now_posId].flag) !== -1 &&
//         gfTable[unitLayer[now_posId].type] !== 0
//       ) {
//         return now_posId;
//       }
//       for (let i = 0; i < 4; ++i) {
//         let [new_x, new_y] = [
//           directions[i * 2] + x_,
//           directions[i * 2 + 1] + y_,
//         ];
//         if (new_x < 0 || new_y < 0 || new_x >= width || new_y >= height) {
//           continue;
//         }
//         let target_oil = rlt[new_x + new_y * width];
//         let target_oil_cost = costMap[new_x + new_y * width];
//         if (target_oil === undefined) {
//           queue.push([new_x, new_y, now_oil - target_oil_cost]);
//         } else if (
//           target_oil !== undefined &&
//           now_oil - target_oil_cost > target_oil
//         ) {
//           queue.push([new_x, new_y, now_oil - target_oil_cost]);
//         }
//       }
//     }
//     return -1;
//   }
//   public countAStar(targetId: number, posId: number, costMap: number[]) {
//     let [width, height] = [MathManBase.mapWidth, MathManBase.mapHeight];
//     let [prim_x, prim_y] = [posId % width, Math.floor(posId / width)];
//     let [target_x, target_y] = [targetId % width, Math.floor(targetId / width)];
//     let old_cost: number[] = [];
//     let new_cost: number[] = [];
//     for (let i = 0; i < costMap.length; i++) {
//       old_cost.push(-1);
//       new_cost.push(0);
//     }
//     let next_map: Record<number, number> = {};
//     let finded = false;
//     old_cost[posId] = 0;
//     new_cost[posId] = Math.abs(prim_x - target_x) + Math.abs(prim_y - target_y);
//     let directions: number[] = [1, 0, -1, 0, 0, 1, 0, -1];
//     let queue: Array<number> = [posId];
//     while (queue.length) {
//       let now_posId = queue.splice(0, 1)[0];
//       if (now_posId === targetId) {
//         finded = true;
//         break;
//       }
//       let [now_x, now_y] = [now_posId % width, Math.floor(now_posId / width)];
//       for (let i = 0; i < 8; i += 2) {
//         let [x_, y_] = [now_x + directions[i], now_y + directions[i + 1]];
//         if (x_ < 0 || y_ < 0 || x_ >= width || y_ >= height) {
//           continue;
//         }
//         let posId_1 = x_ + y_ * width;
//         let cost_ = old_cost[now_posId] + costMap[posId_1];
//         let preCost_ = Math.abs(target_x - x_) + Math.abs(target_y - y_);
//         if (old_cost[posId_1] !== -1) {
//           if (cost_ + preCost_ < old_cost[posId_1] + new_cost[posId_1]) {
//             old_cost[posId_1] = cost_;
//             new_cost[posId_1] = preCost_;
//             queue.push(posId_1);
//             next_map[posId_1] = now_posId;
//           } else {
//             continue;
//           }
//         } else {
//           old_cost[posId_1] = cost_;
//           new_cost[posId_1] = preCost_;
//           queue.push(posId_1);
//           next_map[posId_1] = now_posId;
//         }
//         queue.sort((arg1, arg2) => {
//           return old_cost[arg1] + new_cost[arg1] >
//             old_cost[arg2] + new_cost[arg2]
//             ? 1
//             : -1;
//         });
//       }
//     }
//     if (!finded) {
//       return [];
//     }
//     let rlt_road: number[] = [targetId];
//     let iter_key = targetId;
//     while (next_map[iter_key] !== posId) {
//       iter_key = next_map[iter_key];
//       rlt_road.push(iter_key);
//     }
//     rlt_road.push(posId);
//     rlt_road.reverse();
//     return rlt_road;
//   }
//   public countCityCostMap(posId: number, costMap: number[]) {
//     let [width, height] = [MathManBase.mapWidth, MathManBase.mapHeight];
//     let rlt: Record<number, number> = {};
//     let directions = [1, 0, -1, 0, 0, 1, 0, -1];
//     let queue: Record<number, number> = {};
//     queue[posId] = MathManBase.MAX_NU;
//     let queue_keys = Object.keys(queue);
//     while (queue_keys.length) {
//       let tmp_key = parseInt(queue_keys[0]);
//       let [x_, y_, now_oil] = [
//         tmp_key % width,
//         Math.floor(tmp_key / width),
//         queue[tmp_key],
//       ];
//       delete queue[tmp_key];
//       rlt[tmp_key] = now_oil;
//       for (let i = 0; i < 4; ++i) {
//         let [new_x, new_y] = [
//           directions[i * 2] + x_,
//           directions[i * 2 + 1] + y_,
//         ];
//         let tmp_posId_1 = new_x + new_y * width;
//         if (
//           rlt[tmp_posId_1] !== undefined ||
//           new_x < 0 ||
//           new_y < 0 ||
//           new_x >= width ||
//           new_y >= height
//         ) {
//           continue;
//         }
//         let target_oil_cost = costMap[tmp_posId_1];
//         if (queue[tmp_posId_1] === undefined) {
//           queue[tmp_posId_1] = now_oil - target_oil_cost;
//         } else if (queue[tmp_posId_1] < now_oil - target_oil_cost) {
//           queue[tmp_posId_1] = now_oil - target_oil_cost;
//         }
//       }
//       queue_keys = Object.keys(queue);
//     }
//     return rlt;
//   }
// }
// class MathManUnit extends MathManBase {
//   public costMap: number[];
//   public oil: number;
//   public moveArea: Record<number, number>;
//   public atkArea: Record<number, boolean>;
//   public supplyNet: number[];
//   public _targetId: number;
//   public roads: Array<Array<number>>;
//   public roadsPoint: number; //
//   public rightMenu: string[];
//   public atkTargets: Record<number, boolean>;
//   public _childrenId: number;
//   public unLoadArea: Record<number, number>;
//   public _childrenRoadTarget: number;
//   public childrenRoads: number[][];
//   public childrenRoadsPoint: number; // publ
//   public sprite: BattleEleUnit;
//   public mapData: BattleMapProps;
//   public playerControl: PlayerController;
//   constructor(sprite: BattleEleUnit, mapData: BattleMapProps) {
//     super();
//     this.sprite = sprite;
//     this.mapData = mapData;
//     this.playerControl = PlayerManager.getPlayerController(
//       this.sprite.movieFlag
//     );
//     this.costMap = this.countCostMap(
//       mapData,
//       sprite.typeName as typeof BattleUnitTypes[number],
//       this.playerControl.playerSetting.enemies
//     );
//     let tmp_oil = StaticDataManager.unit[this.sprite.typeName][
//       "dailyOil"
//     ] as number;
//     this.oil = this.sprite.oil < tmp_oil ? this.sprite.oil : tmp_oil;
//     this.moveArea = this.countMoveArea();
//     this.atkArea = this.countAtkArea(sprite.posId);
//   }
//   public countMoveArea(): Record<number, number> {
//     let tmp = super.countMoveArea(this.costMap, this.sprite.posId, this.oil);
//     this.moveArea = tmp;
//     return tmp;
//   }
//   public countAtkArea(posId: number): Record<number, boolean> {
//     let minDistance = StaticDataManager.unit[this.sprite.typeName][
//       "atkMinDistance"
//     ] as number;
//     let maxDistance = StaticDataManager.unit[this.sprite.typeName][
//       "atkMaxDistance"
//     ] as number;
//     let tmp = super.countAtkArea(posId, minDistance, maxDistance);
//     let unitLayer = this.mapData.unitLayer;
//     let enemies = this.playerControl.playerSetting.enemies;
//     let unitTable = StaticDataManager.gf[this.sprite.typeName];
//     for (let i in tmp) {
//       if (
//         unitLayer[i] &&
//         enemies.indexOf(unitLayer[i].flag) !== -1 &&
//         unitTable[unitLayer[i].type] !== 0
//       ) {
//         tmp[i] = true;
//       }
//     }
//     return tmp;
//   }
//   /**
//    * 先确保可以transport
//    * @returns
//    */
//   public countSupply(): number[] {
//     let enemies = this.playerControl.playerSetting.enemies;
//     let dwName: string;
//     let geoName: string;
//     if (this.sprite.typeName === "transport") {
//       dwName = "transport";
//       geoName = "factory";
//     } else {
//       dwName = "transportship";
//       geoName = "shipyard";
//     }
//     let e1: number[] = [];
//     let e2: number[] = [];
//     let buildLayer: Record<number, BattleBuildProps>;
//     let unitLayer: Record<number, BattleUnitProps>;
//     for (let i in buildLayer) {
//       if (
//         buildLayer[i].type === geoName &&
//         enemies.indexOf(buildLayer[i].flag) === -1
//       ) {
//         e1.push(parseInt(i));
//       }
//     }
//     for (let i in unitLayer) {
//       if (
//         unitLayer[i].type === dwName &&
//         !unitLayer[i].moved &&
//         enemies.indexOf(unitLayer[i].flag)
//       ) {
//         e2.push(parseInt(i));
//       }
//     }
//     if (e1.length === 0 || e1.length === 0) {
//       this.supplyNet = [];
//       return this.supplyNet;
//     }
//     let tmp_data_1: Record<
//       number,
//       { dws: Record<number, number>; geos: Record<number, number> }
//     > = {};
//     for (let i = 0; i < e2.length; ++i) {
//       let costMap = super.countCostMap(
//         this.mapData,
//         dwName as typeof BattleUnitTypes[number],
//         enemies
//       );
//       let tmp_oil = StaticDataManager.unit[unitLayer[e2[i]].type][
//         "dailyOil"
//       ] as number;
//       let rlt_oil =
//         unitLayer[e2[i]].oil < tmp_oil ? unitLayer[e2[i]].oil : tmp_oil;
//       let moveArea = super.countMoveArea(costMap, e2[i], rlt_oil);
//       for (let i in moveArea) {
//         moveArea[i] = rlt_oil - moveArea[i];
//       }
//       tmp_data_1[i] = { dws: [], geos: [] };
//       for (let j = 0; j < e2.length; ++j) {
//         if (j === i) {
//           continue;
//         }
//         if (moveArea[e2[j]] !== undefined) {
//           tmp_data_1[i].dws[j] = moveArea[e2[j]];
//         }
//       }
//       for (let j = 0; j < e1.length; ++i) {
//         if (j === i) {
//           continue;
//         }
//         if (moveArea[e1[j]] !== undefined) {
//           tmp_data_1[j].geos[j] = moveArea[e1[j]];
//         }
//       }
//     }
//     // bfs
//     let roads: Array<Array<number>> = [];
//     let queue: Array<Array<number>> = [[this.sprite.posId, 0]];
//     while (queue.length) {
//       let now_road = queue.splice(0, 1)[0];
//       let now_oil = now_road.pop();
//       let now_posId = now_road[0];
//       let geos = tmp_data_1[now_posId].geos;
//       let dws = tmp_data_1[now_posId].dws;
//       let geos_keys = Object.keys(geos).map((item) => parseInt(item));
//       if (geos_keys.length === 0) {
//         for (let i in dws) {
//           if (now_road.indexOf[parseInt(i)] !== -1) {
//             queue.push([parseInt(i), ...now_road, now_oil + dws[i]]);
//           }
//         }
//       } else {
//         let tmp_target_1 = Math.min(...geos_keys);
//         roads.push([tmp_target_1, ...now_road, now_oil + geos[tmp_target_1]]);
//         break;
//       }
//     }
//     if (roads.length === 0) {
//       this.supplyNet = [];
//       return this.supplyNet;
//     }
//     // 随机选择哦，so
//     let [min_index, min_oil] = [0, roads[0][roads[0].length - 1]];
//     for (let i = 1; i < roads.length; ++i) {
//       let new_min_oil = roads[i][roads[i].length - 1];
//       if (min_oil > new_min_oil) {
//         min_index = i;
//         min_index = new_min_oil;
//       }
//     }
//     this.supplyNet = roads[min_index];
//     return roads[min_index];
//   }
//   /**
//    * 暂时作废
//    * @param childrenId
//    * @returns
//    */
//   private countUnloadArea(childrenId: number) {
//     let loadings = this.sprite.loadings;
//     let enemies = this.playerControl.playerSetting.enemies;
//     let posId = this.sprite.posId;
//     let costMap = super.countCostMap(
//       this.mapData,
//       loadings[childrenId].type,
//       enemies
//     );
//     let moveArea = super.countMoveArea(
//       costMap,
//       posId,
//       loadings[childrenId].oil
//     );
//     this.moveArea = moveArea;
//     return this.moveArea;
//     // let rlt: Record<number, number>[] = [];
//     // for (let i = 0; i < loadings.length; ++i) {
//     //     let costMap = super.countCostMap(this.mapData, loadings[i].type, enemies);
//     //     let moveArea = super.countMoveArea(costMap, posId, loadings[i].oil);
//     //     rlt.push(moveArea);
//     // }
//   }
//   /**
//    *
//    * @param targetId 该区域最多只有己方 可搭载单位
//    * @returns
//    */
//   public countRightMenu(targetId: number): string[] {
//     let unitLayer = this.mapData.unitLayer;
//     let buildLayer = this.mapData.buildLayer;
//     let unitTable = StaticDataManager.unit[this.sprite.typeName];
//     let rlt_menu: string[] = [];
//     let enemies = this.playerControl.playerSetting.enemies;
//     let tmp_sprite = this.sprite;
//     // 原地: unload, supply
//     if (targetId === this.sprite.posId) {
//       let loadings = this.sprite.loadings;
//       if (loadings.length !== 0) {
//         let canUnload = false;
//         for (let i = 0; i < loadings.length; i++) {
//           if (!loadings[i].moved) {
//             canUnload = true;
//             break;
//           }
//         }
//         if (canUnload) {
//           rlt_menu.push("unload");
//           if (tmp_sprite.moved) {
//             return rlt_menu;
//           }
//         }
//       }
//       if (unitTable["canSupply"] && this.countSupply().length !== 0) {
//         rlt_menu.push("supply");
//       }
//     } else {
//       // 可搭载
//       if (unitLayer[targetId] !== undefined) {
//         rlt_menu.push("load");
//         this.rightMenu = rlt_menu;
//         return rlt_menu;
//       }
//     }
//     // wait, load, occupy, diving, supply, atk,
//     rlt_menu.push("wait");
//     // diving
//     if (unitTable["canDiving"]) {
//       if (tmp_sprite.isDiving) {
//         rlt_menu.push("show up");
//       } else {
//         rlt_menu.push("stealth");
//       }
//     }
//     // occupy
//     if (
//       unitTable["canOccupy"] &&
//       buildLayer[targetId] !== undefined &&
//       enemies.indexOf(buildLayer[targetId].flag) !== -1
//     ) {
//       rlt_menu.push("occupy");
//     }
//     // atk
//     if (
//       (unitTable["atkMaxDistance"] as number) !== 0 &&
//       (unitTable["atkAfterMove"] || tmp_sprite.posId === targetId)
//     ) {
//       if (tmp_sprite.posId === targetId) {
//         this.atkTargets = this.atkArea;
//       } else {
//         let new_atkArea = this.countAtkArea(targetId);
//         this.atkTargets = new_atkArea;
//         // console.log('atk Area', new_atkArea);
//         let canAtk = false;
//         for (let i in new_atkArea) {
//           if (new_atkArea[i]) {
//             canAtk = true;
//             break;
//           }
//         }
//         if (canAtk) {
//           rlt_menu.push("attack");
//         }
//       }
//     }
//     // 这是第二个出口哦
//     this.rightMenu = rlt_menu;
//     return rlt_menu;
//   }
//   public countNearestTarget(): number {
//     // let unit_keys = Object.keys(this.mapData);
//     // let now_targetId = 0;
//     // for(let i=0;i<unit_keys.length;i++){
//     // }
//     return super.countNearestTarget(
//       this.sprite.posId,
//       this.costMap,
//       this.sprite.typeName,
//       this.playerControl.playerSetting.enemies,
//       this.mapData.unitLayer
//     );
//   }
//   public countAStar(targetId: number): number[] {
//     /*** don't delete */
//     // let costMap = super.countCostMap(this.mapData, this.sprite.typeName as typeof BattleUnitTypes[number], []);
//     return super.countAStar(targetId, this.sprite.posId, this.costMap);
//   }
//   public set targetId(v: number) {
//     this._targetId = v;
//     let tmp: number[][];
//     if (v === this.sprite.posId) {
//       tmp = [[this.oil, v]];
//     } else {
//       tmp = super.countRoads(
//         this.costMap,
//         this.moveArea,
//         this.sprite.posId,
//         v,
//         this.oil
//       );
//     }
//     this.rightMenu = this.countRightMenu(v);
//     this.roads = tmp;
//   }
//   public get targetId() {
//     return this._targetId;
//   }
//   public set childrenId(v: number) {
//     this._childrenId = v;
//     let unitProps = this.sprite.loadings[v];
//     let enemies = this.playerControl.playerSetting.enemies;
//     let costMap = super.countCostMap(this.mapData, unitProps.type, enemies);
//     let static_oil = StaticDataManager.unit[unitProps.type][
//       "dailyOil"
//     ] as number;
//     let moveArea = super.countMoveArea(
//       costMap,
//       this.sprite.posId,
//       unitProps.oil < static_oil ? unitProps.oil : static_oil
//     );
//     this.unLoadArea = moveArea;
//   }
//   public get childrenId() {
//     return this._childrenId;
//   }
//   public set childrenRoadTarget(v: number) {
//     this._childrenRoadTarget = v;
//     let unitProps = this.sprite.loadings[this._childrenId];
//     let enemies = this.playerControl.playerSetting.enemies;
//     let costMap = super.countCostMap(this.mapData, unitProps.type, enemies);
//     let static_oil = StaticDataManager.unit[unitProps.type][
//       "dailyOil"
//     ] as number;
//     let roads = super.countRoads(
//       costMap,
//       this.unLoadArea,
//       this.sprite.posId,
//       v,
//       unitProps.oil < static_oil ? unitProps.oil : static_oil
//     );
//     this.childrenRoads = roads;
//     this.childrenRoadsPoint = 0;
//   }
//   public get childrenRoadTarget() {
//     return this._childrenRoadTarget;
//   }
//   /*******************************static method */
//   /**
//    *
//    * @param sprite
//    * @param typeName
//    * @returns
//    */
//   public static canLoadIt(
//     sprite: BattleEleUnit,
//     typeName: typeof BattleUnitTypes[number]
//   ) {
//     let loading_key = StaticDataManager.unit[sprite.typeName][
//       "canLoading"
//     ] as string;
//     if (sprite.loadings.length >= parseInt(loading_key[0])) {
//       return false;
//     }
//     let engine = StaticDataManager.unit[typeName]["engine"] as string;
//     if (
//       loading_key.indexOf(typeName) === -1 &&
//       loading_key.indexOf(engine) === -1
//     ) {
//       console.log("hiere", typeName, engine);
//       return false;
//     }
//     return true;
//   }
// }
// class StaticDataManager {
//   public static engineCost: Record<string, Record<string, number>>;
//   public static viewCost: Record<string, Record<string, number>>;
//   public static gf: Record<string, Record<string, number>>;
//   public static gfGeo_g: Record<string, Record<string, number>>;
//   public static gfGeo_f: Record<string, Record<string, number>>;
//   public static weather_g: Record<string, Record<string, number>>;
//   public static weather_f: Record<string, Record<string, number>>;
//   public static unit: Record<string, Record<string, number | string>>;
//   public static commander: Record<string, Record<string, number | string>>;
//   public static buildTable: Record<string, string[]>;
//   public static moveSpeed: number = 200;
//   public static roomSetting: {
//     dailyMoney: number;
//     cities: number;
//     bouts: number;
//     fogOpen: boolean;
//     weather: string;
//     aiLvl: string;
//   } = {
//     dailyMoney: 1000,
//     cities: 0,
//     bouts: 0,
//     fogOpen: false,
//     weather: "snowy",
//     aiLvl: "",
//   };
//   public static init() {
//     let total = RES.getRes("battle_data_base");
//     StaticDataManager.engineCost = total["engineCost"];
//     StaticDataManager.viewCost = total["viewCost"];
//     StaticDataManager.gf = total["gf"];
//     StaticDataManager.gfGeo_g = total["gfGeo_g"];
//     StaticDataManager.gfGeo_f = total["gfGeo_f"];
//     StaticDataManager.weather_g = total["weather_g"];
//     StaticDataManager.weather_f = total["weather_f"];
//     StaticDataManager.unit = total["unit"];
//     StaticDataManager.commander = total["commander"];
//     let buildTable: Record<string, string[]> = {};
//     for (let i in total["unit"]) {
//       let buildings: string[] = (total["unit"][i]["builFrom"] as string).split(
//         ","
//       );
//       for (let j of buildings) {
//         if (buildTable[j] === undefined) {
//           buildTable[j] = [i];
//         } else {
//           buildTable[j].push(i);
//         }
//       }
//     }
//     StaticDataManager.buildTable = buildTable;
//   }
//   public static updateRoomSetting(data: any) {
//     this.roomSetting = data;
//   }
//   /**
//    * checkData
//    */
//   public static checkData() {
//     // geo types
//     let geotypes: string[] = Object.keys(
//       StaticDataManager.engineCost[Object.keys(StaticDataManager.engineCost)[0]]
//     );
//     for (let i = 0; i < geotypes.length; ++i) {
//       for (let j = i + 1; j < geotypes.length; ++j) {
//         if (geotypes[i] === geotypes[j]) {
//           throw new Error("资源文件: geo types error1");
//         }
//       }
//     }
//     if (
//       StaticDataManager._checkDataIsSame(
//         geotypes,
//         Object.keys(
//           StaticDataManager.viewCost[Object.keys(StaticDataManager.viewCost)[0]]
//         )
//       ) &&
//       StaticDataManager._checkDataIsSame(
//         geotypes,
//         Object.keys(
//           StaticDataManager.gfGeo_g[Object.keys(StaticDataManager.gfGeo_g)[0]]
//         )
//       ) &&
//       StaticDataManager._checkDataIsSame(
//         geotypes,
//         Object.keys(
//           StaticDataManager.gfGeo_f[Object.keys(StaticDataManager.gfGeo_f)[0]]
//         )
//       )
//     ) {
//       throw new Error("resouce geo error2");
//     }
//     // unit types
//     let unittypes: string[] = Object.keys(StaticDataManager.gf);
//     for (let i = 0; i < unittypes.length; ++i) {
//       for (let j = i + 1; j < unittypes.length; ++j) {
//         if (unittypes[i] === unittypes[j]) {
//           throw new Error("资源文件: unit types error1");
//         }
//       }
//     }
//     if (
//       StaticDataManager._checkDataIsSame(
//         unittypes,
//         Object.keys(StaticDataManager.gf)
//       ) &&
//       StaticDataManager._checkDataIsSame(
//         unittypes,
//         Object.keys(StaticDataManager.gfGeo_g)
//       ) &&
//       StaticDataManager._checkDataIsSame(
//         unittypes,
//         Object.keys(StaticDataManager.gfGeo_f)
//       ) &&
//       StaticDataManager._checkDataIsSame(
//         unittypes,
//         Object.keys(StaticDataManager.weather_g)
//       ) &&
//       StaticDataManager._checkDataIsSame(
//         unittypes,
//         Object.keys(StaticDataManager.weather_f)
//       ) &&
//       StaticDataManager._checkDataIsSame(
//         unittypes,
//         Object.keys(StaticDataManager.unit)
//       )
//     ) {
//       throw new Error("resource unit types error2");
//     }
//   }
//   private static _checkDataIsSame(keys1: string[], keys2: string[]) {
//     if (keys1.length !== keys2.length) {
//       return false;
//     }
//     for (let i of keys1) {
//       if (!(i in keys2)) {
//         return false;
//       }
//     }
//     return true;
//   }
//   public static countAtkResult(
//     atk_sprite: BattleUnitProps,
//     def_sprite: BattleUnitProps,
//     atk_geo: string,
//     def_geo: string
//   ) {
//     // from: geo hero unit weather
//     // to: g, f, t_g, t_f
//     return {
//       restBullet: 1,
//       restBlood: 1,
//       targetRestBullet: 2,
//       targetRestBlood: 2,
//     };
//   }
//   public static drawMap(map: BattleMapProps, container: eui.Group) {
//     container.removeChildren();
//     let [width, height] = [map.sizeState.width, map.sizeState.height];
//     container.width = MINI_MAP_BLOCK_WIDTH * width;
//     container.height = MINI_MAP_BLOCK_WIDTH * height;
//     let geoLayer = map.geoLayer;
//     const drawRect = (
//       index: number,
//       color: number,
//       strake = false,
//       alpha = 1
//     ) => {
//       let tmp_obj = new eui.Rect(MINI_MAP_BLOCK_WIDTH, MINI_MAP_BLOCK_WIDTH);
//       if (strake) {
//         tmp_obj.strokeColor = color;
//         tmp_obj.alpha = alpha;
//         tmp_obj.strokeWeight = MINI_MAP_BLOCK_WIDTH / 4;
//         tmp_obj.fillAlpha = 0;
//       } else {
//         tmp_obj.fillColor = color;
//         tmp_obj.fillAlpha = alpha;
//       }
//       tmp_obj.x = (index % width) * MINI_MAP_BLOCK_WIDTH;
//       tmp_obj.y = Math.floor(index / width) * MINI_MAP_BLOCK_WIDTH;
//       // console.log(tmp_obj.x, tmp_obj.y, tmp_obj.width, tmp_obj.height, tmp_obj.alpha, tmp_obj.fillColor, container);
//       container.addChild(tmp_obj);
//       // console.log('add')
//       // graphics.beginFill(0xffffff, 1);
//       // graphics.drawRect(
//       //     (index % width + 0.5) * MINI_MAP_BLOCK_WIDTH,
//       //     (0.5 + Math.floor(index / width)) * MINI_MAP_BLOCK_WIDTH,
//       //     MINI_MAP_BLOCK_WIDTH, MINI_MAP_BLOCK_WIDTH
//       // );
//       // graphics.endFill();
//     };
//     for (let i = 0; i < geoLayer.length; i++) {
//       switch (BattleGeoTypes[geoLayer[i]]) {
//         case "plain":
//           drawRect(i, 0x1111ff);
//           break;
//         case "bridge":
//         case "road":
//           drawRect(i, 0xff0022);
//           break;
//         case "sea":
//         case "rocks":
//           drawRect(i, 0xff11ff);
//           break;
//         case "forest":
//           drawRect(i, 0x111111);
//           break;
//         case "lake":
//           drawRect(i, 0x000000);
//           break;
//         case "mountain":
//           drawRect(1, 0x222222);
//           break;
//         default:
//           break;
//       }
//     }
//     let buildLayer = map.buildLayer;
//     for (let i in buildLayer) {
//       let for_index = parseInt(i);
//       if (BattleBuildTypes[for_index] === "capital") {
//         switch (buildLayer[i].flag) {
//           case "red":
//             drawRect(for_index, 0x7faaaa);
//             break;
//           case "blue":
//             drawRect(for_index, 0x7faaaa);
//             break;
//           case "yellow":
//             drawRect(for_index, 0x7faaaa);
//             break;
//           case "green":
//             drawRect(for_index, 0x7faaaa);
//             break;
//           default:
//             drawRect(for_index, 0x876511);
//             break;
//         }
//       } else {
//         switch (buildLayer[i].flag) {
//           case "red":
//             drawRect(for_index, 0x7faaaa);
//             break;
//           case "blue":
//             drawRect(for_index, 0x7faaaa);
//             break;
//           case "yellow":
//             drawRect(for_index, 0x7faaaa);
//             break;
//           case "green":
//             drawRect(for_index, 0x7faaaa);
//             break;
//           default:
//             drawRect(for_index, 0x876511);
//             break;
//         }
//       }
//     }
//     let unitLayer = map.unitLayer;
//     for (let i in unitLayer) {
//       let for_index = parseInt(i);
//       switch (unitLayer[i].flag) {
//         case "red":
//           drawRect(for_index, 0x7faaaa, true);
//           break;
//         case "blue":
//           drawRect(for_index, 0x7faaaa, true);
//           break;
//         case "yellow":
//           drawRect(for_index, 0x7faaaa, true);
//           break;
//         case "green":
//           drawRect(for_index, 0x7faaaa, true);
//           break;
//         default:
//           drawRect(for_index, 0x876511, true);
//           break;
//       }
//     }
//   }
// }
// /**********************************************************************/
// // --------------------user manager, 用户管理--------------------------//
// /**********************************************************************/
// interface PlayerController {
//   isComputer: boolean;
//   isRoomOwner?: boolean;
//   userId?: string;
//   username?: string;
//   flag?: string;
//   playerSetting: BattlePlayerProps;
//   grade?: BattlePlayerGradeProps;
// }
// /**
//  * 玩家管理器
//  */
// class PlayerManager {
//   private static users: Record<string, PlayerController> = {};
//   public static nowFlag: string;
//   public static initUsers(
//     users: Record<string, PlayerController>,
//     nowFlag: string
//   ) {
//     for (let i in users) {
//       users[i].grade = {
//         destroyUnitMoney: 0,
//         allUnitMoney: 0,
//         lostUnitMoney: 0,
//         nowUnitMoney: 0,
//       };
//       users[i].flag = i;
//       if (users[i].username === undefined) {
//         users[i].username =
//           users[i].playerSetting.commanders.length === 0
//             ? "commander"
//             : users[i].playerSetting.commanders[0];
//       }
//       if (nowFlag === i) {
//         users[i].isRoomOwner = true;
//       } else {
//         users[i].isRoomOwner = false;
//       }
//     }
//     this.users = users;
//     this.nowFlag = nowFlag;
//   }
//   public static getPlayerController(flag: string) {
//     return this.users[flag];
//   }
//   public static getPlayerFlags() {
//     return Object.keys(this.users);
//   }
//   public static update(data: any) {
//     this.nowFlag = data[""];
//     for (let i in data["usersSetting"]) {
//       let tmp_data: PlayerController = {
//         playerSetting: {
//           enemies: data["usersSetting"][i]["enemies"],
//           nowMoney: data["usersSetting"][i]["nowMoney"],
//           taskBg: data["usersSetting"][i]["taskBg"],
//           taskTarget: data["usersSetting"][i]["taskTarget"],
//           commanders: data["usersSetting"][i]["commanders"],
//         },
//         flag: i,
//         isComputer: data["usersSetting"][i]["isComputer"],
//         userId: data["usersSetting"][i]["userId"],
//         username: data["usersSetting"][i]["userName"],
//         grade: {
//           allUnitMoney: data["usersSetting"][i]["allUnitMoney"],
//           destroyUnitMoney: data["usersSetting"][i]["destroyUnitMoney"],
//           lostUnitMoney: data["usersSetting"][i]["lostUnitMoney"],
//           nowUnitMoney: data["usersSetting"][i]["nowUnitMoney"],
//         },
//       };
//       this.users[i] = tmp_data;
//     }
//   }
// }
// class ServerMsgEvent extends egret.Event {
//   public static readonly DATE: string = "ServerMsgEvent";
//   public constructor(
//     type: string = ServerMsgEvent.DATE,
//     bubbles: boolean = false,
//     cancelable: boolean = false
//   ) {
//     super(type, bubbles, cancelable);
//   }
// }
// /**
//  * 自行添加(once)
//  * status: wait user, wait
//  */
// class GameServer extends egret.DisplayObjectContainer {
//   static instance: GameServer;
//   public webSocket: egret.WebSocket;
//   public msgQ: any[];
//   public isRunning: boolean;
//   public serverState: "send" | "rev" | "visitor";
//   public myFlag: string;
//   public isGameOver: boolean;
//   public roomId: string;
//   public userToken: string;
//   public userInfo: Record<"email"|"headerUrl"|"revEmailType"|"username", string>;
//   public battle: Battle;
//   private constructor() {
//     super();
//     this.serverState = "send";
//     this.isGameOver = false;
//     this.isRunning = false;
//     this.webSocket = new egret.WebSocket();
//     this.msgQ = [];
//     // this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
//     // this.webSocket.connect("127.0.0.1", 8000);
//     // console.log('begin connect')
//   }
//   public connect(room_id: string) {
//     // this.webSocket.close()
//     if (!this.webSocket.connected) {
//       console.log("flsd7089");
//       this.roomId = room_id;
//       this.webSocket.connectByUrl(WEB_SOCKET_URL + room_id + "/");
//     }
//   }
//   public installListener() {
//     this.webSocket.addEventListener(
//       egret.ProgressEvent.SOCKET_DATA,
//       this.onReceiveMessage,
//       this
//     );
//     this.webSocket.addEventListener(
//       egret.Event.CLOSE,
//       this.onDisConnected,
//       this
//     );
//   }
//   public setMyInfo(flag: string) {
//     console.log(flag)
//     this.myFlag = flag;
//     if(flag===null||flag===undefined){
//       this.serverState = "visitor";
//     }
//   }
//   public disconnect() {
//     this.webSocket.close();
//   }
//   static getInstance(): GameServer {
//     if (!GameServer.instance) {
//       GameServer.instance = new GameServer();
//     }
//     return GameServer.instance;
//   }
//   // public boutEnd(){}
//   // /**
//   //  *  getRoomId
//   //  */
//   // public getRoomId() {
//   //     this.webSocket.writeUTF(JSON.stringify({
//   //         type: 'get_room_id'
//   //     }));
//   // }
//   /**
//    * sendChatMsg
//    */
//   // public sendChatMsg(info: BEChatMsg) {
//   //     this.webSocket.writeUTF(JSON.stringify(info));
//   // }
//   // private onSocketOpen() {
//   //     var cmd = {data: "Hello Egret WebSocket"};
//   //     console.log("连接成功，发送数据：" + cmd);
//   //     this.webSocket.writeUTF(JSON.stringify(cmd));
//   // }
//   private onReceiveMessage(e: egret.Event): void {
//     let msg: unknown;
//     try {
//       msg = JSON.parse(this.webSocket.readUTF());
//     } catch (error) {
//       console.log("error", msg, error);
//       return;
//     }
//     msg = msg['message']
//     console.log("rev msg", msg);
//     switch (msg["type"]) {
//       case "chat":
//         this.battle.handleChatServer(msg["data"]);
//         break;
//       case "action":
//       case "boutEnd":
//       case "result":
//       case "provideAI":
//       case "updateMap":
//         this.msgQ.push(msg);
//         this.handleActionQ();
//         break;
//       default:
//         break;
//     }
//     // let battleEvent = new BattleEvent();
//     // battleEvent._data = {
//     //     type: BEOthersType.chatMsg,
//     //     from: "from",
//     //     to: "to",
//     //     time: 9999,
//     //     message: "msg",
//     // }
//     // this.dispatchEvent(battleEvent);
//     // let tmp_event = new ServerMsgEvent();
//     // tmp_event.data = msg;
//     // this.dispatchEvent(tmp_event);
//   }
//   public handleActionQ() {
//     let msg = this.msgQ[0];
//     if (msg === undefined) {
//       return;
//     }
//     this.msgQ.splice(0, 1);
//     if (this.isRunning) {
//       return;
//     }
//     switch (msg["type"]) {
//       case "boutEnd":
//         this.battle.handleBoundEnd();
//         break;
//       case "provideAI":
//         this.battle.mapView.collectMap();
//         new BattleTree(
//           this.battle,
//           PlayerManager.getPlayerController(this.myFlag)
//         ).nextAction();
//         break;
//       case "action":
//         this.battle.mapView.collectMap();
//         this.battle.HandleUnitAction(msg["data"]);
//         break;
//       case "updateMap":
//         PlayerManager.update(msg["data"]);
//         let map_data = msg["data"]['mapData'];
//         for(let i in map_data['buildLayer']){
//           map_data['buildLayer'][i]['typeName'] = map_data['buildLayer'][i]['type'];
//         }        
//         for(let i in map_data['unitLayer']){
//           map_data['unitLayer'][i]['typeName'] = map_data['unitLayer'][i]['type'];
//         }
//         this.battle.updateMapData(map_data);
//         break;
//       case "result":
//         window.history.back();
//         this.isGameOver = true;
//       default:
//         break;
//     }
//   }
//   private onDisConnected(e: egret.Event): void {
//     console.log("disconnected");
//     if (this.isGameOver) {
//       return;
//     }
//     this.connect(this.roomId);
//   }
//   public send(data: any) {
//     console.log(this.serverState, 'server', data)
//     if (this.serverState === "visitor") {
//       return;
//     }
//     if (this.serverState === "rev" && data["type"] !== "chat") {
//       return;
//     }
//     this.webSocket.writeUTF(JSON.stringify(data));
//   }
// }
// class BattleUIBase extends eui.UILayer {
//   public mapView: BattleMapView;
//   protected mapContianer: egret.ScrollView;
//   protected interaction: eui.UILayer;
//   protected returnButton: eui.Image;
//   protected showUnitInfoButton: eui.Image;
//   protected swapAreaTypeButton: eui.Image;
//   protected chooseUpRoad: eui.Image;
//   protected chooseDownRoad: eui.Image;
//   protected navButton: eui.Image;
//   protected chatButton: eui.Image;
//   protected gameDataButton: eui.Image;
//   protected endButton: eui.Image;
//   protected guidebookButton: eui.Image;
//   protected scaleMapButton: eui.Image;
//   protected settingButton: eui.Image;
//   protected backgroundButton: eui.Image;
//   protected destoryButton: eui.Image;
//   protected rightMenu: BCRightMenu;
//   protected eleInfoView: BCUnitInfo;
//   protected planSupplyView: BCSetSupply;
//   protected buyView: BCBuy;
//   protected backgroundView: BCUnitInfo;
//   protected guideBookView: BCGuideBook;
//   protected gameDataView: BCGuideBook;
//   protected settingView: BCSetting;
//   protected chatView: BCChat;
//   protected miniMapView: BCMiniMap;
//   protected chatMessagesView: BCChatMessages;
//   constructor() {
//     super();
//     this.initUI();
//   }
//   protected initUI() {
//     this.planSupplyView = new BCSetSupply();
//     this.buyView = new BCBuy();
//     this.guideBookView = new BCGuideBook();
//     this.gameDataView = new BCGuideBook();
//     this.settingView = new BCSetting();
//     this.chatView = new BCChat();
//     this.eleInfoView = new BCUnitInfo();
//     this.miniMapView = new BCMiniMap();
//     this.backgroundView = new BCUnitInfo();
//     this.chatMessagesView = new BCChatMessages();
//     this.chatView.addEventListener(BattleEvent.DATE, this.handleChatView, this);
//     // this.width = egret.MainContext.instance.stage.stageWidth
//     // this.height = egret.MainContext.instance.stage.stageHeight
//     this.mapView = new BattleMapView();
//     this.mapContianer = new egret.ScrollView(this.mapView);
//     this.mapContianer.bounces = false;
//     this.mapContianer.width = egret.MainContext.instance.stage.stageWidth;
//     this.mapContianer.height = egret.MainContext.instance.stage.stageHeight;
//     this.addChild(this.mapContianer);
//     // this.mapContianer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this._clickBegin, this)
//     // this.mapContianer.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this._clickCancel, this)
//     // this.mapContianer.addEventListener(egret.TouchEvent.TOUCH_END, this._clickEnd, this)
//     // this.addEventListener(BattleEvent.DATE, this.handleListener, this);
//     // this.addChild(this.chatMessagesView);
//     this.interaction = new eui.UILayer();
//     this.addChild(this.interaction);
//     this.interaction.touchThrough = true;
//     // this.mapView.addEventListener(BattleEventToUI.DATE, this.handleListener, this)
//     this.returnButton = new eui.Image();
//     this.returnButton.source = RES.getRes("battle_ui_return_png");
//     this.returnButton.right = 10;
//     this.returnButton.bottom = 10;
//     this.returnButton.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.handleReturnButton,
//       this
//     );
//     this.rightMenu = new BCRightMenu();
//     this.rightMenu.addEventListener(
//       BattleEvent.DATE,
//       this.handleRightMenu,
//       this
//     );
//     this.showUnitInfoButton = new eui.Image();
//     this.showUnitInfoButton.source = RES.getRes("battle_ui_info_png");
//     this.showUnitInfoButton.y = 50;
//     this.showUnitInfoButton.x = 10;
//     this.showUnitInfoButton.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.handleInfoButton,
//       this
//     );
//     this.swapAreaTypeButton = new eui.Image();
//     this.swapAreaTypeButton.source = RES.getRes("battle_ui_switch_png");
//     this.swapAreaTypeButton.x = 10;
//     this.swapAreaTypeButton.y = 200;
//     this.swapAreaTypeButton.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.handleSwitchAreaButton,
//       this
//     );
//     this.chooseUpRoad = new eui.Image();
//     this.chooseUpRoad.source = RES.getRes("battle_ui_up_png");
//     this.chooseUpRoad.right = 10;
//     this.chooseUpRoad.y = 150;
//     this.chooseUpRoad.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.handleChooseUpRoad,
//       this
//     );
//     this.chooseDownRoad = new eui.Image();
//     this.chooseDownRoad.source = RES.getRes("battle_ui_down_png");
//     this.chooseDownRoad.right = 10;
//     this.chooseDownRoad.y = 300;
//     this.chooseDownRoad.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.handleChooseDownRoad,
//       this
//     );
//     this.navButton = new eui.Image();
//     this.navButton.source = RES.getRes("battle_ui_nav_png");
//     this.navButton.right = 10;
//     this.navButton.bottom = 150;
//     this.navButton.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.showInteractionView.bind(this, "mainExpend"),
//       this
//     );
//     this.chatButton = new eui.Image();
//     this.chatButton.source = RES.getRes("battle_ui_chat_png");
//     this.chatButton.right = 900;
//     this.chatButton.bottom = 10;
//     this.chatButton.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.showInteractionView.bind(this, "chat"),
//       this
//     );
//     this.gameDataButton = new eui.Image();
//     this.gameDataButton.source = RES.getRes("battle_ui_data_png");
//     this.gameDataButton.right = 1050;
//     this.gameDataButton.bottom = 10;
//     this.gameDataButton.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.handleGameData,
//       this
//     );
//     this.endButton = new eui.Image();
//     this.endButton.source = RES.getRes("battle_ui_end_png");
//     this.endButton.right = 150;
//     this.endButton.bottom = 10;
//     this.endButton.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.handleBoundEnd,
//       this
//     );
//     this.guidebookButton = new eui.Image();
//     this.guidebookButton.source = RES.getRes("battle_ui_guidebook_png");
//     this.guidebookButton.right = 300;
//     this.guidebookButton.bottom = 10;
//     this.guidebookButton.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.showInteractionView.bind(this, "guidebook"),
//       this
//     );
//     this.scaleMapButton = new eui.Image();
//     this.scaleMapButton.source = RES.getRes("battle_ui_scale_png");
//     this.scaleMapButton.right = 450;
//     this.scaleMapButton.bottom = 10;
//     this.scaleMapButton.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.handleScaleMap,
//       this
//     );
//     this.settingButton = new eui.Image();
//     this.settingButton.source = RES.getRes("battle_ui_set_png");
//     this.settingButton.right = 600;
//     this.settingButton.bottom = 10;
//     this.settingButton.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.showInteractionView.bind(this, "setting"),
//       this
//     );
//     this.backgroundButton = new eui.Image();
//     this.backgroundButton.source = RES.getRes("battle_ui_background_png");
//     this.backgroundButton.right = 750;
//     this.backgroundButton.bottom = 10;
//     this.backgroundButton.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.showInteractionView.bind(this, "background"),
//       this
//     );
//     this.destoryButton = new eui.Image();
//     this.destoryButton.source = RES.getRes("battle_ui_destory_png");
//     this.destoryButton.right = 10;
//     this.destoryButton.bottom = 300;
//     this.destoryButton.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.handleDestoryUnitButton,
//       this
//     );
//   }
//   protected childrenCreated(): void {
//     super.childrenCreated();
//     this.interaction.addChild(this.eleInfoView);
//     this.interaction.addChild(this.miniMapView);
//     this.interaction.addChild(this.gameDataView);
//     this.interaction.addChild(this.chatView);
//     this.interaction.addChild(this.backgroundView);
//     this.interaction.addChild(this.guideBookView);
//     this.interaction.addChild(this.chatMessagesView);
//     this.showInteractionView("main");
//     // this.settingView.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleExitGameButton, this);
//     // this.gameServer = new GameServer();
//     // this.test();
//   }
//   // protected _clickBegin(evt: egret.TouchEvent) {
//   //     this.isEffectiveClick = false;
//   //     // console.log('click begin')
//   // }
//   // protected _clickCancel(evt: egret.TouchEvent) {
//   //     this.isEffectiveClick = true
//   //     console.log('click cancel')
//   // }
//   // protected _clickEnd(evt: egret.TouchEvent) {
//   //     if (this.isEffectiveClick) {
//   //         // console.log('return to main')
//   //     }
//   //     this.isEffectiveClick = false;
//   // }
//   /**
//    * show LandMarks
//    */
//   public showCoverArea(
//     posIds: number[],
//     coverType: typeof BattleLandMarkTypes[number],
//     canListen = false
//   ) {
//     let map_width = this.mapView.mapData.sizeState.width;
//     let landMarkLayer = this.mapView.coverLayer;
//     landMarkLayer.removeChildren();
//     for (let i in posIds) {
//       let x = posIds[i] % map_width;
//       let y = Math.floor(posIds[i] / map_width);
//       let tmp_obj = new BattleEleLandMark(coverType, posIds[i], canListen);
//       tmp_obj.x = BLOCK_WIDTH * x + BORDER_SIZE[0];
//       tmp_obj.y = BLOCK_WIDTH * y + BORDER_SIZE[1];
//       if (canListen) {
//         tmp_obj.addEventListener(BattleEvent.DATE, this.handleEleClicked, this);
//       }
//       landMarkLayer.addChild(tmp_obj);
//     }
//   }
//   /**
//    * 选择视窗
//    * 看图纸
//    * @param type
//    */
//   public showInteractionView(
//     type:
//       | "moveArea"
//       | "atkArea"
//       | "eleInfo"
//       | "sortieRoads"
//       | "roadChoose"
//       | "targetArea"
//       | "buy"
//       | "planSupply"
//       | "sortieArea"
//       | "sortieMenu"
//       | "main"
//       | "guidebook"
//       | "mainExpend"
//       | "background"
//       | "playerInfo"
//       | "scaledMap"
//       | "setting"
//       | "chat"
//       | "miniMap"
//   ) {
//     let interaction = this.interaction;
//     interaction.removeChildren();
//     switch (type) {
//       case "moveArea":
//         interaction.addChild(this.showUnitInfoButton);
//         interaction.addChild(this.swapAreaTypeButton);
//         interaction.addChild(this.returnButton);
//         break;
//       case "eleInfo":
//         interaction.addChild(this.eleInfoView);
//         interaction.addChild(this.destoryButton);
//         interaction.addChild(this.returnButton);
//         break;
//       case "roadChoose":
//         interaction.addChild(this.chooseUpRoad);
//         interaction.addChild(this.chooseDownRoad);
//         interaction.addChild(this.rightMenu);
//         interaction.addChild(this.returnButton);
//         break;
//       case "sortieMenu":
//         interaction.addChild(this.rightMenu);
//         interaction.addChild(this.returnButton);
//         break;
//       case "atkArea":
//         interaction.addChild(this.returnButton);
//         break;
//       case "buy":
//         this.interaction.addChild(this.returnButton);
//         this.interaction.addChild(this.buyView);
//         break;
//       case "planSupply":
//         interaction.addChild(this.returnButton);
//         interaction.addChild(this.planSupplyView);
//         break;
//       case "targetArea":
//         interaction.addChild(this.returnButton);
//         break;
//       case "sortieRoads":
//         interaction.addChild(this.chooseUpRoad);
//         interaction.addChild(this.chooseDownRoad);
//         interaction.addChild(this.returnButton);
//         break;
//       case "sortieArea":
//         interaction.addChild(this.returnButton);
//         break;
//       // 主界面了哦
//       case "main":
//         interaction.addChild(this.chatMessagesView);
//         interaction.addChild(this.navButton);
//         break;
//       case "mainExpend":
//         interaction.addChild(this.endButton);
//         interaction.addChild(this.chatButton);
//         interaction.addChild(this.settingButton);
//         interaction.addChild(this.gameDataButton);
//         interaction.addChild(this.scaleMapButton);
//         interaction.addChild(this.guidebookButton);
//         interaction.addChild(this.backgroundButton);
//         interaction.addChild(this.returnButton);
//         break;
//       case "background":
//         interaction.addChild(this.eleInfoView);
//         interaction.addChild(this.returnButton);
//         break;
//       case "guidebook":
//         interaction.addChild(this.returnButton);
//         interaction.addChild(this.guideBookView);
//         break;
//       case "playerInfo":
//         interaction.addChild(this.returnButton);
//         interaction.addChild(this.gameDataView);
//         break;
//       case "setting":
//         interaction.addChild(this.returnButton);
//         interaction.addChild(this.settingView);
//         break;
//       case "chat":
//         interaction.addChild(this.chatMessagesView);
//         interaction.addChild(this.returnButton);
//         interaction.addChild(this.chatView);
//         break;
//       case "miniMap":
//         this.interaction.addChild(this.returnButton);
//         this.interaction.addChild(this.miniMapView);
//         break;
//       default:
//         break;
//     }
//   }
//   protected handleEleClicked(evt: BattleEvent) {}
//   protected handleReturnButton(evt: egret.TouchEvent) {}
//   protected handleRightMenu(evt: BattleEvent) {}
//   protected handleInfoButton(evt: egret.TouchEvent) {}
//   protected handleSwitchAreaButton(evt: egret.TouchEvent) {}
//   protected handleDestoryUnitButton(evt: egret.TouchEvent) {}
//   protected handleChooseUpRoad(evt: egret.TouchEvent) {}
//   protected handleChooseDownRoad(evt: egret.TouchEvent) {}
//   protected handleGameData(evt: egret.TouchEvent) {}
//   protected handleScaleMap(evt: egret.TouchEvent) {}
//   protected handleSaveGameButton(evt: egret.TouchEvent) {}
//   protected handleExitGameButton(evt?: GuiEvent) {}
//   protected handleBoundEnd(evt?: egret.TouchEvent) {}
//   protected handleChatView(evt: BattleEvent) {}
// }
// class Battle extends BattleUIBase {
//   // public static nowState: BattleStates = {
//   //     type: BattleStateType.blank
//   // };
//   public static nowState: {
//     type: BattleStateType;
//     mathmanUnit?: MathManUnit;
//   } = {
//     type: BattleStateType.blank,
//   };
//   protected isEffectiveClick: boolean;
//   protected isOperationLocked: boolean;
//   protected isMyBout: boolean;
//   protected myFlag: typeof PlayerFlagTypes[number] = "red";
//   protected gameServer: GameServer;
//   constructor() {
//     super();
//     this.isOperationLocked = false;
//     // this.test()
//     this.isMyBout = true;
//   }
//   protected childrenCreated(): void {
//     super.childrenCreated();
//     this.gameServer = GameServer.getInstance();
//     // this.settingView.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleExitGameButton, this);
//     this.settingView.addEventListener(
//       GuiEvent.DATE,
//       this.handleExitGameButton,
//       this
//     );
//     // this.test();
//   }
//   /**
//    * test
//    */
//   public test() {
//     let tmp_map = DataMaker.makeBattleMap(20, 20);
//     this.initMap(tmp_map);
//     PlayerManager.initUsers(
//       {
//         red: {
//           playerSetting: {
//             enemies: ["blue"] as typeof PlayerFlagTypes[number][],
//             taskBg: "taskBG",
//             taskTarget: "taskTarget",
//             commanders: ["google"],
//             nowMoney: 100,
//           },
//           userId: "",
//           username: "",
//           flag: "red",
//           grade: {
//             lostUnitMoney: 0,
//             nowUnitMoney: 0,
//             allUnitMoney: 0,
//             destroyUnitMoney: 0,
//           },
//           isComputer: false,
//         },
//         blue: {
//           flag: "blue",
//           playerSetting: {
//             enemies: ["red"] as typeof PlayerFlagTypes[number][],
//             taskBg: "taskBG",
//             taskTarget: "taskTarget",
//             commanders: ["google"],
//             nowMoney: 100,
//           },
//           userId: "",
//           username: "",
//           grade: {
//             lostUnitMoney: 0,
//             nowUnitMoney: 0,
//             allUnitMoney: 0,
//             destroyUnitMoney: 0,
//           },
//           isComputer: false,
//         },
//       },
//       "red"
//     );
//     this.chatMessagesView.putMessage([
//       {
//         type: BEOthersType.chatMsg,
//         from: "from11111",
//         to: "to",
//         message: "mesg",
//         time: new Date().getTime() + 1200,
//       },
//       {
//         type: BEOthersType.chatMsg,
//         from: "from2222",
//         to: "to",
//         message: "mesg",
//         time: new Date().getTime() + 2200,
//       },
//       {
//         type: BEOthersType.chatMsg,
//         from: "from",
//         to: "to",
//         message: "mesg",
//         time: new Date().getTime() + 3200,
//       },
//       {
//         type: BEOthersType.chatMsg,
//         from: "from",
//         to: "to",
//         message: "mesg",
//         time: new Date().getTime() + 4200,
//       },
//       {
//         type: BEOthersType.chatMsg,
//         from: "from",
//         to: "to",
//         message: "mesg",
//         time: new Date().getTime() + 5200,
//       },
//       {
//         type: BEOthersType.chatMsg,
//         from: "from",
//         to: "to",
//         message: "mesg",
//         time: new Date().getTime() + 6200,
//       },
//       {
//         type: BEOthersType.chatMsg,
//         from: "from777777",
//         to: "to",
//         message: "mesg",
//         time: new Date().getTime(),
//       },
//     ]);
//     // this.mapView.collectMap();
//     // let mathmanUnit = new MathManUnit(this.mapView.unitCache[0], this.mapView.mapData);
//     // console.log(mathmanUnit.countNearestTarget())
//     // console.log(mathmanUnit.sprite.posId)
//     // console.log(mathmanUnit.countAStar(16), 'a star')
//     // this.showCoverArea(mathmanUnit.countAStar(16), "moveArea");
//     // let tool = new MathManBase();
//     // let arrear = tool.countCityCostMap(mathmanUnit.sprite.posId, mathmanUnit.costMap);
//     // console.log(arrear, 'arrear')
//     // let tmp_ai = new BattleTree(this, PlayerManager.getPlayerController("red"), () => {
//     //     console.log('bout end')
//     // })
//     // setTimeout(() => {
//     //     tmp_ai.begin();
//     // }, 2000);
//     // tmp_ai.begin();
//   }
//   /**
//    * initMap
//    */
//   public initMap(map: BattleMapProps) {
//     console.log(map, map);
//     let map_width = map.sizeState.width;
//     let map_height = map.sizeState.height;
//     let scale = map.sizeState.scale;
//     MathManBase.mapWidth = map_width;
//     MathManBase.mapHeight = map_height;
//     // console.log('scroll', this.mapContianer.width, this.mapContianer.height)
//     this.mapView.baseLayer.height = (map_height + 8) * BLOCK_WIDTH;
//     this.mapView.baseLayer.width = (map_width + 8) * BLOCK_WIDTH;
//     this.mapView.baseLayer.graphics.beginFill(0xaaaaaa);
//     this.mapView.baseLayer.graphics.drawRect(
//       0,
//       0,
//       this.mapView.baseLayer.width,
//       this.mapView.baseLayer.height
//     );
//     this.mapView.baseLayer.graphics.endFill();
//     this.mapView.mapData = map;
//     let tmp_geo = map.geoLayer;
//     let tmp_geo_layer = this.mapView.geoLayer;
//     for (let i = 0; i < tmp_geo.length; ++i) {
//       let tmp_obj = new BattleEleGeo(BattleGeoTypes[tmp_geo[i]]);
//       tmp_obj.x = (i % map_width) * BLOCK_WIDTH + BORDER_SIZE[0];
//       tmp_obj.y = Math.floor(i / map_width) * BLOCK_WIDTH + BORDER_SIZE[1];
//       tmp_geo_layer.addChild(tmp_obj);
//       // tmp_obj.addEventListener(BattleEvent.DATE, this.handleEleClicked, this);
//     }
//     // let tmp_build_layer = this.mapView.buildLayer;
//     // for (let i in map.buildLayer) {
//     //   let tmp_obj = new BattleEleBuild(map.buildLayer[i].type, parseInt(i));
//     //   tmp_obj.swapMovieFlag(map.buildLayer[i].flag);
//     //   tmp_obj.x = (parseInt(i) % map_width) * BLOCK_WIDTH + BORDER_SIZE[0];
//     //   tmp_obj.y =
//     //     Math.floor(parseInt(i) / map_width) * BLOCK_WIDTH + BORDER_SIZE[1];
//     //   tmp_build_layer.addChild(tmp_obj);
//     // }
//     // let tmp_unit_layer = this.mapView.unitLayer;
//     // for (let i in map.unitLayer) {
//     //   let tmp_data = map.unitLayer[i];
//     //   let tmp_obj = new BattleEleUnit(
//     //     tmp_data.type,
//     //     parseInt(i),
//     //     map.unitLayer[i]
//     //   );
//     //   // tmp_obj.posId = parseInt(i);
//     //   tmp_obj.x = (parseInt(i) % map_width) * BLOCK_WIDTH + BORDER_SIZE[0];
//     //   tmp_obj.y =
//     //     Math.floor(parseInt(i) / map_width) * BLOCK_WIDTH + BORDER_SIZE[1];
//     //   tmp_unit_layer.addChild(tmp_obj);
//     //   tmp_obj.addEventListener(BattleEvent.DATE, this.handleEleClicked, this);
//     //   tmp_obj.swapMovieFlag(map.unitLayer[i].flag);
//     // }
//     this.updateMapData(map);
//     this.mapView.scaleX = scale;
//     this.mapView.scaleY = scale;
//   }
//   /**
//    * 
//    * @param map buildLayer, unitLayer
//    */
//   public updateMapData(map: BattleMapProps) {
//     // console.log(map, map)
//     // let map = data["mapData"];
//     let map_width = MathManBase.mapWidth;
//     console.log(map, 'data')
//     let tmp_build_layer = this.mapView.buildLayer;
//     let tmp_build_cache = this.mapView.buildCache;
//     for (let i in tmp_build_cache) {
//       let x_ = parseInt(i.split('-')[0])
//       let y_ = parseInt(i.split('-')[1])
//       let posId = y_ * map_width + x_;
//       let cache_obj = tmp_build_cache[posId];
//       let data_obj = map.buildLayer[i]
//       if (data_obj === undefined) {
//         tmp_build_layer.removeChild(cache_obj);
//       }else if(data_obj.type!==cache_obj.typeName){
//         tmp_build_layer.removeChild(tmp_build_cache[i]);
//       }else if(data_obj.flag!==cache_obj.movieFlag){
//         cache_obj.swapMovieFlag(data_obj.flag);
//       }else{
//         delete tmp_build_layer[i];
//       }
//     }
//     for(let i in map.buildLayer){
//       let x_ = parseInt(i.split('-')[0])
//       let y_ = parseInt(i.split('-')[1])
//       let posId = y_ * map_width + x_;
//       let tmp_obj = new BattleEleBuild(map.buildLayer[i].type, posId);
//       tmp_obj.swapMovieFlag(map.buildLayer[i].flag);
//       tmp_obj.x = x_ * BLOCK_WIDTH + BORDER_SIZE[0];
//       tmp_obj.y = y_ * BLOCK_WIDTH + BORDER_SIZE[1];
//       tmp_build_layer.addChild(tmp_obj);
//     }
//     // for (let i in map.buildLayer) {
//     //   let x_ = parseInt(i.split('-')[0])
//     //   let y_ = parseInt(i.split('-')[1])
//     //   let posId = y_ * map_width + x_;
//     //   let cache_obj = tmp_build_cache[posId];
//     //   let data_obj = map.buildLayer[i]
//     //   if (map.buildLayer[i].type === tmp_build_cache[posId].typeName) {
//     //     if (tmp_build_cache[posId].movieFlag !== map.buildLayer[i].flag) {
//     //       tmp_build_cache[posId].swapMovieFlag(map.buildLayer[i].flag);
//     //     }
//     //   } else {
//     //     let tmp_obj = new BattleEleBuild(map.buildLayer[i].type, posId);
//     //     tmp_obj.swapMovieFlag(map.buildLayer[i].flag);
//     //     tmp_obj.x = x_ * BLOCK_WIDTH + BORDER_SIZE[0];
//     //     tmp_obj.y = y_ * BLOCK_WIDTH + BORDER_SIZE[1];
//     //     tmp_build_layer.addChild(tmp_obj);
//     //   }
//     // }
//     let tmp_unit_layer = this.mapView.unitLayer;
//     let tmp_unit_cache = this.mapView.unitCache;
//     for (let i in tmp_unit_cache) {
//       if (map.unitLayer[i] === undefined) {
//         tmp_unit_layer.removeChild(tmp_unit_cache[i]);
//       }
//       let x_ = parseInt(i.split('-')[0])
//       let y_ = parseInt(i.split('-')[1])
//       let posId = y_ * map_width + x_;
//       let cache_obj = tmp_unit_cache[posId];
//       let data_obj = map.unitLayer[i]
//       if (data_obj === undefined) {
//         tmp_build_layer.removeChild(cache_obj);
//       }else if(data_obj.type!==cache_obj.typeName){
//         tmp_build_layer.removeChild(tmp_build_cache[i]);
//       }else if(data_obj.flag!==cache_obj.movieFlag){
//         cache_obj.swapMovieFlag(data_obj.flag);
//       }else{
//         delete tmp_unit_layer[i];
//       }
//     }
//     for (let i in map.unitLayer) {
//       let x_ = parseInt(i.split('-')[0])
//       let y_ = parseInt(i.split('-')[1])
//       let posId = y_ * map_width + x_;
//       let tmp_data = map.unitLayer[i];
//       let tmp_obj = new BattleEleUnit(
//         tmp_data.type,
//         posId,
//         map.unitLayer[i]
//       );
//       // tmp_obj.posId = parseInt(i);
//       tmp_obj.x = x_ * BLOCK_WIDTH + BORDER_SIZE[0];
//       tmp_obj.y = y_ * BLOCK_WIDTH + BORDER_SIZE[1];
//       tmp_unit_layer.addChild(tmp_obj);
//       tmp_obj.addEventListener(BattleEvent.DATE, this.handleEleClicked, this);
//       tmp_obj.swapMovieFlag(map.unitLayer[i].flag);
//       // if (map.unitLayer[i].type === tmp_unit_cache[posId].typeName) {
//       //   if (tmp_unit_cache[i].movieFlag !== map.unitLayer[i].flag) {
//       //     tmp_unit_cache[i].swapMovieFlag(map.unitLayer[i].flag);
//       //   }
//       //   tmp_unit_cache[i].updateByProps(map.unitLayer[i]);
//       // } else {
//       //   // let tmp_obj = new BattleEleBuild(map.buildLayer[i].type, parseInt(i));
//       //   // tmp_obj.swapMovieFlag(map.buildLayer[i].flag);
//       //   // tmp_obj.x = parseInt(i) % map_width * BLOCK_WIDTH + BORDER_SIZE[0];
//       //   // tmp_obj.y = Math.floor(parseInt(i) / map_width) * BLOCK_WIDTH + BORDER_SIZE[1];
//       //   // tmp_build_layer.addChild(tmp_obj);
//       //   let tmp_data = map.unitLayer[i];
//       //   let tmp_obj = new BattleEleUnit(
//       //     tmp_data.type,
//       //     parseInt(i),
//       //     map.unitLayer[i]
//       //   );
//       //   // tmp_obj.posId = parseInt(i);
//       //   tmp_obj.x = (parseInt(i) % map_width) * BLOCK_WIDTH + BORDER_SIZE[0];
//       //   tmp_obj.y =
//       //     Math.floor(parseInt(i) / map_width) * BLOCK_WIDTH + BORDER_SIZE[1];
//       //   tmp_unit_layer.addChild(tmp_obj);
//       //   tmp_obj.addEventListener(BattleEvent.DATE, this.handleEleClicked, this);
//       //   tmp_obj.swapMovieFlag(map.unitLayer[i].flag);
//       // }
//     }
//   }
//   protected _clickBegin(evt: egret.TouchEvent) {
//     this.isEffectiveClick = false;
//     // console.log('click begin')
//   }
//   protected _clickCancel(evt: egret.TouchEvent) {
//     this.isEffectiveClick = true;
//     console.log("click cancel");
//   }
//   protected _clickEnd(evt: egret.TouchEvent) {
//     if (this.isEffectiveClick) {
//       // console.log('return to main')
//     }
//     this.isEffectiveClick = false;
//   }
//   /**
//    * show LandMarks
//    */
//   public showCoverArea(
//     posIds: number[],
//     coverType: typeof BattleLandMarkTypes[number],
//     canListen = false
//   ) {
//     console.log("cover area", posIds);
//     let map_width = this.mapView.mapData.sizeState.width;
//     // let scale = this.scaleX;
//     let landMarkLayer = this.mapView.coverLayer;
//     landMarkLayer.removeChildren();
//     for (let i in posIds) {
//       let x = posIds[i] % map_width;
//       let y = Math.floor(posIds[i] / map_width);
//       let tmp_obj = new BattleEleLandMark(coverType, posIds[i], canListen);
//       tmp_obj.x = BLOCK_WIDTH * x + BORDER_SIZE[0];
//       tmp_obj.y = BLOCK_WIDTH * y + BORDER_SIZE[1];
//       if (canListen) {
//         tmp_obj.addEventListener(BattleEvent.DATE, this.handleEleClicked, this);
//       }
//       landMarkLayer.addChild(tmp_obj);
//     }
//   }
//   /**
//    * 选择视窗
//    * 看图纸
//    * @param type
//    */
//   public showInteractionView(
//     type:
//       | "moveArea"
//       | "atkArea"
//       | "eleInfo"
//       | "sortieRoads"
//       | "roadChoose"
//       | "targetArea"
//       | "buy"
//       | "planSupply"
//       | "sortieArea"
//       | "sortieMenu"
//       | "main"
//       | "guidebook"
//       | "mainExpend"
//       | "background"
//       | "playerInfo"
//       | "scaledMap"
//       | "setting"
//       | "chat"
//       | "miniMap"
//   ) {
//     this.hanldeToMain();
//     let interaction = this.interaction;
//     interaction.removeChildren();
//     switch (type) {
//       case "moveArea":
//         interaction.addChild(this.showUnitInfoButton);
//         interaction.addChild(this.swapAreaTypeButton);
//         interaction.addChild(this.returnButton);
//         break;
//       case "eleInfo":
//         interaction.addChild(this.eleInfoView);
//         interaction.addChild(this.destoryButton);
//         interaction.addChild(this.returnButton);
//         break;
//       case "roadChoose":
//         interaction.addChild(this.chooseUpRoad);
//         interaction.addChild(this.chooseDownRoad);
//         interaction.addChild(this.rightMenu);
//         interaction.addChild(this.returnButton);
//         break;
//       case "sortieMenu":
//         interaction.addChild(this.rightMenu);
//         interaction.addChild(this.returnButton);
//         break;
//       case "atkArea":
//         interaction.addChild(this.returnButton);
//         break;
//       case "buy":
//         this.interaction.addChild(this.returnButton);
//         this.interaction.addChild(this.buyView);
//         break;
//       case "planSupply":
//         interaction.addChild(this.returnButton);
//         interaction.addChild(this.planSupplyView);
//         break;
//       case "targetArea":
//         interaction.addChild(this.returnButton);
//         break;
//       case "sortieRoads":
//         interaction.addChild(this.chooseUpRoad);
//         interaction.addChild(this.chooseDownRoad);
//         interaction.addChild(this.returnButton);
//         break;
//       case "sortieArea":
//         interaction.addChild(this.returnButton);
//         break;
//       // 主界面了哦
//       case "main":
//         interaction.addChild(this.chatMessagesView);
//         interaction.addChild(this.navButton);
//         break;
//       case "mainExpend":
//         interaction.addChild(this.endButton);
//         interaction.addChild(this.chatButton);
//         interaction.addChild(this.settingButton);
//         interaction.addChild(this.gameDataButton);
//         interaction.addChild(this.scaleMapButton);
//         interaction.addChild(this.guidebookButton);
//         interaction.addChild(this.backgroundButton);
//         interaction.addChild(this.returnButton);
//         break;
//       case "background":
//         interaction.addChild(this.eleInfoView);
//         interaction.addChild(this.returnButton);
//         break;
//       case "guidebook":
//         interaction.addChild(this.returnButton);
//         interaction.addChild(this.guideBookView);
//         break;
//       case "playerInfo":
//         interaction.addChild(this.returnButton);
//         interaction.addChild(this.gameDataView);
//         break;
//       case "setting":
//         interaction.addChild(this.returnButton);
//         interaction.addChild(this.settingView);
//         break;
//       case "chat":
//         interaction.addChild(this.chatMessagesView);
//         interaction.addChild(this.returnButton);
//         interaction.addChild(this.chatView);
//         break;
//       case "miniMap":
//         this.interaction.addChild(this.returnButton);
//         this.interaction.addChild(this.miniMapView);
//         break;
//       default:
//         break;
//     }
//   }
//   protected handleEleClicked(evt: BattleEvent) {
//     let data = evt._data as BEItnSpriteClicked;
//     let mathmanUnit = Battle.nowState.mathmanUnit;
//     let posId: number;
//     let now_loadings: BattleUnitProps[];
//     let now_loadings_1: BattleUnitProps[];
//     let now_road: number;
//     let gameserver = GameServer.getInstance();
//     const linkToMoveShow = (linked_sprite: BattleEleUnit) => {
//       mathmanUnit = new MathManUnit(linked_sprite, this.mapView.collectMap());
//       Battle.nowState.mathmanUnit = mathmanUnit;
//       this.showCoverArea(
//         Object.keys(mathmanUnit.moveArea).map((item) => parseInt(item)),
//         "moveArea",
//         true
//       );
//       this.showInteractionView("moveArea");
//     };
//     switch (Battle.nowState.type) {
//       case BattleStateType.blank:
//         switch (data.blockType) {
//           case "unit":
//             mathmanUnit = new MathManUnit(
//               data.sprite as BattleEleUnit,
//               this.mapView.collectMap()
//             );
//             Battle.nowState.mathmanUnit = mathmanUnit;
//             Battle.nowState.type = BattleStateType.moveAreaShow;
//             this.showCoverArea(
//               Object.keys(mathmanUnit.moveArea).map((item) => parseInt(item)),
//               "moveArea",
//               true
//             );
//             this.showInteractionView("moveArea");
//             break;
//           case "build":
//             if (this.isOperationLocked) {
//               break;
//             }
//             // this.buyView.
//             Battle.nowState = {
//               type: BattleStateType.buy,
//             };
//             this.showInteractionView("buy");
//             break;
//           case "landMark":
//             break;
//           default:
//             break;
//         }
//         break;
//       case BattleStateType.moveAreaShow:
//         switch (data.blockType) {
//           case "unit":
//             linkToMoveShow(data.sprite as BattleEleUnit);
//             break;
//           case "landMark":
//             posId = (data.sprite as BattleEleLandMark).posId;
//             if (this.isOperationLocked) {
//               if (this.mapView.unitCache[posId] === undefined) {
//                 break;
//               }
//               linkToMoveShow(this.mapView.unitCache[posId]);
//               break;
//             }
//             now_loadings = mathmanUnit.sprite.loadings;
//             now_loadings_1 = now_loadings.filter((item) => !item.moved);
//             if (posId === mathmanUnit.sprite.posId) {
//               // 非己方单位
//               if (mathmanUnit.sprite.movieFlag !== this.myFlag) {
//                 break;
//               }
//               // 不能unload
//               if (now_loadings_1.length === 0) {
//                 if (mathmanUnit.sprite.moved) {
//                   break;
//                 }
//               }
//             } else if (this.mapView.unitCache[posId] !== undefined) {
//               // 不能load
//               if (
//                 this.mapView.unitCache[posId].movieFlag !== this.myFlag ||
//                 mathmanUnit.sprite.movieFlag !== this.myFlag ||
//                 !MathManUnit.canLoadIt(
//                   this.mapView.unitCache[posId],
//                   mathmanUnit.sprite.typeName as typeof BattleUnitTypes[number]
//                 )
//               ) {
//                 linkToMoveShow(this.mapView.unitCache[posId]);
//                 break;
//               }
//             } else {
//               // 非可移动单位
//               if (
//                 mathmanUnit.sprite.moved ||
//                 mathmanUnit.sprite.movieFlag !== this.myFlag
//               ) {
//                 break;
//               }
//             }
//             mathmanUnit.targetId = (data.sprite as BattleEleUnit).posId;
//             this.rightMenu.swapMenuData(mathmanUnit.rightMenu);
//             this.showInteractionView("roadChoose");
//             mathmanUnit.roadsPoint = 0;
//             this.showCoverArea(
//               mathmanUnit.roads[mathmanUnit.roadsPoint].slice(1),
//               "road"
//             );
//             Battle.nowState.type = BattleStateType.roadsShow;
//             break;
//           default:
//             break;
//         }
//         break;
//       case BattleStateType.atkAreaShow:
//         switch (data.blockType) {
//           case "unit":
//             let mathmanUnit = new MathManUnit(
//               data.sprite as BattleEleUnit,
//               this.mapView.collectMap()
//             );
//             Battle.nowState.mathmanUnit = mathmanUnit;
//             this.showCoverArea(
//               Object.keys(mathmanUnit.atkArea).map((item) => parseInt(item)),
//               "atkArea"
//             );
//             this.showInteractionView("moveArea");
//             break;
//           default:
//             break;
//         }
//         break;
//       case BattleStateType.roadsShow:
//         break;
//       case BattleStateType.targetShow:
//         switch (data.blockType) {
//           case "landMark":
//             posId = (data.sprite as BattleEleLandMark).posId;
//             let landmark_geoLayer = this.mapView.geoLayer;
//             gameserver.send({type:'action',
//               data: {
//                 type: BEActionType.attack,
//                 road: mathmanUnit.roads[mathmanUnit.roadsPoint].slice(1),
//                 restOil:
//                   mathmanUnit.sprite.oil -
//                   mathmanUnit.roads[mathmanUnit.roadsPoint][0],
//                 ...StaticDataManager.countAtkResult(
//                   mathmanUnit.sprite.collectionData(),
//                   this.mapView.mapData.unitLayer[posId],
//                   BattleGeoTypes[landmark_geoLayer[mathmanUnit.sprite.posId]],
//                   BattleGeoTypes[landmark_geoLayer[posId]]
//                 ),
//                 targetId: posId,
//               },
//             });
//             break;
//           default:
//             break;
//         }
//         break;
//       case BattleStateType.sortieMenu:
//         switch (data.blockType) {
//           case "landMark":
//             if (
//               (data.sprite as BattleEleLandMark).posId ===
//               mathmanUnit.sprite.posId
//             ) {
//               return;
//             }
//             mathmanUnit.childrenRoadTarget = (
//               data.sprite as BattleEleLandMark
//             ).posId;
//             Battle.nowState.type = BattleStateType.sortieRoads;
//             // let
//             this.showCoverArea(
//               mathmanUnit.childrenRoads[mathmanUnit.childrenRoadsPoint].slice(
//                 1
//               ),
//               "sortieRoads",
//               true
//             );
//             this.showInteractionView("sortieRoads");
//             break;
//           default:
//             break;
//         }
//         break;
//       case BattleStateType.sortieRoads:
//         switch (data.blockType) {
//           case "landMark":
//             now_loadings = mathmanUnit.sprite.loadings;
//             // now_loadings.splice(mathmanUnit.childrenId, 1);
//             // console.log('rest oil: ',now_loadings[mathmanUnit.childrenId].oil - mathmanUnit.childrenRoads[mathmanUnit.childrenRoadsPoint][0])
//             gameserver.send({type:'action',
//               data: {
//                 type: BEActionType.sortie,
//                 road: mathmanUnit.childrenRoads[
//                   mathmanUnit.childrenRoadsPoint
//                 ].slice(1),
//                 restOil:
//                   now_loadings[mathmanUnit.childrenId].oil -
//                   mathmanUnit.childrenRoads[mathmanUnit.childrenRoadsPoint][0],
//                 childrenId: mathmanUnit.childrenId,
//                 nowLoading: now_loadings,
//               },
//             });
//             break;
//           default:
//             break;
//         }
//         break;
//       default:
//         break;
//     }
//   }
//   protected hanldeToMain(evt?: egret.TouchEvent) {}
//   protected handleReturnButton(evt: egret.TouchEvent) {
//     let mathmanUnit = Battle.nowState.mathmanUnit;
//     switch (Battle.nowState.type) {
//       case BattleStateType.moveAreaShow:
//       case BattleStateType.atkAreaShow:
//         Battle.nowState.type = BattleStateType.blank;
//         this.showInteractionView("main");
//         this.showCoverArea([], "moveArea");
//         break;
//       case BattleStateType.unitInfoShow:
//       case BattleStateType.roadsShow:
//         this.showCoverArea(
//           Object.keys(Battle.nowState.mathmanUnit.moveArea).map((item) =>
//             parseInt(item)
//           ),
//           "moveArea",
//           true
//         );
//         this.showInteractionView("moveArea");
//         Battle.nowState.type = BattleStateType.moveAreaShow;
//         break;
//       case BattleStateType.targetShow:
//         this.rightMenu.swapMenuData(mathmanUnit.rightMenu);
//         this.showInteractionView("roadChoose");
//         this.showCoverArea(
//           mathmanUnit.roads[mathmanUnit.roadsPoint].slice(1),
//           "road"
//         );
//         Battle.nowState.type = BattleStateType.roadsShow;
//         break;
//       case BattleStateType.sortieMenu:
//         this.showCoverArea(
//           Object.keys(mathmanUnit.moveArea).map((item) => parseInt(item)),
//           "moveArea",
//           true
//         );
//         this.showInteractionView("moveArea");
//         Battle.nowState.type = BattleStateType.moveAreaShow;
//         break;
//       case BattleStateType.sortieRoads:
//         this.rightMenu.swapMenuData(
//           mathmanUnit.sprite.loadings
//             .filter((item) => !item.moved)
//             .map((item, index) => index + 1 + "." + item.type)
//         );
//         this.showCoverArea([], "moveArea");
//         this.showInteractionView("sortieMenu");
//         Battle.nowState.type = BattleStateType.sortieMenu;
//         break;
//       default:
//         this.showInteractionView("main");
//         break;
//     }
//   }
//   protected handleRightMenu(evt: BattleEvent) {
//     if (
//       evt._data.type !== BattleEventType.rightMenuClicked ||
//       (Battle.nowState.type !== BattleStateType.roadsShow &&
//         Battle.nowState.type !== BattleStateType.sortieMenu)
//     ) {
//       return;
//     }
//     let mathmanUnit = Battle.nowState.mathmanUnit;
//     let tmp_sprite = mathmanUnit.sprite as BattleEleUnit;
//     let now_road: number[];
//     let restOil: number;
//     let loadings: BattleUnitProps[];
//     if (
//       BattleUniRightItemTypes.indexOf(
//         evt._data.key as typeof BattleUniRightItemTypes[number]
//       ) !== -1
//     ) {
//       let data_key = evt._data.key as typeof BattleUniRightItemTypes[number];
//       now_road = mathmanUnit.roads[mathmanUnit.roadsPoint];
//       restOil = tmp_sprite.oil - now_road[0];
//       now_road = now_road.slice(1);
//       let gameserver = GameServer.getInstance()
//       switch (data_key) {
//         case "wait":
//           gameserver.send({type:'action',
//             data: {
//               type: BEActionType.wait,
//               road: now_road,
//               restOil,
//               encountered: false,
//             },
//           });
//           break;
//         case "dive":
//           gameserver.send({type:'action',
//             data: {
//               type: BEActionType.diving,
//               road: now_road,
//               restOil,
//               diving: !tmp_sprite.isDiving,
//             },
//           });
//           break;
//         case "load":
//           gameserver.send({type:'action',
//             data: {
//               type: BEActionType.load,
//               road: now_road,
//               restOil,
//             },
//           });
//           break;
//         case "occupy":
//           gameserver.send({type:'action',
//             data: {
//               type: BEActionType.occupy,
//               road: now_road,
//               restOil,
//               occupy:
//                 tmp_sprite.occupied +
//                 tmp_sprite.blood *
//                   (StaticDataManager.unit[tmp_sprite.typeName][
//                     "canOccupy"
//                   ] as number),
//             },
//           });
//           break;
//         case "attack":
//           let attack_atkTargets = mathmanUnit.atkTargets;
//           let targets: number[] = Object.keys(attack_atkTargets)
//             .filter((item) => attack_atkTargets[item])
//             .map((item) => parseInt(item));
//           Battle.nowState.type = BattleStateType.targetShow;
//           this.showInteractionView("targetArea");
//           this.showCoverArea(targets, "atkTarget", true);
//           break;
//         case "unload":
//           loadings = tmp_sprite.loadings;
//           tmp_sprite.loadings = [
//             ...loadings.filter((item) => !item.moved),
//             ...loadings.filter((item) => item.moved),
//           ];
//           loadings = tmp_sprite.loadings;
//           loadings = loadings.filter((item) => !item.moved);
//           this.rightMenu.swapMenuData(
//             loadings.map((item, index) => index + 1 + "." + item.type)
//           );
//           Battle.nowState.type = BattleStateType.sortieMenu;
//           this.showInteractionView("sortieMenu");
//           this.showCoverArea([], "moveArea");
//           break;
//         case "supply":
//           break;
//         default:
//           console.log("error");
//           return;
//       }
//     }
//     // unload
//     else {
//       let u_key = parseInt(evt._data.key.split(".")[0]) - 1;
//       mathmanUnit.childrenId = u_key;
//       this.showCoverArea(
//         Object.keys(mathmanUnit.unLoadArea).map((item) => parseInt(item)),
//         "sortieArea",
//         true
//       );
//     }
//     console.log(evt._data);
//   }
//   /**
//    * 需要先 collect map 清空界面
//    * @param data
//    */
//   public HandleUnitAction(data: BEActions) {
//     this.showCoverArea([], "moveArea");
//     this.showInteractionView("main");
//     Battle.nowState.type = BattleStateType.blank;
//     let tmp_sprite: BattleEleUnit = undefined;
//     let isOperationLocked = this.isOperationLocked;
//     let target_sprite: BattleEleUnit;
//     let target_props: BattleUnitProps;
//     let posId: number;
//     let funcCallI: Function;
//     let waitTimeAfterCall = 0;
//     let funcCallII: Function;
//     let funcCallIII = () => {
//       let gameserver = GameServer.getInstance();
//       gameserver.isRunning = false;
//       gameserver.handleActionQ();
//     };
//     if (data.type === BEActionType.supply) {
//       for (let i = 0; i < data.targetIds.length; ++i) {
//         this.mapView.unitCache[data.targetIds[i]].moved = true;
//       }
//       this.mapView.unitCache[data.targetIds[data.targetIds.length - 1]].supply =
//         data.supply;
//       return;
//     } else if (data.type === BEActionType.buy) {
//       tmp_sprite = new BattleEleUnit(data.unit.type, data.posId, data.unit);
//       tmp_sprite.x =
//         (data.posId % MathManBase.mapWidth) * BLOCK_WIDTH + BORDER_SIZE[0];
//       tmp_sprite.y =
//         Math.floor(data.posId / MathManBase.mapWidth) * BLOCK_WIDTH +
//         BORDER_SIZE[1];
//       this.mapView.unitLayer.addChild(tmp_sprite);
//       tmp_sprite.addEventListener(
//         BattleEvent.DATE,
//         this.handleEleClicked,
//         this
//       );
//       tmp_sprite.swapMovieFlag(data.unit.flag);
//       this.mapView.updateUnitCache;
//       return;
//     }
//     this.mapView.mapCollected = false;
//     tmp_sprite = this.mapView.unitCache[data.road[0]];
//     this.isOperationLocked = true;
//     switch (data.type) {
//       case BEActionType.wait:
//         funcCallI = () => {
//           tmp_sprite.oil = data.restOil;
//           tmp_sprite.moved = true;
//           if (data.encountered) {
//             // ------------encount
//           }
//           tmp_sprite.posId = data.road[data.road.length - 1];
//           this.mapView.updateUnitCache();
//           this.isOperationLocked = isOperationLocked;
//         };
//         break;
//       case BEActionType.diving:
//         funcCallI = () => {
//           tmp_sprite.moved = true;
//           tmp_sprite.oil = data.restOil;
//           tmp_sprite.isDiving = data.diving;
//           tmp_sprite.posId = data.road[data.road.length - 1];
//           this.mapView.updateUnitCache();
//           this.isOperationLocked = isOperationLocked;
//         };
//         break;
//       case BEActionType.occupy:
//         funcCallI = () => {
//           tmp_sprite.moved = true;
//           tmp_sprite.oil = data.restOil;
//           tmp_sprite.occupied = data.occupy;
//           tmp_sprite.posId = data.road[data.road.length - 1];
//           if (data.occupy >= 20) {
//             this.mapView.buildCache[tmp_sprite.posId].movieFlag =
//               tmp_sprite.movieFlag;
//             tmp_sprite.occupied = 0;
//           }
//           this.mapView.updateUnitCache();
//           this.isOperationLocked = isOperationLocked;
//         };
//         break;
//       case BEActionType.load:
//         target_sprite = this.mapView.unitCache[data.road[data.road.length - 1]];
//         funcCallI = () => {
//           tmp_sprite.oil = data.restOil;
//           tmp_sprite.moved = true;
//           target_sprite.loadings = [
//             tmp_sprite.collectionData(),
//             ...target_sprite.loadings,
//           ];
//           delete this.mapView.unitCache[target_sprite.posId];
//           this.mapView.unitLayer.removeChild(tmp_sprite);
//           this.mapView.updateUnitCache();
//           this.isOperationLocked = isOperationLocked;
//           // console.log('loadigns', target_sprite.loadings, tmp_sprite.loadings, target_sprite.posId, tmp_sprite.posId);
//         };
//         break;
//       case BEActionType.attack:
//         funcCallII = () => {
//           console.log("second tween");
//           target_sprite = this.mapView.unitCache[data.targetId];
//           // 己方
//           if (data.restBlood <= 0) {
//             this.mapView.unitLayer.removeChild(tmp_sprite);
//             delete this.mapView.unitCache[tmp_sprite.posId];
//           } else {
//             tmp_sprite.oil = data.restOil;
//             tmp_sprite.blood = data.restBlood;
//             tmp_sprite.bullet = data.restBullet;
//             tmp_sprite.moved = true;
//             tmp_sprite.posId = data.road[data.road.length - 1];
//           }
//           // 敌方
//           if (data.targetRestBlood <= 0) {
//             this.mapView.unitLayer.removeChild(target_sprite);
//             delete this.mapView.unitCache[data.targetId];
//           } else {
//             target_sprite.bullet = data.targetRestBullet;
//             target_sprite.blood = data.targetRestBlood;
//           }
//           this.mapView.updateUnitCache();
//           this.isOperationLocked = isOperationLocked;
//           console.log(data.restOil, "restOil");
//         };
//         waitTimeAfterCall = 1200;
//         funcCallI = () => {};
//         break;
//       case BEActionType.sortie:
//         console.log(data.nowLoading, tmp_sprite);
//         tmp_sprite.loadings = data.nowLoading;
//         posId = tmp_sprite.posId;
//         target_props = tmp_sprite.loadings[data.childrenId];
//         target_sprite = new BattleEleUnit(
//           target_props.type,
//           posId,
//           target_props
//         );
//         target_sprite.x =
//           (posId % MathManBase.mapWidth) * BLOCK_WIDTH + BORDER_SIZE[0];
//         target_sprite.y =
//           Math.floor(posId / MathManBase.mapWidth) * BLOCK_WIDTH +
//           BORDER_SIZE[1];
//         this.mapView.unitLayer.addChild(target_sprite);
//         target_sprite.addEventListener(
//           BattleEvent.DATE,
//           this.handleEleClicked,
//           this
//         );
//         target_sprite.swapMovieFlag(target_props.flag);
//         let tmp_swap_sprite = target_sprite;
//         tmp_sprite = target_sprite;
//         target_sprite = tmp_swap_sprite;
//         // tween_obj = egret.Tween.get(tmp_sprite);
//         funcCallI = () => {
//           tmp_sprite.moved = true;
//           tmp_sprite.oil = data.restOil;
//           tmp_sprite.posId = data.road[data.road.length - 1];
//           let ii_loadings = tmp_sprite.loadings;
//           ii_loadings.splice(data.childrenId, 1);
//           tmp_sprite.loadings = ii_loadings;
//           this.mapView.updateUnitCache();
//           this.isOperationLocked = isOperationLocked;
//         };
//         break;
//       default:
//         break;
//     }
//     this.mapView.unitLayer.setChildIndex(tmp_sprite, -1);
//     let tween_obj = egret.Tween.get(tmp_sprite);
//     for (let i = 1; i < data.road.length; ++i) {
//       let [to_x, to_y] = [
//         (data.road[i] % MathManBase.mapWidth) * BLOCK_WIDTH + BORDER_SIZE[0],
//         Math.floor(data.road[i] / MathManBase.mapWidth) * BLOCK_WIDTH +
//           BORDER_SIZE[1],
//       ];
//       // console.log('debug', to_x, to_y, tween_obj);
//       tween_obj = tween_obj.to(
//         { x: to_x, y: to_y },
//         StaticDataManager.moveSpeed
//       );
//     }
//     tween_obj = tween_obj.call(funcCallI).wait(waitTimeAfterCall);
//     if (funcCallII !== undefined) {
//       tween_obj = tween_obj.call(funcCallII);
//     }
//     tween_obj.wait(200).call(funcCallIII);
//     // if (PlayerManager.getPlayerController(PlayerManager.nowFlag).userId === undefined) {
//     //     let tmp_evevt = new BattleEvent();
//     //     tmp_evevt._data = {
//     //         type: BEOthersType.aiCall
//     //     }
//     //     this.dispatchEvent(tmp_evevt);
//     // }
//     // if(callBack!==null){
//     //     tween_obj.call(callBack);
//     // }
//   }
//   protected showAnimation(typeName: string, action: string) {}
//   protected handleInfoButton(evt: egret.TouchEvent) {
//     let tmp_sprite = Battle.nowState.mathmanUnit.sprite;
//     let rlt_text: Array<egret.ITextElement> = [
//       {
//         text: tmp_sprite.typeName + "\n    ",
//         style: { size: 60, textColor: 0x896745 },
//       },
//       {
//         text: StaticDataManager.unit[tmp_sprite.typeName]["dsc"] as string,
//         style: { size: 35, textColor: 0x000000 },
//       },
//       { text: "\n\n    blood:", style: { size: 30, textColor: 0x111111 } },
//       {
//         text: Math.floor(tmp_sprite.blood * 10) + "%",
//         style: { textColor: 0xff1111, size: 30 },
//       },
//       { text: "    oil:", style: { size: 30, textColor: 0x000000 } },
//       { text: tmp_sprite.oil + "", style: { textColor: 0x896745, size: 30 } },
//       { text: "    bullet:", style: { size: 30, textColor: 0x000000 } },
//       {
//         text: tmp_sprite.bullet + "",
//         style: { textColor: 0x339955, size: 30 },
//       },
//       { text: "\n    stealth:", style: { size: 30, textColor: 0x000000 } },
//       {
//         text: tmp_sprite.isDiving ? "true" : "false",
//         style: { textColor: 0x999999, size: 30 },
//       },
//       { text: "    occupy:", style: { size: 30, textColor: 0x000000 } },
//       {
//         text: tmp_sprite.occupied + "",
//         style: { textColor: 0x999999, size: 30 },
//       },
//       { text: "    moved:", style: { size: 30, textColor: 0x000000 } },
//       {
//         text: tmp_sprite.moved ? "true" : "false",
//         style: { textColor: 0x999999, size: 30 },
//       },
//     ];
//     let loadings = tmp_sprite.loadings;
//     if (loadings.length !== 0) {
//       rlt_text.push({
//         text: "\n\nloadings\n",
//         style: { size: 40, textColor: 0xbbbbbb },
//       });
//     }
//     for (let i = 0; i < loadings.length; ++i) {
//       rlt_text.push(
//         { text: "    " },
//         { text: loadings[i].type, style: { size: 30, textColor: 0x000000 } },
//         { text: "  " },
//         {
//           text: Math.floor(loadings[i].blood * 10) + "%\n",
//           style: { textColor: 0x999999, size: 30 },
//         }
//       );
//     }
//     let supply = tmp_sprite.supply;
//     let supply_keys = Object.keys(supply);
//     if (supply_keys.length !== 0) {
//       rlt_text.push({
//         text: "\nsupply\n",
//         style: { size: 40, textColor: 0xbbbbbb },
//       });
//     }
//     for (let i = 0; i < supply_keys.length; i++) {
//       if ((i + 1) % 3 === 0) {
//         rlt_text.push({ text: "\n" });
//       }
//       let tmp_key: string = BattleUnitTypes[supply_keys[i]];
//       rlt_text.push(
//         ...[
//           { text: "    " },
//           { text: tmp_key, style: { size: 30, textColor: 0x000000 } },
//           { text: "  " },
//           {
//             text: supply[supply_keys[i]] + "",
//             style: { textColor: 0x999999, size: 30 },
//           },
//         ]
//       );
//     }
//     this.eleInfoView.text = rlt_text;
//     Battle.nowState.type = BattleStateType.unitInfoShow;
//     this.showInteractionView("eleInfo");
//   }
//   protected handleSwitchAreaButton(evt: egret.TouchEvent) {
//     // console.log(Battle.nowState)
//     if (Battle.nowState.type === BattleStateType.atkAreaShow) {
//       // let tmp_sprite_ = Battle.nowState.sprite as BattleEleUnit;
//       // let tmp_oil = tmp_sprite_.oil >= StaticDataManager.unit[tmp_sprite_.typeName]['dailyOil'] ? StaticDataManager.unit[tmp_sprite_.typeName]['dailyOil'] : tmp_sprite_.oil
//       this.showCoverArea(
//         Object.keys(Battle.nowState.mathmanUnit.moveArea).map((item) =>
//           parseInt(item)
//         ),
//         "moveArea",
//         true
//       );
//       Battle.nowState.type = BattleStateType.moveAreaShow;
//       // Battle.nowState = {
//       //     type: BattleStateType.moveAreaShow,
//       //     sprite: tmp_sprite_,
//       //     moveArea: MathMan.moveArea,
//       //     oil: tmp_oil as number
//       // }
//     } else if (Battle.nowState.type === BattleStateType.moveAreaShow) {
//       // let tmp_sprite_ = Battle.nowState.sprite as BattleEleUnit;
//       // let atkArea = MathMan.countTargets(tmp_sprite_.posId,
//       //     StaticDataManager.unit[tmp_sprite_.typeName]['atkMinDistance'] as number,
//       //     StaticDataManager.unit[tmp_sprite_.typeName]['atkMaxDistance'] as number
//       // );
//       this.showCoverArea(
//         Object.keys(Battle.nowState.mathmanUnit.atkArea).map((item) =>
//           parseInt(item)
//         ),
//         "atkArea"
//       );
//       Battle.nowState.type = BattleStateType.atkAreaShow;
//       // Battle.nowState = {
//       //     type: BattleStateType.atkAreaShow,
//       //     sprite: tmp_sprite_,
//       //     atkArea
//       // }
//     }
//   }
//   protected handleDestoryUnitButton(evt: egret.TouchEvent) {
//     if (Battle.nowState.type !== BattleStateType.unitInfoShow) {
//       return;
//     }
//     let tmp_sprite = Battle.nowState.mathmanUnit.sprite;
//     this.mapView.unitLayer.removeChild(tmp_sprite);
//     delete this.mapView.unitCache[tmp_sprite.posId];
//     // Battle.nowState = {
//     //     type: BattleStateType.blank
//     // }
//     Battle.nowState.type = BattleStateType.blank;
//     delete Battle.nowState.mathmanUnit;
//     this.showCoverArea([], "moveArea");
//     this.showInteractionView("main");
//   }
//   protected handleChooseUpRoad(evt: egret.TouchEvent) {
//     let mathmanUnit = Battle.nowState.mathmanUnit;
//     if (Battle.nowState.type === BattleStateType.roadsShow) {
//       mathmanUnit.roadsPoint =
//         (mathmanUnit.roadsPoint + 1) % mathmanUnit.roads.length;
//       this.showCoverArea(
//         mathmanUnit.roads[mathmanUnit.roadsPoint].slice(1),
//         "road"
//       );
//     } else if (Battle.nowState.type === BattleStateType.sortieRoads) {
//       mathmanUnit.childrenRoadsPoint =
//         (mathmanUnit.childrenRoadsPoint + 1) % mathmanUnit.childrenRoads.length;
//       this.showCoverArea(
//         mathmanUnit.childrenRoads[mathmanUnit.childrenRoadsPoint].slice(1),
//         "sortieRoads",
//         true
//       );
//     }
//   }
//   protected handleChooseDownRoad(evt: egret.TouchEvent) {
//     let mathmanUnit = Battle.nowState.mathmanUnit;
//     let road_length: number;
//     // console.log('fsdfs')
//     if (Battle.nowState.type === BattleStateType.roadsShow) {
//       road_length = mathmanUnit.roads.length;
//       // console.log('fsdfds')
//       mathmanUnit.roadsPoint =
//         (mathmanUnit.roadsPoint - 1 + road_length) % road_length;
//       this.showCoverArea(
//         mathmanUnit.roads[mathmanUnit.roadsPoint].slice(1),
//         "road"
//       );
//     } else if (Battle.nowState.type === BattleStateType.sortieRoads) {
//       mathmanUnit.childrenRoadsPoint =
//         (mathmanUnit.childrenRoadsPoint -
//           1 +
//           mathmanUnit.childrenRoads.length) %
//         mathmanUnit.childrenRoads.length;
//       this.showCoverArea(
//         mathmanUnit.childrenRoads[mathmanUnit.childrenRoadsPoint].slice(1),
//         "sortieRoads",
//         true
//       );
//     }
//   }
//   protected handleGameData(evt: egret.TouchEvent) {
//     this.mapView.collectMap();
//     let users = PlayerManager.getPlayerFlags();
//     let rlt_info: Record<string, Array<egret.ITextElement>> = {};
//     for (let i = 0; i < users.length; ++i) {
//       let tmp_user = PlayerManager.getPlayerController(users[i]);
//       console.log(
//         StaticDataManager.commander[tmp_user.playerSetting.commanders[0]],
//         tmp_user.playerSetting.commanders[0]
//       );
//       rlt_info[users[i]] = [
//         { text: "任务背景：" + tmp_user.playerSetting.taskBg + "\n" },
//         { text: "任务目标：" + tmp_user.playerSetting.taskTarget + "\n" },
//         { text: "敌方：" + tmp_user.playerSetting.enemies.join(",") + "\n" },
//         { text: "\n" },
//         { text: "$:" + tmp_user.playerSetting.nowMoney + "\n" },
//         { text: "当前军队价值" + tmp_user.grade.allUnitMoney + "\n" },
//         { text: "损失军队" + tmp_user.grade.lostUnitMoney + "\n" },
//         { text: "摧毁军队" + tmp_user.grade.destroyUnitMoney + "\n" },
//         { text: "\n" },
//         {
//           text:
//             "指挥官" +
//             StaticDataManager.commander[tmp_user.playerSetting.commanders[0]][
//               "name"
//             ] +
//             "\n",
//         },
//         {
//           text:
//             "指挥官描述" +
//             StaticDataManager.commander[tmp_user.playerSetting.commanders[0]][
//               "dsc"
//             ] +
//             "\n",
//         },
//       ];
//     }
//     this.gameDataView.data = rlt_info;
//     this.showInteractionView("playerInfo");
//   }
//   protected handleScaleMap(evt: egret.TouchEvent) {
//     this.mapView.collectMap();
//     // this.miniMapView.drawMap(this.mapView.mapData);
//     StaticDataManager.drawMap(this.mapView.mapData, this.miniMapView.container);
//     this.showInteractionView("miniMap");
//   }
//   protected handleSaveGameButton(evt: egret.TouchEvent) {}
//   protected handleExitGameButton(evt?: GuiEvent) {
//     // super.handleExitGameButton(
//     // console.log('sdfsdfsdf')
//     // let outer_evt = new GuiEvent();
//     // outer_evt._data = {
//     //     type: GuiEventType.toMain
//     // }
//     // console.log('11111')
//     this.dispatchEvent(evt);
//   }
//   public handleBoundEnd(evt?: egret.TouchEvent) {
//     if (evt === undefined) {
//       this.mapView.collectMap();
//       let unitCache = this.mapView.unitCache;
//       for (let i in unitCache) {
//       }
//       return;
//     }
//     GameServer.getInstance().send({
//       // data: {
//       //   type: BEOthersType.boutEnd,
//       // },
//       type: "boutEnd"
//     });
//   }
//   protected handleChatView(evt: BattleEvent) {
//     let msg = evt._data as BEChatMsg;
//     // BattleReferee.instance.sendToServer({ data: msg });
//     GameServer.getInstance().send({ type: "chat", data: msg });
//   }
//   /**
//    *
//    * @param msg
//    */
//   public handleChatServer(msg: BEChatMsg) {
//     this.chatView.send(msg);
//     this.chatMessagesView.putMessage([msg]);
//   }
// }
// /**
//  * collect map 添加标记优化
//  * chatMessageView   clear
//  */
// export default Battle;


/***/ }),

/***/ "./src/drop/Main2.ts":
/***/ (function(module, exports) {

// //////////////////////////////////////////////////////////////////////////////////////
// //
// //  Copyright (c) 2014-present, Egret Technology.
// //  All rights reserved.
// //  Redistribution and use in source and binary forms, with or without
// //  modification, are permitted provided that the following conditions are met:
// //
// //     * Redistributions of source code must retain the above copyright
// //       notice, this list of conditions and the following disclaimer.
// //     * Redistributions in binary form must reproduce the above copyright
// //       notice, this list of conditions and the following disclaimer in the
// //       documentation and/or other materials provided with the distribution.
// //     * Neither the name of the Egret nor the
// //       names of its contributors may be used to endorse or promote products
// //       derived from this software without specific prior written permission.
// //
// //  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
// //  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
// //  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
// //  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
// //  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// //  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
// //  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
// //  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// //  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// //  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// //////////////////////////////////////////////////////////////////////////////////////
// class Main extends eui.UILayer {
//     protected createChildren(): void {
//         super.createChildren();
//         egret.lifecycle.addLifecycleListener((context) => {
//             // custom lifecycle plugin
//         })
//         egret.lifecycle.onPause = () => {
//             egret.ticker.pause();
//         }
//         egret.lifecycle.onResume = () => {
//             egret.ticker.resume();
//         }
//         //inject the custom material parser
//         //注入自定义的素材解析器
//         // let assetAdapter = new AssetAdapter();
//         // egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
//         // egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
//         this.runGame().catch(e => {
//             console.log(e);
//         })
//     }
//     private async runGame() {
//         await this.loadResource()
//         this.createGameScene();
//         const result = await RES.getResAsync("description_json")
//         this.startAnimation(result);
//         await platform.login();
//         const userInfo = await platform.getUserInfo();
//         console.log(userInfo);
//     }
//     private async loadResource() {
//         try {
//             const loadingView = new LoadingUI();
//             this.stage.addChild(loadingView);
//             await RES.loadConfig("resource/default.res.json", "resource/");
//             await this.loadTheme();
//             await RES.loadGroup("preload", 0, loadingView);
//             this.stage.removeChild(loadingView);
//         }
//         catch (e) {
//             console.error(e);
//         }
//     }
//     private loadTheme() {
//         return new Promise((resolve, reject) => {
//             // load skin theme configuration file, you can manually modify the file. And replace the default skin.
//             //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
//             let theme = new eui.Theme("resource/default.thm.json", this.stage);
//             theme.addEventListener(eui.UIEvent.COMPLETE, () => {
//                 //resolve();
//             }, this);
//         })
//     }
//     private textfield: egret.TextField;
//     /**
//      * 创建场景界面
//      * Create scene interface
//      */
//     protected createGameScene(): void {
//         let sky = this.createBitmapByName("bg_jpg");
//         this.addChild(sky);
//         let stageW = this.stage.stageWidth;
//         let stageH = this.stage.stageHeight;
//         sky.width = stageW;
//         sky.height = stageH;
//         let topMask = new egret.Shape();
//         topMask.graphics.beginFill(0x000000, 0.5);
//         topMask.graphics.drawRect(0, 0, stageW, 172);
//         topMask.graphics.endFill();
//         topMask.y = 33;
//         this.addChild(topMask);
//         let icon: egret.Bitmap = this.createBitmapByName("egret_icon_png");
//         this.addChild(icon);
//         icon.x = 26;
//         icon.y = 33;
//         let line = new egret.Shape();
//         line.graphics.lineStyle(2, 0xffffff);
//         line.graphics.moveTo(0, 0);
//         line.graphics.lineTo(0, 117);
//         line.graphics.endFill();
//         line.x = 172;
//         line.y = 61;
//         this.addChild(line);
//         let colorLabel = new egret.TextField();
//         colorLabel.textColor = 0xffffff;
//         colorLabel.width = stageW - 172;
//         colorLabel.textAlign = "center";
//         colorLabel.text = "Hello Egret";
//         colorLabel.size = 24;
//         colorLabel.x = 172;
//         colorLabel.y = 80;
//         this.addChild(colorLabel);
//         let textfield = new egret.TextField();
//         this.addChild(textfield);
//         textfield.alpha = 0;
//         textfield.width = stageW - 172;
//         textfield.textAlign = egret.HorizontalAlign.CENTER;
//         textfield.size = 24;
//         textfield.textColor = 0xffffff;
//         textfield.x = 172;
//         textfield.y = 135;
//         this.textfield = textfield;
//         let button = new eui.Button();
//         button.label = "Click!";
//         button.horizontalCenter = 0;
//         button.verticalCenter = 0;
//         this.addChild(button);
//         button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
//     }
//     /**
//      * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
//      * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
//      */
//     private createBitmapByName(name: string): egret.Bitmap {
//         let result = new egret.Bitmap();
//         let texture: egret.Texture = RES.getRes(name);
//         result.texture = texture;
//         return result;
//     }
//     /**
//      * 描述文件加载成功，开始播放动画
//      * Description file loading is successful, start to play the animation
//      */
//     private startAnimation(result: Array<any>): void {
//         let parser = new egret.HtmlTextParser();
//         let textflowArr = result.map(text => parser.parse(text));
//         let textfield = this.textfield;
//         let count = -1;
//         let change = () => {
//             count++;
//             if (count >= textflowArr.length) {
//                 count = 0;
//             }
//             let textFlow = textflowArr[count];
//             // 切换描述内容
//             // Switch to described content
//             textfield.textFlow = textFlow;
//             let tw = egret.Tween.get(textfield);
//             tw.to({ "alpha": 1 }, 200);
//             tw.wait(2000);
//             tw.to({ "alpha": 0 }, 200);
//             tw.call(change, this);
//         };
//         change();
//     }
//     /**
//      * 点击按钮
//      * Click the button
//      */
//     private onButtonClick(e: egret.TouchEvent) {
//         let panel = new eui.Panel();
//         panel.title = "Title";
//         panel.horizontalCenter = 0;
//         panel.verticalCenter = 0;
//         this.addChild(panel);
//     }
// }


/***/ })

/******/ });