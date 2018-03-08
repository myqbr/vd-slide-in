"use strict";

module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
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
        },
        ngtemplates: {
            app: {
                src: "src/html/**.html",
                dest: "dist/js/htmlTemplates.js",
                options: {
                    module: "vivadecora.module.vd-slide-in",
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeComments: true
                    }
                }
            }
        },
        concat: {
            all: {
                options: {
                    process: function (content) {
                        return grunt.template.process(content);
                    }
                },
                files: {
                    "dist/js/vd-slide-in.js": ["src/js/*.module.js", "src/js/*.js", "dist/js/htmlTemplates.js"]
                }
            }
        },
        uglify: {
            options: {
                preserveComments: "some"
            },
            build: {
                files: [{
                    "dist/js/vd-slide-in.min.js": "dist/js/vd-slide-in.js",
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    noCache: true
                },
                files: {
                    "dist/css/vd-slide-in.css": "src/sass/vd-slide-in.sass"
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
        watch: {
            css: {
                files: "src/sass/**/*.sass",
                tasks: ["sass", "cssmin", "copy:demo"]
            },
            scripts: {
                files: ["src/js/**/*.js", "src/html/**/*.html"],
                tasks: ["default"]
            }
        }
    });

    grunt.registerTask("default", ["clean:dist", "ngtemplates", "concat:all", "uglify", "sass", "cssmin"]);

};