
if (typeof gdjs.evtsExt__WalletConnection__Function !== "undefined") {
  gdjs.evtsExt__WalletConnection__Function.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WalletConnection__Function = {};
gdjs.evtsExt__WalletConnection__Function.idToCallbackMap = new Map();


gdjs.evtsExt__WalletConnection__Function.userFunc0xd71088 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
async function connectPhantom() {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (window.phantom?.solana?.isPhantom) {
      const provider = window.phantom.solana;
      const response = await provider.connect();
      const publicKey = response.publicKey.toString();
      const timestamp = Date.now().toString();
      const message = "shinigami-auth-" + timestamp;
      const encoded = new TextEncoder().encode(message);
      const signResult = await provider.signMessage(encoded, "utf8");
      const sigBytes = new Uint8Array(signResult.signature || signResult);
      const sigBase64 = btoa(String.fromCharCode.apply(null, Array.from(sigBytes)));
      const authRes = await fetch("https://www.shinirealms.xyz/api/auth/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wallet: publicKey, signature: sigBase64, message: message })
      });
      const authResult = await authRes.json();
      if (!authResult.sessionToken) throw new Error("Auth failed");
      window.__shinigamiSessionToken = authResult.sessionToken;
      if (!window.__shinigamiFetchPatched) {
        const _origFetch = window.fetch;
        const _hk = [83,72,73,78,73,71,65,77,73,95,72,77,65,67,95,50,48,50,54,95,120,57,107,50,109].map(function(c){return String.fromCharCode(c)}).join("");
        window.fetch = async function(url, opts) {
          if (typeof url === "string" && (url.includes("/api/game/save") || url.includes("/api/game/add-orbs")) && opts && opts.body) {
            try {
              var b = JSON.parse(opts.body);
              if (b.data) b.data.SessionToken = window.__shinigamiSessionToken;
              else b.SessionToken = window.__shinigamiSessionToken;
              var w = b.wallet || b.walletAddress || b.Wallet || (b.data && b.data.Wallet) || "";
              var ts = Date.now().toString();
              var enc = new TextEncoder();
              var k = await crypto.subtle.importKey("raw", enc.encode(_hk), {name:"HMAC",hash:"SHA-256"}, false, ["sign"]);
              var s = await crypto.subtle.sign("HMAC", k, enc.encode(w + ":" + ts));
              b._sig = Array.from(new Uint8Array(s)).map(function(x){return x.toString(16).padStart(2,"0")}).join("");
              b._ts = ts;
              opts.body = JSON.stringify(b);
            } catch(e) {}
          }
          return _origFetch.call(this, url, opts);
        };
        window.__shinigamiFetchPatched = true;
      }
      const saved = runtimeScene.getGame().getVariables().get("Saved");
      saved.getChild("Wallet").setString(publicKey);
      try {
        const loadRes = await fetch("https://www.shinirealms.xyz/api/game/load", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ wallet: publicKey })
        });
        const loadResult = await loadRes.json();
        if (loadResult.success && loadResult.data) {
          saved.fromJSObject(loadResult.data);
          saved.getChild("SessionToken").setString(authResult.sessionToken);
        }
      } catch (e) {}
    } else {
      runtimeScene.getGame().getVariables().get("Saved").getChild("Wallet").setString("0");
    }
  } catch (error) {
    runtimeScene.getGame().getVariables().get("Saved").getChild("Wallet").setString("0");
  }
}
connectPhantom();

};
gdjs.evtsExt__WalletConnection__Function.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WalletConnection__Function.userFunc0xd71088(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WalletConnection__Function.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WalletConnection"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WalletConnection"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WalletConnection__Function.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WalletConnection__Function.registeredGdjsCallbacks = [];