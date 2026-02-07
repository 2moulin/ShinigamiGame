gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.idToCallbackMap = new Map();
gdjs.LeaderboardCode.GDNewTiledSpriteObjects1= [];
gdjs.LeaderboardCode.GDNewTiledSpriteObjects2= [];
gdjs.LeaderboardCode.GDNewTiledSpriteObjects3= [];
gdjs.LeaderboardCode.GDNewTiledSpriteObjects4= [];
gdjs.LeaderboardCode.GDNewTiledSpriteObjects5= [];
gdjs.LeaderboardCode.GDOutsideDetailsSkeletObjects1= [];
gdjs.LeaderboardCode.GDOutsideDetailsSkeletObjects2= [];
gdjs.LeaderboardCode.GDOutsideDetailsSkeletObjects3= [];
gdjs.LeaderboardCode.GDOutsideDetailsSkeletObjects4= [];
gdjs.LeaderboardCode.GDOutsideDetailsSkeletObjects5= [];
gdjs.LeaderboardCode.GDOutsideWaterBordersObjects1= [];
gdjs.LeaderboardCode.GDOutsideWaterBordersObjects2= [];
gdjs.LeaderboardCode.GDOutsideWaterBordersObjects3= [];
gdjs.LeaderboardCode.GDOutsideWaterBordersObjects4= [];
gdjs.LeaderboardCode.GDOutsideWaterBordersObjects5= [];
gdjs.LeaderboardCode.GDCastleTileObjects1= [];
gdjs.LeaderboardCode.GDCastleTileObjects2= [];
gdjs.LeaderboardCode.GDCastleTileObjects3= [];
gdjs.LeaderboardCode.GDCastleTileObjects4= [];
gdjs.LeaderboardCode.GDCastleTileObjects5= [];
gdjs.LeaderboardCode.GDGrillsObjects1= [];
gdjs.LeaderboardCode.GDGrillsObjects2= [];
gdjs.LeaderboardCode.GDGrillsObjects3= [];
gdjs.LeaderboardCode.GDGrillsObjects4= [];
gdjs.LeaderboardCode.GDGrillsObjects5= [];
gdjs.LeaderboardCode.GDStairsAndShopTileObjects1= [];
gdjs.LeaderboardCode.GDStairsAndShopTileObjects2= [];
gdjs.LeaderboardCode.GDStairsAndShopTileObjects3= [];
gdjs.LeaderboardCode.GDStairsAndShopTileObjects4= [];
gdjs.LeaderboardCode.GDStairsAndShopTileObjects5= [];
gdjs.LeaderboardCode.GDCastleDetailsTileObjects1= [];
gdjs.LeaderboardCode.GDCastleDetailsTileObjects2= [];
gdjs.LeaderboardCode.GDCastleDetailsTileObjects3= [];
gdjs.LeaderboardCode.GDCastleDetailsTileObjects4= [];
gdjs.LeaderboardCode.GDCastleDetailsTileObjects5= [];
gdjs.LeaderboardCode.GDBackgroundOpacityObjects1= [];
gdjs.LeaderboardCode.GDBackgroundOpacityObjects2= [];
gdjs.LeaderboardCode.GDBackgroundOpacityObjects3= [];
gdjs.LeaderboardCode.GDBackgroundOpacityObjects4= [];
gdjs.LeaderboardCode.GDBackgroundOpacityObjects5= [];
gdjs.LeaderboardCode.GDTransitionOutObjects1= [];
gdjs.LeaderboardCode.GDTransitionOutObjects2= [];
gdjs.LeaderboardCode.GDTransitionOutObjects3= [];
gdjs.LeaderboardCode.GDTransitionOutObjects4= [];
gdjs.LeaderboardCode.GDTransitionOutObjects5= [];
gdjs.LeaderboardCode.GDCursorObjects1= [];
gdjs.LeaderboardCode.GDCursorObjects2= [];
gdjs.LeaderboardCode.GDCursorObjects3= [];
gdjs.LeaderboardCode.GDCursorObjects4= [];
gdjs.LeaderboardCode.GDCursorObjects5= [];
gdjs.LeaderboardCode.GDNewSprite2Objects1= [];
gdjs.LeaderboardCode.GDNewSprite2Objects2= [];
gdjs.LeaderboardCode.GDNewSprite2Objects3= [];
gdjs.LeaderboardCode.GDNewSprite2Objects4= [];
gdjs.LeaderboardCode.GDNewSprite2Objects5= [];
gdjs.LeaderboardCode.GDBackButtonObjects1= [];
gdjs.LeaderboardCode.GDBackButtonObjects2= [];
gdjs.LeaderboardCode.GDBackButtonObjects3= [];
gdjs.LeaderboardCode.GDBackButtonObjects4= [];
gdjs.LeaderboardCode.GDBackButtonObjects5= [];
gdjs.LeaderboardCode.GDNameLeaderboardObjects1= [];
gdjs.LeaderboardCode.GDNameLeaderboardObjects2= [];
gdjs.LeaderboardCode.GDNameLeaderboardObjects3= [];
gdjs.LeaderboardCode.GDNameLeaderboardObjects4= [];
gdjs.LeaderboardCode.GDNameLeaderboardObjects5= [];
gdjs.LeaderboardCode.GDTransitionToLobbyObjects1= [];
gdjs.LeaderboardCode.GDTransitionToLobbyObjects2= [];
gdjs.LeaderboardCode.GDTransitionToLobbyObjects3= [];
gdjs.LeaderboardCode.GDTransitionToLobbyObjects4= [];
gdjs.LeaderboardCode.GDTransitionToLobbyObjects5= [];
gdjs.LeaderboardCode.GDNewBitmapText2Objects1= [];
gdjs.LeaderboardCode.GDNewBitmapText2Objects2= [];
gdjs.LeaderboardCode.GDNewBitmapText2Objects3= [];
gdjs.LeaderboardCode.GDNewBitmapText2Objects4= [];
gdjs.LeaderboardCode.GDNewBitmapText2Objects5= [];
gdjs.LeaderboardCode.GDRainObjects1= [];
gdjs.LeaderboardCode.GDRainObjects2= [];
gdjs.LeaderboardCode.GDRainObjects3= [];
gdjs.LeaderboardCode.GDRainObjects4= [];
gdjs.LeaderboardCode.GDRainObjects5= [];


gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDTransitionToLobbyObjects3Objects = Hashtable.newFrom({"TransitionToLobby": gdjs.LeaderboardCode.GDTransitionToLobbyObjects3});
gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(30908580);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1080, 1920);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "Leaderboard", 0);
}
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, 90, "", 0);
}
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, 90, "Leaderboard", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 640, "", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 640, "Leaderboard", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 360, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 360, "Leaderboard", 0);
}
}

}


};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackgroundOpacity"), gdjs.LeaderboardCode.GDBackgroundOpacityObjects3);
gdjs.copyArray(runtimeScene.getObjects("TransitionOut"), gdjs.LeaderboardCode.GDTransitionOutObjects3);
gdjs.LeaderboardCode.GDTransitionToLobbyObjects3.length = 0;

{for(var i = 0, len = gdjs.LeaderboardCode.GDTransitionOutObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTransitionOutObjects3[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDTransitionToLobbyObjects3Objects, 0, 0, "Transition");
}
{for(var i = 0, len = gdjs.LeaderboardCode.GDTransitionToLobbyObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTransitionToLobbyObjects3[i].setZOrder(999);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SavingFirebase");
}
{for(var i = 0, len = gdjs.LeaderboardCode.GDBackgroundOpacityObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDBackgroundOpacityObjects3[i].getBehavior("Opacity").setOpacity(100);
}
}
{for(var i = 0, len = gdjs.LeaderboardCode.GDTransitionToLobbyObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTransitionToLobbyObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Backward", 0, null);
}
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.6, "Cursor", 0);
}

{ //Subevents
gdjs.LeaderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransitionToLobby"), gdjs.LeaderboardCode.GDTransitionToLobbyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDTransitionToLobbyObjects2.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDTransitionToLobbyObjects2[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd(null) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDTransitionToLobbyObjects2[k] = gdjs.LeaderboardCode.GDTransitionToLobbyObjects2[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDTransitionToLobbyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(30910588);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.LeaderboardCode.GDTransitionToLobbyObjects2 */
{for(var i = 0, len = gdjs.LeaderboardCode.GDTransitionToLobbyObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTransitionToLobbyObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.LeaderboardCode.userFunc0x226a938 = function GDJSInlineCode(runtimeScene) {
"use strict";
const firebaseData = runtimeScene.getVariables().get("FirebaseData");
const docs = firebaseData.getChild("docs");

const nameObjects = runtimeScene.getObjects("NameLeaderboard");
const orbsObjects = runtimeScene.getObjects("NewBitmapText2");

let index = 0;
docs.getAllChildrenArray().forEach(doc => {
  const data = doc.getChild("data");
  const wallet = data.getChild("Wallet").getAsString();
  const totalOrbs = data.getChild("TotalOrbs").getAsNumber();
  
  const nameObj = nameObjects.find(obj => obj.getVariables().get("ID").getAsNumber() === index);
  const orbsObj = orbsObjects.find(obj => obj.getVariables().get("ID").getAsNumber() === index);
  
  if (nameObj) {
    const walletText = wallet.substring(0, 8) + "...";
    if (nameObj.getBehavior) {
      nameObj.getBehavior("Text").setText(walletText);
    } else if (nameObj.setText) {
      nameObj.setText(walletText);
    }
  }
  
  if (orbsObj) {
    const orbsText = Math.floor(totalOrbs) + " orbs";
    if (orbsObj.getBehavior) {
      orbsObj.getBehavior("Text").setText(orbsText);
    } else if (orbsObj.setText) {
      orbsObj.setText(orbsText);
    }
  }
  
  index++;
});
};
gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

{


gdjs.LeaderboardCode.userFunc0x226a938(runtimeScene);

}


};gdjs.LeaderboardCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.startQuery("LeaderboardQuery", "SavedData");
}
{gdjs.evtTools.firebaseTools.firestore.queryOrderBy("LeaderboardQuery", "TotalOrbs", "desc");
}
{gdjs.evtTools.firebaseTools.firestore.queryLimit("LeaderboardQuery", 15, false);
}
{gdjs.evtTools.firebaseTools.firestore.executeQuery("LeaderboardQuery", runtimeScene.getScene().getVariables().get("FirebaseData"), runtimeScene.getScene().getVariables().get("ErrorVar"));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().get("FirebaseData")) > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(30913628);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDBackButtonObjects4Objects = Hashtable.newFrom({"BackButton": gdjs.LeaderboardCode.GDBackButtonObjects4});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDBackButtonObjects3Objects = Hashtable.newFrom({"BackButton": gdjs.LeaderboardCode.GDBackButtonObjects3});
gdjs.LeaderboardCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.LeaderboardCode.GDBackButtonObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDBackButtonObjects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(30915348);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.LeaderboardCode.GDBackButtonObjects4 */
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonHoverSoundEffect.mp3", false, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound").getAsNumber(), 1);
}
{for(var i = 0, len = gdjs.LeaderboardCode.GDBackButtonObjects4.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDBackButtonObjects4[i].getBehavior("Animation").setAnimationName("Idlea-1");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.LeaderboardCode.GDBackButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDBackButtonObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.LeaderboardCode.GDBackButtonObjects3 */
{for(var i = 0, len = gdjs.LeaderboardCode.GDBackButtonObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDBackButtonObjects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


};gdjs.LeaderboardCode.eventsList5 = function(runtimeScene) {

{


gdjs.LeaderboardCode.eventsList4(runtimeScene);
}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDTransitionOutObjects3Objects = Hashtable.newFrom({"TransitionOut": gdjs.LeaderboardCode.GDTransitionOutObjects3});
gdjs.LeaderboardCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.LeaderboardCode.GDBackButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDBackButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.LeaderboardCode.GDBackButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDBackButtonObjects3[k] = gdjs.LeaderboardCode.GDBackButtonObjects3[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDBackButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDBackButtonObjects3.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDBackButtonObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDBackButtonObjects3[k] = gdjs.LeaderboardCode.GDBackButtonObjects3[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDBackButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(30918796);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.LeaderboardCode.GDBackButtonObjects3 */
{for(var i = 0, len = gdjs.LeaderboardCode.GDBackButtonObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDBackButtonObjects3[i].getBehavior("Animation").setAnimationName("Pressed");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonHoverSoundEffect.mp3", false, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound").getAsNumber(), 1.6);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.LeaderboardCode.GDBackButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDBackButtonObjects3.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDBackButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDBackButtonObjects3[k] = gdjs.LeaderboardCode.GDBackButtonObjects3[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDBackButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDBackButtonObjects3.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDBackButtonObjects3[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDBackButtonObjects3[k] = gdjs.LeaderboardCode.GDBackButtonObjects3[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDBackButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(30920428);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.LeaderboardCode.GDBackButtonObjects3 */
gdjs.LeaderboardCode.GDTransitionOutObjects3.length = 0;

{for(var i = 0, len = gdjs.LeaderboardCode.GDBackButtonObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDBackButtonObjects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDTransitionOutObjects3Objects, 0, 0, "Transition");
}
{for(var i = 0, len = gdjs.LeaderboardCode.GDTransitionOutObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTransitionOutObjects3[i].setZOrder(999);
}
}
{for(var i = 0, len = gdjs.LeaderboardCode.GDTransitionOutObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTransitionOutObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Forward", 0, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransitionOut"), gdjs.LeaderboardCode.GDTransitionOutObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDTransitionOutObjects2.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDTransitionOutObjects2[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd(null) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDTransitionOutObjects2[k] = gdjs.LeaderboardCode.GDTransitionOutObjects2[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDTransitionOutObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(30922036);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


};gdjs.LeaderboardCode.eventsList7 = function(runtimeScene) {

{


gdjs.LeaderboardCode.eventsList5(runtimeScene);
}


{


gdjs.LeaderboardCode.eventsList6(runtimeScene);
}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDCursorObjects2Objects = Hashtable.newFrom({"Cursor": gdjs.LeaderboardCode.GDCursorObjects2});
gdjs.LeaderboardCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
}
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDCursorObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDCursorObjects2Objects, 0, 0, "Cursor");
}
{for(var i = 0, len = gdjs.LeaderboardCode.GDCursorObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDCursorObjects2[i].getBehavior("Resizable").setSize(12, 12);
}
}
{for(var i = 0, len = gdjs.LeaderboardCode.GDCursorObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDCursorObjects2[i].setZOrder(1000000000000);
}
}
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.LeaderboardCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "Cursor", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "Cursor", 0));
}
}
}

}


};gdjs.LeaderboardCode.eventsList9 = function(runtimeScene) {

{


gdjs.LeaderboardCode.eventsList1(runtimeScene);
}


{


gdjs.LeaderboardCode.eventsList3(runtimeScene);
}


{


gdjs.LeaderboardCode.eventsList7(runtimeScene);
}


{


gdjs.LeaderboardCode.eventsList8(runtimeScene);
}


};gdjs.LeaderboardCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.LeaderboardCode.eventsList9(runtimeScene);} //End of subevents
}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.LeaderboardCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.LeaderboardCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.LeaderboardCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.LeaderboardCode.GDNewTiledSpriteObjects5.length = 0;
gdjs.LeaderboardCode.GDOutsideDetailsSkeletObjects1.length = 0;
gdjs.LeaderboardCode.GDOutsideDetailsSkeletObjects2.length = 0;
gdjs.LeaderboardCode.GDOutsideDetailsSkeletObjects3.length = 0;
gdjs.LeaderboardCode.GDOutsideDetailsSkeletObjects4.length = 0;
gdjs.LeaderboardCode.GDOutsideDetailsSkeletObjects5.length = 0;
gdjs.LeaderboardCode.GDOutsideWaterBordersObjects1.length = 0;
gdjs.LeaderboardCode.GDOutsideWaterBordersObjects2.length = 0;
gdjs.LeaderboardCode.GDOutsideWaterBordersObjects3.length = 0;
gdjs.LeaderboardCode.GDOutsideWaterBordersObjects4.length = 0;
gdjs.LeaderboardCode.GDOutsideWaterBordersObjects5.length = 0;
gdjs.LeaderboardCode.GDCastleTileObjects1.length = 0;
gdjs.LeaderboardCode.GDCastleTileObjects2.length = 0;
gdjs.LeaderboardCode.GDCastleTileObjects3.length = 0;
gdjs.LeaderboardCode.GDCastleTileObjects4.length = 0;
gdjs.LeaderboardCode.GDCastleTileObjects5.length = 0;
gdjs.LeaderboardCode.GDGrillsObjects1.length = 0;
gdjs.LeaderboardCode.GDGrillsObjects2.length = 0;
gdjs.LeaderboardCode.GDGrillsObjects3.length = 0;
gdjs.LeaderboardCode.GDGrillsObjects4.length = 0;
gdjs.LeaderboardCode.GDGrillsObjects5.length = 0;
gdjs.LeaderboardCode.GDStairsAndShopTileObjects1.length = 0;
gdjs.LeaderboardCode.GDStairsAndShopTileObjects2.length = 0;
gdjs.LeaderboardCode.GDStairsAndShopTileObjects3.length = 0;
gdjs.LeaderboardCode.GDStairsAndShopTileObjects4.length = 0;
gdjs.LeaderboardCode.GDStairsAndShopTileObjects5.length = 0;
gdjs.LeaderboardCode.GDCastleDetailsTileObjects1.length = 0;
gdjs.LeaderboardCode.GDCastleDetailsTileObjects2.length = 0;
gdjs.LeaderboardCode.GDCastleDetailsTileObjects3.length = 0;
gdjs.LeaderboardCode.GDCastleDetailsTileObjects4.length = 0;
gdjs.LeaderboardCode.GDCastleDetailsTileObjects5.length = 0;
gdjs.LeaderboardCode.GDBackgroundOpacityObjects1.length = 0;
gdjs.LeaderboardCode.GDBackgroundOpacityObjects2.length = 0;
gdjs.LeaderboardCode.GDBackgroundOpacityObjects3.length = 0;
gdjs.LeaderboardCode.GDBackgroundOpacityObjects4.length = 0;
gdjs.LeaderboardCode.GDBackgroundOpacityObjects5.length = 0;
gdjs.LeaderboardCode.GDTransitionOutObjects1.length = 0;
gdjs.LeaderboardCode.GDTransitionOutObjects2.length = 0;
gdjs.LeaderboardCode.GDTransitionOutObjects3.length = 0;
gdjs.LeaderboardCode.GDTransitionOutObjects4.length = 0;
gdjs.LeaderboardCode.GDTransitionOutObjects5.length = 0;
gdjs.LeaderboardCode.GDCursorObjects1.length = 0;
gdjs.LeaderboardCode.GDCursorObjects2.length = 0;
gdjs.LeaderboardCode.GDCursorObjects3.length = 0;
gdjs.LeaderboardCode.GDCursorObjects4.length = 0;
gdjs.LeaderboardCode.GDCursorObjects5.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects1.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects2.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects3.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects4.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects5.length = 0;
gdjs.LeaderboardCode.GDBackButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDBackButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDBackButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDBackButtonObjects4.length = 0;
gdjs.LeaderboardCode.GDBackButtonObjects5.length = 0;
gdjs.LeaderboardCode.GDNameLeaderboardObjects1.length = 0;
gdjs.LeaderboardCode.GDNameLeaderboardObjects2.length = 0;
gdjs.LeaderboardCode.GDNameLeaderboardObjects3.length = 0;
gdjs.LeaderboardCode.GDNameLeaderboardObjects4.length = 0;
gdjs.LeaderboardCode.GDNameLeaderboardObjects5.length = 0;
gdjs.LeaderboardCode.GDTransitionToLobbyObjects1.length = 0;
gdjs.LeaderboardCode.GDTransitionToLobbyObjects2.length = 0;
gdjs.LeaderboardCode.GDTransitionToLobbyObjects3.length = 0;
gdjs.LeaderboardCode.GDTransitionToLobbyObjects4.length = 0;
gdjs.LeaderboardCode.GDTransitionToLobbyObjects5.length = 0;
gdjs.LeaderboardCode.GDNewBitmapText2Objects1.length = 0;
gdjs.LeaderboardCode.GDNewBitmapText2Objects2.length = 0;
gdjs.LeaderboardCode.GDNewBitmapText2Objects3.length = 0;
gdjs.LeaderboardCode.GDNewBitmapText2Objects4.length = 0;
gdjs.LeaderboardCode.GDNewBitmapText2Objects5.length = 0;
gdjs.LeaderboardCode.GDRainObjects1.length = 0;
gdjs.LeaderboardCode.GDRainObjects2.length = 0;
gdjs.LeaderboardCode.GDRainObjects3.length = 0;
gdjs.LeaderboardCode.GDRainObjects4.length = 0;
gdjs.LeaderboardCode.GDRainObjects5.length = 0;

gdjs.LeaderboardCode.eventsList10(runtimeScene);
gdjs.LeaderboardCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.LeaderboardCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.LeaderboardCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.LeaderboardCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.LeaderboardCode.GDNewTiledSpriteObjects5.length = 0;
gdjs.LeaderboardCode.GDOutsideDetailsSkeletObjects1.length = 0;
gdjs.LeaderboardCode.GDOutsideDetailsSkeletObjects2.length = 0;
gdjs.LeaderboardCode.GDOutsideDetailsSkeletObjects3.length = 0;
gdjs.LeaderboardCode.GDOutsideDetailsSkeletObjects4.length = 0;
gdjs.LeaderboardCode.GDOutsideDetailsSkeletObjects5.length = 0;
gdjs.LeaderboardCode.GDOutsideWaterBordersObjects1.length = 0;
gdjs.LeaderboardCode.GDOutsideWaterBordersObjects2.length = 0;
gdjs.LeaderboardCode.GDOutsideWaterBordersObjects3.length = 0;
gdjs.LeaderboardCode.GDOutsideWaterBordersObjects4.length = 0;
gdjs.LeaderboardCode.GDOutsideWaterBordersObjects5.length = 0;
gdjs.LeaderboardCode.GDCastleTileObjects1.length = 0;
gdjs.LeaderboardCode.GDCastleTileObjects2.length = 0;
gdjs.LeaderboardCode.GDCastleTileObjects3.length = 0;
gdjs.LeaderboardCode.GDCastleTileObjects4.length = 0;
gdjs.LeaderboardCode.GDCastleTileObjects5.length = 0;
gdjs.LeaderboardCode.GDGrillsObjects1.length = 0;
gdjs.LeaderboardCode.GDGrillsObjects2.length = 0;
gdjs.LeaderboardCode.GDGrillsObjects3.length = 0;
gdjs.LeaderboardCode.GDGrillsObjects4.length = 0;
gdjs.LeaderboardCode.GDGrillsObjects5.length = 0;
gdjs.LeaderboardCode.GDStairsAndShopTileObjects1.length = 0;
gdjs.LeaderboardCode.GDStairsAndShopTileObjects2.length = 0;
gdjs.LeaderboardCode.GDStairsAndShopTileObjects3.length = 0;
gdjs.LeaderboardCode.GDStairsAndShopTileObjects4.length = 0;
gdjs.LeaderboardCode.GDStairsAndShopTileObjects5.length = 0;
gdjs.LeaderboardCode.GDCastleDetailsTileObjects1.length = 0;
gdjs.LeaderboardCode.GDCastleDetailsTileObjects2.length = 0;
gdjs.LeaderboardCode.GDCastleDetailsTileObjects3.length = 0;
gdjs.LeaderboardCode.GDCastleDetailsTileObjects4.length = 0;
gdjs.LeaderboardCode.GDCastleDetailsTileObjects5.length = 0;
gdjs.LeaderboardCode.GDBackgroundOpacityObjects1.length = 0;
gdjs.LeaderboardCode.GDBackgroundOpacityObjects2.length = 0;
gdjs.LeaderboardCode.GDBackgroundOpacityObjects3.length = 0;
gdjs.LeaderboardCode.GDBackgroundOpacityObjects4.length = 0;
gdjs.LeaderboardCode.GDBackgroundOpacityObjects5.length = 0;
gdjs.LeaderboardCode.GDTransitionOutObjects1.length = 0;
gdjs.LeaderboardCode.GDTransitionOutObjects2.length = 0;
gdjs.LeaderboardCode.GDTransitionOutObjects3.length = 0;
gdjs.LeaderboardCode.GDTransitionOutObjects4.length = 0;
gdjs.LeaderboardCode.GDTransitionOutObjects5.length = 0;
gdjs.LeaderboardCode.GDCursorObjects1.length = 0;
gdjs.LeaderboardCode.GDCursorObjects2.length = 0;
gdjs.LeaderboardCode.GDCursorObjects3.length = 0;
gdjs.LeaderboardCode.GDCursorObjects4.length = 0;
gdjs.LeaderboardCode.GDCursorObjects5.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects1.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects2.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects3.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects4.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects5.length = 0;
gdjs.LeaderboardCode.GDBackButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDBackButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDBackButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDBackButtonObjects4.length = 0;
gdjs.LeaderboardCode.GDBackButtonObjects5.length = 0;
gdjs.LeaderboardCode.GDNameLeaderboardObjects1.length = 0;
gdjs.LeaderboardCode.GDNameLeaderboardObjects2.length = 0;
gdjs.LeaderboardCode.GDNameLeaderboardObjects3.length = 0;
gdjs.LeaderboardCode.GDNameLeaderboardObjects4.length = 0;
gdjs.LeaderboardCode.GDNameLeaderboardObjects5.length = 0;
gdjs.LeaderboardCode.GDTransitionToLobbyObjects1.length = 0;
gdjs.LeaderboardCode.GDTransitionToLobbyObjects2.length = 0;
gdjs.LeaderboardCode.GDTransitionToLobbyObjects3.length = 0;
gdjs.LeaderboardCode.GDTransitionToLobbyObjects4.length = 0;
gdjs.LeaderboardCode.GDTransitionToLobbyObjects5.length = 0;
gdjs.LeaderboardCode.GDNewBitmapText2Objects1.length = 0;
gdjs.LeaderboardCode.GDNewBitmapText2Objects2.length = 0;
gdjs.LeaderboardCode.GDNewBitmapText2Objects3.length = 0;
gdjs.LeaderboardCode.GDNewBitmapText2Objects4.length = 0;
gdjs.LeaderboardCode.GDNewBitmapText2Objects5.length = 0;
gdjs.LeaderboardCode.GDRainObjects1.length = 0;
gdjs.LeaderboardCode.GDRainObjects2.length = 0;
gdjs.LeaderboardCode.GDRainObjects3.length = 0;
gdjs.LeaderboardCode.GDRainObjects4.length = 0;
gdjs.LeaderboardCode.GDRainObjects5.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
