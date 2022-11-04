// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2Ah9o":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _views = require("./Views");
var _octopus = require("./Octopus");
var _octopusDefault = parcelHelpers.interopDefault(_octopus);
const projects_con = document.querySelector(".projects");
const btn_con = document.querySelector("#btnCon");
const long = document.querySelector("#long");
const short = document.querySelector("#short");
let current = document.querySelector(`[role=short]`);
const mode = document.querySelector("#mode");
mode.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
});
btn_con.addEventListener("click", (e)=>{
    console.log(e.target.outerText);
    console.log(e, e.target);
    // `[role=${element}]`
    if (e.target.outerText === "Short") {
        long.classList.add("hidden");
        short.classList.remove("hidden");
        e.target.classList.toggle("selected");
        if (current) current.classList.remove("selected");
        current = e.target;
    } else if (e.target.outerText === "Long") {
        long.classList.remove("hidden");
        short.classList.add("hidden");
        e.target.classList.toggle("selected");
        if (current) current.classList.remove("selected");
        current = e.target;
    } else return;
});
(0, _views.Projects)(projects_con);
let sub;
(0, _octopusDefault.default).subscribe("details", (project)=>{
    document.documentElement.classList.add("noscroll");
    const el = (0, _views.ProjectDetailed)(project);
    document.body.appendChild(el);
    if (sub) sub();
    sub = (0, _octopusDefault.default).subscribe("removeDetails", ()=>{
        document.body.removeChild(el);
        document.documentElement.classList.remove("noscroll");
    });
});

},{"./Views":"cJpDI","./Octopus":"2DffO","@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"cJpDI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Projects", ()=>Projects);
parcelHelpers.export(exports, "ProjectDetailed", ()=>ProjectDetailed);
var _esm = require("atomicus/lib/esm");
var _project = require("./components/project");
var _projectDefault = parcelHelpers.interopDefault(_project);
var _models = require("./Models");
var _projectView = require("./components/projectView");
var _projectViewDefault = parcelHelpers.interopDefault(_projectView);
function Projects(container) {
    (0, _models.projects_model).forEach((p)=>{
        container.appendChild((0, _esm.createElement)((0, _projectDefault.default)(p)));
    });
}
function ProjectDetailed(project) {
    console.log((0, _projectViewDefault.default)({
        project: project,
        detailed: (0, _models.projectDetail)[project.name]
    }));
    return (0, _esm.createElement)((0, _projectViewDefault.default)({
        project: project,
        detailed: (0, _models.projectDetail)[project.name]
    }));
}

},{"atomicus/lib/esm":"9iIp8","./components/project":"l0poy","./Models":"acKq7","@parcel/transformer-js/src/esmodule-helpers.js":"2mdku","./components/projectView":"ld4W7"}],"9iIp8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clearEl", ()=>clearEl);
parcelHelpers.export(exports, "createElement", ()=>createElement);
parcelHelpers.export(exports, "PubSub", ()=>PubSub);
function IsDom(element) {
    return element instanceof Element;
}
function clearEl(el) {
    while(el.firstChild)el.removeChild(el.firstChild);
}
function SetAttribs(node, attrs) {
    for (const [key, val] of Object.entries(attrs)){
        // for some weird reason set attribute set attribute sometimes fails events
        if (key === "onclick" || key === "onselect") node.addEventListener("click", val);
        else if (key === "onchange") node.addEventListener("input", val);
        else node.setAttribute(key, val);
    }
}
function createElement(node) {
    if (typeof node == "string") return document.createTextNode(node);
    if (IsDom(node)) return node;
    const p = document.createElement(node.tag);
    if (node.attrs) SetAttribs(p, node.attrs);
    node && node.children && node.children.map(createElement).forEach(p.appendChild.bind(p));
    return p;
}
class PubSub {
    constructor(){
        this.subscribers = {};
    }
    subscribe(channel, fn) {
        if (!this.subscribers[channel]) this.subscribers[channel] = [];
        this.subscribers[channel].push(fn);
        return ()=>{
            this.subscribers[channel] = this.subscribers[channel].filter((sf)=>sf !== fn);
        };
    }
    notify(channel, ...data) {
        if (!this.subscribers[channel]) throw new Error(`${channel} does not exist`);
        this.subscribers[channel].forEach((fn)=>fn(...data));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"2mdku":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"l0poy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _octopus = require("../Octopus");
var _octopusDefault = parcelHelpers.interopDefault(_octopus);
function project(p) {
    return {
        tag: "div",
        attrs: {
            class: "shadow-md project dark:border-black border-grey-800",
            // 00612C
            //9BD8B0
            //23B361
            //C9BBE2
            style: "border: 1px solid"
        },
        children: [
            {
                tag: "div",
                attrs: {
                    style: "height: 300px;  width: 100%; display: flex; justify-content: center; align-items: center; background: #f1f8ff",
                    class: ""
                },
                children: [
                    {
                        tag: "img",
                        attrs: {
                            src: p.img,
                            class: "img"
                        }
                    }
                ]
            },
            {
                tag: "div",
                attrs: {},
                children: [
                    {
                        tag: "div",
                        attrs: {
                            class: "m-2 text-3xl text-gray-900 py-1 dark:text-white font-medium font-Roboto"
                        },
                        children: [
                            {
                                tag: "h3",
                                children: [
                                    p.name
                                ]
                            }
                        ]
                    },
                    // {
                    //     tag: "div",
                    //     attrs: {
                    //         class: "tools"
                    //     },
                    //     children: p.tools.map((tool)=> {
                    //         return {
                    //             tag: "div",
                    //             attrs: {class: "tool bg-gray-900 dark:bg-white dark:text-gray-900 text-white font-Roboto py-"},
                    //             children: [{
                    //                 tag: "p",
                    //                 children: [tool]
                    //             }]
                    //         }
                    //     })
                    // },
                    // description
                    {
                        tag: "div",
                        attrs: {
                            class: "description text-gray-900 dark:text-white",
                            style: "opacity: .7;"
                        },
                        children: [
                            {
                                tag: "p",
                                children: [
                                    p.description_one
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tag: "div",
                attrs: {
                    class: "detailed"
                },
                children: [
                    {
                        tag: "a",
                        attrs: {
                            onclick: ()=>(0, _octopusDefault.default).notify("details", p),
                            //   class: "btn-gumroad dark:text-teal-400 text-white dark:bg-gray-900  bg-gray-900 px-4 py-2 ml-8"
                            class: "social-links dark:text-orange-200 text-orange-900 py-5",
                            style: "cursor: pointer; text-decoration: underline;"
                        },
                        children: [
                            "view project"
                        ]
                    }
                ]
            }
        ]
    };
}
exports.default = project;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2mdku","../Octopus":"2DffO"}],"2DffO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _atomicus = require("atomicus");
const Bus = new (0, _atomicus.PubSub)();
exports.default = Bus;

},{"atomicus":"9iIp8","@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"acKq7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "projects_model", ()=>projects_model);
parcelHelpers.export(exports, "projectDetail", ()=>projectDetail);
const projects_model = [
    {
        name: "Frame",
        description_one: "Cross platform web app to make Machine Learning, data manipulation and visualization accesible for anyone.",
        tools: [
            "HTML",
            "CSS",
            "JavaScript",
            "Plotly",
            "ML5",
            "Astra DB",
            "REST api",
            "MVC",
            "web threads"
        ],
        links: [
            {
                link: "",
                type: "yt"
            }
        ],
        project_type: [
            "Full Stack",
            "Frontend"
        ],
        description_2: "",
        img: "./projects/frame/1.png"
    },
    {
        name: "Pam",
        description_one: "Mobile app to monitor and predict allergic reactions based on previous data using string algorithms.",
        tools: [
            "Ionic",
            "Capacitor",
            "Next.js",
            "Ionic Storage",
            "Tailwind",
            "Pullstate"
        ],
        links: [
            {
                link: "",
                type: "yt"
            }
        ],
        project_type: [
            "Frontend",
            "Algorithms"
        ],
        description_2: "",
        img: "./projects/Pam/1.png"
    },
    {
        name: "Gym Suite",
        description_one: "Cross platform web app for creating a perfect workout with predefined and customizable workout templates.",
        tools: [
            "React",
            "React Query",
            "MUI",
            "Ionic Storage",
            "Mongodb"
        ],
        links: [
            {
                link: "",
                type: "yt"
            }
        ],
        project_type: [
            "Full Stack",
            "Frontend"
        ],
        description_2: "",
        img: "./projects/t24/1.png"
    },
    {
        name: "AlgoViz",
        description_one: "A highly efficient concurrent/threaded front-end algorithm visualizer - Sorting and Graph Algorithms",
        tools: [
            "HTML",
            "CSS",
            "JavaScript",
            "Atomicus",
            "comlink",
            "Web threads"
        ],
        links: [
            {
                link: "https://github.com/SfundoMhlungu/AlgoViz",
                type: "github"
            },
            {
                link: "https://algo-viz8.vercel.app/",
                type: "live"
            }
        ],
        project_type: [
            "Frontend",
            "Algorithms"
        ],
        description_2: "",
        img: "./projects/algoviz/1.png"
    },
    {
        name: "Petal",
        description_one: "tiny compiled frontend framework to produce stateful HTML elements in form of a virtual DOM",
        tools: [
            "JavaScript"
        ],
        links: [
            {
                link: "https://github.com/SfundoMhlungu/petal-js",
                type: "github"
            }
        ],
        project_type: [
            "Frontend",
            "DevTool"
        ],
        description_2: "",
        img: "./projects/vanilla/1.png"
    },
    {
        name: "Atomicus",
        description_one: "Frontend library for creating stateful HTML elements, and allows implementation of the MVC pattern easily.",
        tools: [
            "Typescript"
        ],
        links: [
            {
                link: "https://github.com/SfundoMhlungu/atomica",
                type: "github"
            }
        ],
        project_type: [
            "Frontend",
            "DevTool"
        ],
        description_2: "",
        img: "./projects/vanilla/1.png"
    }
];
const projectDetail = {
    Frame: {
        longer_description: "Frame is actually a combination of a dataframe inspired by the Python pandas library, written in pure Typescript and Machine Learning using ML5, the sole purpose of frame is to iteratively manipulate, clean and fit Machine Learning models to tabular data without touching or seeing code, making ML accessible and quick for anyone and it's all on the client side thanks to web workers.",
        project_implementation: [
            "Frame has 3 major components, the first component is responsible for creating self contained, self aware stateful HTML elements, the second is responsible for communication between elements created by component 1 and the lower level dataframe code or thread and fitting neaural networks, while the last is only responsible for user feedback, downloading files, ML models, connecting to a database and user authentication.",
            "Frame is way more than a CRUD app, for example each session can have multiple elements of the same type e.g 3 scatter charts, the afore mentioned components make sure these elements are independent, manage their own state, don't intermingle and confuse each other even thou they are similar."
        ],
        stack_explanation: {
            stack: [
                {
                    icon: "./svg/next-js.svg",
                    name: "next.js"
                },
                {
                    name: "Ionic",
                    icon: "./svg/file-type-ionic.svg"
                },
                {
                    icon: "./svg/typescript-icon.svg",
                    name: "Typescript"
                }
            ],
            explanations: [
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsa inventore in, tempore iure cum a obcaecati, sint quos dolorum ipsam harum qui! Suscipit minus nobis commodi labore necessitatibus aspernatur.",
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsa inventore in, tempore iure cum a obcaecati, sint quos dolorum ipsam harum qui! Suscipit minus nobis commodi labore necessitatibus aspernatur."
            ]
        },
        visuals: [
            "./projects/frame/2.png",
            "./projects/frame/3.png",
            "./projects/frame/4.png"
        ],
        problems: [
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsa inventore in, tempore iure cum a obcaecati, sint quos dolorum ipsam harum qui! Suscipit minus nobis commodi labore necessitatibus aspernatur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsa inventore in, tempore iure cum a obcaecati, sint quos dolorum ipsam harum qui! Suscipit minus nobis commodi labore necessitatibus aspernatur."
        ],
        featured_code: [
            {
                name: "",
                code: ""
            }
        ],
        lessons: [
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsa inventore in, tempore iure cum a obcaecati, sint quos dolorum ipsam harum qui! Suscipit minus nobis commodi labore necessitatibus aspernatur."
        ],
        lesson_vis: [],
        isWhite: true
    },
    "Gym Suite": {
        longer_description: "",
        project_implementation: [
            "",
            ""
        ],
        stack_explanation: {
            stack: [
                {
                    icon: "./svg/next-js.svg",
                    name: "next.js"
                },
                {
                    name: "Ionic",
                    icon: "./svg/file-type-ionic.svg"
                },
                {
                    icon: "./svg/typescript-icon.svg",
                    name: "Typescript"
                }
            ],
            explanations: [
                "",
                ""
            ]
        },
        visuals: [],
        problems: [
            "",
            ""
        ],
        featured_code: [
            {
                name: "",
                code: ""
            }
        ],
        lessons: [
            ""
        ],
        lesson_vis: [],
        isWhite: true
    },
    "AlgoViz": {
        longer_description: "",
        project_implementation: [
            "",
            ""
        ],
        stack_explanation: {
            stack: [
                {
                    icon: "./svg/next-js.svg",
                    name: "next.js"
                },
                {
                    name: "Ionic",
                    icon: "./svg/file-type-ionic.svg"
                },
                {
                    icon: "./svg/typescript-icon.svg",
                    name: "Typescript"
                }
            ],
            explanations: [
                "",
                ""
            ]
        },
        visuals: [],
        problems: [
            "",
            ""
        ],
        featured_code: [
            {
                name: "",
                code: ""
            }
        ],
        lessons: [
            ""
        ],
        lesson_vis: [],
        isWhite: true
    },
    Pam: {
        longer_description: "",
        project_implementation: [
            "",
            ""
        ],
        stack_explanation: {
            stack: [
                {
                    icon: "./svg/next-js.svg",
                    name: "next.js"
                },
                {
                    name: "Ionic",
                    icon: "./svg/file-type-ionic.svg"
                },
                {
                    icon: "./svg/typescript-icon.svg",
                    name: "Typescript"
                }
            ],
            explanations: [
                "",
                ""
            ]
        },
        visuals: [
            "./projects/Pam/2.png",
            "./projects/Pam/3.png",
            "./projects/Pam/4.png"
        ],
        problems: [
            "",
            ""
        ],
        featured_code: [
            {
                name: "",
                code: ""
            }
        ],
        lessons: [
            ""
        ],
        lesson_vis: [],
        isWhite: false
    },
    Petal: {
        longer_description: "",
        project_implementation: [
            "",
            ""
        ],
        stack_explanation: {
            stack: [
                {
                    icon: "./svg/next-js.svg",
                    name: "next.js"
                },
                {
                    name: "Ionic",
                    icon: "./svg/file-type-ionic.svg"
                },
                {
                    icon: "./svg/typescript-icon.svg",
                    name: "Typescript"
                }
            ],
            explanations: [
                "",
                ""
            ]
        },
        visuals: [],
        problems: [
            "",
            ""
        ],
        featured_code: [
            {
                name: "",
                code: ""
            }
        ],
        lessons: [
            ""
        ],
        lesson_vis: [],
        isWhite: false
    },
    Atomicus: {
        longer_description: "",
        project_implementation: [
            "",
            ""
        ],
        stack_explanation: {
            stack: [
                {
                    icon: "./svg/next-js.svg",
                    name: "next.js"
                },
                {
                    name: "Ionic",
                    icon: "./svg/file-type-ionic.svg"
                },
                {
                    icon: "./svg/typescript-icon.svg",
                    name: "Typescript"
                }
            ],
            explanations: [
                "",
                ""
            ]
        },
        visuals: [],
        problems: [
            "",
            ""
        ],
        featured_code: [
            {
                name: "",
                code: ""
            }
        ],
        lessons: [
            ""
        ],
        lesson_vis: [],
        isWhite: false
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"ld4W7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _octopus = require("../Octopus");
var _octopusDefault = parcelHelpers.interopDefault(_octopus);
const m = (state)=>[
        {
            tag: "div",
            attrs: {
                class: "longer_description"
            },
            children: [
                {
                    tag: "h1",
                    attrs: {
                        class: "text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl"
                    },
                    children: [
                        state.project.name
                    ]
                },
                {
                    tag: "div",
                    attrs: {
                        class: "tools"
                    },
                    children: []
                },
                {
                    tag: "p",
                    attrs: {
                        class: "description text-gray-900 dark:text-white py-2 text-lg dark:text-white dark:opacity-70 opacity-100"
                    },
                    children: [
                        state.detailed.longer_description
                    ]
                },
                {
                    tag: "div",
                    attrs: {},
                    children: [
                        {
                            tag: "h3",
                            attrs: {
                                class: "text-2xl py-2 dark:text-white md:text-3xl"
                            },
                            children: [
                                "Links"
                            ]
                        },
                        {
                            tag: "div",
                            attrs: {
                                class: "flex py-2 text-orange-800",
                                style: "gap: 2em;"
                            },
                            children: state.project.links.map((link)=>{
                                if (link.type === "github") return {
                                    tag: "a",
                                    attrs: {
                                        href: link.link,
                                        target: "_blank",
                                        style: "text-decoration: underline;"
                                    },
                                    children: [
                                        "Source Code"
                                    ]
                                };
                                else if (link.type === "yt") return {
                                    tag: "a",
                                    attrs: {
                                        href: link.link,
                                        target: "_blank",
                                        style: "text-decoration: underline;"
                                    },
                                    children: [
                                        "Video Demo"
                                    ]
                                };
                                else return {
                                    tag: "a",
                                    attrs: {
                                        href: link.link,
                                        target: "_blank",
                                        style: "text-decoration: underline;"
                                    },
                                    children: [
                                        "Live Demo"
                                    ]
                                };
                            })
                        }
                    ]
                },
                {
                    tag: "div",
                    attrs: {
                        style: "height: 400px; overflow: hidden;",
                        class: "imgCon border-grey-800"
                    },
                    children: [
                        {
                            tag: "img",
                            attrs: {
                                class: "img2",
                                style: "margin: auto",
                                src: state.project.img
                            },
                            children: []
                        }
                    ]
                },
                {
                    tag: "div",
                    attrs: {
                        class: ""
                    },
                    children: [
                        {
                            tag: "h2",
                            attrs: {
                                class: "text-2xl py-2 dark:text-white md:text-3xl"
                            },
                            children: [
                                "Project Implementation"
                            ]
                        },
                        {
                            tag: "div",
                            attrs: {},
                            children: state.detailed.project_implementation.map((d)=>{
                                return {
                                    tag: "p",
                                    attrs: {
                                        class: "description text-gray-900 dark:text-white py-2 text-lg dark:text-white dark:opacity-70 opacity-100"
                                    },
                                    children: [
                                        d
                                    ]
                                };
                            })
                        },
                        {
                            tag: "div",
                            attrs: {
                                class: "stack py-6"
                            },
                            children: [
                                {
                                    tag: "div",
                                    attrs: {
                                        class: "stackImgs"
                                    },
                                    children: state.detailed.stack_explanation.stack.map((s)=>{
                                        return {
                                            tag: "div",
                                            attrs: {
                                                style: "height: 40px; width: 250px; margin: .2em 0; padding: 0 2em; display:flex; align-text: center;",
                                                class: "shadow-md dark:bg-gray-200 bg-white"
                                            },
                                            children: [
                                                {
                                                    tag: "img",
                                                    attrs: {
                                                        style: "height: 100%; object-fit: cover",
                                                        src: s.icon
                                                    }
                                                },
                                                {
                                                    tag: "p",
                                                    style: "",
                                                    children: [
                                                        s.name
                                                    ]
                                                }
                                            ]
                                        };
                                    })
                                },
                                {
                                    tag: "div",
                                    attrs: {
                                        class: "y-6",
                                        style: "margin: 2em 0;"
                                    },
                                    children: [
                                        {
                                            tag: "h2",
                                            attrs: {
                                                class: "text-2xl py-2 dark:text-white md:text-3xl"
                                            },
                                            children: [
                                                "Web Stack and Explanation"
                                            ]
                                        },
                                        ...state.detailed.stack_explanation.explanations.map((x)=>{
                                            return {
                                                tag: "p",
                                                attrs: {
                                                    class: "description text-gray-900 dark:text-white py-2 text-lg dark:text-white dark:opacity-70 opacity-100"
                                                },
                                                children: [
                                                    x
                                                ]
                                            };
                                        })
                                    ]
                                }, 
                            ]
                        }
                    ]
                },
                {
                    tag: "div",
                    attrs: {},
                    children: [
                        {
                            tag: "div",
                            attrs: {
                                class: "gallery py-6"
                            },
                            children: state.detailed.visuals.map((img, i)=>{
                                return {
                                    tag: "img",
                                    attrs: {
                                        class: `${state.detailed.isWhite ? "generalImgWborder" : "generalImg"}`,
                                        style: i === 0 ? "grid-area: one; margin: auto" : "",
                                        src: img
                                    }
                                };
                            })
                        },
                        {
                            tag: "div",
                            attrs: {},
                            children: [
                                {
                                    tag: "h2",
                                    attrs: {
                                        class: "text-2xl py-2 dark:text-white md:text-3xl"
                                    },
                                    children: [
                                        "Problems and Thought Process"
                                    ]
                                },
                                {
                                    tag: "div",
                                    children: state.detailed.problems.map((p)=>{
                                        return {
                                            tag: "p",
                                            attrs: {
                                                class: "description text-gray-900 dark:text-white py-2 text-lg dark:text-white dark:opacity-70 opacity-100"
                                            },
                                            children: [
                                                p
                                            ]
                                        };
                                    })
                                }
                            ]
                        },
                        {
                            tag: "div",
                            attrs: {},
                            children: [
                                {
                                    tag: "h2",
                                    attrs: {
                                        class: "text-2xl py-2 dark:text-white md:text-3xl"
                                    },
                                    children: [
                                        "Lesson's learned"
                                    ]
                                },
                                {
                                    tag: "div",
                                    children: state.detailed.lessons.map((p)=>{
                                        return {
                                            tag: "p",
                                            attrs: {
                                                class: "description text-gray-900 dark:text-white py-2 text-lg dark:text-white dark:opacity-70 opacity-100"
                                            },
                                            children: [
                                                p
                                            ]
                                        };
                                    })
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
function projectView(state) {
    console.log(window.scrollY, state);
    return {
        tag: "div",
        attrs: {
            style: `position:absolute; width: 100vw; overflow-y: auto; height: 100vh; top:0;  transform: translateY(${window.scrollY}px);`,
            class: "bg-white px-10 dark:bg-black md:px-20 lg:px-40"
        },
        children: [
            {
                tag: "a",
                attrs: {
                    onclick: ()=>(0, _octopusDefault.default).notify("removeDetails"),
                    class: "w-full h-12 text-bold text-2xl social-links dark:text-orange-200 text-orange-900 my-12",
                    style: "cursor: pointer; text-decoration: underline;"
                },
                children: [
                    " back"
                ]
            },
            {
                tag: "div",
                attrs: {
                    class: "my-6 detailParent"
                },
                children: m(state)
            }
        ]
    };
}
exports.default = projectView;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2mdku","../Octopus":"2DffO"}]},["2Ah9o","bNKaB"], "bNKaB", "parcelRequire5a46")

//# sourceMappingURL=index.0641b553.js.map
