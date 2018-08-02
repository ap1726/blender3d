"use strict"
b4w.register("rings_shadow_main", function(exports, require) {
var m_app       = require("app");
var m_cfg       = require("config");
var m_data      = require("data");
var m_preloader = require("preloader");
var m_ver       = require("version");
var m_log_nodes = require("logic_nodes");
var m_scenes = require("scenes");
var m_mat = require("material");
var m_tex = require("textures");
var DEBUG = (m_ver.type() == "DEBUG");
var APP_ASSETS_PATH = m_cfg.get_assets_path("divan");

exports.init = function() {
    m_app.init({
        canvas_container_id: "main_canvas_container",
        callback: init_cb,
        // show_fps: DEBUG,
        // console_verbose: DEBUG,
        autoresize: true
    });
}
function init_cb(canvas_elem, success) {
    if (!success) {
        console.log("b4w init failure");
        return;
    }
    m_preloader.create_preloader();

    // ignore right-click on the canvas element
    canvas_elem.oncontextmenu = function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    };
    load();
}
function load() {
    m_data.load(APP_ASSETS_PATH + "divan.json", load_cb, preloader_cb);
}
function preloader_cb(percentage) {
    m_preloader.update_preloader(percentage);
} 
    
function load_cb(data_id, success) {

    if (!success) {
        console.log("b4w load failure");
        return;
    }

    m_app.enable_camera_controls();

    // place your code here
    var seatBlock = m_scenes.get_object_by_name("seat");
    var backBlock = m_scenes.get_object_by_name("back");
    
    $('#but1').click(function(){
        changeMaterial(seatBlock,"mat1", "mat1");
        changeMaterial(backBlock,"mat1", "mat1");
    });
    $('#but2').click(function(){
        changeMaterial(seatBlock,"mat1", "mat2");
        changeMaterial(backBlock,"mat1", "mat2");
    });
    $('#but3').click(function(){
        changeMaterial(seatBlock,"mat1", "mat3");
        changeMaterial(backBlock,"mat1", "mat3");
    });
    $('#but4').click(function(){
        changeMaterial(seatBlock,"mat1", "mat4");
        changeMaterial(backBlock,"mat1", "mat4");
    });
    $('#but5').click(function(){
        changeMaterial(seatBlock,"mat1", "mat5");
        changeMaterial(backBlock,"mat1", "mat5");
    });
    $('#but6').click(function(){
        changeMaterial(seatBlock,"mat1", "mat6");
        changeMaterial(backBlock,"mat1", "mat6");
    });
    $('#but7').click(function(){
        changeMaterial(seatBlock,"mat1", "mat7");
        changeMaterial(backBlock,"mat1", "mat7");
    });
    $('#but8').click(function(){
        changeMaterial(seatBlock,"mat1", "mat8");
        changeMaterial(backBlock,"mat1", "mat8");
    });
/////////////////////////////////////////////
  
   function changeMaterial(inObj, inMat, outMat){
        var materialObj = m_scenes.get_object_by_name("Plane.001");
        m_mat.inherit_material(materialObj, outMat, inObj, inMat);
   }
}//end place code
});
// import the app module and start the app by calling the init method
b4w.require("rings_shadow_main").init();
