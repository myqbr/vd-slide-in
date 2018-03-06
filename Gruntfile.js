"use strict";

module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat: {
            all: {
                options: {
                    process: function (content) {
                        return grunt.template.process(content);
                    }
                },
                files: {
                    "dist/js/vd-slide-in-all.js": ["src/js/*.js"]
                }
            }
        },
        sass: {
            dist: {
                options: {
                    noCache: true
                },
                files: {
                    "dist/css/vd-slide-in.css": "src/sass/vd-slide-in.scss"
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: "dist/css",
                    src: ["vd-slide-in.css"],
                    dest: "dist/css",
                    ext: ".min.css"
                }]
            }
        },
        uglify: {
            options: {
                preserveComments: "some"
            },
            build: {
                files: [{
                    "dist/js/vd-slide-in-all.min.js": "dist/js/vd-slide-in-all.js",
                }]
            }
        },
        copy: {
            bower: {
                files: [{
                    expand: true,
                    cwd: "dist/",
                    src: "src/*",
                    dest: "../vd-slide-in-bower/",
                    flatten: true,
                    filter: "isFile"
                }]
            }
        },
        watch: {
            js: {
                files: ["src/{,*/}*.js"],
                tasks: ["concat:all", "copy:build"]
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        "dist",
                        "!dist/.git*"
                    ]
                }]
            }
        }
    });

    grunt.registerTask("dev", ["concat:all", "sass", "cssmin", "uglify", "watch"]);
    grunt.registerTask("default", ["clean:dist", "concat:all", "sass", "cssmin", "uglify", "copy:bower"]);

};