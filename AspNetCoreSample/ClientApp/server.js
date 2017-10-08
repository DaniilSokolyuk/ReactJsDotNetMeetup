/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant 
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

// All JavaScript in here will be loaded server-side

// Expose components globally so ReactJS.NET can use them
//import React from 'react';
//import ReactDOM from 'react-dom';
//import ReactDOMServer from 'react-dom/server';


global.React = require('react');
global.ReactDOM = require('react-dom');
global.ReactDOMServer = require('react-dom/server');

var Components = require('expose?Components!./components');