/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-sql-js/sql_connection */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JSQLConnection = io.vertx.ext.sql.SQLConnection;
var UpdateResult = io.vertx.ext.sql.UpdateResult;
var ResultSet = io.vertx.ext.sql.ResultSet;

/**
 Represents a connection to a SQL database

 @class
*/
var SQLConnection = function(j_val) {

  var j_sQLConnection = j_val;
  var that = this;

  /**
   Sets the auto commit flag for this connection. True by default.

   @public
   @param autoCommit {boolean} the autoCommit flag, true by default. 
   @param resultHandler {function} the handler which is called once this operation completes. 
   @return {SQLConnection}
   */
  this.setAutoCommit = function(autoCommit, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_sQLConnection["setAutoCommit(boolean,io.vertx.core.Handler)"](autoCommit, function(ar) {
      if (ar.succeeded()) {
        resultHandler(null, null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Executes the given SQL statement

   @public
   @param sql {string} the SQL to execute. For example <code>CREATE TABLE IF EXISTS table ...</code> 
   @param resultHandler {function} the handler which is called once this operation completes. 
   @return {SQLConnection}
   */
  this.execute = function(sql, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_sQLConnection["execute(java.lang.String,io.vertx.core.Handler)"](sql, function(ar) {
      if (ar.succeeded()) {
        resultHandler(null, null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Executes the given SQL <code>SELECT</code> statement which returns the results of the query.

   @public
   @param sql {string} the SQL to execute. For example <code>SELECT * FROM table ...</code>. 
   @param resultHandler {function} the handler which is called once the operation completes. It will return a <code>ResultSet</code>. 
   @return {SQLConnection}
   */
  this.query = function(sql, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_sQLConnection["query(java.lang.String,io.vertx.core.Handler)"](sql, function(ar) {
      if (ar.succeeded()) {
        resultHandler(utils.convReturnDataObject(ar.result()), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Executes the given SQL <code>SELECT</code> prepared statement which returns the results of the query.

   @public
   @param sql {string} the SQL to execute. For example <code>SELECT * FROM table ...</code>. 
   @param params {todo} these are the parameters to fill the statement. 
   @param resultHandler {function} the handler which is called once the operation completes. It will return a <code>ResultSet</code>. 
   @return {SQLConnection}
   */
  this.queryWithParams = function(sql, params, resultHandler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'function') {
      j_sQLConnection["queryWithParams(java.lang.String,io.vertx.core.json.JsonArray,io.vertx.core.Handler)"](sql, utils.convParamJsonArray(params), function(ar) {
      if (ar.succeeded()) {
        resultHandler(utils.convReturnDataObject(ar.result()), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Executes the given SQL statement which may be an <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code>
   statement.

   @public
   @param sql {string} the SQL to execute. For example <code>INSERT INTO table ...</code> 
   @param resultHandler {function} the handler which is called once the operation completes. 
   @return {SQLConnection}
   */
  this.update = function(sql, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_sQLConnection["update(java.lang.String,io.vertx.core.Handler)"](sql, function(ar) {
      if (ar.succeeded()) {
        resultHandler(utils.convReturnDataObject(ar.result()), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Executes the given prepared statement which may be an <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code>
   statement with the given parameters

   @public
   @param sql {string} the SQL to execute. For example <code>INSERT INTO table ...</code> 
   @param params {todo} these are the parameters to fill the statement. 
   @param resultHandler {function} the handler which is called once the operation completes. 
   @return {SQLConnection}
   */
  this.updateWithParams = function(sql, params, resultHandler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'function') {
      j_sQLConnection["updateWithParams(java.lang.String,io.vertx.core.json.JsonArray,io.vertx.core.Handler)"](sql, utils.convParamJsonArray(params), function(ar) {
      if (ar.succeeded()) {
        resultHandler(utils.convReturnDataObject(ar.result()), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Calls the given SQL <code>PROCEDURE</code> which returns the result from the procedure.

   @public
   @param sql {string} the SQL to execute. For example <code>{call getEmpName (?, ?)}</code>. 
   @param resultHandler {function} the handler which is called once the operation completes. It will return a <code>ResultSet</code>. 
   @return {SQLConnection}
   */
  this.call = function(sql, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_sQLConnection["call(java.lang.String,io.vertx.core.Handler)"](sql, function(ar) {
      if (ar.succeeded()) {
        resultHandler(utils.convReturnDataObject(ar.result()), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Calls the given SQL <code>PROCEDURE</code> which returns the result from the procedure.

   @public
   @param sql {string} the SQL to execute. For example <code>{call getEmpName (?, ?)}</code>. 
   @param params {todo} these are the parameters to fill the statement. 
   @param outputs {todo} these are the outputs to fill the statement. 
   @param resultHandler {function} the handler which is called once the operation completes. It will return a <code>ResultSet</code>. 
   @return {SQLConnection}
   */
  this.callWithParams = function(sql, params, outputs, resultHandler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'object' && __args[2] instanceof Array && typeof __args[3] === 'function') {
      j_sQLConnection["callWithParams(java.lang.String,io.vertx.core.json.JsonArray,io.vertx.core.json.JsonArray,io.vertx.core.Handler)"](sql, utils.convParamJsonArray(params), utils.convParamJsonArray(outputs), function(ar) {
      if (ar.succeeded()) {
        resultHandler(utils.convReturnDataObject(ar.result()), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Closes the connection. Important to always close the connection when you are done so it's returned to the pool.

   @public
   @param handler {function} the handler called when this operation completes. 
   */
  this.close = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_sQLConnection["close()"]();
    }  else if (__args.length === 1 && typeof __args[0] === 'function') {
      j_sQLConnection["close(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        __args[0](null, null);
      } else {
        __args[0](null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Commits all changes made since the previous commit/rollback.

   @public
   @param handler {function} the handler called when this operation completes. 
   @return {SQLConnection}
   */
  this.commit = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_sQLConnection["commit(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Rolls back all changes made since the previous commit/rollback.

   @public
   @param handler {function} the handler called when this operation completes. 
   @return {SQLConnection}
   */
  this.rollback = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_sQLConnection["rollback(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Batch simple SQL strings and execute the batch where the async result contains a array of Integers.

   @public
   @param sqlStatements {Array.<string>} sql statement 
   @param handler {function} the result handler 
   @return {SQLConnection}
   */
  this.batch = function(sqlStatements, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'function') {
      j_sQLConnection["batch(java.util.List,io.vertx.core.Handler)"](sqlStatements, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Batch a prepared statement with all entries from the args list. Each entry is a batch.
   The operation completes with the execution of the batch where the async result contains a array of Integers.

   @public
   @param sqlStatement {string} sql statement 
   @param args {Array.<todo>} the prepared statement arguments 
   @param handler {function} the result handler 
   @return {SQLConnection}
   */
  this.batchWithParams = function(sqlStatement, args, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'function') {
      j_sQLConnection["batchWithParams(java.lang.String,java.util.List,io.vertx.core.Handler)"](sqlStatement, utils.convParamListJsonArray(args), function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Batch a callable statement with all entries from the args list. Each entry is a batch.
   The size of the lists inArgs and outArgs MUST be the equal.
   The operation completes with the execution of the batch where the async result contains a array of Integers.

   @public
   @param sqlStatement {string} sql statement 
   @param inArgs {Array.<todo>} the callable statement input arguments 
   @param outArgs {Array.<todo>} the callable statement output arguments 
   @param handler {function} the result handler 
   @return {SQLConnection}
   */
  this.batchCallableWithParams = function(sqlStatement, inArgs, outArgs, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'object' && __args[2] instanceof Array && typeof __args[3] === 'function') {
      j_sQLConnection["batchCallableWithParams(java.lang.String,java.util.List,java.util.List,io.vertx.core.Handler)"](sqlStatement, utils.convParamListJsonArray(inArgs), utils.convParamListJsonArray(outArgs), function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_sQLConnection;
};

// We export the Constructor function
module.exports = SQLConnection;